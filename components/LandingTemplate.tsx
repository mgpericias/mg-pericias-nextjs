import Link from "next/link";
import Footer from "@/components/Footer";
import Avaliacoes from "@/components/Avaliacoes";
import FormularioLead from "@/components/FormularioLead";
import type { ResumoAvaliacoes } from "@/lib/avaliacoes";

export interface LandingConfig {
  origem: string;
  hero: {
    titulo: string;
    subtitulo: string;
    ctaTexto: string;
    placeholderImagem?: string;
  };
  paraQuem: {
    titulo: string;
    itens: string[];
    fecho?: string;
  };
  solucao: {
    titulo: string;
    texto: string;
    diferenciais: string[];
    autoridade?: string;
  };
  portfolio?: {
    texto: string;
    href: string;
  };
  comoFunciona: {
    titulo: string;
    passos: { numero: string; titulo: string; descricao: string }[];
    reforco?: string;
    ctaTexto?: string;
  };
  urgencia: {
    titulo: string;
    texto: string;
  };
  faq: {
    titulo: string;
    itens: { pergunta: string; resposta: string }[];
  };
  formulario: {
    titulo: string;
    submitTexto: string;
    sucessoTexto: string;
    whatsappUrl: string;
  };
}

export default function LandingTemplate({
  config,
  avaliacoes,
}: {
  config: LandingConfig;
  avaliacoes: ResumoAvaliacoes | null;
}) {
  const {
    hero,
    paraQuem,
    solucao,
    portfolio,
    comoFunciona,
    urgencia,
    faq,
    formulario,
    origem,
  } = config;

  return (
    <>
      <header className="lp-header">
        <div className="wrap nav">
          <a href="/">
            <img
              className="logo"
              src="/images/logo-mgpericias.png"
              alt="MG Perícias"
            />
          </a>
        </div>
      </header>

      <section className="lp-hero">
        <div className="wrap lp-hero-grid">
          <div className="lp-hero-txt">
            <h1>{hero.titulo}</h1>
            <p>{hero.subtitulo}</p>
            <a href="#formulario" className="btn">
              {hero.ctaTexto}
            </a>
          </div>
          <div className="lp-hero-img">
            <div className="lp-img-placeholder">
              {hero.placeholderImagem ?? "Foto: inspeção/equipe"}
            </div>
          </div>
        </div>
      </section>

      <section className="lp-dores center">
        <div className="wrap">
          <h2 className="sec-titulo">{paraQuem.titulo}</h2>
          <ul className="lp-dores-list">
            {paraQuem.itens.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          {paraQuem.fecho && <p className="lp-fecho">{paraQuem.fecho}</p>}
        </div>
      </section>

      <section className="lp-solucao center">
        <div className="wrap">
          <h2 className="sec-titulo">{solucao.titulo}</h2>
          <p className="lp-solucao-txt">{solucao.texto}</p>
          <div className="lp-diffs">
            {solucao.diferenciais.map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
          {solucao.autoridade && (
            <p className="lp-autoridade">{solucao.autoridade}</p>
          )}
        </div>
      </section>

      {portfolio && (
        <section className="lp-portfolio-cta center">
          <div className="wrap">
            <Link href={portfolio.href} className="btn lp-btn-portfolio">
              {portfolio.texto}
            </Link>
          </div>
        </section>
      )}

      <section className="lp-passos center">
        <div className="wrap">
          <h2 className="sec-titulo">{comoFunciona.titulo}</h2>
          <div className="lp-passos-grid">
            {comoFunciona.passos.map((p) => (
              <div className="lp-passo" key={p.numero}>
                <span className="lp-passo-num">{p.numero}</span>
                <h3>{p.titulo}</h3>
                <p>{p.descricao}</p>
              </div>
            ))}
          </div>
          {comoFunciona.reforco && (
            <p className="lp-reforco">{comoFunciona.reforco}</p>
          )}
          {comoFunciona.ctaTexto && (
            <a href="#formulario" className="btn">
              {comoFunciona.ctaTexto}
            </a>
          )}
        </div>
      </section>

      <section className="lp-urgencia center">
        <div className="wrap">
          <h2 className="sec-titulo">{urgencia.titulo}</h2>
          <p className="lp-urgencia-txt">{urgencia.texto}</p>
        </div>
      </section>

      <Avaliacoes dados={avaliacoes} />

      <section className="lp-faq center">
        <div className="wrap">
          <h2 className="sec-titulo">{faq.titulo}</h2>
          <div className="lp-faq-list">
            {faq.itens.map((item) => (
              <details key={item.pergunta}>
                <summary>{item.pergunta}</summary>
                <p>{item.resposta}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-form-sec center" id="formulario">
        <div className="wrap">
          <h2 className="sec-titulo">{formulario.titulo}</h2>
          <FormularioLead
            origem={origem}
            submitTexto={formulario.submitTexto}
            sucessoTexto={formulario.sucessoTexto}
            whatsappUrl={formulario.whatsappUrl}
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
