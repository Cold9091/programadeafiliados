import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "Quanto tempo leva para começar a vender?",
      answer: "Você pode começar imediatamente após a aprovação do seu cadastro, que ocorre em até 24 horas. O material de divulgação é disponibilizado logo em seguida e você já pode iniciar suas vendas."
    },
    {
      question: "Preciso ter conhecimento em websites?",
      answer: "Não é necessário conhecimento técnico em websites. Nosso material explica de forma simples como funcionam os nossos produtos e você será treinado para responder as perguntas mais comuns dos clientes."
    },
    {
      question: "Como recebo minhas comissões?",
      answer: "As comissões são pagas semanalmente via transferência bancária ou mobile money. Os pagamentos são processados toda sexta-feira para vendas confirmadas até quinta-feira."
    },
    {
      question: "O que é o programa White-Label?",
      answer: "O programa White-Label permite que você revenda os websites com sua própria marca, como se fossem desenvolvidos por você. Você recebe comissões maiores e pode construir sua própria agência digital sem precisar desenvolver os produtos."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Perguntas Frequentes</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Tire suas dúvidas sobre o programa de afiliados
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 bg-accent hover:bg-gray-100 hover:no-underline font-semibold text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 bg-white">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
