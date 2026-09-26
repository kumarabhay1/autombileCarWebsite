import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ShieldCheck, Truck, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Detailing Bulls Mobile Detailing Indianapolis",
  description: "Learn about Detailing Bulls, your premier mobile auto detailing team in Indianapolis & Greenwood, IN. Fully equipped with water and power to service your vehicle anywhere.",
  keywords: [
    "about Detailing Bulls",
    "mobile detailers Indianapolis",
    "professional auto detailing Indiana"
  ],
  alternates: {
    canonical: "https://detailingbulls.us/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Rich Dark Hero Stage - Vehicle Image Fully Visible with Crisp White Text */}
      <section className="relative min-h-[380px] md:min-h-[440px] flex items-center justify-center overflow-hidden bg-[#05070a] pt-28 md:pt-32 lg:pt-36 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.about.hero}
            alt="About Best In Class Detailing"
            fill
            className="object-cover opacity-85"
            sizes="100vw"
            priority
          />
          {/* Rich Dark Backdrop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/90 via-[#05070a]/65 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-white drop-shadow-md">
            The Standard for <br />
            <span className="text-primary text-gradient-primary">Mobile Detailing</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 dark:text-zinc-300 max-w-2xl mx-auto font-medium drop-shadow-sm">
            Delivering studio-quality detailing directly to your home or office with fully self-sufficient mobile units.
          </p>
        </div>

        {/* Localized Bottom Transition Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
      </section>

      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Philosophy</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  At {siteConfig.name}, we believe that maintaining your vehicle shouldn't require sacrificing your entire day. We built our business on a simple premise: professional, studio-quality detailing delivered directly to your location.
                </p>
                <p>
                  We don't just wash cars; we restore, protect, and maintain your investment using the industry's finest products and proven techniques. Our mobile setup is entirely self-sufficient, meaning we can perform a flawless detail whether you're at home, at the office, or anywhere in between.
                </p>
              </div>
            </div>
            <div className="relative h-[280px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={assets.about.mobileVan}
                alt="Our Mobile Setup"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 md:mb-12 lg:mb-16">Why We're Different</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">True Mobile Convenience</h3>
                <p className="text-muted-foreground text-sm">We bring our own water and power. You don't need to provide anything but the keys.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Fully Insured</h3>
                <p className="text-muted-foreground text-sm">Your vehicle is fully protected while in our care. Professionalism guaranteed.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Products Only</h3>
                <p className="text-muted-foreground text-sm">We never use cheap bulk chemicals. Your vehicle receives the absolute best care available.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border shadow-sm">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Flawless Track Record</h3>
                <p className="text-muted-foreground text-sm">Consistently 5-star rated by our clients. We do not leave until you are completely satisfied.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
