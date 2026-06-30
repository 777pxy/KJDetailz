import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Meet the Team",
  description: "Meet the people behind every KJ Detailz valet and detail.",
};

const team = [
  {
    name: "Kieran Jackson",
    role: "Founder & Lead Detailer",
    initials: "KJ",
    bio: `Hi, I'm Kieran, the owner of KJ Detailz.

At 20 years old, I have gained hands-on experience valeting and detailing a wide range of vehicles, working with both dealerships and private customers. From cars and vans to caravans and motorhomes, I take pride in delivering high-quality results every time.

Having lived in Dorset my whole life, I founded KJ Detailz to provide a reliable, professional mobile valeting and detailing service across the local area. I'm fully insured, giving you complete peace of mind when trusting me with your vehicle.

I've always had a passion for vehicles and keeping them looking their best. My aim is simple: to treat every vehicle with the same care and attention as if it were my own, leaving it looking its absolute best.

My passion and attention to detail has led to my business growing and being held to such high standards that I have been awarded the title Blandford's Young Entrepreneur of the year 2026.`,
  },
];

export default function TeamPage() {
  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        {/* Page header — sits above the grid, full width */}
        <div className="mb-12 md:mb-16">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            The Team
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Meet the people behind <br className="hidden md:block" />
            every detail.
          </h1>
        </div>

        {team.map((member) => (
          <article
            key={member.name}
            className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_3fr] md:gap-16 lg:gap-24 md:items-start"
          >
            {/* Left — image only */}
            <div
              className="group relative w-full overflow-hidden rounded-lg bg-muted"
              style={{ aspectRatio: "3/4" }}
            >
              <Image
                src="/founder_hero_image.jpg"
                alt="Kieran Jackson"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover transition-transform duration-500 scale-[1.05] group-hover:scale-[1.1]"
                style={{
                  objectPosition: "center 0%",
                  transformOrigin: "center 30%",
                }}
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent rounded-b-lg" />
            </div>

            {/* Right — name/role flush to top, then bio */}
            <div className="flex flex-col">
              <div className="flex flex-row items-start gap-4 justify-between md:gap-6 pb-4">
                <div className="pr-0 md:mb-8 md:pr-4">
                  <h2 className="mb-3 font-serif text-3xl font-bold md:text-4xl">
                    {member.name}
                  </h2>
                  <div className="mb-3 h-0.5 w-12 bg-primary" />
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {member.role}
                  </p>
                </div>
                <div className="relative aspect-square w-20 shrink-0 sm:w-20 md:w-24 lg:w-32">
                  <Image
                    src="/award_badge.png"
                    alt="Award badge"
                    fill
                    sizes="(max-width: 768px) 5rem, (max-width: 1024px) 6rem, 8rem"
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="space-y-5">
                {member.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-[1.85] text-foreground/85 md:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
