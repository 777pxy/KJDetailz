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
              href={"tel:"+process.env.PHONE_NUMBER}
              className="mt-1 block font-medium text-foreground transition-colors hover:text-primary"
            >
              {process.env.PHONE_NUMBER}
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
            <div className="flex items-center justify-center gap-1 text-muted-foreground md:text-sm">
              <span>Website crafted by</span>
              <a href={process.env.WEBSITE_CREATOR_LINK} className="font-serif italic text-foreground text-lg hover:text-accent hover:text-xl transition:all duration-300">Praj Yakha</a>

            </div>
          <div className=" text-xs text-muted-foreground pt-2">
            &copy; 2026 KJ Detailz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
