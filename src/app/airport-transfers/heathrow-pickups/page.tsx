import type { Metadata } from "next";
import {
  ClosingCta,
  Columns,
  FaqList,
  InfoAside,
  PhoneLink,
  PolicyBlock,
  Section,
  SubHeading,
  Timeline,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { ALT_PHONE, BOOK_ONLINE_HREF, PRIMARY_PHONE } from "@/lib/site";

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

      <Section tone="navy">
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

      <Section tone="pale" id="waiting" title="Understand your waiting time">
        <PolicyBlock value="15 minutes" label="included waiting">
          The included waiting period starts when your driver reaches the agreed meeting point. Any
          waiting rate after this is confirmed before booking.
        </PolicyBlock>
      </Section>

      <Section tone="white" id="pickup-questions" title="Pickup questions">
        <FaqList
          items={[
            {
              question: "What if baggage collection takes longer?",
              answer:
                "Contact us as soon as you know you need more time. We can confirm the driver’s arrangements and any applicable waiting charges.",
            },
            {
              question: "What if I cannot find my driver?",
              answer: (
                <>
                  Stay in a clearly identifiable location and call{" "}
                  <PhoneLink tel={PRIMARY_PHONE.tel} display={PRIMARY_PHONE.display} /> or{" "}
                  <PhoneLink tel={ALT_PHONE.tel} display={ALT_PHONE.display} />. Tell us your
                  terminal and where you are standing.
                </>
              ),
            },
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
