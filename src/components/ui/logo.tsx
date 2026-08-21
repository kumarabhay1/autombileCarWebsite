import * as React from "react";
import Image from "next/image";
import { assets } from "@/data/assets";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative w-44 h-16 md:w-56 md:h-20 -ml-2 -mb-2">
        {/* Scale the image up heavily to match navbar size but even bigger, anchored left to prevent clipping */}
        <div className="absolute inset-0 scale-[1.8] md:scale-[2.2] origin-left">
          <Image 
            src={assets.logo} 
            alt="Detailing Bulls Logo" 
            fill 
            className="object-contain object-left transition-all duration-500 drop-shadow-xl hover:drop-shadow-[0_0_25px_rgba(0,123,255,0.95)] hover:scale-[1.03] cursor-pointer"
            priority
          />
        </div>
      </div>
    </div>
  );
}
