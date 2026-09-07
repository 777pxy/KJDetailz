import type { Metadata } from "next";
import { Suspense } from "react";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { StructuredData } from "./components/structured-data";
import { inter, playfair } from "@/src/fonts/fonts";
import { Analytics } from "@vercel/analytics/next";
import { SITE_URL } from "@/lib/seo/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KJ Detailz",
    template: "%s | KJ Detailz",
  },
  description:
    "Premium mobile car valeting and detailing serving Dorset, Wiltshire, Hampshire & Somerset.",
  openGraph: {
    type: "website",
    siteName: "KJ Detailz",
    title: "KJ Detailz",
    description:
      "Premium mobile car valeting and detailing serving Dorset, Wiltshire, Hampshire & Somerset.",
    images: ["/hero_services_image.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "KJ Detailz",
    description:
      "Premium mobile car valeting and detailing serving Dorset, Wiltshire, Hampshire & Somerset.",
    images: ["/hero_services_image.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <Suspense fallback={null}>
          <StructuredData />
        </Suspense>
        <Analytics />
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
