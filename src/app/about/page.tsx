import type { Metadata } from "next";
import Link from "next/link";
import { ctaButtonClass } from "@/components/BookingCta";
import PhoneIcon from "@/components/PhoneIcon";
import { DetailCards, SplitChecklist } from "@/components/services/ServiceBlocks";
import { FeatureGrid, Section, TransfersHero } from "@/components/transfers/TransferBlocks";
import { SECTION_CONTAINER } from "@/lib/layout";
import { WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { PRIMARY_PHONE, BUSINESS_SUMMARY } from "@/lib/site";

// Facts here are limited to confirmed service details: no founding date, location, history,
// figures or credentials, and the parent company isn't named.
const seo = {
  title: "About Heathrow Minicab | Heathrow Airport Transfers",
  description:
    "Heathrow Minicab is a 24/7 private hire service based in Mill Hill, North London, for Heathrow airport transfers to and from Terminals 2, 3, 4 and 5.",
  path: "/about",
};

export const metadata: Metadata = pageMetadata(seo);

const focusWhite =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} type="AboutPage" />
      <TransfersHero
        crumbs={[{ label: "About Us" }]}
        title="Travel calmer."
        titleAccent="We'll take care of the rest."
        intro="Get to know the care behind your airport journey."
        primary={{ href: "/contact", label: "Get in touch" }}
        showCall={false}
        image={{
          src: "/Warm Heathrow Welcome with Private Hire.png",
          width: 1536,
          height: 1024,
          alt: "Friendly private hire driver welcoming a traveller at Heathrow",
        }}
      />

      <Section tone="navy" id="who-we-are" title="Airport journeys, made simple.">
        <p className="mt-4 max-w-[44rem] text-lg leading-relaxed text-white/85">
          {BUSINESS_SUMMARY} Book online, by phone or on WhatsApp. We collect you from your door or
          meet you in arrivals, and plan each journey around your flight and terminal. We also
          arrange hotel transfers, airport-to-airport connections, long-distance journeys, business
          travel and family trips, in saloon, estate, MPV and executive cars.
        </p>
      </Section>

      <Section tone="pale" id="what-matters" title="Care in the little things.">
        <FeatureGrid
          items={[
            {
              icon: "chat",
              title: "Clear communication",
              text: "Your meeting arrangements are confirmed when you book, and you can reach us by phone or WhatsApp, day or night.",
            },
            {
              icon: "car",
              title: "Comfortable journeys",
              text: "We help you choose a vehicle with room for everyone and all their luggage, with child seats on request at no extra cost.",
            },
            {
              icon: "people",
              title: "Helpful people",
              text: "Our team helps you plan collection times, extra stops and return journeys around your flights, and answers your questions before you book.",
            },
          ]}
        />
      </Section>

      <Section
        tone="white"
        id="what-we-help-with"
        eyebrow="What we help with"
        title="Airport transfer help for different journeys"
        intro="Most bookings start with the same need: a clear plan for getting to or from Heathrow. We help with the details around that journey, not just the drive."
      >
        <DetailCards
          items={[
            {
              label: "Heathrow pickups",
              hint: "Meet your driver in arrivals with a name board or at the agreed pickup point confirmed with your booking.",
              link: { href: "/airport-transfers/heathrow-pickups", label: "Pickup guide" },
            },
            {
              label: "Heathrow drop-offs",
              hint: "Plan a door-to-terminal journey around your flight time, terminal, passengers and luggage.",
              link: { href: "/airport-transfers/heathrow-drop-offs", label: "Drop-off guide" },
            },
            {
              label: "Hotels and other airports",
              hint: "Arrange transfers between Heathrow and hotels, Gatwick, Stansted, Luton or London City.",
              link: {
                href: "/services/airport-to-airport-transfers",
                label: "Airport connections",
              },
            },
            {
              label: "Families, groups and business trips",
              hint: "Choose saloon, estate, MPV or executive cars, with child seats available on request at no extra cost.",
              link: { href: "/our-vehicles", label: "Vehicle guide" },
            },
          ]}
        />
      </Section>

      <Section
        tone="pale"
        id="how-we-plan"
        eyebrow="How we plan"
        title="The details we check before you travel"
        intro="A good airport transfer depends on the information being clear before the day, especially when flights, terminals or luggage change."
      >
        <SplitChecklist
          groups={[
            {
              title: "Flight and terminal",
              items: ["Flight number", "Heathrow terminal", "Arrival or departure time"],
            },
            {
              title: "Passengers and luggage",
              items: ["Number of passengers", "Large suitcases", "Small bags and bulky items"],
            },
            {
              title: "Booking confirmation",
              items: ["Pickup address or meeting point", "Reachable mobile number", "Return details, if needed"],
            },
          ]}
        />
      </Section>

      <section aria-labelledby="contact-heading" className="bg-white py-12 md:py-16">
        <div className={SECTION_CONTAINER}>
          <div className="rounded-xl bg-[#0A2740] p-8 md:p-10">
            <h2
              id="contact-heading"
              className="text-2xl leading-snug font-bold tracking-tight text-white"
            >
              Tell us where you’re heading.
            </h2>
            <p className="mt-2 text-lg leading-relaxed text-white/85">
              Have a question about your airport journey? Get in touch.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className={`${ctaButtonClass} min-h-12 px-6 text-base ${focusWhite}`}
              >
                Get in touch
              </Link>
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                aria-label={`Call us: ${PRIMARY_PHONE.display}`}
                className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md border-2 border-white px-6 text-base font-semibold whitespace-nowrap text-white hover:bg-white/10 ${focusWhite}`}
              >
                Call us
                <PhoneIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
