// lib/avaliacoes.ts
// Busca avaliações reais do perfil Google da MG Perícias via Places API (New),
// com cache no Supabase para consultar o Google no máximo 1x por dia.
//
// Variáveis em .env.local (SEM NEXT_PUBLIC_):
//   GOOGLE_PLACES_API_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

import { getSupabase } from "./supabase";

const PLACE_ID = "ChIJVZ9rPNUZuAARsXO7HdBZZsc";
const CACHE_HORAS = 24;

export type Avaliacao = {
  autor: string;
  nota: number;
  texto: string;
  data: string;
  foto_autor?: string;
};

export type ResumoAvaliacoes = {
  nota_media: number;
  total: number;
  avaliacoes: Avaliacao[];
  atualizado_em: string;
};

async function lerCache(): Promise<ResumoAvaliacoes | null> {
  try {
    const db = getSupabase();
    const { data } = await db
      .from("avaliacoes_cache")
      .select("payload, atualizado_em")
      .eq("place_id", PLACE_ID)
      .single();
    if (!data) return null;
    const idadeMs = Date.now() - new Date(data.atualizado_em).getTime();
    if (idadeMs > CACHE_HORAS * 60 * 60 * 1000) return null;
    return data.payload as ResumoAvaliacoes;
  } catch {
    return null;
  }
}

async function gravarCache(resumo: ResumoAvaliacoes) {
  try {
    const db = getSupabase();
    await db.from("avaliacoes_cache").upsert({
      place_id: PLACE_ID,
      payload: resumo,
      atualizado_em: new Date().toISOString(),
    });
  } catch {
    /* falha de cache não deve quebrar a página */
  }
}

async function buscarNoGoogle(): Promise<ResumoAvaliacoes> {
  const url = `https://places.googleapis.com/v1/places/${PLACE_ID}`;
  const res = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": process.env.GOOGLE_PLACES_API_KEY!,
      "X-Goog-FieldMask": "rating,userRatingCount,reviews",
      "Accept-Language": "pt-BR",
    },
    next: { revalidate: 60 * 60 * 24 },
  });
  if (!res.ok) throw new Error(`Places API retornou ${res.status}`);
  const json = await res.json();

  const avaliacoes: Avaliacao[] = (json.reviews ?? []).map((r: any) => ({
    autor: r.authorAttribution?.displayName ?? "Cliente Google",
    nota: r.rating ?? 5,
    texto: r.text?.text ?? r.originalText?.text ?? "",
    data: r.relativePublishTimeDescription ?? "",
    foto_autor: r.authorAttribution?.photoUri,
  }));

  return {
    nota_media: json.rating ?? 0,
    total: json.userRatingCount ?? 0,
    avaliacoes,
    atualizado_em: new Date().toISOString(),
  };
}

export async function getAvaliacoes(): Promise<ResumoAvaliacoes | null> {
  const cache = await lerCache();
  if (cache) return cache;
  try {
    const fresco = await buscarNoGoogle();
    await gravarCache(fresco);
    return fresco;
  } catch {
    try {
      const db = getSupabase();
      const { data } = await db
        .from("avaliacoes_cache")
        .select("payload")
        .eq("place_id", PLACE_ID)
        .single();
      if (data?.payload) return data.payload as ResumoAvaliacoes;
    } catch {
      /* sem cache disponível */
    }
    return null;
  }
}
