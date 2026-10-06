import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  ComparisonTable,
  DetailCards,
  JourneyList,
  GroupedChecklist,
} from "@/components/services/ServiceBlocks";
import { ClosingCta, Section, TransfersHero } from "@/components/transfers/TransferBlocks";
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
        crumbs={[{ label: "Services" }, { label: service.title }]}
        eyebrow="Executive & business travel"
        title="Your next meeting"
        titleAccent="starts with a good journey."
        intro="From Heathrow to your office, hotel or meeting, with a comfortable ride planned around your day."
        primary={{ href: BOOK_ONLINE_HREF, label: "Arrange Business Travel" }}
        image={service.image}
      />

      <Section tone="navy" id="journeys" title="From Heathrow to your working day">
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
              to: "Meeting or conference venue",
              note: "Directly to your meeting, conference or event.",
            },
          ]}
        />
        <p className="mt-6 text-white/85">Return journeys can be arranged at the same time.</p>
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

      <Section tone="white" id="booking-for-others" title="Booking for yourself or someone else?">
        <DetailCards
          items={[
            { label: "Passenger name", hint: "Shown on the name board when they arrive." },
            { label: "Passenger mobile", hint: "So the driver can reach them on the day." },
            { label: "Your contact details", hint: "So we can reach you as the booker." },
            {
              label: "Meeting arrangements",
              hint: "Confirmed with the booking. Share them with your passenger.",
            },
            {
              label: "Payment",
              hint: "Cash or card/online. Tell us your preferred method when you book.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="booking-checklist" title="Have these details ready">
        <GroupedChecklist
          groups={[
            {
              title: "Passenger & booker",
              items: ["Passenger name and mobile", "Your name and contact details"],
            },
            {
              title: "Journey",
              items: [
                "Flight number, date and time",
                "Terminal",
                "Destination address",
                "Vehicle: standard or executive",
                "Any stops",
                "Return journey details",
              ],
            },
          ]}
        />
      </Section>

      <ClosingCta
        tone="photo"
        title="Your next airport journey, arranged"
        text="Book for yourself, a colleague or a visiting client."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like to arrange business travel to or from Heathrow."
      />
    </>
  );
}
