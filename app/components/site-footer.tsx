import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Meet the Team" },
  { href: "/contact", label: "Contact" },
];

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border bg-background px-4 pt-8 md:px-8 md:pt-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-6 flex flex-col items-center gap-6 md:mb-8 md:flex-row md:items-center">
          {/* Left */}
          <div className="flex-1 flex justify-center md:justify-start">
            <Image
              src="/KJ_logo_HD.png"
              alt="KJ Detailz"
              width={80}
              height={75}
              className="object-contain"
            />
          </div>

          {/* Centre */}
          <nav
            className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider md:gap-6"
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

          {/* Right */}
          <div className="flex-1 flex justify-center md:justify-end">
            <div className="text-sm flex flex-col items-center md:items-end">
              <div className="text-xs text-muted-foreground md:text-sm">
                All bookings by phone
              </div>
              <a
                href={"tel:" + process.env.PHONE_NUMBER}
                className="mt-1 block font-medium text-foreground transition-colors hover:text-primary"
              >
                {process.env.PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="pt-2 text-xs text-muted-foreground">
            &copy; 2026 KJ Detailz. All rights reserved.
          </div>

          <div className="flex items-center justify-center gap-1 pb-3 text-muted-foreground md:text-sm">
            <span>Website crafted by</span>
            <a
              href={process.env.WEBSITE_CREATOR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-serif italic text-xl text-foreground transition-all duration-300 hover:text-[#00BFD8]"
            >
              Praj Yakha.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
