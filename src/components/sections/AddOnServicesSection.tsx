"use client";

import { addOns } from "@/data/pricing";
import { assets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function AddOnServicesSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6 text-balance">
            Add-On <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Enhance your detailing package with our specialized add-on services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {addOns.map((addon, index) => {
            const addonImages: Record<string, string> = {
              "pet-hair": assets.addons.petHair,
              "deep-stain": assets.addons.deepStain,
              "engine-cleaning": assets.addons.engineBay,
              "odor-elimination": assets.addons.odor,
            };
            
            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={addon.id} 
                className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border transition-all hover:border-primary/50"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={addonImages[addon.id] || assets.addons.petHair}
                    alt={addon.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
                  <h3 className="text-2xl font-bold mb-2">{addon.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{addon.description}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-lg text-primary">
                      {addon.priceLabel}
                    </span>
                    <Link href={`/services/${addon.slug}`} className="text-sm font-medium hover:text-primary transition-colors flex items-center">
                      Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <p className="text-center text-sm text-muted-foreground mt-12 bg-background/50 p-4 rounded-xl border border-border inline-block mx-auto flex justify-center max-w-2xl">
          * Exact pricing may vary based on vehicle size and condition. A final quote will be provided before service begins.
        </p>
      </div>
    </section>
  );
}
