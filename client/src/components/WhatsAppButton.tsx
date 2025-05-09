import { useState } from "react";
import { FaWhatsapp, FaUserFriends } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function WhatsAppButton() {
  const [showOptions, setShowOptions] = useState(false);
  
  const phoneNumber = "+244931475544";
  const groupLink = "https://chat.whatsapp.com/FpqmbYg9lop62rocgJNDgy";
  
  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };
  
  return (
    <>
      <motion.button
        onClick={toggleOptions}
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors duration-300"
        aria-label="Opções de WhatsApp"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20,
          delay: 1 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaWhatsapp className="text-2xl" />
      </motion.button>
      
      <AnimatePresence>
        {showOptions && (
          <>
            {/* Backdrop/overlay */}
            <motion.div 
              className="fixed inset-0 bg-black/10 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowOptions(false)}
            />
            
            {/* Chat direto */}
            <motion.a
              href={`https://wa.me/${phoneNumber}`}
              className="fixed bottom-24 right-6 bg-white text-green-600 px-4 py-2 rounded-md shadow-lg z-50 hover:bg-green-50 flex items-center gap-2 font-medium"
              aria-label="Contato direto via WhatsApp"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 20, x: 20 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-lg" /> Chat Direto
            </motion.a>
            
            {/* Entrar no grupo */}
            <motion.a
              href={groupLink}
              className="fixed bottom-36 right-6 bg-white text-green-600 px-4 py-2 rounded-md shadow-lg z-50 hover:bg-green-50 flex items-center gap-2 font-medium"
              aria-label="Entrar no grupo do WhatsApp"
              initial={{ opacity: 0, y: 20, x: 20 }}
              animate={{ opacity: 1, y: 0, x: 0 }}
              exit={{ opacity: 0, y: 20, x: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaUserFriends className="text-lg" /> Entrar no Grupo
            </motion.a>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
