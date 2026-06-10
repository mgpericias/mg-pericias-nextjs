import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

function autorizado(req: Request): boolean {
  return req.headers.get("x-admin-senha") === process.env.ADMIN_SENHA;
}

export async function GET(req: Request) {
  if (!autorizado(req)) {
    return NextResponse.json({ erro: "Não autorizado" }, { status: 401 });
  }

  try {
    const db = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    const { data, error } = await db
      .from("posts")
      .select("*")
      .order("criado_em", { ascending: false });

    if (error) {
      return NextResponse.json({ erro: error.message }, { status: 500 });
    }

    return NextResponse.json({ posts: data ?? [] });
  } catch {
    return NextResponse.json({ erro: "Falha ao listar" }, { status: 500 });
  }
}
