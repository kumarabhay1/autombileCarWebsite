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
    window.addEventListener("scroll", handleScroll, { passive: true });
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
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Body and HTML scroll lock when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add("menu-open");
      document.documentElement.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
      document.documentElement.classList.remove("menu-open");
    };
  }, [mobileMenuOpen]);

  const hasDarkHero = pathname === "/" || 
                      pathname.startsWith("/about") || 
                      pathname.startsWith("/services") || 
                      pathname.startsWith("/gallery") ||
                      pathname.startsWith("/contact");

  const activeClasses = (href: string) => {
    // Exact match for Home, startsWith for others
    const isActive = href === "/" ? pathname === href : pathname.startsWith(href);
    if (isActive) return "text-primary font-bold";
    if (isScrolled) return "text-foreground/90 hover:text-primary";
    return hasDarkHero ? "text-white/90 hover:text-white" : "text-foreground/90 hover:text-primary";
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
        mobileMenuOpen
          ? "bg-slate-50 dark:bg-[#09090b] border-b border-border shadow-lg py-2.5"
          : isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg py-2.5" 
            : "bg-transparent border-b border-transparent shadow-none py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between transition-all duration-500 relative z-[100]">
        <Link href="/" className="z-[100] relative inline-flex items-center shrink-0">
          <div className="relative flex items-center w-28 h-12 sm:w-32 sm:h-14 md:w-36 md:h-14 lg:w-40 lg:h-16">
            <img 
              src={assets.logo} 
              alt="Detailing Bulls Logo" 
              className="w-full h-full object-contain scale-[1.5] sm:scale-[1.6] md:scale-[1.7] lg:scale-[1.9] xl:scale-[2.1] translate-y-1 md:translate-y-2 transition-all duration-500 drop-shadow-md hover:drop-shadow-[0_0_22px_rgba(0,123,255,0.95)] cursor-pointer"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.href} 
              className="relative group"
              onMouseEnter={() => link.hasDropdown && setServicesDropdownOpen(true)}
              onMouseLeave={() => link.hasDropdown && setServicesDropdownOpen(false)}
            >
              <Link
                href={link.href}
                className={`text-xs xl:text-sm font-medium transition-colors drop-shadow-md flex items-center gap-1 py-2 ${activeClasses(link.href)}`}
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
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[min(600px,90vw)] bg-background border border-border rounded-2xl shadow-2xl origin-top"
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
          
          <div className={`flex items-center gap-2 xl:gap-3 ml-2 xl:ml-4 pl-2 xl:pl-4 border-l transition-colors duration-500 ${isScrolled ? 'border-border' : (hasDarkHero ? 'border-white/20' : 'border-border')}`}>
            <ThemeToggle />
            <Button asChild variant="ghost" size="sm" className={`hidden xl:flex items-center gap-2 hover:bg-primary/10 hover:text-primary ${isScrolled ? 'text-foreground' : (hasDarkHero ? 'text-white' : 'text-foreground')}`}>
              <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                <Phone className="w-4 h-4" /> <span className="font-semibold">Call Now</span>
              </a>
            </Button>
            <Button asChild variant="ghost" size="sm" className="hidden xl:flex items-center gap-2 text-green-500 hover:bg-green-500/10 hover:text-green-600">
              <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for your detailing services.")}`} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> <span className="font-semibold">WhatsApp</span>
              </a>
            </Button>
            <Button asChild variant="default" className="shadow-lg shadow-primary/20 text-xs xl:text-sm">
              <Link href={siteConfig.links.quote}>Book Now</Link>
            </Button>
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2 sm:gap-3 z-[100] relative">
          <ThemeToggle />
          <a 
            href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} 
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/5 dark:bg-white/5 border border-border text-foreground backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            title="Call Us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a 
            href={`https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent("Hi, I'd like to get a quote for your detailing services.")}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-green-500/10 border border-green-500/30 text-green-500 hover:bg-green-500/20 transition-colors"
            title="WhatsApp Us"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs tracking-widest uppercase shadow-lg shadow-primary/20 transition-transform active:scale-95"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
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
            className="fixed inset-0 z-[80] bg-slate-50 dark:bg-[#09090b] flex flex-col pt-24 sm:pt-28 h-screen w-screen overflow-hidden"
          >
            {/* Premium Background Accents */}
            <div className="absolute top-0 right-0 w-[min(600px,100vw)] h-[600px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[min(400px,100vw)] h-[400px] bg-primary/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none" />
            
            <nav className="flex flex-col px-6 sm:px-8 gap-6 sm:gap-8 overflow-y-auto pb-24 h-full relative z-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl sm:text-3xl tracking-tight transition-colors ${
                      (link.href === "/" ? pathname === link.href : pathname.startsWith(link.href))
                        ? "text-primary font-extrabold"
                        : "text-foreground hover:text-primary font-bold"
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
                <Button asChild size="lg" className="w-full text-lg h-14 shadow-lg shadow-primary/20" onClick={() => setMobileMenuOpen(false)}>
                  <Link href={siteConfig.links.quote}>
                    Book Now
                  </Link>
                </Button>
                <div className="grid grid-cols-2 gap-4">
                  <Button asChild variant="outline" size="lg" className="w-full h-14 bg-transparent border-border" onClick={() => setMobileMenuOpen(false)}>
                    <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center justify-center gap-2">
                      <Phone className="w-5 h-5" /> Call
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full h-14 bg-transparent border-border text-green-600 hover:text-green-700 hover:bg-green-500/10 dark:text-green-500 dark:hover:text-green-400" onClick={() => setMobileMenuOpen(false)}>
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
