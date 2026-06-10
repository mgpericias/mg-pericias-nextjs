"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useCallback, useEffect, useRef, useState } from "react";

type Post = {
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

type FormPost = {
  id?: string;
  titulo: string;
  slug: string;
  resumo: string;
  conteudo: string;
  imagem_capa: string;
  categoria: string;
  publicado: boolean;
};

const formVazio = (): FormPost => ({
  titulo: "",
  slug: "",
  resumo: "",
  conteudo: "",
  imagem_capa: "",
  categoria: "",
  publicado: false,
});

function gerarSlug(titulo: string): string {
  return titulo
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function EditorPost({
  conteudo,
  onChange,
  senha,
}: {
  conteudo: string;
  onChange: (html: string) => void;
  senha: string;
}) {
  const inputImagemRef = useRef<HTMLInputElement>(null);

  const editor = useEditor({
    extensions: [StarterKit, Image],
    content: conteudo,
    immediatelyRender: false,
    onUpdate: ({ editor: ed }) => onChange(ed.getHTML()),
  });

  useEffect(() => {
    if (editor && conteudo !== editor.getHTML()) {
      editor.commands.setContent(conteudo || "");
    }
  }, [conteudo, editor]);

  const uploadImagem = useCallback(
    async (file: File) => {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "x-admin-senha": senha },
        body: form,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.erro || "Falha no upload");
      return json.url as string;
    },
    [senha]
  );

  const inserirImagem = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !editor) return;
    try {
      const url = await uploadImagem(file);
      editor.chain().focus().setImage({ src: url }).run();
    } catch (err) {
      alert(err instanceof Error ? err.message : "Erro ao enviar imagem");
    }
    e.target.value = "";
  };

  if (!editor) return <p>Carregando editor…</p>;

  return (
    <div className="editor-wrap">
      <div className="editor-toolbar">
        <button type="button" onClick={() => editor.chain().focus().toggleBold().run()} className={editor.isActive("bold") ? "ativo" : ""}>
          Negrito
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive("italic") ? "ativo" : ""}>
          Itálico
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive("heading", { level: 2 }) ? "ativo" : ""}>
          Título
        </button>
        <button type="button" onClick={() => editor.chain().focus().toggleBulletList().run()} className={editor.isActive("bulletList") ? "ativo" : ""}>
          Lista
        </button>
        <button type="button" onClick={() => inputImagemRef.current?.click()}>
          Inserir imagem
        </button>
        <input ref={inputImagemRef} type="file" accept="image/*" hidden onChange={inserirImagem} />
      </div>
      <EditorContent editor={editor} className="editor-area" />
    </div>
  );
}

export default function AdminPage() {
  const [senha, setSenha] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [form, setForm] = useState<FormPost>(formVazio());
  const [editando, setEditando] = useState(false);
  const [erroLogin, setErroLogin] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [salvando, setSalvando] = useState(false);
  const [enviandoCapa, setEnviandoCapa] = useState(false);
  const inputCapaRef = useRef<HTMLInputElement>(null);

  const headers = useCallback(
    () => ({
      "Content-Type": "application/json",
      "x-admin-senha": senha,
    }),
    [senha]
  );

  const carregarPosts = useCallback(async () => {
    const res = await fetch("/api/admin/posts", {
      headers: { "x-admin-senha": senha },
    });
    if (!res.ok) return false;
    const json = await res.json();
    setPosts(json.posts ?? []);
    return true;
  }, [senha]);

  const entrar = async (e: React.FormEvent) => {
    e.preventDefault();
    setErroLogin("");
    const ok = await carregarPosts();
    if (ok) {
      setAutenticado(true);
    } else {
      setErroLogin("Senha incorreta");
    }
  };

  const novoPost = () => {
    setForm(formVazio());
    setEditando(true);
    setMensagem("");
  };

  const editarPost = (post: Post) => {
    setForm({
      id: post.id,
      titulo: post.titulo,
      slug: post.slug,
      resumo: post.resumo ?? "",
      conteudo: post.conteudo ?? "",
      imagem_capa: post.imagem_capa ?? "",
      categoria: post.categoria ?? "",
      publicado: post.publicado,
    });
    setEditando(true);
    setMensagem("");
  };

  const handleUploadCapa = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setEnviandoCapa(true);
    setMensagem("");
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        headers: { "x-admin-senha": senha },
        body: formData,
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.erro || "Falha no upload");
      setForm((f) => ({ ...f, imagem_capa: json.url }));
    } catch (err) {
      setMensagem(err instanceof Error ? err.message : "Erro ao enviar capa");
    } finally {
      setEnviandoCapa(false);
      e.target.value = "";
    }
  };

  const salvar = async (e: React.FormEvent) => {
    e.preventDefault();
    setSalvando(true);
    setMensagem("");
    try {
      const res = await fetch("/api/admin/publicar", {
        method: "POST",
        headers: headers(),
        body: JSON.stringify({
          id: form.id,
          titulo: form.titulo,
          slug: form.slug || gerarSlug(form.titulo),
          resumo: form.resumo,
          conteudo: form.conteudo,
          imagem_capa: form.imagem_capa || null,
          categoria: form.categoria || null,
          publicado: form.publicado,
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.erro || "Falha ao salvar");
      setMensagem("Post salvo com sucesso!");
      await carregarPosts();
      if (json.post) {
        setForm({
          id: json.post.id,
          titulo: json.post.titulo,
          slug: json.post.slug,
          resumo: json.post.resumo ?? "",
          conteudo: json.post.conteudo ?? "",
          imagem_capa: json.post.imagem_capa ?? "",
          categoria: json.post.categoria ?? "",
          publicado: json.post.publicado,
        });
      }
    } catch (err) {
      setMensagem(err instanceof Error ? err.message : "Erro ao salvar");
    } finally {
      setSalvando(false);
    }
  };

  if (!autenticado) {
    return (
      <main className="admin">
        <div className="admin-card admin-login">
          <h1>Admin — Blog</h1>
          <p>Digite a senha para acessar o painel.</p>
          <form onSubmit={entrar}>
            <input
              type="password"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
            />
            <button type="submit">Entrar</button>
          </form>
          {erroLogin && <p className="admin-erro">{erroLogin}</p>}
        </div>
        <style jsx>{adminStyles}</style>
      </main>
    );
  }

  return (
    <main className="admin">
      <div className="admin-header">
        <h1>Painel do Blog</h1>
        <button type="button" className="btn-sec" onClick={() => setEditando(false)}>
          Ver lista
        </button>
      </div>

      {!editando ? (
        <div className="admin-card">
          <div className="admin-lista-topo">
            <h2>Posts</h2>
            <button type="button" onClick={novoPost}>
              Novo post
            </button>
          </div>
          {posts.length === 0 ? (
            <p className="admin-vazio">Nenhum post ainda.</p>
          ) : (
            <ul className="admin-lista">
              {posts.map((p) => (
                <li key={p.id}>
                  <div>
                    <strong>{p.titulo}</strong>
                    <span className={p.publicado ? "status pub" : "status rasc"}>
                      {p.publicado ? "Publicado" : "Rascunho"}
                    </span>
                  </div>
                  <button type="button" onClick={() => editarPost(p)}>
                    Editar
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <form className="admin-card admin-form" onSubmit={salvar}>
          <h2>{form.id ? "Editar post" : "Novo post"}</h2>

          <label>
            Título
            <input
              required
              value={form.titulo}
              onChange={(e) => {
                const titulo = e.target.value;
                setForm((f) => ({
                  ...f,
                  titulo,
                  slug: f.id ? f.slug : gerarSlug(titulo),
                }));
              }}
            />
          </label>

          <label>
            Slug
            <input
              value={form.slug}
              onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
              placeholder="gerado-automaticamente"
            />
          </label>

          <label>
            Resumo
            <textarea
              rows={3}
              value={form.resumo}
              onChange={(e) => setForm((f) => ({ ...f, resumo: e.target.value }))}
            />
          </label>

          <label>
            Categoria
            <input
              value={form.categoria}
              onChange={(e) => setForm((f) => ({ ...f, categoria: e.target.value }))}
            />
          </label>

          <div className="campo-capa">
            <span>Imagem de capa</span>
            <button type="button" onClick={() => inputCapaRef.current?.click()} disabled={enviandoCapa}>
              {enviandoCapa ? "Enviando…" : "Enviar imagem"}
            </button>
            <input ref={inputCapaRef} type="file" accept="image/*" hidden onChange={handleUploadCapa} />
            {form.imagem_capa && (
              <img src={form.imagem_capa} alt="Capa" className="preview-capa" />
            )}
          </div>

          <label>
            Conteúdo
            <EditorPost
              key={form.id ?? "novo"}
              conteudo={form.conteudo}
              senha={senha}
              onChange={(html) => setForm((f) => ({ ...f, conteudo: html }))}
            />
          </label>

          <label className="check">
            <input
              type="checkbox"
              checked={form.publicado}
              onChange={(e) => setForm((f) => ({ ...f, publicado: e.target.checked }))}
            />
            Publicado
          </label>

          <div className="admin-acoes">
            <button type="submit" disabled={salvando}>
              {salvando ? "Salvando…" : "Salvar"}
            </button>
            <button type="button" className="btn-sec" onClick={() => setEditando(false)}>
              Cancelar
            </button>
          </div>

          {mensagem && (
            <p className={mensagem.includes("sucesso") ? "admin-ok" : "admin-erro"}>
              {mensagem}
            </p>
          )}
        </form>
      )}

      <style jsx global>{`
        .editor-area .ProseMirror {
          min-height: 280px;
          padding: 14px;
          outline: none;
          font-size: 15px;
          line-height: 1.7;
          color: #333;
        }
        .editor-area .ProseMirror h2 {
          font-size: 22px;
          font-weight: 800;
          margin: 1em 0 0.5em;
          color: #333433;
        }
        .editor-area .ProseMirror img {
          max-width: 100%;
          height: auto;
          border-radius: 4px;
          margin: 12px 0;
        }
        .editor-area .ProseMirror ul {
          padding-left: 1.4em;
          margin: 0.6em 0;
        }
      `}</style>
      <style jsx>{adminStyles}</style>
    </main>
  );
}

const adminStyles = `
  .admin {
    min-height: 100vh;
    background: #f4f2ef;
    padding: 40px 24px;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    color: #333433;
  }
  .admin-header {
    max-width: 900px;
    margin: 0 auto 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }
  .admin-header h1 {
    font-size: 28px;
    font-weight: 800;
    margin: 0;
  }
  .admin-card {
    max-width: 900px;
    margin: 0 auto;
    background: #fff;
    border-radius: 6px;
    padding: 32px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  }
  .admin-login {
    max-width: 400px;
    margin-top: 80px;
    text-align: center;
  }
  .admin-login h1 {
    font-size: 24px;
    margin-bottom: 8px;
  }
  .admin-login p {
    color: #666;
    margin-bottom: 20px;
  }
  .admin-login form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .admin-form label {
    display: block;
    margin-bottom: 18px;
    font-weight: 600;
    font-size: 14px;
  }
  .admin-form input[type='text'],
  .admin-form input:not([type]),
  .admin-form input[type='password'],
  .admin-form textarea {
    display: block;
    width: 100%;
    margin-top: 6px;
    padding: 10px 12px;
    border: 1px solid #d8d4cf;
    border-radius: 4px;
    font: inherit;
    font-weight: 400;
    box-sizing: border-box;
  }
  .admin-form textarea {
    resize: vertical;
  }
  .admin-form .check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
  }
  .admin-form .check input {
    width: auto;
    margin: 0;
  }
  .campo-capa {
    margin-bottom: 18px;
  }
  .campo-capa span {
    display: block;
    font-weight: 600;
    font-size: 14px;
    margin-bottom: 8px;
  }
  .preview-capa {
    display: block;
    max-width: 320px;
    margin-top: 12px;
    border-radius: 4px;
  }
  .editor-wrap {
    margin-top: 8px;
    border: 1px solid #d8d4cf;
    border-radius: 4px;
    overflow: hidden;
  }
  .editor-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    padding: 10px;
    background: #f8f7f5;
    border-bottom: 1px solid #d8d4cf;
  }
  .editor-toolbar button {
    padding: 6px 12px;
    border: 1px solid #d8d4cf;
    background: #fff;
    border-radius: 4px;
    font-size: 13px;
    cursor: pointer;
  }
  .editor-toolbar button.ativo {
    background: #c89127;
    color: #fff;
    border-color: #c89127;
  }
  .admin-lista-topo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .admin-lista-topo h2 {
    margin: 0;
    font-size: 20px;
  }
  .admin-lista {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .admin-lista li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    padding: 14px 0;
    border-bottom: 1px solid #eee;
  }
  .admin-lista li:last-child {
    border-bottom: none;
  }
  .status {
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 3px;
  }
  .status.pub {
    background: #e8f5e9;
    color: #2e7d32;
  }
  .status.rasc {
    background: #fff3e0;
    color: #e65100;
  }
  .admin-vazio {
    color: #666;
  }
  .admin-acoes {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  button {
    padding: 10px 20px;
    background: #c89127;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
  }
  button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  .btn-sec {
    background: transparent;
    color: #333433;
    border: 2px solid #333433;
  }
  .admin-erro {
    color: #c0392b;
    margin-top: 12px;
    font-size: 14px;
  }
  .admin-ok {
    color: #2e7d32;
    margin-top: 12px;
    font-size: 14px;
  }
`;
