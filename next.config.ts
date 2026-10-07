import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Only the canonical domain (heathrowminicab.uk) should be indexed; keep the vercel.app
  // deployment URLs out of search results so they can't compete with it.
  headers() {
    return [
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
