import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Terms | Heathrow Minicab",
    description: "Terms for Heathrow Minicab airport transfers.",
    path: "/terms",
  }),
  // Placeholder page: keep out of search results until it has real content.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ComingSoon image="t2" title="Terms" />;
}
