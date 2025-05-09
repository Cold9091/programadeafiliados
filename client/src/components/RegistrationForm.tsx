import { useState } from "react";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { FaWhatsapp, FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { UserPlus, Mail, MapPin, Briefcase, MessageSquare, CheckCircle2, Lock, ShieldCheck } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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
  const [formStep, setFormStep] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

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
    mode: "onChange"
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
      setIsSuccess(true);
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
    
    // Preparar o texto da mensagem
    const mensaje = `*Novo Registro de Afiliado*\n\n*Nome:* ${values.nome}\n*Email:* ${values.email}\n*WhatsApp:* ${values.whatsapp}\n*Província:* ${values.provincia}\n*Área de Atuação:* ${values.atuacao}`;
    
    // Número do WhatsApp para enviar a mensagem
    const whatsappNumber = "+244931475544"; // Número correto para envio das mensagens
    
    // Criar a URL para o WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(mensaje)}`;
    
    // Abrir a mensagem do WhatsApp em uma nova janela/aba
    window.open(whatsappURL, '_blank');
  }

  // Go to next step if form is valid for current step fields
  const goToNext = async () => {
    const fields = formStep === 0 
      ? ["nome", "email"] 
      : ["whatsapp", "provincia", "atuacao"];
    
    const isValid = await form.trigger(fields as any);
    if (isValid) setFormStep(1);
  };

  const goToPrevious = () => {
    setFormStep(0);
  };

  const provincias = [
    "Luanda",
    "Benguela",
    "Huambo",
    "Cabinda",
    "Huíla",
    "Malanje",
    "Uíge",
    "Kwanza Sul",
    "Bié",
    "Kwanza Norte",
    "Cunene",
    "Cuando Cubango",
    "Lunda Norte",
    "Lunda Sul",
    "Moxico",
    "Namibe",
    "Zaire",
    "Bengo",
    "Outra"
  ];

  const atuacoes = [
    "Freelancer",
    "Agência Digital",
    "Empresa",
    "Estudante",
    "Marketing Digital",
    "Vendedor Autônomo",
    "Outro"
  ];

  const benefits = [
    "Acesso a todos os materiais de marketing",
    "Suporte exclusivo por WhatsApp",
    "Treinamento completo em vendas",
    "Pagamentos semanais das comissões",
    "Dashboard para acompanhamento de vendas"
  ];

  return (
    <section id="cadastro" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-purple-800 to-primary"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[50px] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-white/10 px-4 py-1 mb-4 text-white font-medium text-sm backdrop-blur-sm">
            COMECE AGORA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Cadastre-se no Programa de Afiliados</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Preencha o formulário abaixo e comece a sua jornada como afiliado CIRCULUS
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Form section */}
          <motion.div 
            className="md:col-span-3 glass-dark rounded-3xl overflow-hidden p-1 shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 h-full">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6 text-green-600">
                    <FaCheckCircle className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Cadastro Realizado com Sucesso!</h3>
                  <p className="text-gray-600 mb-4 max-w-md">
                    Parabéns! Seu cadastro foi recebido. Nossa equipe entrará em contato em breve para dar as boas-vindas e fornecer os próximos passos.
                  </p>
                  <p className="text-gray-600 mb-8 max-w-md flex items-center justify-center">
                    <Mail className="mr-2 h-4 w-4 text-primary" /> 
                    <a href="mailto:circulus.ao@gmail.com" className="text-primary hover:underline">
                      circulus.ao@gmail.com
                    </a>
                  </p>
                  <div className="flex space-x-4">
                    <Button 
                      onClick={() => setIsSuccess(false)}
                      className="bg-primary text-white"
                    >
                      Novo Cadastro
                    </Button>
                    <Button 
                      variant="outline"
                      asChild
                    >
                      <a href="https://chat.whatsapp.com/FpqmbYg9lop62rocgJNDgy" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className="mr-2" /> Entrar no Grupo
                      </a>
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  {/* Form Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">Formulário de Cadastro</h3>
                      <div className="flex items-center text-sm font-medium text-gray-500">
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full mr-2 ${formStep >= 0 ? 'bg-primary text-white' : 'bg-gray-200'}`}>1</span>
                        <span className={`flex items-center justify-center w-8 h-8 rounded-full ${formStep >= 1 ? 'bg-primary text-white' : 'bg-gray-200'}`}>2</span>
                      </div>
                    </div>
                    <div className="bg-gray-200 h-1 w-full rounded-full overflow-hidden">
                      <div 
                        className="bg-primary h-full transition-all duration-300"
                        style={{ width: formStep === 0 ? '50%' : '100%' }}
                      ></div>
                    </div>
                  </div>
                  
                  {/* Form Content */}
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      {formStep === 0 ? (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Informações Básicas</h4>
                          
                          <FormField
                            control={form.control}
                            name="nome"
                            render={({ field }) => (
                              <FormItem className="mb-6">
                                <FormLabel className="flex items-center text-gray-700">
                                  <UserPlus className="w-4 h-4 mr-2 text-primary" />
                                  Nome Completo <span className="text-red-500 ml-1">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="Seu nome completo" 
                                    {...field} 
                                    className="px-4 py-3 h-auto rounded-xl border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" 
                                  />
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
                                <FormLabel className="flex items-center text-gray-700">
                                  <Mail className="w-4 h-4 mr-2 text-primary" />
                                  Email <span className="text-red-500 ml-1">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="seu.email@exemplo.com" 
                                    {...field} 
                                    className="px-4 py-3 h-auto rounded-xl border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" 
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="mt-8 flex justify-end">
                            <Button
                              type="button"
                              onClick={goToNext}
                              className="btn-3d bg-primary text-white px-6 py-3 h-auto rounded-xl flex items-center group"
                            >
                              Próximo Passo 
                              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <h4 className="text-lg font-semibold text-gray-800 mb-4">Detalhes Profissionais</h4>
                          
                          <FormField
                            control={form.control}
                            name="whatsapp"
                            render={({ field }) => (
                              <FormItem className="mb-6">
                                <FormLabel className="flex items-center text-gray-700">
                                  <MessageSquare className="w-4 h-4 mr-2 text-primary" />
                                  Número de WhatsApp <span className="text-red-500 ml-1">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+244 xxx xxx xxx" 
                                    {...field} 
                                    className="px-4 py-3 h-auto rounded-xl border-gray-300 focus:border-primary focus:ring focus:ring-primary/20" 
                                  />
                                </FormControl>
                                <FormDescription className="text-xs text-gray-500">
                                  Usaremos este número para enviar materiais e informações
                                </FormDescription>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <FormField
                              control={form.control}
                              name="provincia"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="flex items-center text-gray-700">
                                    <MapPin className="w-4 h-4 mr-2 text-primary" />
                                    Província <span className="text-red-500 ml-1">*</span>
                                  </FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="px-4 py-3 h-auto rounded-xl border-gray-300 focus:border-primary focus:ring focus:ring-primary/20">
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
                                  <FormLabel className="flex items-center text-gray-700">
                                    <Briefcase className="w-4 h-4 mr-2 text-primary" />
                                    Tipo de Atuação <span className="text-red-500 ml-1">*</span>
                                  </FormLabel>
                                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                      <SelectTrigger className="px-4 py-3 h-auto rounded-xl border-gray-300 focus:border-primary focus:ring focus:ring-primary/20">
                                        <SelectValue placeholder="Como você atua" />
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
                          </div>
                          
                          <div className="mt-8 flex justify-between">
                            <Button
                              type="button"
                              variant="outline"
                              onClick={goToPrevious}
                              className="px-6 py-3 h-auto rounded-xl"
                            >
                              Voltar
                            </Button>
                            
                            <Button
                              type="submit"
                              className="btn-3d bg-primary text-white font-bold px-6 py-3 h-auto rounded-xl"
                              disabled={isSubmitting}
                            >
                              {isSubmitting ? "Enviando..." : "Finalizar Cadastro"}
                            </Button>
                          </div>
                        </motion.div>
                      )}
                    </form>
                  </Form>
                </>
              )}
            </div>
          </motion.div>
          
          {/* Benefits and Information Section */}
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-6">Benefícios do Programa</h3>
              
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  >
                    <CheckCircle2 className="h-6 w-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <p>{benefit}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="bg-white/10 rounded-xl p-6 mb-8">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-400/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <Lock className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Sem Compromisso</h4>
                    <p className="text-white/80 text-sm">
                      Você pode cancelar sua participação no programa a qualquer momento sem custos.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center mr-3 flex-shrink-0">
                    <ShieldCheck className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Seus Dados Estão Seguros</h4>
                    <p className="text-white/80 text-sm">
                      Suas informações são protegidas e usadas apenas para contato relacionado ao programa.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-xl p-6 bg-gradient-to-r from-white/5 to-white/10">
                <h4 className="font-bold text-lg mb-2 flex items-center">
                  <FaWhatsapp className="mr-2" /> Grupo de WhatsApp
                </h4>
                <p className="mb-4 text-white/80">
                  Entre para o nosso grupo e conheça outros afiliados, tire dúvidas e receba atualizações.
                </p>
                <a 
                  href="https://chat.whatsapp.com/FpqmbYg9lop62rocgJNDgy" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 text-white font-medium py-2 px-4 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  <FaWhatsapp className="mr-2" /> Entrar no Grupo
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[50px] w-full">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
}
