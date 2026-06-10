import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { buscarPost } from "@/lib/supabase";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await buscarPost(params.slug);
  if (!post) return { title: "Artigo não encontrado | MG Perícias" };
  return {
    title: `${post.titulo} | MG Perícias`,
    description: post.resumo,
  };
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await buscarPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <article className="wrap" style={{ maxWidth: 760, padding: "60px 24px" }}>
        {post.categoria && (
          <span
            style={{
              background: "var(--ambar)",
              color: "#fff",
              fontSize: 12,
              padding: "5px 12px",
              fontWeight: 700,
              letterSpacing: ".05em",
            }}
          >
            {post.categoria}
          </span>
        )}
        <h1
          style={{
            fontSize: 38,
            color: "var(--grafite)",
            margin: "20px 0 14px",
            lineHeight: 1.2,
          }}
        >
          {post.titulo}
        </h1>
        <p style={{ color: "#999", fontSize: 14, marginBottom: 30 }}>
          {new Date(post.criado_em).toLocaleDateString("pt-BR")}
        </p>
        {post.imagem_capa && (
          <img
            src={post.imagem_capa}
            alt={post.titulo}
            style={{ width: "100%", borderRadius: 6, marginBottom: 30 }}
          />
        )}
        <div
          className="post-conteudo"
          dangerouslySetInnerHTML={{ __html: post.conteudo }}
        />
        <style>{`
          .post-conteudo { font-size: 17px; color: #333; line-height: 1.8; }
          .post-conteudo h2 { font-size: 26px; font-weight: 800; color: var(--grafite); margin: 1.4em 0 0.6em; }
          .post-conteudo p { margin-bottom: 1em; }
          .post-conteudo ul, .post-conteudo ol { margin: 0 0 1em 1.4em; }
          .post-conteudo img { max-width: 100%; height: auto; border-radius: 6px; margin: 1.2em 0; }
          .post-conteudo strong { font-weight: 700; }
        `}</style>
        <p style={{ marginTop: 40 }}>
          <a href="/blog" className="ler" style={{ color: "var(--ambar)", fontWeight: 700 }}>
            ‹ Voltar ao blog
          </a>
        </p>
      </article>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
