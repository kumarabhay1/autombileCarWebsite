import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesList } from "@/components/sections/ServicesList";

export const metadata: Metadata = {
  title: "Mobile Detailing Services | Indianapolis & Greenwood IN",
  description: "Explore our premium mobile detailing services in Indianapolis & Greenwood, IN. Interior detailing, exterior wash, ceramic coating, paint correction, and headlight restoration brought to your door.",
  keywords: [
    "mobile car detailing services Indianapolis",
    "interior car detailing Greenwood",
    "paint correction Indianapolis",
    "ceramic coating Indianapolis",
    "mobile wash and wax"
  ],
  alternates: {
    canonical: "https://detailingbulls.us/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Rich Dark Hero Stage - Vehicle Image Fully Visible with Crisp White Text */}
      <section className="relative min-h-[360px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-[#05070a] pt-28 md:pt-32 lg:pt-36 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.hero.image}
            alt="Mobile Detailing Services"
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
            Our <span className="text-primary text-gradient-primary">Services</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 dark:text-zinc-300 font-medium drop-shadow-sm">
            Professional-grade mobile detailing solutions tailored to protect your investment and maintain your vehicle's pristine condition.
          </p>
        </div>

        {/* Localized Bottom Transition Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
      </section>

      <ServicesList />
      <CTASection />
    </>
  );
}
