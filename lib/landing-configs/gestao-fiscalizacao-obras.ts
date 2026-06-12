import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_GESTAO_OBRAS } from "@/lib/landing-configs/passos";

export const metadata = {
  title: "Gestão e Fiscalização de Obras em Vitória/ES | MG Perícias",
  description:
    "Gestão da contratação e fiscalização de obras para condomínios em Vitória e Grande Vitória. Escopo certo, preço justo e obra acompanhada do início ao fim.",
};

export const data: LandingData = {
  slug: "gestao-fiscalizacao-obras",
  origem: "gestao-fiscalizacao-obras",
  h1: "Gestão e Fiscalização de Obras em Vitória/ES",
  subtitulo:
    "Obra aprovada e medo de aditivos, atrasos e retrabalho? Cuidamos da contratação e fiscalizamos a execução do início ao fim. O condomínio paga o combinado e recebe o que contratou.",
  whatsappMsg: "Olá! Quero um orçamento de Gestão e Fiscalização de Obras para meu condomínio.",
  nomeServicoDuvida: "Gestão e Fiscalização de Obras",
  credibilidade: [
    "+13 anos de experiência",
    "Independência total de fornecedores",
    "Acompanhamento até a entrega",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-gestao-obras.webp",
  paraQuemTitulo: "Para quem é a Gestão e Fiscalização de Obras:",
  paraQuem: [
    {
      perfil: "Síndicos sem tempo para gerir contratações",
      descricao: "a obra é grande demais para tocar sozinho",
    },
    {
      perfil: "Conselhos que querem profissionalizar",
      descricao: "processo de contratação transparente e defensável em assembleia",
    },
    {
      perfil: "Condomínios com obra em andamento",
      descricao: "querem um fiscal técnico independente da empreiteira",
    },
    {
      perfil: "Condomínios com experiência ruim anterior",
      descricao: "não querem repetir aditivos, atrasos e retrabalho",
    },
  ],
  quandoTitulo: "Quando contratar:",
  quando: [
    {
      titulo: "Obras grandes que vão a assembleia",
      descricao: "a decisão precisa de escopo e comparação técnica de propostas",
    },
    {
      titulo: "Reformas com risco técnico",
      descricao: "estrutura e fachada não admitem execução sem fiscalização",
    },
    {
      titulo: "Pagamentos por medição",
      descricao: "cada parcela só deve ser paga depois de conferida tecnicamente",
    },
    {
      titulo: "Empreiteira de histórico desconhecido",
      descricao: "a fiscalização protege o condomínio de surpresas",
    },
    {
      titulo: "Múltiplos fornecedores na mesma obra",
      descricao: "alguém precisa coordenar interfaces e responsabilidades",
    },
  ],
  dor: {
    imagem: "/images/dor/dor-bomba.webp",
    imagemAlt: "Síndico preocupado com um problema prestes a estourar no condomínio",
    titulo: "O que acontece quando a obra anda sem fiscalização",
    texto:
      "Sem alguém técnico acompanhando, o condomínio paga por serviço que não foi feito, aceita material fora da especificação e descobre o problema quando a obra já acabou. O conserto vem depois, e sai do bolso de todos.",
    pontos: [
      "Pagamento liberado por medição que ninguém conferiu",
      "Aditivos e atrasos que ninguém previu no contrato",
      "Retrabalho que a empreiteira cobra de novo",
    ],
    whatsappMsg:
      "Olá! Quero fiscalizar a obra do meu condomínio antes que vire problema.",
  },
  recebeTitulo: "O que você recebe:",
  recebe: [
    {
      item: "Escopo técnico da obra",
      detalhe: "documento que define exatamente o que será contratado",
    },
    {
      item: "Prospecção e qualificação de fornecedores",
      detalhe: "análise comparativa de propostas e recomendação fundamentada",
    },
    {
      item: "Acompanhamento presencial periódico",
      detalhe: "visitas técnicas com relatórios, fotos e medições",
    },
    {
      item: "Validação de medições para pagamento",
      detalhe: "o condomínio só paga o que foi executado corretamente",
    },
    {
      item: "Notificação técnica de não conformidades",
      detalhe: "problemas registrados e cobrados formalmente da empreiteira",
    },
  ],
  passos: PASSOS_GESTAO_OBRAS,
  mostrarBotaoPortfolio: true,
  assembleiaGestao: true,
  urgenciaTexto:
    "Nossa agenda de fiscalização aceita um número limitado de obras simultâneas. Garanta o acompanhamento da sua.",
  faq: [
    {
      pergunta: "Vocês recebem comissão de fornecedores?",
      resposta:
        "Não. Nossa remuneração vem somente do condomínio. É isso que garante a independência da recomendação e da fiscalização.",
    },
    {
      pergunta: "O serviço inclui apresentação em assembleia?",
      resposta:
        "Sim, sob demanda. Apresentamos o escopo, a comparação de propostas e os relatórios de acompanhamento aos condôminos.",
    },
    {
      pergunta: "Com que frequência vocês visitam a obra?",
      resposta:
        "A frequência é definida no plano de fiscalização conforme o porte e a fase da obra, e fica registrada na proposta.",
    },
    {
      pergunta: "O fiscal pode parar a obra?",
      resposta:
        "O fiscal notifica formalmente as não conformidades e orienta o condomínio, que é quem tem o poder contratual de suspender etapas ou pagamentos.",
    },
    {
      pergunta: "A fiscalização substitui a ART da construtora?",
      resposta:
        "Não. A responsabilidade pela execução continua da empreiteira. A fiscalização é uma camada independente de proteção do contratante, com ART própria de fiscalização.",
    },
    {
      pergunta: "Posso contratar só a gestão da contratação, sem a fiscalização?",
      resposta:
        "Sim. Os escopos podem ser contratados juntos ou separados, conforme a necessidade do condomínio.",
    },
    {
      pergunta: "Quanto custa?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
  ],
};
