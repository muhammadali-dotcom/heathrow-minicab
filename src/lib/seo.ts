import type { Metadata } from "next";
import { SITE_NAME } from "@/lib/site";

// Canonical origin for sitemap, robots, canonical links and structured data. Override with
// NEXT_PUBLIC_SITE_URL (e.g. for a staging domain); no trailing slash.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://heathrowminicab.uk").replace(
  /\/$/,
  "",
);

export const absoluteUrl = (path: string) => `${SITE_URL}${path === "/" ? "" : path}`;

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
