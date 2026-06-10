"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "enviando" | "ok" | "erro">("idle");
  const [form, setForm] = useState({ nome: "", email: "", telefone: "" });

  async function enviar() {
    if (!form.nome || !form.email || !form.telefone) {
      setStatus("erro");
      return;
    }
    setStatus("enviando");
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("ok");
      setForm({ nome: "", email: "", telefone: "" });
    } catch {
      setStatus("erro");
    }
  }

  if (status === "ok") {
    return (
      <div className="form" style={{ justifyContent: "center", textAlign: "center" }}>
        <p style={{ color: "#fff", fontSize: 18 }}>
          Mensagem enviada! Em breve entraremos em contato.
        </p>
      </div>
    );
  }

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Nome e Sobrenome*"
        value={form.nome}
        onChange={(e) => setForm({ ...form, nome: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email*"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Telefone*"
        value={form.telefone}
        onChange={(e) => setForm({ ...form, telefone: e.target.value })}
      />
      <button className="btn" onClick={enviar} disabled={status === "enviando"}>
        {status === "enviando" ? "ENVIANDO..." : "ENVIAR"}
      </button>
      {status === "erro" && (
        <p style={{ color: "#ffb4b4", fontSize: 13 }}>
          Preencha todos os campos e tente novamente.
        </p>
      )}
    </div>
  );
}
