import * as React from "react";
import Image from "next/image";
import { assets } from "@/data/assets";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center group ${className}`}>
      <div className="relative w-48 h-20 md:w-64 md:h-28 transition-transform duration-500 group-hover:scale-[1.02] -ml-4 md:-ml-6 -mb-2 md:-mb-4">
        {/* Scale the image up heavily to match navbar size but even bigger, anchored left to prevent clipping */}
        <div className="absolute inset-0 scale-[1.8] md:scale-[2.4] origin-left">
          <Image 
            src={assets.logo} 
            alt="Detailing Bulls Logo" 
            fill 
            className="object-contain object-left drop-shadow-xl"
            priority
          />
        </div>
      </div>
    </div>
  );
}
