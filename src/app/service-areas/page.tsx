import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { CTASection } from "@/components/sections/CTASection";
import { ServiceAreaSection } from "@/components/sections/ServiceAreaSection";

export const metadata: Metadata = {
  title: "Service Areas | Indianapolis, Greenwood & Surrounding Suburbs",
  description: "Detailing Bulls proudly provides 100% mobile auto detailing to Indianapolis, Greenwood, and surrounding areas within 30 miles. We bring water & power to you.",
  keywords: [
    "mobile detailing Indianapolis",
    "mobile detailing Greenwood IN",
    "mobile detailing service area Central Indiana"
  ],
  alternates: {
    canonical: "https://detailingbulls.us/service-areas",
  },
};

export default function ServiceAreasPage() {
  return (
    <div className="pt-20">
      <ServiceAreaSection id="service-areas-page" />
      <CTASection />
    </div>
  );
}
