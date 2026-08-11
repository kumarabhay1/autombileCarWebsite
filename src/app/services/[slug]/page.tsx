import { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site";
import { assets } from "@/data/assets";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check, Clock, ChevronRight } from "lucide-react";
import { CTASection } from "@/components/sections/CTASection";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.name} | ${siteConfig.name}`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const imageMap: Record<string, string> = {
    "exterior-detailing": assets.services.exterior,
    "interior-detailing": assets.services.interior,
    "full-detail": assets.services.fullDetail,
    "ceramic-coating": assets.services.ceramicCoating,
  };
  const heroImage = imageMap[service.slug] || assets.services.fullDetail;

  return (
    <>
      <section className="relative h-[60vh] min-h-[500px] flex items-end pb-16 pt-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt={service.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-[#09090b]/80 to-transparent" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex items-center text-sm text-muted-foreground mb-4">
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground">{service.name}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-balance max-w-3xl">
            {service.name}
          </h1>
          <p className="text-xl text-muted-foreground text-balance max-w-2xl mb-8">
            {service.shortDescription}
          </p>
          
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-md border border-white/10">
              <span className="text-muted-foreground text-sm uppercase tracking-wider">Starting at</span>
              <span className="text-2xl font-bold text-primary">${service.startingPrice}</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/80 backdrop-blur-md border border-white/10">
              <Clock className="w-5 h-5 text-muted-foreground" />
              <span className="font-medium text-foreground">{service.duration}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold mb-6">Service Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12">
                {service.description}
              </p>
              
              <h3 className="text-2xl font-bold mb-6">What's Included</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-12">
                {service.includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="sticky top-32 p-8 rounded-2xl bg-card border border-border flex flex-col">
                <h3 className="text-xl font-bold mb-2">Ready to book?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Select this service when requesting your quote and we'll handle the rest.
                </p>
                <Button asChild size="lg" className="w-full mb-4">
                  <Link href={siteConfig.links.quote}>Request a Quote</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href={`https://wa.me/${siteConfig.contact.whatsapp}?text=I'm interested in the ${service.name} service.`} target="_blank" rel="noopener noreferrer">
                    Ask on WhatsApp
                  </a>
                </Button>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm font-semibold mb-4">Service Benefits:</p>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
