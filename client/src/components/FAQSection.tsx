import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ChevronDown, 
  Clock, 
  Code, 
  PiggyBank, 
  Store, 
  Phone, 
  BookOpen, 
  Globe, 
  HelpCircle 
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const faqCategories = [
    { id: "all", label: "Todos" },
    { id: "getting-started", label: "Primeiros Passos" },
    { id: "payments", label: "Pagamentos" },
    { id: "technical", label: "Técnico" }
  ];

  const faqs = [
    {
      question: "Quanto tempo leva para começar a vender?",
      answer: "Você pode começar imediatamente após a aprovação do seu cadastro, que ocorre em até 24 horas. O material de divulgação é disponibilizado logo em seguida e você já pode iniciar suas vendas.",
      category: "getting-started",
      icon: <Clock className="h-5 w-5" />
    },
    {
      question: "Preciso ter conhecimento em websites?",
      answer: "Não é necessário conhecimento técnico em websites. Nosso material explica de forma simples como funcionam os nossos produtos e você será treinado para responder as perguntas mais comuns dos clientes.",
      category: "technical",
      icon: <Code className="h-5 w-5" />
    },
    {
      question: "Como recebo minhas comissões?",
      answer: "As comissões são pagas semanalmente via transferência bancária ou mobile money. Os pagamentos são processados toda sexta-feira para vendas confirmadas até quinta-feira.",
      category: "payments",
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      question: "O que é o programa White-Label?",
      answer: "O programa White-Label permite que você revenda os websites com sua própria marca, como se fossem desenvolvidos por você. Você recebe comissões maiores e pode construir sua própria agência digital sem precisar desenvolver os produtos.",
      category: "getting-started",
      icon: <Store className="h-5 w-5" />
    },
    {
      question: "Quais métodos de pagamento são aceitos?",
      answer: "Aceitamos transferências bancárias, pagamentos via mobile money (como PAYPAL, e outras plataformas em Angola), e depósitos bancários diretos.",
      category: "payments",
      icon: <PiggyBank className="h-5 w-5" />
    },
    {
      question: "É possível atender clientes internacionais?",
      answer: "Sim, você pode atender clientes de qualquer país de língua portuguesa. Nossa plataforma está preparada para lidar com clientes de Angola, Brasil, Portugal e outros países lusófonos.",
      category: "getting-started",
      icon: <Globe className="h-5 w-5" />
    },
    {
      question: "Existe algum treinamento disponível?",
      answer: "Sim, oferecemos um treinamento completo para todos os novos afiliados. Este treinamento inclui técnicas de vendas, explicações sobre produtos e estratégias de marketing digital.",
      category: "getting-started",
      icon: <BookOpen className="h-5 w-5" />
    },
    {
      question: "Como funciona o suporte técnico para clientes?",
      answer: "Todos os aspectos técnicos são gerenciados pela nossa equipe. Você realiza a venda, e nós cuidamos da implementação, hospedagem e suporte técnico dos sites.",
      category: "technical",
      icon: <Phone className="h-5 w-5" />
    }
  ];

  // Filter FAQs based on active category
  const filteredFaqs = activeCategory === "all" 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0" style={{ 
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a148c' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-purple-100 px-4 py-1 mb-4 text-primary font-medium text-sm">
            TIRE SUAS DÚVIDAS
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Perguntas Frequentes</h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Tire suas dúvidas sobre o programa de afiliados da CIRCULUS
          </motion.p>
        </motion.div>
        
        {/* FAQ Category Tabs */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-wrap justify-center">
          {faqCategories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-2 m-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </div>
        
        {/* FAQ Accordion with glass effect */}
        <motion.div 
          className="max-w-4xl mx-auto glass-dark rounded-2xl overflow-hidden p-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <div className="bg-white rounded-2xl overflow-hidden">
            <Accordion type="single" collapsible className="space-y-2 p-4">
              {filteredFaqs.map((faq, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <AccordionItem 
                    value={`item-${index}`}
                    className="border border-gray-100 rounded-xl overflow-hidden shadow-sm"
                  >
                    <AccordionTrigger className="px-6 py-4 bg-white hover:bg-gray-50 hover:no-underline data-[state=open]:bg-gray-50 group">
                      <div className="flex items-center text-left">
                        <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3 flex-shrink-0 group-data-[state=open]:bg-primary group-data-[state=open]:text-white transition-colors duration-300">
                          {faq.icon}
                        </span>
                        <span className="font-semibold text-gray-900">{faq.question}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 py-4 bg-white text-gray-600">
                      <div className="pl-11">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </div>
        </motion.div>
        
        {/* Still have questions */}
        <motion.div 
          className="mt-16 text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <HelpCircle className="h-8 w-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Ainda tem perguntas?</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Se você não encontrou a resposta para sua pergunta, nossa equipe está pronta para ajudar.
            Entre em contato diretamente conosco.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://wa.me/+244123456789"
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg shadow-lg hover:bg-green-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp className="mr-2 text-xl" />
              WhatsApp
            </motion.a>
            <motion.a
              href="mailto:circulusafiliados@gmail.com"
              className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg shadow-lg hover:bg-secondary transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
