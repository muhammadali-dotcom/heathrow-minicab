import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import PageFaqs from "@/components/PageFaqs";
import { PathCards } from "@/components/services/ServiceBlocks";
import {
  ClosingCta,
  FeatureGrid,
  JourneyFacts,
  Section,
  TransfersHero,
  VehicleCards,
} from "@/components/transfers/TransferBlocks";
import { AREA_PROFILES, DEFAULT_AREA_PROFILE } from "@/lib/area-profiles";
import { AREA_REGIONS, AREAS, type Area } from "@/lib/areas";
import { areaFaqs } from "@/lib/faqs";
import { pageMetadata } from "@/lib/seo";
import { BOOK_ONLINE_HREF, SITE_NAME } from "@/lib/site";

// One landing page per confirmed pickup area. Copy is templated from confirmed facts only (no
// journey times or prices); add genuinely local detail per area when it's available.
export const dynamicParams = false;

export function generateStaticParams() {
  return AREAS.map((area) => ({ slug: area.slug }));
}

const regionLabel = (area: Area) =>
  AREA_REGIONS.find((region) => region.id === area.region)?.label ?? "London";

function areaSeo(area: Area) {
  const region = regionLabel(area);
  const long = `Minicab from ${area.name} to Heathrow | ${SITE_NAME}`;
  return {
    // Long area names drop the brand suffix to stay within about 60 characters.
    title: long.length <= 60 ? long : `Minicab from ${area.name} to Heathrow`,
    description: `Heathrow airport transfers from ${area.name}, ${region}, 24/7. Meet and greet in arrivals, flight monitoring and a fixed price once confirmed.`,
    path: `/areas/${area.slug}`,
  };
}

const findArea = (slug: string) => AREAS.find((area) => area.slug === slug);

export async function generateMetadata({ params }: PageProps<"/areas/[slug]">): Promise<Metadata> {
  const area = findArea((await params).slug);
  return area ? pageMetadata(areaSeo(area)) : {};
}

// A line of region-specific context, so North and West London pages read differently.
const REGION_NOTE: Record<Area["region"], (name: string) => string> = {
  north: (name) =>
    `From ${name} and across North London, we plan your collection time around your flight and terminal, so you can travel to Heathrow without the stress of trains, parking or connections.`,
  west: (name) =>
    `${name} is in West London, on Heathrow’s side of the city, which makes it ideal for door-to-terminal transfers and quick trips home after you land.`,
};

const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

export default async function Page({ params }: PageProps<"/areas/[slug]">) {
  const area = findArea((await params).slug);
  if (!area) notFound();

  const seo = areaSeo(area);
  const region = regionLabel(area);
  const nearby = AREAS.filter((a) => a.region === area.region && a.slug !== area.slug);
  const profile = AREA_PROFILES[area.slug] ?? DEFAULT_AREA_PROFILE;
  const faqs = [...profile.localFaqs, ...areaFaqs(area.name, region)];

  return (
    <>
      <WebPageJsonLd {...seo} />
      <ServiceJsonLd
        name={`Heathrow airport transfers from ${area.name}`}
        serviceType="Airport transfer"
        description={seo.description}
        path={seo.path}
        areaServed={[
          { "@type": "Place", name: `${area.name}, London` },
          { "@type": "Airport", name: "London Heathrow Airport", iataCode: "LHR" },
        ]}
      />

      <TransfersHero
        crumbs={[{ href: "/areas", label: "Areas We Cover" }, { label: area.name }]}
        title={`Minicab from ${area.name}`}
        titleAccent="to Heathrow, 24/7."
        intro={`Door-to-terminal journeys from ${area.name} to Heathrow, and pickups from arrivals back home, planned around your flight.`}
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Online" }}
        image={{
          src: "/images/contact-hero.webp",
          width: 1388,
          height: 925,
          alt: `Heathrow Minicab saloons and an MPV ready at a Heathrow terminal for transfers to ${area.name}`,
        }}
      />

      <Section
        tone="navy"
        id="journeys"
        eyebrow={`${area.name} and Heathrow`}
        title={`Heathrow transfers from ${area.name}`}
      >
        <p data-speakable className="mt-3 max-w-[44rem] leading-relaxed text-white/85">
          {SITE_NAME} provides 24/7 minicab transfers between {area.name}, {region}, and Heathrow
          Terminals 2, 3, 4 and 5. Book online, by phone or on WhatsApp, and your price is fixed
          once confirmed.
        </p>
        <PathCards
          items={[
            {
              from: area.name,
              to: "Heathrow",
              text: `We collect you from your door in ${area.name} at a time planned around your flight and take you to your departure terminal.`,
              link: {
                href: "/airport-transfers/heathrow-drop-offs",
                label: "Read the drop-off guide",
              },
            },
            {
              from: "Heathrow",
              to: area.name,
              text: `Your driver meets you inside arrivals with a name board or at an agreed pickup point, and takes you home to ${area.name}.`,
              link: { href: "/airport-transfers/heathrow-pickups", label: "Read the pickup guide" },
            },
          ]}
        />
      </Section>

      <Section
        tone="white"
        id="local-pickups"
        eyebrow={`Local ${area.name} pickups`}
        title={`Useful pickup details for ${area.name}`}
        intro={profile.pickupContext}
      >
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-xl border border-[#D5E8F2] bg-[#E6F6FC] p-6">
            <h2 className="text-xl font-bold text-[#0A2740]">Local places to mention</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#0A2740]/75">
              Use these as landmarks when they are near your pickup address.
            </p>
            <ul className="mt-5 space-y-3">
              {profile.localPlaces.map((place) => (
                <li key={place} className="flex gap-3 text-[#0A2740]">
                  <span
                    aria-hidden="true"
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1FA3D6]"
                  />
                  <span>{place}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <div className="rounded-xl border border-[#D5E8F2] bg-white p-6">
              <h2 className="text-xl font-bold text-[#0A2740]">Route planning</h2>
              <p className="mt-3 leading-relaxed text-[#0A2740]/80">{profile.routeContext}</p>
            </div>
            <div className="rounded-xl border border-[#D5E8F2] bg-white p-6">
              <h2 className="text-xl font-bold text-[#0A2740]">Booking tip</h2>
              <p className="mt-3 leading-relaxed text-[#0A2740]/80">{profile.planningTip}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="pale"
        id="journey-factors"
        eyebrow={`${area.name} journey planning`}
        title={`What affects your journey from ${area.name} to Heathrow?`}
        intro={`Your ${area.name} pickup is planned around your exact address, Heathrow terminal, flight details, passengers, luggage and live road conditions.`}
      >
        <JourneyFacts variant="area" />
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            { href: "/airport-transfers/terminal-guides", label: "Terminal guides" },
            { href: "/airport-transfers/heathrow-pickups", label: "Pickup guide" },
            { href: "/airport-transfers/heathrow-drop-offs", label: "Drop-off guide" },
            { href: "/our-vehicles", label: "Vehicles" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`inline-flex min-h-11 items-center rounded-full border border-[#D5E8F2] bg-white px-4 text-sm font-semibold text-[#0A2740] hover:border-[#0A2740] ${focusNavy}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </Section>

      <Section
        tone="white"
        id="why-book"
        title={`Why travellers in ${area.name} book with us`}
        intro={REGION_NOTE[area.region](area.name)}
      >
        <FeatureGrid
          columns={4}
          compact
          items={[
            {
              icon: "allday",
              title: "Open 24/7",
              text: "Early departures and late arrivals, every day of the year.",
            },
            {
              icon: "board",
              title: "Meet and greet",
              text: "A name board inside arrivals, or an agreed pickup point.",
            },
            {
              icon: "clock",
              title: "Flight monitoring",
              text: "Pickups adjusted for delays, with 15 minutes’ free waiting.",
            },
            {
              icon: "seat",
              title: "Child seats",
              text: "Available on request at no extra cost.",
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="vehicles"
        eyebrow="Our vehicles"
        title="Room for you and your luggage"
      >
        <VehicleCards />
      </Section>

      <PageFaqs
        items={faqs}
        tone="white"
        title={`${area.name} to Heathrow: common questions`}
      />

      <Section tone="pale" id="nearby" title={`Other ${region} areas we cover`}>
        <ul className="mt-6 flex flex-wrap gap-2">
          {nearby.map((a) => (
            <li key={a.slug}>
              <Link
                href={`/areas/${a.slug}`}
                className={`inline-flex min-h-11 items-center rounded-full border border-[#D5E8F2] bg-white px-4 text-sm font-semibold text-[#0A2740] hover:border-[#0A2740] ${focusNavy}`}
              >
                {a.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/areas"
              className={`inline-flex min-h-11 items-center gap-1 rounded-full px-4 text-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 ${focusNavy}`}
            >
              All areas <span aria-hidden="true">→</span>
            </Link>
          </li>
        </ul>
      </Section>

      <ClosingCta
        tone="photo"
        title={`Travelling from ${area.name}?`}
        text="Book online, call or WhatsApp us with your journey details."
        buttonLabel="Call to Book"
        whatsapp={`Hi, I’d like to book a Heathrow transfer from ${area.name}.`}
      />
    </>
  );
}
