import type { Metadata } from "next";
import Image from "next/image";
import { serviceAreaCounties, townsByCounty } from "@/lib/seo/service-areas";

export const metadata: Metadata = {
  title: "Areas We Cover",
  description:
    "Mobile car valeting and detailing across Dorset, Wiltshire, Hampshire & Somerset, from Bournemouth and Poole to Salisbury and Wincanton.",
  alternates: { canonical: "/areas" },
};

const countyBlurb: Record<string, string> = {
  Dorset:
    "Home turf for KJ Detailz. We cover Bournemouth, Poole, Christchurch, Ferndown, Wimborne Minster, Verwood, Wareham, Swanage, Dorchester, Weymouth, Sherborne, Sturminster Newton, Stalbridge, Shaftesbury and Gillingham.",
  Hampshire:
    "Just over the border, we regularly cover Ringwood and Fordingbridge on the same mobile visits as our Dorset bookings.",
  Wiltshire:
    "We valet and detail across Salisbury, Wilton and Mere, bringing the same mobile service north of the Dorset border.",
  Somerset:
    "Wincanton and the surrounding area are within easy reach for a fully mobile valet or detail.",
};

export default function AreasPage() {
  return (
    <section className="min-h-screen px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-14 text-center md:mb-20">
          <div className="relative mx-auto aspect-square w-32 shrink-0 lg:w-40">
            <Image
              src="/award_badge.png"
              alt="Blandford Business Awards Winner 2026 badge"
              fill
              sizes="(max-width: 768px) 5rem, (max-width: 1024px) 6rem, 8rem"
              className="object-contain"
            />
          </div>
          <p className="mb-2 pt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Service Area
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight md:mb-6 md:text-5xl lg:text-6xl">
            Areas We Cover
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Fully mobile valeting and detailing across Dorset, Wiltshire,
            Hampshire &amp; Somerset.
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {serviceAreaCounties.map((county) => {
            const towns = townsByCounty(county);

            return (
              <div
                key={county}
                className="rounded-lg border border-border bg-card p-6 md:p-8"
              >
                <h2 className="mb-2 font-serif text-2xl font-bold md:text-3xl">
                  {county}
                </h2>
                <p className="mb-5 text-sm leading-relaxed text-foreground/85 md:text-base">
                  {countyBlurb[county]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {towns.map((area) => (
                    <span
                      key={area.town}
                      className="rounded-md border border-border/60 bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground md:text-sm"
                    >
                      {area.town}{" "}
                      <span className="text-muted-foreground/60">
                        ({area.postcodeDistricts.join(", ")})
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-16 rounded-lg border border-border bg-secondary p-8 text-center md:mt-24 md:p-12">
          <h2 className="mb-4 font-serif text-2xl font-bold md:mb-6 md:text-3xl">
            Don&apos;t see your town listed?
          </h2>
          <div className="flex flex-row mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
            <p className="">Get in touch and we&apos;ll let you know&nbsp;</p>
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
