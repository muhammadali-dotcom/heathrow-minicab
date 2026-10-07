import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

// Canonical origin for sitemap, robots, canonical links and structured data. Override with
// NEXT_PUBLIC_SITE_URL (e.g. for a staging domain); no trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://heathrowminicab.uk").replace(
  /\/$/,
  "",
);

// When the site's content was last reviewed: page dateModified and sitemap lastModified.
// Bump it after meaningful content changes.
export const CONTENT_UPDATED = "2026-10-07";

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

// The homepage's title and description, also the sitewide defaults in the root layout.
export const HOME_SEO = {
  title: "Heathrow Minicab | Heathrow Airport Transfers 24/7",
  description:
    "Heathrow minicab and airport transfers from North and West London. Fixed prices once confirmed, flight monitoring and name-board meet in arrivals.",
  path: "/",
};

// Title, description, canonical and share tags for one page.
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: "en_GB",
      url: path,
      title,
      description,
    },
    twitter: { card: "summary_large_image", title, description },
  };
}
