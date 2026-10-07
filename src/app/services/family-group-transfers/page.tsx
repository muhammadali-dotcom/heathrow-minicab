import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
import { ComparisonTable, DetailCards, PathCards } from "@/components/services/ServiceBlocks";
import {
  Checklist,
  ClosingCta,
  Section,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

const service = findService("family-group-transfers");
const path = `/services/${service.slug}`;

const GOOD_FOR: Record<string, string> = {
  saloon: "Couples and small families",
  estate: "Families with extra luggage",
  mpv: "Families and groups of up to 6",
  executive: "A more comfortable ride",
};

export const metadata: Metadata = pageMetadata({
  title: "Family & Group Heathrow Transfers | Heathrow Minicab",
  description:
    "Heathrow transfers for families and groups, with MPVs for up to 6 passengers, room for luggage and child seats on request at no extra cost.",
  path,
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Family and group Heathrow transfers"
        serviceType="Airport transfer"
        description="Heathrow airport transfers for families and groups, with vehicles chosen for passengers and luggage."
        path={path}
      />
      <TransfersHero
        crumbs={[{ label: "Services" }, { label: service.title }]}
        eyebrow="Family & group transfers"
        title="Your holiday"
        titleAccent="starts together."
        intro="Bring the family, friends and bags. We’ll help you choose a suitable vehicle for your airport journey."
        primary={{ href: BOOK_ONLINE_HREF, label: "Plan Your Family Transfer" }}
        image={service.image}
      />

      <Section
        tone="navy"
        id="room"
        title="Room for your people and your bags"
        intro="The right vehicle depends on two numbers: how many people are travelling and how much luggage you’re bringing."
      >
        <DetailCards
          items={[
            { label: "Count everyone", hint: "Adults, children and infants all need a seat." },
            {
              label: "Count every bag",
              hint: "Large suitcases and small bags, counted separately.",
            },
            {
              label: "Mention bulky items",
              hint: "Pushchairs, golf bags or anything oversized.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="vehicles" title="Which vehicle fits your group?">
        <ComparisonTable
          caption="Vehicle capacity compared"
          columns={VEHICLES.map((v) => v.name)}
          highlight={VEHICLES.findIndex((v) => v.id === "mpv")}
          highlightLabel="Most room"
          rows={[
            { label: "Example car", values: VEHICLES.map((v) => `${v.model} or similar`) },
            {
              label: "Passengers",
              values: VEHICLES.map((v) => (v.passengers === null ? "On request" : v.passengers)),
            },
            { label: "Large suitcases", values: VEHICLES.map((v) => v.luggage.large) },
            { label: "Small bags", values: VEHICLES.map((v) => v.luggage.small) },
            { label: "Good for", values: VEHICLES.map((v) => GOOD_FOR[v.id]) },
          ]}
        />
        <p className="mt-6 text-[#0A2740]/80">
          Passenger and luggage figures are a guide, not a guarantee that every maximum fits at the
          same time. For the MPV, 6 passengers with several large suitcases may need luggage kept to
          the stated allowance, a larger arrangement, or two vehicles.
        </p>
        <p className="mt-6 text-[#0A2740]/80">
          <strong className="font-semibold text-[#0A2740]">More than 6 travelling?</strong> Larger
          groups can book two vehicles travelling together.
        </p>
      </Section>

      <Section tone="white" id="child-seats" title="Little travellers and extra pickups">
        <PathCards
          items={[
            {
              title: "Child seats at no extra cost",
              text: "Request a child seat when you book and tell us each child’s age so we can confirm a suitable seat. Arrangements are confirmed when you book.",
            },
            {
              title: "Extra collection stops",
              text: "Give us every collection address when you book. Extra stops are agreed in your quote and confirmed when you book.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="booking-checklist" title="Tell us who’s travelling">
        <Checklist
          items={[
            "Number of adults",
            "Children and their ages",
            "Child seat requests",
            "Large suitcases and small bags",
            "Collection address(es)",
            "Destination",
            "Flight number, date and time",
            "Airport and terminal",
            "A mobile number we can reach you on",
          ]}
        />
      </Section>

      <ClosingCta
        tone="photo"
        title="Start your holiday with the ride arranged"
        text="Share your group size and luggage so we can help choose a vehicle."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like to arrange a family or group transfer to or from Heathrow."
      />
    </>
  );
}
