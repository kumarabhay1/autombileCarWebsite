"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { assets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { ShieldCheck, Clock, MapPin, Star, Phone, MessageCircle } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-12 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 dark:opacity-75"
        >
          <source src="http://breaexpresscarwash.com/application/views/themes/theme-1/assets/video/Brea-Carwash-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 dark:via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 dark:via-background/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
              <MapPin className="w-3 h-3" />
              We Come To You
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6 text-balance leading-[1.1]">
              Premium Auto Detailing. <br />
              <span className="text-gradient-primary">At Your Location.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-10 text-balance max-w-2xl leading-relaxed">
              Professional mobile detailing delivered directly to your home or office. Premium products, professional results, and a detailing experience built around your convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="h-14 px-8 text-base font-semibold shadow-lg shadow-primary/20">
                <Link href={siteConfig.links.quote}>Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base font-semibold">
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                  <Phone className="w-5 h-5 mr-2" /> Call Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-14 px-6 text-base font-semibold text-green-600 hover:text-green-700 hover:bg-green-500/10 dark:text-green-500 dark:hover:text-green-400 border-border">
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for your detailing services.")}`} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 pt-8 border-t border-border dark:border-border">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground/90">Mobile Service</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground/90">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground/90">Flexible Scheduling</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
