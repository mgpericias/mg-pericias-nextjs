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
  servicos: string[];
  generico: boolean;
};

type CuradoriaAvaliacao = {
  servicos: string[];
  generico: boolean;
};

const CURADORIA_POR_AUTOR: Record<string, CuradoriaAvaliacao> = {
  "elci pimentel": {
    servicos: [
      "gestao-fiscalizacao-obras",
      "mapeamento-de-fachadas",
      "inspecao-preliminar-fachada",
    ],
    generico: false,
  },
  "lucneia branquinho": {
    servicos: [
      "laudo-auditoria-construcao",
      "parecer-tecnico-engenharia",
      "vistoria-recebimento-chaves",
    ],
    generico: false,
  },
  "neimar hubner leite": {
    servicos: ["gestao-fiscalizacao-obras"],
    generico: true,
  },
  "flavia silva pereira": {
    servicos: [
      "gestao-fiscalizacao-obras",
      "mapeamento-de-fachadas",
      "inspecao-preliminar-fachada",
    ],
    generico: false,
  },
  "caroliny brito": {
    servicos: ["gestao-fiscalizacao-obras", "laudo-inspecao-predial"],
    generico: true,
  },
};

function normalizarAutor(autor: string): string {
  return autor.trim().toLowerCase();
}

function enriquecerAvaliacao(avaliacao: Omit<Avaliacao, "servicos" | "generico">): Avaliacao {
  const curadoria = CURADORIA_POR_AUTOR[normalizarAutor(avaliacao.autor)];
  return {
    ...avaliacao,
    servicos: curadoria?.servicos ?? [],
    generico: curadoria?.generico ?? false,
  };
}

function embaralharComSeed<T>(itens: T[], seed: string): T[] {
  const copia = [...itens];
  let estado = seed.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0) || 1;

  for (let i = copia.length - 1; i > 0; i--) {
    estado = (estado * 9301 + 49297) % 233280;
    const j = Math.floor((estado / 233280) * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }

  return copia;
}

function enriquecerResumo(resumo: ResumoAvaliacoes): ResumoAvaliacoes {
  return {
    ...resumo,
    avaliacoes: resumo.avaliacoes.map((a) =>
      "servicos" in a && Array.isArray(a.servicos)
        ? (a as Avaliacao)
        : enriquecerAvaliacao(a)
    ),
  };
}

export function selecionarAvaliacoes(
  avaliacoes: Avaliacao[],
  servicoAtual?: string
): Avaliacao[] {
  if (!servicoAtual || avaliacoes.length === 0) return avaliacoes;

  const especificas = avaliacoes.filter((a) =>
    a.servicos.includes(servicoAtual)
  );
  const usadas = new Set(especificas);
  const complementos: Avaliacao[] = [];

  if (especificas.length < 4) {
    const genericos = embaralharComSeed(
      avaliacoes.filter((a) => !usadas.has(a) && a.generico),
      `${servicoAtual}-generico`
    );
    for (const avaliacao of genericos) {
      if (especificas.length + complementos.length >= 4) break;
      complementos.push(avaliacao);
      usadas.add(avaliacao);
    }
  }

  while (especificas.length + complementos.length < 3) {
    const restantes = avaliacoes
      .filter((a) => !usadas.has(a))
      .sort((a, b) => b.nota - a.nota || a.autor.localeCompare(b.autor));
    if (restantes.length === 0) break;

    const melhorNota = restantes[0].nota;
    const candidatos = embaralharComSeed(
      restantes.filter((a) => a.nota === melhorNota),
      `${servicoAtual}-nota-${melhorNota}-${complementos.length}`
    );
    complementos.push(candidatos[0]);
    usadas.add(candidatos[0]);
  }

  return [...especificas, ...complementos];
}

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

  const avaliacoes: Avaliacao[] = (json.reviews ?? []).map((r: any) =>
    enriquecerAvaliacao({
      autor: r.authorAttribution?.displayName ?? "Cliente Google",
      nota: r.rating ?? 5,
      texto: r.text?.text ?? r.originalText?.text ?? "",
      data: r.relativePublishTimeDescription ?? "",
      foto_autor: r.authorAttribution?.photoUri,
    })
  );

  return {
    nota_media: json.rating ?? 0,
    total: json.userRatingCount ?? 0,
    avaliacoes,
    atualizado_em: new Date().toISOString(),
  };
}

export async function getAvaliacoes(): Promise<ResumoAvaliacoes | null> {
  const cache = await lerCache();
  if (cache) return enriquecerResumo(cache);
  try {
    const fresco = await buscarNoGoogle();
    await gravarCache(fresco);
    return enriquecerResumo(fresco);
  } catch {
    try {
      const db = getSupabase();
      const { data } = await db
        .from("avaliacoes_cache")
        .select("payload")
        .eq("place_id", PLACE_ID)
        .single();
      if (data?.payload) return enriquecerResumo(data.payload as ResumoAvaliacoes);
    } catch {
      /* sem cache disponível */
    }
    return null;
  }
}
