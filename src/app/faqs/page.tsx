import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Faqs from "@/components/Faqs";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Heathrow Minicab FAQs | Delays, Waiting & Payment",
    description:
      "Answers about flight delays, meeting your driver at Heathrow, waiting charges, payment and changing your booking.",
    path: "/faqs",
  }),
};

export default function Page() {
  return (
    <>
      <PageBanner image="t3" crumb="FAQs" eyebrow="FAQs" title="Questions before you book" />
      <Faqs showHeader={false} />
    </>
  );
}
