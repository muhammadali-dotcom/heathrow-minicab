import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { FAMILY_FAQS } from "@/lib/faqs";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { DetailCards, PathCards } from "@/components/services/ServiceBlocks";
import VehiclePicker from "@/components/services/VehiclePicker";
import {
  Checklist,
  ClosingCta,
  Eyebrow,
  Section,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { findService } from "@/lib/services";
import { BOOK_ONLINE_HREF } from "@/lib/site";
import type { Vehicle } from "@/lib/vehicles";

const service = findService("family-group-transfers");
const path = `/services/${service.slug}`;

const GOOD_FOR: Record<Vehicle["id"], string> = {
  saloon: "Couples and small families",
  estate: "Families with extra luggage",
  mpv: "Families and groups",
  executive: "A more comfortable ride",
};

const seo = {
  title: "Family & Group Heathrow Transfers | Heathrow Minicab",
  description:
    "Heathrow transfers for families and groups, with MPVs for up to 6 passengers, room for luggage and child seats on request at no extra cost.",
  path,
};

export const metadata: Metadata = pageMetadata(seo);

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <ServiceJsonLd
        name="Family and group Heathrow transfers"
        serviceType="Airport transfer"
        description="Heathrow airport transfers for families and groups, with vehicles chosen for passengers and luggage."
        path={path}
      />
      <TransfersHero
        crumbs={[{ label: "Services" }, { label: service.title }]}
        title="Your holiday"
        titleAccent="starts with the right vehicle"
        intro="Bring the family, friends and bags. We’ll help you choose a suitable vehicle for your airport journey."
        primary={{ href: BOOK_ONLINE_HREF, label: "Plan Your Family Transfer" }}
        image={service.image}
      />

      <Section
        tone="navy"
        id="room"
        title="Room for your people and your bags"
        intro="The right vehicle depends on two numbers: how many people are travelling and how much luggage you’re bringing."
      >
        <DetailCards
          items={[
            { label: "Count everyone", hint: "Adults, children and infants all need a seat." },
            {
              label: "Count every bag",
              hint: "Large suitcases and small bags, counted separately.",
            },
            {
              label: "Mention bulky items",
              hint: "Pushchairs, golf bags or anything oversized.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="vehicles">
        {/* Centred header; Section's aria-labelledby points at this H2 by id. */}
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Bring everyone. Bring the bags.</Eyebrow>
          <h2
            id="vehicles-heading"
            className="mt-3 text-2xl leading-snug font-bold tracking-tight text-[#0A2740] md:text-3xl"
          >
            Which vehicle fits your group?
          </h2>
          <p className="mt-2 text-lg text-[#0A2740]/75">
            Find the right fit for your family before you travel.
          </p>
        </div>
        <VehiclePicker goodFor={GOOD_FOR} />
      </Section>

      <Section tone="white" id="child-seats" title="Little travellers and extra pickups">
        <PathCards
          items={[
            {
              title: "Child seats at no extra cost",
              text: "Request a child seat when you book and tell us each child’s age so we can arrange a suitable seat.",
            },
            {
              title: "Extra collection stops",
              text: "Give us every collection address when you book, and we’ll include the extra stops in your quote.",
            },
          ]}
        />
      </Section>

      <Section tone="pale" id="booking-checklist" title="Tell us who’s travelling">
        <Checklist
          items={[
            "Number of adults",
            "Children and their ages",
            "Child seat requests",
            "Large suitcases and small bags",
            "Collection address(es)",
            "Destination",
            "Flight number, date and time",
            "Airport and terminal",
            "A mobile number we can reach you on",
          ]}
        />
      </Section>

      <PageFaqs
        items={FAMILY_FAQS}
        tone="white"
        summary="Family and group Heathrow transfers carry up to 6 passengers in an MPV with room for luggage, with child seats on request at no extra cost and extra stops included in your quote."
      />

      <ClosingCta
        tone="photo"
        title="Start your holiday with the ride arranged"
        text="Share your group size and luggage so we can help choose a vehicle."
        buttonLabel="Call to Book"
        whatsapp="Hi, I’d like to arrange a family or group transfer to or from Heathrow."
      />
    </>
  );
}
