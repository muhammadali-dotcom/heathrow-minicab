import type { Metadata } from "next";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  ComparisonTable,
  FormPreview,
  JourneyList,
  ProblemSolution,
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
import { VEHICLES } from "@/lib/vehicles";

const service = findService("executive-business-travel");
const path = `/services/${service.slug}`;
const cars = ["saloon", "executive"].map((id) => VEHICLES.find((v) => v.id === id)!);

export const metadata: Metadata = pageMetadata({
  title: "Executive & Business Heathrow Transfers | Heathrow Minicab",
  description:
    "Business airport transfers between Heathrow and offices, hotels and meeting venues, in a standard or executive car. Book returns together.",
  path,
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Executive and business Heathrow transfers"
        serviceType="Airport transfer"
        description="Business airport transfers between Heathrow and offices, hotels and meeting venues."
        path={path}
      />
      <TransfersHero
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        eyebrow="Executive & business travel"
        title="Your next meeting starts with a good journey."
        intro="From Heathrow to your office, hotel or meeting, with a comfortable ride planned around your day."
        primary={{ href: BOOK_ONLINE_HREF, label: "Arrange Business Travel" }}
        image={service.image}
      />

      <Section tone="navy" id="worries" title="Business travel, without the admin">
        <ProblemSolution
          worries={[
            "Booking for a client you’ve never met",
            "Making sure they’re easy to find on arrival",
            "Arranging the trip back",
          ]}
          answers={[
            "We put the passenger’s name on the name board.",
            "We can reach them on their own mobile, and you on yours.",
            "Book their return to Heathrow at the same time. Pay by cash or card/online.",
          ]}
        />
      </Section>

      <Section tone="pale" id="vehicles" title="Standard or executive?">
        <ComparisonTable
          caption="Standard and executive cars compared"
          columns={["Standard", "Executive"]}
          highlight={1}
          highlightLabel="For clients"
          rows={[
            { label: "Example car", values: cars.map((v) => `${v.model} or similar`) },
            {
              label: "Passengers",
              values: cars.map((v) => (v.passengers === null ? "On request" : v.passengers)),
            },
            { label: "Large suitcases", values: cars.map((v) => v.luggage.large) },
            { label: "Small bags", values: cars.map((v) => v.luggage.small) },
            { label: "Good for", values: ["Everyday business trips", "Client and VIP travel"] },
          ]}
        />
      </Section>

      <Section tone="white" id="journeys" title="Journeys we arrange">
        <JourneyList
          journeys={[
            {
              from: "Heathrow",
              to: "Office",
              note: "Straight from arrivals to your office, or back for your flight.",
            },
            {
              from: "Heathrow",
              to: "Hotel",
              note: "To your hotel on arrival, and back to Heathrow when you leave.",
            },
            {
              from: "Heathrow",
              to: "Meeting venue",
              note: "Directly to your meeting, conference or event.",
            },
            {
              from: "Outbound",
              to: "Return",
              note: "Book both journeys together in one call or message.",
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="What we’ll ask you"
      >
        <FormPreview
          fields={[
            "Passenger name",
            "Passenger mobile",
            "Your contact details",
            "Flight number and terminal",
            "Destination address",
            "Vehicle: standard or executive",
            "Any stops",
            "Return journey",
          ]}
        />
        <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-6`}>
          How Heathrow pickups work <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <ClosingCta
        tone="photo"
        title="Arrange Business Travel"
        text="Call or WhatsApp us with your flight and destination."
        buttonLabel="Call to Book"
        whatsapp
      />
    </>
  );
}
