import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, Crown } from "lucide-react";
import { PackagesSection } from "../components/packages-section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Premium mobile valeting and detailing services from KJ Detailz, covering Dorset, Wiltshire, Hampshire & Somerset.",
  alternates: { canonical: "/services" },
};

export default async function ServicesPage() {
  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center md:mb-20">
          <div className="relative mx-auto aspect-square w-32 shrink-0 lg:w-40">
            <Image
              src="/award_badge.png"
              alt="Blandford Business Awards Winner 2026 badge"
              fill
              sizes="(max-width: 768px) 5rem, (max-width: 1024px) 6rem, 8rem"
              className="object-contain"
            />
          </div>
          <h1 className="pt-2 mb-4 font-serif text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
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

        <Link
          href="/premium-services"
          className="group mb-12 flex flex-col items-center justify-between gap-4 rounded-lg border border-primary/40 bg-[#161008] p-6 text-center transition-all duration-300 hover:border-primary sm:flex-row sm:text-left md:mb-16 md:p-8"
        >
          <div className="flex items-center gap-3">
            <Crown className="size-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <p className="font-serif text-lg font-bold md:text-xl">
                Looking for something more exclusive?
              </p>
              <p className="text-sm text-muted-foreground">
                See our Premium Services collection.
              </p>
            </div>
          </div>
          <span className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary">
            View Premium Services
            <ArrowRight
              className="size-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </Link>

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
