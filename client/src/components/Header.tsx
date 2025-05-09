import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Como Funciona", href: "#como-funciona" },
    { name: "Níveis", href: "#niveis" },
    { name: "Comissões", href: "#comissoes" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'glass-dark py-2' 
        : 'bg-transparent py-4'
      }`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="font-poppins font-bold text-2xl text-gradient">CIRCULUS</div>
        </motion.div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <Button
            variant="ghost" 
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className="text-white ml-2"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-white" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <a 
                href={item.href} 
                className="relative px-4 py-2 text-white hover:text-purple-200 font-medium group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <a 
              href="#cadastro" 
              className="btn-3d ml-4 bg-white text-primary px-5 py-2 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300 animated-border overflow-hidden"
            >
              <span className="relative z-10">Cadastro</span>
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="ml-2"
          >
            <ThemeToggle />
          </motion.div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="md:hidden glass-dark backdrop-blur-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-3 p-4">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="text-white hover:text-purple-200 font-medium py-2 border-b border-gray-700 transition-colors duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#cadastro"
                className="btn-3d bg-white text-primary px-5 py-2 rounded-lg text-center font-medium mt-2 transition-all duration-300"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                Cadastro
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
