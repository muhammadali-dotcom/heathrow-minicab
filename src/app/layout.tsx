import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteJsonLd } from "@/components/JsonLd";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { HOME_SEO, SITE_URL, pageMetadata } from "@/lib/seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Defaults are the homepage's; every other page sets its own title, description and canonical.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...pageMetadata(HOME_SEO),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        <SiteHeader />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
