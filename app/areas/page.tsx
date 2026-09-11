import type { Metadata } from "next";
import { serviceAreaCounties, townsByCounty } from "@/lib/seo/service-areas";
import { ContactBanner } from "@/app/components/contact-banner";

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
    <>
      <section className="border-b border-border px-4 pb-16 pt-[110px] md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
            Coverage
          </p>
          <h1 className="max-w-xl font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.06] text-foreground">
            Areas we cover.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/45">
            Based near Blandford Forum in Dorset, we travel throughout the
            South West. If you&apos;re unsure whether we cover your area, just
            ask.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 md:grid-cols-2">
          {serviceAreaCounties.map((county) => {
            const towns = townsByCounty(county);

            return (
              <div
                key={county}
                className="border border-border p-8 transition-colors duration-300 hover:border-primary/15"
              >
                <div className="mb-5 h-px w-6 bg-primary" />
                <h2 className="mb-3 font-serif text-3xl text-foreground">
                  {county}
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-foreground/60">
                  {countyBlurb[county]}
                </p>
                <div className="flex flex-wrap gap-2">
                  {towns.map((area) => (
                    <span
                      key={area.town}
                      className="border border-white/7 px-3 py-1.5 text-xs text-foreground/50 transition-all duration-200 hover:border-primary/28 hover:text-foreground/75"
                    >
                      {area.town}{" "}
                      <span className="text-foreground/40">
                        ({area.postcodeDistricts.join(", ")})
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.15em] text-foreground">
              Home Base
            </h3>
            <p className="text-sm leading-relaxed text-foreground/42">
              We&apos;re based near Blandford Forum in Dorset, covering the
              surrounding county as our primary area.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.15em] text-foreground">
              Travel Charge
            </h3>
            <p className="text-sm leading-relaxed text-foreground/42">
              A modest mileage contribution may apply for locations further
              afield — always confirmed before booking.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-xs uppercase tracking-[0.15em] text-foreground">
              Not Sure?
            </h3>
            <p className="mb-4 text-sm leading-relaxed text-foreground/42">
              If your location isn&apos;t listed, just ask. We regularly
              travel outside listed areas for Premium Service bookings.
            </p>
            <a
              href="/contact"
              className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em] text-primary"
            >
              Ask us <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
