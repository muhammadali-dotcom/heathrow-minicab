import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { absoluteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

// Indexable public pages only, on the canonical domain. No lastmod, changefreq or priority:
// there are no reliable per-page modification dates, and search engines ignore the others.
const PATHS = [
  "/",
  "/airport-transfers",
  "/airport-transfers/heathrow-pickups",
  "/airport-transfers/heathrow-drop-offs",
  "/airport-transfers/terminal-guides",
  "/areas",
  ...AREAS.map((area) => `/areas/${area.slug}`),
  "/services",
  ...SERVICES.map((service) => `/services/${service.slug}`),
  "/our-vehicles",
  "/about",
  "/faqs",
  "/contact",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((path) => ({ url: absoluteUrl(path) }));
}
