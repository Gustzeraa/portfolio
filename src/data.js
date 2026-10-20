// Edite este arquivo para atualizar o conteúdo do portfólio.

export const perfil = {
  nome: "Gustavo Henrique",
  cargo: "Software Engineer",
  especialidades: ["Full Stack", "Backend", "APIs"],
  local: "Anápolis, GO",
  apresentacao:
    "Construo sistemas web com Python, Django e React, do levantamento do problema até o deploy. Hoje sou referência técnica de TI no ICTQ, cuidando do ERP, de processos e de soluções internas.",
  email: "gustavohenrique30.eng@gmail.com",
  github: "https://github.com/Gustzeraa",
  linkedin: "https://www.linkedin.com/in/ghssouza/",
  whatsapp: "https://wa.me/5562994789264",
  telefone: "(62) 99478-9264",
  // Arquivo dentro da pasta public/
  curriculo: "/curriculo-gustavo-henrique.pdf",
};

// Projetos. Campos opcionais: link (sem ele aparece "Repositório privado"),
// site, status, imagem (arquivo em public/projetos/) e detalhes (abre o resumo completo).
export const projetos = [
  {
    nome: "Asset Flow",
    resumo: "Gestão de ativos com consultas otimizadas e deploy em nuvem.",
    descricao:
      "Sistema full-stack para controle de inventário, rastreamento e organização de dados corporativos, criado a partir de uma necessidade real do trabalho.",
    tecnologias: ["Python", "Django", "React", "TypeScript", "PostgreSQL", "Docker"],
    link: "https://github.com/Gustzeraa/asset-flow",
    site: "https://asset-flow-system.vercel.app",
    imagem: "/projetos/asset-flow.png",
    detalhes: {
      problema:
        "A empresa precisava de um jeito centralizado de controlar seus ativos: saber o que existe, onde está e com quem está.",
      solucao:
        "Desenvolvi por iniciativa própria um sistema web com back-end em Django e front-end em React com TypeScript, Vite e Mantine, containerizado com Docker e publicado em nuvem.",
      decisoes: [
        "A listagem de ativos ficava lenta porque cada item disparava novas consultas ao banco (o problema N+1). Refatorei as queries com select_related e prefetch_related para trazer os dados relacionados de uma vez.",
        "Docker desde o início, para o ambiente de desenvolvimento e o de produção serem iguais.",
        "Front-end em TypeScript para ter segurança nos formatos de dados que vêm da API.",
      ],
      resultado:
        "O MVP foi apresentado formalmente à diretoria como proposta de melhoria de processo.",
    },
  },
  {
    nome: "BeautyFlow",
    status: "Em desenvolvimento",
    resumo: "Agendamento online com regras reais de um estúdio de unhas.",
    descricao:
      "Sistema de agendamento feito para uma cliente real: as clientes marcam horários pelo celular e a dona gerencia tudo por um painel administrativo.",
    tecnologias: ["React", "Vite", "Django REST Framework", "PostgreSQL"],
    imagem: "/projetos/beautyflow.png",
    detalhes: {
      problema:
        "A dona do estúdio organizava os horários manualmente e queria que as clientes pudessem ver a agenda e marcar sozinhas, sem perder o controle sobre as regras do negócio.",
      solucao:
        "Uma área da cliente, com login pela conta Google, e um painel administrativo para a dona. O calendário fica aberto para novas clientes consultarem os horários livres antes de entrar.",
      decisoes: [
        "Login com Google para evitar agendamentos falsos e spam.",
        "Pacotes quinzenais agendam a próxima sessão automaticamente 15 dias depois, com opção de um dia antes ou depois, e nunca em domingo.",
        "Cancelar um pacote cancela todas as sessões dele, e a cliente não cancela sozinha: precisa falar com a dona.",
        "A dona também consegue agendar pelo painel para clientes que não usam o sistema.",
        "Horários de hora em hora, respeitando expediente, almoço e sábado reduzido.",
      ],
      resultado:
        "Back-end e banco publicados na Railway e front-end no Cloudflare Pages, em fase final de testes antes da entrega.",
    },
  },
  {
    nome: "El Rincón",
    status: "Protótipo",
    resumo: "Landing page em três idiomas para um restaurante espanhol.",
    descricao:
      "Site para apresentar a casa, o cardápio, a localização e os horários, com contato direto pelo WhatsApp. Desenvolvi o protótipo por conta própria para apresentar à dona como proposta.",
    tecnologias: ["React", "Vite"],
    imagem: "/projetos/el-rincon.png",
    detalhes: {
      problema:
        "O restaurante não tinha presença online própria: quem queria ver o cardápio ou saber mais sobre a casa dependia de redes sociais ou de perguntar pessoalmente.",
      solucao:
        "Uma landing page com o cardápio, pensada para ser acessada pelo celular, inclusive pelo cliente sentado à mesa.",
      decisoes: [
        "Conteúdo em três idiomas, já que o público do restaurante inclui turistas.",
        "Layout pensado primeiro para o celular, que é onde o cliente consulta o cardápio.",
        "Protótipo construído antes da venda, para a dona ver o resultado funcionando em vez de só ouvir a ideia.",
      ],
      resultado: "A dona aprovou o protótipo e a proposta está em negociação.",
    },
  },
  {
    nome: "Chatbot para WhatsApp",
    resumo: "Assistente da TI que atende os colaboradores pelo WhatsApp.",
    descricao: "Chatbot com integração via API REST e fluxos automatizados de atendimento.",
    tecnologias: ["Python", "APIs REST"],
    link: "https://github.com/Gustzeraa/whatsapp-support-microservices",
    imagem: "/projetos/chatbot.png",
    detalhes: {
      problema:
        "Boa parte dos pedidos que chegavam à TI eram dúvidas repetidas, como internet lenta, impressora que não imprime ou onde encontrar o link de um sistema, e todos dependiam de alguém da equipe para responder.",
      solucao:
        "Um assistente no WhatsApp, o canal que os colaboradores já usam no dia a dia. Ele recebe a mensagem, apresenta um menu com os problemas mais comuns e orienta a pessoa, chamando um atendente quando é preciso.",
      decisoes: [
        "Menu numerado em vez de texto livre: qualquer pessoa usa sem precisar aprender comandos, e o bot não precisa interpretar frases.",
        "Saudação com o nome do colaborador, para o atendimento não parecer impessoal.",
        "Opção de falar com um atendente sempre disponível, para o bot nunca virar um beco sem saída.",
        "Links dos sistemas internos centralizados no próprio chat.",
        "Integração via API REST, separando a comunicação com o WhatsApp da lógica de atendimento.",
      ],
      resultado:
        "Os problemas mais simples passaram a ser resolvidos sem acionar a equipe, que ficou com mais tempo para o que realmente precisa de atendimento.",
    },
  },
  {
    nome: "Learnny",
    status: "Projeto integrador (TCC)",
    resumo: "Marketplace que conecta professores particulares e alunos.",
    descricao:
      "Plataforma para professores oferecerem aulas particulares e alunos que estudam para ENEM, vestibular ou concursos encontrarem quem os ensine. Fui responsável pela integração com o Moodle e ajudei a estruturar o back-end.",
    tecnologias: ["PHP", "Laravel", "MySQL", "JavaScript", "Moodle"],
    link: "https://github.com/VictorNBatista/learnny",
    imagem: "/projetos/learnny.png",
    detalhes: {
      problema:
        "Professores particulares e pessoas que querem uma renda extra dando aulas não têm um lugar simples para divulgar seu trabalho, e alunos que se preparam para ENEM, vestibular ou concursos dependem de indicação para encontrar um professor.",
      solucao:
        "Um marketplace de professores: o professor se cadastra com suas disciplinas e valores, e o aluno busca, compara e entra em contato. Ao se cadastrar, o professor ganha automaticamente uma área própria no Moodle para disponibilizar materiais e links das aulas.",
      decisoes: [
        "Minha parte: fiquei responsável pela integração com o Moodle. Quando um professor se cadastra no Learnny, o sistema cria o usuário dele e uma área própria no Moodle; quando um aluno se cadastra, também ganha o usuário no Moodle automaticamente. Também ajudei a estruturar o back-end em Laravel.",
        "Integração com o Moodle em vez de criar um ambiente de aulas do zero: o professor ganha uma plataforma de ensino completa e o projeto foca no que é novo, a conexão entre professor e aluno.",
        "Público definido desde o início, alunos de ENEM, vestibular e concursos, para orientar a busca e o cadastro de disciplinas.",
      ],
      resultado:
        "O sistema foi colocado em funcionamento e apresentado à banca como trabalho de conclusão do curso. O próximo passo planejado era matricular o aluno automaticamente na disciplina do professor contratado, fechando o fluxo entre contratação e acesso ao conteúdo.",
    },
  },
];

export const experiencias = [
  {
    cargo: "Coordenador de TI",
    empresa: "ICTQ",
    periodo: "Fev 2025 – atual",
    atual: true,
    itens: [
      "Gestão funcional do ERP TOTVS RM: suporte, otimização de processos e consultas SQL para análise e validação de dados críticos.",
      "Criei por iniciativa própria um sistema web de gestão de ativos em Django, containerizei com Docker e fiz o deploy em nuvem.",
    ],
  },
  {
    cargo: "Suporte de TI (estágio)",
    empresa: "IEL / Prefeitura de Gameleira de Goiás",
    periodo: "Fev 2023 – Nov 2024",
    itens: [
      "Suporte a usuários em hardware e software, manutenção da rede e administração do sistema de gestão pública MEGA.",
    ],
  },
  {
    cargo: "Desenvolvedor back-end (bolsista)",
    empresa: "Fábrica de Tecnologia Turing",
    periodo: "Jul 2022 – Jan 2023",
    itens: [
      "Back-end em Python e Django num time com PO, QA e front-end, participando de todo o ciclo de um sistema de agendamento de consultas.",
    ],
  },
];

export const stack = [
  { grupo: "Back-end", itens: ["Python", "Django", "Django REST Framework", "PHP"] },
  { grupo: "Front-end", itens: ["React", "TypeScript", "JavaScript", "Vite", "Tailwind CSS", "HTML/CSS"] },
  { grupo: "Banco de dados", itens: ["SQL", "PostgreSQL", "MySQL"] },
  { grupo: "DevOps e ferramentas", itens: ["Docker", "Git", "GitHub", "CI/CD"] },
  { grupo: "Engenharia", itens: ["APIs REST", "POO", "Integração de sistemas", "Otimização de consultas"] },
  { grupo: "Sistemas e dados", itens: ["TOTVS RM", "Power BI"] },
];

export const formacao = [
  { curso: "Engenharia de Software", local: "UniEvangélica", periodo: "2022 – 2025" },
];

export const cursos = [
  {
    curso: "Python 3 do básico ao avançado",
    local: "Udemy, 141,5h, 2025",
    link: "https://ude.my/UC-2a3a9750-67fb-4f3d-9678-2b8388f09e63",
  },
  {
    curso: "Java completo: POO e projetos",
    local: "Udemy, 54,5h, 2025",
    link: "https://ude.my/UC-1f2ad310-f5be-492d-9b1c-dbcf4baa7117",
  },
  {
    curso: "Inteligência Artificial e Transformação Profissional",
    local: "SENAI, 40h, 2026",
  },
  {
    curso: "Scrum Basics",
    local: "Udemy, 1,5h, 2024",
    link: "https://ude.my/UC-5747d184-3db3-44cf-9dfa-8c94c56084f9",
  },
];

export const idiomas = [
  { idioma: "Português", nivel: "Nativo" },
  { idioma: "Inglês", nivel: "Intermediário, leitura técnica" },
];
