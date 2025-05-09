import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Calculator, 
  PieChart, 
  ArrowRight, 
  TrendingUp, 
  Sliders, 
  ExternalLink 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type AffiliateLevel = {
  name: string;
  color: string;
  commissionRate: number;
};

export default function CommissionCalculator() {
  const [websiteType, setWebsiteType] = useState("professional"); // Começa com o pacote profissional (o mais popular)
  const [numSales, setNumSales] = useState(5);
  const [level, setLevel] = useState("pro"); // Começa com o nível Pro
  const [result, setResult] = useState({ monthly: 0, annual: 0 });
  const [isVisible, setIsVisible] = useState(false);

  // Website Types and their base prices - alinhados com a tabela de comissões
  const websiteTypes = {
    basic: { name: "Pacote Básico", price: 90000 },
    professional: { name: "Pacote Profissional", price: 140000 },
    premium: { name: "Pacote Premium", price: 190000 },
  };

  // Affiliate Levels and their commission rates - alinhados com a tabela de comissões
  const affiliateLevels: Record<string, AffiliateLevel> = {
    iniciante: { name: "Iniciante", color: "#3B82F6", commissionRate: 0.22 }, // Média de 22% para Básico
    pro: { name: "Pro", color: "#8B5CF6", commissionRate: 0.31 }, // Média de 31% para Pro
    whiteLabel: { name: "White-Label", color: "#14B8A6", commissionRate: 0.39 }, // Média de 39% para White-Label
  };

  // Calculate commission based on user inputs
  useEffect(() => {
    // Get current website price and commission rate
    const websitePrice = websiteTypes[websiteType as keyof typeof websiteTypes].price;
    const commissionRate = affiliateLevels[level].commissionRate;
    
    // Calculate monthly and annual earnings
    const monthlyEarnings = websitePrice * commissionRate * numSales;
    const annualEarnings = monthlyEarnings * 12;
    
    setResult({
      monthly: Math.round(monthlyEarnings),
      annual: Math.round(annualEarnings)
    });
  }, [websiteType, numSales, level]);

  // Check if section is visible (for animations)
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('calculator');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        const isVisible = sectionTop < window.innerHeight - 100;
        setIsVisible(isVisible);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initially
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Format currency (Kwanzas)
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-AO', { 
      style: 'currency', 
      currency: 'AOA',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="calculator" className="py-24 relative bg-gray-100 dark:bg-gray-800 overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-16 -right-16 w-64 h-64 bg-primary/10 rounded-full"
          style={{
            transform: isVisible ? 'translateY(20px)' : 'translateY(0)',
            transition: 'transform 1s ease-out',
          }}
        ></div>
        <div 
          className="absolute bottom-32 -left-20 w-80 h-80 bg-blue-400/10 rounded-full"
          style={{
            transform: isVisible ? 'translateY(-20px)' : 'translateY(0)',
            transition: 'transform 1.5s ease-out',
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-primary/10 dark:bg-primary/20 px-4 py-1 mb-4 text-primary font-medium text-sm backdrop-blur-sm">
            CALCULE AGORA
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Quanto Posso Ganhar?</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
            Use nossa calculadora para simular seus ganhos como afiliado CIRCULUS
          </p>
        </motion.div>
        
        <motion.div 
          className="max-w-6xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid md:grid-cols-7 min-h-[500px]">
            {/* Left side - Calculator inputs */}
            <motion.div 
              className="md:col-span-4 p-8 md:p-10"
              variants={itemVariants}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <Calculator className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Calculadora de Comissões</h3>
              </div>
              
              <div className="space-y-8">
                {/* Website Type */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tipo de Website
                  </label>
                  <Select
                    value={websiteType}
                    onValueChange={setWebsiteType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Selecione o tipo de website" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.entries(websiteTypes).map(([key, value]) => (
                        <SelectItem key={key} value={key}>
                          {value.name} - {formatCurrency(value.price)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Number of Sales */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                      Vendas por Mês
                    </label>
                    <span className="text-primary font-semibold">{numSales} {numSales === 1 ? 'venda' : 'vendas'}</span>
                  </div>
                  <Slider
                    value={[numSales]}
                    min={1}
                    max={20}
                    step={1}
                    onValueChange={(value) => setNumSales(value[0])}
                    className="my-4"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>1 venda</span>
                    <span>10 vendas</span>
                    <span>20 vendas</span>
                  </div>
                </div>
                
                {/* Affiliate Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Seu Nível de Afiliado
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.entries(affiliateLevels).map(([key, value]) => (
                      <button
                        key={key}
                        type="button"
                        className={`p-2 rounded-lg flex flex-col items-center justify-center border-2 transition-all ${
                          level === key 
                            ? 'border-primary bg-primary/5' 
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                        onClick={() => setLevel(key)}
                      >
                        <span 
                          className="w-6 h-6 rounded-full mb-1"
                          style={{ backgroundColor: value.color }}
                        ></span>
                        <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{value.name}</span>
                        <span className="text-xs text-gray-500">{value.commissionRate * 100}%</span>
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 hidden md:block">
                  <Button asChild className="w-full">
                    <a href="#cadastro" className="flex items-center justify-center gap-2">
                      Quero Me Tornar Afiliado <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
            
            {/* Right side - Results */}
            <motion.div 
              className="md:col-span-3 bg-primary p-8 md:p-10 text-white flex flex-col"
              variants={itemVariants}
            >
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
                  <PieChart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Seus Resultados</h3>
              </div>
              
              <div className="mt-auto">
                <div className="mb-8">
                  <h4 className="text-lg text-white/80 mb-1">Ganhos Mensais Estimados:</h4>
                  <div className="text-5xl font-bold">{formatCurrency(result.monthly)}</div>
                </div>
                
                <div className="mb-10">
                  <h4 className="text-lg text-white/80 mb-1">Ganhos Anuais Estimados:</h4>
                  <div className="text-4xl font-bold">{formatCurrency(result.annual)}</div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-300" />
                    <span>Aumente seu nível e ganhe comissões maiores</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-green-300" />
                    <span>Comissões para {affiliateLevels[level].name} são de {affiliateLevels[level].commissionRate * 100}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-5 h-5 text-green-300" />
                    <span>Receba pagamentos semanalmente</span>
                  </div>
                </div>
                
                <div className="pt-8 md:hidden">
                  <Button variant="secondary" asChild className="w-full">
                    <a href="#cadastro" className="flex items-center justify-center gap-2">
                      Quero Me Tornar Afiliado <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}