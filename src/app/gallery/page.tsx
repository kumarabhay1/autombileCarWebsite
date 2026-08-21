"use client";

import { assets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { BeforeAfterSlider } from "@/components/ui/before-after";
import { GalleryList } from "@/components/sections/GalleryList";

export default function GalleryPage() {
  return (
    <>
      {/* Rich Dark Hero Stage - Vehicle Image Fully Visible with Crisp White Text */}
      <section className="relative min-h-[360px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-[#05070a] pt-28 md:pt-32 lg:pt-36 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.services["full-interior-exterior-detail"]}
            alt="Mobile Detailing Gallery"
            fill
            className="object-cover opacity-85"
            priority
          />
          {/* Rich Dark Backdrop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/90 via-[#05070a]/65 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-white drop-shadow-md">
            Our <span className="text-primary text-gradient-primary">Gallery</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 dark:text-zinc-300 font-medium drop-shadow-sm">
            A showcase of our premium mobile detailing work. Precision, care, and flawless results.
          </p>
        </div>

        {/* Localized Bottom Transition Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
      </section>

      <section className="py-10 md:py-14 lg:py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="mb-16 md:mb-20 lg:mb-24">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tight mb-4">The Transformation</h2>
              <p className="text-muted-foreground">Drag the slider to see the difference.</p>
            </div>
            {/* Real before and after comparison */}
            <BeforeAfterSlider 
              beforeImage={assets.beforeAfter.before} 
              afterImage={assets.beforeAfter.after} 
            />
          </div>

          <GalleryList />
          
        </div>
      </section>

      <CTASection />
    </>
  );
}
