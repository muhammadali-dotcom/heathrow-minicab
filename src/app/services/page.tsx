import type { Metadata } from "next";
import { WebPageJsonLd } from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import { DetailCards } from "@/components/services/ServiceBlocks";
import ServiceAreas from "@/components/services/ServiceAreas";
import { Section } from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { SERVICES } from "@/lib/services";

const seo = {
  title: "Heathrow Airport Transfer Services | Heathrow Minicab",
  description:
    "Heathrow transfer services for families and groups, hotels, airport-to-airport journeys, long-distance trips and business travel, 24/7.",
  path: "/services",
};

export const metadata: Metadata = pageMetadata(seo);

// The services hub: one card per service page, in menu order, so "Services" in the breadcrumb
// has a page of its own.
export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} type="CollectionPage" />
      <PageBanner
        image="family"
        crumb="Services"
        title="Heathrow airport transfer services"
        intro="Every service is a private hire journey to or from Heathrow Terminals 2–5, available 24/7."
      />

      <Section
        tone="white"
        id="services"
        title="Choose the transfer that fits your trip"
        intro="All of our services use the same booking, flight monitoring and meet-and-greet in arrivals. What changes is the vehicle, the route and what we plan around: luggage, extra stops, a second airport or a meeting to get to."
      >
        <DetailCards
          items={SERVICES.map((service) => ({
            label: service.title,
            hint: service.summary,
            link: { href: `/services/${service.slug}`, label: "See this service" },
          }))}
        />
      </Section>

      <Section
        tone="pale"
        id="not-sure"
        title="Not sure which service you need?"
        intro="Tell us how many people are travelling, how many bags you have, where you’re starting from and your flight details. We’ll suggest the right vehicle and service when you book, by phone, WhatsApp or online."
      >
        <DetailCards
          items={[
            {
              label: "Flying from Heathrow",
              hint: "Door-to-terminal journeys planned around your departure time and terminal.",
              link: { href: "/airport-transfers/heathrow-drop-offs", label: "Drop-off guide" },
            },
            {
              label: "Arriving at Heathrow",
              hint: "We monitor your flight and meet you in arrivals or at an agreed pickup point.",
              link: { href: "/airport-transfers/heathrow-pickups", label: "Pickup guide" },
            },
            {
              label: "Choosing a vehicle",
              hint: "Compare saloon, estate, MPV and executive cars by passengers and suitcases.",
              link: { href: "/our-vehicles", label: "Vehicle guide" },
            },
          ]}
        />
      </Section>

      {/* The footer's sitewide booking band closes this page, as on /areas. */}
      <ServiceAreas tone="white" />
    </>
  );
}
