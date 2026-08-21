"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data/site";
import { Phone, MessageCircle, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function ServiceAreaSection({ id = "service-area" }: { id?: string }) {
  return (
    <section id={id} className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background overflow-hidden relative scroll-mt-20">
      <SectionAtmosphere />
      <div className="absolute top-0 right-0 w-[min(450px,80vw)] h-[450px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[min(450px,80vw)] h-[450px] bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
                <Navigation className="w-3 h-3" />
                Mobile Operation
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 md:mb-6 leading-tight">
                Proudly Serving <br/>
                <span className="text-primary">Your Location.</span>
              </h2>
              
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-lg mb-6 md:mb-8">
                We are a completely mobile detailing business. We bring our own water, power, and premium equipment directly to your home, office, or apartment complex.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-card border border-border shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
              
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Core Service Areas
              </h3>
              
              <ul className="space-y-4 mb-8 text-foreground/90 font-medium">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Indianapolis, Indiana
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary" /> Greenwood, Indiana
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-2 h-2 rounded-full bg-border" /> Surrounding areas within 30 miles
                </li>
              </ul>

              <div className="pt-8 border-t border-border flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="h-14 flex-1 shadow-lg shadow-primary/20">
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                    <Phone className="w-5 h-5 mr-2" /> Call Now
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 flex-1 text-green-600 hover:text-green-700 hover:bg-green-500/10 dark:text-green-500 dark:hover:text-green-400 border-border">
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote and check if you service my area.")}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="h-[300px] sm:h-[400px] lg:h-[600px] rounded-3xl overflow-hidden border border-border shadow-2xl relative bg-card"
          >
            {/* Dark mode filter wrapper */}
            <div className="w-full h-full dark:invert dark:hue-rotate-180 dark:contrast-[0.9] dark:opacity-90 transition-all duration-500">
              <iframe 
                src="https://maps.google.com/maps?q=Indianapolis,+IN&t=m&z=10&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Service Area Map"
              ></iframe>
            </div>
            
            {/* Map Overlay Badge */}
            <div className="absolute top-4 left-4 z-10 px-4 py-2 bg-background/90 backdrop-blur-md border border-border rounded-lg shadow-lg flex items-center gap-2 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold">Active Service Region</span>
            </div>
          </motion.div>
          
        </div>
      </div>
      <SectionDivider variant="subtle" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
