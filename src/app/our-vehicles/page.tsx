import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { VEHICLE_FAQS } from "@/lib/faqs";
import { VehiclesJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import PageBanner from "@/components/PageBanner";
import Vehicles from "@/components/Vehicles";
import { ComparisonTable, DetailCards } from "@/components/services/ServiceBlocks";
import {
  BulletList,
  ClosingCta,
  FeatureGrid,
  Section,
} from "@/components/transfers/TransferBlocks";
import { KEY_FACTS, KEY_FACTS_NOTE } from "@/lib/facts";
import { VEHICLES, type Vehicle, vehicleComparisonRows } from "@/lib/vehicles";

const path = "/our-vehicles";

const seo = {
  title: "Heathrow Minicab Vehicles | Saloon, Estate, MPV & Executive",
  description:
    "Which car do you need for Heathrow? Compare our saloon, estate, 6-seat MPV and executive cars by passengers and suitcases. Child seats free on request.",
  path,
};

export const metadata: Metadata = pageMetadata(seo);

// Each vehicle's closest service page, so the detail cards lead somewhere useful.
const RELATED: Record<Vehicle["id"], { href: string; label: string }> = {
  saloon: { href: "/airport-transfers/heathrow-pickups", label: "Heathrow pickups" },
  estate: {
    href: "/services/long-distance-airport-transfers",
    label: "Long-distance transfers",
  },
  mpv: { href: "/services/family-group-transfers", label: "Family & group transfers" },
  executive: { href: "/services/executive-business-travel", label: "Executive travel" },
};

// Included whichever car you book; wording comes from the shared key facts.
const INCLUDED = ["meet-and-greet", "flight-monitoring", "waiting", "price", "child-seats"];

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} type="CollectionPage" />
      <VehiclesJsonLd path={path} />
      <PageBanner
        image="hero"
        crumb="Our Vehicles"
        eyebrow="Our vehicles"
        title="Choose a car that fits your journey."
      />
      <Vehicles
        showHeader={false}
        intro="Choose a saloon for up to 4 passengers with 2 large suitcases, an estate for 4 passengers with 3, an MPV for up to 6 passengers with 4, or an executive car for business travel. Child seats are available on request at no extra cost."
      />

      <Section
        tone="pale"
        id="which-vehicle"
        title="Which vehicle do I need?"
        intro="Start with two numbers: how many people are travelling and how many large suitcases you’re bringing."
      >
        <DetailCards
          items={[
            {
              label: "Up to 4 people, 2 large cases",
              hint: "Saloon. Our everyday car for solo travellers, couples and small families.",
            },
            {
              label: "Up to 4 people, 3 large cases",
              hint: "Estate. The same seats as a saloon, with room for one more suitcase.",
            },
            {
              label: "5–6 people, or 4 large cases",
              hint: "MPV. Up to 6 passengers with 4 large suitcases and 2 small bags.",
            },
            {
              label: "7 or more people",
              hint: "Two vehicles travelling together. Tell us your numbers and we’ll help choose.",
            },
            {
              label: "Business or a special occasion",
              hint: "Executive. A Mercedes E-Class or similar for up to 4 passengers.",
            },
          ]}
        />
      </Section>

      <Section tone="white" id="compare" title="Compare our vehicles">
        <ComparisonTable
          caption="Vehicle passenger and luggage capacity compared"
          columns={VEHICLES.map((v) => v.name)}
          highlight={VEHICLES.findIndex((v) => v.id === "mpv")}
          highlightLabel="Most room"
          rows={vehicleComparisonRows()}
        />
        <p className="mt-6 max-w-[44rem] text-[#0A2740]/80">
          Passenger and luggage figures are a guide, not a guarantee that every maximum fits at the
          same time. If you’re close to the limits, choose the next size up or two vehicles.
        </p>
      </Section>

      <Section tone="pale" id="vehicle-guide" title="Each vehicle in detail">
        <FeatureGrid
          columns={2}
          items={VEHICLES.map((v) => ({
            icon: v.id === "mpv" ? "people" : "car",
            title: `${v.name}: ${v.model} or similar`,
            text: v.description,
            link: RELATED[v.id],
          }))}
        />
      </Section>

      <Section
        tone="white"
        id="luggage"
        title="Luggage guide"
        intro="Our capacities count two kinds of bag. Anything else, tell us when you book."
      >
        <BulletList
          items={[
            "Large suitcase: standard checked luggage.",
            "Small bag: a cabin bag or hand luggage.",
            "Pushchairs, golf bags and other bulky items: mention them when you book so we can choose a vehicle with room for them.",
            "Travelling with children: child seats are free on request. Tell us each child’s age.",
          ]}
        />
      </Section>

      <Section tone="pale" id="included" title="Included whichever car you choose">
        <FeatureGrid
          compact
          items={KEY_FACTS.filter((f) => INCLUDED.includes(f.id)).map(
            ({ icon, title, text }) => ({ icon, title, text }),
          )}
        />
        <p className="mt-6 text-sm text-[#0A2740]/70">{KEY_FACTS_NOTE}</p>
      </Section>

      <PageFaqs
        items={VEHICLE_FAQS}
        tone="white"
        summary="Heathrow Minicab offers four vehicle types: saloon and estate for up to 4 passengers, an MPV for up to 6, and executive cars for up to 4. Groups of 7 or more can book two vehicles."
      />

      <ClosingCta
        tone="photo"
        title="Not sure which car fits?"
        text="Tell us your passengers and luggage and we’ll help you choose."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like help choosing a vehicle for my Heathrow transfer."
      />
    </>
  );
}
