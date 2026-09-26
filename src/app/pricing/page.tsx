import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import { pricingPackages, addOns } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: "Pricing & Detailing Packages | Indianapolis & Greenwood IN",
  description: "Transparent pricing for mobile auto detailing in Indianapolis and Greenwood, IN. Sedan, SUV, and truck detailing packages with zero hidden fees.",
  keywords: [
    "car detailing prices Indianapolis",
    "mobile auto detailing packages Greenwood",
    "sedan detailing price Indianapolis",
    "SUV detailing cost",
    "ceramic coating cost Indianapolis"
  ],
  alternates: {
    canonical: "https://detailingbulls.us/pricing",
  },
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-28 md:pt-36 lg:pt-40 pb-8 md:pb-12 lg:pb-16 bg-background">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-base lg:text-lg text-muted-foreground">
            Premium service at straightforward prices. No hidden fees. We bring the studio to you.
          </p>
        </div>
      </section>

      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
            {pricingPackages.map((pkg) => (
              <div 
                key={pkg.id} 
                className={`flex flex-col relative rounded-3xl overflow-hidden border ${pkg.recommended ? 'border-primary/50 shadow-2xl shadow-primary/10' : 'border-border bg-card'} p-8 transition-transform hover:-translate-y-2`}
              >
                {pkg.recommended && (
                  <>
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50" />
                    <div className="absolute top-4 right-4 text-primary text-xs font-bold uppercase flex items-center gap-1 bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                      <Star className="w-3 h-3 fill-primary" /> Recommended
                    </div>
                  </>
                )}
                
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                
                {pkg.callForPricing ? (
                  <div className="mb-6">
                    <span className="text-3xl font-extrabold text-primary">CALL FOR PRICING</span>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 mb-6">
                    <div className="flex flex-col items-center p-2 rounded-lg bg-background border border-border">
                      <span className="text-xs text-muted-foreground font-semibold mb-1">SEDAN</span>
                      <span className="text-xl font-bold">${pkg.prices?.sedan}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-background border border-border">
                      <span className="text-xs text-muted-foreground font-semibold mb-1">SUV</span>
                      <span className="text-xl font-bold">${pkg.prices?.suv}</span>
                    </div>
                    <div className="flex flex-col items-center p-2 rounded-lg bg-background border border-border">
                      <span className="text-xs text-muted-foreground font-semibold mb-1">TRUCK</span>
                      <span className="text-xl font-bold">${pkg.prices?.truck}</span>
                    </div>
                  </div>
                )}
                
                <div className="mb-8 pt-6 border-t border-border">
                  <p className="text-sm font-medium mb-4">What's Included:</p>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto pt-6">
                  <Button asChild variant={pkg.recommended ? "default" : "outline"} className="w-full">
                    <Link href={siteConfig.links.quote}>{pkg.callForPricing ? "Call for Pricing" : "Request Quote"}</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mt-24 max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-10 lg:mb-12 text-center">Add-On Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
              {addOns.map((addon) => {
                const addonImages: Record<string, string> = {
                  "pet-hair": assets.addons.petHair,
                  "deep-stain": assets.addons.deepStain,
                  "engine-cleaning": assets.addons.engineBay,
                  "odor-elimination": assets.addons.odor,
                };
                
                return (
                  <div key={addon.id} className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border/80 dark:border-border transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 shadow-sm">
                    <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-muted">
                      <Image
                        src={addonImages[addon.id] || assets.addons.petHair}
                        alt={addon.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      {/* Subtle localized bottom gradient - only bottom ~15% to preserve full vehicle image details */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/30 to-transparent pointer-events-none" />
                    </div>
                    <div className="p-6 flex flex-col flex-grow relative z-10">
                      <h3 className="text-2xl font-bold mb-2">{addon.name}</h3>
                      <p className="text-muted-foreground mb-6 flex-grow">{addon.description}</p>
                      <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                        <span className="font-semibold text-lg text-primary">
                          {addon.priceLabel}
                        </span>
                        <Link href={`/services/${addon.slug}`} className="text-sm font-medium hover:text-primary transition-colors flex items-center">
                          Details <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-12 bg-background/50 p-4 rounded-xl border border-border inline-block mx-auto flex justify-center max-w-2xl">
              * Exact pricing may vary based on vehicle size and condition. A final quote will be provided before service begins.
            </p>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
