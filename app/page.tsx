import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactForm from "@/components/ContactForm";
import Avaliacoes from "@/components/Avaliacoes";
import ContadorNumeros from "@/components/ContadorNumeros";
import { getAvaliacoes } from "@/lib/avaliacoes";

// Revalida a home a cada 24h (para refletir novas avaliações)
export const revalidate = 86400;

const SERVICOS = [
  { titulo: "Gestão de Contratos e Obras", img: "/images/cards/card-gestao-obras.webp",
    resumo: "Cuidamos da contratação e acompanhamos a obra do início ao fim. O condomínio paga o preço justo e recebe o que contratou.",
    link: "/gestao-fiscalizacao-obras" },
  { titulo: "Laudo de Inspeção Predial", img: "/images/cards/card-inspecao-predial.webp",
    resumo: "Avaliação completa do estado do prédio, conforme a NBR 16747. Mostra o que precisa de atenção e em que ordem agir.",
    link: "/laudo-inspecao-predial" },
  { titulo: "Laudo de Auditoria da Construção", img: "/images/cards/card-auditoria-construcao.webp",
    resumo: "Verificação técnica da qualidade da obra entregue pela construtora. Base para cobrar reparos ainda na garantia.",
    link: "/laudo-auditoria-construcao" },
  { titulo: "Parecer Técnico", img: "/images/cards/card-parecer-tecnico.webp",
    resumo: "Análise de um problema específico com conclusão objetiva, assinada por engenheiro. Documento válido para decisões e disputas.",
    link: "/parecer-tecnico-engenharia" },
  { titulo: "Inspeção Preliminar de Fachada", img: "/images/cards/card-inspecao-fachada.webp",
    resumo: "Inspeção da fachada com drone, sem rapel e sem balancinho. Mostra o estado geral do revestimento com agilidade e custo menor.",
    link: "/inspecao-preliminar-fachada" },
  { titulo: "Mapeamento de Fachadas", img: "/images/cards/card-mapeamento-fachadas.webp",
    resumo: "Inspeção das fachadas para localizar trincas, infiltrações e risco de desplacamento. Prioriza os reparos e evita acidentes.",
    link: "/mapeamento-de-fachadas" },
  { titulo: "Laudo de Análise Estrutural", img: "/images/cards/card-analise-estrutural.webp",
    resumo: "Avaliação da estrutura do edifício por engenheiro especialista. Indica a gravidade real do problema e o que fazer.",
    link: "/laudo-analise-estrutural" },
  { titulo: "Laudo de Conferência de Fração Ideal", img: "/images/cards/card-fracao-ideal.webp",
    resumo: "Conferência dos cálculos de fração ideal das unidades. Garante rateio correto das despesas do condomínio.",
    link: "/laudo-conferencia-fracao-ideal" },
];

const DIFERENCIAIS = [
  { titulo: "Conhecimento técnico", texto: "Nossa equipe conta com especialistas qualificados e mais de 13 anos de experiência em Engenharia Diagnóstica." },
  { titulo: "Qualidade do serviço", texto: "Laudos completos e personalizados, com rigor técnico e linguagem clara para o síndico decidir." },
  { titulo: "Relacionamento próximo", texto: "Trabalhamos lado a lado com nossos clientes para entender e superar suas expectativas." },
];

const EQUIPE = [
  { nome: "Júlio Machado Gomes", img: "JULIO-TESTE-1", bio: "Formado em Engenharia Civil pela Multivix, especialista em auditoria e perícias de engenharia, responsável técnico e comercial." },
  { nome: "João Vitor Tomazinho", img: "JOAO-TESTE-1", bio: "Formado em Engenharia Civil pela Ufes, responsável pelo setor financeiro e operacional." },
  { nome: "Júlia Bravo", img: "JULIA-TESTE-1", bio: "Formada em Engenharia Civil pela Multivix, especialista em engenharia ambiental e de segurança do trabalho, responsável pelo setor de obras." },
];

const CLIENTES = ["logo-autoglass", "contractor", "cais-artes", "camorim"];

export default async function Home() {
  const avaliacoes = await getAvaliacoes();

  return (
    <>
      <Header />

      <section className="hero" id="inicio">
        <div className="hero-inner">
          <div className="hero-txt">
            <h1>
              Excelência e segurança em{" "}
              <span className="ambar">Engenharia Diagnóstica.</span>
            </h1>
            <p>
              Há mais de 13 anos, transformando diagnósticos técnicos em decisões
              seguras para condomínios e administradoras.
              <br /><br />
              Nossos laudos detalhados e a gestão eficiente de obras garantem
              tranquilidade, valorização do patrimônio e confiança para quem administra.
            </p>
            <a href="#contato" className="btn">ENTRE EM CONTATO</a>
          </div>
        </div>
      </section>

      <div className="clientes">
        <div className="clientes-viewport">
          <div className="clientes-track">
            {[...CLIENTES, ...CLIENTES, ...CLIENTES, ...CLIENTES, ...CLIENTES, ...CLIENTES].map((c, i) => (
              <img key={`${c}-${i}`} src={`/images/${c}.png`} alt={c} />
            ))}
          </div>
        </div>
      </div>

      <section className="porque center">
        <div className="wrap">
          <h2 className="sec-titulo">
            Por que escolher a <span className="ambar">MG Perícias</span>?
          </h2>
          <div className="dif-grid">
            {DIFERENCIAIS.map((d) => (
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

      <ContadorNumeros
        itens={[
          { valor: 200, rotulo: "laudos para condomínios" },
          { valor: 25, rotulo: "obras geridas e fiscalizadas" },
        ]}
      />

      <section className="servicos" id="servicos">
        <div className="wrap">
          <h2 className="sec-titulo">Conheça nossos <span className="ambar">serviços</span></h2>
          <p className="sec-sub">Soluções completas em gestão de obras e laudos técnicos para condomínios e empresas.</p>
          <div className="serv-grid">
            {SERVICOS.map((s) => (
              <div className="serv-card" key={s.titulo}>
                <div className="serv-inner">
                  <div
                    className="serv-face serv-front"
                    style={{ backgroundImage: `url(${s.img})` }}
                  >
                    <h3>{s.titulo}</h3>
                  </div>
                  <div className="serv-face serv-back">
                    <p>{s.resumo}</p>
                    <a href={s.link} className="serv-btn">Saiba mais</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quem" id="quem-somos">
        <div className="wrap">
          <div className="quem-top">
            <div>
              <h2 className="sec-titulo">Quem somos</h2>
              <p>Somos uma empresa capixaba especializada em Engenharia Diagnóstica, com atuação em Auditoria, Avaliações e Perícias. Com mais de 13 anos de experiência acumulada por nosso sócio fundador, nos destacamos pela expertise em engenharia condominial e pelo compromisso em oferecer soluções precisas e confiáveis.</p>
            </div>
            <img src="/images/TIME-MG-1.jpg" alt="Equipe MG Perícias" />
          </div>
        </div>
      </section>

      <section className="mvv-sec">
        <div className="wrap">
          <div className="mvv">
            <div className="box"><h3>Missão</h3><p>Conscientizar e levar soluções definitivas de Engenharia Diagnóstica para as edificações, possibilitando segurança e tranquilidade aos usuários, com equipe especializada, transparência e entrega de excelência.</p></div>
            <div className="box"><h3>Visão</h3><p>Consolidar-se como a principal referência em Engenharia Diagnóstica no Estado do Espírito Santo, estabelecendo novos padrões de excelência e inovação no setor.</p></div>
            <div className="box"><h3>Valores</h3><p>Honestidade, Transparência, Colaboração e Valorizar quem faz a empresa.</p></div>
          </div>
        </div>
      </section>

      <section className="equipe center">
        <div className="wrap">
          <h2 className="sec-titulo">Liderança <span className="ambar">técnica e experiente</span></h2>
          <p className="sec-sub">Conheça os gestores à frente da MG Perícias, garantindo a qualidade de cada serviço.</p>
          <div className="equipe-grid">
            {EQUIPE.map((m) => (
              <div className="membro" key={m.nome}>
                <img src={`/images/${m.img}.jpg`} alt={m.nome} />
                <div className="faixa"><h3>{m.nome}</h3><p>{m.bio}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Avaliacoes dados={avaliacoes} />

      <section className="contato" id="contato">
        <div className="contato-grid">
          <div className="contato-foto" />
          <div className="contato-painel">
            <h2>Entre em contato!</h2>
            <ContactForm />
            <div className="contato-info">
              <div>
                <svg viewBox="0 0 24 24" strokeWidth={2}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (27) 99970-4394
              </div>
              <div>
                <svg viewBox="0 0 24 24" strokeWidth={2}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>
                contato@mgpericias.com.br
              </div>
              <div>
                <svg viewBox="0 0 24 24" strokeWidth={2}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Rua Italina Pereira Mota, 440 - Jardim Camburi, Vitória - ES. 29090-370 Sala 107
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
