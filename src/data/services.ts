export type Service = {
  id: string;
  slug: string;
  name: string;
  category: "Detailing" | "Specialty" | "Add-On";
  shortDescription: string;
  description: string;
  prices?: {
    sedan: number;
    suv: number;
    truck: number;
  };
  startingPrice?: string;
  callForPricing?: boolean;
  includes: string[];
  benefits: string[];
};

export const services: Service[] = [
  {
    id: "full-interior-exterior-detail",
    slug: "full-interior-exterior-detail",
    name: "Full Interior & Exterior Detail",
    category: "Detailing",
    shortDescription: "The complete transformation.",
    description: "The complete transformation — taking your vehicle from dirty to detailed. Removes dirt, grime & road film and leaves your vehicle looking and smelling amazing.",
    prices: {
      sedan: 180,
      suv: 210,
      truck: 240,
    },
    includes: [
      "Full Interior Detail",
      "Full Exterior Detail",
      "Paint protection with premium wax/sealant",
      "Removes dirt, grime & road film",
      "Leaves your vehicle looking and smelling amazing",
    ],
    benefits: ["Complete vehicle transformation", "Convenient mobile service", "Protects vehicle value"],
  },
  {
    id: "full-interior-detail",
    slug: "full-interior-detail",
    name: "Full Interior Detail",
    category: "Detailing",
    shortDescription: "Deep clean every inch of your interior.",
    description: "Deep clean every inch of your interior for a healthier, fresher ride.",
    prices: {
      sedan: 120,
      suv: 140,
      truck: 160,
    },
    includes: [
      "Thorough vacuum of all areas",
      "Deep clean & condition seats, carpets, and mats",
      "Wipe down & sanitize all interior surfaces",
      "Trunk cleaning & detail",
      "Fresh scent finish",
    ],
    benefits: ["Healthier driving environment", "Stain and odor removal", "Restored interior feel"],
  },
  {
    id: "full-exterior-wash-detail",
    slug: "full-exterior-wash-detail",
    name: "Full Exterior Wash Detail",
    category: "Detailing",
    shortDescription: "Restore your vehicle's shine.",
    description: "Restore your vehicle's shine while helping protect the exterior.",
    prices: {
      sedan: 50,
      suv: 70,
      truck: 90,
    },
    includes: [
      "Hand wash with premium soap",
      "Wax protection",
      "Wheels and tires deep cleaned",
      "Wheel wells cleaned",
      "Windows and mirrors streak-free",
    ],
    benefits: ["Enhanced gloss and shine", "Protection against elements", "Saves you a trip to the car wash"],
  },
  {
    id: "premium-detail",
    slug: "premium-detail",
    name: "Premium Detail",
    category: "Detailing",
    shortDescription: "The ultimate showroom experience.",
    description: "The ultimate showroom experience for those who want nothing but the best.",
    prices: {
      sedan: 240,
      suv: 280,
      truck: 320,
    },
    includes: [
      "Everything included in Full Detail",
      "Clay bar treatment to remove bonded contaminants",
      "Paint enhancement polish for deeper gloss",
      "Steam clean & sanitize all surfaces",
      "Engine bay deep clean",
    ],
    benefits: ["Showroom quality finish", "Deepest level of clean", "Long lasting protection"],
  },
  {
    id: "car-audio-installation",
    slug: "car-audio-installation",
    name: "Car Audio & Lighting Installation",
    category: "Specialty",
    shortDescription: "Custom car audio, starlights & underglow installations.",
    description: "Professional car audio, custom ambient lighting, starlights, stereo, and subwoofer installations for your vehicle.",
    callForPricing: true,
    includes: [
      "Starlights headliner installation",
      "Underglow / underlights lighting",
      "Custom stereo & head unit installation",
      "Speaker & component upgrades",
      "Amplifier wiring & custom tuning",
      "Subwoofer integration",
    ],
    benefits: ["Premium sound & custom lighting", "Professional clean wiring", "Seamless factory integration"],
  },
  {
    id: "pet-hair",
    slug: "pet-hair-removal",
    name: "Pet Hair Removal",
    category: "Add-On",
    shortDescription: "Get every hair out. Every time.",
    description: "Get every hair out. Every time. We use specialized tools to remove embedded pet hair from your vehicle's upholstery and carpets.",
    startingPrice: "$30–$50",
    includes: [
      "Thorough pet hair extraction",
      "Carpet and upholstery brushing",
      "Trunk area included if requested",
    ],
    benefits: ["Allergen reduction", "Restored interior look", "Odor reduction"],
  },
  {
    id: "deep-stain",
    slug: "deep-stain-removal",
    name: "Deep Stain Removal",
    category: "Add-On",
    shortDescription: "Tackle tough stains & spills with care.",
    description: "Tackle tough stains & spills with care. We use professional grade extractors and safe chemicals to lift deep stains from your seats and carpets.",
    startingPrice: "$25–$45",
    includes: [
      "Spot treatment of stains",
      "Hot water extraction",
      "Fabric safe chemicals",
    ],
    benefits: ["Removes unsightly stains", "Prevents permanent damage", "Refreshes fabric"],
  },
  {
    id: "engine-cleaning",
    slug: "engine-bay-cleaning",
    name: "Engine Bay Cleaning",
    category: "Add-On",
    shortDescription: "Degrease, clean & restore like-new.",
    description: "Degrease, clean & restore like-new. We carefully clean the engine compartment and dress plastics for a pristine look.",
    startingPrice: "$50",
    includes: [
      "Safe degreasing of components",
      "Agitation of dirt and grime",
      "Plastic and rubber dressing",
    ],
    benefits: ["Easier to spot leaks", "Higher resale value", "Clean aesthetic"],
  },
  {
    id: "odor-elimination",
    slug: "odor-elimination-treatment",
    name: "Odor Elimination Treatment",
    category: "Add-On",
    shortDescription: "Eliminate odors at the source.",
    description: "Eliminate odors at the source. We use advanced ozone treatment to neutralize smells instead of just masking them.",
    startingPrice: "$40–$60",
    includes: [
      "Ozone generator treatment",
      "Ventilation system flush",
      "Source identification and cleaning",
    ],
    benefits: ["Permanently removes smells", "Sanitizes the air", "Fresh driving experience"],
  },
];
