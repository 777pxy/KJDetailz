import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call or follow KJ Detailz to book a valet or detail.",
};

const contactMethods = [
  {
    icon: Phone,
    label: "Phone",
    detail: process.env.PHONE_NUMBER ?? "—",
    sub: "Mon – Sat, 9:00 AM – 6:00 PM",
    href: `tel:${process.env.PHONE_NUMBER}`,
    cta: "Call now",
  },
  {
    icon: FaFacebook,
    label: "Facebook",
    detail: "KJ Detailz",
    sub: "Message us or see our latest work",
    href: process.env.FACEBOOK_LINK,
    cta: "Open Facebook",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    detail: "@kjdetailz",
    sub: "Before & afters, tips, and updates",
    href: process.env.INSTAGRAM_LINK,
    cta: "Open Instagram",
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen px-4 py-16 md:px-8 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        {/* Header */}
        <div className="mb-14 md:mb-20">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Let&apos;s get your <br className="hidden md:block" />
            vehicle booked in.
          </h1>
        </div>

        {/* Contact cards */}
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
          {contactMethods.map(
            ({ icon: Icon, label, detail, sub, href, cta }) => (
              <a
                key={label}
                href={href}
                target={label !== "Phone" ? "_blank" : undefined}
                rel={label !== "Phone" ? "noopener noreferrer" : undefined}
                className="group flex flex-col rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/50 hover:bg-card/80 md:p-8"
              >
                <Icon
                  className="mb-5 text-primary md:size-8"
                  aria-hidden="true"
                  size={28}
                />
                <p className="mb-1 text-xs uppercase tracking-[0.15em] text-muted-foreground">
                  {label}
                </p>
                <p className="mb-1 font-serif text-xl font-bold md:text-2xl">
                  {detail}
                </p>
                <p className="mb-6 text-xs leading-relaxed text-muted-foreground md:text-sm">
                  {sub}
                </p>
                <span className="mt-auto text-xs font-semibold uppercase tracking-wider text-primary transition-opacity duration-200 group-hover:opacity-70">
                  {cta} →
                </span>
              </a>
            ),
          )}
        </div>

        {/* Divider */}
        <div className="mb-16 h-[1px] w-full bg-border" />

        {/* Blurb */}
        <div className="max-w-[640px]">
          <p className="mb-5 text-base leading-relaxed text-foreground/85 md:text-lg">
            Based in Dorset, KJ Detailz provides professional mobile valeting
            and detailing services, bringing premium vehicle care directly to
            your home or workplace. Whether your vehicle needs a quick refresh
            or a complete transformation, we deliver outstanding results with
            attention to every detail.
          </p>
          <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
            Fully insured, reliable, and passionate about what we do, we’re
            committed to leaving your vehicle looking its absolute best. Get in
            touch today to book your appointment and give your vehicle the care
            it deserves.
          </p>
        </div>
      </div>
    </section>
  );
}
