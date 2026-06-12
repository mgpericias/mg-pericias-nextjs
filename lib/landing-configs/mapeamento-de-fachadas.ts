import type { LandingData } from "@/components/LandingTemplate";

export const metadata = {
  title: "Mapeamento de Fachadas em Vitória/ES | MG Perícias",
  description:
    "Mapeamento técnico de fachadas para condomínios em Vitória/ES. Diagnóstico preciso para reformas, restauros e prevenção de patologias.",
};

export const data: LandingData = {
  slug: "mapeamento-de-fachadas",
  origem: "mapeamento-de-fachadas",
  h1: "Mapeamento de Fachadas em Vitória/ES",
  subtitulo:
    "Diagnóstico técnico detalhado das fachadas do seu condomínio. Identifica patologias, classifica a gravidade e define o escopo correto do restauro ou da reforma.",
  whatsappMsg: "Olá! Quero um orçamento de Mapeamento de Fachadas para meu condomínio.",
  credibilidade: [
    "+13 anos de experiência",
    "Inspeção de proximidade com ensaios",
    "Escopo pronto para licitar o restauro",
  ],
  cardImg: "/images/cards/card-mapeamento-fachadas.webp",
  paraQuemTitulo: "Para quem é o Mapeamento de Fachadas:",
  paraQuem: [
    {
      perfil: "Condomínios que vão pintar ou restaurar",
      descricao: "precisam do diagnóstico antes de pedir orçamentos",
    },
    {
      perfil: "Síndicos preocupados com queda de revestimento",
      descricao: "desplacamento é risco de acidente e de responsabilização",
    },
    {
      perfil: "Administradoras",
      descricao: "precisam de base técnica para planejar a manutenção das fachadas da carteira",
    },
    {
      perfil: "Conselhos consultivos",
      descricao: "querem aprovar o restauro com escopo e custo bem fundamentados",
    },
  ],
  quandoTitulo: "Quando contratar o Mapeamento:",
  quando: [
    {
      titulo: "Antes de licitar pintura ou restauro",
      descricao: "sem mapeamento, cada empresa orça um escopo diferente",
    },
    {
      titulo: "Sinais visíveis de patologia",
      descricao: "descolamento, fissuras ou infiltração na fachada",
    },
    {
      titulo: "Reforma preventiva",
      descricao: "tratar cedo custa menos que recuperar depois",
    },
    {
      titulo: "Fachadas que já perderam revestimento",
      descricao: "situação de risco que exige diagnóstico imediato",
    },
  ],
  recebeTitulo: "O que você recebe:",
  recebe: [
    {
      item: "Mapeamento técnico completo",
      detalhe:
        "fachada por fachada, com inspeção de proximidade e ensaios como o teste de percussão",
    },
    {
      item: "Classificação de patologias",
      detalhe: "cada ocorrência registrada por área e gravidade",
    },
    {
      item: "Escopo técnico para orçamento",
      detalhe: "documento que iguala as propostas das empresas restauradoras",
    },
    {
      item: "Recomendação de materiais e técnicas",
      detalhe: "o reparo certo para cada tipo de patologia",
    },
  ],
  faq: [
    {
      pergunta: "O mapeamento exige acesso aos apartamentos?",
      resposta:
        "Em regra, não. O trabalho acontece pelo exterior da edificação. Acessos pontuais só são solicitados em investigações específicas, com aviso prévio.",
    },
    {
      pergunta: "Vocês usam drone para avaliar fachadas altas?",
      resposta:
        "Sim. Combinamos drone com inspeção de proximidade conforme a necessidade de cada fachada. Para uma avaliação apenas visual e de menor custo, conheça também a nossa",
      link: {
        href: "/inspecao-preliminar-fachada",
        label: "Inspeção Preliminar de Fachada",
      },
      sufixo: ".",
    },
    {
      pergunta: "O laudo serve para licitar entre empresas restauradoras?",
      resposta:
        "Sim. Esse é um dos principais usos: com o escopo técnico definido, todas as empresas orçam o mesmo serviço e a comparação fica justa.",
    },
    {
      pergunta: "Qual a diferença para a Inspeção Preliminar de Fachada?",
      resposta:
        "A preliminar é visual, com drone, e orienta a decisão inicial. O mapeamento inclui ensaios de proximidade e entrega o diagnóstico completo exigido antes de um restauro.",
    },
    {
      pergunta: "Quanto custa?",
      resposta:
        "Depende do número de fachadas, da altura e do estado de conservação. Solicite orçamento pelo WhatsApp. Em até 24h enviamos proposta.",
    },
  ],
};
