import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_PARECER } from "@/lib/landing-configs/passos";

export const data: LandingData = {
  slug: "parecer-tecnico-engenharia",
  origem: "parecer-tecnico-engenharia",
  animacao: "lupa",
  h1: "Parecer Técnico de Engenharia em Vitória/ES",
  subtitulo:
    "Dois orçamentos dizendo coisas diferentes? Assembleia travada em uma discussão técnica? Um parecer independente, assinado por engenheiro, encerra a dúvida e destrava a decisão.",
  whatsappMsg: "Olá! Preciso de um Parecer Técnico de engenharia.",
  nomeServicoDuvida: "Parecer Técnico de Engenharia",
  credibilidade: [
    "+13 anos de experiência",
    "Análise independente",
    "Documento objetivo e assinado",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-parecer-tecnico.webp",
  paraQuemTitulo: "Para quem é o Parecer Técnico",
  paraQuem: [
    {
      perfil: "Síndicos com decisões complexas",
      descricao:
        "precisam de uma posição técnica isenta antes de aprovar gastos",
    },
    {
      perfil: "Administradoras",
      descricao:
        "querem respaldo técnico para orientar os condomínios da carteira",
    },
    {
      perfil: "Conselhos consultivos",
      descricao: "precisam de fundamento para votar em assembleia",
    },
    {
      perfil: "Advogados em disputas técnicas",
      descricao: "precisam de subsídio de engenharia para o caso",
    },
  ],
  quandoTitulo: "Quando você precisa de um Parecer",
  quando: [
    {
      titulo: "Dois orçamentos com escopos divergentes",
      descricao: "qual está certo para o problema real do prédio",
    },
    {
      titulo: "Discussão entre síndico e moradores",
      descricao: "a reforma é mesmo necessária e nessa extensão",
    },
    {
      titulo: "Suporte técnico em assembleia",
      descricao:
        "uma posição de engenheiro encerra debates improdutivos",
    },
    {
      titulo: "Subsídio para decisão judicial",
      descricao: "análise técnica focada na questão em disputa",
    },
  ],
  dor: {
    imagem: "/images/dor/dor-trinca.webp",
    imagemAlt: "Síndico diante de decisão técnica difícil no condomínio",
    titulo: "Decisão sem base técnica custa caro",
    texto:
      "Aprovar a reforma errada, contratar o escopo errado ou travar a assembleia em uma discussão sem fim. Sem um parecer independente, a decisão fica no achismo, e o erro de uma escolha técnica mal feita aparece na próxima fatura do condomínio.",
    pontos: [
      "Reforma aprovada com escopo errado",
      "Assembleia paralisada por falta de uma posição técnica",
      "Dinheiro gasto na solução que não resolve",
    ],
    whatsappMsg: "Olá! Preciso de um parecer técnico para decidir com segurança.",
  },
  recebeTitulo: "O que você recebe",
  recebe: [
    {
      item: "Análise técnica focada",
      detalhe:
        "avaliação da questão específica, sem custo de um laudo completo",
    },
    {
      item: "Posicionamento fundamentado",
      detalhe:
        "conclusão objetiva e independente, assinada por engenheiro",
    },
    {
      item: "Documento curto e direto",
      detalhe: "feito para apoiar uma decisão, não para arquivar",
    },
    {
      item: "Disponibilidade para questionamentos",
      detalhe: "respondemos dúvidas sobre o conteúdo do parecer",
    },
  ],
  passos: PASSOS_PARECER,
  urgenciaTexto:
    "Decisão adiada em assembleia volta maior na próxima. Resolva com base técnica.",
  faq: [
    {
      pergunta: "Qual a diferença entre Parecer Técnico e Laudo?",
      resposta:
        "O laudo é um documento amplo, com vistoria completa e classificação de todas as anomalias. O parecer responde uma pergunta específica com conclusão objetiva. É mais rápido e de menor custo.",
    },
    {
      pergunta: "Quanto tempo leva para receber um parecer?",
      resposta:
        "Depende da complexidade da questão, mas em geral é o documento mais rápido do nosso portfólio. O prazo é definido na proposta.",
    },
    {
      pergunta: "O parecer tem validade jurídica?",
      resposta:
        "É um documento técnico assinado por engenheiro com registro no CREA e ART, utilizado como subsídio em assembleias, negociações e disputas judiciais.",
    },
    {
      pergunta: "Posso usar o parecer para contestar um orçamento de fornecedor?",
      resposta:
        "Sim. Esse é um dos usos mais comuns: validar se o escopo e a solução propostos correspondem ao problema real.",
    },
    {
      pergunta: "Quanto custa?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
  ],
};

export const metadata = {
  title: "Parecer Técnico de Engenharia em Vitória/ES | MG Perícias",
  description:
    "Parecer técnico independente para condomínios, disputas e tomadas de decisão. Engenharia Diagnóstica com +13 anos em Vitória e Grande Vitória.",
};
