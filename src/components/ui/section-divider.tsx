"use client";

import React from "react";

interface SectionDividerProps {
  variant?: "hero" | "subtle" | "accent";
  className?: string;
}

/**
 * Reusable Section Divider Component
 * Ensures clean, theme-adaptive, GPU-accelerated section transitions 
 * without dirty white/gray bands or abrupt color jumps.
 */
export function SectionDivider({ variant = "subtle", className = "" }: SectionDividerProps) {
  if (variant === "hero") {
    return (
      <div 
        aria-hidden="true"
        className={`absolute bottom-0 left-0 right-0 h-12 md:h-16 pointer-events-none z-10 overflow-hidden select-none bg-gradient-to-b from-transparent to-background transition-colors duration-500 ${className}`} 
      />
    );
  }

  if (variant === "accent") {
    return (
      <div 
        aria-hidden="true"
        className={`w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent pointer-events-none select-none ${className}`} 
      />
    );
  }

  return (
    <div 
      aria-hidden="true"
      className={`w-full h-px bg-border/40 pointer-events-none select-none ${className}`} 
    />
  );
}
