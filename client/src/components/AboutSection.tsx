import { motion } from "framer-motion";
import { Laptop, BanknoteIcon, GraduationCap } from "lucide-react";

export default function AboutSection() {
  const benefits = [
    {
      icon: <Laptop className="h-10 w-10" />,
      title: "100% Online",
      description: "Trabalhe de qualquer lugar e a qualquer hora, sem precisar sair de casa."
    },
    {
      icon: <BanknoteIcon className="h-10 w-10" />,
      title: "Pagamentos Semanais",
      description: "Receba suas comissões todas as semanas, diretamente na sua conta."
    },
    {
      icon: <GraduationCap className="h-10 w-10" />,
      title: "Sem Experiência Necessária",
      description: "Fornecemos todo o treinamento e materiais para você começar imediatamente."
    }
  ];

  return (
    <section id="sobre" className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Sobre o Programa de Afiliados</h2>
          <p className="text-xl max-w-3xl mx-auto">
            A CIRCULUS oferece uma oportunidade única para você gerar renda extra vendendo websites prontos para prestadores de serviço em Angola.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-primary text-4xl mb-4 flex justify-center">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
