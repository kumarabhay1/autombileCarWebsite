import { services } from "./services";

export const pricingPackages = services
  .filter(service => service.category !== "Add-On")
  .map(service => ({
    id: service.id,
    name: service.name,
    prices: service.prices,
    callForPricing: service.callForPricing,
    features: service.includes,
    recommended: service.slug === "full-interior-exterior-detail",
  }));

export const addOns = [
  {
    id: "pet-hair",
    slug: "pet-hair-removal",
    name: "Pet Hair Removal",
    priceLabel: "$30–$50",
    description: "Get every hair out. Every time.",
  },
  {
    id: "deep-stain",
    slug: "deep-stain-removal",
    name: "Deep Stain Removal",
    priceLabel: "$25–$45",
    description: "Tackle tough stains & spills with care.",
  },
  {
    id: "engine-cleaning",
    slug: "engine-bay-cleaning",
    name: "Engine Bay Cleaning",
    priceLabel: "$50",
    description: "Degrease, clean & restore like-new.",
  },
  {
    id: "odor-elimination",
    slug: "odor-elimination-treatment",
    name: "Odor Elimination Treatment",
    priceLabel: "$40–$60",
    description: "Eliminate odors at the source.",
  },
];
