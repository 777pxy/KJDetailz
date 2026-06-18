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

          <div className="mt-4 inline-flex items-center gap-3 rounded-md border border-border/60 bg-muted/40 px-4 py-3 w-fit">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              ✓
            </span>
            <span className="text-xs text-muted-foreground tracking-wide">
              Fully insured · Mobile across Dorset
            </span>
          </div>
        </div>

        <Suspense>
          <PackagesSection />
        </Suspense>

        <div className="flex flex-col items-center mt-16 rounded-lg border border-border bg-secondary p-8 text-center md:mt-24 md:p-12">
          <h2 className="mb-4 font-serif text-2xl font-bold md:mb-6 md:text-3xl">
            Ready to book?
          </h2>
          <div className="flex flex-row mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
            <p className="">Find out how to contact us&nbsp;</p>
            <a
              href="/contact"
              className="text-primary hover:underline hover:text-xl transition-all duration-200"
            >
              here.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
