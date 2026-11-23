import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const getInitial = () => {
  const saved = localStorage.getItem("theme");
  if (saved) return saved === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  return (
    <button
      onClick={() => setIsDarkMode((d) => !d)}
      aria-label="Toggle theme"
      className="fixed top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300 hover:bg-primary/10 max-sm:hidden"
    >
      {isDarkMode ? (
        <Sun className="h-6 w-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 w-6 text-blue-900" />
      )}
    </button>
  );
};
