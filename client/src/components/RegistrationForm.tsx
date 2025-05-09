import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp } from "react-icons/fa";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { AffiliateRegistration } from "@/lib/types";

// Form validation schema
const formSchema = z.object({
  nome: z.string().min(3, { message: "Nome completo é obrigatório" }),
  whatsapp: z.string().min(9, { message: "Número de WhatsApp inválido" }),
  email: z.string().email({ message: "Email inválido" }),
  provincia: z.string().min(1, { message: "Selecione sua província" }),
  atuacao: z.string().min(1, { message: "Selecione seu tipo de atuação" }),
});

export default function RegistrationForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      email: "",
      provincia: "",
      atuacao: "",
    },
  });

  const registerMutation = useMutation({
    mutationFn: (data: AffiliateRegistration) => {
      return apiRequest("POST", "/api/register", data);
    },
    onSuccess: () => {
      toast({
        title: "Cadastro realizado com sucesso!",
        description: "Entraremos em contato em breve.",
        variant: "default",
      });
      form.reset();
      setIsSubmitting(false);
    },
    onError: (error) => {
      toast({
        title: "Erro ao realizar cadastro",
        description: error.message || "Por favor, tente novamente",
        variant: "destructive",
      });
      setIsSubmitting(false);
    },
  });

  // Form submission handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    registerMutation.mutate(values);
  }

  const provincias = [
    "Luanda",
    "Benguela",
    "Huambo",
    "Cabinda",
    "Huíla",
    "Malanje",
    "Uíge",
    "Outra"
  ];

  const atuacoes = [
    "Freelancer",
    "Agência",
    "Empresa",
    "Estudante",
    "Outro"
  ];

  return (
    <section id="cadastro" className="py-16 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Cadastre-se no Programa de Afiliados</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Preencha o formulário abaixo e comece a sua jornada como afiliado CIRCULUS
          </p>
        </motion.div>
        
        <motion.div 
          className="bg-white rounded-lg shadow-xl p-8 max-w-2xl mx-auto text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} className="px-4 py-3 h-auto" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="whatsapp"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Número de WhatsApp <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="+244 xxx xxx xxx" {...field} className="px-4 py-3 h-auto" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="seu.email@exemplo.com" {...field} className="px-4 py-3 h-auto" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="provincia"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Província <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="px-4 py-3 h-auto">
                          <SelectValue placeholder="Selecione sua província" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {provincias.map((provincia) => (
                          <SelectItem key={provincia} value={provincia}>{provincia}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="atuacao"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Tipo de Atuação <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="px-4 py-3 h-auto">
                          <SelectValue placeholder="Como você atua profissionalmente" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {atuacoes.map((atuacao) => (
                          <SelectItem key={atuacao} value={atuacao}>{atuacao}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-primary text-white font-bold py-3 px-6 h-auto hover:bg-secondary transition duration-300"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Cadastrar e entrar no programa"}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
        
        <div className="mt-8 text-center">
          <p>Ou entre para nosso grupo de WhatsApp para saber mais</p>
          <a 
            href="https://chat.whatsapp.com/example" 
            className="inline-flex items-center mt-3 bg-green-600 text-white font-bold py-3 px-6 rounded-md hover:bg-green-700 transition duration-300"
          >
            <FaWhatsapp className="mr-2 text-xl" /> Entrar no Grupo
          </a>
        </div>
      </div>
    </section>
  );
}
