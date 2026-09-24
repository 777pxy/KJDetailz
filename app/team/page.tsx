import type { Metadata } from "next";
import Image from "next/image";
import { AwardBadge } from "@/app/components/award-badge";
import { ContactBanner } from "@/app/components/contact-banner";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "Meet the people behind every KJ Detailz mobile valet and detail across Dorset, Wiltshire, Hampshire & Somerset.",
  alternates: { canonical: "/team" },
};

const team = [
  {
    name: "Kieran Jackson",
    role: "Founder & Lead Detailer",
    bio: [
      "Hi, I'm Kieran, the owner of KJ Detailz.",
      "At 20 years old, I have gained hands-on experience valeting and detailing a wide range of vehicles, working with both dealerships and private customers. From cars and vans to caravans and motorhomes, I take pride in delivering high-quality results every time.",
      "Having lived in Dorset my whole life, I founded KJ Detailz to provide a reliable, professional mobile valeting and detailing service across the local area. I'm fully insured, giving you complete peace of mind when trusting me with your vehicle.",
      "I've always had a passion for vehicles and keeping them looking their best. My aim is simple: to treat every vehicle with the same care and attention as if it were my own, leaving it looking its absolute best.",
      "My passion and attention to detail has led to my business growing and being held to such high standards that I have been awarded the title Blandford's Young Entrepreneur of the year 2026.",
    ],
    credentials: [
      "Founder & Lead Detailer",
      "Fully insured",
      "Dorset-based",
      "Cars, vans, caravans & motorhomes",
      "Blandford Young Entrepreneur 2026",
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <section className="border-b border-border px-4 pb-16 pt-[110px] md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
            The Team
          </p>
          <h1 className="max-w-xl font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.06] text-foreground">
            The people behind every detail.
          </h1>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          {team.map((member) => (
            <div
              key={member.name}
              className="grid grid-cols-1 gap-14 lg:grid-cols-2 xl:gap-20"
            >
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: "4/5" }}
              >
                <Image
                  src="/founder_hero_image.jpg"
                  alt={member.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 650px"
                  className="object-cover"
                  style={{ objectPosition: "center 0%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/18 to-transparent" />
                <div className="absolute bottom-2 right-2 hidden lg:block">
                  <AwardBadge />
                </div>
              </div>

              <div className="flex flex-col justify-center lg:py-4">
                <div className="mb-8 h-px w-8 bg-primary" />
                <h2 className="mb-1.5 font-serif text-4xl leading-snug text-foreground md:text-5xl">
                  {member.name}
                </h2>
                <p className="mb-8 text-[11px] uppercase tracking-[0.22em] text-primary">
                  {member.role}
                </p>
                {member.bio.map((para, pi) => (
                  <p
                    key={pi}
                    className="mb-4 text-sm leading-relaxed text-foreground/55 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
                <div className="mt-8">
                  <p className="mb-4 text-[10px] uppercase tracking-[0.22em] text-foreground/25">
                    Credentials
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.credentials.map((cred) => (
                      <span
                        key={cred}
                        className="border border-white/8 px-4 py-1.5 text-xs tracking-[0.08em] text-foreground/50"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ContactBanner />
    </>
  );
}
