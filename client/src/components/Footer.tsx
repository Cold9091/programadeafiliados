import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaUserFriends } from "react-icons/fa";

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
  
  const socialIcons = [
    { icon: FaFacebookF, label: "Facebook", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaLinkedinIn, label: "LinkedIn", href: "#" }
  ];
  
  const contactInfo = [
    { 
      icon: FaEnvelope, 
      text: "circulus.ao@gmail.com", 
      href: "mailto:circulus.ao@gmail.com",
      hoverText: "Enviar email"
    },
    { 
      icon: FaWhatsapp, 
      text: "+244 931475544", 
      href: "https://wa.me/+244931475544",
      hoverText: "Chat direto"
    },
    { 
      icon: FaUserFriends, 
      text: "Grupo de Afiliados", 
      href: "https://chat.whatsapp.com/FpqmbYg9lop62rocgJNDgy",
      hoverText: "Entrar no grupo"
    },
    { 
      icon: FaMapMarkerAlt, 
      text: "Luanda, Angola", 
      href: "#",
      hoverText: ""
    }
  ];
  
  const links = [
    { text: "Sobre o Programa", href: "#sobre" },
    { text: "Como Funciona", href: "#como-funciona" },
    { text: "Níveis de Afiliados", href: "#niveis" },
    { text: "Tabela de Comissões", href: "#comissoes" },
    { text: "Cadastre-se", href: "#cadastro" }
  ];
  
  return (
    <footer className="bg-gray-800 text-white py-12 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute w-full h-full top-0 left-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 inline-block relative">
              CIRCULUS
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </h3>
            <p className="mb-4">Programa de Afiliados para venda de websites prontos em Angola.</p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a 
                    key={index}
                    href={social.href}
                    className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-primary hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <motion.li 
                    key={index} 
                    className="group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    onHoverStart={() => setHoveredIcon(index)}
                    onHoverEnd={() => setHoveredIcon(null)}
                  >
                    {contact.href !== "#" ? (
                      <a 
                        href={contact.href} 
                        className="flex items-start hover:text-primary transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="inline-block p-1.5 bg-gray-700 rounded-md text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mr-2">
                          <Icon size={16} />
                        </span>
                        <span>
                          {contact.text}
                          {hoveredIcon === index && contact.hoverText && (
                            <motion.span 
                              className="ml-2 text-xs text-primary"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                            >
                              ({contact.hoverText})
                            </motion.span>
                          )}
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-start">
                        <span className="inline-block p-1.5 bg-gray-700 rounded-md text-primary mr-2">
                          <Icon size={16} />
                        </span>
                        <span>{contact.text}</span>
                      </div>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                >
                  <a 
                    href={link.href} 
                    className="group flex items-center hover:text-primary transition-colors duration-300"
                  >
                    <span className="w-1.5 h-1.5 mr-2 rounded-full bg-gray-400 group-hover:bg-primary transition-colors"></span>
                    {link.text}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          className="border-t border-gray-700 mt-8 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} CIRCULUS. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
