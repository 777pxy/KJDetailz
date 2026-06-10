import type { Metadata } from "next";
import { Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call KJ Detailz to book a valet or detail.",
};

export default function ContactPage() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4 py-12 md:px-8 md:py-24">
      <div className="mx-auto max-w-[800px] text-center">
        <h1 className="mb-4 font-serif text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
          Get In Touch
        </h1>
        <p className="mb-12 text-lg text-muted-foreground md:mb-16 md:text-xl">
          All bookings are taken over the phone. We keep it personal.
        </p>

        <div className="mb-8 rounded-lg border border-border bg-card p-8 md:mb-12 md:p-16">
          <Phone
            className="mx-auto mb-6 size-12 text-primary md:mb-8 md:size-16"
            aria-hidden="true"
          />
          <a
            href="tel:07123456789"
            className="mb-6 inline-block break-all font-serif text-3xl font-bold text-primary transition-colors hover:text-primary/80 md:mb-8 md:text-5xl lg:text-6xl"
          >
            {process.env.PHONE_NUMBER}
          </a>
          <div className="mx-auto mb-6 h-[2px] w-24 bg-primary md:mb-8" />
          <p className="mb-2 text-xs uppercase tracking-wider text-muted-foreground md:text-sm">
            Available Monday - Saturday
          </p>
          <p className="text-xs text-muted-foreground md:text-sm">
            9:00 AM - 6:00 PM
          </p>
        </div>

        <div className="mx-auto max-w-[600px]">
          <p className="mb-6 text-base leading-relaxed text-foreground/90 md:text-lg">
            Based in Dorset, we provide premium valeting services for local
            drivers who want careful, reliable vehicle care. Whether you need a
            quick refresh or a complete transformation, KJ Detailz is ready to
            bring your vehicle back to its finest.
          </p>
          <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
            We operate on an appointment-only basis to ensure every client
            receives our full attention. Call us to discuss your requirements,
            and we will find a time that works for you.
          </p>
        </div>
      </div>
    </section>
  );
}
