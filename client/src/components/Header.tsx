import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

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

  return (
    <header className={`fixed w-full bg-white z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary font-poppins font-bold text-2xl">CIRCULUS</div>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="ghost" 
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            <Menu className="h-6 w-6 text-primary" />
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#sobre" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            Sobre
          </a>
          <a href="#como-funciona" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            Como Funciona
          </a>
          <a href="#niveis" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            Níveis
          </a>
          <a href="#comissoes" className="text-gray-800 hover:text-primary font-medium transition-colors duration-300">
            Comissões
          </a>
          <a href="#cadastro" className="bg-primary text-white px-5 py-2 rounded-md hover:bg-secondary transition-colors duration-300">
            Cadastro
          </a>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <nav className={`bg-white px-4 py-2 md:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="flex flex-col space-y-3">
          <a 
            href="#sobre" 
            className="text-gray-800 hover:text-primary font-medium py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Sobre
          </a>
          <a 
            href="#como-funciona" 
            className="text-gray-800 hover:text-primary font-medium py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Como Funciona
          </a>
          <a 
            href="#niveis" 
            className="text-gray-800 hover:text-primary font-medium py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Níveis
          </a>
          <a 
            href="#comissoes" 
            className="text-gray-800 hover:text-primary font-medium py-2 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Comissões
          </a>
          <a 
            href="#cadastro" 
            className="bg-primary text-white px-5 py-2 rounded-md text-center hover:bg-secondary transition-colors duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Cadastro
          </a>
        </div>
      </nav>
    </header>
  );
}
