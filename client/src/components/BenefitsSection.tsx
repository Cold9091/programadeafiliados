import { motion } from "framer-motion";
import { PenLine, FileText, GraduationCap } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: <PenLine className="h-10 w-10" />,
      title: "Apoio Publicitário",
      description: "Banners, posts para redes sociais e outros materiais digitais prontos para usar."
    },
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Materiais Prontos",
      description: "Apresentações, PDFs explicativos e exemplos de websites para demonstrar aos clientes."
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Curso de Vendas",
      description: "Aprenda técnicas eficazes de vendas e abordagem para conseguir mais clientes."
    },
    {
      icon: <FaWhatsapp className="h-10 w-10" />,
      title: "Suporte por WhatsApp",
      description: "Equipe de suporte disponível para tirar dúvidas e ajudar com os clientes."
    }
  ];

  const testimonials = [
    {
      initials: "ML",
      name: "Maria Luísa",
      position: "Afiliada Pro - Luanda",
      testimonial: "Comecei como afiliada há 3 meses e já consegui uma renda extra significativa. O material de apoio e o suporte são excelentes!"
    },
    {
      initials: "JP",
      name: "João Pedro",
      position: "Parceiro White-Label - Benguela",
      testimonial: "Hoje tenho minha própria agência graças ao programa White-Label da CIRCULUS. Os clientes adoram as soluções e eu ganho sem precisar desenvolver nada!"
    }
  ];

  return (
    <section className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Benefícios dos Afiliados</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Oferecemos todas as ferramentas para o seu sucesso
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary text-4xl mb-4 flex">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h3 className="text-2xl font-bold text-primary mb-4">Depoimentos dos Nossos Afiliados</h3>
                
                <div className="space-y-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-accent p-4 rounded-lg relative">
                      <div className="flex items-center mb-3">
                        <div className={`w-10 h-10 ${index === 0 ? 'bg-primary' : 'bg-secondary'} text-white rounded-full flex items-center justify-center mr-3`}>
                          <span className="font-bold">{testimonial.initials}</span>
                        </div>
                        <div>
                          <p className="font-bold">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                      <p className="italic">{testimonial.testimonial}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                  alt="Profissionais trabalhando em computadores" 
                  className="rounded-lg shadow-md w-full" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
