import type { ResumoAvaliacoes } from "@/lib/avaliacoes";

const LINK_AVALIAR =
  "https://search.google.com/local/writereview?placeid=ChIJVZ9rPNUZuAARsXO7HdBZZsc";

function Estrelas({ nota }: { nota: number }) {
  const cheias = Math.round(nota);
  return (
    <span className="estrelas" aria-label={`${nota} de 5 estrelas`}>
      {"★".repeat(cheias)}
    </span>
  );
}

export default function Avaliacoes({ dados }: { dados: ResumoAvaliacoes | null }) {
  if (!dados || dados.total === 0) return null;

  return (
    <section className="aval center" id="avaliacoes">
      <div className="wrap">
        <h2 className="sec-titulo">
          O que dizem nossos <span className="ambar">clientes</span>
        </h2>
        <p className="sec-sub">
          Avaliações reais de síndicos e administradoras na Grande Vitória.
        </p>
        <div className="aval-resumo">
          <span className="nota">
            {dados.nota_media.toFixed(1).replace(".", ",")}
          </span>
          <div style={{ textAlign: "left" }}>
            <Estrelas nota={dados.nota_media} />
            <div className="meta">{dados.total} avaliações no Google</div>
          </div>
        </div>
        <div className="aval-grid">
          {dados.avaliacoes.slice(0, 6).map((a, i) => (
            <div className="aval-card" key={i}>
              <Estrelas nota={a.nota} />
              <p>{a.texto}</p>
              <div className="autor">{a.autor}</div>
              {a.data && <div className="data">{a.data}</div>}
            </div>
          ))}
        </div>
        <a
          className="btn"
          href={LINK_AVALIAR}
          target="_blank"
          rel="noopener noreferrer"
          style={{ background: "transparent", border: "2px solid var(--grafite)", color: "var(--grafite)" }}
        >
          VER TODAS NO GOOGLE
        </a>
      </div>
    </section>
  );
}
