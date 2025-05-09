import { motion } from "framer-motion";
import { DollarSign, TrendingUp, BarChart, PieChart, Percent, Coins, Zap } from "lucide-react";

export default function CommissionsSection() {
  const commissions = [
    {
      package: "Pacote Básico",
      description: "Site simples e informativo",
      price: "90.000 Kz",
      beginner: { value: "19.800 Kz", percent: "22%" },
      pro: { value: "29.700 Kz", percent: "33%" },
      whiteLabel: { value: "39.600 Kz", percent: "44%" },
      popular: false
    },
    {
      package: "Pacote Profissional",
      description: "Site completo com recursos avançados",
      price: "140.000 Kz",
      beginner: { value: "29.500 Kz", percent: "21%" },
      pro: { value: "40.600 Kz", percent: "29%" },
      whiteLabel: { value: "50.500 Kz", percent: "36%" },
      popular: true
    },
    {
      package: "Pacote Premium",
      description: "Site exclusivo com integrações e funcionalidades premium",
      price: "190.000 Kz",
      beginner: { value: "39.900 Kz", percent: "21%" },
      pro: { value: "62.700 Kz", percent: "32%" },
      whiteLabel: { value: "70.300 Kz", percent: "37%" },
      popular: false
    }
  ];

  const examples = [
    {
      title: "5 vendas Pacote Premium (Pro)",
      value: "300.000 Kz",
      timeframe: "em até 2 semanas",
      icon: <TrendingUp />
    },
    {
      title: "10 vendas Pacote Profissional (Pro)",
      value: "400.000 Kz",
      timeframe: "em até 3 semanas",
      icon: <BarChart />
    },
    {
      title: "10 vendas Pacote Premium (White-Label)",
      value: "700.000 Kz",
      timeframe: "em até 1 mês",
      icon: <PieChart />
    }
  ];

  const features = [
    { icon: <DollarSign className="h-6 w-6" />, title: "Sem Teto de Ganhos", description: "Não há limite para o número de clientes que você pode indicar" },
    { icon: <Percent className="h-6 w-6" />, title: "Comissões Progressivas", description: "Quanto mais você vende, maiores são suas comissões percentuais" },
    { icon: <Coins className="h-6 w-6" />, title: "Pagamentos Semanais", description: "Receba suas comissões toda semana por transferência ou pix" }
  ];

  return (
    <section id="comissoes" className="py-20 relative overflow-hidden">
      {/* Background gradient with patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="absolute inset-0 opacity-10" style={{ 
          backgroundImage: "radial-gradient(#4A148C 1px, transparent 1px)",
          backgroundSize: "30px 30px"
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-block rounded-full bg-green-100 px-4 py-1 mb-4 text-green-800 font-medium text-sm">
            REMUNERAÇÃO ATRATIVA
          </div>
          <h2 className="text-4xl font-bold mb-6 text-gradient">Tabela de Comissões</h2>
          <motion.p 
            className="text-xl max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Ganhe generosas comissões por cada venda realizada e aumente sua renda substancialmente
          </motion.p>
        </motion.div>
        
        {/* Modern Card-based commission display for mobile */}
        <div className="lg:hidden space-y-6 mb-10">
          {commissions.map((commission, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 ${commission.popular ? 'ring-2 ring-purple-500' : ''}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {commission.popular && (
                <div className="bg-yellow-500 text-white text-xs font-bold py-1 px-2 text-center">
                  MAIS VENDIDO
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{commission.package}</h3>
                <p className="text-gray-500 text-sm mb-4">{commission.description}</p>
                <div className="text-2xl font-bold text-primary mb-6">{commission.price}</div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Iniciante:</span>
                    <div>
                      <span className="font-bold text-green-600">{commission.beginner.value}</span>
                      <span className="text-xs text-gray-500 ml-1">({commission.beginner.percent})</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Pro:</span>
                    <div>
                      <span className="font-bold text-green-600">{commission.pro.value}</span>
                      <span className="text-xs text-gray-500 ml-1">({commission.pro.percent})</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">White-Label:</span>
                    <div>
                      <span className="font-bold text-green-600">{commission.whiteLabel.value}</span>
                      <span className="text-xs text-gray-500 ml-1">({commission.whiteLabel.percent})</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Desktop Table View with Glass Effect */}
        <motion.div 
          className="hidden lg:block overflow-hidden rounded-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="glass-commissions dark:glass-dark relative">
            {/* Dark mode overlay to increase contrast */}
            <div className="absolute inset-0 bg-gray-900/80 hidden dark:block rounded-xl"></div>
            
            <table className="w-full relative z-10">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-600">
                  <th className="py-5 px-6 text-left font-poppins text-gray-800 dark:text-white">Pacote</th>
                  <th className="py-5 px-6 text-left font-poppins text-gray-800 dark:text-white">Preço</th>
                  <th className="py-5 px-6 text-left font-poppins text-gray-800 dark:text-white">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-2">
                        <span className="text-xs text-white">1</span>
                      </div>
                      Iniciante
                    </div>
                  </th>
                  <th className="py-5 px-6 text-left font-poppins text-gray-800 dark:text-white">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center mr-2">
                        <span className="text-xs text-white">2</span>
                      </div>
                      Pro
                    </div>
                  </th>
                  <th className="py-5 px-6 text-left font-poppins text-gray-800 dark:text-white">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center mr-2">
                        <span className="text-xs text-white">3</span>
                      </div>
                      White-Label
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {commissions.map((commission, index) => (
                  <motion.tr 
                    key={index} 
                    className={`border-b border-gray-200/50 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-white/10 ${commission.popular ? 'bg-gray-100/80 dark:bg-white/20' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <td className="py-5 px-6">
                      <div>
                        <div className="font-bold text-gray-800 dark:text-white flex items-center">
                          {commission.package}
                          {commission.popular && (
                            <span className="ml-2 inline-block bg-yellow-500 text-xs text-black font-bold px-2 py-0.5 rounded-full">
                              POPULAR
                            </span>
                          )}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-200">{commission.description}</div>
                      </div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-gray-800 dark:text-white font-bold">{commission.price}</div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-green-600 dark:text-green-400 font-bold">{commission.beginner.value}</div>
                      <div className="text-gray-500 dark:text-gray-300 text-sm">{commission.beginner.percent}</div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-green-600 dark:text-green-400 font-bold">{commission.pro.value}</div>
                      <div className="text-gray-500 dark:text-gray-300 text-sm">{commission.pro.percent}</div>
                    </td>
                    <td className="py-5 px-6">
                      <div className="text-green-600 dark:text-green-400 font-bold">{commission.whiteLabel.value}</div>
                      <div className="text-gray-500 dark:text-gray-300 text-sm">{commission.whiteLabel.percent}</div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
        
        {/* Earning example cards */}
        <div className="mb-16">
          <motion.h3 
            className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Exemplos de Ganhos
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {examples.map((example, index) => (
              <motion.div 
                key={index}
                className="bg-gradient-to-br from-gray-100 to-white dark:glass-dark rounded-2xl p-6 shadow-xl border border-gray-200 dark:border-gray-700"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-white/10 flex items-center justify-center mb-4 text-primary dark:text-green-400">
                  {example.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{example.title}</h4>
                <div className="text-green-600 dark:text-green-400 text-3xl font-bold mb-1">{example.value}</div>
                <p className="text-gray-600 dark:text-white/70 text-sm">{example.timeframe}</p>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Combined feature and image section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div>
            <div className="bg-gradient-primary text-white p-6 rounded-2xl mb-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 mr-2" />
                <h3 className="text-2xl font-bold">Potencial de Ganhos</h3>
              </div>
              <p className="text-white/80 mb-4">
                Ao se tornar um afiliado CIRCULUS, seu potencial de ganhos é praticamente ilimitado. 
                Nossos afiliados mais ativos conseguem uma renda consistente e progressiva mês após mês.
              </p>
              <div className="bg-white/10 p-4 rounded-xl">
                <div className="text-sm text-white/70 mb-1">Exemplo: Afiliado PRO com 10 vendas/mês</div>
                <div className="text-3xl font-bold neon-text">+ 500.000 Kz mensais</div>
              </div>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-gray-800 dark:text-white">{feature.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl transform -rotate-3"></div>
            <motion.div 
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600&q=80" 
                alt="Smartphone mostrando websites prontos" 
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Mobilidade Total</h3>
                <p className="text-white/80 text-sm">
                  Monitore suas vendas, acompanhe comissões e gerencie sua conta de qualquer lugar através do nosso aplicativo móvel.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
