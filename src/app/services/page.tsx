import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { ServicesList } from "@/components/sections/ServicesList";

export const metadata: Metadata = {
  title: `Services | ${siteConfig.name}`,
  description: "Explore our premium mobile detailing services, from full interior and exterior details to ceramic coating and paint correction.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Our <span className="text-primary">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Professional-grade mobile detailing solutions tailored to protect your investment and maintain your vehicle's pristine condition.
          </p>
        </div>
      </section>

      <ServicesList />
      <CTASection />
    </>
  );
}
