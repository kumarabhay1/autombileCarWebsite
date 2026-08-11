"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { Star } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trusted by Car Owners
          </h2>
          <p className="text-muted-foreground text-lg">
            See what our clients are saying about our mobile detailing service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-card border border-border rounded-2xl flex flex-col"
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
    </section>
  );
}
