import type { Metadata } from "next";
import {
  ClosingCta,
  Columns,
  ExternalLink,
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
    "Official Heathrow guides for Terminals 2, 3, 4 and 5. Your driver meeting arrangements are confirmed with your booking.",
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
        title={["Find your terminal.", "Confirm your meeting point."]}
        intro="Use Heathrow’s official guides for terminal facilities and maps. Your booking confirmation provides your own driver meeting arrangements."
        cta={{ href: "#choose-terminal", label: "Choose your terminal" }}
        image={{
          src: "/images/terminal-guides-hero.png",
          width: 1536,
          height: 1024,
          alt: "Traveller with a suitcase approaching an airport terminal",
          position: "30% 50%",
        }}
      />

      <Section
        tone="navy"
        id="choose-terminal"
        title="Choose your terminal"
        intro="Open the official terminal guide for current airport information."
      >
        <ul className="mt-4">
          {TERMINALS.map((terminal) => (
            <li
              key={terminal.number}
              className="grid grid-cols-[3.5rem_1fr] items-center gap-x-4 gap-y-1 border-b border-white/15 py-5 sm:grid-cols-[4.5rem_1fr_auto] sm:gap-x-6"
            >
              <span
                aria-hidden="true"
                className="row-span-2 flex h-14 items-center justify-center rounded-lg bg-[#12385A] text-xl font-bold text-[#4FB8E0] sm:row-span-1 sm:h-16 sm:text-2xl"
              >
                T{terminal.number}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white">{terminal.name}</h3>
                <p className="text-sm text-white/80">Terminal information, facilities and maps.</p>
              </div>
              <div className="col-start-2 sm:col-start-auto">
                <ExternalLink href={terminal.heathrowGuideUrl}>
                  Official guide<span className="sr-only">: Heathrow {terminal.name}</span>
                </ExternalLink>
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
        tone="white"
        title="Need help finding your meeting point?"
        text="Call with your booking details and terminal."
        buttonLabel="Call for Help"
      />
    </>
  );
}
