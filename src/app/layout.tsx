import type { Metadata } from "next";
import { Bebas_Neue, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://detailingbulls.us"),
  title: {
    default: "Detailing Bulls | Mobile Auto Detailing Indianapolis & Greenwood IN",
    template: "%s | Detailing Bulls",
  },
  description: "Premier mobile auto detailing in Indianapolis and Greenwood, IN. We bring our own water, power, and professional ceramic coating & detailing directly to your home or office.",
  keywords: [
    "mobile auto detailing Indianapolis",
    "car detailing Indianapolis IN",
    "mobile car detailing Greenwood IN",
    "ceramic coating Indianapolis",
    "paint correction Indianapolis",
    "interior car detailing near me",
    "mobile car wash Indianapolis",
    "Detailing Bulls"
  ],
  alternates: {
    canonical: "https://detailingbulls.us",
  },
  openGraph: {
    title: "Detailing Bulls | Mobile Auto Detailing Indianapolis & Greenwood IN",
    description: "Professional mobile auto detailing delivered directly to your home or office. Full interior, exterior, ceramic coating, and paint correction.",
    url: "https://detailingbulls.us",
    siteName: "Detailing Bulls",
    images: [
      {
        url: "/images/hero_poster.webp",
        width: 1200,
        height: 630,
        alt: "Detailing Bulls Mobile Detailing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Detailing Bulls | Mobile Auto Detailing Indianapolis & Greenwood IN",
    description: "Professional mobile auto detailing delivered directly to your location. We bring our own water and power.",
    images: ["/images/hero_poster.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google4fbf5f0fc437ffcb",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoDetailing",
  "name": "Detailing Bulls",
  "image": "https://detailingbulls.us/images/hero_poster.webp",
  "@id": "https://detailingbulls.us/#organization",
  "url": "https://detailingbulls.us",
  "telephone": "+13177648886",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Indianapolis",
    "addressRegion": "IN",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 39.7684,
    "longitude": -86.1581
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.instagram.com/detailingbulls_"
  ],
  "areaServed": [
    { "@type": "City", "name": "Indianapolis" },
    { "@type": "City", "name": "Greenwood" }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${manrope.variable} antialiased scroll-smooth`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300 font-sans overflow-x-hidden">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
