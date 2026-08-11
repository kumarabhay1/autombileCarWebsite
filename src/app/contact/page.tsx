import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `Request a Quote | ${siteConfig.name}`,
  description: "Request a free quote for mobile auto detailing services.",
};

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            Request Your <span className="text-primary">Free Quote</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your vehicle and where you need us. We'll get back to you promptly with a custom quote and our available times.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          <div className="lg:col-span-1 space-y-8">
            <div className="p-8 rounded-2xl bg-card border border-border">
              <h3 className="text-xl font-bold mb-6">Contact Methods</h3>
              
              <div className="space-y-6">
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fastest Response</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">WhatsApp Us</p>
                  </div>
                </a>

                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#050507] border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <Phone className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call Now</p>
                    <p className="font-semibold">{siteConfig.contact.phone}</p>
                  </div>
                </a>

                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#050507] border border-border flex items-center justify-center shrink-0 group-hover:border-primary/50 transition-colors">
                    <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email Us</p>
                    <p className="font-semibold text-sm break-all">{siteConfig.contact.email}</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-[#050507] border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">We Come To You</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Our fully equipped mobile detailing units travel directly to your location. We carry our own spot-free water and power supply.
              </p>
              <div className="text-sm font-semibold uppercase tracking-wider text-primary border-t border-white/10 pt-4">
                No Shop Visits Required
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="p-6 sm:p-10 rounded-3xl bg-[#050507] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8">Quote Request Form</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
