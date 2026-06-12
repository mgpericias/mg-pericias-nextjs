import type { LandingPasso } from "@/components/LandingTemplate";
import { SOLICITACAO_PADRAO } from "@/lib/landing-helpers";

export const PASSOS_INSERCAO_PREDIAL: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Vistoria técnica",
    descricao:
      "Vistoria presencial de 1 a 3 dias, conforme o porte do condomínio, concentrada nas áreas comuns.",
  },
  {
    num: "03",
    titulo: "Análise e classificação",
    descricao:
      "Cada anomalia é classificada por origem e grau de risco, conforme a NBR 16747.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao:
      "Laudo completo em 15 a 30 dias após a vistoria. Apresentação em assembleia, se você quiser.",
  },
];

export const PASSOS_AUDITORIA: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Vistoria contra o projeto",
    descricao: "Conferimos a edificação contra projeto e memorial descritivo, item a item.",
  },
  {
    num: "03",
    titulo: "Identificação de vícios",
    descricao:
      "Cada divergência é documentada com foto, localização e fundamento técnico.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao: "Você recebe o dossiê pronto para acionar a construtora dentro da garantia.",
  },
];

export const PASSOS_PARECER: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Análise da questão",
    descricao:
      "Estudamos a documentação e, quando necessário, fazemos visita técnica ao ponto em discussão.",
  },
  {
    num: "03",
    titulo: "Posicionamento",
    descricao: "Formamos a conclusão técnica com fundamento e independência.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao: "Parecer objetivo e assinado, no prazo mais curto do nosso portfólio.",
  },
];

export const PASSOS_INSPECAO_FACHADA: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Sobrevoo com drone",
    descricao:
      "Agendamos o sobrevoo e registramos todas as fachadas em alta resolução. Sem montagem de equipamentos.",
  },
  {
    num: "03",
    titulo: "Análise das imagens",
    descricao: "Engenheiro avalia cada fachada e classifica a criticidade do que foi encontrado.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao:
      "Relatório ilustrado em poucos dias, com recomendação objetiva do próximo passo.",
  },
];

export const PASSOS_MAPEAMENTO: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Inspeção de proximidade",
    descricao:
      "Inspeção fachada por fachada, com ensaios como o teste de percussão onde necessário.",
  },
  {
    num: "03",
    titulo: "Classificação",
    descricao:
      "Cada patologia é registrada por área e gravidade, com indicação da técnica de reparo.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao: "Mapeamento completo com escopo pronto para orçar o restauro entre empresas.",
  },
];

export const PASSOS_ANALISE_ESTRUTURAL: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Inspeção da estrutura",
    descricao:
      "Avaliação visual e instrumental de pilares, vigas e lajes. Situação crítica é comunicada de imediato.",
  },
  {
    num: "03",
    titulo: "Análise das causas",
    descricao: "Identificamos a origem das manifestações e avaliamos risco e estabilidade.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao: "Laudo com a gravidade real e o plano de intervenção, na ordem certa.",
  },
];

export const PASSOS_FRACAO_IDEAL: LandingPasso[] = [
  { num: "01", titulo: "Solicitação", descricao: SOLICITACAO_PADRAO },
  {
    num: "02",
    titulo: "Levantamento",
    descricao:
      "Medição física das unidades e conferência da documentação: registro, memorial e convenção.",
  },
  {
    num: "03",
    titulo: "Cálculo técnico",
    descricao: "Recalculamos a fração ideal com memória de cálculo completa e auditável.",
  },
  {
    num: "04",
    titulo: "Entrega",
    descricao: "Laudo assinado, utilizável junto ao registro de imóveis e em disputas.",
  },
];

export const PASSOS_GESTAO_OBRAS: LandingPasso[] = [
  {
    num: "01",
    titulo: "Escopo",
    descricao: "Definimos tecnicamente o que será contratado. Escopo claro evita aditivo depois.",
  },
  {
    num: "02",
    titulo: "Cotação e análise",
    descricao: "Qualificamos fornecedores, comparamos propostas e recomendamos com fundamento.",
  },
  {
    num: "03",
    titulo: "Contratação",
    descricao: "Apoiamos o contrato com critérios de medição e pagamento que protegem o condomínio.",
  },
  {
    num: "04",
    titulo: "Fiscalização",
    descricao: "Acompanhamos a execução com relatórios e medições até a entrega final.",
  },
];
