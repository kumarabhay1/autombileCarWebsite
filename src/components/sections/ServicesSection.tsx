"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { assets } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-balance">
              Premium Care For <span className="text-primary">Every Part</span> Of Your Vehicle
            </h2>
            <p className="text-muted-foreground text-lg">
              We bring professional-grade equipment and premium products directly to you, ensuring showroom-quality results without the wait at a traditional shop.
            </p>
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const imageMap: Record<string, string> = {
              "full-exterior-wash-detail": assets.services["full-exterior-wash-detail"],
              "full-interior-detail": assets.services["full-interior-detail"],
              "full-interior-exterior-detail": assets.services["full-interior-exterior-detail"],
              "premium-detail": assets.services["premium-detail"],
              "car-audio-installation": assets.services["car-audio-installation"],
            };
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border transition-all hover:border-primary/50"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={imageMap[service.slug] || assets.services["full-interior-exterior-detail"]}
                    alt={service.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-grow relative z-10 -mt-10">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.shortDescription}</p>
                  <div className="flex items-center justify-between border-t border-border pt-4">
                    <span className="font-semibold text-lg text-primary">
                      {service.callForPricing ? "Call for Pricing" : `$${service.prices?.sedan}`}
                    </span>
                    <Link href={`/services/${service.slug}`} className="text-sm font-medium hover:text-primary transition-colors flex items-center">
                      Details <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
