import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

function autorizado(req: Request): boolean {
  return req.headers.get("x-admin-senha") === process.env.ADMIN_SENHA;
}

function gerarSlug(titulo: string): string {
  return titulo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export async function POST(req: Request) {
  if (!autorizado(req)) {
    return NextResponse.json({ erro: "Não autorizado" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      id,
      titulo,
      slug,
      resumo,
      conteudo,
      imagem_capa,
      categoria,
      publicado,
    } = body;

    if (!titulo?.trim()) {
      return NextResponse.json({ erro: "Título obrigatório" }, { status: 400 });
    }

    const slugFinal = (slug?.trim() || gerarSlug(titulo)).replace(/^-+|-+$/g, "");

    if (!slugFinal) {
      return NextResponse.json({ erro: "Slug inválido" }, { status: 400 });
    }

    const db = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    const registro = {
      titulo: titulo.trim(),
      slug: slugFinal,
      resumo: resumo ?? "",
      conteudo: conteudo ?? "",
      imagem_capa: imagem_capa || null,
      categoria: categoria || null,
      publicado: Boolean(publicado),
    };

    if (id) {
      const { data, error } = await db
        .from("posts")
        .update(registro)
        .eq("id", id)
        .select()
        .single();

      if (error) {
        return NextResponse.json({ erro: error.message }, { status: 500 });
      }

      return NextResponse.json({ ok: true, post: data });
    }

    const { data, error } = await db.from("posts").insert(registro).select().single();

    if (error) {
      return NextResponse.json({ erro: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, post: data });
  } catch {
    return NextResponse.json({ erro: "Falha ao salvar" }, { status: 500 });
  }
}
