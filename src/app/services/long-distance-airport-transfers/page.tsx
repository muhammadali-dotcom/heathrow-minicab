import type { Metadata } from "next";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  ComparisonTable,
  MessagePreview,
  ProblemSolution,
  RegionChips,
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

const service = findService("long-distance-airport-transfers");
const path = `/services/${service.slug}`;

export const metadata: Metadata = pageMetadata({
  title: "Long-Distance Heathrow Transfers | South East, Oxford & Cambridge",
  description:
    "Long-distance Heathrow airport transfers to and from Brighton, Southampton, Portsmouth, Kent, Surrey, Sussex, Oxford and Cambridge.",
  path,
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Long-distance Heathrow airport transfers"
        serviceType="Airport transfer"
        description="Heathrow transfers to and from the South East, Oxford and Cambridge."
        path={path}
      />
      <TransfersHero
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        eyebrow="Long-distance airport transfers"
        title="Heathrow transfers beyond London."
        intro="Travelling further afield? We arrange transfers between Heathrow and destinations across the South East, Oxford and Cambridge."
        primary={{ href: BOOK_ONLINE_HREF, label: "Get a Long-Distance Quote" }}
        image={service.image}
      />

      <Section tone="navy" id="worries" title="Long journey to the airport? Make it the easy part">
        <ProblemSolution
          worries={[
            "Lugging cases on and off trains",
            "An early flight from outside London",
            "Wanting a stop along the way",
          ]}
          answers={[
            "Door to terminal by road, with luggage space to match.",
            "We plan your collection time around your flight.",
            "Tell us about stops; they’re agreed in your quote.",
          ]}
        />
      </Section>

      <Section tone="pale" id="destinations" title="Where we travel">
        <RegionChips
          regions={[
            {
              name: "South East",
              places: ["Brighton", "Southampton", "Portsmouth", "Kent", "Surrey", "Sussex"],
            },
            { name: "Oxford & Cambridge", places: ["Oxford", "Cambridge"] },
          ]}
        />
        <p className="mt-6 text-[#0A2740]/80">Somewhere else? Call us to check.</p>
      </Section>

      <Section tone="white" id="quote" title="What shapes your quote">
        <ComparisonTable
          caption="What shapes a long-distance quote"
          columns={["How it affects your journey"]}
          rows={[
            {
              label: "Route and distance",
              values: ["Further journeys need an earlier collection time."],
            },
            {
              label: "Time and day",
              values: ["Traffic varies; we plan your collection around it."],
            },
            { label: "Stops", values: ["Agreed and included in your quote before you book."] },
            {
              label: "Waiting or changes",
              values: ["Charged as explained before booking."],
            },
            { label: "Your fare", values: ["Fixed when confirmed."] },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Send us these details"
      >
        <MessagePreview
          intro="Hi, I’d like a long-distance Heathrow transfer quote."
          lines={[
            "Pickup address and postcode",
            "Destination address",
            "Airport and terminal",
            "Flight number, date and time",
            "Stops along the way",
            "Passengers, suitcases and bags",
          ]}
        />
        <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-6`}>
          How Heathrow pickups work <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <ClosingCta
        tone="photo"
        title="Get a Long-Distance Quote"
        text="Call or WhatsApp us with your addresses and flight details."
        buttonLabel="Call to Book"
        whatsapp
      />
    </>
  );
}
