import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { TERMINAL_FAQS } from "@/lib/faqs";
import { WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import {
  HelpPanel,
  RouteSteps,
  Section,
  TransfersHero,
  textLink,
} from "@/components/transfers/TransferBlocks";
import TerminalSelector from "@/components/transfers/TerminalSelector";

const seo = {
  title: "Heathrow Terminals 2, 3, 4 & 5 Guide for Transfers",
  description:
    "Arriving at or flying from Heathrow Terminal 2, 3, 4 or 5? Arrival and departure guidance and help meeting your minicab driver.",
  path: "/airport-transfers/terminal-guides",
};

export const metadata: Metadata = pageMetadata(seo);

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <TransfersHero
        crumbs={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { label: "Terminal Guides" },
        ]}
        eyebrow="Heathrow terminal guides"
        title="Know your terminal."
        titleAccent="Find your driver."
        intro="Explore Heathrow Terminals 2, 3, 4 and 5, with arrival and departure guidance and help meeting your driver."
        primary={{ href: "#choose-terminal", label: "Choose Your Terminal" }}
        secondaryLabel="Call for Help"
        image={{
          src: "/images/terminal-guides-hero-2.webp",
          width: 1536,
          height: 1024,
          alt: "Traveller with a suitcase looking up at an Arrivals and Departures sign inside an airport terminal",
        }}
      />

      <Section
        tone="navy"
        id="choose-terminal"
        title="Choose your terminal"
        intro="Select a terminal to see arrival and departure guidance."
      >
        <TerminalSelector />
      </Section>

      <Section tone="pale" id="after-you-land" title="After you land">
        <RouteSteps
          steps={[
            {
              icon: "luggage",
              title: "Collect your luggage",
              text: "Clear passport control and collect your bags.",
            },
            {
              icon: "board",
              title: "Check your meeting instructions",
              text: "Your booking confirmation explains where to meet your driver.",
            },
            {
              icon: "car",
              title: "Meet your driver",
              text: "Meet your driver, or contact us if you need help.",
            },
          ]}
        />
        <div className="mt-8 md:text-center">
          <Link href="/airport-transfers/heathrow-pickups" className={textLink}>
            Read our pickup guide <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Section>

      <Section tone="white">
        <HelpPanel
          headingLevel="h2"
          className=""
          text="Stay inside the terminal at a clearly signed location. Contact us with your booking name, terminal and nearest landmark."
          primaryLabel="Call Us"
          showAltPhone={false}
          whatsappLabel="WhatsApp Us"
        />
      </Section>
      <PageFaqs
        items={TERMINAL_FAQS}
        tone="pale"
        summary="Heathrow Minicab covers all four Heathrow passenger terminals (2, 3, 4 and 5) for arrivals and departures, with your meeting point confirmed for your terminal when you book."
      />
    </>
  );
}
