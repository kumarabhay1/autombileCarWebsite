"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import Link from "next/link";
import { HeroBackground } from "@/components/ui/hero-background";
import { ShieldCheck, Clock, MapPin, Star, Phone, MessageCircle } from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";

export function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] flex items-start sm:items-center pt-18 sm:pt-24 md:pt-32 pb-8 sm:pb-12 overflow-hidden">
      {/* Animated Car Detailing Motion Background */}
      <HeroBackground />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {/* Badge */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 sm:mb-6 backdrop-blur-md shadow-md"
            >
              <MapPin className="w-3 h-3 text-primary" />
              We Come To You
            </motion.div>

            {/* Main Heading — Forced Crisp White for Video Stage Contrast */}
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tighter mb-4 sm:mb-6 text-balance leading-[1.1] text-white drop-shadow-md"
            >
              PREMIUM AUTO DETAILING. <br />
              <span className="text-gradient-primary">AT YOUR LOCATION.</span>
            </motion.h1>

            {/* Paragraph — Crisp White/80 for High Contrast */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
              }}
              className="text-base sm:text-lg lg:text-xl text-zinc-200 dark:text-zinc-300 mb-6 sm:mb-8 lg:mb-10 text-balance max-w-2xl leading-relaxed drop-shadow-sm font-medium"
            >
              Professional mobile detailing delivered directly to your home or office. Premium products, professional results, and a detailing experience built around your convenience.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 15 },
                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
              }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12"
            >
              <Button asChild size="lg" className="h-12 sm:h-14 px-6 sm:px-8 text-sm sm:text-base font-semibold shadow-xl shadow-primary/30 hover:scale-[1.03] hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto">
                <Link href={siteConfig.links.quote}>Get a Free Quote</Link>
              </Button>
              <div className="grid grid-cols-2 sm:flex gap-2.5 sm:gap-4 w-full sm:w-auto">
                <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 px-3 sm:px-6 text-xs sm:text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 hover:text-white hover:-translate-y-0.5 transition-all duration-200 w-full">
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 shrink-0" /> <span>Call Now</span>
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 sm:h-14 px-3 sm:px-6 text-xs sm:text-base font-semibold bg-white/10 backdrop-blur-md border-white/20 text-green-400 hover:text-green-300 hover:bg-green-500/20 hover:-translate-y-0.5 transition-all duration-200 w-full">
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for your detailing services.")}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 shrink-0" /> <span>WhatsApp</span>
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Trust Indicators — Crisp White for Video Stage Contrast */}
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: { duration: 0.8 } },
              }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-10 pt-4 sm:pt-6 lg:pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white/90">Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white/90">Mobile Service</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Star className="w-5 h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white/90">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-xs sm:text-sm font-medium text-white/90">Flexible Scheduling</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Smooth, Localized Section Transition */}
      <SectionDivider variant="hero" />
    </section>
  );
}
