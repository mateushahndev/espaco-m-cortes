// 📁 lib/chat-config.ts
// Espaço M Concept — Dados do Chatbot

export const chatConfig = {
  // DADOS DA EMPRESA
  company: {
    name: 'Espaço M Concept',
    email: 'contato@espacomconcept.com.br',
    phone: '(XX) XXXXX-XXXX',
    whatsapp: '(XX) XXXXX-XXXX',
    address: 'Morada do Ouro',
    city: 'Cuiabá',
    state: 'MT',
    cnpj: 'XX.XXX.XXX/XXXX-XX',
    founded: '2020',
    hours: 'Segunda a Sábado — Consulte disponibilidade de horários',
  },

  // SERVIÇOS
  offerings: {
    type: 'serviços',
    list: [
      'Corte Feminino — Cortes personalizados com técnicas atualizadas, a partir de R$ 46',
      'Escova Clássica, Modelada/Babyliss, Torcida e Chapinha — Finalizações para todos os estilos, a partir de R$ 60',
      'Manicure & Pedicure — Do esmaltação simples à magnífica com esfoliação e massagem, a partir de R$ 23,20',
      'Química & Tratamento — Progressivas, selagens, botox, mechas/luzes, coloração e tonalizantes, a partir de R$ 80',
      'Alongamento de Unhas — Fibra tradicional, fibra formatos, gel tradicional e gel formatos, a partir de R$ 130',
      'Extensão de Cílios — Clássico fio a fio, volume russo, híbrido, power 30+, a partir de R$ 60',
      'Design de Sobrancelha — Design com ou sem refectocil, aplicação de henna, a partir de R$ 20',
      'Maquiagem — Completa, noiva e truke de make, a partir de R$ 170',
      'Depilação — Cera em todas as regiões: buço, axilas, pernas, virilha e mais, a partir de R$ 15',
      'Spa dos Pés & Plástica dos Pés — Tratamentos relaxantes e terapêuticos, a partir de R$ 85',
      'Penteado — Para ocasiões especiais, a partir de R$ 200',
    ],
    main: 'Corte Feminino, Escova e Química Capilar',
  },

  // RESPOSTAS PRONTAS
  responses: {
    about:
      'O Espaço M Concept é um salão de beleza premium localizado no coração da Morada do Ouro, Cuiabá-MT. Oferecemos uma experiência completa de beleza e bem-estar com equipe qualificada e ambiente acolhedor. Trabalhamos com corte, química, manicure, alongamento de unhas, cílios, maquiagem, depilação e spa dos pés.',
    contact: 'WhatsApp: (XX) XXXXX-XXXX | Endereço: Morada do Ouro, Cuiabá - MT',
    schedule: 'Atendemos de Segunda a Sábado. Os horários variam conforme disponibilidade de agenda. Consulte pelo WhatsApp.',
    location: 'Estamos na Morada do Ouro, Cuiabá - MT. Um ambiente acolhedor com Wi-Fi, TV, bar e lanchonete.',
    pricing: 'Nossos preços variam conforme o serviço e comprimento do cabelo (para químicas e finalizações). Temos serviços a partir de R$ 15 (depilação simples) até alongamentos e mechas premium. Consulte o catálogo completo no site ou chame no WhatsApp.',
  },

  // PERGUNTAS FREQUENTES
  faq: [
    {
      q: 'Quanto custa um corte feminino?',
      a: 'O Design de Corte Feminino custa R$ 100 (1h). Corte infantil R$ 86. Corte franja R$ 46. Temos também o Corte Especial com higienização a partir de R$ 104.',
    },
    {
      q: 'Vocês fazem progressiva?',
      a: 'Sim! Trabalhamos com Escova Progressiva tradicional e orgânica. Preços a partir de R$ 300 (curto) até R$ 480 (extra longo). Também temos selagem e botox capilar.',
    },
    {
      q: 'Quanto tempo dura o alongamento de cílios?',
      a: 'Depende da técnica: Cílios em Tela duram de 5 a 10 dias (R$ 60), Tufinho de 15 a 20 dias (R$ 90), e as técnicas Fio a Fio, Volume Russo e Híbrido duram em média 30 dias (a partir de R$ 150).',
    },
    {
      q: 'Aceitam cartão de crédito?',
      a: 'Sim! Aceitamos cartão de crédito, débito, dinheiro, PIX, vale-presente e parcelamento próprio. Também trabalhamos com Belezinha em todas as bandeiras.',
    },
    {
      q: 'Tem Wi-Fi no salão?',
      a: 'Sim! Oferecemos Wi-Fi gratuito, TV, bar e lanchonete para seu conforto durante o atendimento.',
    },
    {
      q: 'Atendem crianças?',
      a: 'Sim! Temos serviços infantis de manicure (R$ 14,60), pedicure (R$ 16,40) e corte feminino infantil (R$ 86) para crianças de até 10 anos.',
    },
    {
      q: 'Preciso agendar ou pode ir sem hora marcada?',
      a: 'Recomendamos agendamento prévio para garantir seu horário. Você agenda rapidinho pelo WhatsApp. Temos política de tolerância de 15-20 minutos para atrasos.',
    },
    {
      q: 'Como cancelar ou reagendar?',
      a: 'Pedimos que cancele ou altere com no mínimo 24h de antecedência. Você recebe uma confirmação automática via WhatsApp um dia antes do horário.',
    },
    {
      q: 'Fazem maquiagem para noiva?',
      a: 'Sim! Maquiagem de Noiva por R$ 240 (1h20). Também temos Maquiagem Completa (R$ 200) e Truke de Make (R$ 170), todas com cílios inclusos.',
    },
    {
      q: 'Qual o horário de funcionamento?',
      a: 'Atendemos de Segunda a Sábado. Os horários exatos variam conforme a agenda. Consulte a disponibilidade pelo WhatsApp.',
    },
  ],
}