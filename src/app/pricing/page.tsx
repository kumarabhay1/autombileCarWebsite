import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { pricingPackages, addOns } from "@/data/pricing";
import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = {
  title: `Pricing | ${siteConfig.name}`,
  description: "Transparent pricing for premium mobile detailing services.",
};

export default function PricingPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#050507]">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Transparent <span className="text-primary">Pricing</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Premium service at straightforward prices. No hidden fees. We bring the studio to you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
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
                
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-sm text-muted-foreground">From</span>
                  <span className="text-4xl font-extrabold">${pkg.price}</span>
                </div>
                
                <div className="mb-8 pt-6 border-t border-white/5">
                  <p className="text-sm font-medium mb-4 flex items-center justify-between">
                    <span>What's Included:</span>
                    <span className="text-muted-foreground font-normal">{pkg.duration}</span>
                  </p>
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
                    <Link href={siteConfig.links.quote}>Request Quote</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mt-24 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight mb-12 text-center">Popular Add-ons</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {addOns.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{addon.name}</h4>
                    <p className="text-sm text-muted-foreground">{addon.description}</p>
                  </div>
                  <div className="text-xl font-bold shrink-0 ml-4">+${addon.price}</div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              * Exact pricing may vary based on vehicle size and condition. A final quote will be provided before service begins.
            </p>
          </div>
        </div>
      </section>
      
      <CTASection />
    </>
  );
}
