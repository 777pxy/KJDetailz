"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact" },
];

function isActiveLink(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-[88px] border-b border-border bg-background px-4 md:px-8">
      <div className="mx-auto flex h-full max-w-[1600px] items-center justify-between">
        <Link href="/" className="inline-flex items-center">
          <Image
            src="/KJ_logo_HD.png"
            alt="KJ Detailz"
            width={120}
            height={75}
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
                className={`relative pb-1 text-sm tracking-wide transition-colors ${
                  active
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-11 items-center justify-center text-foreground transition-colors hover:text-primary md:hidden"
          aria-controls="mobile-navigation"
          aria-expanded={mobileMenuOpen}
          aria-label="Open navigation menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="size-6" aria-hidden="true" />
        </button>
      </div>

      {mobileMenuOpen ? (
        <div
          className="fixed inset-0 z-50 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            type="button"
            className="absolute inset-0 bg-black/60"
            aria-label="Close navigation menu"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div
            id="mobile-navigation"
            className="absolute right-0 top-0 flex h-full w-[min(300px,85vw)] flex-col border-l border-white/10 bg-[#111111] px-8 pb-8 pt-10 shadow-2xl"
          >
            <div className="mb-10 flex items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Image
                  src="/KJ_logo_HD.png"
                  alt="KJ Detailz"
                  width={80}
                  height={75}
                  className="object-contain"
                />
              </Link>
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center text-foreground transition-colors hover:text-primary"
                aria-label="Close navigation menu"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="size-5" aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href, pathname);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center gap-3 rounded-md px-3 py-3 text-base tracking-wide transition-all duration-200 ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {active ? (
                      <span className="h-4 w-1 shrink-0 rounded-full bg-primary" />
                    ) : null}
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="my-8 border-t border-white/10" />


          </div>
        </div>
      ) : null}
    </header>
  );
}
