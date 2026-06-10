import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { listarPosts } from "@/lib/supabase";
import type { Metadata } from "next";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Blog | MG Perícias — Engenharia Diagnóstica",
  description:
    "Orientações práticas para síndicos e administradoras manterem condomínios seguros e valorizados.",
};

export default async function Blog() {
  const posts = await listarPosts();

  return (
    <>
      <Header />
      <section className="center" style={{ background: "#fff" }}>
        <div className="wrap">
          <h2 className="sec-titulo">Blog</h2>
          <p className="sec-sub">
            Orientações práticas para síndicos e administradoras manterem
            condomínios seguros e valorizados.
          </p>

          {posts.length === 0 ? (
            <p style={{ color: "#666" }}>Em breve, novos artigos.</p>
          ) : (
            <div className="blog-grid">
              {posts.map((p) => (
                <a className="post" key={p.id} href={`/blog/${p.slug}`}>
                  <div
                    className="capa"
                    style={
                      p.imagem_capa
                        ? { backgroundImage: `url(${p.imagem_capa})` }
                        : undefined
                    }
                  >
                    {p.categoria && <span className="cat">{p.categoria}</span>}
                  </div>
                  <div className="body">
                    <h3>{p.titulo}</h3>
                    <p>{p.resumo}</p>
                    <span className="ler">Ler artigo ›</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
