import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { getImagesForGallery, getPremiumServices } from "@/app/_data/sanity/queries";
import { urlFor } from "@/src/sanity/sanity";
import { serviceAreaCounties } from "@/lib/seo/service-areas";
import ReviewsSection from "@/app/components/review-section";
import GallerySection from "@/app/components/gallery-section";
import { AwardBadge } from "@/app/components/award-badge";
import { ContactBanner } from "@/app/components/contact-banner";

export const metadata: Metadata = {
  title: "KJ Detailz",
  description:
    "Premium mobile car valeting and detailing serving Dorset, Wiltshire, Hampshire & Somerset — from Bournemouth and Poole to Salisbury and Wincanton.",
  alternates: { canonical: "/" },
};

const trustSignals = [
  {
    label: "Based in Dorset",
    sub: "Serving Dorset, Wiltshire, Hampshire & Somerset",
  },
  {
    label: "Fully Insured",
    sub: "Complete peace of mind on every job",
  },
  {
    label: "Trusted by KPC Leisure LTD",
    sub: "Commercial fleet partner",
  },
  {
    label: "Blandford Young Entrepreneur 2026",
    sub: "Recognised excellence",
  },
];

async function PremiumPreview() {
  const [services, galleryImages] = await Promise.all([
    getPremiumServices(),
    getImagesForGallery(),
  ]);

  if (services.length === 0) {
    return (
      <p className="text-sm leading-relaxed text-foreground/45">
        Our premium services are being finalised — get in touch to discuss a
        bespoke package for your vehicle.
      </p>
    );
  }

  return (
    <div className="mb-8 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
      {services.slice(0, 4).map((service, i) => {
        const image =
          galleryImages.length > 0
            ? galleryImages[i % galleryImages.length]
            : undefined;

        return (
          <Link
            key={service._id}
            href={`/premium-services#${service._id}`}
            className="group relative block overflow-hidden text-left"
            style={{ aspectRatio: "3/4" }}
          >
            {image?.image ? (
              <Image
                src={urlFor(image.image).width(600).height(800).quality(80).format("webp").url()}
                alt={image.image_name ?? service.service_name ?? ""}
                fill
                sizes="(max-width: 1024px) 50vw, 330px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 bg-card" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-5">
              <div className="mb-3 h-px w-6 bg-primary transition-all duration-500 group-hover:w-10" />
              <h3 className="font-serif text-base leading-snug text-foreground md:text-lg">
                {service.service_name}
              </h3>
              {service.description ? (
                <p className="mt-1 line-clamp-2 text-[11px] leading-tight text-foreground/45">
                  {service.description}
                </p>
              ) : null}
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default async function Home() {
  return (
    <>
      {/* Hero: premium services showcase */}
      <section className="px-4 pb-10 pt-14 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 flex items-start justify-between">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
                Premium Services
              </p>
              <h1 className="font-serif text-[clamp(2.6rem,6vw,5.5rem)] leading-[1.04] text-foreground">
                Detailing as it
                <br />
                should be done.
              </h1>
            </div>
            <div className="hidden pt-2 md:block">
              <AwardBadge />
            </div>
          </div>

          <Suspense fallback={<div className="mb-8 h-64" />}>
            <PremiumPreview />
          </Suspense>

          <div className="flex items-center justify-between">
            <Link
              href="/premium-services"
              className="flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary transition-colors duration-200 hover:text-[#d4b06d]"
            >
              View All Premium Services <span className="text-base leading-none">→</span>
            </Link>
            <p className="hidden text-[11px] tracking-wide text-foreground/25 md:block">
              Award-winning mobile detailing · Dorset &amp; surrounding counties
            </p>
          </div>
        </div>
      </section>

      {/* Split screen: Team / Services */}
      <section className="px-4 py-2 md:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-2.5 md:grid-cols-2">
          <Link
            href="/team"
            className="group relative block overflow-hidden text-left"
            style={{ minHeight: 420 }}
          >
            <Image
              src="/founder_hero_image1.jpg"
              alt=""
              aria-hidden="true"
              fill
              sizes="(max-width: 768px) 100vw, 660px"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-background/55" />
            <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-primary">
                Meet the team
              </p>
              <h2 className="font-serif text-3xl leading-snug md:text-4xl">
                The people
                <br />
                behind the detail.
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/50">
                Hands-on experience across cars, vans, caravans and motorhomes
                — applied to every vehicle we touch.
              </p>
              <span className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary">
                Our story <span>→</span>
              </span>
            </div>
          </Link>

          <Link
            href="/services"
            className="group relative block overflow-hidden bg-card text-left"
            style={{ minHeight: 420 }}
          >
            <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 border border-white/4" />
            <div className="pointer-events-none absolute right-11 top-11 h-28 w-28 border border-white/4" />
            <div className="relative flex h-full flex-col justify-end p-8 md:p-10">
              <p className="mb-2 text-[11px] uppercase tracking-[0.28em] text-primary">
                All services
              </p>
              <h2 className="font-serif text-3xl leading-snug md:text-4xl">
                Full range of
                <br />
                detailing packages.
              </h2>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-foreground/50">
                From a thorough mini valet to full paint correction — every
                vehicle, every budget, no compromise on quality.
              </p>
              <span className="mt-6 flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-primary">
                View services <span>→</span>
              </span>
            </div>
          </Link>
        </div>
      </section>

      <Suspense fallback={<div className="h-64" />}>
        <ReviewsSection />
      </Suspense>

      {/* Trust signals */}
      <section className="border-y border-border px-4 py-16 md:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map((item) => (
            <div key={item.label} className="flex items-start gap-5">
              <div className="flex size-10 shrink-0 items-center justify-center border border-primary/28">
                <span className="text-primary">✓</span>
              </div>
              <div>
                <h3 className="mb-2 text-xs uppercase tracking-[0.15em] text-foreground">
                  {item.label}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/42">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service area banner */}
      <Link
        href="/areas"
        className="relative block w-full overflow-hidden px-4 py-24 text-left md:px-8"
      >
        <div className="absolute inset-0 bg-[#0c0c0c]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #c4a05d 1px, transparent 1px), linear-gradient(to bottom, #c4a05d 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] text-center">
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-primary">
            Coverage Area
          </p>
          <h2 className="mb-5 font-serif text-[clamp(2rem,5vw,4rem)] text-foreground">
            We come to you, wherever you are.
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-foreground/45 md:text-base">
            Mobile detailing across Dorset, Wiltshire, Hampshire and Somerset.
          </p>
          <div className="mb-10 flex flex-wrap justify-center gap-2.5">
            {serviceAreaCounties.map((county) => (
              <span
                key={county}
                className="border border-white/10 px-5 py-2 text-[11px] uppercase tracking-[0.2em] text-foreground/55"
              >
                {county}
              </span>
            ))}
          </div>
          <span className="flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.22em] text-primary">
            View all covered areas <span>→</span>
          </span>
        </div>
      </Link>

      {/* Gallery */}
      <section className="px-4 py-24 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-10">
            <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-primary">
              Our Work
            </p>
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              The results speak.
            </h2>
          </div>
          <Suspense fallback={<div className="h-64" />}>
            <GallerySection />
          </Suspense>
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
