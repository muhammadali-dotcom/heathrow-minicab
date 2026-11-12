import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import PageFaqs from "@/components/PageFaqs";
import { DetailCards } from "@/components/services/ServiceBlocks";
import { Section } from "@/components/transfers/TransferBlocks";
import { GUIDES } from "@/lib/guides";
import { formatDate, pageMetadata } from "@/lib/seo";

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

      <Section
        tone="white"
        id="guides"
        title="Plan your Heathrow journey"
        intro="Heathrow has four terminals, its own rules for dropping off and picking up, and charges that change from time to time. These guides answer the questions we’re asked most often, so you can plan your journey before you book."
      >
        <DetailCards
          items={GUIDES.map((guide) => ({
            label: guide.title,
            hint: `${guide.description} Last checked ${formatDate(guide.lastChecked)}.`,
            link: { href: `/guides/${guide.slug}`, label: "Read the guide" },
          }))}
        />
      </Section>

      <Section tone="pale" id="how-we-check" title="How we keep these guides accurate">
        <div className="mt-3 max-w-[44rem] space-y-3 leading-relaxed text-[#0A2740]/80">
          <p>
            Every airport fact in these guides, such as charges, car parks, meeting points and
            which terminal an airline uses, is checked against Heathrow’s own website or the
            official operator’s site. Each guide lists its sources at the bottom and shows the date
            it was last checked.
          </p>
          <p>
            Airport arrangements do change, so treat the guides as planning help. For your own
            journey, your booking confirmation and your airline are the final word on your terminal
            and meeting point. If anything has changed, tell us when you book and we’ll plan around
            it.
          </p>
        </div>
      </Section>

      {/* The first two questions from each guide, so this list follows the guides. */}
      <PageFaqs
        items={GUIDES.flatMap((guide) => guide.faqs.slice(0, 2))}
        tone="white"
        title="Popular Heathrow questions"
      />
    </>
  );
}
