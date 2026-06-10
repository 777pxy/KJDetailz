import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Award,
  Handshake,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from 'react'
import ReviewsSection from '@/app/components/review-section'
import GallerySection from "@/app/components/gallery-section";



const trustSignals: {
  Icon: LucideIcon;
  label: string;
  sub: string;
}[] = [
  {
    Icon: MapPin,
    label: "Based in Dorset",
    sub: "Serving the local community",
  },
  {
    Icon: ShieldCheck,
    label: "Fully Insured",
    sub: "Complete peace of mind",
  },
  {
    Icon: Handshake,
    label: "Trusted by KPC Leisure LTD",
    sub: "Commercial fleet partner",
  },
  {
    Icon: Award,
    label: "Nominated for Blandford Young Entrepreneur of the Year",
    sub: "Recognised excellence",
  },
];


export default async function Home() {
  return (
    <>
      <section className="flex min-h-[calc(100vh-88px)] flex-col md:h-[calc(100vh-88px)] md:flex-row">
        <Link
          href="/team"
          className="group relative flex min-h-[50vh] flex-1 flex-col items-center justify-center overflow-hidden bg-[#111111] p-8 transition-all duration-300 hover:brightness-110 md:min-h-0 md:p-12"
        >
          <Image
            src="/founder_image.jpg"
            alt=""
            aria-hidden="true"
            fill
            preload
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 object-cover transition-transform duration-700 scale-[1.35] group-hover:scale-[1.42]"
            style={{
              objectPosition: "center 40%",
              transformOrigin: "center 60%",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10 max-w-md text-center">
            <div className="mb-0 flex h-[7rem] items-end justify-center md:h-[8.5rem] lg:h-[10rem]">
              <h1 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                Meet the Team
              </h1>
            </div>
            <div className="mb-5 mt-3 h-[2px] w-full bg-primary md:mb-6 md:mt-4" />
            <p className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
              The people behind every detail
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground opacity-80 transition-opacity group-hover:opacity-100 md:text-base">
              <span>Our Story</span>
              <ArrowRight className="size-4 md:size-5" aria-hidden="true" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors group-hover:border-primary/30" />
        </Link>

        <div className="hidden w-px shrink-0 bg-primary md:block" />
        <div className="h-px shrink-0 bg-primary md:hidden" />

        <Link
          href="/services"
          className="group relative flex min-h-[50vh] flex-1 flex-col items-center justify-center overflow-hidden bg-[#1a1a1a] p-8 transition-all duration-300 hover:brightness-110 md:min-h-0 md:p-12"
        >
          <Image
            src="/hero_services_image.jpeg"
            alt=""
            aria-hidden="true"
            fill
            preload
            sizes="(max-width: 768px) 100vw, 50vw"
            className="absolute inset-0 object-cover object-center transition-transform duration-700 group-hover:scale-[1.05]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
          <div className="relative z-10 max-w-md text-center">
            <div className="mb-0 flex h-[7rem] items-end justify-center md:h-[8.5rem] lg:h-[10rem]">
              <h2 className="font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
                Available Services
              </h2>
            </div>
            <div className="mb-5 mt-3 h-[2px] w-full bg-primary md:mb-6 md:mt-4" />
            <p className="mb-6 text-base text-muted-foreground md:mb-8 md:text-lg">
              From a refresh to a full transformation
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-foreground opacity-80 transition-opacity group-hover:opacity-100 md:text-base">
              <span>View Services</span>
              <ArrowRight className="size-4 md:size-5" aria-hidden="true" />
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors group-hover:border-primary/30" />
        </Link>
      </section>

      <section className="bg-background px-4 py-12 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="mb-3 font-serif text-3xl font-bold md:mb-4 md:text-4xl lg:text-5xl">
              What Our Clients Say
            </h2>
            <div className="mx-auto h-[2px] w-24 bg-primary" />
          </div>

          <Suspense fallback={<div>Loading reviews...</div>}>
            <ReviewsSection />
          </Suspense>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#111111] px-4 py-12 md:px-8 md:py-20">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 gap-px bg-white/5 sm:grid-cols-2 lg:grid-cols-4">
            {trustSignals.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-start gap-4 bg-[#111111] px-8 py-10 transition-colors duration-200 hover:bg-[#161616]"
              >
                <item.Icon className="size-6 text-primary" aria-hidden="true" />
                <div>
                  <p className="mb-1 font-serif text-[1.05rem] font-semibold leading-snug text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {item.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary px-4 py-12 md:px-8 md:py-24">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-12 text-center md:mb-16">
            <h2 className="font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
              Our Work
            </h2>
          </div>
            <Suspense>
              <GallerySection/>
            </Suspense>
          <p className="text-center text-base text-muted-foreground md:text-lg">
            Every vehicle treated with precision
          </p>
        </div>
      </section>
    </>
  );
}
