import type { LandingConfig } from "@/components/LandingTemplate";

export const gestaoFiscalizacaoObrasConfig: LandingConfig = {
  origem: "gestao-fiscalizacao-obras",

  hero: {
    titulo: "Gestão e Fiscalização de Obras em Condomínios",
    subtitulo:
      "Acompanhamento técnico independente para o seu condomínio gastar o orçamento certo e a obra sair como foi contratada.",
    ctaTexto: "Solicite uma avaliação gratuita",
    placeholderImagem: "Foto: gestão de obras",
  },

  paraQuem: {
    titulo: "Esta solução é para você que...",
    itens: [
      "É síndico e vai tocar uma obra no condomínio — e quer segurança de que cada real está sendo bem aplicado",
      "É administradora e gerencia vários condomínios — e precisa de respaldo técnico sem depender da empreiteira",
      "Faz parte do conselho e precisa prestar contas à assembleia com transparência e documentação clara",
    ],
    fecho: "Se você se identifica, a MG Perícias pode acompanhar essa obra com você.",
  },

  solucao: {
    titulo: "Como a MG Perícias protege o condomínio durante a obra",
    texto:
      "Acompanhamos a obra do orçamento à entrega: analisamos o escopo contratado, visitamos o canteiro nas etapas críticas e conferimos se o que foi pago corresponde ao que foi realmente executado. Com mais de 13 anos de experiência e foco exclusivo em condomínios, ajudamos síndicos e administradoras a evitar retrabalho, desperdício e aquela surpresa desagradável na assembleia — quando a obra estoura o orçamento ou o serviço não fica como prometido.",
    diferenciais: [
      "Fiscalização independente — sem vínculo com construtora ou empreiteira",
      "+13 anos acompanhando obras em condomínios",
      "Relatórios em linguagem clara para conselho e assembleia",
      "Atendimento na Grande Vitória (Vitória, Vila Velha, Serra e Cariacica)",
    ],
    autoridade: "Experiência comprovada em gestão e fiscalização de obras condominiais",
  },

  portfolio: {
    texto: "Baixar portfólio de obras",
    href: "/obra",
  },

  comoFunciona: {
    titulo: "Como funciona o acompanhamento",
    passos: [
      {
        numero: "Passo 1",
        titulo: "Análise do escopo e do contrato da obra",
        descricao:
          "Revisamos o que foi contratado, os valores e os prazos — para você começar a obra sabendo exatamente o que esperar.",
      },
      {
        numero: "Passo 2",
        titulo: "Vistorias técnicas durante a execução",
        descricao:
          "Visitamos o condomínio nas etapas importantes e registramos o que está sendo feito, com fotos e observações objetivas.",
      },
      {
        numero: "Passo 3",
        titulo: "Conferência de medições e do que foi entregue",
        descricao:
          "Comparamos o serviço executado com o que foi cobrado, evitando pagamento por trabalho incompleto ou mal executado.",
      },
      {
        numero: "Passo 4",
        titulo: "Relatórios claros para conselho e assembleia",
        descricao:
          "Você recebe documentação pronta para apresentar — sem jargão de engenharia, com o que importa para a decisão do condomínio.",
      },
    ],
    reforco: "A avaliação inicial é gratuita e sem compromisso.",
    ctaTexto: "SOLICITAR AVALIAÇÃO GRATUITA",
  },

  urgencia: {
    titulo: "Por que não deixar a obra sem acompanhamento técnico",
    texto:
      "Obra mal fiscalizada costuma estourar o orçamento — e o problema só aparece quando já é tarde. Serviço executado de qualidade duvidosa vira infiltração, retrabalho e custo muito maior no ano seguinte. Sem respaldo técnico, o síndico fica exposto na hora de prestar contas ao conselho e à assembleia, sem como demonstrar se o condomínio recebeu o que pagou. Quanto antes houver acompanhamento independente, mais fácil corrigir desvios, proteger o caixa do condomínio e evitar conflito entre moradores.",
  },

  faq: {
    titulo: "Perguntas frequentes",
    itens: [
      {
        pergunta: "A MG executa a obra?",
        resposta:
          "Não. Atuamos como fiscalização independente, defendendo o interesse do condomínio, sem vínculo com a construtora ou empreiteira.",
      },
      {
        pergunta: "Serve para reforma pequena também?",
        resposta:
          "Sim. Qualquer obra em que o condomínio queira garantir que está pagando pelo que realmente recebe merece acompanhamento técnico.",
      },
      {
        pergunta: "Como recebo os relatórios?",
        resposta:
          "Em linguagem clara, com o essencial para apresentar ao conselho e à assembleia — sem precisar ser engenheiro para entender.",
      },
      {
        pergunta: "Preciso pagar pela avaliação inicial?",
        resposta: "Não. A avaliação inicial é gratuita e sem compromisso.",
      },
      {
        pergunta: "Vocês atendem qual região?",
        resposta: "Toda a Grande Vitória: Vitória, Vila Velha, Serra e Cariacica.",
      },
    ],
  },

  formulario: {
    titulo: "Solicite sua avaliação gratuita",
    submitTexto: "SOLICITAR AVALIAÇÃO GRATUITA",
    sucessoTexto: "Recebemos seus dados! Em breve entraremos em contato.",
    whatsappUrl:
      "https://wa.me/5527999704394?text=Ol%C3%A1!%20Vim%20pela%20p%C3%A1gina%20de%20gest%C3%A3o%20e%20fiscaliza%C3%A7%C3%A3o%20de%20obras%20e%20quero%20solicitar%20uma%20avalia%C3%A7%C3%A3o.",
  },
};
