import type { Metadata } from "next";
import {
  ClosingCta,
  Columns,
  InfoAside,
  Section,
  SubHeading,
  TransfersHero,
  textLink,
} from "@/components/transfers/TransferBlocks";
import Link from "next/link";
import { TERMINALS } from "@/lib/terminals";

export const metadata: Metadata = {
  title: "Heathrow Terminal Guides | Heathrow Minicab",
  description:
    "Heathrow Terminals 2, 3, 4 and 5: find your terminal and how you’ll meet your driver. Meeting arrangements are confirmed with your booking.",
};

export default function Page() {
  return (
    <>
      <TransfersHero
        crumbs={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { label: "Terminal Guides" },
        ]}
        eyebrow="Heathrow terminal guides"
        title="Find your Heathrow terminal and meeting point."
        intro="Find your Heathrow terminal and know how you’ll meet your driver, with your meeting arrangements confirmed when you book."
        primary={{ href: "#choose-terminal", label: "Choose Your Terminal" }}
        image={{
          src: "/images/terminal-guides-hero.png",
          width: 1536,
          height: 1024,
          alt: "Traveller with a suitcase approaching an airport terminal",
        }}
      />

      <Section
        tone="navy"
        id="choose-terminal"
        title="Choose your terminal"
        intro="Check your airline or flight confirmation to see which terminal you’re using."
      >
        <ul className="mt-4">
          {TERMINALS.map((terminal) => (
            <li
              key={terminal.number}
              className="grid grid-cols-[3.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-white/15 py-5 sm:grid-cols-[4.5rem_1fr] sm:gap-x-6"
            >
              <span
                aria-hidden="true"
                className="flex h-14 items-center justify-center rounded-lg bg-[#12385A] text-xl font-bold text-[#4FB8E0] sm:h-16 sm:text-2xl"
              >
                T{terminal.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{terminal.name}</h3>
                <p className="text-sm text-white/80">Arrivals pickups and departure drop‑offs.</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="pale">
        <Columns
          main={
            <>
              <SubHeading>Use your confirmed pickup instructions</SubHeading>
              <p className="mt-3 leading-relaxed text-[#0A2740]/80">
                A terminal map and your booking instructions do different jobs:
              </p>
              <dl className="mt-4 space-y-3">
                <div>
                  <dt className="font-semibold text-[#0A2740]">Terminal map</dt>
                  <dd className="leading-relaxed text-[#0A2740]/80">
                    Where airport facilities are located.
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-[#0A2740]">Booking instructions</dt>
                  <dd className="leading-relaxed text-[#0A2740]/80">
                    Where your driver will meet you.
                  </dd>
                </div>
              </dl>
              <p className="mt-4 leading-relaxed text-[#0A2740]/80">
                A shop or meeting point shown on another operator’s website may not be your meeting
                point. Follow the arrangements agreed for your booking.
              </p>
              <Link href="/airport-transfers/heathrow-pickups" className={`${textLink} mt-2`}>
                Read our Heathrow pickup guidance <span aria-hidden="true">→</span>
              </Link>
            </>
          }
          aside={
            <InfoAside title="Terminal changed?">
              Let us know as soon as possible so we can confirm where your driver should meet you.
            </InfoAside>
          }
        />
      </Section>

      <ClosingCta
        tone="photo"
        title="Need help finding your meeting point?"
        text="Call with your booking details and terminal."
        buttonLabel="Call for Help"
      />
    </>
  );
}
