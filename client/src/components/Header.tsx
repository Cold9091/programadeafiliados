import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, BookOpen, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link, useLocation } from "wouter";
import { useTranslation } from "react-i18next";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();
  const [location] = useLocation();
  const { t } = useTranslation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Find which section is currently in view
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { name: t("header.about"), href: "#sobre", icon: "✨" },
    { name: t("header.how"), href: "#como-funciona", icon: "🔄" },
    { name: "Níveis", href: "#niveis", icon: "⭐" },
    { name: t("header.commissions"), href: "#comissoes", icon: "💰" },
    { name: t("header.faq"), href: "#faq", icon: "❓" },
  ];

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    if (!isMobile && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [isMobile, mobileMenuOpen]);

  // Smooth scroll to sections
  const scrollToSection = (href: string) => {
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = headerRef.current?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  // Animations
  const logoVariants = {
    normal: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2, yoyo: Infinity, repeatDelay: 0.5 } }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: { 
      color: "#e9d5ff", // light purple
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };
  
  const mobileNavVariants = {
    closed: { 
      opacity: 0, 
      height: 0,
      transition: { 
        duration: 0.3,
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: { 
      opacity: 1, 
      height: 'auto',
      transition: { 
        duration: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };
  
  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <header 
      ref={headerRef}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'glass-dark py-2 shadow-lg' 
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          initial="normal"
          whileHover="hover"
          variants={logoVariants}
        >
          <Link href="/" className="block">
            <div className="font-bold text-2xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-600">
              CIRCULUS
            </div>
          </Link>
        </motion.div>
        
        {/* Navigation icons for Home and Blog */}
        <div className="hidden md:flex items-center space-x-2 ml-6">
          <Link href="/">
            <Button 
              variant="ghost" 
              size="sm"
              className={`flex items-center gap-1 text-sm ${location === '/' ? 'text-purple-300 border-b-2 border-purple-500' : 'text-white hover:text-purple-300'}`}
            >
              <Home className="w-4 h-4" />
              <span>{t('header.home')}</span>
            </Button>
          </Link>
          <Link href="/blog">
            <Button 
              variant="ghost" 
              size="sm"
              className={`flex items-center gap-1 text-sm ${location === '/blog' || location.startsWith('/blog/') ? 'text-purple-300 border-b-2 border-purple-500' : 'text-white hover:text-purple-300'}`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Blog</span>
            </Button>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button
            variant="ghost" 
            size="icon"
            onClick={toggleMobileMenu}
            aria-label="Menu"
            className="text-white ml-2 relative overflow-hidden group"
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </motion.div>
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300"></span>
          </Button>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.href}
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={menuItemVariants}
            >
              <a 
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`relative px-4 py-2 font-medium group flex items-center ${
                  activeSection === item.href.replace('#', '') 
                    ? 'text-purple-300' 
                    : 'text-white hover:text-purple-200'
                }`}
              >
                <span className="relative">
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-purple-400 transition-transform duration-300 origin-left ${
                    activeSection === item.href.replace('#', '')
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </span>
              </a>
            </motion.div>
          ))}
          <motion.div
            custom={menuItems.length}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
          >
            <a 
              href="#cadastro"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#cadastro');
              }}
              className="btn-3d ml-4 bg-white text-primary px-5 py-2 rounded-lg font-medium hover:bg-purple-50 transition-all duration-300 animated-border overflow-hidden flex items-center"
            >
              <span className="relative z-10">Cadastro</span>
              <motion.span
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="ml-1"
              >
                <ChevronDown size={16} />
              </motion.span>
            </a>
          </motion.div>
          <motion.div
            custom={menuItems.length + 1}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            className="ml-2"
          >
            <ThemeToggle />
          </motion.div>
          <motion.div
            custom={menuItems.length + 2}
            initial="hidden"
            animate="visible"
            variants={menuItemVariants}
            className="ml-2"
          >
            <LanguageSwitcher />
          </motion.div>
        </nav>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="md:hidden glass-dark backdrop-blur-lg"
            variants={mobileNavVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col p-4">
              {/* Navigation to home and blog pages */}
              <div className="flex border-b border-gray-700/50 pb-3 mb-3">
                <Link href="/" className="flex-1">
                  <motion.div
                    className={`text-white font-medium py-2 transition-colors duration-300 flex items-center justify-center space-x-2 rounded-lg ${
                      location === '/' ? 'bg-primary-dark/40' : 'hover:bg-primary-dark/20'
                    }`}
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Home className="w-5 h-5" />
                    <span>Início</span>
                  </motion.div>
                </Link>
                <Link href="/blog" className="flex-1">
                  <motion.div
                    className={`text-white font-medium py-2 transition-colors duration-300 flex items-center justify-center space-x-2 rounded-lg ${
                      location === '/blog' || location.startsWith('/blog/') ? 'bg-primary-dark/40' : 'hover:bg-primary-dark/20'
                    }`}
                    variants={mobileItemVariants}
                    whileHover={{ scale: 1.05 }}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span>Blog</span>
                  </motion.div>
                </Link>
              </div>
              
              {/* Página inicial sections */}
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className={`text-white font-medium py-3 border-b border-gray-700/50 transition-colors duration-300 flex items-center space-x-3 ${
                    activeSection === item.href.replace('#', '') ? 'text-purple-300' : 'hover:text-purple-200'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  variants={mobileItemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs">
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
              <motion.div
                className="mt-4"
                variants={mobileItemVariants}
              >
                <a
                  href="#cadastro"
                  className="btn-3d bg-white text-primary px-5 py-3 rounded-lg text-center font-medium block transition-all duration-300 flex items-center justify-center space-x-2"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('#cadastro');
                  }}
                >
                  <span>Cadastro</span>
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <ChevronDown size={16} />
                  </motion.span>
                </a>
              </motion.div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
