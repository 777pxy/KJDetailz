import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { inter, playfair} from "@/src/fonts/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "KJ Detailz",
    template: "%s | KJ Detailz",
  },
  description: "Premium car valeting and detailing based in Dorset.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    className={`${inter.variable} ${playfair.variable}`}
    >
      <body>
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
