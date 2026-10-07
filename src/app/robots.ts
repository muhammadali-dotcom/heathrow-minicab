import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

// Every crawler, search engines and AI assistants included, may read the whole site.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
