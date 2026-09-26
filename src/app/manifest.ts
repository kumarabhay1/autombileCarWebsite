import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Detailing Bulls | Mobile Auto Detailing",
    short_name: "Detailing Bulls",
    description: "Premium mobile auto detailing delivered directly to your home or office in Indianapolis & Greenwood, IN.",
    start_url: "/",
    display: "standalone",
    background_color: "#05070a",
    theme_color: "#e11d48",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
