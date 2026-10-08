import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import ServiceAreas from "@/components/services/ServiceAreas";
import { HOTEL_FAQS } from "@/lib/faqs";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { DetailCards, PathCards, RuleColumns } from "@/components/services/ServiceBlocks";
import {
  Checklist,
  ClosingCta,
  Section,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";

const service = findService("airport-hotel-transfers");
const path = `/services/${service.slug}`;

const seo = {
  title: "Heathrow Hotel Transfers | Airport to Hotel & Back",
  description:
    "Transfers between Heathrow and hotels near the airport, in central London and across North and West London. Book your return at the same time.",
  path,
};

export const metadata: Metadata = pageMetadata(seo);

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <ServiceJsonLd
        name="Heathrow airport and hotel transfers"
        serviceType="Airport transfer"
        description="Transfers between Heathrow and hotels near the airport, in central London and across North and West London."
        path={path}
      />
      <TransfersHero
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        title="Bags packed?"
        titleAccent="Airport or hotel, we’ll take you."
        intro="Tell us your hotel and flight details. We’ll arrange the ride so you can focus on your stay."
        primary={{ href: BOOK_ONLINE_HREF, label: "Arrange Your Transfer" }}
        image={service.image}
      />

      <Section tone="navy" id="journeys" title="Arriving or heading to the airport?">
        <PathCards
          items={[
            {
              from: "Heathrow",
              to: "Hotel",
              text: "Your driver meets you at Heathrow and takes you to your hotel.",
              link: { href: "/airport-transfers/heathrow-pickups", label: "Read the pickup guide" },
            },
            {
              from: "Hotel",
              to: "Heathrow",
              text: "We collect you from your hotel and take you to your departure terminal.",
              link: {
                href: "/airport-transfers/heathrow-drop-offs",
                label: "Read the drop-off guide",
              },
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="hotels" title="Hotels near Heathrow and across London">
        <DetailCards
          items={[
            {
              label: "Heathrow area",
              hint: "Hotels on Bath Road and in Harlington, Hayes and Hounslow, for late arrivals and early departures.",
            },
            {
              label: "Central London",
              hint: "Hotels in Paddington, Kensington, Westminster and King’s Cross.",
            },
            {
              label: "North & West London",
              hint: "Hotels in Ealing, Hendon, Finchley, Mill Hill and the other areas we cover.",
              link: { href: "/areas", label: "See areas we cover" },
            },
          ]}
        />
      </Section>

      <Section tone="white" id="meeting" title="Know where to meet your driver">
        <RuleColumns
          columns={[
            {
              title: "At Heathrow",
              text: "Follow the meeting instructions confirmed with your booking: inside arrivals with a name board, or at the agreed pickup point.",
            },
            {
              title: "At your hotel",
              text: "Give us the full hotel address and agree the entrance or collection point.",
            },
            {
              title: "Coming back?",
              text: "Arrange your return to Heathrow at the same time. Just give us both dates and times.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="booking-checklist" title="Have your hotel and flight details ready">
        <Checklist
          items={[
            "Full hotel name and address",
            "Flight number, terminal and arrival/departure time",
            "Travel date",
            "Collection time, for hotel-to-airport journeys",
            "Number of passengers",
            "Large suitcases and small bags",
            "A mobile number we can reach you on",
            "Return journey details, if needed",
          ]}
        />
      </Section>

      <PageFaqs
        items={HOTEL_FAQS}
        tone="white"
        summary="Heathrow hotel transfers run between Heathrow and hotels near the airport, in central London and across North and West London, in either direction, with returns bookable together."
      />

      <ServiceAreas tone="pale" />

      <ClosingCta
        tone="photo"
        title="Your hotel journey, arranged"
        text="Tell us where you’re staying and when you’re flying."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like to arrange a transfer between Heathrow and my hotel."
      />
    </>
  );
}
