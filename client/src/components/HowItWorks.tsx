import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserPlus, FileText, Link, CreditCard, ArrowRight, CheckCircle2, Award } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Inscreve-se",
      description: "Preencha o formulário de cadastro e entre para o programa de afiliados CIRCULUS.",
      icon: <UserPlus className="w-6 h-6" />,
      color: "from-purple-600 to-indigo-600"
    },
    {
      number: 2,
      title: "Recebe Material",
      description: "Acesse todo o material promocional e treinamentos para começar suas vendas.",
      icon: <FileText className="w-6 h-6" />,
      color: "from-indigo-600 to-blue-600"
    },
    {
      number: 3,
      title: "Começa as suas Vendas",
      description: "Quando converter o cliente cria um grupo onde iremos conversar com o cliente e entregar o Website ",
      icon: <Link className="w-6 h-6" />,
      color: "from-blue-600 to-cyan-600"
    },
    {
      number: 4,
      title: "Recebe Comissão",
      description: "Após confirmação do pagamento, receba sua comissão diretamente na sua conta.",
      icon: <CreditCard className="w-6 h-6" />,
      color: "from-cyan-600 to-teal-600"
    }
  ];
  
  const contentBoxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <section id="como-funciona" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1 mb-4 text-primary font-medium text-sm">
            PROCESSO SIMPLIFICADO
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Como Funciona</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Um processo simples de 4 passos para começar a ganhar suas comissões e transformar seu tempo em renda
          </p>
        </motion.div>
        
        {/* Steps - Desktop version with connecting line */}
        <div className="hidden lg:grid grid-cols-4 gap-6 mb-16 relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 w-full h-1 bg-gray-200 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              custom={index}
              variants={contentBoxVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center"
            >
              {/* Step number with gradient background */}
              <motion.div 
                className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.color} text-white text-2xl font-bold rounded-full mb-8 shadow-lg`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <span className="text-3xl">{step.number}</span>
              </motion.div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg w-full h-full">
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-3`}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Steps - Mobile version */}
        <div className="lg:hidden space-y-6 mb-16">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg flex items-start"
            >
              <div className={`w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white mr-4`}>
                <span className="font-bold">{step.number}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  {step.title}
                  <span className="ml-2">{step.icon}</span>
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Feature spotlight with 3D card effect */}
        <motion.div 
          className="mb-16 overflow-hidden rounded-2xl shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Image side */}
            <div className="relative overflow-hidden">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <img 
                  src="https://img.freepik.com/fotos-gratis/grupo-de-afro-americanos-trabalhando-juntos_1303-8983.jpg?semt=ais_hybrid&w=740" 
                  alt="Reunião de negócios para discussão de websites" 
                  className="object-cover w-full h-full" 
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <div className="flex items-center mb-2">
                    <Award className="mr-2 h-5 w-5 text-yellow-400" />
                    <span className="font-medium">Programa Inovador</span>
                  </div>
                  <h3 className="text-2xl font-bold">Oportunidade Exclusiva em Angola</h3>
                </div>
              </div>
            </div>
            
            {/* Content side */}
            <div className="bg-gradient-to-br from-primary to-purple-800 p-8 md:p-12 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">
                Apoio Total Para Seu Sucesso
              </h3>
              
              <div className="space-y-4 mb-8">
                {[
                  "Treinamento completo e atualizado",
                  "Materiais de marketing de alta conversão",
                  "Suporte técnico 7 dias por semana",
                  "Dashboard exclusivo para acompanhamento"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p className="text-white/90">{item}</p>
                  </motion.div>
                ))}
              </div>
              
              <Button 
                asChild
                variant="secondary"
                className="btn-3d bg-white text-primary font-bold px-6 py-3 h-auto text-lg rounded-xl group overflow-hidden relative shine"
              >
                <a href="#cadastro" className="flex items-center justify-center">
                  Quero fazer parte
                  <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}