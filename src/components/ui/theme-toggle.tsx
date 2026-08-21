"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    const isDark = theme === "dark";
    const newTheme = isDark ? "light" : "dark";

    if (!document.startViewTransition) {
      setTheme(newTheme);
      return;
    }

    document.startViewTransition(() => {
      setTheme(newTheme);
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full w-10 h-10 bg-white/10 dark:bg-white/10 hover:bg-white/20 dark:hover:bg-white/20 border border-white/20 transition-all duration-300 backdrop-blur-md shadow-sm hover:scale-105 active:scale-95"
      onClick={toggleTheme}
      title="Toggle Dark/Light Mode"
      aria-label="Toggle dark/light mode"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-blue-300 drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
