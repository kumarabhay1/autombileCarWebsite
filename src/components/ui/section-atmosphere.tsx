"use client";

import React from "react";

interface SectionAtmosphereProps {
  className?: string;
}

/**
 * Reusable Section Atmosphere Component
 * Adds an extremely subtle, premium atmospheric light overlay at the TOP of major sections 
 * to bridge section transitions smoothly underneath/around the navbar area.
 */
export function SectionAtmosphere({ className = "" }: SectionAtmosphereProps) {
  return (
    <div 
      aria-hidden="true"
      className={`section-atmosphere ${className}`} 
    />
  );
}
