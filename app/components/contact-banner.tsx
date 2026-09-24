import Link from "next/link";

interface Props {
  heading?: string;
  subtext?: string;
  cta?: string;
}

export function ContactBanner({
  heading = "Ready to transform your vehicle?",
  subtext = "Get in touch to book your mobile valet or detail.",
  cta = "Get In Touch",
}: Props) {
  return (
    <section className="border-t border-border px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div>
          <h2 className="font-serif text-3xl leading-snug text-foreground md:text-4xl">
            {heading}
          </h2>
          <p className="mt-2 text-sm tracking-wide text-muted-foreground">
            {subtext}
          </p>
        </div>
        <Link
          href="/contact"
          className="shrink-0 whitespace-nowrap bg-primary px-7 py-3.5 text-center text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground transition-colors duration-200 hover:bg-[#d4b06d]"
        >
          {cta}
        </Link>
      </div>
    </section>
  );
}
