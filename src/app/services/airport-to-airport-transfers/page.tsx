import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import ServiceAreas from "@/components/services/ServiceAreas";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { DetailCards, NumberedStrip, SplitChecklist } from "@/components/services/ServiceBlocks";
import { ClosingCta, Section, TransfersHero } from "@/components/transfers/TransferBlocks";
import type { Faq } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";

const service = findService("airport-to-airport-transfers");
const path = `/services/${service.slug}`;

const AIRPORTS = [
  {
    code: "LGW",
    name: "Gatwick Airport",
    note: "Allow time for terminal changes, baggage collection and road traffic between the two airports.",
  },
  {
    code: "STN",
    name: "Stansted Airport",
    note: "Useful for connections across the north and east of London, with timing planned around both flights.",
  },
  {
    code: "LTN",
    name: "Luton Airport",
    note: "Share both flight numbers so the pickup time can be planned around arrivals and your next check-in.",
  },
  {
    code: "LCY",
    name: "London City Airport",
    note: "A cross-London airport transfer where road conditions and check-in deadlines need extra care.",
  },
];

function AirportConnections() {
  return (
    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {AIRPORTS.map((airport) => (
        <li
          key={airport.code}
          className="flex h-full flex-col rounded-xl border border-white/10 bg-[#12385A] p-5 text-white"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-white/75">Heathrow</p>
              <p className="font-mono text-xl font-bold tracking-wider text-[#4FB8E0]">LHR</p>
            </div>
            <span aria-hidden="true" className="text-2xl font-semibold text-[#4FB8E0]">
              ⇄
            </span>
            <div className="text-right">
              <p className="text-sm font-semibold text-white/75">{airport.name}</p>
              <p className="font-mono text-xl font-bold tracking-wider text-[#4FB8E0]">
                {airport.code}
              </p>
            </div>
          </div>
          <p className="mt-4 border-t border-white/10 pt-4 text-base font-semibold">
            Heathrow to {airport.name.replace(" Airport", "")}
          </p>
          <p className="mt-1 text-sm text-white/75">Available in either direction.</p>
          <p className="mt-3 text-sm leading-relaxed text-white/75">{airport.note}</p>
        </li>
      ))}
    </ul>
  );
}

const AIRPORT_TRANSFER_FAQS: Faq[] = [
  {
    id: "airport-transfer-guarantee",
    question: "Can you guarantee I will make my connecting flight?",
    answer:
      "No. We plan around both flights, but we cannot guarantee connections because passport control, baggage collection, traffic and airline check-in deadlines can all vary.",
  },
  {
    id: "airport-transfer-flight-change",
    question: "What if my first flight is delayed or changes?",
    answer:
      "Contact us as soon as you know. We monitor flights where details are provided, but you should still tell us about cancellations, diversions or changed departure plans.",
  },
  {
    id: "airport-transfer-return",
    question: "Can I book airport-to-airport transfers in both directions?",
    answer:
      "Yes. Give us both sets of flight details and dates when booking, and we can arrange outbound and return airport connections.",
  },
  {
    id: "airport-transfer-luggage",
    question: "Which vehicle should I choose for luggage?",
    answer:
      "Tell us how many passengers, large suitcases and small bags you have. We’ll help you choose between saloon, estate, MPV and executive options.",
  },
];

const seo = {
  title: "Heathrow to Gatwick, Stansted, Luton & City Transfers",
  description:
    "Airport-to-airport transfers between Heathrow and Gatwick, Stansted, Luton or London City, planned around both of your flights.",
  path,
};

export const metadata: Metadata = pageMetadata(seo);

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <ServiceJsonLd
        name="Airport-to-airport transfers"
        serviceType="Airport transfer"
        description="Road transfers between Heathrow and Gatwick, Stansted, Luton or London City airports."
        path={path}
      />
      <TransfersHero
        crumbs={[{ href: "/services", label: "Services" }, { label: service.title }]}
        title="Two airports."
        titleAccent="One easy ride."
        intro="Landing at one airport and flying from another? We’ll help arrange the journey between them."
        primary={{ href: BOOK_ONLINE_HREF, label: "Plan Your Transfer" }}
        image={service.image}
      />

      <Section tone="navy" id="routes" title="Which airports are you travelling between?">
        <AirportConnections />
      </Section>

      <Section
        tone="white"
        id="route-guidance"
        title="Airport-specific transfer guidance"
        intro="Every airport connection has the same basic job, but the practical details vary depending on the two airports, terminals and flight times."
      >
        <DetailCards
          items={[
            {
              label: "Heathrow and Gatwick",
              hint: "A common airport connection where baggage collection, terminal transfers and road traffic all need a comfortable buffer.",
            },
            {
              label: "Heathrow and Stansted",
              hint: "Often a longer cross-London connection, so check both airlines’ check-in and bag-drop deadlines before booking.",
            },
            {
              label: "Heathrow and Luton",
              hint: "Share both flight numbers and terminals so the pickup can be planned around arrival processing and the next departure.",
            },
            {
              label: "Heathrow and London City",
              hint: "A transfer across London where traffic can vary, especially around peak commuting times and central routes.",
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="timing"
        title="Leave time for your next flight"
        intro="We plan around both flights, but we can’t guarantee connection times, so leave a comfortable margin."
      >
        <DetailCards
          items={[
            {
              label: "Passport control",
              hint: "Allow time for passport control at your arrival airport.",
            },
            {
              label: "Baggage collection",
              hint: "Collecting checked bags can take time after landing.",
            },
            { label: "Road travel", hint: "Journey times between airports vary with traffic." },
            {
              label: "Next check-in",
              hint: "Check your airline’s check-in and bag-drop deadline for your next flight.",
            },
          ]}
        />
        <p className="mt-6 max-w-[46rem] rounded-xl border border-[#D5E8F2] bg-white p-5 leading-relaxed text-[#0A2740]/80">
          Allow enough time between flights. Road traffic and airport processing times can vary, so
          we cannot guarantee your connection.
        </p>
      </Section>

      <Section tone="white" id="how-it-works" title="From arrivals to your next airport">
        <NumberedStrip
          items={[
            "Meet your driver at the confirmed pickup point",
            "Travel to your next airport",
            "Arrive at your departure terminal",
          ]}
        />
      </Section>

      <Section tone="pale" id="booking-checklist" title="Have both flight details ready">
        <SplitChecklist
          groups={[
            {
              title: "Arriving",
              items: ["Airport", "Flight number", "Date and time", "Terminal"],
            },
            {
              title: "Departing",
              items: ["Airport", "Flight number", "Date and time", "Terminal"],
            },
            {
              title: "Passengers & luggage",
              items: [
                "Number of passengers",
                "Large suitcases and small bags",
                "A reachable mobile number",
              ],
            },
          ]}
        />
      </Section>

      <Section
        tone="white"
        id="connection-planning"
        title="Connection planning checklist"
        intro="Before choosing a pickup time, check the parts of the journey that can add time before you even leave the first airport."
      >
        <SplitChecklist
          groups={[
            {
              title: "Before the car",
              items: ["Passport control", "Baggage collection", "Terminal meeting point"],
            },
            {
              title: "On the road",
              items: ["Traffic conditions", "Airport access roads", "Any agreed stops"],
            },
            {
              title: "Next flight",
              items: ["Check-in deadline", "Bag-drop deadline", "Security and boarding time"],
            },
          ]}
        />
      </Section>

      <PageFaqs
        items={AIRPORT_TRANSFER_FAQS}
        tone="pale"
        summary="Airport-to-airport transfers connect Heathrow with Gatwick, Stansted, Luton and London City in either direction, planned around both flight details but without guaranteed connection times."
      />

      <ServiceAreas tone="white" />

      <ClosingCta
        tone="photo"
        title="Plan your airport connection"
        text="Share both flight details and we’ll help arrange your transfer."
        buttonLabel="Call Us"
        whatsapp="Hi, I’d like to arrange a transfer between Heathrow and another airport."
      />
    </>
  );
}
