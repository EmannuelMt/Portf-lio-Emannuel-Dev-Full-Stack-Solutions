import buguerDelicia from '../assets/images/buguer-delicia.jpg';
import transitaAI from '../assets/images/transita-ai.jpg';
import grupoAlmeida from '../assets/images/grupo-almeida-capital.png';
import emannuelDev from '../assets/images/emannuel-dev.jpg';
import ecosdarealidade from '../assets/images/ecosdarealidade.jpg';
export const servicesData = [
  // Serviços Principais
  {
    id: 1,
    title: "Página de Destino Expressa",
    description: "Landing page rápida e eficiente focada em conversão, com design moderno e otimizada para dispositivos móveis.",
    price: "R$ 400,00",
    category: "marketing",
    icon: "🚀",
    features: [
      "Design responsivo",
      "Otimização para conversão",
      "Integração com WhatsApp",
      "Formulário de contato",
      "Google Analytics integrado"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    deliveryTime: "3-5 dias",
    featured: false,
    type: "principal"
  },
  {
    id: 2,
    title: "Site Institucional",
    description: "Site profissional para sua empresa com até 5 páginas, design moderno e totalmente responsivo.",
    price: "R$ 950,00",
    category: "desenvolvimento",
    icon: "💼",
    features: [
      "Até 5 páginas",
      "Design responsivo",
      "Formulário de contato",
      "Otimização SEO básica",
      "Hospedagem (1 ano)"
    ],
    technologies: ["React", "CSS3", "JavaScript", "Vercel"],
    deliveryTime: "10-15 dias",
    featured: true,
    type: "principal"
  },
  {
    id: 3,
    title: "Portfólio Profissional",
    description: "Site para mostrar seu trabalho de forma elegante e profissional, ideal para designers, fotógrafos e criativos.",
    price: "R$ 950,00",
    category: "desenvolvimento",
    icon: "🎨",
    features: [
      "Galeria de projetos",
      "Design personalizado",
      "Blog integrado",
      "Formulário de contato",
      "Otimizado para SEO"
    ],
    technologies: ["React", "CSS3", "JavaScript", "Vercel"],
    deliveryTime: "10-15 dias",
    featured: false,
    type: "principal"
  },
  {
    id: 4,
    title: "Loja Básica",
    description: "E-commerce essencial com até 50 produtos, checkout seguro e integração com principais meios de pagamento.",
    price: "R$ 1.500,00",
    category: "ecommerce",
    icon: "🛒",
    features: [
      "Até 50 produtos",
      "Checkout seguro",
      "Pagamento com Pix/Cartão",
      "Painel administrativo",
      "Suporte 30 dias"
    ],
    technologies: ["Next.js", "Stripe", "MongoDB"],
    deliveryTime: "20-30 dias",
    featured: true,
    type: "principal"
  },
  {
    id: 5,
    title: "Loja Completa",
    description: "Solução completa de e-commerce com todas as funcionalidades necessárias para vender online com profissionalismo.",
    price: "R$ 3.000,00",
    category: "ecommerce",
    icon: "🏪",
    features: [
      "Produtos ilimitados",
      "Múltiplos métodos de pagamento",
      "Gestão de estoque",
      "Cupons de desconto",
      "Relatórios avançados"
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    deliveryTime: "30-45 dias",
    featured: true,
    type: "principal"
  },
  {
    id: 6,
    title: "Chatbot do WhatsApp",
    description: "Bot automatizado para WhatsApp com respostas inteligentes e integração com seu sistema.",
    price: "R$ 700,00",
    category: "automacao",
    icon: "🤖",
    features: [
      "Respostas automáticas",
      "Integração com API",
      "Mensagens programadas",
      "Suporte multilíngua",
      "Relatórios de conversas"
    ],
    technologies: ["Node.js", "WhatsApp API", "MongoDB"],
    deliveryTime: "7-10 dias",
    featured: false,
    type: "principal"
  },
  {
    id: 7,
    title: "Linktree Premium",
    description: "Página de links personalizada com design exclusivo e métricas de cliques integradas.",
    price: "R$ 350,00",
    category: "marketing",
    icon: "🔗",
    features: [
      "Design exclusivo",
      "Análise de cliques",
      "Formulário de contato",
      "Otimizado para mobile",
      "Domínio personalizado"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript"],
    deliveryTime: "3-5 dias",
    featured: false,
    type: "principal"
  },

  // Serviços Avulsos
  {
    id: 8,
    title: "Página Extra",
    description: "Adição de página extra ao seu site existente.",
    price: "R$ 120,00",
    category: "avulso",
    icon: "📄",
    features: ["Design consistente", "Conteúdo personalizado", "Otimização SEO"],
    technologies: ["HTML/CSS", "JavaScript"],
    deliveryTime: "1-2 dias",
    featured: false,
    type: "avulso"
  },
  {
    id: 9,
    title: "SEO Básico",
    description: "Otimização básica para motores de busca do seu site.",
    price: "R$ 180,00",
    category: "avulso",
    icon: "🔍",
    features: ["Meta tags", "Otimização de imagens", "Sitemap XML", "Google Search Console"],
    technologies: ["SEO"],
    deliveryTime: "2-3 dias",
    featured: false,
    type: "avulso"
  },
  {
    id: 10,
    title: "Cadastro de Produtos",
    description: "Cadastro de produtos na sua loja virtual.",
    price: "R$ 12,00/unidade",
    category: "avulso",
    icon: "📦",
    features: ["Imagens otimizadas", "Descrições SEO", "Categorização", "Atributos"],
    technologies: ["CMS"],
    deliveryTime: "1 dia",
    featured: false,
    type: "avulso"
  },
  {
    id: 11,
    title: "Otimização de Velocidade",
    description: "Otimização completa da velocidade do seu site.",
    price: "R$ 150,00",
    category: "avulso",
    icon: "⚡",
    features: ["Compressão de imagens", "Minificação de código", "Cache otimizado", "CDN"],
    technologies: ["Performance"],
    deliveryTime: "1-2 dias",
    featured: false,
    type: "avulso"
  },
  {
    id: 12,
    title: "Integração Externa",
    description: "Integração com APIs e serviços externos.",
    price: "A partir de R$ 200,00",
    category: "avulso",
    icon: "🔌",
    features: ["Documentação da API", "Testes de integração", "Manutenção", "Suporte"],
    technologies: ["API REST", "Webhooks", "JSON"],
    deliveryTime: "3-7 dias",
    featured: false,
    type: "avulso"
  },
  {
    id: 13,
    title: "Mensalidade",
    description: "Manutenção e suporte mensal do seu site.",
    price: "R$ 160,00/mês",
    category: "avulso",
    icon: "🛠️",
    features: ["Atualizações de segurança", "Backups regulares", "Suporte técnico", "Monitoramento"],
    technologies: ["Manutenção"],
    deliveryTime: "Contínuo",
    featured: false,
    type: "avulso"
  },

  // Serviços Premium
  {
    id: 14,
    title: "Gestão de Sites Mensal",
    description: "Gestão completa do seu site incluindo atualizações, segurança e suporte.",
    price: "R$ 150,00 - R$ 300,00/mês",
    category: "premium",
    icon: "👑",
    features: [
      "Atualizações regulares",
      "Backups automáticos",
      "Monitoramento 24/7",
      "Suporte prioritário",
      "Relatórios mensais"
    ],
    technologies: ["Gestão", "Segurança", "Monitoramento"],
    deliveryTime: "Contínuo",
    featured: true,
    type: "premium"
  },
  {
    id: 15,
    title: "Linktree Personalizado",
    description: "Linktree totalmente personalizado com design exclusivo e funcionalidades avançadas.",
    price: "A partir de R$ 149,00",
    category: "premium",
    icon: "🌟",
    features: [
      "Design exclusivo",
      "Análises avançadas",
      "Formulários customizados",
      "Integração com CRM",
      "Domínio próprio"
    ],
    technologies: ["React", "CSS3", "Analytics"],
    deliveryTime: "5-7 dias",
    featured: false,
    type: "premium"
  },
  {
    id: 16,
    title: "E-mail Profissional",
    description: "Configuração de e-mail profissional com seu domínio.",
    price: "R$ 120,00 - R$ 200,00",
    category: "premium",
    icon: "📧",
    features: [
      "Configuração de DNS",
      "Contas de e-mail ilimitadas",
      "Webmail profissional",
      "Antispam",
      "Suporte técnico"
    ],
    technologies: ["DNS", "SMTP", "IMAP"],
    deliveryTime: "1-2 dias",
    featured: false,
    type: "premium"
  },
  {
    id: 17,
    title: "Painel Administrativo",
    description: "Sistema completo para gerenciar o conteúdo do seu site sem conhecimentos técnicos.",
    price: "R$ 900,00 - R$ 1.500,00",
    category: "premium",
    icon: "⚙️",
    features: [
      "Interface intuitiva",
      "Gerenciamento de conteúdo",
      "Upload de mídia",
      "Backup automático",
      "Painel seguro"
    ],
    technologies: ["React", "Node.js", "MongoDB", "JWT"],
    deliveryTime: "15-20 dias",
    featured: true,
    type: "premium"
  },

  // Pacotes Combinados
  {
    id: 18,
    title: "Site + Identidade Visual",
    description: "Pacote completo com desenvolvimento de site profissional e criação de identidade visual.",
    price: "R$ 2.200,00",
    category: "combo",
    icon: "🎨",
    features: [
      "Logotipo profissional",
      "Paleta de cores",
      "Tipografia",
      "Site institucional",
      "Manual da marca"
    ],
    technologies: ["Figma", "React", "Adobe Illustrator"],
    deliveryTime: "25-35 dias",
    featured: true,
    type: "combo"
  },
  {
    id: 19,
    title: "Combo Completo",
    description: "Solução completa para presença digital profissional da sua empresa.",
    price: "R$ 3.800,00",
    category: "combo",
    icon: "✨",
    features: [
      "Identidade visual completa",
      "Site institucional",
      "Landing page",
      "Painel administrativo",
      "Suporte 60 dias"
    ],
    technologies: ["Figma", "React", "Node.js", "MongoDB"],
    deliveryTime: "40-50 dias",
    featured: true,
    type: "combo"
  }
];

// Categorias atualizadas
export const serviceCategories = [
  { id: 'all', name: 'Todos os Serviços' },
  { id: 'principal', name: 'Serviços Principais' },
  { id: 'avulso', name: 'Serviços Avulsos' },
  { id: 'premium', name: 'Serviços Premium' },
  { id: 'combo', name: 'Pacotes Combinados' },
  { id: 'ecommerce', name: 'E-commerce' },
  { id: 'desenvolvimento', name: 'Desenvolvimento' },
  { id: 'marketing', name: 'Marketing' },
  { id: 'automacao', name: 'Automação' }
];

// Tipos de serviços para filtro rápido
export const serviceTypes = [
  { id: 'principal', name: 'Principais', color: 'var(--gold)' },
  { id: 'avulso', name: 'Avulsos', color: 'var(--gray)' },
  { id: 'premium', name: 'Premium', color: '#ffd700' },
  { id: 'combo', name: 'Combos', color: '#9370db' }
];

// Dados para a seção de processo
export const processSteps = [
  {
    title: "Consultoria",
    description: "Analisamos suas necessidades e definimos a melhor solução",
    icon: "💬"
  },
  {
    title: "Proposta",
    description: "Apresentamos escopo, prazos e investimento",
    icon: "📋"
  },
  {
    title: "Desenvolvimento",
    description: "Criamos a solução com qualidade e atenção aos detalhes",
    icon: "⚡"
  },
  {
    title: "Entrega",
    description: "Implementamos e garantimos que tudo funcione perfeitamente",
    icon: "🎯"
  }
];

// Dados de projetos reais
export const projectsData = [
  {
    id: 1,
    title: "Buger Delicia – Plataforma de E-commerce",
    description: "Plataforma digital moderna para hamburgueria artesanal, combinando design arrojado com experiência de compra fluida. Desenvolvida com React no frontend, Node.js no backend e MongoDB para gestão de dados. Integração com Stripe para transações seguras e hospedagem na Vercel para performance otimizada.",
    image: buguerDelicia,
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Vercel"],
    githubUrl: "https://github.com/EmannuelMt/Buguer-Delicia.git",
    liveUrl: "https://buguerdelicia.netlify.app/",
    featured: true
  },
  {
    id: 2,
    title: "Transita.AI – Solução para Logística",
    description: "MVP inteligente para otimização de operações logísticas, oferecendo insights em tempo real sobre rotas, entregas e desempenho de frota. Desenvolvido com React e CSS puro, proporciona interface intuitiva para tomada de decisão estratégica. Hospedagem no Netlify com foco em escalabilidade e transformação digital do setor.",
    image: transitaAI,
    technologies: ["React", "CSS", "JavaScript", "MongoDB", "Firebase", "Netlify"],
    githubUrl: "https://github.com/EmannuelMt/Transita.Ai-Mvp.git",
    liveUrl: "https://transita-ai-mvp.netlify.app/",
    featured: true
  },
  {
    id: 3,
    title: "Grupo Almeida Capital",
    description: "Plataforma corporativa para empresa de consultoria e gestão de investimentos. Desenvolvida com React, oferece uma presença digital sólida para organização focada em crescimento empresarial, estruturação financeira e governança corporativa.",
    image: grupoAlmeida,
    technologies: ["React", "CSS3", "JavaScript"],
    liveUrl: "https://grupoalmeidacapital.com.br",
    featured: true
  },
  {
    id: 4,
    title: "Emannuel Dev Solutions",
    description: "Site institucional para empresa de desenvolvimento fullstack especializada em soluções digitais completas. Desenvolvido com React, apresenta portfólio de serviços desde protótipo até produto final, com foco em qualidade e escalabilidade.",
    image: emannuelDev,
    technologies: ["React", "CSS3", "JavaScript", "Netlify"],
    githubUrl: "https://github.com/EmannuelMt/Portf-lio-Emannuel-Dev-Full-Stack-Solutions.git",
    liveUrl: "https://portflioemannueldevfullstack.netlify.app/",
    featured: true
  },
  {
    id: 5,
    title: "Ecos Da Realidade",
    description: "Site institucional para jogadores de ordem paranormal rpg opensource.",
    image: ecosdarealidade,
    technologies: ["React", "CSS3", "JavaScript", "Netlify,Node.js,Express,Firebase Auth,Firestore,Real Time Database"],
    liveUrl: "https://ecosdarealidade.netlify.app/",
    featured: true
  },
];