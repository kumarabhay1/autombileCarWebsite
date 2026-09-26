import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import Image from "next/image";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MessageCircle, MapPin, ShieldCheck, Sparkles, Clock } from "lucide-react";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export const metadata: Metadata = {
  title: "Get a Free Mobile Detailing Quote | Indianapolis & Greenwood IN",
  description: "Request a free quote for mobile auto detailing services in Indianapolis and Greenwood, IN. Call +1 (317) 764-8886 or message us on WhatsApp.",
  keywords: [
    "mobile detailing quote Indianapolis",
    "book car detailing Greenwood",
    "auto detailer contact Indianapolis"
  ],
  alternates: {
    canonical: "https://detailingbulls.us/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Rich Dark Hero Stage - Vehicle Image Fully Visible with Crisp White Text */}
      <section className="relative min-h-[360px] md:min-h-[420px] flex items-center justify-center overflow-hidden bg-[#05070a] pt-28 md:pt-32 lg:pt-36 pb-12">
        <div className="absolute inset-0 z-0">
          <Image
            src={assets.hero.image}
            alt="Request a Quote"
            fill
            className="object-cover opacity-85"
            priority
          />
          {/* Rich Dark Backdrop Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#05070a]/90 via-[#05070a]/65 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#05070a]/80 via-transparent to-black/50" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 md:mb-6 text-white drop-shadow-md">
            Request Your <span className="text-primary text-gradient-primary">Free Quote</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-zinc-200 dark:text-zinc-300 font-medium drop-shadow-sm">
            Tell us about your vehicle and where you need us. We'll get back to you promptly with a custom quote and our available times.
          </p>
        </div>

        {/* Localized Bottom Transition Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-background pointer-events-none z-10" />
      </section>

      <div className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background min-h-screen relative overflow-hidden">
        <SectionAtmosphere />

        <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start">
            
            {/* Left Column: Direct Contact & Perks (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              
              <div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
                <h3 className="text-xl font-bold tracking-tight border-b border-border pb-4">
                  Direct Contact
                </h3>
                
                <div className="space-y-6">
                  <a 
                    href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-4 group p-3 rounded-2xl bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <MessageCircle className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">Fastest Response</p>
                      <p className="font-bold text-sm group-hover:text-primary transition-colors">WhatsApp Us</p>
                    </div>
                  </a>

                  <a 
                    href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
                    className="flex items-center gap-4 group p-3 rounded-2xl bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border group-hover:border-primary/50 transition-colors">
                      <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">Call Now</p>
                      <p className="font-bold text-sm">{siteConfig.contact.phone}</p>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${siteConfig.contact.email}`} 
                    className="flex items-center gap-4 group p-3 rounded-2xl bg-secondary/30 hover:bg-primary/10 border border-transparent hover:border-primary/30 transition-all duration-200"
                  >
                    <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center shrink-0 border border-border group-hover:border-primary/50 transition-colors">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div>
                      <p className="text-[11px] text-muted-foreground font-bold uppercase tracking-wider">Email Us</p>
                      <p className="font-bold text-xs break-all">{siteConfig.contact.email}</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-4 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">Operating Hours</h3>
                </div>
                <div className="space-y-3 pt-2 text-sm border-t border-border/60">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Monday – Saturday</span>
                    <span className="text-primary font-bold text-xs bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-foreground">Sunday</span>
                    <span className="text-red-500 font-bold uppercase tracking-wider text-xs bg-red-500/10 px-2.5 py-1 rounded-full border border-red-500/20">Closed</span>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-card border border-border shadow-xl space-y-4 relative overflow-hidden">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold">100% Mobile Service</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Our fully equipped mobile detailing units travel directly to your location. We carry our own spot-free water and power supply.
                </p>
                <div className="text-xs font-bold uppercase tracking-wider text-primary border-t border-border pt-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Licensed & Fully Insured
                </div>
              </div>

            </div>

            {/* Right Column: Premium Interactive Quote Form (8 cols) */}
            <div className="lg:col-span-8">
              <div className="p-6 sm:p-10 rounded-3xl bg-card/90 border border-border/80 shadow-2xl shadow-primary/5 relative overflow-hidden backdrop-blur-sm">
                <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                <div className="relative z-10">
                  <div className="mb-8 border-b border-border/60 pb-6">
                    <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Quote Request Form</h2>
                    <p className="text-sm text-muted-foreground mt-1">
                      Complete the details below to receive a custom quote tailored to your vehicle and location.
                    </p>
                  </div>

                  <ContactForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
