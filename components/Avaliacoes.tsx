"use client";

import { useCallback, useEffect, useMemo, useState, type CSSProperties } from "react";
import { selecionarAvaliacoes, type ResumoAvaliacoes } from "@/lib/avaliacoes";

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

type Props = {
  dados: ResumoAvaliacoes | null;
  servicoAtual?: string;
};

export default function Avaliacoes({ dados, servicoAtual }: Props) {
  const todas = dados?.avaliacoes ?? [];
  const avaliacoes = useMemo(
    () => selecionarAvaliacoes(todas, servicoAtual),
    [todas, servicoAtual]
  );
  const temEspecificas =
    !!servicoAtual &&
    todas.some((a) => a.servicos.includes(servicoAtual));

  const total = avaliacoes.length;
  const [pos, setPos] = useState(total);
  const [visiveis, setVisiveis] = useState(3);
  const [animar, setAnimar] = useState(true);

  useEffect(() => {
    const atualizar = () => setVisiveis(window.innerWidth <= 880 ? 1 : 3);
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, []);

  useEffect(() => {
    setPos(total);
  }, [total]);

  const slides =
    total > 0 ? [...avaliacoes, ...avaliacoes, ...avaliacoes] : [];

  const avancar = useCallback(() => {
    if (total === 0) return;
    setAnimar(true);
    setPos((p) => p + 1);
  }, [total]);

  const voltar = useCallback(() => {
    if (total === 0) return;
    setAnimar(true);
    setPos((p) => p - 1);
  }, [total]);

  const aoFimTransicao = useCallback(() => {
    if (total === 0) return;
    if (pos >= total * 2) {
      setAnimar(false);
      requestAnimationFrame(() => {
        setPos((p) => p - total);
        requestAnimationFrame(() => setAnimar(true));
      });
    } else if (pos < total) {
      setAnimar(false);
      requestAnimationFrame(() => {
        setPos((p) => p + total);
        requestAnimationFrame(() => setAnimar(true));
      });
    }
  }, [pos, total]);

  if (!dados || dados.total === 0 || avaliacoes.length === 0) return null;

  return (
    <section className="aval center" id="avaliacoes">
      <div className="wrap">
        <h2 className="sec-titulo">
          O que dizem nossos <span className="ambar">clientes</span>
        </h2>
        <p className="sec-sub">
          {temEspecificas
            ? "Quem já contratou a MG fala por nós."
            : "Avaliações reais de síndicos e administradoras na Grande Vitória."}
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

        <div className="aval-carrossel">
          <button
            type="button"
            className="aval-seta"
            onClick={voltar}
            aria-label="Avaliação anterior"
          >
            ‹
          </button>

          <div
            className="aval-janela"
            style={
              {
                "--visiveis": visiveis,
                "--total-slides": slides.length,
              } as CSSProperties
            }
          >
            <div
              className={`aval-trilho${animar ? " aval-trilho--animar" : ""}`}
              style={{
                transform: `translateX(-${(pos / slides.length) * 100}%)`,
              }}
              onTransitionEnd={aoFimTransicao}
            >
              {slides.map((a, i) => (
                <div className="aval-slide" key={`${a.autor}-${i}`}>
                  <div className="aval-card">
                    <Estrelas nota={a.nota} />
                    <p>{a.texto}</p>
                    <div className="autor">{a.autor}</div>
                    {a.data && <div className="data">{a.data}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            className="aval-seta"
            onClick={avancar}
            aria-label="Próxima avaliação"
          >
            ›
          </button>
        </div>

        <a
          className="btn"
          href={LINK_AVALIAR}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "transparent",
            border: "2px solid var(--grafite)",
            color: "var(--grafite)",
          }}
        >
          VER TODAS NO GOOGLE
        </a>
      </div>

      <style jsx>{`
        .aval-carrossel {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
        }

        .aval-janela {
          flex: 1;
          overflow: hidden;
          min-width: 0;
        }

        .aval-trilho {
          display: flex;
          width: calc(100% * var(--total-slides) / var(--visiveis));
          will-change: transform;
        }

        .aval-trilho--animar {
          transition: transform 0.45s ease;
        }

        .aval-slide {
          flex: 0 0 calc(100% / var(--total-slides));
          padding: 0 13px;
          box-sizing: border-box;
          text-align: left;
        }

        .aval-seta {
          flex-shrink: 0;
          width: 44px;
          height: 44px;
          border: 2px solid var(--grafite);
          border-radius: 50%;
          background: #fff;
          color: var(--grafite);
          font-size: 28px;
          line-height: 1;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 0 2px;
          transition: background 0.2s, color 0.2s;
        }

        .aval-seta:hover {
          background: var(--grafite);
          color: #fff;
        }

        @media (max-width: 880px) {
          .aval-carrossel {
            gap: 8px;
          }

          .aval-slide {
            padding: 0 4px;
          }

          .aval-seta {
            width: 38px;
            height: 38px;
            font-size: 24px;
          }
        }
      `}</style>
    </section>
  );
}
