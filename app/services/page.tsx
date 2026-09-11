import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PackagesSection } from "../components/packages-section";
import { ContactBanner } from "@/app/components/contact-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium mobile valeting and detailing services from KJ Detailz, covering Dorset, Wiltshire, Hampshire & Somerset.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  return (
    <>
      <section className="border-b border-border px-4 pb-16 pt-[110px] md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
            Services
          </p>
          <h1 className="max-w-2xl font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.06] text-foreground">
            Detailing packages for every vehicle.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-foreground/45">
            From a thorough mini valet to specialist treatments — transparent
            pricing, no hidden charges. All services are fully mobile; we come
            to you.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Suspense>
            <PackagesSection />
          </Suspense>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-20 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
              Going Further
            </p>
            <h2 className="mb-4 font-serif text-4xl leading-snug text-foreground md:text-5xl">
              Looking for something more bespoke?
            </h2>
            <p className="text-sm leading-relaxed text-foreground/45">
              Our Premium Services tier offers multi-stage paint correction,
              professional ceramic coatings, and full interior restorations —
              each treatment individually scoped and quoted for your specific
              vehicle.
            </p>
          </div>
          <Link
            href="/premium-services"
            className="shrink-0 whitespace-nowrap border border-primary/55 px-7 py-4 text-[11px] uppercase tracking-[0.22em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            View Premium Services
          </Link>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
