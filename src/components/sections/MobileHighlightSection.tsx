"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";

export function MobileHighlightSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src={assets.about.mobileVan}
              alt="Mobile Detailing Setup"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#09090b]/80 via-transparent to-transparent" />
            
            <div className="absolute bottom-8 left-8 right-8">
              <div className="glass p-6 rounded-2xl border border-white/10">
                <p className="font-semibold text-lg mb-2">Self-Sufficient Setup</p>
                <p className="text-muted-foreground text-sm">We carry our own spot-free water and power supply. We can detail your vehicle anywhere.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Professional Detailing. <br />
              <span className="text-primary text-gradient-primary">At Your Location.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground mb-10">
              <p>
                You don&apos;t need to drive anywhere, arrange for rides, or waste hours waiting in a lobby. We bring the entire premium detailing experience directly to you.
              </p>
              <p>
                Whether you&apos;re at home, at the office, or parked in an apartment complex, our fully equipped mobile detailing units have everything needed to perform a flawless detail.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="h-14 px-8 text-base shadow-lg shadow-primary/20">
                <Link href={siteConfig.links.quote}>Request Your Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base">
                <Link href="/service-areas">View Service Areas</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
