import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { serviceAreas, coverageDetails } from "@/data/serviceAreas";
import { MapPin, Info } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.name}`,
  description: `Mobile auto detailing service areas for ${siteConfig.name}. We come to your location.`,
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#050507]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Where We <span className="text-primary">Service</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We are a completely mobile operation. You provide the location, we bring the shine.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          <div className="flex items-start gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20 mb-16">
            <Info className="w-6 h-6 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-lg mb-2">Mobile Only Business</h3>
              <p className="text-muted-foreground">
                We do not have a physical storefront for customers to visit. Our entire business model is built around coming directly to your home, office, or apartment complex to perform our services.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Our General Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceAreas.map((area, index) => (
                <div key={index} className="p-8 rounded-2xl bg-card border border-border">
                  <h3 className="text-xl font-bold mb-6 text-primary border-b border-white/5 pb-4">
                    {area.region}
                  </h3>
                  <ul className="space-y-4">
                    {area.cities.map((city, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary/50" />
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center p-8 rounded-2xl border border-white/5 bg-[#050507]">
            <h3 className="text-xl font-bold mb-4">Outside these areas?</h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our standard radius is <strong>{coverageDetails.radius}</strong> from <strong>{coverageDetails.center}</strong>. {coverageDetails.note}
            </p>
          </div>

        </div>
      </section>
      
      <CTASection />
    </>
  );
}
