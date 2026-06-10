// app/api/contato/route.ts
// Recebe o formulário de contato e envia e-mail via Resend.
// Variável em .env.local (SEM NEXT_PUBLIC_): RESEND_API_KEY

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone } = await req.json();

    if (!nome || !email || !telefone) {
      return NextResponse.json({ erro: "Campos obrigatórios" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      // Ajuste o "from" para um domínio verificado no Resend.
      // Enquanto não verificar o domínio, use onboarding@resend.dev para testes.
      from: "Site MG Perícias <contato@mgpericias.com.br>",
      to: ["contato@mgpericias.com.br"],
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      text: `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}`,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ erro: "Falha ao enviar" }, { status: 500 });
  }
}
