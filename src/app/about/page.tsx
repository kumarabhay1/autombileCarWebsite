import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ShieldCheck, Truck, Star, Award } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${siteConfig.name}`,
  description: "Learn about our mission to provide the ultimate mobile auto detailing experience.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.about.hero}
            alt="About Best In Class Detailing"
            fill
            className="object-cover opacity-15 dark:opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-background/90 dark:bg-background/60" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            The Standard for <br />
            <span className="text-primary text-gradient-primary">Mobile Detailing</span>
          </h1>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
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
            <div className="relative h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={assets.about.mobileVan}
                alt="Our Mobile Setup"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-y border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-16">Why We're Different</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Truck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">True Mobile Convenience</h3>
                <p className="text-muted-foreground text-sm">We bring our own water and power. You don't need to provide anything but the keys.</p>
              </div>
            </div>
            
            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Licensed & Fully Insured</h3>
                <p className="text-muted-foreground text-sm">Your vehicle is fully protected while in our care. Professionalism guaranteed.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Premium Products Only</h3>
                <p className="text-muted-foreground text-sm">We never use cheap bulk chemicals. Your vehicle receives the absolute best care available.</p>
              </div>
            </div>

            <div className="flex gap-4 p-6 rounded-2xl bg-card border border-border">
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
