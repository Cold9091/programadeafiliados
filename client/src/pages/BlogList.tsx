import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Search, Calendar, Clock, User, Tag, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type BlogPost = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  tags: string[];
};

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Lista de posts do blog (em produção, viria de uma API ou banco de dados)
  const allPosts: BlogPost[] = [
    {
      id: 1,
      title: "5 Estratégias Comprovadas para Vender Websites com Sucesso",
      excerpt: "Descubra as melhores táticas para convencer clientes sobre o valor de ter um website profissional.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      author: "Carlos Silva",
      date: "12 Abril, 2023",
      category: "Vendas",
      readTime: "5 min",
      tags: ["Vendas", "Websites", "Estratégias"]
    },
    {
      id: 2,
      title: "Como Usar as Redes Sociais para Encontrar Clientes Potenciais",
      excerpt: "Aprenda a utilizar Instagram, Facebook e LinkedIn para identificar e abordar clientes que precisam de websites.",
      image: "https://images.unsplash.com/photo-1579869847514-7c1a19d2d2ad?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      author: "Maria Torres",
      date: "23 Março, 2023",
      category: "Marketing",
      readTime: "8 min",
      tags: ["Redes Sociais", "Leads", "Marketing Digital"]
    },
    {
      id: 3,
      title: "O Que Fazer Quando o Cliente Diz Que Está Muito Caro?",
      excerpt: "Técnicas de negociação e argumentação para lidar com objeções de preço sem reduzir suas comissões.",
      image: "https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3",
      author: "João Mendes",
      date: "5 Maio, 2023",
      category: "Negociação",
      readTime: "6 min",
      tags: ["Negociação", "Objeções", "Valor"]
    },
    {
      id: 4,
      title: "Como se Destacar como Afiliado em um Mercado Competitivo",
      excerpt: "Estratégias para se diferenciar e construir sua marca pessoal como afiliado em Angola.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3",
      author: "Ana Beatriz",
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
      date: "15 Agosto, 2023",
      category: "Marketing Digital",
      readTime: "9 min",
      tags: ["SEO", "Google", "Tráfego Orgânico"]
    }
  ];

  // Extrair categorias e tags únicas para os filtros
  const categories = Array.from(new Set(allPosts.map(post => post.category)));
  const tags = Array.from(new Set(allPosts.flatMap(post => post.tags)));

  // Filtrar posts com base nos critérios selecionados
  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Blog CIRCULUS Afiliados
              </motion.h1>
              <motion.p 
                className="text-xl mb-8 text-white/80"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Artigos, dicas e estratégias para ajudar você a ter sucesso como afiliado no mercado angolano
              </motion.p>
              
              <motion.div 
                className="relative max-w-xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Input 
                  type="text" 
                  placeholder="Pesquisar artigos..." 
                  className="pl-12 h-14 rounded-full bg-white/20 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60 focus-visible:ring-white/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Filters section */}
        <section className="py-8 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center">
                <Filter className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" />
                <span className="text-gray-700 dark:text-gray-300 font-medium">Filtrar por:</span>
              </div>
              
              {/* Category filter */}
              <div className="flex flex-wrap gap-2">
                <Badge 
                  variant={selectedCategory === null ? "default" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedCategory(null)}
                >
                  Todas categorias
                </Badge>
                
                {categories.map((category) => (
                  <Badge 
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
              
              {/* Tags filter */}
              <div className="flex flex-wrap gap-2 ml-auto">
                <Badge 
                  variant={selectedTag === null ? "secondary" : "outline"}
                  className="cursor-pointer"
                  onClick={() => setSelectedTag(null)}
                >
                  Todas tags
                </Badge>
                
                {tags.slice(0, 5).map((tag) => (
                  <Badge 
                    key={tag}
                    variant={selectedTag === tag ? "secondary" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedTag(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Blog posts grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Nenhum artigo encontrado</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Tente ajustar seus filtros ou termos de pesquisa</p>
                <Button onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory(null);
                  setSelectedTag(null);
                }}>
                  Limpar filtros
                </Button>
              </div>
            ) : (
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {filteredPosts.map((post) => (
                  <motion.div 
                    key={post.id}
                    variants={itemVariants}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
                  >
                    <Link href={`/blog/${post.id}`}>
                      <div className="cursor-pointer">
                        <div className="relative h-52 overflow-hidden">
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-4 gap-4">
                            <div className="flex items-center">
                              <User className="w-4 h-4 mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2 mb-6">
                            {post.tags.slice(0, 3).map((tag, index) => (
                              <span 
                                key={index}
                                className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setSelectedTag(tag);
                                }}
                              >
                                <Tag className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center text-primary group">
                            <span className="mr-2">Ler artigo completo</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}