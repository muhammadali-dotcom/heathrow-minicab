import type { MetadataRoute } from "next";
import { AREAS } from "@/lib/areas";
import { CONTENT_UPDATED, absoluteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

// Indexable pages only.
type Entry = { path: string; priority: number; changeFrequency: "weekly" | "monthly" };

const ENTRIES: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/airport-transfers", priority: 0.9, changeFrequency: "monthly" },
  { path: "/airport-transfers/heathrow-pickups", priority: 0.9, changeFrequency: "monthly" },
  { path: "/airport-transfers/heathrow-drop-offs", priority: 0.9, changeFrequency: "monthly" },
  { path: "/airport-transfers/terminal-guides", priority: 0.9, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.8, changeFrequency: "monthly" },
  ...AREAS.map((area) => ({
    path: `/areas/${area.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  })),
  ...SERVICES.map((service) => ({
    path: `/services/${service.slug}`,
    priority: 0.8,
    changeFrequency: "monthly" as const,
  })),
  { path: "/our-vehicles", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED);
  return ENTRIES.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
