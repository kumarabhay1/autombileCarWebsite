"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { assets } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function ServicesSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background relative overflow-hidden">
      <SectionAtmosphere />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 lg:mb-16 gap-4 md:gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4 text-balance">
              Premium Care For <span className="text-primary">Every Part</span> Of Your Vehicle
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg">
              We bring professional-grade equipment and premium products directly to you, ensuring showroom-quality results without the wait at a traditional shop.
            </p>
          </motion.div>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/services">View All Services <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
              >
                <TiltCard className="h-full">
                  <div className="group relative flex flex-col bg-card rounded-2xl overflow-hidden border border-border/80 dark:border-border transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 h-full shadow-sm">
                    <div className="relative h-48 sm:h-56 md:h-64 w-full overflow-hidden bg-muted">
                      <Image
                        data-parallax-img
                        src={imageMap[service.slug] || assets.services["full-interior-exterior-detail"]}
                        alt={service.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 will-change-transform"
                      />
                      {/* Subtle localized bottom gradient - only bottom ~15% to preserve full vehicle image details */}
                      <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-card via-card/30 to-transparent pointer-events-none z-10" />
                    </div>
                    <div data-parallax-content className="p-6 flex flex-col flex-grow relative z-20">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground mb-6 flex-grow">{service.shortDescription}</p>
                      <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                        <span className="font-semibold text-lg text-primary">
                          {service.callForPricing ? (
                            <a
                              href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/15 text-primary hover:bg-primary hover:text-white border border-primary/40 font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-sm group"
                            >
                              <Phone className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
                              <span>Call for Pricing</span>
                            </a>
                          ) : `$${service.prices?.sedan}`}
                        </span>
                        <Link href={`/services/${service.slug}`} className="text-sm font-medium hover:text-primary transition-colors flex items-center">
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
      </div>
      <SectionDivider variant="subtle" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
