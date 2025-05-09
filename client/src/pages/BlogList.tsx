import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, Filter, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extrair categorias e tags únicas para os filtros
  const categories = [...new Set(blogPosts.map(post => post.category))];
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = [...new Set(allTags)];

  // Filtrar os posts com base nos critérios
  const filteredPosts = blogPosts.filter(post => {
    // Pesquisa por termo
    const matchesSearch = searchTerm === "" || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase());
    
    // Filtro por categoria
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    // Filtro por tag
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  // Reset de todos os filtros
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  useEffect(() => {
    // Rolar para o topo quando a página é carregada
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
          <div className="absolute inset-0 bg-black/10"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog da CIRCULUS</h1>
              <p className="text-lg text-white/80 mb-8">
                Dicas, estratégias e insights para afiliados venderem mais websites em Angola
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <Input
                  type="text" 
                  placeholder="Pesquisar artigos..." 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 pr-10 backdrop-blur-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Filtros e Resultados */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar com filtros */}
            <div className="lg:col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 sticky top-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filtros</h3>
                  {(selectedCategory || selectedTag || searchTerm) && (
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={resetFilters}
                      className="text-gray-500 dark:text-gray-400 hover:text-primary"
                    >
                      <X className="w-4 h-4 mr-1" /> Limpar
                    </Button>
                  )}
                </div>
                
                {/* Filtro por Categoria */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Filter className="w-4 h-4 mr-2" /> Categorias
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <Badge 
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        className="mr-2 mb-2 cursor-pointer"
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      >
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {/* Filtro por Tags */}
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
                    <Tag className="w-4 h-4 mr-2" /> Tags
                  </h4>
                  <div className="flex flex-wrap">
                    {uniqueTags.map((tag) => (
                      <Badge 
                        key={tag}
                        variant={selectedTag === tag ? "default" : "outline"}
                        className="mr-2 mb-2 cursor-pointer"
                        onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Lista de Posts */}
            <div className="lg:col-span-3">
              {/* Indicadores de filtro ativo */}
              {(selectedCategory || selectedTag || searchTerm) && (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 mb-6 flex items-center flex-wrap">
                  <span className="text-gray-500 dark:text-gray-400 mr-3">Filtros ativos:</span>
                  
                  {searchTerm && (
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Pesquisa: {searchTerm}
                      <X 
                        className="w-3 h-3 ml-1 cursor-pointer" 
                        onClick={() => setSearchTerm("")}
                      />
                    </Badge>
                  )}
                  
                  {selectedCategory && (
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Categoria: {selectedCategory}
                      <X 
                        className="w-3 h-3 ml-1 cursor-pointer" 
                        onClick={() => setSelectedCategory(null)}
                      />
                    </Badge>
                  )}
                  
                  {selectedTag && (
                    <Badge variant="secondary" className="mr-2 mb-2">
                      Tag: {selectedTag}
                      <X 
                        className="w-3 h-3 ml-1 cursor-pointer" 
                        onClick={() => setSelectedTag(null)}
                      />
                    </Badge>
                  )}
                </div>
              )}
              
              {/* Resultados ou mensagem sem resultados */}
              {filteredPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Link href={`/blog/${post.id}`}>
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden h-full cursor-pointer hover:shadow-xl transition-shadow duration-300">
                          <div className="h-48 overflow-hidden">
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                            />
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                              <span className="bg-primary/10 text-primary dark:bg-primary/20 px-3 py-1 rounded-full text-xs font-medium">
                                {post.category}
                              </span>
                              <span className="mx-2">•</span>
                              <span className="flex items-center">
                                <Clock className="w-3 h-3 mr-1" /> {post.readTime}
                              </span>
                            </div>
                            
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                              {post.title}
                            </h2>
                            
                            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex justify-between items-center mt-4">
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                Por {post.author}
                              </div>
                              
                              <Button variant="ghost" size="sm" className="text-primary">
                                Ler mais <ArrowRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 text-center">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    Nenhum artigo encontrado
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Não encontramos nenhum artigo que corresponda aos seus critérios de busca.
                  </p>
                  <Button onClick={resetFilters}>
                    Limpar filtros
                  </Button>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}