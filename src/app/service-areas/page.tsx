import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";

export const metadata: Metadata = {
  title: `Service Areas | ${siteConfig.name}`,
  description: `Mobile auto detailing service areas for ${siteConfig.name}. We come to your location.`,
};

export default function ServiceAreasPage() {
  return (
    <div className="pt-20">
      <ServiceAreaSection id="service-areas-page" />
      <CTASection />
    </div>
  );
}
