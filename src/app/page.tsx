import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AddOnServicesSection } from "@/components/sections/AddOnServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MobileHighlightSection } from "@/components/sections/MobileHighlightSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <AddOnServicesSection />
      <ProcessSection />
      <MobileHighlightSection />
      <TestimonialsSection />
      <ServiceAreaSection id="service-area" />
      <CTASection />
    </>
  );
}
