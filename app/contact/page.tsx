import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { FaFacebookMessenger, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";
import { AwardBadge } from "@/app/components/award-badge";
import { toWhatsAppHref } from "@/lib/phone";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Message or call KJ Detailz to book a mobile valet or detail across Dorset, Wiltshire, Hampshire & Somerset.",
  alternates: { canonical: "/contact" },
};

const rawPhone = process.env.PHONE_NUMBER ?? "";

type Channel = {
  icon: LucideIcon | typeof FaFacebookMessenger;
  label: string;
  sub: string;
  href: string;
};

const messageChannels: Channel[] = [
  {
    icon: FaWhatsapp,
    label: "WhatsApp",
    sub: "Message directly — fastest response",
    href: toWhatsAppHref(rawPhone),
  },
  {
    icon: FaFacebookMessenger,
    label: "Facebook Messenger",
    sub: "Message via Facebook",
    href: process.env.FACEBOOK_LINK ?? "#",
  },
  {
    icon: FaInstagram,
    label: "Instagram DM",
    sub: "Message via Instagram",
    href: process.env.INSTAGRAM_LINK ?? "#",
  },
];

const callChannels: Channel[] = [
  {
    icon: Phone,
    label: rawPhone || "—",
    sub: "Mon–Sat, 9am–6pm",
    href: `tel:${rawPhone}`,
  },
  {
    icon: FaFacebookMessenger,
    label: "Messenger Voice Call",
    sub: "Call via Facebook Messenger",
    href: process.env.FACEBOOK_LINK ?? "#",
  },
];

function ChannelLink({ icon: Icon, label, sub, href }: Channel) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 border border-border bg-card p-4 transition-all duration-200 hover:border-primary/18 hover:bg-[#151515]"
    >
      <div className="flex size-9 shrink-0 items-center justify-center border border-white/10 transition-colors duration-200 group-hover:border-primary/28">
        <Icon className="size-4 text-primary" aria-hidden="true" />
      </div>
      <div className="flex-1">
        <p className="text-sm text-foreground">{label}</p>
        <p className="mt-0.5 text-xs text-foreground/35">{sub}</p>
      </div>
      <span className="text-sm text-foreground/18 transition-colors duration-200 group-hover:text-primary">
        →
      </span>
    </a>
  );
}

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border px-4 pb-16 pt-[110px] md:px-8">
        <div className="mx-auto flex max-w-[1400px] items-end justify-between gap-8">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-primary">
              Contact
            </p>
            <h1 className="max-w-xl font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[1.06] text-foreground">
              Let&apos;s get your vehicle booked in.
            </h1>
          </div>
          <div className="hidden shrink-0 md:mr-8 md:block">
            <AwardBadge size="clamp(4.5rem, 9vw, 8.5rem)" />
          </div>
        </div>
      </section>

      <section className="px-4 py-20 md:px-8">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-5 md:grid-cols-2">
          <div className="border border-border p-8 md:p-10">
            <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-primary">
              Message to Book
            </p>
            <h2 className="mb-3 font-serif text-3xl text-foreground">
              Send us a message
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-foreground/45">
              The quickest way to book. Send us your vehicle details,
              location, and preferred date — we respond within the hour.
            </p>
            <div className="space-y-2.5">
              {messageChannels.map((ch) => (
                <ChannelLink key={ch.label} {...ch} />
              ))}
            </div>
          </div>

          <div className="border border-border p-8 md:p-10">
            <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-primary">
              Call to Book
            </p>
            <h2 className="mb-3 font-serif text-3xl text-foreground">
              Prefer to speak?
            </h2>
            <p className="mb-8 text-sm leading-relaxed text-foreground/45">
              Happy to discuss your requirements by phone. Calls welcome
              during working hours — leave a message if we&apos;re on a job
              and we&apos;ll call back the same day.
            </p>
            <div className="space-y-2.5">
              {callChannels.map((ch) => (
                <ChannelLink key={ch.label} {...ch} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card px-4 py-16 md:px-8">
        <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.32em] text-primary">
              Follow Our Work
            </p>
            <h2 className="font-serif text-3xl text-foreground">
              See the results before and after.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-foreground/42">
              We post regular before and after shots, behind-the-scenes
              content, and detailing tips.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <a
              href={process.env.INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-foreground/55 transition-all duration-200 hover:border-primary/30 hover:text-primary"
            >
              Instagram
            </a>
            <a
              href={process.env.FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-white/10 px-5 py-3 text-[11px] uppercase tracking-[0.18em] text-foreground/55 transition-all duration-200 hover:border-primary/30 hover:text-primary"
            >
              Facebook
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-10 md:px-8">
        <div className="mx-auto max-w-[1400px]">
          <p className="max-w-2xl text-xs leading-relaxed text-foreground/25">
            KJ Detailz is a fully mobile service based in Dorset. We come to
            your home, workplace, or any suitable location — no need to
            travel. Serving Dorset, Wiltshire, Hampshire and Somerset.
          </p>
        </div>
      </section>
    </>
  );
}
