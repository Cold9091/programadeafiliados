import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, Clock, Users, TrendingUp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LimitedSpotsCounter() {
  const [spotsLeft, setSpotsLeft] = useState(27);
  const [dismissed, setDismissed] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  
  // Simulate spots decreasing over time
  useEffect(() => {
    const randomizeSpots = () => {
      // Random chance to decrease spots to create urgency
      const randomChance = Math.random();
      if (randomChance > 0.7 && spotsLeft > 5) {
        setSpotsLeft(prevSpots => prevSpots - 1);
      }
    };
    
    // Check every minute if spots should decrease
    const interval = setInterval(randomizeSpots, 60000);
    
    return () => clearInterval(interval);
  }, [spotsLeft]);
  
  if (dismissed) {
    return null;
  }
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 max-w-md w-full px-4"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden border border-primary/20">
            <div className="bg-gradient-to-r from-primary to-purple-700 py-2 px-4 text-white text-center relative">
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-1 top-1 h-6 w-6 text-white/80 hover:text-white hover:bg-white/10"
                onClick={() => setDismissed(true)}
              >
                <X className="h-4 w-4" />
              </Button>
              <div className="flex items-center justify-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-300" />
                <p className="font-semibold text-sm">Programa com Vagas Limitadas</p>
              </div>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Users className="text-primary mr-2 h-5 w-5" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Vagas restantes:</span>
                </div>
                <div className="flex items-center">
                  <span className="inline-block px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 font-bold rounded-full text-sm">
                    Apenas {spotsLeft} vagas
                  </span>
                </div>
              </div>
              
              <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-gradient-to-r from-red-500 to-red-600"
                  initial={{ width: 0 }}
                  animate={{ width: `${((100 - spotsLeft) / 100) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                ></motion.div>
              </div>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 flex items-center justify-center">
                    <Clock className="w-3 h-3 mr-1" /> Tempo limitado
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 flex items-center justify-center">
                    <Users className="w-3 h-3 mr-1" /> Alto interesse
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-1 flex items-center justify-center">
                    <TrendingUp className="w-3 h-3 mr-1" /> Vagas acabando
                  </div>
                </div>
              </div>
              
              <Button className="w-full" asChild>
                <a href="#cadastro">Garantir Minha Vaga</a>
              </Button>
              
              <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
                O programa está com alta demanda e fechará para novos afiliados em breve
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}