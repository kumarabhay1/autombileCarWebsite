"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn } from "lucide-react";
import { FilterChips } from "@/components/ui/filter-chips";
import { assets } from "@/data/assets";

export function GalleryList() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<{ id: string, imageUrl: string, category: string, altText: string } | null>(null);

  // Extract unique categories from gallery data
  const categories = useMemo(() => {
    const cats = new Set(assets.gallery.map(item => item.category));
    return Array.from(cats);
  }, []);

  // Filter gallery items
  const filteredGallery = useMemo(() => {
    if (activeCategory === null) return assets.gallery;
    return assets.gallery.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <>
      {/* Filter Controls */}
      <div className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-shrink-0 w-full md:w-auto">
            <FilterChips 
              categories={categories} 
              activeCategory={activeCategory} 
              onSelect={setActiveCategory} 
            />
          </div>
          
          <div className="text-sm text-muted-foreground flex items-center justify-end">
            <span>Showing {filteredGallery.length} {filteredGallery.length === 1 ? 'image' : 'images'}</span>
            {activeCategory && (
              <button onClick={() => setActiveCategory(null)} className="ml-4 text-primary hover:underline">
                Clear Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="popLayout">
          {filteredGallery.length > 0 ? (
            <motion.div layout className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredGallery.map((item) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  className="relative overflow-hidden rounded-2xl group cursor-pointer break-inside-avoid"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="relative w-full aspect-[4/5] bg-muted">
                    <Image
                      src={item.imageUrl}
                      alt={item.altText}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="w-12 h-12 rounded-full bg-background/50 flex items-center justify-center text-foreground">
                        <ZoomIn className="w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-24 text-center border border-border rounded-3xl bg-card/20"
            >
              <div className="max-w-md mx-auto">
                <h3 className="text-2xl font-bold mb-3">No images found</h3>
                <p className="text-muted-foreground mb-8">
                  We don't have any images in this category yet.
                </p>
                <button onClick={() => setActiveCategory(null)} className="text-primary hover:underline font-medium">
                  View All Images
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 md:top-10 md:right-10 text-white/70 hover:text-white bg-black/50 p-3 rounded-full transition-colors z-[101]"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <div 
              className="relative w-full max-w-6xl h-full max-h-[80vh] rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage.imageUrl}
                alt={selectedImage.altText}
                fill
                className="object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
