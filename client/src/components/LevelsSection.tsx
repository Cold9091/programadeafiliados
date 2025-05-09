import { motion } from "framer-motion";
import { Check, Star, Trophy, Shield, Sparkles, Zap, BadgeCheck, Rocket } from "lucide-react";

export default function LevelsSection() {
  const levels = [
    {
      title: "Afiliado Iniciante",
      description: "Primeiro passo na jornada de afiliado da CIRCULUS",
      icon: <Star className="h-7 w-7" />,
      color: "from-blue-600 to-indigo-600",
      badge: "INICIANTE",
      badgeColor: "bg-blue-600",
      requirements: [
        "Cadastro aprovado"
      ],
      benefits: [
        "Material de divulgação básico",
        "Link de afiliado personalizado",
        "Suporte por WhatsApp",
        "Comissões base"
      ],
      popular: false,
      features: [
        { name: "Materiais de Marketing", value: "Básico" },
        { name: "Comissões", value: "Padrão" },
        { name: "Suporte", value: "Email + WhatsApp" },
        { name: "Dashboard", value: "Básico" }
      ]
    },
    {
      title: "Afiliado Pro",
      description: "Para quem está comprometido com resultados",
      icon: <Trophy className="h-7 w-7" />,
      color: "from-purple-600 to-pink-600",
      badge: "MAIS POPULAR",
      badgeColor: "bg-yellow-500",
      requirements: [
        "5+ vendas como Iniciante",
        "Treinamento básico concluído"
      ],
      benefits: [
        "Material de divulgação avançado",
        "Comissões maiores",
        "Treinamento de vendas avançado",
        "Grupo exclusivo de afiliados"
      ],
      popular: true,
      features: [
        { name: "Materiais de Marketing", value: "Avançado" },
        { name: "Comissões", value: "Aumentadas" },
        { name: "Suporte", value: "Prioritário" },
        { name: "Dashboard", value: "Completo" }
      ]
    },
    {
      title: "Parceiro White-Label",
      description: "Tenha seu próprio negócio digital",
      icon: <Shield className="h-7 w-7" />,
      color: "from-teal-600 to-emerald-600",
      badge: "PREMIUM",
      badgeColor: "bg-teal-600",
      requirements: [
        "15+ vendas como Pro",
        "Entrevista de aprovação"
      ],
      benefits: [
        "Revenda com sua marca",
        "Máximas comissões",
        "Painel administrativo próprio",
        "Equipe de suporte dedicada",
        "Oportunidade de ter afiliados próprios"
      ],
      popular: false,
      features: [
        { name: "Materiais de Marketing", value: "Premium + Marca Própria" },
        { name: "Comissões", value: "Máximas" },
        { name: "Suporte", value: "Equipe Dedicada" },
        { name: "Dashboard", value: "White-Label" }
      ]
    }
  ];

  // Unique selling points with icons
  const sellingPoints = [
    { icon: <BadgeCheck className="h-6 w-6" />, title: "Upgrade Automático", description: "Ao atingir os requisitos, você é automaticamente promovido para o próximo nível" },
    { icon: <Rocket className="h-6 w-6" />, title: "Crescimento Rápido", description: "Nossos afiliados mais dedicados chegam ao nível PRO em apenas 2 semanas" },
    { icon: <Sparkles className="h-6 w-6" />, title: "100% Transparente", description: "Acompanhe suas vendas e comissões em tempo real pelo dashboard" }
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.2,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    }),
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="niveis" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-purple-50 to-indigo-50 rounded-full opacity-70 blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-blue-50 to-teal-50 rounded-full opacity-70 blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1 mb-4 text-primary font-medium text-sm">
            EVOLUA COM A CIRCULUS
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Escada de Níveis</h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Evolua na sua carreira de afiliado, desbloqueie novos benefícios e aumente seus ganhos significativamente
          </motion.p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {levels.map((level, index) => (
            <motion.div 
              key={index}
              className="relative"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
            >
              {/* Popular badge */}
              {level.popular && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className={`${level.badgeColor} text-white text-xs font-bold py-2 px-4 rounded-full shadow-lg z-10 animate-pulse`}>
                    {level.badge}
                  </div>
                </div>
              )}
              
              <div className={`h-full bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 ${level.popular ? 'ring-2 ring-purple-500' : ''}`}>
                {/* Card header */}
                <div className={`bg-gradient-to-r ${level.color} text-white p-6`}>
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                      {level.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{level.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm">{level.description}</p>
                </div>
                
                {/* Card Content */}
                <div className="p-6">
                  {/* Features */}
                  <div className="mb-6 space-y-3">
                    {level.features.map((feature, i) => (
                      <div key={i} className="flex justify-between items-center">
                        <span className="text-gray-600 text-sm">{feature.name}</span>
                        <span className="font-medium text-gray-900">{feature.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-100 pt-6 mb-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <Zap className="h-5 w-5 text-yellow-500 mr-2" />
                      Requisitos:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {level.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="font-bold text-lg mb-3 flex items-center">
                      <Sparkles className="h-5 w-5 text-blue-500 mr-2" />
                      Benefícios:
                    </h4>
                    <ul className="space-y-2">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <motion.li 
                          key={benefitIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: benefitIndex * 0.1 + 0.3 }}
                        >
                          <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <a 
                      href="#cadastro" 
                      className={`btn-3d w-full block py-3 px-4 rounded-xl text-center text-white font-medium bg-gradient-to-r ${level.color}`}
                    >
                      Comece Agora
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Unique selling points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sellingPoints.map((point, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 text-primary">
                {point.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
