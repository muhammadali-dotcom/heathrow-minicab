import type { Metadata } from "next";
import {
  BulletList,
  ClosingCta,
  Columns,
  InfoAside,
  RouteCard,
  Section,
  SubHeading,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heathrow Airport Transfers | Heathrow Minicab",
  description:
    "Heathrow pickups and drop-offs: choose your journey, check what your quote should cover and find your terminal.",
};

export default function Page() {
  return (
    <>
      <TransfersHero
        crumbs={[{ label: "Airport Transfers" }]}
        eyebrow="Heathrow airport transfers"
        title="Heathrow pickups and drop-offs, made simple."
        intro="Flying out or arriving home? Arrange your Heathrow transfer and find clear guidance on pickups, drop-offs and terminal meeting arrangements."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Transfer" }}
        image={{
          src: "/images/airport-transfers-overview-hero.png",
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

      <Section tone="pale">
        <Columns
          main={
            <>
              <SubHeading>What should your quote cover?</SubHeading>
              <p className="mt-3 leading-relaxed text-[#0A2740]/80 in-data-[tone=navy]:text-white/85">
                Ask for the total journey price and confirm what is included before booking.
              </p>
              <BulletList
                items={[
                  "Any applicable airport parking or drop-off charges",
                  "Included waiting time and the rate afterwards",
                  "Extra stops and special requirements",
                ]}
              />
            </>
          }
          aside={
            <InfoAside
              title="Not sure which terminal?"
              link={{
                href: "/airport-transfers/terminal-guides",
                label: "Explore Terminal Guides",
              }}
            >
              Check your airline or flight confirmation, then use the terminal directory.
            </InfoAside>
          }
        />
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
