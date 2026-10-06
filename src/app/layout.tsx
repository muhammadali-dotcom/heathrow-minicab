import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteJsonLd } from "@/components/JsonLd";
import MobileCallBar from "@/components/MobileCallBar";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE_URL, pageMetadata } from "@/lib/seo";
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
  ...pageMetadata({
    title: "Heathrow Minicab | Heathrow Airport Transfers 24/7",
    description:
      "Heathrow minicab and airport transfers from North and West London. Fixed prices once confirmed, flight monitoring and name-board meet in arrivals.",
    path: "/",
  }),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteJsonLd />
        <SiteHeader />
        <main className="flex-1 overflow-x-clip">{children}</main>
        <SiteFooter />
        <MobileCallBar />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
