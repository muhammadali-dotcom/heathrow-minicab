import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import {
  Checklist,
  Columns,
  Eyebrow,
  HelpPanel,
  InfoAside,
  Section,
  StepRow,
  SubHeading,
  Timeline,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Heathrow Airport Pickups | Meet & Greet Minicab",
    description:
      "Heathrow airport pickup with a name board in arrivals. We monitor your flight, and 15 minutes’ free waiting starts at your agreed pickup time.",
    path: "/airport-transfers/heathrow-pickups",
  }),
};

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Heathrow airport pickups"
        serviceType="Airport pickup"
        description="Meet and greet with a name board in Heathrow arrivals, with flight monitoring and 15 minutes' free waiting."
        path="/airport-transfers/heathrow-pickups"
      />
      <TransfersHero
        crumbs={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { label: "Heathrow Pickups" },
        ]}
        eyebrow="Heathrow pickups"
        title="Heathrow pickups,"
        titleAccent="from arrivals to your door."
        intro="Your pickup point is confirmed when you book, so you know where to go after you land."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Pickup" }}
        image={{
          src: "/images/pickups-hero.webp",
          width: 1536,
          height: 1024,
          alt: "Driver in a suit holding a welcome sign, greeting a smiling traveller with a suitcase in an airport arrivals hall",
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
              location agreed with your booking.
            </p>
            <p className="mt-4 leading-relaxed text-white/85 italic">
              Keep your phone switched on when you land so we can reach you.
            </p>
          </div>
          <div className="md:order-1">
            <Image
              src="/images/pickups-meet-and-greet.webp"
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
                    text: "Check the meeting point confirmed with your booking and keep your phone available.",
                  },
                  {
                    title: "Meet your driver",
                    text: "Meet your driver at the agreed point. If you can’t see them, use the contact options below.",
                  },
                ]}
              />
            </>
          }
          aside={
            <InfoAside
              title="We monitor your flight"
              link={{ href: "/airport-transfers/terminal-guides", label: "Find your terminal" }}
            >
              We monitor your flight and adjust your pickup arrangements if it’s delayed. If it’s
              cancelled, diverted or changed, contact us so we can confirm your new arrangements.
            </InfoAside>
          }
        />
        <HelpPanel />
      </Section>

      <Section tone="white" id="waiting" title="Pickup time, waiting and charges">
        <StepRow
          steps={[
            {
              title: "Your flight lands",
              text: "We use your flight’s landing time to plan your pickup.",
            },
            {
              title: "Your agreed pickup time",
              text: "Agree a pickup time that allows for passport control and baggage collection.",
            },
            {
              title: "15 minutes’ free waiting",
              text: "Starts at your agreed pickup time.",
            },
          ]}
        />
        <dl className="mt-8 divide-y divide-[#D5E8F2] rounded-xl border border-[#D5E8F2] bg-[#E6F6FC] px-6">
          <div className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
            <dt className="font-semibold text-[#0A2740]">Waiting after 15 minutes</dt>
            <dd className="text-[#0A2740]/80">Charged at the rate confirmed before you book.</dd>
          </div>
          <div className="grid gap-1 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
            <dt className="font-semibold text-[#0A2740]">Parking</dt>
            <dd className="text-[#0A2740]/80">
              Any applicable parking charge is confirmed with your quote.
            </dd>
          </div>
        </dl>
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
    </>
  );
}
