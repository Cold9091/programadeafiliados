import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChartBar, Users, Briefcase, DollarSign } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
};

export default function StatsCounter() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  const stats: Stat[] = [
    {
      icon: Users,
      value: 200,
      label: "Afiliados Ativos",
      prefix: "+",
    },
    {
      icon: Briefcase,
      value: 500,
      label: "Websites Vendidos",
      prefix: "+",
    },
    {
      icon: DollarSign,
      value: 3000000,
      label: "Comissões Pagas",
      suffix: " Kz",
    },
    {
      icon: ChartBar,
      value: 98,
      label: "Taxa de Aprovação",
      suffix: "%",
    },
  ];

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [isInView, hasAnimated]);

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-primary/90"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 -right-24 w-64 h-64 rounded-full bg-purple-500/20 blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/4 w-64 h-64 rounded-full bg-indigo-500/20 blur-3xl"></div>
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
            NOSSOS NÚMEROS
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Resultados que Impressionam</h2>
          <p className="text-xl max-w-3xl mx-auto text-white/90">
            Veja o impacto do nosso programa de afiliados e junte-se a esse sucesso
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            
            return (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center text-white"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-purple-300" />
                  </div>
                </div>
                <motion.h3 
                  className="text-4xl font-bold mb-2 flex items-center justify-center" 
                  initial={{ opacity: 0 }}
                  animate={hasAnimated ? { opacity: 1 } : {}}
                >
                  {hasAnimated ? (
                    <Counter
                      from={0}
                      to={stat.value}
                      duration={2}
                      prefix={stat.prefix}
                      suffix={stat.suffix}
                    />
                  ) : (
                    <span>{stat.prefix}0{stat.suffix}</span>
                  )}
                </motion.h3>
                <p className="text-purple-200">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type CounterProps = {
  from: number;
  to: number;
  duration: number;
  prefix?: string;
  suffix?: string;
};

function Counter({ from, to, duration, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(from);
  
  useEffect(() => {
    let start = from;
    const end = to;
    const step = (to - from) / (duration * 60); // 60fps
    const increment = end > start ? Math.max(1, Math.ceil(step)) : Math.min(-1, Math.floor(step));
    
    if (start === end) return;
    
    let animationFrameId: number;
    
    // Format large numbers with commas
    function formatNumber(num: number): string {
      if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
      } else if (num >= 10000) {
        return (num / 1000).toFixed(0) + "K";
      } else {
        return num.toString();
      }
    }
    
    const updateCount = () => {
      start += increment;
      const done = increment > 0 ? start >= end : start <= end;
      
      if (done) {
        setCount(end);
        return;
      }
      
      setCount(start);
      animationFrameId = requestAnimationFrame(updateCount);
    };
    
    animationFrameId = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(animationFrameId);
  }, [from, to, duration]);
  
  return (
    <span>
      {prefix}
      {count >= 1000000 ? (
        (count / 1000000).toFixed(1) + "M"
      ) : count >= 10000 ? (
        (count / 1000).toFixed(0) + "K"
      ) : (
        count
      )}
      {suffix}
    </span>
  );
}