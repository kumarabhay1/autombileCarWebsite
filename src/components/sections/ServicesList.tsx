"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "@/components/ui/search-bar";
import { FilterChips } from "@/components/ui/filter-chips";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { services } from "@/data/services";
import { assets } from "@/data/assets";

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
        <div className="flex flex-col gap-24">
          <AnimatePresence mode="popLayout">
            {filteredServices.length > 0 ? (
              filteredServices.map((service, index) => {
                const isEven = index % 2 === 0;
                const imageMap: Record<string, string> = {
                  "exterior-detailing": assets.services.exterior,
                  "interior-detailing": assets.services.interior,
                  "full-detail": assets.services.fullDetail,
                  "ceramic-coating": assets.services.ceramicCoating,
                };

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    key={service.id} 
                    className={`flex flex-col gap-12 ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
                  >
                    <div className="w-full lg:w-1/2 relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                      <Image
                        src={imageMap[service.slug] || assets.services.fullDetail}
                        alt={service.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#09090b]/10 mix-blend-multiply" />
                      <div className="absolute top-6 left-6">
                        <span className="bg-background/80 backdrop-blur-md text-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase border border-white/10 shadow-lg">
                          {service.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="w-full lg:w-1/2 flex flex-col justify-center">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">{service.name}</h2>
                      <p className="text-lg text-muted-foreground mb-8">
                        {service.description}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                        {service.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm font-medium">{benefit}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex items-center gap-6 pt-8 border-t border-border">
                        <div>
                          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Starting From</p>
                          <p className="text-3xl font-bold text-foreground">${service.startingPrice}</p>
                        </div>
                        <Button asChild size="lg" className="ml-auto">
                          <Link href={`/services/${service.slug}`}>
                            View Details <ArrowRight className="w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-24 text-center border border-white/5 rounded-3xl bg-card/20"
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
