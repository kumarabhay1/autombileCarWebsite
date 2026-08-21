"use client";

import { addOns } from "@/data/pricing";
import { assets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function AddOnServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background relative overflow-hidden">
      <SectionAtmosphere />
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 text-balance">
            Add-On <span className="text-primary">Services</span>
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your detailing package with our specialized add-on services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {addOns.map((addon, index) => {
            const addonImages: Record<string, string> = {
              "pet-hair": assets.addons.petHair,
              "deep-stain": assets.addons.deepStain,
              "engine-cleaning": assets.addons.engineBay,
              "odor-elimination": assets.addons.odor,
            };
            
            return (
              <motion.div 
                key={addon.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <TiltCard className="h-full">
                  <div className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border/80 dark:border-border transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 h-full shadow-sm">
                    <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-muted">
                      <Image
                        data-parallax-img
                        src={addonImages[addon.id] || assets.addons.petHair}
                        alt={addon.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 will-change-transform"
                      />
                      {/* Subtle localized bottom gradient - only bottom ~15% to preserve full vehicle image details */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/30 to-transparent pointer-events-none z-10" />
                    </div>
                    <div data-parallax-content className="p-6 flex flex-col flex-grow relative z-20">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{addon.name}</h3>
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
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-12 bg-background/50 p-4 rounded-xl border border-border inline-block mx-auto flex justify-center max-w-2xl">
          * Exact pricing may vary based on vehicle size and condition. A final quote will be provided before service begins.
        </p>
      </div>
      <SectionDivider variant="subtle" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
