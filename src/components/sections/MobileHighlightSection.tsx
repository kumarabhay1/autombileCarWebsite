"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function MobileHighlightSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background relative overflow-hidden">
      <SectionAtmosphere />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={assets.about.mobileVan}
              alt="Mobile Detailing Setup"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-6 rounded-2xl border border-border">
                <p className="font-semibold text-lg mb-2">Self-Sufficient Setup</p>
                <p className="text-muted-foreground text-sm">We carry our own spot-free water and power supply. We can detail your vehicle anywhere.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 md:mb-6">
              Professional Detailing. <br />
              <span className="text-primary text-gradient-primary">At Your Location.</span>
            </h2>
            
            <div className="space-y-4 md:space-y-6 text-base lg:text-lg text-muted-foreground mb-6 md:mb-8 lg:mb-10">
              <p>
                You don&apos;t need to drive anywhere, arrange for rides, or waste hours waiting in a lobby. We bring the entire premium detailing experience directly to you.
              </p>
              <p>
                Whether you&apos;re at home, at the office, or parked in an apartment complex, our fully equipped mobile detailing units have everything needed to perform a flawless detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base shadow-lg shadow-primary/20">
                <Link href={siteConfig.links.quote}>Request Your Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base">
                <Link href="/service-areas">View Service Areas</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      <SectionDivider variant="subtle" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
