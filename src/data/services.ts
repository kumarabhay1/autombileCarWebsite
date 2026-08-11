export type Service = {
  id: string;
  slug: string;
  name: string;
  category: "Detailing" | "Protection" | "Specialty";
  shortDescription: string;
  description: string;
  startingPrice: number;
  duration: string;
  includes: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    id: "full-detail",
    slug: "full-detail",
    name: "Full Detail",
    category: "Detailing",
    shortDescription: "Complete interior and exterior transformation.",
    description: "Our signature service provides a comprehensive clean of both the interior and exterior of your vehicle, returning it to a pristine, showroom-like condition. We come to your location fully equipped.",
    startingPrice: 250,
    duration: "4-6 hours",
    includes: [
      "Thorough exterior hand wash",
      "Wheel and tire deep clean and dressing",
      "Paint decontamination",
      "Premium wax application",
      "Full interior vacuum and dusting",
      "Leather cleaning and conditioning",
      "Interior glass cleaning",
    ],
    benefits: ["Complete vehicle transformation", "Convenient mobile service", "Protects vehicle value"],
  },
  {
    id: "exterior-detailing",
    slug: "exterior-detailing",
    name: "Exterior Detailing",
    category: "Detailing",
    shortDescription: "Restore and protect your vehicle's shine.",
    description: "A meticulous exterior cleaning and protection service that removes dirt, grime, and environmental contaminants while adding a layer of durable protection.",
    startingPrice: 150,
    duration: "2-3 hours",
    includes: [
      "Foam cannon pre-soak",
      "Two-bucket scratch-free hand wash",
      "Wheel barrel and face cleaning",
      "Tire shine application",
      "Spray sealant protection",
      "Exterior glass cleaning",
    ],
    benefits: ["Enhanced gloss and shine", "Protection against elements", "Saves you a trip to the car wash"],
  },
  {
    id: "interior-detailing",
    slug: "interior-detailing",
    name: "Interior Detailing",
    category: "Detailing",
    shortDescription: "Deep cleaning for a fresh, comfortable cabin.",
    description: "We deep clean every surface of your interior, from carpets and seats to dashboard and vents, removing stains, odors, and dust.",
    startingPrice: 150,
    duration: "2-3 hours",
    includes: [
      "Deep vacuuming of all areas",
      "Steam cleaning of plastics and vinyl",
      "Carpet and upholstery spot cleaning",
      "Leather cleaning and conditioning",
      "Interior glass polishing",
      "Odor neutralization",
    ],
    benefits: ["Healthier driving environment", "Stain and odor removal", "Restored interior feel"],
  },
  {
    id: "ceramic-coating",
    slug: "ceramic-coating",
    name: "Ceramic Coating",
    category: "Protection",
    shortDescription: "Long-lasting protection and extreme gloss.",
    description: "A liquid polymer applied to the exterior that chemically bonds with the vehicle's factory paint, creating a layer of protection and an intense hydrophobic effect.",
    startingPrice: 800,
    duration: "1-2 days",
    includes: [
      "Full exterior detail",
      "Single-stage paint correction",
      "Surface prep wipe-down",
      "Multi-year ceramic coating application",
      "Wheel face coating",
    ],
    benefits: ["Years of protection", "Extreme water beading", "Easier maintenance washing"],
  },
];
