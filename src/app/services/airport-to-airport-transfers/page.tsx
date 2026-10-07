import type { Metadata } from "next";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { DetailCards, NumberedStrip, SplitChecklist } from "@/components/services/ServiceBlocks";
import { ClosingCta, Section, TransfersHero } from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";

const service = findService("airport-to-airport-transfers");
const path = `/services/${service.slug}`;

const AIRPORTS = [
  { code: "LGW", name: "Gatwick Airport" },
  { code: "STN", name: "Stansted Airport" },
  { code: "LTN", name: "Luton Airport" },
  { code: "LCY", name: "London City Airport" },
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
        </li>
      ))}
    </ul>
  );
}

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
        crumbs={[{ label: "Services" }, { label: service.title }]}
        eyebrow="Airport-to-airport transfers"
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
