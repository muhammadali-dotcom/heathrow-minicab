import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // AVIF for browsers that support it (about 20% smaller than WebP), WebP otherwise; optimised
  // images are cached for 7 days instead of the 4-hour default.
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 604800,
  },
  // Only the canonical domain (www.heathrowminicab.uk) should be indexed; keep preview
  // deployment URLs on vercel.app out of search results so they can't compete with it.
  headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.*)\\.vercel\\.app" }],
        headers: [{ key: "X-Robots-Tag", value: "noindex" }],
      },
    ];
  },
  // The per-terminal pages were merged into the Terminal Guides directory.
  redirects() {
    return [
      // The production vercel.app address forwards to the real domain. Only this exact host,
      // so preview deployments (other *.vercel.app hosts) keep working for testing.
      {
        source: "/:path*",
        has: [{ type: "host", value: "heathrow-minicab.vercel.app" }],
        destination: "https://www.heathrowminicab.uk/:path*",
        permanent: true,
      },
      ...["2", "3", "4", "5"].map((n) => ({
        source: `/airport-transfers/terminal-${n}`,
        destination: "/airport-transfers/terminal-guides",
        permanent: true,
      })),
      // Online booking happens on the hosted web booker.
      {
        source: "/book",
        destination: "https://www.bittacycars.com/booking",
        permanent: false,
      },
      // The Services overview was removed; the menu opens the service pages directly.
      {
        source: "/services",
        destination: "/services/family-group-transfers",
        permanent: true,
      },
      // Renamed service page.
      {
        source: "/services/business-airport-travel",
        destination: "/services/executive-business-travel",
        permanent: true,
      },
      // Child seats now live on the Family & Group page.
      {
        source: "/services/child-seats",
        destination: "/services/family-group-transfers#child-seats",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
