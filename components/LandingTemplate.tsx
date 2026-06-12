import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FormularioLead from "@/components/FormularioLead";
import ContadorNumeros from "@/components/ContadorNumeros";
import Avaliacoes from "@/components/Avaliacoes";
import WhatsAppButton from "@/components/WhatsAppButton";
import TrackWhatsAppLink from "@/components/TrackWhatsAppLink";
import ResponsavelTecnico from "@/components/ResponsavelTecnico";
import LandingAnimLayout, {
  type AnimacaoLp,
} from "@/components/anim/LandingAnimLayout";
import LupaInspecao, { type MarcadorLupa } from "@/components/anim/LupaInspecao";
import { getAvaliacoes } from "@/lib/avaliacoes";
import {
  ASSEMBLEIA_TEXTO_GESTAO,
  ASSEMBLEIA_TEXTO_PADRAO,
  RISCO_SINDICO_TEXTO,
} from "@/lib/landing-helpers";
import {
  LP_CLIENTES,
  LP_DIFERENCIAIS,
  LP_NUMEROS,
  LP_BASE,
  LP_WHATSAPP,
} from "@/lib/landing-shared";

export interface LandingFaqItem {
  pergunta: string;
  resposta: string;
  link?: { href: string; label: string };
  sufixo?: string;
}

export interface LandingPasso {
  num: string;
  titulo: string;
  descricao: string;
}

export interface LandingData {
  slug: string;
  origem: string;
  h1: string;
  subtitulo: string;
  whatsappMsg: string;
  nomeServicoDuvida: string;
  credibilidade: string[];
  cardImg: string;
  paraQuemTitulo: string;
  paraQuem: { perfil: string; descricao: string }[];
  quandoTitulo: string;
  quando: { titulo: string; descricao: string }[];
  recebeTitulo: string;
  recebe: { item: string; detalhe: string }[];
  passos: LandingPasso[];
  prazoFormato?: string;
  faq: LandingFaqItem[];
  mostrarBotaoPortfolio?: boolean;
  mostrarRiscoSindico?: boolean;
  urgenciaTexto: string;
  assembleiaGestao?: boolean;
  assembleiaTitulo?: string;
  assembleiaTexto?: string;
  animacao?: AnimacaoLp;
  lupaInspecao?: {
    imagem: string;
    marcadores: MarcadorLupa[];
  };
}

function serviceSchema(data: LandingData) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.h1,
    provider: {
      "@type": "LocalBusiness",
      name: "MG Perícias",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Rua Italina Pereira Mota, 440, Sala 107",
        addressLocality: "Vitória",
        addressRegion: "ES",
        postalCode: "29090-370",
        addressCountry: "BR",
      },
      telephone: "+5527999704394",
      url: LP_BASE,
    },
    areaServed: { "@type": "Place", name: "Grande Vitória, Espírito Santo" },
  };
}

function faqSchema(faq: LandingFaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.pergunta,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.link
          ? `${item.resposta} ${item.link.label}${item.sufixo ?? ""}`
          : item.resposta,
      },
    })),
  };
}

export default async function LandingTemplate({ data }: { data: LandingData }) {
  const avaliacoes = await getAvaliacoes();
  const whatsappUrl = `https://wa.me/${LP_WHATSAPP}?text=${encodeURIComponent(data.whatsappMsg)}`;
  const duvidaUrl = `https://wa.me/${LP_WHATSAPP}?text=${encodeURIComponent(
    `Olá! Tenho uma dúvida sobre ${data.nomeServicoDuvida}.`
  )}`;
  const assembleiaTitulo =
    data.assembleiaTitulo ?? "Apresentamos o resultado na sua assembleia";
  const assembleiaTexto =
    data.assembleiaTexto ??
    (data.assembleiaGestao ? ASSEMBLEIA_TEXTO_GESTAO : ASSEMBLEIA_TEXTO_PADRAO);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema(data)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(data.faq)) }}
      />

      <Header contatoHref="#contato" variant="lp" />

      <LandingAnimLayout animacao={data.animacao}>
      <section className="lp-hero-v2">
        <div className="wrap lp-hero-v2-grid">
          <div className="lp-hero-v2-txt">
            <h1>{data.h1}</h1>
            <p>{data.subtitulo}</p>
            <div className="lp-hero-v2-btns">
              <TrackWhatsAppLink
                href={whatsappUrl}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
                servico={data.origem}
                local="hero"
              >
                Solicitar orçamento via WhatsApp
              </TrackWhatsAppLink>
              <TrackWhatsAppLink
                href={duvidaUrl}
                className="lp-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
                servico={data.origem}
                local="hero"
              >
                Tirar uma dúvida rápida
              </TrackWhatsAppLink>
            </div>
            <ul className="lp-credibilidade">
              {data.credibilidade.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="lp-hero-v2-img">
            <img
              src="/images/julio-machado-quadrado.webp"
              alt="Júlio Machado Gomes, engenheiro civil da MG Perícias"
            />
          </div>
        </div>
      </section>

      <div className="clientes">
        <div className="clientes-viewport">
          <div className="clientes-track">
            {[...LP_CLIENTES, ...LP_CLIENTES, ...LP_CLIENTES, ...LP_CLIENTES, ...LP_CLIENTES, ...LP_CLIENTES].map((c, i) => (
              <img key={`${c}-${i}`} src={`/images/${c}.png`} alt={c} />
            ))}
          </div>
        </div>
      </div>

      <section className="lp-para-quem center">
        <div className="wrap">
          <h2 className="sec-titulo">{data.paraQuemTitulo}</h2>
          <div className="lp-para-quem-grid">
            {data.paraQuem.map((p) => (
              <div className="lp-perfil-card" key={p.perfil}>
                <p><strong>{p.perfil}:</strong> {p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-quando center">
        <div className="wrap">
          <h2 className="sec-titulo">{data.quandoTitulo}</h2>
          <ol className="lp-quando-list">
            {data.quando.map((item) => (
              <li key={item.titulo}>
                <strong>{item.titulo}:</strong> {item.descricao}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {data.mostrarRiscoSindico && (
        <section className="lp-risco-sindico center">
          <div className="wrap">
            <h2 className="sec-titulo">A responsabilidade é do síndico</h2>
            <p>{RISCO_SINDICO_TEXTO}</p>
          </div>
        </section>
      )}

      <section className="lp-recebe center">
        <div className="wrap">
          <h2 className="sec-titulo">{data.recebeTitulo}</h2>
          <div className="lp-recebe-grid">
            {data.recebe.map((r) => (
              <div className="lp-recebe-item" key={r.item}>
                <p><strong>{r.item}:</strong> {r.detalhe}</p>
              </div>
            ))}
          </div>
          {data.prazoFormato && (
            <p className="lp-prazo-formato">{data.prazoFormato}</p>
          )}
          {data.mostrarBotaoPortfolio && (
            <div className="lp-portfolio-mid">
              <Link href="/obra" className="btn lp-btn-portfolio">
                Ver portfólio de obras
              </Link>
            </div>
          )}
        </div>
      </section>

      {data.lupaInspecao && (
        <LupaInspecao
          imagem={data.lupaInspecao.imagem}
          marcadores={data.lupaInspecao.marcadores}
        />
      )}

      <section className="lp-passos-v2 center">
        <div className="wrap">
          <h2 className="sec-titulo">Como funciona, em 4 passos</h2>
          <div className="lp-passos-v2-grid">
            {data.passos.map((p) => (
              <div className="lp-passo-v2" key={p.num}>
                <span className="lp-passo-v2-num">{p.num} · {p.titulo}</span>
                <p>{p.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-porque center">
        <div className="wrap">
          <h2 className="sec-titulo">
            Por que escolher a <span className="ambar">MG Perícias</span>?
          </h2>
          <div className="dif-grid">
            {LP_DIFERENCIAIS.map((d) => (
              <div className="flip" key={d.titulo}>
                <div className="flip-inner">
                  <div className="flip-face flip-front"><h3>{d.titulo}</h3></div>
                  <div className="flip-face flip-back"><p>{d.texto}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ResponsavelTecnico />

      <ContadorNumeros itens={LP_NUMEROS} />

      <section className="lp-faq center">
        <div className="wrap">
          <h2 className="sec-titulo">Perguntas frequentes</h2>
          <div className="lp-faq-list">
            {data.faq.map((item, index) => (
              <details key={item.pergunta} open={index === 0}>
                <summary>{item.pergunta}</summary>
                <p>
                  {item.resposta}
                  {item.link && (
                    <>
                      {" "}
                      <Link href={item.link.href}>{item.link.label}</Link>
                      {item.sufixo}
                    </>
                  )}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="lp-assembleia center">
        <div className="wrap">
          <h2 className="sec-titulo">{assembleiaTitulo}</h2>
          <p>{assembleiaTexto}</p>
          <TrackWhatsAppLink
            href={whatsappUrl}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            servico={data.origem}
            local="contato"
          >
            Quero esse apoio
          </TrackWhatsAppLink>
        </div>
      </section>

      <Avaliacoes dados={avaliacoes} />

      <section className="lp-form-sec center" id="contato">
        <div className="wrap">
          <h2 className="sec-titulo">Solicite seu orçamento</h2>
          <p className="lp-contato-intro">
            Em até 24 horas, retornamos sua solicitação com uma proposta personalizada. Sem compromisso.
          </p>
          <p className="lp-urgencia-form">{data.urgenciaTexto}</p>
          <FormularioLead
            origem={data.origem}
            submitTexto="Receber proposta em 24h"
            sucessoTexto="Recebemos sua solicitação! Em até 24 horas retornaremos com uma proposta personalizada."
            whatsappUrl={whatsappUrl}
          />
          <div className="lp-contato-info">
            <TrackWhatsAppLink
              href={whatsappUrl}
              className="btn lp-btn-wpp"
              target="_blank"
              rel="noopener noreferrer"
              servico={data.origem}
              local="contato"
            >
              Falar no WhatsApp
            </TrackWhatsAppLink>
            {data.mostrarBotaoPortfolio && (
              <Link href="/obra" className="btn lp-btn-portfolio">
                Ver portfólio de obras
              </Link>
            )}
            <p>
              <a href="tel:+5527999704394">(27) 99970-4394</a><br />
              contato@mgpericias.com.br<br />
              Rua Italina Pereira Mota, 440, Sala 107, Jardim Camburi, Vitória/ES, CEP 29090-370
            </p>
          </div>
        </div>
      </section>

      </LandingAnimLayout>

      <Footer />
      <WhatsAppButton msg={data.whatsappMsg} servico={data.origem} />
    </>
  );
}
