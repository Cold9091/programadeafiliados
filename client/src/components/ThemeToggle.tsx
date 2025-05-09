import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Montagem do componente apenas no lado do cliente para evitar erros de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon" className="border-0 bg-transparent hover:bg-white/10">
          {theme === "light" ? (
            <Sun className="h-[1.5rem] w-[1.5rem] text-yellow-500" />
          ) : theme === "dark" ? (
            <Moon className="h-[1.5rem] w-[1.5rem] text-blue-400" />
          ) : (
            <Monitor className="h-[1.5rem] w-[1.5rem] text-gray-400" />
          )}
          <span className="sr-only">Alternar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <Sun className="h-4 w-4 text-yellow-500" />
          <span>Claro</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <Moon className="h-4 w-4 text-blue-400" />
          <span>Escuro</span>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setTheme("system")}
        >
          <Monitor className="h-4 w-4" />
          <span>Sistema</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}