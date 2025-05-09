import { useEffect, useState } from "react";
import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User, Tag, Share2, Facebook, Twitter, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BlogPost, getPostById, getRelatedPosts } from "@/data/blogPosts";

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const postId = parseInt(id || "0");

  useEffect(() => {
    // Encontrar o post pelo ID
    const currentPost = getPostById(postId);
    
    if (currentPost) {
      setPost(currentPost);
      
      // Buscar posts relacionados se houver
      const related = getRelatedPosts(postId);
      setRelatedPosts(related);
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
    if (!text) return "";
    
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

  // Se o post não tiver conteúdo, cria um conteúdo padrão baseado no título e excerpt
  const postContent = post.content || [
    `## ${post.title}\n\n${post.excerpt}\n\nEste artigo está em desenvolvimento. Em breve teremos mais conteúdo sobre este tema importante para afiliados da CIRCULUS em Angola.`,
    `## Fique atento\n\nEm breve este artigo será expandido com informações adaptadas à realidade angolana, incluindo exemplos práticos, estudos de caso e estratégias específicas para o mercado local.`
  ];

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
                  {postContent.map((section, index) => (
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