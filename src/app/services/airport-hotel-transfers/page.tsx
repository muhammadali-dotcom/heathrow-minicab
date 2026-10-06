import type { Metadata } from "next";
import Link from "next/link";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  ComparisonTable,
  ProblemSolution,
  RuleColumns,
  SplitChecklist,
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

const service = findService("airport-hotel-transfers");
const path = `/services/${service.slug}`;

export const metadata: Metadata = pageMetadata({
  title: "Heathrow Hotel Transfers | Airport to Hotel & Back",
  description:
    "Transfers between Heathrow and hotels near the airport, in central London and across North and West London. Book your return at the same time.",
  path,
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Heathrow airport and hotel transfers"
        serviceType="Airport transfer"
        description="Transfers between Heathrow and hotels near the airport, in central London and across North and West London."
        path={path}
      />
      <TransfersHero
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        eyebrow="Airport & hotel transfers"
        title="Between Heathrow and your hotel, door to door."
        intro="Arriving and heading to your hotel, or checking out for your flight? We’ll take you between Heathrow and your hotel."
        primary={{ href: BOOK_ONLINE_HREF, label: "Arrange Your Hotel Transfer" }}
        image={service.image}
      />

      <Section tone="navy" id="worries" title="Straight to your room, not the taxi queue">
        <ProblemSolution
          worries={[
            "Finding transport after a long flight",
            "Explaining a hotel address in a new city",
            "Remembering to arrange the trip back",
          ]}
          answers={[
            "Your driver meets you inside arrivals with a name board, or at the pickup point confirmed when you book.",
            "Give us the hotel name and postcode; we agree the entrance or meeting point.",
            "Book your return to Heathrow at the same time.",
          ]}
        />
      </Section>

      <Section tone="pale" id="journeys" title="Arriving or leaving?">
        <ComparisonTable
          caption="Airport-to-hotel and hotel-to-airport journeys compared"
          columns={["Heathrow → hotel", "Hotel → Heathrow"]}
          rows={[
            {
              label: "Where you meet",
              values: [
                "Inside arrivals with a name board, or at the confirmed pickup point",
                "Your hotel’s entrance or the meeting point we agree",
              ],
            },
            {
              label: "Planned around",
              values: ["Your landing time", "Your flight and departure terminal"],
            },
            {
              label: "Tell us",
              values: [
                "Flight number and hotel address",
                "Hotel address, collection time and terminal",
              ],
            },
            {
              label: "More detail",
              values: [
                <Link key="p" href="/airport-transfers/heathrow-pickups" className={textLink}>
                  Pickup guide
                </Link>,
                <Link key="d" href="/airport-transfers/heathrow-drop-offs" className={textLink}>
                  Drop-off guide
                </Link>,
              ],
            },
          ]}
        />
      </Section>

      <Section tone="white" id="hotels" title="Hotels we cover">
        <RuleColumns
          columns={[
            {
              title: "Heathrow-area hotels",
              text: "Hotels around the airport, for late arrivals or early departures.",
            },
            {
              title: "Central London hotels",
              text: "Hotels across central London, to and from any Heathrow terminal.",
            },
            {
              title: "North & West London",
              text: "Hotels across the areas we cover.",
              link: (
                <Link href="/areas" className={`${textLink} mt-1`}>
                  See areas we cover <span aria-hidden="true">→</span>
                </Link>
              ),
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Have these details ready"
      >
        <SplitChecklist
          groups={[
            {
              title: "Your arrival",
              items: [
                "Flight number, date and terminal",
                "Hotel name and full address",
                "Passengers, suitcases and bags",
              ],
            },
            {
              title: "Your return",
              items: [
                "Collection date and time from the hotel",
                "Departure flight and terminal",
                "A mobile number we can reach you on",
              ],
            },
          ]}
        />
        <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-6`}>
          How Heathrow pickups work <span aria-hidden="true">→</span>
        </Link>
      </Section>

      <ClosingCta
        tone="photo"
        title="Arrange Your Hotel Transfer"
        text="Call or WhatsApp us with your hotel and flight details."
        buttonLabel="Call to Book"
        whatsapp
      />
    </>
  );
}
