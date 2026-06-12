import type { LandingData } from "@/components/LandingTemplate";
import { PASSOS_GESTAO_OBRAS } from "@/lib/landing-configs/passos";

export const metadata = {
  title: "Fiscalização de Obras em Condomínios em Vitória | MG Perícias",
  description:
    "Fiscalização técnica de obras para condomínios em Vitória. Acompanhamento profissional em todas as etapas, relatórios detalhados e perícias de engenharia civil.",
};

export const data: LandingData = {
  slug: "fiscalizacao-obras-condominios",
  origem: "fiscalizacao-obras-condominios",
  h1: "Fiscalização de Obras em Condomínios com Segurança e Transparência em Vitória",
  subtitulo:
    "Evite problemas estruturais, desperdícios financeiros e conflitos entre moradores com uma fiscalização técnica especializada em engenharia civil. Tenha acompanhamento profissional em todas as etapas da obra e garanta mais segurança para o seu condomínio.",
  whatsappMsg:
    "Olá! Gostaria de solicitar uma avaliação técnica para fiscalização de obras no meu condomínio em Vitória.",
  nomeServicoDuvida: "Fiscalização de Obras em Condomínios",
  passos: PASSOS_GESTAO_OBRAS,
  urgenciaTexto:
    "Nossa agenda de fiscalização aceita um número limitado de obras simultâneas. Garanta o acompanhamento da sua.",
  credibilidade: [
    "Equipe especializada em condomínios",
    "Engenheiros experientes e qualificados",
    "Atuação conforme normas da ABNT",
  ],
  cardImg: "/images/cards/card-gestao-obras.webp",
  paraQuemTitulo: "Por que a fiscalização de obras é essencial no condomínio?",
  paraQuem: [
    {
      perfil: "Obras em condomínios",
      descricao:
        "exigem controle técnico rigoroso; sem fiscalização adequada, pequenos erros geram grandes prejuízos financeiros, infiltrações, falhas estruturais, atrasos e riscos à segurança dos moradores",
    },
    {
      perfil: "Conformidade técnica",
      descricao:
        "a fiscalização garante que tudo seja executado conforme o projeto, normas técnicas e padrões de qualidade exigidos pela engenharia civil",
    },
    {
      perfil: "Síndicos",
      descricao:
        "ganham mais tranquilidade para tomar decisões com respaldo técnico e reduzir riscos jurídicos futuros",
    },
  ],
  quandoTitulo: "Quando contratar uma fiscalização de obras?",
  quando: [
    {
      titulo: "Reformas de fachada",
      descricao: "acompanhamento técnico desde o início reduz riscos e custos futuros",
    },
    {
      titulo: "Impermeabilizações",
      descricao: "falhas nesta etapa geram vazamentos, infiltrações e retrabalho constante",
    },
    {
      titulo: "Troca de revestimentos",
      descricao: "uso inadequado de materiais e execução incorreta podem elevar o orçamento",
    },
    {
      titulo: "Obras estruturais",
      descricao: "exigem fiscalização preventiva para garantir segurança aos moradores",
    },
    {
      titulo: "Reformas em áreas comuns",
      descricao: "transparência na gestão evita conflitos e reclamações entre condôminos",
    },
    {
      titulo: "Recuperação predial",
      descricao: "identificamos falhas antes que se transformem em grandes problemas",
    },
    {
      titulo: "Obras entregues por construtoras",
      descricao: "laudos e relatórios oferecem respaldo para garantias e negociações",
    },
  ],
  recebeTitulo: "Fiscalização técnica com relatórios detalhados e perícias de engenharia civil",
  recebe: [
    {
      item: "Inspeções periódicas",
      detalhe:
        "visitas técnicas com relatórios completos, fotos, análises e orientações claras para síndicos e administradoras",
    },
    {
      item: "Fiscalização preventiva",
      detalhe:
        "identificamos falhas antes que gerem retrabalho, atrasos, custos acima do orçamento ou problemas judiciais",
    },
    {
      item: "Perícias de engenharia civil",
      detalhe:
        "identificação das causas de problemas estruturais, infiltrações, rachaduras e falhas construtivas",
    },
    {
      item: "Laudos técnicos",
      detalhe:
        "respaldo profissional para assembleias condominiais, ações judiciais, negociações com construtoras, garantias de obras e tomadas de decisão do síndico",
    },
    {
      item: "Imparcialidade técnica",
      detalhe:
        "trabalhamos com total imparcialidade, seguindo rigorosamente as normas técnicas da engenharia",
    },
  ],
  prazoFormato:
    "Mais segurança para todos, economia para o condomínio, transparência na gestão e valorização do patrimônio. Nosso compromisso é proteger o patrimônio do condomínio e garantir obras seguras, eficientes e transparentes.",
  mostrarBotaoPortfolio: true,
  faq: [
    {
      pergunta: "O que acontece quando a obra não tem acompanhamento técnico?",
      resposta:
        "O condomínio pode enfrentar retrabalho constante, vazamentos e infiltrações, uso inadequado de materiais, atrasos na entrega, custos acima do orçamento, problemas judiciais futuros e reclamações de moradores.",
    },
    {
      pergunta: "Quais são os benefícios da fiscalização para síndicos e moradores?",
      resposta:
        "Mais segurança estrutural, economia ao detectar falhas cedo, transparência com relatórios claros para moradores e conselho, e valorização do patrimônio com obras bem fiscalizadas.",
    },
    {
      pergunta: "Vocês atendem condomínios em Vitória?",
      resposta:
        "Sim. Atuamos com fiscalização de obras e perícias de engenharia civil para condomínios em Vitória, com atendimento rápido e personalizado.",
    },
    {
      pergunta: "Os relatórios servem para apresentar em assembleia?",
      resposta:
        "Sim. Os relatórios técnicos são objetivos e ajudam o síndico a apresentar informações claras aos moradores e ao conselho consultivo.",
    },
    {
      pergunta: "A fiscalização de obras é essencial para o condomínio?",
      resposta:
        "Sim. É uma medida essencial para proteger moradores, evitar prejuízos e garantir qualidade na execução dos serviços. Com acompanhamento técnico especializado, o síndico ganha segurança nas decisões e o condomínio evita dores de cabeça futuras.",
    },
    {
      pergunta: "Como solicitar uma visita técnica?",
      resposta:
        "Entre em contato pelo WhatsApp ou formulário desta página. Agendamos uma visita técnica com nossa equipe de engenharia especializada.",
    },
  ],
};
