import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Inscreve-se",
      description: "Preencha o formulário de cadastro e entre para o programa de afiliados CIRCULUS."
    },
    {
      number: 2,
      title: "Recebe Material",
      description: "Acesse todo o material promocional e treinamentos para começar suas vendas."
    },
    {
      number: 3,
      title: "Vende com seu Link",
      description: "Compartilhe seu link personalizado ou código de afiliado com potenciais clientes."
    },
    {
      number: 4,
      title: "Recebe Comissão",
      description: "Após confirmação do pagamento, receba sua comissão diretamente na sua conta."
    }
  ];

  return (
    <section id="como-funciona" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Como Funciona</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Um processo simples de 4 passos para começar a ganhar suas comissões
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white text-2xl font-bold rounded-full mb-6">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-16 bg-accent p-6 rounded-lg shadow flex flex-col md:flex-row items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="md:w-1/2 md:pr-8 mb-6 md:mb-0">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Reunião de negócios para discussão de websites" 
              className="rounded-lg shadow-md w-full" 
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Apoio Total Para Seu Sucesso
            </h3>
            <p className="mb-4">
              A CIRCULUS oferece todo o suporte necessário para que você alcance suas metas de vendas. 
              Nossa equipe está sempre disponível para ajudar e responder suas dúvidas.
            </p>
            <Button 
              asChild
              className="bg-primary text-white font-bold px-6 py-3 h-auto hover:bg-secondary transition duration-300"
            >
              <a href="#cadastro">Quero fazer parte</a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
