import type { Metadata } from "next";
import Image from "next/image";
import {
  Checklist,
  ClosingCta,
  Columns,
  Eyebrow,
  InfoAside,
  PolicyBlock,
  Section,
  SubHeading,
  Timeline,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heathrow Pickups | Heathrow Minicab",
  description:
    "Arriving at Heathrow? What happens after landing, how your driver meeting is arranged and how waiting time works.",
};

export default function Page() {
  return (
    <>
      <TransfersHero
        crumbs={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { label: "Heathrow Pickups" },
        ]}
        eyebrow="Heathrow pickups"
        title="Heathrow pickups, from arrivals to your door."
        intro="We monitor your flight and meet you inside arrivals with a name board, or at an agreed pickup point. Bring your luggage and leave the rest to us."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Pickup" }}
        image={{
          src: "/images/airport-arrival.png",
          width: 1536,
          height: 1024,
          alt: "Traveller with a suitcase walking through an airport arrivals hall",
        }}
      />

      <Section tone="navy" id="meet-and-greet">
        <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="md:order-2">
            <Eyebrow>Meet and greet</Eyebrow>
            <h2
              id="meet-and-greet-heading"
              className="mt-3 text-2xl leading-snug font-bold tracking-tight text-white md:text-3xl"
            >
              Look for your name in arrivals
            </h2>
            <p className="mt-4 leading-relaxed text-white/85">
              Your driver meets you inside the arrivals hall with a name board, or at a pickup
              location agreed with your booking. Your meeting arrangements are confirmed when you
              book.
            </p>
            <p className="mt-4 leading-relaxed text-white/85 italic">
              Keep your phone switched on when you land so we can reach you.
            </p>
            <p className="mt-4 leading-relaxed font-semibold text-white">
              We monitor your flight. If it’s delayed or changes, contact us and we’ll confirm your
              arrangements.
            </p>
          </div>
          <div className="md:order-1">
            <Image
              src="/images/pickups-meet-and-greet.png"
              alt="Illustration of a smiling driver holding a Heathrow Minicab name board that reads Welcomes J. Smith"
              width={1024}
              height={1536}
              sizes="(min-width: 768px) 320px, 80vw"
              className="mx-auto h-auto w-full max-w-[20rem] rounded-xl"
            />
          </div>
        </div>
      </Section>

      <Section tone="pale">
        <Columns
          main={
            <>
              <SubHeading>After your flight lands</SubHeading>
              <Timeline
                steps={[
                  {
                    title: "Clear arrivals and collect your bags",
                    text: "Allow time for passport control and baggage collection when arranging your pickup.",
                  },
                  {
                    title: "Check your confirmed meeting instructions",
                    text: "Your driver meets you inside arrivals with a name board or at an agreed pickup location, as confirmed with your booking. Keep your phone available so you can contact us.",
                  },
                  {
                    title: "Meet your driver",
                    text: "If you cannot find them, call us and tell us your terminal and the nearest clearly signed landmark.",
                  },
                ]}
              />
            </>
          }
          aside={
            <InfoAside
              title="Flight delayed or changed?"
              link={{ href: "/airport-transfers/terminal-guides", label: "Find your terminal" }}
            >
              We monitor your flight. Please also contact us if your flight is delayed, cancelled or
              changes so we can confirm your arrangements.
            </InfoAside>
          }
        />
      </Section>

      <Section tone="white" id="waiting" title="Understand your waiting time">
        <PolicyBlock value="15 minutes" label="included waiting">
          The included waiting period starts when your driver reaches the agreed meeting point. Any
          waiting rate after this is confirmed before booking.
        </PolicyBlock>
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Your booking checklist"
        intro="Have these details ready when you book online or call. They help us suggest a suitable vehicle and confirm your arrangements."
      >
        <Checklist
          items={[
            "Flight number and arrival date",
            "Arrival terminal, if you know it",
            "Destination address",
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
        title="Confirm your Heathrow pickup"
        text="Have your flight number and destination ready."
        buttonLabel="Call to Book"
      />
    </>
  );
}
