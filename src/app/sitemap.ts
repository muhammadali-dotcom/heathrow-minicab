import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

// Indexable pages only. About, Terms and Privacy stay out (and noindex) while they're
// placeholders; /book stays out while it only asks visitors to call.
type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" };

const ENTRIES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/airport-transfers", priority: 0.9, changeFrequency: "monthly" },
  { path: "/airport-transfers/heathrow-pickups", priority: 0.9, changeFrequency: "monthly" },
  { path: "/airport-transfers/heathrow-drop-offs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/airport-transfers/terminal-guides", priority: 0.9, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
  ...SERVICES.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/our-vehicles", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ENTRIES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
