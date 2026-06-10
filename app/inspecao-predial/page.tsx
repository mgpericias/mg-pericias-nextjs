import Footer from "@/components/Footer";
import Avaliacoes from "@/components/Avaliacoes";
import { getAvaliacoes } from "@/lib/avaliacoes";
import type { Metadata } from "next";
import FormularioLead from "./FormularioLead";

export const metadata: Metadata = {
  title: "Inspeção Predial em Condomínios | MG Perícias",
  description:
    "Laudo de inspeção predial para condomínios na Grande Vitória. Identifique riscos, planeje manutenções e resguarde o síndico. Avaliação inicial gratuita.",
};

const DORES = [
  "Quer evitar acidentes como queda de revestimento de fachada e problemas estruturais",
  "Precisa resguardar sua responsabilidade como síndico perante o condomínio",
  "Quer planejar a manutenção e evitar gastos emergenciais maiores",
  "Precisa de um laudo técnico para assembleia, seguro ou negociações",
  "Deseja preservar e valorizar o patrimônio do condomínio",
];

const FAQ = [
  {
    pergunta: "Preciso pagar pela avaliação inicial?",
    resposta: "Não. A avaliação inicial é gratuita e sem compromisso.",
  },
  {
    pergunta: "Quanto custa um laudo de inspeção predial?",
    resposta:
      "O valor depende do porte do condomínio; após a avaliação apresentamos um orçamento transparente.",
  },
  {
    pergunta: "Quanto tempo leva?",
    resposta:
      "Depende do tamanho do prédio, mas trabalhamos com prazos definidos e acompanhamento em cada etapa.",
  },
  {
    pergunta: "O laudo serve para seguro e assembleia?",
    resposta:
      "Sim, o laudo é um documento técnico que embasa decisões, negociações e assembleias.",
  },
  {
    pergunta: "Vocês atendem qual região?",
    resposta: "Toda a Grande Vitória: Vitória, Vila Velha, Serra e Cariacica.",
  },
];

export default async function InspecaoPredialPage() {
  const avaliacoes = await getAvaliacoes();

  return (
    <>
      <header className="lp-header">
        <div className="wrap nav">
          <a href="/">
            <img
              className="logo"
              src="https://mgpericias.com.br/wp-content/uploads/2025/04/logo-mgpericias.png"
              alt="MG Perícias"
            />
          </a>
        </div>
      </header>

      <section className="lp-hero">
        <div className="wrap lp-hero-grid">
          <div className="lp-hero-txt">
            <h1>
              Proteja seu condomínio com um laudo de inspeção predial que previne
              acidentes e resguarda o síndico
            </h1>
            <p>
              Engenharia diagnóstica especializada em condomínios na Grande Vitória.
              Mais de 13 anos identificando riscos antes que virem prejuízo.
            </p>
            <a href="#formulario" className="btn">
              QUERO MINHA AVALIAÇÃO GRATUITA
            </a>
          </div>
          <div className="lp-hero-img">
            <div className="lp-img-placeholder">Foto: inspeção/equipe</div>
          </div>
        </div>
      </section>

      <section className="lp-dores center">
        <div className="wrap">
          <h2 className="sec-titulo">
            A inspeção predial é para você, síndico ou administradora, que...
          </h2>
          <ul className="lp-dores-list">
            {DORES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="lp-fecho">Você se identifica com algum desses pontos?</p>
        </div>
      </section>

      <section className="lp-solucao center">
        <div className="wrap">
          <h2 className="sec-titulo">O que a MG Perícias entrega</h2>
          <p className="lp-solucao-txt">
            O laudo de inspeção predial identifica riscos na edificação, aponta o que
            precisa de atenção primeiro e dá segurança técnica para você decidir com
            tranquilidade — seja na assembleia, no seguro ou no planejamento de
            manutenções. Você recebe um diagnóstico claro, em linguagem acessível, para
            proteger moradores e patrimônio.
          </p>
          <div className="lp-diffs">
            <span>Especialização em condomínios</span>
            <span>+13 anos de atuação</span>
            <span>Conformidade com a norma técnica NBR 16747</span>
            <span>
              Atendimento em toda a Grande Vitória (Vitória, Vila Velha, Serra,
              Cariacica)
            </span>
          </div>
          <p className="lp-autoridade">+200 laudos realizados</p>
        </div>
      </section>

      <section className="lp-passos center">
        <div className="wrap">
          <h2 className="sec-titulo">Como funciona</h2>
          <div className="lp-passos-grid">
            <div className="lp-passo">
              <span className="lp-passo-num">Passo 1</span>
              <h3>Você agenda sua avaliação gratuita</h3>
              <p>Preencha o formulário e nossa equipe entra em contato para combinar o melhor horário.</p>
            </div>
            <div className="lp-passo">
              <span className="lp-passo-num">Passo 2</span>
              <h3>Nossa equipe faz a visita técnica ao condomínio</h3>
              <p>Engenheiros especializados avaliam fachadas, estruturas e áreas comuns com rigor técnico.</p>
            </div>
            <div className="lp-passo">
              <span className="lp-passo-num">Passo 3</span>
              <h3>Você recebe o laudo completo, com diagnóstico e recomendações</h3>
              <p>Documento técnico para embasar decisões, priorizar manutenções e resguardar o síndico.</p>
            </div>
          </div>
          <p className="lp-reforco">
            Sua avaliação inicial é gratuita e sem compromisso.
          </p>
          <a href="#formulario" className="btn">
            AGENDAR AVALIAÇÃO GRATUITA
          </a>
        </div>
      </section>

      <section className="lp-urgencia center">
        <div className="wrap">
          <h2 className="sec-titulo">Por que não deixar para depois</h2>
          <p className="lp-urgencia-txt">
            Um problema estrutural ou de fachada que passa despercebido pode evoluir
            rapidamente — e, em condomínios, as consequências vão além do financeiro.
            Queda de revestimento, infiltrações graves ou falhas estruturais colocam
            pessoas em risco e geram custos muito maiores do que uma manutenção
            planejada. Quanto antes o risco é identificado, mais barato e seguro é
            resolver. Como síndico ou administradora, você responde pela segurança de
            quem mora e trabalha no condomínio — agir com informação técnica é a forma
            mais responsável de cuidar do patrimônio e das pessoas.
          </p>
        </div>
      </section>

      <Avaliacoes dados={avaliacoes} />

      <section className="lp-faq center">
        <div className="wrap">
          <h2 className="sec-titulo">Perguntas frequentes</h2>
          <div className="lp-faq-list">
            {FAQ.map((item) => (
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
          <h2 className="sec-titulo">Agende sua avaliação gratuita</h2>
          <FormularioLead />
        </div>
      </section>

      <Footer />
    </>
  );
}
