"use client";

import { assets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { BeforeAfterSlider } from "@/components/ui/before-after";
import { GalleryList } from "@/components/sections/GalleryList";

export default function GalleryPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            A showcase of our premium mobile detailing work. Precision, care, and flawless results.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="mb-24">
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
