import { motion } from "framer-motion";

export default function CommissionsSection() {
  const commissions = [
    {
      package: "Pacote Básico",
      price: "90.000 Kz",
      beginner: "20.000 Kz",
      pro: "30.000 Kz",
      whiteLabel: "40.000 Kz"
    },
    {
      package: "Pacote Profissional",
      price: "140.000 Kz",
      beginner: "30.000 Kz",
      pro: "40.000 Kz",
      whiteLabel: "50.000 Kz"
    },
    {
      package: "Pacote Premium",
      price: "190.000 Kz",
      beginner: "40.000 Kz",
      pro: "60.000 Kz",
      whiteLabel: "70.000 Kz"
    }
  ];

  return (
    <section id="comissoes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-primary mb-4">Tabela de Comissões</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Ganhe generosas comissões por cada venda realizada
          </p>
        </motion.div>
        
        <motion.div 
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th className="py-4 px-6 font-poppins">Pacote</th>
                <th className="py-4 px-6 font-poppins">Preço</th>
                <th className="py-4 px-6 font-poppins">Iniciante</th>
                <th className="py-4 px-6 font-poppins">Pro</th>
                <th className="py-4 px-6 font-poppins">White-Label</th>
              </tr>
            </thead>
            <tbody>
              {commissions.map((commission, index) => (
                <tr key={index} className={index < commissions.length - 1 ? "border-b hover:bg-accent" : "hover:bg-accent"}>
                  <td className="py-4 px-6 font-medium">{commission.package}</td>
                  <td className="py-4 px-6">{commission.price}</td>
                  <td className="py-4 px-6 text-green-600 font-semibold">{commission.beginner}</td>
                  <td className="py-4 px-6 text-green-600 font-semibold">{commission.pro}</td>
                  <td className="py-4 px-6 text-green-600 font-semibold">{commission.whiteLabel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex flex-col md:flex-row items-center bg-accent p-8 rounded-lg shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
            <h3 className="text-2xl font-bold text-primary mb-4">Ganhos Reais e Consistentes</h3>
            <p className="mb-6">
              Com apenas 5 vendas do Pacote Premium como Afiliado Pro, você pode ganhar 300.000 Kz em comissões. 
              Nossos afiliados mais dedicados conseguem fazer isso em apenas duas semanas!
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow-md text-center">
                <p className="text-gray-600 mb-1">5 vendas Premium (Pro)</p>
                <p className="text-2xl font-bold text-primary">300.000 Kz</p>
              </div>
              <div className="bg-white p-4 rounded shadow-md text-center">
                <p className="text-gray-600 mb-1">10 vendas Premium (White-Label)</p>
                <p className="text-2xl font-bold text-primary">700.000 Kz</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
              alt="Smartphone mostrando websites prontos" 
              className="rounded-lg shadow-lg w-full" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
