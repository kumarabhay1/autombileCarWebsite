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

export function ProcessSection() {
  return (
    <section className="py-24 bg-background border-y border-border relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            How Mobile Detailing Works
          </h2>
          <p className="text-muted-foreground text-lg">
            A seamless, convenient experience designed entirely around your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[56px] left-[12%] right-[12%] h-[2px] border-t-2 border-dashed border-primary/30 -translate-y-1/2 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative z-10 flex flex-col items-center text-center p-6 bg-background border border-border rounded-2xl lg:border-none lg:bg-transparent"
              >
                <div className="w-16 h-16 rounded-full bg-card border-2 border-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20 relative">
                  <Icon className="w-8 h-8 text-primary" />
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
