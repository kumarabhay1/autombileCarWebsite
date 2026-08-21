"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "@/components/ui/search-bar";
import { FilterChips } from "@/components/ui/filter-chips";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { services } from "@/data/services";
import { assets } from "@/data/assets";
import { siteConfig } from "@/data/site";
import { TiltCard } from "@/components/ui/TiltCard";

export function ServicesList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Extract unique categories from services
  const categories = useMemo(() => {
    const cats = new Set(services.map(s => s.category));
    return Array.from(cats);
  }, []);

  // Filter services
  const filteredServices = useMemo(() => {
    return services.filter(service => {
      const matchesSearch = 
        searchQuery === "" || 
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        activeCategory === null || 
        service.category === activeCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const clearFilters = () => {
    setSearchQuery("");
    setActiveCategory(null);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Search & Filter Controls */}
        <div className="mb-16 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <SearchBar 
              value={searchQuery} 
              onChange={setSearchQuery} 
              placeholder="Search detailing services..."
            />
            <div className="flex-shrink-0 w-full md:w-auto">
              <FilterChips 
                categories={categories} 
                activeCategory={activeCategory} 
                onSelect={setActiveCategory} 
              />
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground flex items-center justify-between">
            <span>Showing {filteredServices.length} {filteredServices.length === 1 ? 'service' : 'services'}</span>
            {(searchQuery || activeCategory) && (
              <button onClick={clearFilters} className="text-primary hover:underline">
                Clear Filters
              </button>
            )}
          </div>
        </div>

        {/* Results */}
        <div className="flex flex-col gap-10 md:gap-14 lg:gap-20 xl:gap-24">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => {
                const isEven = index % 2 === 0;
                const imageMap: Record<string, string> = {
                  "full-exterior-wash-detail": assets.services["full-exterior-wash-detail"],
                  "full-interior-detail": assets.services["full-interior-detail"],
                  "full-interior-exterior-detail": assets.services["full-interior-exterior-detail"],
                  "premium-detail": assets.services["premium-detail"],
                  "car-audio-installation": assets.services["car-audio-installation"],
                  "pet-hair-removal": assets.addons.petHair,
                  "deep-stain-removal": assets.addons.deepStain,
                  "engine-bay-cleaning": assets.addons.engineBay,
                  "odor-elimination-treatment": assets.addons.odor,
                };

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.5 }}
                    key={service.id} 
                    className="w-full"
                  >
                    <TiltCard className="w-full">
                      <div className={`flex flex-col gap-6 lg:gap-8 xl:gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center p-4 sm:p-6 lg:p-8 xl:p-10 bg-card border border-border/80 dark:border-border rounded-3xl transition-all duration-300 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/15 shadow-xl`}>
                        <div className="w-full lg:w-1/2 relative h-[250px] sm:h-[300px] lg:h-[380px] xl:h-[480px] rounded-2xl overflow-hidden shadow-2xl group bg-muted shrink-0">
                          <Image
                            data-parallax-img
                            src={imageMap[service.slug] || assets.services["full-interior-exterior-detail"]}
                            alt={service.name}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover transition-transform duration-500 will-change-transform"
                          />
                          <div className="absolute inset-0 bg-[#09090b]/10 mix-blend-multiply pointer-events-none" />
                          <div className="absolute top-6 left-6 z-20">
                            <span className="bg-background/85 backdrop-blur-md text-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-border shadow-lg">
                              {service.category}
                            </span>
                          </div>
                        </div>
                        
                        <div data-parallax-content className="w-full lg:w-1/2 flex flex-col justify-center relative z-20">
                          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">{service.name}</h2>
                          <p className="text-base lg:text-lg text-muted-foreground mb-5 md:mb-6 lg:mb-8">
                            {service.description}
                          </p>
                          
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 lg:gap-x-8 gap-y-3 lg:gap-y-4 mb-6 md:mb-8 lg:mb-10">
                            {service.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm font-medium">{benefit}</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-6 md:pt-8 border-t border-border">
                            <div>
                              {service.callForPricing ? (
                                <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 font-bold uppercase tracking-wider">
                                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`}>
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call for Pricing
                                  </a>
                                </Button>
                              ) : (
                                <>
                                  <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Pricing</p>
                                  <p className="text-3xl font-bold text-foreground">
                                    {service.startingPrice ? service.startingPrice : `$${service.prices?.sedan}`}
                                  </p>
                                </>
                              )}
                            </div>
                            <Button asChild size="lg" className="ml-auto shadow-md">
                              <Link href={`/services/${service.slug}`}>
                                View Details <ArrowRight className="w-4 h-4 ml-2" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center border border-border rounded-3xl bg-card/20"
              >
                <div className="max-w-md mx-auto">
                  <h3 className="text-2xl font-bold mb-3">No services found</h3>
                  <p className="text-muted-foreground mb-8">
                    We couldn't find any services matching your current filters. Try adjusting your search or clearing the filters to see all options.
                  </p>
                  <Button onClick={clearFilters} variant="outline" size="lg">
                    Clear Filters
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
