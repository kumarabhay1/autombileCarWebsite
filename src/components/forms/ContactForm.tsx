"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2, Check, ArrowRight, MapPin, Sparkles, Car, CarFront, Truck as TruckIcon, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { CustomCalendar } from "@/components/ui/custom-calendar";

type VehicleType = "SEDAN" | "SUV" | "TRUCK";

const VEHICLE_TYPES = [
  { type: "SEDAN" as VehicleType, label: "Sedan", icon: Car },
  { type: "SUV" as VehicleType, label: "SUV", icon: CarFront },
  { type: "TRUCK" as VehicleType, label: "Truck", icon: TruckIcon },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [vehicleType, setVehicleType] = useState<VehicleType | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    year: "",
    make: "",
    model: "",
    address: "",
    preferredDate: "",
    details: "",
  });

  // Get today's date YYYY-MM-DD for min date picker attribute
  const todayDateStr = new Date().toISOString().split("T")[0];

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId) 
        : [...prev, serviceId]
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Map service IDs to readable service names
    const serviceNames = selectedServices.map(id => {
      if (id === "custom") return "Custom Detailing Package";
      const s = services.find(item => item.id === id);
      return s ? s.name : id;
    });

    const serviceText = serviceNames.length > 0 
      ? serviceNames.map(name => `- ${name}`).join("\n") 
      : "- None Selected";

    const specsText = [formData.year, formData.make, formData.model].filter(Boolean).join(" ");
    const vehicleText = vehicleType 
      ? (specsText ? `${vehicleType} (${specsText})` : vehicleType)
      : (specsText || "Not Specified");

    const message = `*DETAILING BULLS - NEW QUOTE REQUEST*
--------------------------------------------------

*CLIENT INFORMATION:*
- *Name:* ${formData.name || "N/A"}
- *Phone:* ${formData.phone || "N/A"}

*VEHICLE DETAILS:*
- *Vehicle:* ${vehicleText}

*SERVICES REQUESTED:*
${serviceText}

*SERVICE LOCATION & DATE:*
- *Address:* ${formData.address || "N/A"}
- *Preferred Date:* ${formData.preferredDate || "Flexible / Earliest Available"}

*ADDITIONAL NOTES:*
- *Details:* ${formData.details || "None"}

--------------------------------------------------
_Sent via Detailing Bulls Official Website_`;

    const targetNumber = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
    const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;

    // Launch WhatsApp directly
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="p-10 rounded-3xl bg-card border border-primary/40 shadow-2xl shadow-primary/10 text-center relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="w-20 h-20 bg-primary/20 border border-primary/40 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20">
          <Check className="w-10 h-10 text-primary" />
        </div>
        
        <h3 className="text-3xl font-extrabold tracking-tight mb-3">REQUEST RECEIVED</h3>
        <p className="text-muted-foreground max-w-md mx-auto mb-8 text-base leading-relaxed">
          Thanks! We have received your detailing request and will contact you shortly to confirm your schedule and provide exact quote options.
        </p>
        
        <Button 
          onClick={() => {
            setIsSuccess(false);
            setFormData({ name: "", phone: "", year: "", make: "", model: "", address: "", preferredDate: "", details: "" });
            setVehicleType(null);
            setSelectedServices([]);
          }} 
          variant="outline"
          className="h-12 px-6 rounded-xl font-bold hover:border-primary/50"
        >
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10">
      
      {/* 01: YOUR INFORMATION */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30 tracking-wider">
            01
          </span>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
            YOUR INFORMATION
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Full Name *
            </label>
            <input 
              required 
              id="name" 
              name="name" 
              type="text" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full h-13 px-4 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50" 
              placeholder="John Doe" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Mobile Number *
            </label>
            <input 
              required 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full h-13 px-4 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50" 
              placeholder="(555) 123-4567" 
            />
          </div>
        </div>
      </motion.div>

      {/* 02: YOUR VEHICLE */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5 pt-2 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30 tracking-wider">
            02
          </span>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
            YOUR VEHICLE
          </h3>
        </div>

        {/* Compact Interactive Vehicle Selector (SEDAN, SUV, TRUCK) with Vector Icons */}
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            WHAT ARE WE DETAILING?
          </p>
          <div className="grid grid-cols-3 gap-3">
            {VEHICLE_TYPES.map((v) => {
              const isSelected = vehicleType === v.type;
              const IconComp = v.icon;
              return (
                <button
                  type="button"
                  key={v.type}
                  onClick={() => setVehicleType(prev => (prev === v.type ? null : v.type))}
                  className={`p-3.5 rounded-xl border transition-all duration-200 cursor-pointer relative overflow-hidden flex items-center justify-between h-14 ${
                    isSelected 
                      ? "border-primary bg-primary/10 shadow-md shadow-primary/10 scale-[1.01] ring-1 ring-primary/40" 
                      : "border-border/80 bg-secondary/40 hover:bg-secondary/80 hover:border-primary/40 hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComp className={`w-4 h-4 transition-colors ${isSelected ? "text-primary" : "text-muted-foreground"}`} />
                    <span className={`font-black text-xs sm:text-sm tracking-wider uppercase ${isSelected ? "text-primary" : "text-foreground"}`}>
                      {v.label}
                    </span>
                  </div>
                  {isSelected && (
                    <div className="w-4.5 h-4.5 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Vehicle Specs Row */}
        <div className="grid grid-cols-3 gap-3 pt-2">
          <div className="space-y-2">
            <label htmlFor="year" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Year
            </label>
            <input 
              id="year" 
              name="year" 
              type="text" 
              value={formData.year} 
              onChange={handleChange} 
              className="w-full h-12 px-3.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50 text-sm" 
              placeholder="2022" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="make" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Make
            </label>
            <input 
              id="make" 
              name="make" 
              type="text" 
              value={formData.make} 
              onChange={handleChange} 
              className="w-full h-12 px-3.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50 text-sm" 
              placeholder="Porsche" 
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="model" className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
              Model
            </label>
            <input 
              id="model" 
              name="model" 
              type="text" 
              value={formData.model} 
              onChange={handleChange} 
              className="w-full h-12 px-3.5 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50 text-sm" 
              placeholder="911" 
            />
          </div>
        </div>
      </motion.div>

      {/* 03: SERVICES NEEDED */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5 pt-2 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30 tracking-wider">
            03
          </span>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
            SERVICES NEEDED *
          </h3>
        </div>

        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
          WHAT DOES YOUR VEHICLE NEED?
        </p>

        {/* Selectable Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {services.map((s) => {
            const isSelected = selectedServices.includes(s.id);
            return (
              <button
                type="button"
                key={s.id}
                onClick={() => toggleService(s.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden flex items-start justify-between gap-3 ${
                  isSelected 
                    ? "border-primary bg-primary/10 shadow-md shadow-primary/10 ring-1 ring-primary/40 scale-[1.01]" 
                    : "border-border/80 bg-secondary/40 hover:bg-secondary/80 hover:border-primary/40 hover:-translate-y-0.5"
                }`}
              >
                <div>
                  <h4 className={`font-bold text-sm leading-snug ${isSelected ? "text-primary" : "text-foreground"}`}>
                    {s.name}
                  </h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                    {s.shortDescription}
                  </p>
                </div>
                
                <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
                  isSelected ? "bg-primary border-primary" : "border-border/80 bg-background"
                }`}>
                  {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
                </div>
              </button>
            );
          })}

          {/* Custom Option */}
          <button
            type="button"
            onClick={() => toggleService("custom")}
            className={`p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer relative overflow-hidden flex items-start justify-between gap-3 ${
              selectedServices.includes("custom") 
                ? "border-primary bg-primary/10 shadow-md shadow-primary/10 ring-1 ring-primary/40 scale-[1.01]" 
                : "border-border/80 bg-secondary/40 hover:bg-secondary/80 hover:border-primary/40 hover:-translate-y-0.5"
            }`}
          >
            <div>
              <h4 className={`font-bold text-sm leading-snug ${selectedServices.includes("custom") ? "text-primary" : "text-foreground"}`}>
                Other / Custom Detailing Package
              </h4>
              <p className="text-xs text-muted-foreground mt-1">
                Custom combination or specialized detailing work.
              </p>
            </div>
            
            <div className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 transition-colors mt-0.5 ${
              selectedServices.includes("custom") ? "bg-primary border-primary" : "border-border/80 bg-background"
            }`}>
              {selectedServices.includes("custom") && <Check className="w-3.5 h-3.5 text-white" />}
            </div>
          </button>
        </div>
      </motion.div>

      {/* 04: LOCATION & PREFERRED DATE */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5 pt-2 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30 tracking-wider">
            04
          </span>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
            LOCATION & PREFERRED DATE
          </h3>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="space-y-2">
            <label htmlFor="address" className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Full Service Address *
            </label>
            <input 
              required 
              id="address" 
              name="address" 
              type="text" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full h-13 px-4 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50" 
              placeholder="e.g. 123 Main St, Indianapolis, IN 46201" 
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-primary" /> Preferred Service Date
            </label>
            <CustomCalendar 
              selectedDate={formData.preferredDate} 
              onSelectDate={(dateStr) => setFormData(prev => ({ ...prev, preferredDate: dateStr }))} 
            />
          </div>
        </div>

        <p className="text-[11px] text-muted-foreground/80 flex items-center gap-1.5 pt-1">
          <Sparkles className="w-3 h-3 text-primary shrink-0" /> We bring our fully equipped mobile detailing setup directly to your home or office.
        </p>
      </motion.div>

      {/* 05: ADDITIONAL DETAILS */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5 pt-2 border-t border-border/50"
      >
        <div className="flex items-center gap-3">
          <span className="text-xs font-extrabold px-2.5 py-1 rounded-md bg-primary/15 text-primary border border-primary/30 tracking-wider">
            05
          </span>
          <h3 className="text-sm font-extrabold uppercase tracking-widest text-muted-foreground">
            TELL US A LITTLE MORE
          </h3>
        </div>

        <div className="space-y-2">
          <textarea 
            id="details" 
            name="details" 
            value={formData.details} 
            onChange={handleChange} 
            rows={4}
            className="w-full px-4 py-3 rounded-xl bg-secondary/50 border border-border/80 focus:border-primary focus:bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200 text-foreground font-medium placeholder:text-muted-foreground/50 resize-none text-sm leading-relaxed" 
            placeholder="Tell us about stains, pet hair, odors, heavy dirt, or anything else we should know..." 
          />
        </div>
      </motion.div>

      {/* Primary CTA */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="pt-4"
      >
        <Button 
          type="submit" 
          size="lg" 
          className="w-full h-15 rounded-2xl text-base font-extrabold tracking-wider uppercase shadow-xl shadow-primary/25 hover:scale-[1.01] hover:-translate-y-0.5 active:scale-[0.99] transition-all duration-200 group cursor-pointer" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Processing Quote...
            </>
          ) : (
            <span className="flex items-center justify-center gap-2">
              REQUEST MY QUOTE
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          )}
        </Button>
        
        <p className="text-[11px] text-center text-muted-foreground mt-4 font-medium">
          By submitting this request, our detailing specialists will review your vehicle specs and contact you with exact pricing and scheduling options.
        </p>
      </motion.div>

    </form>
  );
}
