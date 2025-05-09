import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="pt-24 pb-20 bg-gradient-to-r from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="md:w-1/2 mb-8 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-poppins">
              Ganhe dinheiro vendendo websites prontos com a CIRCULUS
            </h1>
            <p className="text-xl mb-8">
              Comissões de até 70.000 Kz por venda. Comece hoje mesmo.
            </p>
            <Button 
              asChild
              className="bg-white text-primary font-bold px-8 py-6 h-auto text-lg hover:bg-gray-100 hover:text-secondary transition duration-300"
            >
              <a href="#cadastro">Quero me cadastrar</a>
            </Button>
          </motion.div>
          <motion.div 
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=500" 
              alt="Profissional trabalhando com websites" 
              className="rounded-lg shadow-xl max-w-full h-auto" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
