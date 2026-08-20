"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import { services } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services", hasDropdown: true },
  { href: "/about", label: "About Us" },
  { href: "/service-areas", label: "Service Area" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change and window resize to desktop
  React.useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeClasses = (href: string) => {
    // Exact match for Home, startsWith for others
    const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
    return isActive ? "text-primary" : "text-foreground/90 hover:text-primary";
  };

  // Group services by category for the dropdown
  const servicesByCategory = services.reduce((acc, service) => {
    if (!acc[service.category]) acc[service.category] = [];
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-2" 
          : "bg-background/20 backdrop-blur-sm border-b border-white/5 py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-500">
        <Link href="/" className="z-[100] relative group">
          <div className="relative flex items-center w-36 h-16 md:w-44 md:h-20 transition-transform duration-500 group-hover:scale-[1.02]">
            <img 
              src={assets.logo} 
              alt="Detailing Bulls Logo" 
              className="w-full h-full object-contain drop-shadow-md scale-[1.8] md:scale-[2.1] translate-y-1.5 md:translate-y-2.5"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.href} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setServicesDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className={`text-sm font-medium transition-colors drop-shadow-md flex items-center gap-1 py-2 ${activeClasses(link.href)}`}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />}
              </Link>
              
              {/* Subtle active indicator */}
              {(link.href === "/" ? pathname === link.href : pathname.startsWith(link.href)) && (
                <motion.div 
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" 
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}

              {/* Services Mega-Menu Dropdown */}
              {link.hasDropdown && (
                <AnimatePresence>
                  {servicesDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[600px] bg-background border border-border rounded-2xl shadow-2xl origin-top"
                    >
                      {/* Arrow pointer */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45 z-10" />
                      
                      <div className="p-6 max-h-[75vh] overflow-y-auto custom-scrollbar relative z-20">
                        <div className="grid grid-cols-2 gap-8">
                          {Object.entries(servicesByCategory).map(([category, items]) => (
                            <div key={category}>
                              <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-4 flex items-center gap-2">
                                {category}
                              </h4>
                              <ul className="space-y-4">
                                {items.map(item => (
                                  <li key={item.id}>
                                    <Link href={`/services/${item.slug}`} className="block group/item">
                                      <div className="text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                                        {item.name}
                                      </div>
                                      <div className="text-xs text-muted-foreground mt-1 line-clamp-1 group-hover/item:text-foreground/80 transition-colors">
                                        {item.shortDescription}
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                          
                          <div className="col-span-2 pt-4 mt-2 border-t border-border flex justify-between items-center">
                            <span className="text-xs text-muted-foreground">Premium mobile detailing at your doorstep.</span>
                            <Link href="/services" className="text-sm font-semibold text-primary flex items-center hover:underline underline-offset-4">
                              View All Services <ArrowRight className="w-4 h-4 ml-1" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
          
          <div className="flex items-center gap-3 ml-4 pl-4 border-l border-border">
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className="hidden xl:flex items-center gap-2 hover:bg-primary/10 hover:text-primary">
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone className="w-4 h-4" /> <span className="font-semibold">Call Now</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden lg:flex items-center gap-2 text-green-500 hover:bg-green-500/10 hover:text-green-600">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for your detailing services.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> <span className="font-semibold">WhatsApp</span>
              </a>
            </Button>
            <Button asChild variant="default" className="shadow-lg shadow-primary/20">
              <Link href={siteConfig.links.quote}>Book Now</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-3 z-50 relative">
          <ThemeToggle />
          <a 
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-border text-foreground backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            title="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <button
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase shadow-lg shadow-primary/20 transition-transform active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <>CLOSE <X className="w-4 h-4" /></>
            ) : (
              <>MENU <Menu className="w-4 h-4" /></>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Full Screen Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-32"
          >
            {/* Premium Background Accents */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <nav className="flex flex-col px-8 gap-8 overflow-y-auto pb-24 h-full relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    className={`text-3xl font-extrabold tracking-tight transition-colors ${
                      activeClasses(link.href)
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1, duration: 0.4 }}
                className="mt-auto pt-8 border-t border-border flex flex-col gap-4"
              >
                <Button asChild size="lg" className="w-full text-lg h-14 shadow-lg shadow-primary/20">
                  <Link href={siteConfig.links.quote}>
                    Book Now
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button asChild variant="outline" size="lg" className="w-full h-14 bg-transparent border-border">
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" /> Call
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full h-14 bg-transparent border-border text-green-600 hover:text-green-700 hover:bg-green-500/10 dark:text-green-500 dark:hover:text-green-400">
                    <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for your detailing services.")}`} className="flex items-center justify-center gap-2">
                      <MessageCircle className="w-5 h-5" /> WhatsApp
                    </a>
                  </Button>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
