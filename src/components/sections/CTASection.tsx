"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";

import { Phone, MessageCircle } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden border-y border-border">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background/90 dark:bg-[#09090b]/90 z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-15 dark:opacity-30 z-0"
          style={{ backgroundImage: `url(${assets.hero.image})` }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Your Vehicle Deserves <br />
            <span className="text-primary">The Best.</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Professional mobile detailing delivered directly to you. <br className="hidden md:block" />
            Book your appointment today and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center w-full sm:w-auto">
            <Button asChild size="lg" className="h-16 px-8 text-base font-bold shadow-xl shadow-primary/20 w-full sm:w-auto">
              <Link href={siteConfig.links.quote}>Get a Free Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-8 text-base font-bold bg-background/50 backdrop-blur-sm hover:bg-background border-border w-full sm:w-auto">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone className="w-5 h-5 mr-2" /> Call Now
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-16 px-8 text-base font-bold bg-background/50 backdrop-blur-sm hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-600 dark:hover:text-green-400 border-border text-green-600 dark:text-green-500 w-full sm:w-auto">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
