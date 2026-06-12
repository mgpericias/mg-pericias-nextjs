import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO, FAQ_PRECO_RESPOSTA } from "@/lib/landing-helpers";
import { PASSOS_INSPECAO_FACHADA } from "@/lib/landing-configs/passos";

export const data: LandingData = {
  slug: "inspecao-preliminar-fachada",
  origem: "inspecao-preliminar-fachada",
  h1: "Inspeção Preliminar de Fachada com Drone em Vitória/ES",
  subtitulo:
    "Manchas ou fissuras na fachada e dúvida se é grave? O sobrevoo com drone mostra o estado real do revestimento em poucos dias, com custo menor, e indica se vale avançar para um mapeamento completo.",
  whatsappMsg:
    "Olá! Quero um orçamento de Inspeção Preliminar de Fachada com drone para meu condomínio.",
  nomeServicoDuvida: "Inspeção Preliminar de Fachada",
  credibilidade: [
    "Sem rapel e sem balancinho",
    "Resultado em poucos dias",
    "Custo menor que o mapeamento completo",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-inspecao-fachada.webp",
  paraQuemTitulo: "Para quem é a Inspeção Preliminar de Fachada",
  paraQuem: [
    {
      perfil: "Síndicos em dúvida sobre a fachada",
      descricao:
        "querem saber a real situação antes de aprovar um serviço maior",
    },
    {
      perfil: "Condomínios com orçamento limitado",
      descricao: "precisam de um diagnóstico inicial acessível",
    },
    {
      perfil: "Administradoras",
      descricao:
        "querem padronizar uma triagem periódica das fachadas da carteira",
    },
    {
      perfil: "Conselhos consultivos",
      descricao:
        "precisam de imagens e de uma avaliação técnica para decidir em assembleia",
    },
  ],
  quandoTitulo: "Quando contratar a Inspeção Preliminar",
  quando: [
    {
      titulo: "Sinais visíveis na fachada",
      descricao:
        "manchas, fissuras ou peças de revestimento soltas vistas do térreo",
    },
    {
      titulo: "Antes de decidir por um mapeamento completo",
      descricao:
        "a inspeção indica se o investimento maior se justifica",
    },
    {
      titulo: "Triagem periódica",
      descricao:
        "acompanhamento visual do envelhecimento da fachada ao longo dos anos",
    },
    {
      titulo: "Após eventos extremos",
      descricao:
        "chuvas intensas e ventanias podem agravar patologias existentes",
    },
  ],
  mostrarRiscoSindico: true,
  recebeTitulo: "O que você recebe",
  recebe: [
    {
      item: "Sobrevoo completo com drone",
      detalhe:
        "registro em alta resolução de todas as fachadas, inclusive áreas sem acesso visual do térreo",
    },
    {
      item: "Relatório técnico ilustrado",
      detalhe:
        "principais ocorrências identificadas, com localização e imagem",
    },
    {
      item: "Avaliação de criticidade",
      detalhe:
        "indicação do que merece atenção imediata e do que pode ser acompanhado",
    },
    {
      item: "Recomendação objetiva",
      detalhe:
        "se o quadro pede mapeamento completo, reparo pontual ou apenas monitoramento",
    },
  ],
  passos: PASSOS_INSPECAO_FACHADA,
  prazoFormato:
    "Prazo de entrega: poucos dias após o sobrevoo. Formato: PDF ilustrado assinado digitalmente.",
  urgenciaTexto:
    "O período de chuvas agrava infiltrações e desplacamentos. Antecipe o diagnóstico.",
  faq: [
    {
      pergunta: "Qual a diferença para o Mapeamento de Fachadas?",
      resposta:
        "O mapeamento inclui ensaios de proximidade, como o teste de percussão, e gera o diagnóstico completo exigido antes de um restauro. A inspeção preliminar é visual, feita com drone, e serve para uma leitura rápida e econômica do estado geral.",
    },
    {
      pergunta: "A inspeção com drone substitui o teste de percussão?",
      resposta:
        "Não. O drone identifica o que é visível: fissuras, manchas, desplacamentos aparentes. Áreas com som cavo só são detectadas por percussão. Por isso a inspeção é preliminar: ela orienta a decisão sobre o próximo passo.",
    },
    {
      pergunta: "O drone consegue avaliar prédios altos?",
      resposta:
        "Sim. Essa é a maior vantagem: qualquer altura é alcançada sem montagem de equipamentos na fachada.",
    },
    {
      pergunta: "Os moradores precisam liberar acesso aos apartamentos?",
      resposta:
        "Não. Todo o trabalho é externo. Avisamos o condomínio sobre o dia do sobrevoo.",
    },
    {
      pergunta: "Quanto custa?",
      resposta: FAQ_PRECO_RESPOSTA,
    },
  ],
};

export const metadata = {
  title: "Inspeção de Fachada com Drone em Vitória/ES | MG Perícias",
  description:
    "Inspeção de fachada com drone em Vitória e Grande Vitória. Visão rápida e econômica do estado do revestimento para orientar a decisão do síndico. Solicite orçamento.",
};
