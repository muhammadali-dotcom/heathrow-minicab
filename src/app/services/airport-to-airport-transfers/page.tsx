import type { Metadata } from "next";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  ComparisonTable,
  NumberedStrip,
  ProblemSolution,
  RouteBoard,
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
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        eyebrow="Airport-to-airport transfers"
        title="Connecting between Heathrow and another London airport."
        intro="We plan your road transfer around both flights, from your arrival airport to your departure terminal."
        primary={{ href: BOOK_ONLINE_HREF, label: "Plan Your Airport Connection" }}
        image={service.image}
      />

      <Section tone="navy" id="worries" title="One trip between two airports, without the hassle">
        <ProblemSolution
          worries={[
            "Hauling luggage across trains and platforms",
            "Working out a route between airports",
            "Worrying about a flight change",
          ]}
          answers={[
            "Your bags are loaded once and stay with you in the car.",
            "A road transfer straight from one terminal to the next.",
            "Tell us if either flight changes and we’ll confirm your arrangements.",
          ]}
        />
      </Section>

      <Section tone="pale" id="compare" title="Public transport or a private transfer?">
        <ComparisonTable
          caption="Public transport and a private transfer compared"
          columns={["Public transport", "Heathrow Minicab"]}
          highlight={1}
          highlightLabel="Door to terminal"
          rows={[
            {
              label: "Luggage",
              values: ["You carry it between stations and platforms", "Loaded once at the kerb"],
            },
            { label: "Changes", values: ["Often one or more", "None, direct by road"] },
            { label: "Timing", values: ["A fixed timetable", "Planned around your flights"] },
            { label: "Cost", values: ["Usually cheaper", "Fare fixed when confirmed"] },
          ]}
        />
      </Section>

      <Section tone="white" id="routes" title="Routes we cover">
        <RouteBoard
          routes={[
            { from: "LHR", to: "LGW", name: "Heathrow and Gatwick", note: "Either direction" },
            { from: "LHR", to: "STN", name: "Heathrow and Stansted", note: "Either direction" },
            { from: "LHR", to: "LTN", name: "Heathrow and Luton", note: "Either direction" },
            { from: "LHR", to: "LCY", name: "Heathrow and London City", note: "Either direction" },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Have these ready"
      >
        <NumberedStrip
          items={[
            "Arrival flight, airport and terminal",
            "Departure flight, airport and terminal",
            "Passengers, suitcases and bags",
            "A mobile number we can reach you on",
          ]}
        />
        <p className="mt-6 max-w-[44rem] rounded-xl border-l-4 border-[#1FA3D6] bg-white px-5 py-4 leading-relaxed text-[#0A2740]">
          Allow time for immigration, baggage, road traffic and your next check-in deadline. We
          can’t control queues or traffic, so leave a comfortable margin.
        </p>
        <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-6`}>
          How Heathrow pickups work <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <ClosingCta
        tone="photo"
        title="Plan Your Airport Connection"
        text="Call or WhatsApp us with both flights and terminals."
        buttonLabel="Call to Book"
        whatsapp
      />
    </>
  );
}
