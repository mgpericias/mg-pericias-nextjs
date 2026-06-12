import type { LandingData } from "@/components/LandingTemplate";
import { CREDIBILIDADE_GEO } from "@/lib/landing-helpers";
import { PASSOS_VISTORIA_CHAVES } from "@/lib/landing-configs/passos";

export const metadata = {
  title: "Vistoria de Recebimento de Chaves em Vitória/ES | MG Perícias",
  description:
    "Vistoria de recebimento de chaves em Vitória e Grande Vitória. Conferimos seu imóvel novo antes da assinatura e registramos cada defeito para a construtora corrigir.",
};

export const data: LandingData = {
  slug: "vistoria-recebimento-chaves",
  origem: "vistoria-recebimento-chaves",
  h1: "Vistoria de Recebimento de Chaves em Vitória/ES",
  subtitulo:
    "Vai receber as chaves do seu imóvel novo? Antes de assinar, um engenheiro confere cada detalhe. Pisos, esquadrias, pintura, hidráulica e elétrica. Tudo que estiver fora do padrão entra em laudo para a construtora corrigir, enquanto a responsabilidade ainda é dela.",
  whatsappMsg: "Olá! Tenho interesse na Vistoria de Recebimento de Chaves.",
  nomeServicoDuvida: "a Vistoria de Recebimento de Chaves",
  credibilidade: [
    "Vistoria antes da assinatura",
    "Laudo com força para a construtora",
    CREDIBILIDADE_GEO,
  ],
  cardImg: "/images/cards/card-recebimento-chaves.webp",
  paraQuemTitulo: "Para quem é a Vistoria de Recebimento de Chaves",
  paraQuem: [
    {
      perfil: "Compradores de imóvel novo",
      descricao:
        "vão receber a unidade e querem garantir que está conforme o contratado",
    },
    {
      perfil: "Investidores que compram na planta",
      descricao: "querem proteger o valor do imóvel desde a entrega",
    },
    {
      perfil: "Famílias mudando para o primeiro imóvel",
      descricao:
        "não conhecem os pontos técnicos que costumam passar despercebidos",
    },
    {
      perfil: "Quem comprou de construtora e desconfia de acabamento",
      descricao: "quer um olhar técnico independente antes de assinar",
    },
  ],
  quandoTitulo: "Quando contratar a vistoria",
  quando: [
    {
      titulo: "Recebeu a convocação para vistoria da construtora",
      descricao:
        "o melhor momento é antes da sua assinatura de recebimento",
    },
    {
      titulo: "Antes de assinar o termo de entrega",
      descricao:
        "depois da assinatura, provar que o defeito é de fábrica fica mais difícil",
    },
    {
      titulo: "Imóvel comprado na planta",
      descricao: "o que foi prometido no memorial precisa estar entregue",
    },
    {
      titulo: "Primeira compra, sem experiência técnica",
      descricao: "um engenheiro enxerga o que o olho leigo não vê",
    },
  ],
  recebeTitulo: "O que está incluso na vistoria",
  recebe: [
    {
      item: "Vistoria técnica completa da unidade",
      detalhe: "pisos, paredes, forro, esquadrias, portas, bancadas e revestimentos",
    },
    {
      item: "Teste dos sistemas",
      detalhe: "pontos de elétrica, hidráulica, ralos, registros e funcionamento geral",
    },
    {
      item: "Registro fotográfico de cada defeito",
      detalhe: "localização e descrição técnica de cada não conformidade",
    },
    {
      item: "Laudo para a construtora",
      detalhe:
        "documento que lista os reparos a serem feitos antes ou logo após a entrega",
    },
    {
      item: "Checklist de conferência",
      detalhe: "lista objetiva do que foi verificado, item a item",
    },
    {
      item: "Orientação na entrega",
      detalhe: "explicamos o que aceitar, o que recusar e o que exigir por escrito",
    },
  ],
  prazoFormato:
    "Prazo de entrega: laudo em poucos dias após a vistoria. Formato: PDF ilustrado assinado digitalmente.",
  passos: PASSOS_VISTORIA_CHAVES,
  urgenciaTexto:
    "A construtora marca a vistoria com data definida. Agende a sua avaliação técnica com antecedência para não perder o prazo de conferência antes da assinatura.",
  assembleiaTitulo: "Vamos com você no dia da entrega",
  assembleiaTexto:
    "Você não precisa enfrentar a vistoria sozinho, sem saber o que olhar. Nosso engenheiro vai junto, confere cada ponto e te orienta na hora sobre o que aceitar e o que exigir por escrito. Você assina o recebimento com segurança.",
  faq: [
    {
      pergunta: "Por que fazer a vistoria antes de assinar o recebimento?",
      resposta:
        "Depois que você assina o termo de entrega, a construtora pode alegar que os defeitos surgiram com o uso. A vistoria antes da assinatura documenta o estado real da unidade no momento da entrega, e isso muda o jogo a seu favor.",
    },
    {
      pergunta: "A construtora é obrigada a deixar o engenheiro entrar?",
      resposta:
        "A vistoria de recebimento é um direito do comprador. Você pode ser acompanhado por um profissional de sua confiança no momento de conferir a unidade que está adquirindo.",
    },
    {
      pergunta: "O que vocês conferem na vistoria?",
      resposta:
        "Pisos, paredes, forro, pintura, esquadrias, portas, bancadas, revestimentos e os sistemas de elétrica e hidráulica: pontos de tomada, registros, ralos e funcionamento geral. Tudo com checklist técnico.",
    },
    {
      pergunta: "E se a construtora não corrigir os defeitos?",
      resposta:
        "O laudo é a prova técnica de que os problemas existiam na entrega. Ele dá base para você exigir a correção e, se necessário, acionar a construtora dentro da garantia.",
    },
    {
      pergunta: "Quanto custa a vistoria?",
      resposta:
        "Cada proposta é personalizada. O investimento depende do tamanho e do tipo do imóvel. Você envia os dados pelo WhatsApp e recebe a proposta fechada em até 24h, sem compromisso. Sem surpresa depois: o valor proposto é o valor cobrado.",
    },
    {
      pergunta: "Vocês atendem toda a Grande Vitória?",
      resposta:
        "Sim. Atendemos Vitória, Vila Velha, Serra, Cariacica e municípios do ES. Para outras cidades, consulte sob demanda.",
    },
  ],
};
