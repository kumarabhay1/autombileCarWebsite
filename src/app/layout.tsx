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
  title: "Detailing Bulls | Premium Mobile Auto Detailing",
  description: "Professional mobile auto detailing delivered directly to your location. Premium products, professional results, and a detailing experience built around your convenience.",
  keywords: ["mobile detailing", "auto detailing", "car detailing", "ceramic coating", "paint correction", "we come to you"],
  verification: {
    google: "google4fbf5f0fc437ffcb",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${manrope.variable} antialiased scroll-smooth`} suppressHydrationWarning>
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
