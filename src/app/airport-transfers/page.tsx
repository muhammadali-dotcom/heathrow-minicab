import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { PRICING_FAQS } from "@/lib/faqs";
import QuickFacts from "@/components/QuickFacts";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  BulletList,
  ClosingCta,
  JourneyFacts,
  RouteCard,
  Section,
  TransfersHero,
  VehicleCards,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF, PRIMARY_PHONE } from "@/lib/site";

const seo = {
  title: "Heathrow Airport Transfers | Pickups & Drop-offs",
  description:
    "Book a Heathrow airport transfer to or from Terminals 2, 3, 4 and 5. Fixed price once confirmed, 15 minutes’ free waiting and child seats at no extra cost.",
  path: "/airport-transfers",
};

export const metadata: Metadata = pageMetadata(seo);

const pricingPoints = [
  {
    icon: "lock",
    title: "Fixed when confirmed",
    text: "Additional waiting or changes may cost extra.",
  },
  {
    icon: "route",
    title: "Priced for your journey",
    text: "Your route, date and time shape your quote.",
  },
  {
    icon: "receipt",
    title: "Charges explained",
    text: "Applicable parking and airport charges are shown before booking.",
  },
  {
    icon: "stops",
    title: "Extra stops in your quote",
    text: "Give us every stop when you book and we’ll include them in your quote.",
  },
] as const;

type PricingIconName = (typeof pricingPoints)[number]["icon"];

function PricingIcon({
  name,
  className = "h-8 w-8",
}: {
  name: PricingIconName;
  className?: string;
}) {
  const common = {
    strokeWidth: 2.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 48 48" className={`fill-none stroke-current ${className}`}>
      {name === "receipt" && (
        <>
          <path
            {...common}
            d="M14 8h20a2 2 0 0 1 2 2v30l-4-3-4 3-4-3-4 3-4-3-4 3V10a2 2 0 0 1 2-2Z"
          />
          <path {...common} d="M19 17h10M19 24h10M19 31h7" />
        </>
      )}
      {name === "lock" && (
        <>
          <rect {...common} x="13" y="21" width="22" height="17" rx="3" />
          <path {...common} d="M17 21v-5a7 7 0 0 1 14 0v5M24 28v4" />
        </>
      )}
      {name === "route" && (
        <>
          <path {...common} d="M13 18c0 5 5 10 5 10s5-5 5-10a5 5 0 0 0-10 0Z" />
          <circle cx="18" cy="18" r="1.5" fill="currentColor" stroke="none" />
          <path {...common} d="M30 12c0 5 5 10 5 10s5-5 5-10a5 5 0 0 0-10 0Z" />
          <circle cx="35" cy="12" r="1.5" fill="currentColor" stroke="none" />
          <path {...common} d="M19 34c7 0 7-8 14-8" />
        </>
      )}
      {name === "stops" && (
        <>
          <path {...common} d="M24 40s11-10.5 11-19a11 11 0 0 0-22 0c0 8.5 11 19 11 19Z" />
          <circle {...common} cx="24" cy="21" r="4" />
        </>
      )}
    </svg>
  );
}

function PricingSection() {
  return (
    <Section tone="pale" id="pricing">
      <div>
        <p className="text-xs font-bold tracking-[0.15em] text-[#0A2740] uppercase">
          Clear pricing
        </p>
        <h2 className="mt-3 text-2xl leading-snug font-bold tracking-tight text-[#0A2740]">
          Know your fare before you go.
        </h2>
        <p className="mt-3 max-w-[40rem] leading-relaxed text-[#0A2740]/80">
          Your journey fare is fixed when confirmed. Traffic won’t change it.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[0.9fr_1.2fr] lg:items-stretch">
        <div className="flex flex-col justify-center rounded-xl bg-[#0A2740] p-6 text-white md:p-8">
          <PricingIcon name="receipt" className="h-12 w-12 text-white" />
          <h3 className="mt-4 text-2xl leading-snug font-bold tracking-tight">
            Your quote, explained.
          </h3>
          <p className="mt-3 leading-relaxed text-white/85">
            See your journey fare and applicable airport charges before you book.
          </p>
          <a
            href={BOOK_ONLINE_HREF}
            className="mt-5 inline-flex min-h-12 w-full max-w-56 items-center justify-center gap-3 rounded-md bg-[#1FA3D6] px-6 text-base font-semibold text-[#0A2740] hover:bg-[#1C98C9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Get a Quote <span aria-hidden="true">→</span>
          </a>
          <p className="mt-4 text-sm text-white/75">
            Prefer to call?{" "}
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              className="rounded-sm font-semibold text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {PRIMARY_PHONE.display}
            </a>
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2">
          {pricingPoints.map((point) => (
            <li key={point.title} className="rounded-xl border border-[#D5E8F2] bg-white p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E6F6FC] text-[#0A2740]">
                <PricingIcon name={point.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-[#0A2740]">{point.title}</h3>
              <p className="mt-2 leading-relaxed text-[#0A2740]/80">{point.text}</p>
            </li>
          ))}
        </ul>
      </div>

    </Section>
  );
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <ServiceJsonLd
        name="Heathrow airport transfers"
        serviceType="Airport transfer"
        description="24/7 minicab transfers to and from Heathrow Terminals 2, 3, 4 and 5 for North and West London."
        path="/airport-transfers"
      />
      <TransfersHero
        crumbs={[{ label: "Airport Transfers" }]}
        title="Heathrow pickups and drop-offs,"
        titleAccent="made simple."
        intro="Reliable Heathrow transfers, booked in minutes and planned around your flight."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Transfer" }}
        image={{
          src: "/images/airport-transfers-overview-hero.webp",
          width: 1536,
          height: 1024,
          alt: "Driver helping a traveller with luggage beside a navy car outside an airport terminal.",
        }}
      />

      <QuickFacts />

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
        id="vehicles"
        eyebrow="Our vehicles"
        title="Room for you and your luggage"
      >
        <VehicleCards />
      </Section>

      <PricingSection />

      <Section
        tone="white"
        id="journey-facts"
        eyebrow="Before you book"
        title="What to expect on the day"
      >
        {/* Terminals and the fixed price are already covered by At a glance and Pricing. */}
        <JourneyFacts omit={["terminals", "price"]} />
      </Section>

      <PageFaqs
        items={PRICING_FAQS}
        tone="white"
        summary="Heathrow Minicab provides 24/7 pre-booked minicab transfers to and from Heathrow Terminals 2, 3, 4 and 5 for North and West London, with a fixed price once confirmed."
      />

      <ClosingCta
        tone="photo"
        title="Ready to plan your transfer?"
        text="Book online or call for help with your journey."
        buttonLabel="Call to Book"
        whatsapp
      />
    </>
  );
}
