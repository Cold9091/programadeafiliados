import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import LevelsSection from "@/components/LevelsSection";
import CommissionsSection from "@/components/CommissionsSection";
import BenefitsSection from "@/components/BenefitsSection";
import FAQSection from "@/components/FAQSection";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import StatsCounter from "@/components/StatsCounter";
import TestimonialsSection from "@/components/TestimonialsSection";
import TimelineSection from "@/components/TimelineSection";
import CommissionCalculator from "@/components/CommissionCalculator";
import BlogSection from "@/components/BlogSection";
import LimitedSpotsCounter from "@/components/LimitedSpotsCounter";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down enough
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <StatsCounter />
        <HowItWorks />
        <TimelineSection />
        <LevelsSection />
        <TestimonialsSection />
        <CommissionsSection />
        <CommissionCalculator />
        <BenefitsSection />
        <BlogSection />
        <FAQSection />
        <RegistrationForm />
      </main>
      <Footer />
      <WhatsAppButton />
      <LimitedSpotsCounter />
      
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-24 bg-primary text-white p-3 rounded-full shadow-lg z-40 hover:bg-primary-dark transition-colors duration-300"
            aria-label="Voltar ao topo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
