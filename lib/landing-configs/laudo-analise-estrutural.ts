import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_ANALISE_ESTRUTURAL } from "@/lib/landing-configs/passos";

export const metadata = {
  title: "Laudo de Análise Estrutural em Vitória/ES | MG Perícias",
  description:
    "Análise estrutural de edificações em Vitória e Grande Vitória. Diagnóstico técnico para identificar riscos, orientar reformas e proteger seu patrimônio.",
};

export const data: LandingData = {
  slug: "laudo-analise-estrutural",
  origem: "laudo-analise-estrutural",
  animacao: "lupa",
  lupaInspecao: {
    imagem: "/images/cards/card-analise-estrutural.webp",
    marcadores: [
      { rotulo: "Armadura exposta", left: "38%", top: "30%" },
      { rotulo: "Corrosão avançada", left: "55%", top: "62%" },
      { rotulo: "Desplacamento do cobrimento", left: "75%", top: "40%" },
    ],
  },
  h1: "Laudo de Análise Estrutural em Vitória/ES",
  subtitulo:
    "Fissuras em pilares, vigas ou lajes tiram seu sono? Um especialista avalia a gravidade real, explica a causa e indica exatamente o que fazer, sem alarmismo e sem subestimar.",
  whatsappMsg: "Olá! Quero um orçamento de Laudo de Análise Estrutural.",
  nomeServicoDuvida: "Laudo de Análise Estrutural",
  credibilidade: [
    "+13 anos de experiência da equipe",
    "Engenheiro especialista em estruturas",
    "Avaliação de risco objetiva",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-analise-estrutural.webp",
  paraQuemTitulo: "Para quem é a Análise Estrutural:",
  paraQuem: [
    {
      perfil: "Condomínios com sinais de patologia estrutural",
      descricao: "fissuras em pilares, vigas ou lajes",
    },
    {
      perfil: "Síndicos que receberam um laudo preocupante",
      descricao: "querem uma segunda opinião especializada",
    },
    {
      perfil: "Proprietários de prédios antigos",
      descricao: "querem conhecer a real condição da estrutura",
    },
    {
      perfil: "Condomínios planejando obras que mexem na estrutura",
      descricao: "precisam saber o que pode e o que não pode",
    },
  ],
  quandoTitulo: "Quando contratar a Análise Estrutural:",
  quando: [
    {
      titulo: "Fissuras significativas em elementos estruturais",
      descricao: "pilares, vigas e lajes pedem avaliação especializada",
    },
    {
      titulo: "Recalques perceptíveis",
      descricao: "pisos desnivelados, portas que deixaram de fechar, trincas inclinadas",
    },
    {
      titulo: "Após eventos extremos",
      descricao: "chuvas intensas, alagamentos ou impactos na edificação",
    },
    {
      titulo: "Antes de obras que alterem a estrutura",
      descricao: "remoção de paredes, aberturas em lajes, sobrecargas novas",
    },
  ],
  dor: {
    imagem: "/images/dor/dor-bomba.webp",
    imagemAlt: "Engenheiro avaliando trinca estrutural em edificação",
    titulo: "Problema estrutural não melhora sozinho",
    texto:
      "Fissura em pilar, viga ou laje pode ser superficial ou pode ser sinal de algo sério. Sem avaliação especializada, o condomínio decide no escuro: ou gasta com reforço desnecessário, ou ignora um risco real. As duas saídas são caras.",
    pontos: [
      "Risco estrutural subestimado por falta de diagnóstico",
      "Gasto com reforço que talvez não fosse preciso",
      "A intervenção fica maior quanto mais se adia",
    ],
    whatsappMsg: "Olá! Quero uma análise estrutural do meu prédio.",
  },
  recebeTitulo: "O que você recebe:",
  recebe: [
    {
      item: "Inspeção visual e instrumental",
      detalhe: "avaliação direta dos elementos estruturais",
    },
    {
      item: "Análise das causas",
      detalhe: "o que está provocando as manifestações patológicas",
    },
    {
      item: "Avaliação de risco e estabilidade",
      detalhe: "a gravidade real do problema, sem alarmismo e sem subestimar",
    },
    {
      item: "Recomendação técnica de intervenções",
      detalhe: "o que fazer, em que ordem e com que urgência",
    },
  ],
  passos: PASSOS_ANALISE_ESTRUTURAL,
  urgenciaTexto:
    "Problema estrutural não melhora sozinho. Quanto antes a causa for identificada, menor a intervenção.",
  faq: [
    {
      pergunta: "O laudo identifica risco de desabamento?",
      resposta:
        "A análise avalia a estabilidade da estrutura e classifica o risco com critério técnico. Se houver situação crítica, ela é comunicada de imediato, antes mesmo da entrega do laudo.",
    },
    {
      pergunta: "É preciso desocupar o prédio durante a análise?",
      resposta:
        "Na grande maioria dos casos, não. A rotina do condomínio segue normal durante a inspeção.",
    },
    {
      pergunta: "A análise inclui cálculo estrutural?",
      resposta:
        "O escopo padrão é diagnóstico: inspeção, causa e recomendação. Quando o caso exige verificação por cálculo, isso é indicado e proposto como etapa complementar.",
    },
    {
      pergunta: "Fissura em parede é sempre problema estrutural?",
      resposta:
        "Não. Muitas fissuras são em alvenaria ou revestimento, sem comprometer a estrutura. A análise diferencia exatamente isso e evita gasto com reforço desnecessário.",
    },
    {
      pergunta: "Quanto custa?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
  ],
};
