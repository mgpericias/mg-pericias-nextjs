import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { nome, whatsapp, condominio, origem } = await req.json();

    if (!nome?.trim() || !whatsapp?.trim()) {
      return NextResponse.json({ erro: "Campos obrigatórios" }, { status: 400 });
    }

    const dados = {
      nome: nome.trim(),
      whatsapp: whatsapp.trim(),
      condominio: condominio?.trim() || null,
      origem: origem?.trim() || null,
    };

    let dbOk = false;
    let emailOk = false;

    try {
      const db = createClient(
        process.env.SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        { auth: { persistSession: false } }
      );
      const { error } = await db.from("leads").insert(dados);
      if (!error) dbOk = true;
    } catch {
      /* tenta e-mail mesmo se o banco falhar */
    }

    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: "Site MG Perícias <contato@mgpericias.com.br>",
        to: ["mgpericias2021@gmail.com"],
        subject: `Novo lead - ${dados.origem || "site"}`,
        text: `Nome: ${dados.nome}\nWhatsApp: ${dados.whatsapp}\nCondomínio: ${dados.condominio || "—"}\nOrigem: ${dados.origem || "—"}`,
      });
      emailOk = true;
    } catch {
      /* erro de e-mail tratado abaixo */
    }

    if (!dbOk && !emailOk) {
      return NextResponse.json({ erro: "Falha ao registrar" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ erro: "Falha ao registrar" }, { status: 500 });
  }
}
