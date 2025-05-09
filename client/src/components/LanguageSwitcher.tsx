import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

// Available languages and their display names
const languages = {
  pt: "Português",
  en: "English"
};

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const [mounted, setMounted] = useState(false);

  // Handle client-side mounting to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  // Get current language
  const currentLanguage = i18n.language || "pt";

  // Handle language change
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-0 bg-transparent hover:bg-white/10">
          <Globe className="h-[1.5rem] w-[1.5rem] text-gray-400" />
          <span className="sr-only">{t('header.language')}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(languages).map(([code, name]) => (
          <DropdownMenuItem 
            key={code}
            className={`flex items-center gap-2 cursor-pointer ${
              currentLanguage === code ? "font-bold" : ""
            }`}
            onClick={() => changeLanguage(code)}
          >
            <span>{name}</span>
            {currentLanguage === code && (
              <span className="ml-2 h-2 w-2 rounded-full bg-primary"></span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}