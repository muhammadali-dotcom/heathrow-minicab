import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import ComingSoon from "@/components/ComingSoon";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Privacy | Heathrow Minicab",
    description: "How Heathrow Minicab handles your personal information.",
    path: "/privacy",
  }),
  // Placeholder page: keep out of search results until it has real content.
  robots: { index: false, follow: true },
};

export default function Page() {
  return <ComingSoon image="t2" title="Privacy" />;
}
