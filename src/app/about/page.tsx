import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "About Us | Heathrow Minicab",
    description:
      "About Heathrow Minicab, the 24/7 Heathrow airport transfer service for North and West London.",
    path: "/about",
  }),
  // Placeholder page: keep out of search results until it has real content.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ComingSoon image="t4" title="About Us" />;
}
