import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { DetailCards } from "@/components/services/ServiceBlocks";
import { Section } from "@/components/transfers/TransferBlocks";
import { GUIDES } from "@/lib/guides";
import { pageMetadata } from "@/lib/seo";

const seo = {
  title: "Heathrow Travel Guides | Heathrow Minicab",
  description:
    "Practical Heathrow guides: how early to arrive for your flight, the £7 terminal drop-off charge, and which terminal your airline uses.",
  path: "/guides",
};

export const metadata: Metadata = pageMetadata(seo);

// The guides hub: one card per guide. The footer's sitewide booking band closes the page.
export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} type="CollectionPage" />
      <PageBanner
        image="arrival"
        crumb="Guides"
        title="Heathrow travel guides"
        intro="Short, practical answers for planning your journey to and from Heathrow, checked against Heathrow’s own information."
      />

      <Section tone="white" id="guides" title="Plan your Heathrow journey">
        <DetailCards
          items={GUIDES.map((guide) => ({
            label: guide.title,
            hint: guide.description,
            link: { href: `/guides/${guide.slug}`, label: "Read the guide" },
          }))}
        />
      </Section>
    </>
  );
}
