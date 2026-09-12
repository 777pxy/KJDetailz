"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toWhatsAppHref } from "@/lib/phone";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/premium-services", label: "Premium" },
  { href: "/team", label: "Team" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" },
];

export function isActiveLink(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader({ phone }: { phone?: string }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const rawPhone = phone ?? "";

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled || menuOpen
          ? "border-b border-border bg-background/96 backdrop-blur-sm"
          : "border-b border-transparent bg-background"
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-[1400px] items-center justify-between px-4 md:px-8">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/KJ_logo_HD.png"
            alt="KJ Detailz logo"
            width={96}
            height={60}
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = isActiveLink(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] uppercase tracking-[0.18em] transition-colors duration-200 ${
                  active
                    ? "text-primary"
                    : "text-foreground/55 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-5">
          {rawPhone ? (
            <a
              href={`tel:${rawPhone}`}
              className="hidden text-[11px] uppercase tracking-[0.15em] text-foreground/40 transition-colors duration-200 hover:text-primary md:block"
            >
              {rawPhone}
            </a>
          ) : null}
          <Link
            href="/contact"
            className="hidden border border-primary/60 px-5 py-2 text-[11px] uppercase tracking-[0.18em] text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground md:block"
          >
            Book Now
          </Link>

          <button
            type="button"
            className="-mr-2.5 flex h-11 w-11 flex-col items-center justify-center md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            <span className="flex w-6 flex-col justify-between gap-[7px]">
              <span
                className={`h-0.5 w-full origin-center rounded-full bg-foreground transition-all duration-300 ${
                  menuOpen ? "translate-y-[9px] rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full rounded-full bg-foreground transition-all duration-300 ${
                  menuOpen ? "scale-x-0 opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full origin-center rounded-full bg-foreground transition-all duration-300 ${
                  menuOpen ? "-translate-y-[9px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden transition-all duration-500 md:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav
          className="flex flex-col gap-5 border-t border-border bg-background/98 px-4 py-7"
          aria-label="Mobile primary"
        >
          {navLinks.map((link) => {
            const active = isActiveLink(link.href, pathname);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-xs uppercase tracking-[0.18em] transition-colors ${
                  active ? "text-primary" : "text-foreground/60"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 border-t border-border pt-4">
            {rawPhone ? (
              <a href={`tel:${rawPhone}`} className="text-xs tracking-wide text-foreground/40">
                {rawPhone}
              </a>
            ) : null}
            {rawPhone ? (
              <a
                href={toWhatsAppHref(rawPhone)}
                className="text-xs uppercase tracking-[0.18em] text-primary"
              >
                Book via WhatsApp →
              </a>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
