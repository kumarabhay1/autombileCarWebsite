"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";

import { Phone, MessageCircle } from "lucide-react";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden border-y border-border">
      <SectionAtmosphere />
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 dark:bg-[#09090b]/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-30 z-0 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url(${assets.hero.image})` }}
        />
        {/* Subtle Ambient Glow Accent */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,90vw)] h-[300px] bg-primary/10 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6"
          >
            Your Vehicle Deserves <br />
            <span className="text-primary text-gradient-primary">The Best.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 md:mb-12"
          >
            Professional mobile detailing delivered directly to you. <br className="hidden md:block" />
            Book your appointment today and experience the difference.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full sm:w-auto"
          >
            <Button asChild size="lg" className="h-12 sm:h-14 lg:h-16 px-6 sm:px-8 text-sm sm:text-base font-bold shadow-xl shadow-primary/20 hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
              <Link href={siteConfig.links.quote}>Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 lg:h-16 px-6 sm:px-8 text-sm sm:text-base font-bold bg-background/50 backdrop-blur-sm hover:bg-background border-border hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 lg:h-16 px-6 sm:px-8 text-sm sm:text-base font-bold bg-background/50 backdrop-blur-sm hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 border-border text-green-600 dark:text-green-500 hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
