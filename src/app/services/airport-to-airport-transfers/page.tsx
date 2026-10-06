import type { Metadata } from "next";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  DetailCards,
  NumberedStrip,
  RouteBoard,
  SplitChecklist,
} from "@/components/services/ServiceBlocks";
import {
  ClosingCta,
  Section,
  TransfersHero,
  textLink,
} from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";

const service = findService("airport-to-airport-transfers");
const path = `/services/${service.slug}`;

const AIRPORTS = [
  { code: "LGW", name: "Gatwick" },
  { code: "STN", name: "Stansted" },
  { code: "LTN", name: "Luton" },
  { code: "LCY", name: "London City" },
];

export const metadata: Metadata = pageMetadata({
  title: "Heathrow to Gatwick, Stansted, Luton & City Transfers",
  description:
    "Airport-to-airport transfers between Heathrow and Gatwick, Stansted, Luton or London City, planned around both of your flights.",
  path,
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Airport-to-airport transfers"
        serviceType="Airport transfer"
        description="Road transfers between Heathrow and Gatwick, Stansted, Luton or London City airports."
        path={path}
      />
      <TransfersHero
        crumbs={[{ label: "Services" }, { label: service.title }]}
        eyebrow="Airport-to-airport transfers"
        title="Two airports. One easy ride."
        intro="Landing at one airport and flying from another? We’ll help arrange the journey between them."
        primary={{ href: BOOK_ONLINE_HREF, label: "Plan Your Transfer" }}
        image={service.image}
      />

      <Section tone="pale" id="routes" title="Which airports are you travelling between?">
        <RouteBoard
          routes={AIRPORTS.map((airport) => ({
            from: "LHR",
            to: airport.code,
            name: `Heathrow and ${airport.name}`,
            note: `Heathrow → ${airport.name} · ${airport.name} → Heathrow`,
          }))}
        />
      </Section>

      <Section
        tone="navy"
        id="timing"
        title="Leave time for your next flight"
        intro="We plan around both flights, but we can’t guarantee connection times, so leave a comfortable margin."
      >
        <DetailCards
          items={[
            {
              label: "Immigration",
              hint: "Allow time for passport control at your arrival airport.",
            },
            {
              label: "Baggage collection",
              hint: "Collecting checked bags can take time after landing.",
            },
            { label: "Road travel", hint: "Journey times between airports vary with traffic." },
            {
              label: "Next check-in",
              hint: "Check your airline’s check-in and bag-drop deadline for your next flight.",
            },
          ]}
        />
      </Section>

      <Section tone="white" id="how-it-works" title="From arrivals to your next airport">
        <NumberedStrip
          items={[
            "Meet your driver at the confirmed point",
            "Travel directly by road",
            "Arrive at your departure terminal",
          ]}
        />
        <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-6`}>
          Read the pickup guide <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <Section tone="pale" id="booking-checklist" title="Have both flight details ready">
        <SplitChecklist
          groups={[
            {
              title: "Arriving",
              items: ["Airport", "Flight number", "Date and time", "Terminal"],
            },
            {
              title: "Departing",
              items: ["Airport", "Flight number", "Date and time", "Terminal"],
            },
            {
              title: "Your party",
              items: ["Number of passengers", "Large suitcases and small bags", "A mobile number"],
            },
          ]}
        />
      </Section>

      <ClosingCta
        tone="photo"
        title="Let’s plan your airport connection"
        text="Share both flights and we’ll help arrange the transfer."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like to arrange a transfer between Heathrow and another airport."
      />
    </>
  );
}
