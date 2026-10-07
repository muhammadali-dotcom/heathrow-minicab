import type { Metadata } from "next";
import { ServiceJsonLd } from "@/components/JsonLd";
import {
  DetailCards,
  MessagePreview,
  PathCards,
  RegionChips,
} from "@/components/services/ServiceBlocks";
import { ClosingCta, Section, TransfersHero } from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";

const service = findService("long-distance-airport-transfers");
const path = `/services/${service.slug}`;

export const metadata: Metadata = pageMetadata({
  title: "Long-Distance Heathrow Transfers | South East, Oxford & Cambridge",
  description:
    "Long-distance Heathrow airport transfers to and from Brighton, Southampton, Portsmouth, Kent, Surrey, Sussex, Oxford and Cambridge.",
  path,
});

export default function Page() {
  return (
    <>
      <ServiceJsonLd
        name="Long-distance Heathrow airport transfers"
        serviceType="Airport transfer"
        description="Heathrow transfers to and from the South East, Oxford and Cambridge."
        path={path}
      />
      <TransfersHero
        crumbs={[{ label: "Services" }, { label: service.title }]}
        eyebrow="Long-distance airport transfers"
        title="Land at Heathrow."
        titleAccent="Let us take you home."
        intro="Your flight is over. Sit back while we take you home, with your journey arranged before you land."
        primary={{ href: BOOK_ONLINE_HREF, label: "Get a Quote" }}
        image={service.image}
      />

      <Section
        tone="navy"
        id="destinations"
        title="Example long-distance destinations"
        intro="These are common journeys, not our full coverage. Ask us if your town or route is not listed."
      >
        <RegionChips
          regions={[
            {
              name: "South East",
              places: ["Brighton", "Southampton", "Portsmouth", "Kent", "Surrey", "Sussex"],
            },
            { name: "Oxford & Cambridge", places: ["Oxford", "Cambridge"] },
          ]}
        />
        <p className="mt-6 text-white/85">
          Another destination?{" "}
          <a
            href={`https://wa.me/442083434444?text=${encodeURIComponent(
              "Hi, do you offer a Heathrow transfer to/from [destination]?",
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center gap-1 rounded-sm font-semibold text-white underline decoration-[#4FB8E0] decoration-2 underline-offset-4 hover:decoration-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Ask us on WhatsApp <span aria-hidden="true">→</span>
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </p>
      </Section>

      <Section tone="pale" id="directions" title="To Heathrow or home again">
        <PathCards
          items={[
            {
              from: "Your door",
              to: "Heathrow",
              text: "We collect you at a time planned around your flight and take you to your departure terminal.",
              link: {
                href: "/airport-transfers/heathrow-drop-offs",
                label: "Read the drop-off guide",
              },
            },
            {
              from: "Heathrow",
              to: "Home",
              text: "After you land, your driver meets you and takes you onward to your destination.",
              link: { href: "/airport-transfers/heathrow-pickups", label: "Read the pickup guide" },
            },
          ]}
        />
      </Section>

      <Section tone="white" id="planning" title="Plan a comfortable journey">
        <DetailCards
          items={[
            {
              label: "Collection timing",
              hint: "For departures, we agree a time that allows for the distance, traffic and your airline’s check-in.",
            },
            {
              label: "Luggage",
              hint: "Tell us your large suitcases and small bags so we can suggest a vehicle with room.",
            },
            { label: "Stops", hint: "Requested stops are agreed in your quote before you book." },
            {
              label: "Your fare",
              hint: "Fixed when confirmed. Any additional waiting or changes are charged as explained before booking.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="booking-checklist" title="Send us your journey details">
        <MessagePreview
          intro="Hi, I’d like a long-distance Heathrow transfer quote."
          lines={[
            "Pickup address and postcode",
            "Destination address",
            "Airport and terminal",
            "Flight number, date and time",
            "Stops along the way",
            "Passengers, suitcases and bags",
            "A mobile number we can reach you on",
          ]}
        />
      </Section>

      <ClosingCta
        tone="photo"
        title="Let’s plan the journey ahead"
        text="Share your addresses and flight details for a quote."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like a quote for a long-distance Heathrow transfer."
      />
    </>
  );
}
