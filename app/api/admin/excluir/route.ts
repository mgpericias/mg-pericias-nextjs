import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

function autorizado(req: Request): boolean {
  return req.headers.get("x-admin-senha") === process.env.ADMIN_SENHA;
}

export async function POST(req: Request) {
  if (!autorizado(req)) {
    return NextResponse.json({ erro: "Não autorizado" }, { status: 401 });
  }

  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json({ erro: "ID obrigatório" }, { status: 400 });
    }

    const db = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    const { error } = await db.from("posts").delete().eq("id", id);

    if (error) {
      return NextResponse.json({ erro: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ erro: "Falha ao excluir" }, { status: 500 });
  }
}
