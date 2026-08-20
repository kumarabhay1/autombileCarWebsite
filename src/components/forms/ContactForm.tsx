"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/data/services";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleDetails: "",
    service: "",
    address: "",
    details: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Placeholder submission handler
    // In production, wire this up to an API route (e.g. Resend, Sendgrid, Formspree)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    setFormData({
      name: "", phone: "", vehicleDetails: "",
      service: "", address: "", details: "",
    });
  };

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-primary/10 border border-primary/30 text-center"
      >
        <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. We have received your quote request and will contact you shortly to confirm the details and schedule your detailing service.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline">
          Submit Another Request
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.form 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit} 
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Full Name *</label>
          <input required id="name" name="name" type="text" value={formData.name} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John Doe" />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone" className="text-sm font-medium">Phone Number *</label>
          <input required id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="(555) 123-4567" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="vehicleDetails" className="text-sm font-medium">Vehicle Details (Year, Make, Model) *</label>
        <input required id="vehicleDetails" name="vehicleDetails" type="text" value={formData.vehicleDetails} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g. 2022 Porsche 911" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="service" className="text-sm font-medium">Service Needed *</label>
          <select required id="service" name="service" value={formData.service} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground appearance-none">
            <option value="" disabled>Select a service...</option>
            {services.map(s => (
              <option key={s.id} value={s.id}>{s.name}</option>
            ))}
            <option value="other">Other / Custom</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium">Full Service Address *</label>
          <input required id="address" name="address" type="text" value={formData.address} onChange={handleChange} className="w-full h-12 px-4 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="e.g. 123 Main St, Indianapolis, IN 46201" />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="details" className="text-sm font-medium">Additional Details or Condition</label>
        <textarea id="details" name="details" value={formData.details} onChange={handleChange} className="w-full h-32 px-4 py-3 rounded-lg bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Is there excessive pet hair? Heavy staining? Let us know here..." />
      </div>

      <Button type="submit" size="lg" className="w-full h-14 text-lg font-bold shadow-lg shadow-primary/20" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Sending Request...
          </>
        ) : (
          "Request My Quote"
        )}
      </Button>
      
      <p className="text-xs text-center text-muted-foreground mt-4">
        By submitting this form, you request a quote for mobile detailing services. We will contact you to confirm pricing and availability.
      </p>
    </motion.form>
  );
}
