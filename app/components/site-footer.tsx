import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col items-start justify-between gap-6 md:mb-8 md:flex-row md:items-center md:gap-8">
          <div className="font-serif text-xl font-bold italic md:text-2xl">
            KJ Detailz
          </div>

          <nav
            className="flex flex-wrap gap-4 text-xs uppercase tracking-wider md:gap-6"
            aria-label="Footer"
          >
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="text-sm">
            <div className="text-xs text-muted-foreground md:text-sm">
              All bookings by phone
            </div>
            <a
              href="tel:07123456789"
              className="mt-1 block font-medium text-foreground transition-colors hover:text-primary"
            >
              07123 456 789
            </a>
          </div>
        </div>

        <div className="text-center text-xs text-muted-foreground">
          &copy; 2025 KJ Detailz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
