import type { Metadata } from "next";
import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import { MessageCircle, Phone, PhoneCall } from "lucide-react";
import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message or call KJ Detailz to book a mobile valet or detail across Dorset, Wiltshire, Hampshire & Somerset.",
  alternates: { canonical: "/contact" },
};

const rawPhone = process.env.PHONE_NUMBER ?? "";
// UK local format (e.g. "07933 841 934") -> E.164-ish for wa.me (e.g. "447933841934")
const whatsappNumber = rawPhone.replace(/\D/g, "").replace(/^0/, "44");

type ContactMethod = {
  icon: LucideIcon | typeof FaFacebookMessenger;
  label: string;
  detail: string;
  sub: string;
  href: string;
  cta: string;
  external?: boolean;
};

const messageMethods: ContactMethod[] = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    detail: rawPhone || "—",
    sub: "Fastest way to reach us",
    href: `https://wa.me/${whatsappNumber}`,
    cta: "Message on WhatsApp",
    external: true,
  },
  {
    icon: FaFacebookMessenger,
    label: "Messenger",
    detail: "KJ Detailz",
    sub: "Message us on Facebook",
    href: process.env.FACEBOOK_LINK ?? "#",
    cta: "Message on Facebook",
    external: true,
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    detail: "@kjdetailz",
    sub: "DM us on Instagram",
    href: process.env.INSTAGRAM_LINK ?? "#",
    cta: "Message on Instagram",
    external: true,
  },
];

const callMethods: ContactMethod[] = [
  {
    icon: Phone,
    label: "Phone",
    detail: rawPhone || "—",
    sub: "Mon - Sat, 9:00 AM - 6:00 PM",
    href: `tel:${rawPhone}`,
    cta: "Call now",
  },
  {
    icon: FaFacebookMessenger,
    label: "Messenger",
    detail: "KJ Detailz",
    sub: "Voice call us on Facebook",
    href: process.env.FACEBOOK_LINK ?? "#",
    cta: "Call via Messenger",
    external: true,
  },
];

function ContactMethodGrid({ methods }: { methods: ContactMethod[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6">
      {methods.map(
        ({ icon: Icon, label, detail, sub, href, cta, external }) => (
          <a
            key={label}
            href={href}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
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
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="px-4 py-16 md:px-8 md:py-28">
        <div className="mx-auto max-w-[1000px]">
          {/* Header */}
          <div className="mb-14 md:mb-20">
            <div className="flex flex-row justify-between">
              <div className="">
                <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Contact
                </p>
                <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                  Let&apos;s get your <br className="hidden md:block" />
                  vehicle booked in.
                </h1>
              </div>
              <div className="relative aspect-square w-32 shrink-0 lg:w-40">
                <Image
                  src="/award_badge.png"
                  alt="Blandford Business Awards Winner 2026 badge"
                  fill
                  sizes="(max-width: 768px) 5rem, (max-width: 1024px) 6rem, 8rem"
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Message us to book */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <MessageCircle
                className="size-6 text-primary md:size-7"
                aria-hidden="true"
              />
              <h2 className="font-serif text-2xl font-bold md:text-3xl">
                Message us to book!
              </h2>
            </div>
            <ContactMethodGrid methods={messageMethods} />
          </div>

          {/* Call us to book */}
          <div className="mb-16">
            <div className="mb-6 flex items-center gap-3">
              <PhoneCall
                className="size-6 text-primary md:size-7"
                aria-hidden="true"
              />
              <h2 className="font-serif text-2xl font-bold md:text-3xl">
                Call us to book!
              </h2>
            </div>
            <ContactMethodGrid methods={callMethods} />
          </div>

          {/* Divider */}
          {/* <div className="mb-16 h-[1px] w-full bg-border" /> */}

          {/* Blurb */}
          {/* <div className="max-w-[640px]">
            <p className="mb-5 text-base leading-relaxed text-foreground/85 md:text-lg">
              Based in Dorset, KJ Detailz provides professional mobile
              valeting and detailing services, bringing premium vehicle care
              directly to your home or workplace. Whether your vehicle needs
              a quick refresh or a complete transformation, we deliver
              outstanding results with attention to every detail.
            </p>
            <p className="text-base leading-relaxed text-foreground/85 md:text-lg">
              Fully insured, reliable, and passionate about what we do,
              we&rsquo;re committed to leaving your vehicle looking its
              absolute best. Get in touch today to book your appointment and
              give your vehicle the care it deserves.
            </p>
          </div> */}
        </div>
      </section>

      {/* Instagram banner */}
      <section className="border-y border-primary/30 bg-[#161008] px-4 py-12 md:px-8 md:py-16">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center gap-6 text-center md:flex-row md:justify-between md:gap-8 md:text-left">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-primary">
              <FaInstagram className="size-5" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                @kjdetailz
              </span>
            </div>
            <h2 className="mb-2 font-serif text-2xl font-bold md:text-3xl lg:text-4xl">
              Follow us for before &amp; afters
            </h2>
            <p className="text-sm text-muted-foreground md:text-base">
              See our latest transformations, tips, and updates on Instagram.
            </p>
          </div>
          <a
            href={process.env.INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 md:text-base"
          >
            <FaInstagram className="size-4 md:size-5" aria-hidden="true" />
            Open Instagram
          </a>
        </div>
      </section>
    </>
  );
}
