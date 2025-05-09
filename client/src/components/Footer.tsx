import { FaFacebookF, FaInstagram, FaLinkedinIn, FaEnvelope, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CIRCULUS</h3>
            <p className="mb-4">Programa de Afiliados para venda de websites prontos em Angola.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary transition-colors duration-300" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-300" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-300" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaEnvelope className="text-primary mr-2 mt-1" />
                <span>circulusafiliados@gmail.com</span>
              </li>
              <li className="flex items-start">
                <FaWhatsapp className="text-primary mr-2 mt-1" />
                <span>+244 xxx xxx xxx</span>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-primary mr-2 mt-1" />
                <span>Luanda, Angola</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li><a href="#sobre" className="hover:text-primary transition-colors duration-300">Sobre o Programa</a></li>
              <li><a href="#como-funciona" className="hover:text-primary transition-colors duration-300">Como Funciona</a></li>
              <li><a href="#niveis" className="hover:text-primary transition-colors duration-300">Níveis de Afiliados</a></li>
              <li><a href="#comissoes" className="hover:text-primary transition-colors duration-300">Tabela de Comissões</a></li>
              <li><a href="#cadastro" className="hover:text-primary transition-colors duration-300">Cadastre-se</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} CIRCULUS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
