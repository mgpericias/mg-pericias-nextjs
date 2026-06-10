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
    const form = await req.formData();
    const file = form.get("file");

    if (!file || !(file instanceof File)) {
      return NextResponse.json({ erro: "Arquivo não enviado" }, { status: 400 });
    }

    const nomeSanitizado = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const caminho = `${Date.now()}-${nomeSanitizado}`;
    const bytes = await file.arrayBuffer();

    const db = createClient(
      process.env.SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!,
      { auth: { persistSession: false } }
    );

    const { error } = await db.storage.from("blog").upload(caminho, Buffer.from(bytes), {
      contentType: file.type || "application/octet-stream",
      upsert: false,
    });

    if (error) {
      return NextResponse.json({ erro: error.message }, { status: 500 });
    }

    const { data } = db.storage.from("blog").getPublicUrl(caminho);
    return NextResponse.json({ url: data.publicUrl });
  } catch {
    return NextResponse.json({ erro: "Falha no upload" }, { status: 500 });
  }
}
