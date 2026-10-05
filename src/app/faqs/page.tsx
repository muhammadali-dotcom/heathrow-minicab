import type { Metadata } from "next";
import Faqs from "@/components/Faqs";
import PageBanner from "@/components/PageBanner";

export const metadata: Metadata = { title: "FAQs | Heathrow Minicab" };

export default function Page() {
  return (
    <>
      <PageBanner image="t3" crumb="FAQs" eyebrow="FAQs" title="Questions before you book" />
      <Faqs showHeader={false} />
    </>
  );
}
