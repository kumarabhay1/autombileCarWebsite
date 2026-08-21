"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";
import { SectionDivider } from "@/components/ui/section-divider";
import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function TestimonialsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background relative overflow-hidden">
      <SectionAtmosphere />
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            Trusted by Car Owners
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            See what our clients are saying about our mobile detailing service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-5 sm:p-6 md:p-8 bg-card border border-border rounded-2xl flex flex-col"
            >
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed italic">
                "{testimonial.review}"
              </p>
              <div>
                <p className="font-bold text-lg">{testimonial.name}</p>
                <p className="text-sm text-primary uppercase tracking-wider">{testimonial.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <SectionDivider variant="subtle" className="absolute bottom-0 left-0 right-0" />
    </section>
  );
}
