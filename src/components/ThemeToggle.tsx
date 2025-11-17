import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="text-portfolio-text-primary hover:bg-portfolio-accent/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-portfolio-accent transition-transform hover:rotate-180 duration-300" />
      ) : (
        <Moon className="h-5 w-5 text-portfolio-accent transition-transform hover:-rotate-12 duration-300" />
      )}
    </Button>
  );
};
