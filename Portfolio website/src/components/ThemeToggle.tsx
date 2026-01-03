import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@/lib/utils.ts";
import type { darkModeType } from "@/types/darkMode";
export const ThemeToggle = ({ darkMode }: { darkMode: darkModeType }) => {
  useEffect(() => {
    // Apply the initial theme to the document
    if (darkMode.isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode.isDarkMode]);

  const toggleTheme = () => {
    if (darkMode.isDarkMode) {
      darkMode.setDarkMode(false);
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else {
      /* changes <html > to <html class="dark"> */
      document.documentElement.classList.add("dark");
      /*stores the theme color so that when we refresh it 
      is not lost "theme" is item name and dark is color*/
      localStorage.setItem("theme", "dark");
      darkMode.setDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-40 right-5 z-50",
        "flex items-center gap-2 px-3 py-2 rounded-full",
        "bg-background/80 backdrop-blur-sm border border-border",
        "hover:bg-background/90 hover:scale-105",
        "transition-all duration-300 ease-in-out",
        "shadow-lg hover:shadow-xl",
        "focus:outline-none focus:ring-2 focus:ring-primary/50"
      )}
    >
      {darkMode.isDarkMode ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-blue-600" />
      )}
      <span className="text-sm font-medium text-foreground">
        {darkMode.isDarkMode ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
};
