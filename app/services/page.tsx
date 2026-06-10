import type { Metadata } from "next";
import { Suspense } from "react";
import { PackagesSection } from "../components/packages-section";

export const metadata: Metadata = {
  title: "Services",
  description: "Premium valeting and detailing services from KJ Detailz.",
};

export default async function ServicesPage() {

  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1100px]">

        <div className="mb-12 text-center md:mb-20">
          <h1 className="mb-4 font-serif text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Premium valeting. Honest pricing.
          </p>
        </div>

        <Suspense>
          <PackagesSection/>
        </Suspense>



        <div className="mt-16 rounded-lg border border-border bg-secondary p-8 text-center md:mt-24 md:p-12">
          <h2 className="mb-4 font-serif text-2xl font-bold md:mb-6 md:text-3xl">
            Ready to book?
          </h2>
          <p className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
            Call us today to discuss your requirements and schedule your appointment.
          </p>
          <a
            href={`tel:${process.env.PHONE_NUMBER}`}
            className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-primary/90 md:px-8 md:py-4 md:text-base"
          >
            {process.env.PHONE_NUMBER}
          </a>
        </div>

      </div>
    </section>
  );
}