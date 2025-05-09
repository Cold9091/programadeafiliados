import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Tipo para o artigo completo
interface BlogPostFull {
  id: number;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  authorImage?: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
  relatedPosts?: number[];
}

// Banco de dados simulado de artigos
const blogPosts: BlogPostFull[] = [
  {
    id: 1,
    title: "5 Estratégias Comprovadas para Vender Websites com Sucesso em Angola",
    excerpt: "Descubra as melhores táticas para convencer clientes sobre o valor de ter um website profissional no mercado angolano.",
    content: [
      "## Introdução\n\nNo cenário digital em rápida evolução de Angola, a presença online deixou de ser um luxo para se tornar uma necessidade essencial para qualquer negócio. Como afiliado da CIRCULUS, você tem a oportunidade de ajudar empresas angolanas a estabelecerem uma presença digital robusta enquanto constrói uma fonte de renda sustentável para si mesmo.\n\nNeste artigo, compartilharemos cinco estratégias comprovadas que foram adaptadas especificamente para o mercado angolano, levando em consideração os desafios únicos e as oportunidades que existem neste mercado emergente.",
      
      "## 1. Compreenda as Dores Específicas do Mercado Angolano\n\nAntes de iniciar qualquer conversa de vendas, é fundamental entender os desafios específicos que as empresas angolanas enfrentam. Muitas empresas locais estão lidando com:\n\n- Interrupções frequentes de energia que afetam operações digitais\n- Conexões de internet instáveis em algumas regiões\n- Falta de conhecimento sobre benefícios digitais\n- Preocupações com o custo de manutenção de um site\n- Dificuldade em encontrar expertise técnica local\n\nAo abordar um potencial cliente, comece perguntando sobre esses desafios. Por exemplo: 'Muitas empresas em Luanda me dizem que estão perdendo clientes para concorrentes com presença online. Isso tem acontecido com vocês também?'\n\nEsta abordagem baseada em empatia estabelece você como alguém que entende o contexto local, não apenas como um vendedor.",
      
      "## 2. Apresente Casos de Sucesso Locais\n\nNada convence mais um empresário angolano do que ver o sucesso de outros negócios semelhantes no mesmo mercado. Desenvolva um portfólio de casos de estudo locais que você possa compartilhar.\n\nPor exemplo, você pode dizer: 'Uma padaria no bairro Maculusso aumentou suas vendas em 40% nos primeiros três meses após lançar seu website. Os clientes agora fazem encomendas antecipadas online, o que reduziu o desperdício e aumentou a eficiência da produção.'\n\nEstes exemplos concretos e localmente relevantes são muito mais poderosos do que estatísticas genéricas de outros países.",
      
      "## 3. Ofereça Soluções para Desafios de Infraestrutura\n\nUma preocupação comum entre empresários angolanos é como manter um site funcionando face aos desafios de infraestrutura. Aborde isso proativamente:\n\n- Explique como os websites da CIRCULUS são otimizados para conexões de internet de baixa velocidade\n- Destaque o suporte técnico em português que está incluído\n- Mencione como o site pode continuar gerando leads mesmo durante interrupções temporárias de energia ou internet\n- Demonstre como o cliente pode atualizar o site facilmente de um smartphone, caso não tenha acesso constante a um computador\n\nAo abordar essas preocupações antes mesmo que sejam levantadas, você remove obstáculos importantes no processo de vendas.",
      
      "## 4. Demonstre o Retorno sobre Investimento (ROI) no Contexto Local\n\nEmpresas angolanas, como em qualquer lugar, querem saber como um website irá gerar retorno financeiro. Prepare-se com cálculos específicos para diferentes tipos de negócios:\n\n- Para um restaurante: 'Se apenas 5 novos clientes por semana encontrarem seu restaurante através do website e gastarem em média 5.000 Kz por refeição, isso representa 100.000 Kz por mês em receita adicional. Com o investimento no website sendo X, o retorno completo acontecerá em apenas Y meses.'\n\n- Para uma loja de roupas: 'Com um catálogo online, seus clientes podem ver novos produtos mesmo quando não estão na loja. Nossos clientes de moda relatam um aumento médio de 30% nas vendas após lançarem seus websites.'\n\nEsses cálculos concretos e adaptados à realidade angolana tornam o valor do investimento muito mais tangível.",
      
      "## 5. Utilize o Mobile-First como Argumento Principal\n\nAngola tem uma das maiores taxas de penetração de smartphones na África. A grande maioria dos angolanos acessa a internet principalmente através de dispositivos móveis. Use isso como um ponto forte na sua argumentação:\n\n'Mais de 80% dos angolanos que acessam a internet o fazem através de smartphones. Os websites que criamos são otimizados para mobile, garantindo que sua empresa esteja onde seus clientes estão. Vamos fazer um teste rápido: pegue seu smartphone e tente encontrar informações sobre sua empresa. Agora tente encontrar informações sobre seus concorrentes. Quem você acha que o cliente escolherá quando estiver procurando por produtos ou serviços como os seus?'\n\nEsta demonstração prática frequentemente tem um impacto imediato na percepção do cliente sobre a necessidade de um website.",
      
      "## Conclusão\n\nVender websites em Angola requer uma compreensão profunda do mercado local e das preocupações específicas dos empresários angolanos. Ao adaptar sua abordagem para abordar diretamente essas preocupações, você não apenas aumentará suas taxas de conversão, mas também construirá relacionamentos mais fortes e duradouros com seus clientes.\n\nComo afiliado da CIRCULUS, você não está apenas vendendo um produto digital – você está oferecendo uma solução para ajudar empresas angolanas a prosperarem na economia digital. Com estas cinco estratégias, você estará bem equipado para comunicar esse valor de forma eficaz e aumentar significativamente suas comissões.\n\nE lembre-se: cada website que você vende não é apenas uma comissão, mas também uma contribuição para o desenvolvimento da economia digital de Angola."
    ],
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
    content: [
      "## Introdução\n\nAs redes sociais transformaram-se em ferramentas poderosas para empreendedores e profissionais de marketing em Angola. Com o aumento constante de usuários angolanos em plataformas como Facebook, Instagram e LinkedIn, existe uma oportunidade única para afiliados da CIRCULUS identificarem e abordarem potenciais clientes para websites profissionais.\n\nEste artigo explora estratégias específicas para o mercado angolano, considerando padrões locais de uso de redes sociais, preferências culturais e desafios específicos.",
      
      "## A Paisagem das Redes Sociais em Angola\n\nAntes de mergulharmos nas estratégias, é importante entender o cenário atual das redes sociais em Angola:\n\n- **Facebook**: Continua sendo a plataforma mais popular entre angolanos, com maior penetração em Luanda, Benguela e outras áreas urbanas. É amplamente utilizado por pequenas e médias empresas.\n\n- **Instagram**: Crescimento rápido, especialmente entre jovens adultos e profissionais criativos. Empresas nos setores de moda, gastronomia e entretenimento têm forte presença.\n\n- **LinkedIn**: Em expansão entre profissionais corporativos, principalmente em setores como petróleo e gás, telecomunicações, bancário e educação superior.\n\n- **WhatsApp**: Embora tecnicamente um aplicativo de mensagens, funciona como uma rede social em Angola, com muitos negócios operando grupos e listas de transmissão para marketing.",
      
      "## Estratégias para o Facebook\n\nO Facebook oferece diversas ferramentas para identificar leads qualificados em Angola:\n\n### 1. Grupos Específicos de Indústrias\n\nIdentifique e junte-se a grupos do Facebook relevantes para setores específicos. Por exemplo:\n\n- Grupos de empresários em Angola\n- Associações comerciais de Luanda\n- Grupos de empreendedores de Benguela\n- Comunidades de comerciantes do Huambo\n\nNestes grupos, não comece imediatamente promovendo seus serviços. Em vez disso, ofereça valor respondendo a perguntas, compartilhando dicas úteis e estabelecendo-se como especialista. Quando identificar alguém que menciona problemas que um website poderia resolver, aborde-os de forma privada.\n\n### 2. Análise de Páginas de Concorrentes\n\nUma técnica eficaz é analisar páginas de empresas angolanas que ainda não têm um website:\n\n1. Identifique empresas locais com bom conteúdo e engajamento no Facebook, mas sem website (ou com websites desatualizados)\n2. Analise seus seguidores e engajamento\n3. Prepare uma proposta personalizada destacando como um website complementaria sua presença no Facebook\n\nPor exemplo: 'Notei que sua página do Facebook tem mais de 5.000 seguidores e grande engajamento. Imagina converter apenas 5% desses seguidores em clientes através de um website profissional?'",
      
      "## Estratégias para o Instagram\n\nO Instagram é particularmente poderoso para negócios visuais e criativos em Angola:\n\n### 1. Hashtags Localizadas\n\nUtilize hashtags específicas de Angola para encontrar empresas potenciais:\n\n- #NegóciosAngola\n- #MadeInAngola\n- #LuandaNegocios\n- #EmpreendedorismoAngolano\n\nMonitore regularmente estas hashtags para identificar empresas com presença visual forte, mas sem websites adequados.\n\n### 2. Geolocalização\n\nA função de busca por localização do Instagram é excelente para encontrar negócios locais:\n\n1. Pesquise por localizações populares em diferentes cidades angolanas\n2. Identifique empresas que postam regularmente e têm bom engajamento\n3. Verifique se têm websites funcionais\n4. Para aquelas sem websites, prepare um primeiro contato que destaque como você notou e admirou sua presença no Instagram\n\nEsta abordagem funciona particularmente bem para restaurantes, hotéis, salões de beleza e lojas de varejo em Angola.",
      
      "## Estratégias para o LinkedIn\n\nO LinkedIn está se tornando cada vez mais importante para negócios B2B em Angola:\n\n### 1. Pesquisa Avançada de Empresas\n\nUtilize a pesquisa avançada do LinkedIn para encontrar empresas angolanas em setores específicos:\n\n1. Filtre por localização: Angola ou cidades específicas\n2. Filtre por setor de indústria\n3. Verifique quais empresas têm presença no LinkedIn mas websites desatualizados\n\n### 2. Conexões Estratégicas\n\nConecte-se com tomadores de decisão em empresas angolanas:\n\n1. Diretores de Marketing\n2. Gerentes Gerais\n3. Proprietários de pequenas e médias empresas\n\nAo conectar-se, sempre envie uma mensagem personalizada explicando o motivo da conexão. Não mencione vendas imediatamente. Em vez disso, ofereça insights sobre presença digital ou compartilhe um artigo relevante sobre como empresas semelhantes estão se beneficiando de websites eficazes.",
      
      "## WhatsApp como Ferramenta de Vendas\n\nO WhatsApp merece uma menção especial no contexto angolano:\n\n### 1. Grupos Comunitários\n\nParticipe de grupos de WhatsApp relacionados a negócios em diferentes regiões de Angola. Estes são frequentemente centros de networking e oportunidades de negócios.\n\n### 2. Status do WhatsApp\n\nUtilize o Status do WhatsApp para compartilhar dicas rápidas sobre presença digital, estatísticas impressionantes sobre websites ou antes e depois de websites que você ajudou a criar.\n\n### 3. Catálogo de Serviços\n\nConfigure um catálogo de serviços no WhatsApp Business destacando diferentes pacotes de websites e exemplos de seu trabalho anterior.",
      
      "## Abordagem Cultural e Comunicação\n\nAo interagir com potenciais clientes angolanos nas redes sociais, considere estas dicas culturais importantes:\n\n1. **Valorize o relacionamento antes do negócio**: A cultura angolana prioriza relacionamentos. Dedique tempo para conhecer seus potenciais clientes antes de fazer qualquer proposta de venda.\n\n2. **Comunicação formal**: Principalmente em contextos de primeiro contato e com clientes corporativos, mantenha um tom respeitoso e formal.\n\n3. **Reconheça festividades e eventos nacionais**: Incorpore referências a feriados angolanos e eventos culturais em sua comunicação para demonstrar conhecimento e respeito pela cultura local.\n\n4. **Português angolano**: Utilize expressões e termos específicos do português falado em Angola para criar uma conexão mais forte.\n\n5. **Paciência no processo**: Os ciclos de decisão podem ser mais longos em Angola. Mantenha contato regular mas respeitoso, sem pressionar excessivamente.",
      
      "## Conclusão\n\nAs redes sociais oferecem um terreno fértil para afiliados da CIRCULUS identificarem e abordarem potenciais clientes em Angola. Ao compreender as nuances de cada plataforma e adaptar suas estratégias ao contexto cultural angolano, você pode construir um pipeline consistente de leads qualificados.\n\nLembre-se que o sucesso nestas plataformas vem de uma abordagem autêntica e centrada em valor. Ao posicionar-se como um consultor que genuinamente deseja ajudar empresas angolanas a crescerem online – e não apenas como alguém querendo vender um produto – você construirá a confiança necessária para converter conexões sociais em clientes reais.\n\nComece implementando estas estratégias gradualmente, monitore os resultados e adapte conforme necessário para o seu nicho específico dentro do mercado angolano."
    ],
    image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
    author: "Maria Torres",
    authorRole: "Especialista em Redes Sociais",
    authorBio: "Maria é uma consultora de marketing digital especializada em estratégias de redes sociais para o mercado angolano. Com background em telecomunicações, ela ajuda empresas a maximizarem sua presença online e gerar leads qualificados.",
    authorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    date: "23 Março, 2023",
    category: "Marketing",
    readTime: "8 min",
    tags: ["Redes Sociais", "Leads", "Marketing Digital", "Facebook", "Instagram"],
    relatedPosts: [1, 3]
  },
  {
    id: 3,
    title: "O Que Fazer Quando o Cliente Diz Que Está Muito Caro? Táticas de Negociação no Mercado Angolano",
    excerpt: "Técnicas de negociação e argumentação adaptadas para o mercado angolano para lidar com objeções de preço sem reduzir suas comissões.",
    content: [
      "## Introdução\n\nUma das objeções mais comuns que qualquer afiliado da CIRCULUS enfrentará em Angola é: \"Está muito caro.\" Esta frase, aparentemente simples, pode parecer o fim de uma negociação, mas na realidade é apenas o começo de uma conversa mais profunda sobre valor, necessidade e investimento.\n\nEm um país onde o poder de compra varia significativamente e onde muitas empresas ainda estão começando a entender o valor da presença digital, saber responder a esta objeção é uma habilidade essencial. Este artigo oferece estratégias específicas adaptadas ao contexto angolano para ajudá-lo a superar objeções de preço sem comprometer suas comissões.",
      
      "## Compreendendo a Objeção de Preço no Contexto Angolano\n\nAntes de abordar qualquer objeção, é crucial entender o que realmente está por trás dela. Em Angola, quando um cliente diz que \"está muito caro\", isso pode significar várias coisas:\n\n1. **Restrições orçamentárias reais**: Muitas PMEs angolanas operam com margens apertadas e fluxo de caixa limitado.\n\n2. **Falta de compreensão do valor**: O cliente pode não entender completamente como um website gerará retorno sobre o investimento.\n\n3. **Comparação com alternativas mais baratas**: O cliente pode estar comparando com ofertas de baixa qualidade ou com soluções gratuitas como páginas de Facebook.\n\n4. **Tática de negociação cultural**: Em Angola, como em muitas culturas africanas, a negociação é uma parte esperada do processo de compra.\n\n5. **Preocupações com custos ocultos**: Devido a experiências anteriores, pode haver receio de taxas adicionais não divulgadas.",
      
      "## Estratégias de Resposta Adaptadas ao Mercado Angolano\n\n### 1. Nunca Reduza o Preço Imediatamente\n\nQuando um cliente angolano diz que está caro, a pior resposta é oferecer um desconto imediato. Isso não apenas desvaloriza seu produto, mas também estabelece um precedente problemático para futuras negociações.\n\nEm vez disso, responda com uma pergunta: \"Entendo sua preocupação com o investimento. Posso perguntar o que específicamente parece alto para você?\"\n\nEsta resposta respeitosa mantém a conversa aberta e permite que você identifique a verdadeira objeção por trás da afirmação de preço.",
      
      "### 2. Contextualize o Investimento para a Realidade Angolana\n\nMuitas vezes, clientes angolanos precisam ver o investimento em um website em termos que fazem sentido para seu negócio específico:\n\n**Exemplo para um restaurante em Luanda:**\n\"Este investimento representa aproximadamente o custo de 2-3 mesas ocupadas por noite durante um mês. Um website eficaz pode trazer muito mais do que isso em novos clientes, especialmente considerando o crescente número de expatriados e turistas que procuram restaurantes online antes de sair.\"",
      
      "**Exemplo para uma clínica médica em Benguela:**\n\"Se este website trouxer apenas três novos pacientes por mês, o investimento já se pagará. Considerando que cada vez mais angolanos estão pesquisando serviços de saúde online antes de fazer escolhas, o potencial é muito maior.\"",
      
      "### 3. Utilize a Técnica do \"Custo da Inação\"\n\nEsta estratégia é particularmente eficaz no mercado angolano, onde a transformação digital está ocorrendo rapidamente:\n\n\"Entendo sua preocupação com o custo. Mas permita-me fazer uma pergunta diferente: qual é o custo para o seu negócio se ele continuar invisível online enquanto seus concorrentes estão cada vez mais presentes? Com o crescimento da internet em Angola a mais de 10% ao ano, a cada dia mais potenciais clientes estão procurando serviços online.\"",
      
      "Este enfoque muda a conversa do custo imediato para o custo futuro de não agir, o que é especialmente relevante em mercados em rápida digitalização como Angola.",
      
      "### 4. Ofereça Opções de Pagamento Adaptadas à Realidade Local\n\nUma das maiores preocupações para empresas angolanas é o fluxo de caixa. Em vez de reduzir o preço, considere oferecer opções de pagamento mais flexíveis:\n\n- **Pagamento em prestações**: Particularmente atraente no atual ambiente econômico\n- **Plano de pagamento alinhado com datas de recebimento do cliente**\n- **Pequeno desconto para pagamento completo antecipado**\n\nPor exemplo: \"Entendo sua preocupação com o investimento inicial. Posso oferecer um plano onde você paga 40% agora, 30% quando o design for aprovado, e os 30% finais na entrega. Isso ajudaria a distribuir o investimento de uma forma mais confortável?\"",
      
      "### 5. Construa Valor Através de Elementos Específicos para Angola\n\nDetalhes específicos criam valor tangível para o cliente:\n\n- **Otimização para internet móvel**: \"Nossos sites são especialmente otimizados para funcionar bem mesmo com conexões de internet móvel instáveis, um problema comum em algumas áreas de Angola.\"\n\n- **Conteúdo bilíngue**: \"Incluímos versões em português e inglês, permitindo que você atenda tanto clientes locais quanto internacionais interessados em Angola.\"\n\n- **Integração com métodos de pagamento locais**: \"O site pode integrar-se com métodos de pagamento populares em Angola, como transferências bancárias, Multicaixa Express e pagamentos móveis.\"\n\n- **Hospedagem com bom desempenho regional**: \"Nossa hospedagem garante carregamento rápido para visitantes em Angola e países vizinhos, não apenas para acessos da Europa ou América.\"\n\n- **Otimização para busca local**: \"Implementamos estratégias de SEO específicas para melhorar sua visibilidade nas buscas em Angola.\"",
      
      "## Negociando Sem Comprometer o Valor\n\nSe após todas estas estratégias o cliente ainda resiste ao preço, considere estas abordagens:\n\n### 1. Adicione Valor Em Vez de Reduzir Preço\n\n\"Entendo que o investimento é significativo. Em vez de reduzir o preço, posso incluir um treinamento personalizado de 2 horas para sua equipe sobre como atualizar e maximizar o uso do site, o que normalmente custaria X adicional.\"\n\n### 2. Crie Pacotes Estratificados\n\nOfereça opções em diferentes níveis de preço, mantendo o valor percebido de cada um:\n\n- **Pacote Básico**: Site essencial com funcionalidades principais\n- **Pacote Recomendado**: Adiciona elementos de marketing e funcionalidades extras\n- **Pacote Premium**: Solução completa com todos os recursos\n\nApresente inicialmente o pacote intermediário, que parecerá um bom valor quando comparado ao premium.",
      
      "## Exemplos de Diálogos Adaptados ao Contexto Angolano\n\n### Cenário 1: Pequena Loja de Moda em Luanda\n\n**Cliente**: \"30.000 Kz por mês é muito caro para um website. Posso simplesmente usar o Instagram gratuito.\"\n\n**Resposta**: \"Entendo sua preocupação, especialmente considerando como o Instagram é popular em Angola. Mas permita-me perguntar: quantos novos clientes você precisaria atrair mensalmente para justificar este investimento? Se cada cliente gasta em média 5.000 Kz, seriam apenas 6 novos clientes por mês. O website trabalha 24 horas, mesmo quando sua loja está fechada, e alcança pessoas que talvez nunca descubram seu Instagram. Além disso, diferente do Instagram, você é o dono completo do seu website - sem algoritmos limitando seu alcance.\"\n\n### Cenário 2: Empresa de Construção em Benguela\n\n**Cliente**: \"Este preço é muito alto comparado com outras ofertas que recebi.\"\n\n**Resposta**: \"Agradeço sua transparência. Muitas empresas de construção em Benguela têm me relatado ofertas semelhantes. Posso perguntar: essas outras propostas incluem otimização para mecanismos de busca localizada em Angola? Porque sem isso, seu site pode até existir, mas ficará invisível para potenciais clientes locais que procuram seus serviços. Nosso pacote inclui isso e mais, como adaptação completa para dispositivos móveis, que representam 87% do acesso à internet em Angola atualmente.\"",
      
      "## Conclusão\n\nResponder eficazmente a objeções de preço no mercado angolano requer uma combinação de empatia cultural, compreensão do contexto local e técnicas de negociação sólidas. Lembre-se que o objetivo não é \"vencer\" a negociação, mas criar uma situação onde o cliente veja claramente o valor que está recebendo e sinta-se confortável com o investimento.\n\nQuando um cliente diz que \"está muito caro\", ele está realmente iniciando uma conversa mais profunda sobre valor. Como afiliado da CIRCULUS, seu papel é guiar esta conversa com confiança, respeitando as realidades econômicas de Angola enquanto demonstra o verdadeiro valor de uma presença digital profissional.\n\nAs empresas angolanas estão cada vez mais reconhecendo a necessidade de transformação digital. Com estas técnicas, você estará bem equipado para ajudá-las a dar este passo crucial, enquanto mantém o valor do seu trabalho e suas comissões."
    ],
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
  }
];

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPostFull | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPostFull[]>([]);
  const postId = parseInt(id || "0");

  useEffect(() => {
    // Encontrar o post pelo ID
    const currentPost = blogPosts.find(post => post.id === postId);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Buscar posts relacionados se houver
      if (currentPost.relatedPosts && currentPost.relatedPosts.length > 0) {
        const related = blogPosts.filter(p => currentPost.relatedPosts?.includes(p.id));
        setRelatedPosts(related);
      }
    }
    
    // Rolar para o topo ao carregar o artigo
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
            <p className="mb-8">O artigo que você está procurando não existe ou foi removido.</p>
            <Link href="/blog">
              <Button>Voltar para o Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Função para renderizar conteúdo Markdown simples
  const renderMarkdown = (text: string) => {
    // Headers
    let formattedText = text.replace(/## (.*?)$/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">$1</h2>');
    formattedText = formattedText.replace(/### (.*?)$/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-gray-800 dark:text-gray-100">$1</h3>');
    
    // Lists
    formattedText = formattedText.replace(/- (.*?)$/gm, '<li class="ml-6 list-disc mb-2">$1</li>');
    formattedText = formattedText.replace(/(\<li.*?\>.*?\<\/li\>\n+)+/g, '<ul class="my-4">$&</ul>');
    
    // Bold
    formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Italics
    formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
    
    // Paragraphs (replacing line breaks that aren't already within a heading or list)
    formattedText = formattedText.replace(/^([^<].*?)$/gm, '<p class="mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">$1</p>');
    
    return formattedText;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <div className="relative h-[60vh] min-h-[400px]">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-dark/90 z-10"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: `url(${post.image})` }}
          ></div>
          <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
          
          <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-end pb-16">
            <div className="w-full max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center gap-2 mb-4"
              >
                <Link href="/blog">
                  <Button variant="outline" size="sm" className="bg-white/20 backdrop-blur-md border-white/20 text-white hover:bg-white/30">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Blog
                  </Button>
                </Link>
                <span className="bg-primary/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </motion.div>
              
              <motion.h1 
                className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {post.title}
              </motion.h1>
              
              <motion.div 
                className="flex items-center flex-wrap gap-4 text-white/80 text-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{post.readTime} de leitura</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Content area */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Article excerpt */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-xl text-gray-700 dark:text-gray-300 italic">
                  {post.excerpt}
                </p>
              </motion.div>
              
              {/* Article content */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <article className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300">
                  {post.content.map((section, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: renderMarkdown(section) }} />
                  ))}
                </article>
                
                {/* Tags */}
                <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Tags:</h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm flex items-center"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Share buttons */}
                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Partilhar:</h4>
                  <div className="flex gap-3">
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Facebook className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="icon" className="rounded-full">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              {/* Comments section placeholder */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Comentários</h3>
                  <Button className="flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Deixar um comentário
                  </Button>
                </div>
                
                <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                  <p>Seja o primeiro a comentar neste artigo.</p>
                </div>
              </motion.div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Author box */}
              <motion.div 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-100 dark:border-gray-700">
                    {post.authorImage ? (
                      <img 
                        src={post.authorImage} 
                        alt={post.author} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-3xl font-bold">
                        {post.author.charAt(0)}
                      </div>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{post.author}</h3>
                  {post.authorRole && (
                    <p className="text-primary text-sm mb-3">{post.authorRole}</p>
                  )}
                  
                  {post.authorBio && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-3">
                      {post.authorBio}
                    </p>
                  )}
                </div>
              </motion.div>
              
              {/* Related posts */}
              {relatedPosts.length > 0 && (
                <motion.div 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Artigos Relacionados</h3>
                  
                  <div className="space-y-6">
                    {relatedPosts.map((relatedPost) => (
                      <Link href={`/blog/${relatedPost.id}`} key={relatedPost.id}>
                        <div className="group flex gap-4 cursor-pointer">
                          <div className="w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                            <img 
                              src={relatedPost.image} 
                              alt={relatedPost.title} 
                              className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-300" 
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200 line-clamp-2">
                              {relatedPost.title}
                            </h4>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                              {relatedPost.date} • {relatedPost.readTime} de leitura
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}