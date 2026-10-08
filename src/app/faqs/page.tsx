import type { Metadata } from "next";
import Faqs from "@/components/Faqs";
import { WebPageJsonLd } from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { pageMetadata } from "@/lib/seo";

const seo = {
  title: "Heathrow Minicab FAQs | Delays, Waiting & Payment",
  description:
    "Answers about Heathrow pickups and drop-offs: flight delays, meeting your driver, waiting, prices, child seats, vehicles, areas and payment.",
  path: "/faqs",
};

export const metadata: Metadata = pageMetadata(seo);

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <PageBanner image="t3" crumb="FAQs" title="Questions before you book" />
      <Faqs showHeader={false} showAll withSchema />
    </>
  );
}
