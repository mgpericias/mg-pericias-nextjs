import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_INSERCAO_PREDIAL } from "@/lib/landing-configs/passos";

export const data: LandingData = {
  slug: "laudo-inspecao-predial",
  origem: "laudo-inspecao-predial",
  animacao: "lupa",
  lupaInspecao: {
    imagem: "/images/cards/card-mapeamento-fachadas.webp",
    marcadores: [
      { rotulo: "Fissura em revestimento", left: "30%", top: "34%" },
      { rotulo: "Infiltração ativa", left: "62%", top: "58%" },
      { rotulo: "Risco de desplacamento", left: "80%", top: "26%" },
    ],
  },
  h1: "Laudo de Inspeção Predial em Vitória/ES",
  subtitulo:
    "Laudo vencido, fissuras aparecendo ou cobrança da administradora? Receba o diagnóstico completo do seu prédio, conforme a ABNT NBR 16747, com prioridades claras do que fazer primeiro.",
  whatsappMsg:
    "Olá! Quero um orçamento de Laudo de Inspeção Predial para meu condomínio.",
  nomeServicoDuvida: "Laudo de Inspeção Predial",
  credibilidade: [
    "+13 anos de experiência",
    "Conforme ABNT NBR 16747",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-inspecao-predial.webp",
  paraQuemTitulo: "Para quem é o Laudo de Inspeção Predial",
  paraQuem: [
    {
      perfil: "Síndicos",
      descricao:
        "assumiram a gestão e precisam diagnosticar o estado real da edificação",
    },
    {
      perfil: "Administradoras",
      descricao:
        "gerenciam múltiplos condomínios e precisam de um parceiro técnico confiável",
    },
    {
      perfil: "Conselhos consultivos",
      descricao:
        "querem decidir reformas com base em dados, não em palpite",
    },
  ],
  quandoTitulo: "Quando contratar uma Inspeção Predial",
  quando: [
    {
      titulo: "Cumprimento da ABNT NBR 16747",
      descricao:
        "a norma estabelece a inspeção periódica; sem o laudo, o condomínio fica fora de conformidade",
    },
    {
      titulo: "Vencimento de laudo anterior",
      descricao:
        "laudos têm validade; renovar antes de vencer evita problemas com seguradoras",
    },
    {
      titulo: "Antes de uma grande reforma",
      descricao:
        "conhecer o estado atual evita escopo errado e custo extra",
    },
    {
      titulo: "Identificação de patologias",
      descricao:
        "rachaduras, infiltrações e manchas em fachada que precisam de diagnóstico técnico",
    },
    {
      titulo: "Disputas e laudos contestados",
      descricao:
        "quando há divergência entre síndicos, moradores ou prestadores",
    },
  ],
  dor: {
    imagem: "/images/dor/dor-trinca.webp",
    imagemAlt: "Síndico diante de trinca no prédio, sinal de problema a tratar",
    titulo: "O prédio dá sinais antes de cobrar a conta",
    texto:
      "Anomalias ignoradas não desaparecem, elas se agravam. Quando viram emergência, o custo do reparo é multiplicado e a segurança dos moradores entra em jogo. O laudo mostra o que tratar primeiro, enquanto ainda é manutenção e não acidente.",
    pontos: [
      "Pequenos problemas que viram obras caras",
      "Exposição do síndico em questões de seguro e disputas",
      "Risco à segurança de moradores e visitantes",
    ],
    whatsappMsg:
      "Olá! Quero um laudo de inspeção predial para o meu condomínio.",
  },
  recebeTitulo: "O que está incluso no nosso Laudo de Inspeção Predial",
  recebe: [
    {
      item: "Vistoria técnica completa",
      detalhe:
        "inspeção presencial de fachadas, estrutura, instalações, áreas comuns e sistemas",
    },
    {
      item: "Classificação de anomalias",
      detalhe:
        "cada problema é classificado por origem (endógena, exógena, funcional ou natural) e grau de risco",
    },
    {
      item: "Recomendações priorizadas",
      detalhe:
        "lista de ações com prioridade (crítica, regular, prevenção) e estimativa de prazo",
    },
    {
      item: "Documentação fotográfica",
      detalhe: "registro técnico de todas as ocorrências",
    },
    {
      item: "Laudo conforme ABNT NBR 16747",
      detalhe:
        "documento válido para órgãos públicos, seguradoras e disputas",
    },
    {
      item: "Apresentação para o condomínio",
      detalhe:
        "disponibilidade para apresentar o laudo em assembleia, sob demanda",
    },
  ],
  passos: PASSOS_INSERCAO_PREDIAL,
  prazoFormato:
    "Prazo de entrega: 15 a 30 dias após a vistoria, conforme a complexidade. Formato: PDF assinado digitalmente.",
  urgenciaTexto:
    "Condomínios costumam aprovar o orçamento do ano com o laudo em mãos. Quanto antes a vistoria, mais tempo para planejar.",
  faq: [
    {
      pergunta: "O Laudo de Inspeção Predial é obrigatório?",
      resposta:
        "A ABNT NBR 16747:2020 estabelece a inspeção predial periódica como prática de conformidade técnica. A periodicidade depende da idade e do tipo da edificação. Sem o laudo, o condomínio fica exposto em questões com seguradoras e em disputas.",
    },
    {
      pergunta: "De quanto em quanto tempo a inspeção precisa ser refeita?",
      resposta:
        "A periodicidade varia conforme a idade do prédio e o nível de inspeção (Nível 1, 2 ou 3 da NBR). Para a maioria dos condomínios residenciais do Estado do Espírito Santo, a recomendação fica entre 1 e 3 anos.",
    },
    {
      pergunta: "Quanto custa um Laudo de Inspeção Predial?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
    {
      pergunta: "Quem pode emitir o laudo?",
      resposta:
        "Engenheiro civil registrado no CREA, com formação em Engenharia Diagnóstica. Toda a equipe da MG Perícias atende esse requisito.",
    },
    {
      pergunta: "O laudo serve para a seguradora do condomínio?",
      resposta:
        "Sim. Seguradoras costumam exigir o laudo conforme a NBR 16747 para coberturas relacionadas à edificação.",
    },
    {
      pergunta: "A vistoria atrapalha a rotina dos moradores?",
      resposta:
        "A vistoria é minimamente invasiva e acontece nas áreas comuns. O acesso a unidades só é solicitado em casos específicos, sempre com aviso prévio.",
    },
    {
      pergunta: "Vocês atendem todo o Estado do Espírito Santo?",
      resposta:
        "Sim. Atendemos condomínios em todo o Estado do Espírito Santo.",
    },
  ],
};

export const metadata = {
  title: "Laudo de Inspeção Predial em Vitória/ES | MG Perícias",
  description:
    "Laudo de Inspeção Predial conforme ABNT NBR 16747 para condomínios em Vitória e Grande Vitória. +13 anos de Engenharia Diagnóstica. Solicite orçamento.",
};
