import { motion } from "framer-motion";
import { PenLine, FileText, GraduationCap, Star, Zap, Award, BadgeCheck, ShieldCheck, Globe, Clock, HelpCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <PenLine className="h-10 w-10" />,
      title: "Apoio Publicitário",
      description: "Banners, posts para redes sociais e outros materiais digitais prontos para usar.",
      color: "from-purple-500 to-indigo-500",
      features: ["Posts para Instagram", "Histórias para WhatsApp", "Banners para web"]
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Materiais Prontos",
      description: "Apresentações, PDFs explicativos e exemplos de websites para demonstrar aos clientes.",
      color: "from-blue-500 to-cyan-500",
      features: ["Catálogo de produtos", "PDFs explicativos", "Demonstrações ao vivo"]
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Curso de Vendas",
      description: "Aprenda técnicas eficazes de vendas e abordagem para conseguir mais clientes.",
      color: "from-teal-500 to-green-500",
      features: ["Técnicas de conversão", "Roteiros de venda", "Estudo de casos"]
    },
    {
      icon: <FaWhatsapp className="h-10 w-10" />,
      title: "Suporte por WhatsApp",
      description: "Equipe de suporte disponível para tirar dúvidas e ajudar com os clientes.",
      color: "from-green-500 to-emerald-500",
      features: ["Suporte 7 dias/semana", "Resposta rápida", "Ajuda com propostas"]
    }
  ];
  
  const additionalBenefits = [
    { icon: <Globe className="h-6 w-6" />, title: "Acesso Internacional", description: "Possibilidade de vender para clientes de qualquer país de língua portuguesa" },
    { icon: <Clock className="h-6 w-6" />, title: "Atualizações Constantes", description: "Novos materiais de marketing e produtos a cada mês" },
    { icon: <HelpCircle className="h-6 w-6" />, title: "Mentoria Individual", description: "Sessões de mentoria para os afiliados de alto desempenho" }
  ];

  const testimonials = [
    {
      initials: "ML",
      name: "Maria Luísa",
      position: "Afiliada Pro - Luanda",
      testimonial: "Comecei como afiliada há 3 meses e já consegui uma renda extra significativa. O material de apoio e o suporte são excelentes!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      initials: "JP",
      name: "João Pedro",
      position: "Parceiro White-Label - Benguela",
      testimonial: "Hoje tenho minha própria agência graças ao programa White-Label da CIRCULUS. Os clientes adoram as soluções e eu ganho sem precisar desenvolver nada!",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      initials: "AC",
      name: "Ana Carla",
      position: "Afiliada Pro - Huambo",
      testimonial: "O programa de afiliados mudou completamente minha vida financeira. Vendo websites mesmo sem conhecimento técnico de programação.",
      rating: 5,
      photo: "https://randomuser.me/api/portraits/women/68.jpg"
    }
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1]
      }
    })
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary opacity-5 rounded-full translate-y-1/2 -translate-x-1/4 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1 mb-4 text-primary font-medium text-sm">
            TUDO QUE VOCÊ PRECISA
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Benefícios dos Afiliados</h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Oferecemos todas as ferramentas e suporte necessários para maximizar suas vendas
            e garantir seu sucesso como afiliado
          </motion.p>
        </motion.div>
        
        {/* Main benefits with 3D cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 h-full group"
            >
              {/* Card header with gradient */}
              <div className={`h-3 bg-gradient-to-r ${benefit.color}`}></div>
              
              <div className="p-6">
                <div className={`w-16 h-16 rounded-xl mb-6 bg-gradient-to-r ${benefit.color} flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6">
                  {benefit.description}
                </p>
                
                <div className="border-t border-gray-100 pt-4">
                  <h4 className="font-semibold text-primary mb-2 flex items-center">
                    <BadgeCheck className="h-4 w-4 mr-1" />
                    <span>Inclui:</span>
                  </h4>
                  <ul className="space-y-1">
                    {benefit.features.map((feature, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-center text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + (i * 0.1), duration: 0.3 }}
                      >
                        <svg className="h-4 w-4 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials section with modern cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold mb-10 text-center">Depoimentos dos Nossos Afiliados</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                className="bg-white p-8 rounded-2xl shadow-lg relative"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Quote mark */}
                <div className="absolute top-6 right-8 text-6xl text-gray-100 leading-none font-serif">
                  &ldquo;
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-6">{testimonial.testimonial}</p>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonial.photo}
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-primary mr-4"
                    />
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-gray-500">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Additional benefits with animated border */}
        <div>
          <motion.div 
            className="bg-gradient-to-r from-primary to-secondary p-[1px] rounded-2xl overflow-hidden mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-6 text-gray-900">Por que se tornar um afiliado?</h3>
                  
                  <div className="space-y-6">
                    {additionalBenefits.map((benefit, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                      >
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                          {benefit.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                          <p className="text-gray-600">{benefit.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="mt-8"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <a 
                      href="#cadastro"
                      className="inline-flex items-center font-bold text-primary hover:text-secondary transition-colors duration-300"
                    >
                      <span>Quero me tornar um afiliado</span>
                      <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </motion.div>
                </div>
                
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-xl blur-xl transform -rotate-6"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500&q=80" 
                    alt="Profissionais trabalhando em computadores" 
                    className="rounded-xl shadow-xl relative z-10 w-full" 
                  />
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-xl p-4 shadow-lg z-20">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
                        <Award className="h-6 w-6" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">Prêmio</div>
                        <div className="font-bold">Melhor Programa 2024</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Call to action with neon effect */}
        <motion.div
          className="text-center py-16 px-6 rounded-2xl bg-gradient-to-r from-primary to-secondary text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full max-w-4xl absolute">
              <div className="absolute top-0 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-0 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
              <div className="absolute top-1/4 right-1/4 w-12 h-12 bg-white/10 rounded-full"></div>
              <div className="absolute bottom-1/3 left-1/3 w-16 h-16 bg-white/10 rounded-full"></div>
            </div>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 neon-text">
              Pronto para começar sua jornada como afiliado?
            </h3>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-white/90">
              Junte-se a centenas de afiliados que já estão conquistando sua independência financeira
            </p>
            <motion.a
              href="#cadastro"
              className="btn-3d inline-flex items-center bg-white text-primary font-bold px-8 py-4 rounded-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="mr-2 h-5 w-5" />
              Cadastre-se Agora
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
