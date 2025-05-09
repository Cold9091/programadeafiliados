import { motion } from "framer-motion";
import { Check, UserPlus, BookOpen, Presentation, DollarSign, BarChart, Award } from "lucide-react";

type TimelineStep = {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  duration?: string;
};

export default function TimelineSection() {
  const timelineSteps: TimelineStep[] = [
    {
      icon: UserPlus,
      title: "Cadastro",
      description: "Preencha o formulário de cadastro com seus dados básicos e receba acesso ao portal de afiliados.",
      bgColor: "bg-blue-500",
      duration: "5 minutos"
    },
    {
      icon: BookOpen,
      title: "Treinamento",
      description: "Acesse os materiais e treinamentos exclusivos para aprender como vender websites de forma eficiente.",
      bgColor: "bg-purple-500",
      duration: "1-2 dias"
    },
    {
      icon: Presentation,
      title: "Apresentação",
      description: "Utilize os materiais de marketing para apresentar as soluções aos seus clientes potenciais.",
      bgColor: "bg-pink-500",
      duration: "Contínuo"
    },
    {
      icon: DollarSign,
      title: "Venda",
      description: "Formalize a venda através do portal de afiliados e receba a confirmação instantânea.",
      bgColor: "bg-green-500",
      duration: "1 dia"
    },
    {
      icon: BarChart,
      title: "Acompanhamento",
      description: "Acompanhe o status de suas vendas e comissões através do dashboard exclusivo.",
      bgColor: "bg-amber-500",
      duration: "Contínuo"
    },
    {
      icon: Award,
      title: "Recebimento",
      description: "Receba suas comissões semanalmente via transferência bancária ou mobile money.",
      bgColor: "bg-red-500",
      duration: "Semanal"
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="timeline" className="py-24 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float"></div>
      <div className="absolute top-40 right-10 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float animation-delay-4000"></div>
    
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1 mb-4 text-primary font-medium text-sm">
            SEU CAMINHO PARA O SUCESSO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Como Funciona</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Veja o passo a passo desde o cadastro até o recebimento das suas comissões
          </p>
        </motion.div>

        <motion.div 
          className="relative max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 z-0 hidden md:block"></div>
          
          {/* Timeline steps */}
          <div className="relative z-10">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={index} 
                  className={`mb-12 md:mb-20 flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  variants={itemVariants}
                >
                  {/* Mobile timeline (visible only on small screens) */}
                  <div className="flex items-center mb-4 md:hidden">
                    <div className={`w-12 h-12 rounded-full ${step.bgColor} flex items-center justify-center text-white`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="ml-4">
                      <span className="block text-sm text-gray-500 dark:text-gray-400">{step.duration}</span>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
                    </div>
                  </div>
                  
                  {/* Desktop timeline left side (content or icon depending on even/odd) */}
                  <div className="md:w-1/2 md:pr-8 md:text-right">
                    {isEven ? (
                      <>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 hidden md:block">{step.duration}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hidden md:block">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </>
                    ) : (
                      <div className="hidden md:flex md:justify-end">
                        <div className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center text-white relative`}>
                          <Icon className="w-6 h-6" />
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-primary">
                            <Check className="w-3 h-3 text-primary" />
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline center dot (desktop only) */}
                  <div className="hidden md:block md:w-6 absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-6 h-6 rounded-full bg-primary border-4 border-white dark:border-gray-900"></div>
                  </div>
                  
                  {/* Desktop timeline right side (content or icon depending on even/odd) */}
                  <div className="md:w-1/2 md:pl-8">
                    {isEven ? (
                      <div className="hidden md:block">
                        <div className={`w-14 h-14 rounded-full ${step.bgColor} flex items-center justify-center text-white relative`}>
                          <Icon className="w-6 h-6" />
                          <span className="absolute -top-1 -right-1 w-5 h-5 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center border-2 border-primary">
                            <Check className="w-3 h-3 text-primary" />
                          </span>
                        </div>
                      </div>
                    ) : (
                      <>
                        <span className="block text-sm text-gray-500 dark:text-gray-400 hidden md:block">{step.duration}</span>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hidden md:block">{step.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {/* End marker */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 hidden md:block">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
              <Check className="w-5 h-5" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}