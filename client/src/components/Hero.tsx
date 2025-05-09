import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Code, Globe, MessageSquare, Zap } from "lucide-react";

export default function Hero() {
  const floatingIcons = [
    { icon: <Code className="w-6 h-6" />, delay: 0, x: "-5vw", y: "10vh" },
    { icon: <Globe className="w-8 h-8" />, delay: 0.5, x: "15vw", y: "20vh" },
    { icon: <MessageSquare className="w-5 h-5" />, delay: 1, x: "-15vw", y: "15vh" },
    { icon: <Zap className="w-7 h-7" />, delay: 1.5, x: "8vw", y: "8vh" },
  ];

  return (
    <section className="pt-32 pb-24 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 gradient-purple-blue z-0">
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.15" fill-rule="evenodd"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>
      
      {/* Floating icons with random animations */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-white/20 z-10"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            x: [item.x, `calc(${item.x} + 50px)`, item.x],
            y: [item.y, `calc(${item.y} - 30px)`, item.y],
          }}
          transition={{ 
            delay: item.delay,
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0 z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-dark p-4 inline-block rounded-full mb-4 text-white">
              <span className="text-sm font-medium flex items-center">
                <span className="inline-block w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
                Programa de Afiliados CIRCULUS
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins text-white leading-tight">
              <span className="text-gradient">Ganhe dinheiro</span> vendendo websites prontos
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-lg">
              Comissões de até <span className="font-bold text-white neon-text">70.000 Kz</span> por venda. Sem conhecimento técnico necessário.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild
                className="btn-3d bg-white text-primary font-bold px-8 py-6 h-auto text-lg hover:bg-purple-50 rounded-xl overflow-hidden relative group shine"
              >
                <a href="#cadastro" className="flex items-center">
                  Quero me cadastrar 
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline"
                className="border-white text-white font-bold px-8 py-6 h-auto text-lg hover:bg-white/10 rounded-xl"
              >
                <a href="#como-funciona">Ver como funciona</a>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {['JM', 'TK', 'SL'][i]}
                  </div>
                ))}
              </div>
              <div className="ml-4">
                <div className="text-white">+140 afiliados</div>
                <div className="text-white/70 text-sm">já estão ganhando</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2 flex justify-center relative z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Main image with animated border */}
              <div className="animated-border p-1 rounded-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
                  alt="Profissional trabalhando com websites" 
                  className="rounded-xl max-w-full h-auto"
                />
              </div>
              
              {/* Floating statistics card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 glass-dark p-4 rounded-xl text-white shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center mr-3">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-white/70">Ganhos em 30 dias</div>
                    <div className="text-xl font-bold">340.000 Kz</div>
                  </div>
                </div>
              </motion.div>
              
              {/* Floating websites card */}
              <motion.div 
                className="absolute -top-5 -right-5 glass-dark p-4 rounded-xl text-white shadow-lg"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <div className="text-sm text-white/70">Sites vendidos</div>
                <div className="text-2xl font-bold">42</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-[70px] w-full">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="fill-white"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="fill-white"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="fill-white"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
