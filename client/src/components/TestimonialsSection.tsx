import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

type Testimonial = {
  id: number;
  name: string;
  role: string;
  comment: string;
  image: string;
  rating: number;
  location: string;
};

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Carlos Mendes",
      role: "Afiliado Diamante",
      comment: "Nunca imaginei que conseguiria uma renda extra tão significativa. Em apenas 3 meses como afiliado, já vendi 12 websites e a comissão transformou minha vida financeira. O melhor é que o processo é muito simples!",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
      location: "Luanda"
    },
    {
      id: 2,
      name: "Maria Fernanda",
      role: "Afiliada Platina",
      comment: "Comecei sem experiência em vendas, mas com o suporte e materiais que a CIRCULUS oferece, consegui fazer minhas primeiras vendas na primeira semana. Os treinamentos são excelentes e o suporte é incrível.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
      location: "Benguela"
    },
    {
      id: 3,
      name: "Pedro Silva",
      role: "Afiliado Ouro",
      comment: "Como estudante universitário, precisava de um trabalho flexível. O programa de afiliados da CIRCULUS me permite trabalhar no meu próprio tempo e ainda assim gerar uma renda consistente todos os meses.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      rating: 4,
      location: "Huambo"
    },
    {
      id: 4,
      name: "Ana Beatriz",
      role: "Afiliada Prata",
      comment: "O que mais me impressiona é a rapidez dos pagamentos. Sempre recebo minhas comissões dentro do prazo e o processo é totalmente transparente. Já indiquei para vários amigos!",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
      rating: 5,
      location: "Cabinda"
    },
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      nextTestimonial();
    }, 5000);
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  // Handle autoplay
  useEffect(() => {
    if (isAutoplay) {
      startAutoplay();
    } else {
      stopAutoplay();
    }
    
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isAutoplay, activeIndex]);

  return (
    <section id="depoimentos" className="py-24 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white to-transparent dark:from-gray-900"></div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent dark:from-gray-900"></div>
        <div className="absolute -left-10 top-1/4 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob dark:bg-purple-600 dark:opacity-20"></div>
        <div className="absolute -right-10 top-1/3 w-40 h-40 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000 dark:bg-yellow-600 dark:opacity-20"></div>
        <div className="absolute left-1/3 bottom-1/4 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000 dark:bg-pink-600 dark:opacity-20"></div>
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1 mb-4 text-primary font-medium text-sm">
            DEPOIMENTOS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">O Que Dizem Nossos Afiliados</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Histórias reais de pessoas que transformaram suas vidas com o Programa de Afiliados CIRCULUS
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="relative overflow-hidden py-10 px-4 md:px-0"
            onMouseEnter={() => setIsAutoplay(false)}
            onMouseLeave={() => setIsAutoplay(true)}
          >
            <div className="relative h-full">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  className={cn(
                    "absolute top-0 left-0 w-full transition-all duration-500 ease-in-out",
                    index === activeIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"
                  )}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ 
                    opacity: index === activeIndex ? 1 : 0,
                    x: index === activeIndex ? 0 : 100
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 relative z-10 mx-4 md:mx-0">
                    <div className="absolute -top-5 -left-5 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                      <Quote className="w-5 h-5" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className="md:w-1/3 flex-shrink-0">
                        <motion.div 
                          className="relative"
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden border-4 border-purple-100 dark:border-gray-700">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 px-3 py-1 rounded-full shadow-md">
                            <div className="flex items-center">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                  key={i} 
                                  className={cn(
                                    "w-4 h-4", 
                                    i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                  )} 
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                        
                        <div className="text-center mt-6">
                          <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                          <p className="text-primary text-sm">{testimonial.role}</p>
                          <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.location}</p>
                        </div>
                      </div>
                      
                      <div className="md:w-2/3">
                        <p className="text-gray-600 dark:text-gray-300 italic text-lg leading-relaxed">"{testimonial.comment}"</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center md:justify-between items-center mt-10">
            <button 
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 hidden md:block"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ir para depoimento ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-primary hover:text-white transition-colors duration-300 hidden md:block"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}