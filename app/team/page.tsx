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
    bio: "With 2 years of experience in automotive detailing across a range of different vehicles, Kieran founded KJ Detailz to bring quality valet care to Dorset. His passion for perfection, attention to detail, and customer care has led him to be nominated for Blandford's Young Entrepreneur of the Year 2026.",
  },
];

export default function TeamPage() {
  return (
    <section className="min-h-screen px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12 text-center md:mb-20">
          <h1 className="mb-4 font-serif text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
            The Team
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Passionate about every detail
          </p>
        </div>

        <div className="flex justify-center">
          {team.map((member) => (
            <article key={member.name} className="flex w-full max-w-sm flex-col">
              <div className="group relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted md:mb-6">
                <Image
                  src="/founder_image.jpg"
                  alt="Kieran Jackson"
                  fill
                  sizes="(max-width: 768px) 100vw, 384px"
                  className="object-cover transition-transform duration-500 scale-[1.35] group-hover:scale-[1.42]"
                  style={{
                    objectPosition: "center 8%",
                    transformOrigin: "center 40%",
                  }}
                />
                <div className="pointer-events-none absolute bottom-0 inset-x-0 h-16 rounded-b-lg bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <h2 className="mb-2 font-serif text-xl font-bold md:text-2xl">
                {member.name}
              </h2>
              <div className="mb-4 h-[2px] w-16 bg-primary" />
              <p className="mb-4 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed text-foreground/90 md:text-base">
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
