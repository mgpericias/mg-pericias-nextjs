"use client";

import { useState } from "react";

type Props = {
  origem: string;
  submitTexto: string;
  sucessoTexto: string;
  whatsappUrl: string;
};

export default function FormularioLead({
  origem,
  submitTexto,
  sucessoTexto,
  whatsappUrl,
}: Props) {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [condominio, setCondominio] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  async function enviar(e: React.FormEvent) {
    e.preventDefault();
    if (!nome.trim() || !whatsapp.trim()) {
      setErro("Preencha nome e WhatsApp.");
      return;
    }
    setEnviando(true);
    setErro("");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nome: nome.trim(),
          whatsapp: whatsapp.trim(),
          condominio: condominio.trim() || null,
          origem,
        }),
      });
      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.erro || "Falha ao enviar");
      }
      setEnviado(true);
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Erro ao enviar. Tente novamente.");
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="lp-form-sucesso">
        <p>{sucessoTexto}</p>
        <a
          href={whatsappUrl}
          className="btn lp-btn-wpp"
          target="_blank"
          rel="noopener noreferrer"
        >
          FALAR AGORA NO WHATSAPP
        </a>
      </div>
    );
  }

  return (
    <form className="lp-form" onSubmit={enviar}>
      <input
        type="text"
        placeholder="Nome*"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="tel"
        placeholder="WhatsApp*"
        value={whatsapp}
        onChange={(e) => setWhatsapp(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do condomínio (opcional)"
        value={condominio}
        onChange={(e) => setCondominio(e.target.value)}
      />
      <button type="submit" className="btn" disabled={enviando}>
        {enviando ? "ENVIANDO..." : submitTexto}
      </button>
      {erro && <p className="lp-form-erro">{erro}</p>}
    </form>
  );
}
