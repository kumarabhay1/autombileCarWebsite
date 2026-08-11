"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const { left, width } = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - left, width));
    const percent = Math.max(0, Math.min((x / width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[500px] md:h-[600px] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl border border-white/10"
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onMouseMove={handleMouseMove}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Background) */}
      <Image
        src={beforeImage}
        alt="Before"
        fill
        className="object-cover pointer-events-none"
      />
      <div className="absolute top-6 left-6 px-4 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-semibold tracking-wider">
        BEFORE
      </div>

      {/* After Image (Clipped) */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={afterImage}
          alt="After"
          fill
          className="object-cover"
        />
        <div className="absolute top-6 right-6 px-4 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/20 text-white text-sm font-semibold tracking-wider">
          AFTER
        </div>
      </div>

      {/* Slider Handle */}
      <div 
        className="absolute top-0 bottom-0 z-20 w-1 bg-primary cursor-ew-resize flex items-center justify-center transform -translate-x-1/2 pointer-events-none shadow-[0_0_10px_rgba(197,179,153,0.5)]"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="w-10 h-10 bg-primary rounded-full shadow-lg flex items-center justify-center pointer-events-auto">
          <MoveHorizontal className="w-5 h-5 text-primary-foreground" />
        </div>
      </div>
    </div>
  );
}
