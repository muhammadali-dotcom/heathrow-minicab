import type { Metadata } from "next";
import {
  BulletList,
  ClosingCta,
  Columns,
  ExternalLink,
  FaqList,
  InfoAside,
  Section,
  SubHeading,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";
import { TERMINAL_GUIDES_URL } from "@/lib/terminals";

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
        title="Heathrow drop-offs, from your door to departures."
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
        id="collection-time"
        title="Agree a suitable collection time"
        intro="Your flight time is only one part of the plan. Discuss these factors when arranging your journey:"
      >
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-[#0A2740] in-data-[tone=navy]:text-white">
              Your airline’s arrival guidance
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
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-[#0A2740] in-data-[tone=navy]:text-white">
            Share these when booking
          </h3>
          <BulletList
            items={[
              "Collection address and date",
              "Flight time and departure terminal",
              "Passengers, bags and extra stops",
            ]}
          />
        </div>
      </Section>

      <Section tone="pale">
        <Columns
          main={
            <>
              <SubHeading>Check your terminal before collection</SubHeading>
              <p className="mt-3 leading-relaxed text-[#0A2740]/80 in-data-[tone=navy]:text-white/85">
                Confirm the terminal with your airline or flight confirmation. Let us know if it
                changes after you book.
              </p>
              <div className="mt-2">
                <ExternalLink href={TERMINAL_GUIDES_URL}>
                  Open Heathrow’s official terminal guides
                </ExternalLink>
              </div>
            </>
          }
          aside={
            <InfoAside title="Airport charges">
              Ask whether any applicable Heathrow drop-off or parking charge is included in your
              quote. Confirm the total before booking.
            </InfoAside>
          }
        />
      </Section>

      <Section tone="white" id="before-driver" title="Before your driver arrives">
        <FaqList
          items={[
            {
              question: "Travelling with extra luggage or a group?",
              answer:
                "Tell us the number of passengers and bags before booking so we can discuss a suitable vehicle.",
            },
            {
              question: "Need to change your collection details?",
              answer:
                "Contact us with your booking details as soon as possible. We will discuss the change and any applicable charges.",
            },
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
