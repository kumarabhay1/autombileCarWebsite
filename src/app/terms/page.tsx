import { Metadata } from "next";
import { siteConfig } from "@/data/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Terms of Service | ${siteConfig.name}`,
  description: `Terms of Service for ${siteConfig.name}.`,
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl prose prose-invert prose-primary">
        <h1 className="text-4xl font-extrabold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-muted-foreground mb-8">Last Updated: {new Date().toLocaleDateString()}</p>
        
        <div className="space-y-8 text-foreground/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Service Agreement</h2>
            <p>
              By scheduling a service with {siteConfig.name}, you agree to these terms. We provide professional mobile auto detailing services. A final quote will be provided upon visual inspection of your vehicle before work commences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Mobile Service Requirements</h2>
            <p>
              As a fully mobile service, we require a safe, legal, and adequately sized space to perform our detailing services. While we carry our own water and power, access to a power outlet or water source may be requested in extreme circumstances. We cannot perform services on busy main streets or unsafe public areas.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Personal Items and Valuables</h2>
            <p>
              Please remove all personal items, valuables, and excessive trash from your vehicle prior to our arrival. We are not responsible for any lost or damaged items left inside the vehicle during the detailing process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Cancellations and Rescheduling</h2>
            <p>
              We understand that schedules change. Please notify us at least 24 hours in advance if you need to cancel or reschedule your appointment. Frequent cancellations or no-shows may result in a required deposit for future bookings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Liability</h2>
            <p>
              While we take the utmost care of your vehicle, we are not liable for pre-existing damage, loose interior trim, or weak paint/clear coat that may peel or flake during the normal detailing process.
            </p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border">
          <Link href="/" className="text-primary hover:underline font-medium">
            &larr; Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
