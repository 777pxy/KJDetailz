import Link from "next/link";
import Image from "next/image";
import { toWhatsAppHref } from "@/lib/phone";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/premium-services", label: "Premium Services" },
  { href: "/team", label: "Our Team" },
  { href: "/areas", label: "Areas We Cover" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  const rawPhone = process.env.PHONE_NUMBER ?? "";

  return (
    <footer className="border-t border-border bg-[#050505] px-4 pb-8 pt-16 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 gap-12 border-b border-border pb-12 md:grid-cols-3">
          <div>
            <Link href="/" className="mb-4 inline-flex items-center">
              <Image
                src="/KJ_logo_HD.png"
                alt="KJ Detailz logo"
                width={80}
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-foreground/35">
              Premium mobile car valeting and detailing, serving Dorset,
              Wiltshire, Hampshire and Somerset.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-foreground/25">
              Pages
            </p>
            <div className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-left text-sm text-foreground/50 transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-foreground/25">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              {rawPhone ? (
                <a
                  href={`tel:${rawPhone}`}
                  className="text-sm text-foreground/50 transition-colors duration-200 hover:text-primary"
                >
                  {rawPhone}
                </a>
              ) : null}
              {rawPhone ? (
                <a
                  href={toWhatsAppHref(rawPhone)}
                  className="text-sm text-foreground/50 transition-colors duration-200 hover:text-primary"
                >
                  WhatsApp
                </a>
              ) : null}
              {process.env.INSTAGRAM_LINK ? (
                <a
                  href={process.env.INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/50 transition-colors duration-200 hover:text-primary"
                >
                  Instagram
                </a>
              ) : null}
              <span className="text-sm text-foreground/30">Dorset, UK</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-foreground/20">
            &copy; 2026 KJ Detailz. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-xs text-foreground/20">
            <span>Fully insured · Award-winning · Dorset, UK · Website by</span>
            <a
              href={process.env.WEBSITE_CREATOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-foreground/40 transition-colors duration-300 hover:text-primary"
            >
              Praj Yakha
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
