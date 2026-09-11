import type { Metadata } from "next";
import { Suspense } from "react";
import { PremiumServicesSection } from "../components/premium-services-section";
import { AwardBadge } from "@/app/components/award-badge";
import { ContactBanner } from "@/app/components/contact-banner";

export const metadata: Metadata = {
  title: "Premium Services",
  description:
    "Bespoke, top-tier mobile valeting and detailing from KJ Detailz across Dorset, Wiltshire, Hampshire & Somerset, for owners who expect the very best.",
  alternates: { canonical: "/premium-services" },
};

const processSteps = [
  {
    step: "01",
    title: "Initial Enquiry",
    desc: "Contact us via WhatsApp or call to describe your vehicle, its condition, and what you have in mind.",
  },
  {
    step: "02",
    title: "Vehicle Assessment",
    desc: "We assess the paint and cabin in person before providing a tailored quote — no surprises.",
  },
  {
    step: "03",
    title: "Treatment Day",
    desc: "We arrive at your location with all equipment and complete the treatment to a pre-agreed specification.",
  },
];

export default function PremiumServicesPage() {
  return (
    <>
      <section className="border-b border-border px-4 pb-20 pt-[110px] md:px-8">
        <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
              Premium Services
            </p>
            <h1 className="max-w-3xl font-serif text-[clamp(2.4rem,6vw,5.5rem)] leading-[1.04] text-foreground">
              Bespoke treatments for the discerning owner.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/45">
              Each Premium Service is approached as a bespoke commission.
              Scoped in person. Quoted individually. Applied with precision.
            </p>
          </div>
          <div className="hidden shrink-0 lg:block">
            <AwardBadge />
          </div>
        </div>
      </section>

      <section className="px-4 py-4 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Suspense>
            <PremiumServicesSection />
          </Suspense>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-20 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-14 text-center text-[11px] uppercase tracking-[0.32em] text-primary">
            How It Works
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {processSteps.map((item) => (
              <div key={item.step} className="flex gap-6">
                <span className="select-none font-serif text-6xl leading-none text-primary/22">
                  {item.step}
                </span>
                <div className="pt-2">
                  <h3 className="mb-2.5 text-xs uppercase tracking-[0.15em] text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/42">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBanner
        heading="Ready for a bespoke treatment?"
        subtext="All Premium Services are individually quoted. Get in touch to discuss your vehicle."
        cta="Enquire Now"
      />
    </>
  );
}
