import type { Metadata } from "next";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  ComparisonTable,
  HighlightPanel,
  ProblemSolution,
} from "@/components/services/ServiceBlocks";
import {
  Checklist,
  ClosingCta,
  Section,
  TransfersHero,
  textLink,
} from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

const service = findService("family-group-transfers");
const path = `/services/${service.slug}`;
const mpv = VEHICLES.find((v) => v.id === "mpv");

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
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        eyebrow="Family & group transfers"
        title="Heathrow transfers with room for everyone."
        intro="Travel together in one vehicle, with space for your family, your group and your luggage."
        primary={{ href: BOOK_ONLINE_HREF, label: "Plan Your Family Transfer" }}
        image={service.image}
      />

      <Section tone="navy" id="worries" title="Travelling together, without the squeeze">
        <ProblemSolution
          worries={[
            "Will all the luggage fit?",
            "Will we need two taxis?",
            "What about car seats for the children?",
            "Can we collect grandparents on the way?",
          ]}
          answers={[
            "We match the vehicle to your passengers and your bags.",
            `An MPV takes up to ${mpv?.passengers} passengers and ${mpv?.luggage.large} large cases; bigger groups can book two vehicles travelling together.`,
            "Child seats on request, at no extra cost.",
            "Extra pickups are added to your journey and agreed in your quote.",
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
      </Section>

      <Section tone="white" id="child-seats" eyebrow="Travelling with children" title="Child seats">
        <div className="mt-8">
          <HighlightPanel
            kicker="On request"
            statement="No extra cost."
            steps={[
              "Ask for a child seat when you book",
              "Tell us each child’s age",
              "We confirm a suitable seat",
            ]}
          />
        </div>
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Your booking checklist"
      >
        <Checklist
          items={[
            "Number of adults",
            "Number and ages of children",
            "Large suitcases and small bags",
            "Child seat requests",
            "Pickup address(es) and destination",
            "Flight number, date and terminal",
            "A mobile number we can reach you on",
          ]}
        />
        <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-6`}>
          How Heathrow pickups work <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <ClosingCta
        tone="photo"
        title="Plan Your Family Transfer"
        text="Call or WhatsApp us with your group size and luggage."
        buttonLabel="Call to Book"
        whatsapp
      />
    </>
  );
}
