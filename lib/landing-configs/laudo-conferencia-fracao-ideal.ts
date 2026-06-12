import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_FRACAO_IDEAL } from "@/lib/landing-configs/passos";

export const metadata = {
  title: "Conferência de Fração Ideal em Vitória/ES | MG Perícias",
  description:
    "Conferência técnica de fração ideal para condomínios em Vitória e Grande Vitória. Garanta que a divisão proporcional está correta. Laudo técnico assinado.",
};

export const data: LandingData = {
  slug: "laudo-conferencia-fracao-ideal",
  origem: "laudo-conferencia-fracao-ideal",
  animacao: "lupa",
  h1: "Laudo de Conferência de Fração Ideal em Vitória/ES",
  subtitulo:
    "Condôminos questionando o rateio? A conferência técnica da fração ideal mostra se a conta está certa e encerra a discussão com cálculo assinado por engenheiro.",
  whatsappMsg: "Olá! Quero um orçamento de Conferência de Fração Ideal para meu condomínio.",
  nomeServicoDuvida: "Conferência de Fração Ideal",
  credibilidade: [
    "+13 anos de experiência da equipe",
    "Cálculo técnico conferido",
    "Documento válido para registro",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-fracao-ideal.webp",
  paraQuemTitulo: "Para quem é a Conferência de Fração Ideal:",
  paraQuem: [
    {
      perfil: "Síndicos",
      descricao: "recebem questionamentos sobre o rateio e precisam de resposta técnica",
    },
    {
      perfil: "Administradoras",
      descricao: "querem segurança no cálculo das cotas condominiais",
    },
    {
      perfil: "Condôminos com dúvida sobre o rateio",
      descricao: "suspeitam que pagam mais do que deveriam",
    },
    {
      perfil: "Compradores de unidades",
      descricao: "querem conferir a fração antes de fechar negócio",
    },
  ],
  quandoTitulo: "Quando contratar a Conferência:",
  quando: [
    {
      titulo: "Suspeita de erro na fração registrada",
      descricao: "divergência entre área real e registro",
    },
    {
      titulo: "Disputas sobre rateio de despesas",
      descricao: "a discussão só termina com um cálculo técnico isento",
    },
    {
      titulo: "Antes da compra de uma unidade",
      descricao: "a fração define quanto você pagará de condomínio para sempre",
    },
    {
      titulo: "Reformas que alteram área privativa",
      descricao: "ampliações e incorporações mudam a conta",
    },
  ],
  dor: {
    imagem: "/images/dor/dor-notificacao.webp",
    imagemAlt: "Síndico preocupado ao ler notificação sobre rateio do condomínio",
    titulo: "Fração errada é cobrança errada, todo mês",
    texto:
      "Se a fração ideal está incorreta, alguém paga mais e alguém paga menos do que deveria, mês após mês. Quando os condôminos percebem, vira disputa, e a cobrança acumulada de anos é difícil de desfazer sem um cálculo técnico que comprove o certo.",
    pontos: [
      "Rateio injusto repetido em cada cobrança",
      "Disputa entre condôminos por valores acumulados",
      "Dificuldade de corrigir sem laudo técnico",
    ],
    whatsappMsg: "Olá! Quero conferir a fração ideal do meu condomínio.",
  },
  recebeTitulo: "O que você recebe:",
  recebe: [
    {
      item: "Levantamento físico das unidades",
      detalhe: "medição real das áreas envolvidas",
    },
    {
      item: "Conferência contra registro e memorial",
      detalhe: "comparação técnica do que consta com o que existe",
    },
    {
      item: "Cálculo técnico da fração correta",
      detalhe: "memória de cálculo completa e auditável",
    },
    {
      item: "Laudo assinado por engenheiro",
      detalhe: "documento utilizável junto ao registro de imóveis e em disputas",
    },
  ],
  passos: PASSOS_FRACAO_IDEAL,
  urgenciaTexto:
    "Cada rateio emitido com fração errada é uma cobrança a corrigir depois.",
  faq: [
    {
      pergunta: "O laudo serve para alterar a matrícula?",
      resposta:
        "O laudo é o fundamento técnico do pedido. A alteração em si segue o rito do registro de imóveis e, em alguns casos, depende de aprovação em assembleia e de orientação jurídica.",
    },
    {
      pergunta: "E se a fração estiver errada, o que fazer?",
      resposta:
        "O laudo aponta o valor correto e a origem do erro. Com isso, o condomínio decide entre retificar o registro ou ajustar a convenção, com base em dado técnico e não em opinião.",
    },
    {
      pergunta: "Precisa entrar em todas as unidades?",
      resposta:
        "Depende do escopo. Em muitos casos, a conferência das tipologias e das áreas comuns é suficiente. O escopo exato é definido na proposta.",
    },
    {
      pergunta: "Quanto tempo demora?",
      resposta:
        "Varia com o número de unidades e a disponibilidade de documentação (projetos, memorial, convenção). O prazo é definido na proposta.",
    },
    {
      pergunta: "Quanto custa?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
  ],
};
