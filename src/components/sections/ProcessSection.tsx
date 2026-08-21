"use client";

import { motion } from "framer-motion";
import { MessageSquarePlus, CalendarCheck, Truck, Sparkles } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Request a Quote",
    description: "Tell us about your vehicle, location, and the detailing services you need using our simple form.",
    icon: MessageSquarePlus,
  },
  {
    number: "02",
    title: "Confirm Your Service",
    description: "We'll contact you promptly to discuss the vehicle, confirm pricing, and set a convenient time.",
    icon: CalendarCheck,
  },
  {
    number: "03",
    title: "We Come To You",
    description: "Our fully-equipped mobile detailing van arrives at your location with everything needed.",
    icon: Truck,
  },
  {
    number: "04",
    title: "Enjoy The Results",
    description: "Experience professional detailing without the hassle of waiting at a traditional shop.",
    icon: Sparkles,
  },
];

import { SectionAtmosphere } from "@/components/ui/section-atmosphere";

export function ProcessSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 xl:py-24 bg-background border-y border-border relative overflow-hidden">
      <SectionAtmosphere />
      {/* Subtle Ambient Glow Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(500px,90vw)] h-[250px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-10 md:mb-14 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3 md:mb-4">
            How Mobile Detailing <span className="text-primary">Works</span>
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            A seamless, convenient experience designed entirely around your schedule.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-4 relative">

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative z-10 flex flex-col items-center text-center p-6 bg-card border border-border rounded-2xl transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 relative transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
