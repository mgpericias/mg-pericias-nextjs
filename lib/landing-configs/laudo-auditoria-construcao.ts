import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_AUDITORIA } from "@/lib/landing-configs/passos";

export const data: LandingData = {
  slug: "laudo-auditoria-construcao",
  origem: "laudo-auditoria-construcao",
  animacao: "lupa",
  h1: "Laudo de Auditoria da Construção em Vitória/ES",
  subtitulo:
    "Recebeu o prédio da construtora e os problemas já apareceram? Documente cada vício ainda na garantia e cobre os reparos com fundamento técnico, antes que o custo vire do condomínio.",
  whatsappMsg:
    "Olá! Quero um orçamento de Laudo de Auditoria da Construção para meu condomínio.",
  nomeServicoDuvida: "Laudo de Auditoria da Construção",
  credibilidade: [
    "+13 anos de experiência",
    "Auditoria independente",
    "Base técnica para acionar a garantia",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-auditoria-construcao.webp",
  paraQuemTitulo: "Para quem é a Auditoria da Construção",
  paraQuem: [
    {
      perfil: "Síndicos de condomínios novos",
      descricao:
        "receberam o empreendimento e querem conferir o que a construtora entregou",
    },
    {
      perfil: "Compradores de unidades",
      descricao:
        "querem documentar vícios construtivos ainda no prazo de garantia",
    },
    {
      perfil: "Conselhos consultivos",
      descricao:
        "precisam de base técnica para negociar reparos com a construtora",
    },
    {
      perfil: "Moradores de prédio novo",
      descricao:
        "querem que os problemas do prédio sejam resolvidos pela construtora, não pelo rateio",
    },
  ],
  quandoTitulo: "Quando contratar a Auditoria",
  quando: [
    {
      titulo: "Logo após a entrega das chaves",
      descricao: "o período de garantia corre desde o recebimento",
    },
    {
      titulo: "Suspeita de problemas construtivos",
      descricao: "fissuras, infiltrações ou acabamento fora do padrão",
    },
    {
      titulo: "Para acionar a construtora dentro da garantia",
      descricao: "o pedido precisa de fundamento técnico documentado",
    },
    {
      titulo: "Antes do fim dos prazos de responsabilidade",
      descricao: "depois deles, o custo do reparo vira do condomínio",
    },
  ],
  dor: {
    imagem: "/images/dor/dor-trinca.webp",
    imagemAlt: "Síndico diante de problema construtivo em prédio novo",
    titulo: "A garantia tem prazo, e ele corre contra você",
    texto:
      "Os vícios construtivos de um prédio novo têm prazo para serem cobrados da construtora. Sem auditoria, eles passam despercebidos até a garantia vencer. Depois disso, o reparo do que a construtora deveria ter feito vira rateio do condomínio.",
    pontos: [
      "Vícios não documentados a tempo",
      "Garantia que vence sem o problema ser cobrado",
      "Conta da construtora que vira conta dos condôminos",
    ],
    whatsappMsg:
      "Olá! Quero auditar a construção do meu condomínio dentro da garantia.",
  },
  recebeTitulo: "O que você recebe",
  recebe: [
    {
      item: "Vistoria completa da edificação",
      detalhe: "conferência contra projeto e memorial descritivo",
    },
    {
      item: "Identificação de divergências",
      detalhe: "vícios construtivos e itens fora de conformidade",
    },
    {
      item: "Documentação técnica",
      detalhe: "base para acionar a construtora, se necessário",
    },
    {
      item: "Recomendações priorizadas",
      detalhe: "o que cobrar primeiro e por quê",
    },
  ],
  passos: PASSOS_AUDITORIA,
  urgenciaTexto:
    "Os prazos de garantia correm desde a entrega das chaves. Cada mês sem documentar é prazo perdido.",
  faq: [
    {
      pergunta: "Qual o prazo para acionar a construtora?",
      resposta:
        "Os prazos variam conforme o tipo de vício e o que consta no contrato e na legislação civil. O ponto central é documentar tecnicamente o problema o quanto antes. Quanto mais cedo a auditoria, maior o poder de negociação do condomínio.",
    },
    {
      pergunta: "A auditoria serve como prova em processo judicial?",
      resposta:
        "O laudo é um documento técnico assinado por engenheiro com registro no CREA e ART. É utilizado como subsídio técnico em negociações e disputas.",
    },
    {
      pergunta: "A construtora é obrigada a permitir a auditoria?",
      resposta:
        "A auditoria acontece nas áreas do condomínio, que já pertencem aos condôminos após a entrega. Não depende de autorização da construtora.",
    },
    {
      pergunta: "Qual a diferença entre auditoria e inspeção predial?",
      resposta:
        "A inspeção avalia o estado de conservação ao longo da vida do prédio. A auditoria confere a qualidade do que a construtora entregou, com foco no período de garantia.",
    },
    {
      pergunta: "Quanto custa?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
  ],
};

export const metadata = {
  title: "Auditoria da Construção em Vitória/ES | MG Perícias",
  description:
    "Auditoria técnica de obras em Vitória e Grande Vitória. Verificamos qualidade, conformidade e adequação da construção entregue. +13 anos de experiência.",
};
