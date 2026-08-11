import { services } from "./services";

export const pricingPackages = services.map(service => ({
  id: service.id,
  name: service.name,
  price: service.startingPrice,
  duration: service.duration,
  features: service.includes,
  recommended: service.slug === "full-detail",
}));

export const addOns = [
  {
    id: "pet-hair",
    name: "Pet Hair Removal",
    price: 40,
    description: "Extensive removal of embedded pet hair from carpets and seats.",
  },
  {
    id: "headlight-restoration",
    name: "Headlight Restoration",
    price: 60,
    description: "Restore clarity to yellowed or foggy headlights.",
  },
  {
    id: "engine-cleaning",
    name: "Engine Bay Cleaning",
    price: 50,
    description: "Safe degreasing and dressing of engine bay components.",
  },
  {
    id: "seat-extraction",
    name: "Shampoo & Extraction",
    price: 75,
    description: "Deep hot water extraction for heavily soiled seats and carpets.",
  },
];
