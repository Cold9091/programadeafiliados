import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function LevelsSection() {
  const levels = [
    {
      title: "Afiliado Iniciante",
      color: "bg-primary",
      requirements: [
        "Cadastro aprovado"
      ],
      benefits: [
        "Material de divulgação básico",
        "Link de afiliado",
        "Suporte por WhatsApp"
      ]
    },
    {
      title: "Afiliado Pro",
      color: "bg-secondary",
      requirements: [
        "5+ vendas como Iniciante",
        "Treinamento básico concluído"
      ],
      benefits: [
        "Material de divulgação avançado",
        "Comissões maiores",
        "Treinamento de vendas avançado",
        "Grupo exclusivo de afiliados"
      ]
    },
    {
      title: "Parceiro White-Label",
      color: "bg-purple-800",
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
      ]
    }
  ];

  return (
    <section id="niveis" className="py-16 bg-accent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Escada de Níveis</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Evolua na sua carreira de afiliado e aumente seus ganhos
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {levels.map((level, index) => (
            <motion.div 
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-primary transition-transform duration-300 hover:scale-105`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ borderColor: level.color === "bg-primary" ? "#4A148C" : level.color === "bg-secondary" ? "#7B1FA2" : "#6A1B9A" }}
            >
              <div className={`${level.color} text-white p-4 text-center`}>
                <h3 className="text-xl font-bold">{level.title}</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="font-bold text-lg mb-2">Requisitos:</h4>
                  <ul className="space-y-2">
                    {level.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-lg mb-2">Benefícios:</h4>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
