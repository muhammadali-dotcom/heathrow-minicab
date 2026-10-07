import type { Metadata } from "next";
import Link from "next/link";
import { ctaButtonClass } from "@/components/BookingCta";
import PhoneIcon from "@/components/PhoneIcon";
import { FeatureGrid, Section, TransfersHero } from "@/components/transfers/TransferBlocks";
import { SECTION_CONTAINER } from "@/lib/layout";
import { WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { PRIMARY_PHONE } from "@/lib/site";

// Facts here are limited to confirmed service details: no founding date, location, history,
// figures or credentials, and the parent company isn't named.
const seo = {
  title: "About Heathrow Minicab | Heathrow Airport Transfers",
  description:
    "Heathrow Minicab is a local 24/7 private hire service for Heathrow airport transfers from North and West London, to and from Terminals 2, 3, 4 and 5.",
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
        eyebrow="About Heathrow Minicab"
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
          Heathrow Minicab is a local private hire service for North and West London, running 24/7
          to and from Heathrow Terminals 2, 3, 4 and 5. Book online, by phone or on WhatsApp. We
          collect you from your door or meet you in arrivals, and plan each journey around your
          flight and terminal. We also arrange hotel transfers, airport-to-airport connections,
          long-distance journeys, business travel and family trips, in saloon, estate, MPV and
          executive cars.
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
