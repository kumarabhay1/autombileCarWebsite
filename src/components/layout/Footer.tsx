import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Phone, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <Link href="/" className="text-xl font-bold tracking-tighter uppercase mb-6 inline-block">
              {siteConfig.name}
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              {siteConfig.description}
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/services/full-detail" className="hover:text-primary transition-colors">Full Detail</Link></li>
              <li><Link href="/services/exterior-detailing" className="hover:text-primary transition-colors">Exterior Detailing</Link></li>
              <li><Link href="/services/interior-detailing" className="hover:text-primary transition-colors">Interior Detailing</Link></li>
              <li><Link href="/services/ceramic-coating" className="hover:text-primary transition-colors">Ceramic Coating</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/gallery" className="hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link href="/service-areas" className="hover:text-primary transition-colors">Service Areas</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>
                <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-3 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`} className="flex items-center gap-3 hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
