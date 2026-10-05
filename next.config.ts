import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The per-terminal pages were merged into the Terminal Guides directory.
  redirects() {
    return ["2", "3", "4", "5"].map((n) => ({
      source: `/airport-transfers/terminal-${n}`,
      destination: "/airport-transfers/terminal-guides",
      permanent: true,
    }));
  },
};

export default nextConfig;
