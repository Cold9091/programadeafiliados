import { motion } from "framer-motion";
import { Clock, ArrowRight, Tag, User, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default function BlogSection() {
  const posts: BlogPost[] = [
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
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="blog" className="py-24 relative bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <div className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1 mb-4 text-primary font-medium text-sm">
              BLOG & RECURSOS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Dicas para Afiliados</h2>
            <p className="text-xl max-w-3xl text-gray-600 dark:text-gray-400">
              Conteúdo exclusivo para ajudar você a vender mais e aumentar suas comissões
            </p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <Button variant="outline" className="flex items-center gap-2">
              Ver Todas as Publicações <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {posts.map((post) => (
            <motion.div 
              key={post.id} 
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
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
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="inline-flex items-center text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button variant="link" className="p-0 h-auto text-primary flex items-center group">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}