import type { Metadata } from "next";
import Link from "next/link";
import {
  Checklist,
  ClosingCta,
  Columns,
  InfoAside,
  RouteSteps,
  Section,
  SubHeading,
  TransfersHero,
  VehicleCards,
  textLink,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heathrow Drop-offs | Heathrow Minicab",
  description:
    "Heading to Heathrow? Agree a suitable collection time, confirm your departure terminal and check what your quote includes.",
};

export default function Page() {
  return (
    <>
      <TransfersHero
        crumbs={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { label: "Heathrow Drop-offs" },
        ]}
        eyebrow="Heathrow drop-offs"
        title="Heathrow drop‑offs, from your door to departures."
        intro="We collect you from your door at a time planned around your flight and take you to your departure terminal, so you can relax before you fly."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Drop-off" }}
        image={{
          src: "/images/family-transfer.png",
          width: 1536,
          height: 1024,
          alt: "Family with suitcases loading luggage into a car outside an airport terminal",
        }}
      />

      <Section
        tone="navy"
        id="door-to-terminal"
        eyebrow="How it works"
        title="From your doorstep to your terminal"
      >
        <RouteSteps
          steps={[
            {
              icon: "home",
              title: "Collection",
              text: "Your driver collects you from your door at the time agreed when you book.",
            },
            {
              icon: "car",
              title: "Journey",
              text: "Your journey to Heathrow, planned around your flight time.",
            },
            {
              icon: "plane",
              title: "Terminal drop-off",
              text: "We drop you at your departure terminal, ready to check in.",
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="collection-time"
        title="Agree a suitable collection time"
        intro="Your flight time is only one part of the plan. Discuss these factors when arranging your journey:"
      >
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[#0A2740] in-data-[tone=navy]:text-white">
              When to arrive for your flight
            </h3>
            <p className="mt-2 leading-relaxed text-[#0A2740]/80 in-data-[tone=navy]:text-white/85">
              Check when check-in and bag drop close, and how early your airline asks you to reach
              the airport.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#0A2740] in-data-[tone=navy]:text-white">
              The journey to Heathrow
            </h3>
            <p className="mt-2 leading-relaxed text-[#0A2740]/80 in-data-[tone=navy]:text-white/85">
              Allow for your collection location, expected traffic, extra stops and loading your
              luggage.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="white">
        <Columns
          main={
            <>
              <SubHeading>Check your terminal before collection</SubHeading>
              <p className="mt-3 leading-relaxed text-[#0A2740]/80 in-data-[tone=navy]:text-white/85">
                Confirm the terminal with your airline or flight confirmation. Let us know if it
                changes after you book.
              </p>
            </>
          }
          aside={
            <InfoAside title="Airport charges">
              The Heathrow drop-off charge isn’t included in the journey price. It’s added to your
              quote, so you see the total before you book.
            </InfoAside>
          }
        />
      </Section>

      <Section
        tone="pale"
        id="vehicles"
        eyebrow="Our vehicles"
        title="Room for you and your luggage"
        intro="Choose a car that fits your passengers and bags."
      >
        <VehicleCards />
        <Link href="/our-vehicles" className={`${textLink} mt-6`}>
          See all vehicles <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <Section
        tone="white"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Your booking checklist"
        intro="Have these details ready when you book online or call. They help us suggest a suitable vehicle and confirm your arrangements."
      >
        <Checklist
          items={[
            "Collection address",
            "Date and flight departure time",
            "Departure terminal",
            "Number of passengers",
            "Large suitcases and small bags",
            "Child seats, if needed",
            "Any extra stops",
            "A mobile number we can reach you on",
          ]}
        />
      </Section>

      <ClosingCta
        tone="photo"
        title="Plan your Heathrow drop-off"
        text="Share your address, flight time and terminal."
        buttonLabel="Call to Book"
      />
    </>
  );
}
