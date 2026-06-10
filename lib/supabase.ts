// lib/supabase.ts
// Cliente Supabase para leitura dos posts do blog.
// Variáveis em .env.local (SEM NEXT_PUBLIC_):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY

import { createClient } from "@supabase/supabase-js";

export function getSupabase() {
  return createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  );
}

export type Post = {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  conteudo: string;
  imagem_capa: string | null;
  categoria: string | null;
  publicado: boolean;
  criado_em: string;
};

export async function listarPosts(): Promise<Post[]> {
  try {
    const db = getSupabase();
    const { data } = await db
      .from("posts")
      .select("*")
      .eq("publicado", true)
      .order("criado_em", { ascending: false });
    return (data as Post[]) ?? [];
  } catch {
    return [];
  }
}

export async function buscarPost(slug: string): Promise<Post | null> {
  try {
    const db = getSupabase();
    const { data } = await db
      .from("posts")
      .select("*")
      .eq("slug", slug)
      .eq("publicado", true)
      .single();
    return (data as Post) ?? null;
  } catch {
    return null;
  }
}
