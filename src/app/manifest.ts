import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: "Heathrow airport transfers",
    start_url: "/",
    display: "browser",
    background_color: "#FFFFFF",
    theme_color: "#0A2740",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
