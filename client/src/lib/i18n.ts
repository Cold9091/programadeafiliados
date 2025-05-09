import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Languages
const translationPT = {
  "general": {
    "ctaButton": "Quero Me Tornar Afiliado",
    "seeMore": "Ver Mais",
    "contactUs": "Entre em Contato"
  },
  "header": {
    "home": "Início",
    "about": "Sobre",
    "commissions": "Comissões",
    "how": "Como Funciona",
    "faq": "FAQ",
    "register": "Cadastre-se",
    "language": "Idioma"
  }
};

const translationEN = {
  "general": {
    "ctaButton": "I Want to Become an Affiliate",
    "seeMore": "See More",
    "contactUs": "Contact Us"
  },
  "header": {
    "home": "Home",
    "about": "About",
    "commissions": "Commissions",
    "how": "How It Works",
    "faq": "FAQ",
    "register": "Register",
    "language": "Language"
  }
};

// the translations
const resources = {
  pt: {
    translation: translationPT
  },
  en: {
    translation: translationEN
  }
};

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next
  .use(initReactI18next)
  // init i18next
  .init({
    resources,
    fallbackLng: 'pt', // default language (Portuguese)
    debug: false, // set to true during development to see i18next logs
    
    interpolation: {
      escapeValue: false, // not needed for React as it escapes by default
    },
    
    // language detection options
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    }
  });

export default i18n;