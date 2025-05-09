export type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  authorImage?: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  content?: string[];
  relatedPosts?: number[];
};

// Lista completa de posts do blog
export const blogPosts: BlogPost[] = [
  // Artigos existentes (1-6)
  {
    id: 1,
    title: "5 Estratégias Comprovadas para Vender Websites com Sucesso em Angola",
    excerpt: "Descubra as melhores táticas para convencer clientes sobre o valor de ter um website profissional no mercado angolano.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Carlos Silva",
    authorRole: "Especialista em Marketing Digital",
    authorBio: "Carlos é um especialista em marketing digital com mais de 8 anos de experiência no mercado angolano. Já ajudou mais de 100 empresas a estabelecerem sua presença online e é um dos afiliados de maior sucesso da CIRCULUS.",
    authorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    date: "12 Abril, 2023",
    category: "Vendas",
    readTime: "9 min",
    tags: ["Vendas", "Websites", "Estratégias", "Mercado Local"],
    relatedPosts: [2, 3]
  },
  {
    id: 2,
    title: "Como Usar as Redes Sociais para Encontrar Clientes Potenciais em Angola",
    excerpt: "Aprenda a utilizar Instagram, Facebook e LinkedIn para identificar e abordar clientes angolanos que precisam de websites.",
    image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Maria Torres",
    authorRole: "Especialista em Redes Sociais",
    authorBio: "Maria é uma consultora de marketing digital especializada em estratégias de redes sociais para o mercado angolano. Com background em telecomunicações, ela ajuda empresas a maximizarem sua presença online e gerar leads qualificados.",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "23 Março, 2023",
    category: "Redes Sociais",
    readTime: "8 min",
    tags: ["Redes Sociais", "Leads", "Marketing Digital", "Facebook", "Instagram"],
    relatedPosts: [1, 3]
  },
  {
    id: 3,
    title: "O Que Fazer Quando o Cliente Diz Que Está Muito Caro? Táticas de Negociação no Mercado Angolano",
    excerpt: "Técnicas de negociação e argumentação adaptadas para o mercado angolano para lidar com objeções de preço sem reduzir suas comissões.",
    image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "João Mendes",
    authorRole: "Consultor de Vendas",
    authorBio: "João é especialista em vendas consultivas com mais de uma década de experiência no mercado angolano. Ele treinou centenas de profissionais de vendas em Angola e é palestrante frequente em eventos de negócios em Luanda.",
    authorImage: "https://randomuser.me/api/portraits/men/22.jpg",
    date: "5 Maio, 2023",
    category: "Negociação",
    readTime: "6 min",
    tags: ["Negociação", "Objeções", "Valor", "Vendas"],
    relatedPosts: [1, 2]
  },
  {
    id: 4,
    title: "Como se Destacar como Afiliado em um Mercado Competitivo",
    excerpt: "Estratégias para se diferenciar e construir sua marca pessoal como afiliado em Angola.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Ana Beatriz",
    authorRole: "Consultora de Personal Branding",
    date: "18 Junho, 2023",
    category: "Marketing",
    readTime: "7 min",
    tags: ["Marca Pessoal", "Diferenciação", "Afiliados"]
  },
  {
    id: 5,
    title: "Crie Propostas Irrecusáveis: O Guia Completo",
    excerpt: "Aprenda a estruturar propostas comerciais que convertem e evitam objeções comuns no mercado angolano.",
    image: "https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Miguel Santos",
    authorRole: "Consultor de Negócios",
    date: "2 Julho, 2023",
    category: "Vendas",
    readTime: "10 min",
    tags: ["Propostas", "Conversão", "Vendas"]
  },
  {
    id: 6,
    title: "SEO para Afiliados: Como Atrair Clientes pelo Google",
    excerpt: "Técnicas de otimização para mecanismos de busca adaptadas para afiliados no mercado de Angola.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Paulo Neto",
    authorRole: "Especialista em SEO",
    date: "15 Agosto, 2023",
    category: "Marketing Digital",
    readTime: "9 min",
    tags: ["SEO", "Google", "Tráfego Orgânico"]
  },
  
  // Novos artigos solicitados (7-26)
  // REDES SOCIAIS
  {
    id: 7,
    title: "Como Transformar Teu Perfil do Instagram Numa Máquina de Vendas de Sites",
    excerpt: "Um guia completo para otimizar seu perfil do Instagram e converter seguidores em clientes interessados em websites.",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Sofia Cardoso",
    authorRole: "Especialista em Instagram Marketing",
    date: "10 Janeiro, 2024",
    category: "Redes Sociais",
    readTime: "12 min",
    tags: ["Instagram", "Redes Sociais", "Conversão", "Optimização de Perfil"]
  },
  {
    id: 8,
    title: "O Passo a Passo Para Atrair Clientes no WhatsApp e Fechar Vendas Sem Parecer Chato",
    excerpt: "Aprenda técnicas eficazes para abordar potenciais clientes no WhatsApp sem ser invasivo e maximizar suas conversões.",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Ricardo Manuel",
    authorRole: "Consultor de Vendas Digitais",
    date: "22 Janeiro, 2024",
    category: "Redes Sociais",
    readTime: "10 min",
    tags: ["WhatsApp", "Vendas", "Comunicação", "Mensagens"]
  },
  {
    id: 9,
    title: "Como Usar o Facebook Marketplace e Grupos Para Vender Sites Localmente",
    excerpt: "Estratégias práticas para aproveitar grupos do Facebook e o Marketplace para encontrar clientes próximos a você em Angola.",
    image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Marcos Gomes",
    authorRole: "Especialista em Marketing Local",
    date: "5 Fevereiro, 2024",
    category: "Redes Sociais",
    readTime: "8 min",
    tags: ["Facebook", "Marketplace", "Grupos", "Marketing Local"]
  },
  {
    id: 10,
    title: "Técnicas de Copywriting Para Criar Posts Que Vendem Sites Automaticamente",
    excerpt: "Domine a arte de escrever textos persuasivos que fazem seus seguidores desejarem um website profissional sem precisar vender diretamente.",
    image: "https://images.unsplash.com/photo-1598618443855-232ee0f819f6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Patrícia Luís",
    authorRole: "Copywriter e Especialista em Conteúdo",
    date: "18 Fevereiro, 2024",
    category: "Redes Sociais",
    readTime: "11 min",
    tags: ["Copywriting", "Redação", "Conteúdo", "Persuasão"]
  },
  {
    id: 11,
    title: "Como Criar Um Vídeo Curto (Reel ou TikTok) Que Gera Leads Para Sites",
    excerpt: "Aprenda a criar conteúdo em vídeo curto que atrai potenciais clientes e impulsiona suas vendas como afiliado CIRCULUS.",
    image: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Filipe Castro",
    authorRole: "Produtor de Conteúdo Digital",
    date: "3 Março, 2024",
    category: "Redes Sociais",
    readTime: "9 min",
    tags: ["Vídeos", "Reels", "TikTok", "Conteúdo Audiovisual"]
  },
  
  // PROSPECÇÃO E VENDAS
  {
    id: 12,
    title: "Como Encontrar os Clientes Certos Para Vender Sites em Angola",
    excerpt: "Descubra as melhores fontes de leads qualificados e identifique empresas angolanas que realmente precisam de um website.",
    image: "https://images.unsplash.com/photo-1550305080-4e029753abcf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "José Eduardo",
    authorRole: "Especialista em Prospecção B2B",
    date: "15 Março, 2024",
    category: "Prospecção",
    readTime: "10 min",
    tags: ["Prospecção", "Leads", "Vendas B2B", "Mercado Angolano"]
  },
  {
    id: 13,
    title: "Roteiro Pronto: O Que Dizer Na Hora de Abordar Alguém Para Vender Um Site",
    excerpt: "Scripts testados e comprovados para iniciar conversas que convertem, seja pessoalmente, por telefone ou mensagens.",
    image: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Marta Sousa",
    authorRole: "Consultora de Vendas e Comunicação",
    date: "29 Março, 2024",
    category: "Prospecção",
    readTime: "8 min",
    tags: ["Scripts", "Abordagem", "Vendas", "Comunicação"]
  },
  {
    id: 14,
    title: "Como Responder às Principais Objeções (\"Não Tenho Dinheiro\", \"Não Preciso Disso\")",
    excerpt: "Técnicas para reverter as objeções mais comuns de potenciais clientes no mercado angolano e transformá-las em oportunidades.",
    image: "https://images.unsplash.com/photo-1553484771-8bbd4e16c60b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "André Conceição",
    authorRole: "Especialista em Vendas Consultivas",
    date: "10 Abril, 2024",
    category: "Prospecção",
    readTime: "11 min",
    tags: ["Objeções", "Negociação", "Técnicas de Vendas", "Psicologia"]
  },
  {
    id: 15,
    title: "Como Usar Indicações e Clientes Antigos Para Vender Mais Sites",
    excerpt: "Estratégias para transformar clientes satisfeitos em uma rede de indicações contínuas que geram novos negócios.",
    image: "https://images.unsplash.com/photo-1560438718-eb61ede255eb?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Teresa Campos",
    authorRole: "Consultora de Relacionamento com Clientes",
    date: "22 Abril, 2024",
    category: "Prospecção",
    readTime: "7 min",
    tags: ["Indicações", "Relacionamento", "Networking", "Referências"]
  },
  {
    id: 16,
    title: "A Técnica dos 5 Contatos Por Dia: Como Criar Consistência e Escalar Tuas Vendas",
    excerpt: "Um método prático para manter um fluxo constante de prospecção e aumentar gradualmente seus resultados como afiliado.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Rafael Dias",
    authorRole: "Estrategista de Vendas",
    date: "3 Maio, 2024",
    category: "Prospecção",
    readTime: "9 min",
    tags: ["Consistência", "Disciplina", "Escala", "Produtividade"]
  },
  
  // FERRAMENTAS E TÁTICAS
  {
    id: 17,
    title: "Ferramentas Gratuitas Para Criar Artes e Divulgar Teu Link de Afiliado",
    excerpt: "Conheça as melhores ferramentas acessíveis mesmo com internet limitada para criar materiais de marketing atrativos.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Cláudia Nogueira",
    authorRole: "Designer Digital",
    date: "15 Maio, 2024",
    category: "Ferramentas",
    readTime: "8 min",
    tags: ["Design", "Ferramentas", "Recursos Gratuitos", "Marketing Visual"]
  },
  {
    id: 18,
    title: "Como Usar o Canva Para Criar Publicações Atrativas Para Vender Serviços Digitais",
    excerpt: "Um guia passo a passo para criar materiais de alta qualidade usando o Canva, mesmo com conexão de internet instável.",
    image: "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Mariana Costa",
    authorRole: "Designer e Educadora Digital",
    date: "27 Maio, 2024",
    category: "Ferramentas",
    readTime: "10 min",
    tags: ["Canva", "Design", "Materiais de Marketing", "Visual"]
  },
  {
    id: 19,
    title: "Modelos Prontos de Mensagens Para Enviar no WhatsApp e nas DMs",
    excerpt: "Templates e exemplos de mensagens que geram engajamento e abrem portas para conversas de vendas produtivas.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e946?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Laura Santos",
    authorRole: "Especialista em Comunicação Digital",
    date: "8 Junho, 2024",
    category: "Ferramentas",
    readTime: "6 min",
    tags: ["Mensagens", "WhatsApp", "Templates", "Comunicação"]
  },
  {
    id: 20,
    title: "Como Usar o Google Forms Para Captar Interessados em Sites",
    excerpt: "Estratégias para criar formulários eficientes que qualificam leads e automatizam parte do seu processo de vendas.",
    image: "https://images.unsplash.com/photo-1590845947698-8924d7409b26?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Sérgio Martins",
    authorRole: "Consultor de Automação de Marketing",
    date: "20 Junho, 2024",
    category: "Ferramentas",
    readTime: "7 min",
    tags: ["Google Forms", "Formulários", "Captação", "Automação"]
  },
  {
    id: 21,
    title: "Como Montar Um Mini Funil de Vendas Só Com WhatsApp e Status",
    excerpt: "Um método simplificado para criar um sistema de captação e conversão usando apenas ferramentas acessíveis a todos em Angola.",
    image: "https://images.unsplash.com/photo-1495003413209-198c86f46ca0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Bruno Castro",
    authorRole: "Especialista em Marketing Digital",
    date: "1 Julho, 2024",
    category: "Ferramentas",
    readTime: "9 min",
    tags: ["Funil de Vendas", "WhatsApp", "Status", "Marketing"]
  },
  
  // MENTALIDADE E ESTRATÉGIA
  {
    id: 22,
    title: "Por Que Alguns Afiliados Vendem Muito e Outros Não Vendem Nada?",
    excerpt: "Uma análise profunda dos fatores psicológicos e estratégicos que separam os afiliados de sucesso dos que não conseguem decolar.",
    image: "https://images.unsplash.com/photo-1553484771-ee1093caee5d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Daniel Ferreira",
    authorRole: "Psicólogo e Consultor de Negócios",
    date: "15 Julho, 2024",
    category: "Mentalidade",
    readTime: "12 min",
    tags: ["Psicologia", "Sucesso", "Mentalidade", "Diferenciação"]
  },
  {
    id: 23,
    title: "Como Criar Um Plano Semanal de Prospecção Para Bater Metas",
    excerpt: "Um método estruturado para organizar suas atividades de vendas e maximizar resultados mesmo com poucos recursos.",
    image: "https://images.unsplash.com/photo-1494599948593-3dafe8338d71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Carla Machado",
    authorRole: "Especialista em Produtividade",
    date: "27 Julho, 2024",
    category: "Mentalidade",
    readTime: "8 min",
    tags: ["Planejamento", "Metas", "Produtividade", "Organização"]
  },
  {
    id: 24,
    title: "A Diferença Entre Vender e Empurrar: Como Gerar Desejo Num Possível Cliente",
    excerpt: "Princípios psicológicos e técnicas práticas para fazer clientes quererem comprar de você em vez de sentir que estão sendo pressionados.",
    image: "https://images.unsplash.com/photo-1541746972996-4fc7892e6b9f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Luís Fernando",
    authorRole: "Psicólogo Comportamental",
    date: "10 Agosto, 2024",
    category: "Mentalidade",
    readTime: "10 min",
    tags: ["Psicologia de Vendas", "Persuasão", "Valor", "Desejo"]
  },
  {
    id: 25,
    title: "Como Te Posicionar Como Um \"Consultor\" e Não Apenas Como Um Vendedor",
    excerpt: "Estratégias para mudar sua abordagem e ser visto como um especialista valioso pelos potenciais clientes em Angola.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Antônio Silva",
    authorRole: "Consultor de Estratégia Empresarial",
    date: "22 Agosto, 2024",
    category: "Mentalidade",
    readTime: "9 min",
    tags: ["Posicionamento", "Consultoria", "Valor Percebido", "Autoridade"]
  },
  {
    id: 26,
    title: "Como Construir Autoridade e Ser Lembrado Como a Pessoa Que Faz Sites",
    excerpt: "Um guia completo para se estabelecer como referência em criação de websites em seu nicho e região de Angola.",
    image: "https://images.unsplash.com/photo-1617606003139-c55e4385dbf2?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Isabel Cruz",
    authorRole: "Especialista em Personal Branding",
    date: "31 Agosto, 2024",
    category: "Mentalidade",
    readTime: "11 min",
    tags: ["Autoridade", "Branding Pessoal", "Reputação", "Reconhecimento"]
  }
];

// Função para recuperar posts por ID
export const getPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

// Função para recuperar posts relacionados
export const getRelatedPosts = (postId: number): BlogPost[] => {
  const post = getPostById(postId);
  if (!post || !post.relatedPosts) return [];
  
  return post.relatedPosts
    .map(id => getPostById(id))
    .filter((post): post is BlogPost => post !== undefined);
};