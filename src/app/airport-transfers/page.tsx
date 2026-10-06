import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  BulletList,
  ClosingCta,
  Eyebrow,
  FeatureGrid,
  QuoteReceipt,
  RouteCard,
  Section,
  SubHeading,
  TransfersHero,
  VehicleCards,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Heathrow Airport Transfers | Pickups & Drop-offs",
    description:
      "Book a Heathrow airport transfer to or from Terminals 2–5. Fixed price once confirmed, 15 minutes’ free waiting and child seats at no extra cost.",
    path: "/airport-transfers",
  }),
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Heathrow airport transfers"
        serviceType="Airport transfer"
        description="24/7 minicab transfers to and from Heathrow Terminals 2, 3, 4 and 5 for North and West London."
        path="/airport-transfers"
      />
      <TransfersHero
        crumbs={[{ label: "Airport Transfers" }]}
        eyebrow="Heathrow airport transfers"
        title="Heathrow pickups and drop-offs, made simple."
        intro="Reliable Heathrow transfers, booked in minutes and planned around your flight."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Transfer" }}
        image={{
          src: "/images/airport-transfers-overview-hero.webp",
          width: 1536,
          height: 1024,
          alt: "Driver helping a traveller with luggage beside a navy car outside an airport terminal.",
        }}
      />

      <Section
        tone="navy"
        id="journey"
        eyebrow="Start with your journey"
        title="Which way are you travelling?"
      >
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <RouteCard
            eyebrow="Arrivals → your destination"
            title="Being picked up at Heathrow"
            text="Understand meeting arrangements, flight delays and waiting time before you land."
            href="/airport-transfers/heathrow-pickups"
            linkLabel="Read the pickup guide"
          />
          <RouteCard
            eyebrow="Your address → departures"
            title="Travelling to Heathrow"
            text="Plan your collection time, check your terminal and share your luggage requirements."
            href="/airport-transfers/heathrow-drop-offs"
            linkLabel="Read the drop-off guide"
          />
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#0A2740] in-data-[tone=navy]:text-white">
            Have these details ready
          </h3>
          <BulletList
            items={[
              "Pickup and destination addresses",
              "Date, time and flight number",
              "Terminal, passengers and luggage",
              "Any child seat or other requests",
            ]}
          />
        </div>
      </Section>

      <Section
        tone="white"
        id="why-us"
        eyebrow="Why travel with us"
        title="Why travel with Heathrow Minicab"
      >
        <FeatureGrid
          items={[
            {
              icon: "plane",
              title: "Flight monitoring",
              text: "We monitor your flight. If it’s delayed or changes, contact us and we’ll confirm your arrangements.",
            },
            {
              icon: "board",
              title: "Name board meeting",
              text: "Your driver meets you inside arrivals with a name board, or at a pickup location agreed with your booking.",
            },
            {
              icon: "clock",
              title: "15 minutes’ waiting included",
              text: "Your 15 minutes’ free waiting starts at your agreed pickup time. Any rate after that is confirmed before you book.",
            },
            {
              icon: "seat",
              title: "Child seats on request",
              text: "Let us know when you book and we’ll arrange a child seat for your journey.",
            },
            {
              icon: "car",
              title: "Saloon to MPV",
              text: "Saloon, estate, MPV and executive cars, chosen around your passengers and luggage.",
              link: { href: "/our-vehicles", label: "See our vehicles" },
            },
            {
              icon: "allday",
              title: "All day, every day",
              text: "Available 24/7 for early departures and late arrivals.",
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="vehicles"
        eyebrow="Our vehicles"
        title="Room for you and your luggage"
      >
        <VehicleCards />
      </Section>

      <Section tone="white" id="pricing">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <Eyebrow>Pricing</Eyebrow>
            <div className="mt-3">
              <SubHeading id="pricing-heading">Clear pricing before you travel</SubHeading>
            </div>
            <p className="mt-3 text-lg leading-relaxed text-[#0A2740]/80">
              You get a fixed price before you book. There’s no meter, so traffic won’t change your
              fare.
            </p>
          </div>
          <QuoteReceipt
            title="How your quote works"
            points={[
              {
                title: "Fixed once confirmed",
                text: "Your journey fare is fixed when confirmed. Any additional waiting or changes are charged as explained before booking.",
              },
              {
                title: "Based on your journey",
                text: "Your price depends on the time, day and route of your journey.",
              },
              {
                title: "Agreed up front",
                text: "Waiting, parking and any extras are covered as agreed in your quote.",
              },
              {
                title: "Included as standard",
                text: "15 minutes’ free waiting and child seats at no extra cost.",
              },
            ]}
          />
        </div>
      </Section>

      <ClosingCta
        tone="photo"
        title="Ready to plan your transfer?"
        text="Book online or call for help with your journey."
        buttonLabel="Call to Book"
      />
    </>
  );
}
