import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/+244123456789"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg z-50 hover:bg-green-600 transition-colors duration-300"
      aria-label="Contato via WhatsApp"
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
    </motion.a>
  );
}
