import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCta from "@/components/BookingCta";
import {
  CheckList,
  JourneySteps,
  MeetingPanel,
  inlineLink,
  sectionHeading,
} from "@/components/GuideBlocks";
import PageBanner from "@/components/PageBanner";
import StepIcon from "@/components/StepIcon";
import TerminalBoard from "@/components/TerminalBoard";
import { CHECKLIST, DROP_OFFS, PICKUPS } from "@/lib/airportGuidance";
import { SECTION_CONTAINER } from "@/lib/layout";
import { TERMINALS, WHICH_TERMINAL_URL } from "@/lib/terminals";

// Only the four Heathrow terminals exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return TERMINALS.map((terminal) => ({ terminal: terminal.slug }));
}

const findTerminal = (slug: string) => TERMINALS.find((terminal) => terminal.slug === slug);

export async function generateMetadata({
  params,
}: PageProps<"/airport-transfers/[terminal]">): Promise<Metadata> {
  const terminal = findTerminal((await params).terminal);
  if (!terminal) return {};
  return {
    title: `Heathrow ${terminal.name} Taxi Transfers | Heathrow Minicab`,
    description: `Pickups from and drop-offs at Heathrow ${terminal.name}: what to share when booking and how to prepare for your journey.`,
  };
}

const externalLink = `${inlineLink} gap-1`;

export default async function Page({ params }: PageProps<"/airport-transfers/[terminal]">) {
  const terminal = findTerminal((await params).terminal);
  if (!terminal) notFound();

  return (
    <>
      <PageBanner
        image={terminal.image}
        crumb={terminal.name}
        parents={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { href: "/airport-transfers/terminal-guides", label: "Terminal Guides" },
        ]}
        eyebrow="Heathrow terminal guide"
        // Non-breaking space keeps "Terminal N" together when the heading wraps.
        title={`Heathrow ${terminal.name.replace(" ", "\u00a0")} taxi transfers`}
        intro={`Pickups from and drop-offs at Heathrow ${terminal.name}, planned around your flight. Tell us your terminal when you book.`}
        badge={`T${terminal.number}`}
      />

      {/* Quick facts: only confirmed details; airlines link to Heathrow's own guide. */}
      <section aria-label={`${terminal.name} at a glance`} className="border-b border-[#D5E8F2]">
        <dl className={`${SECTION_CONTAINER} grid grid-cols-2 gap-x-6 gap-y-5 py-6 md:grid-cols-4`}>
          {[
            { icon: "sign" as const, label: "Pickups", value: "Available" },
            { icon: "plane" as const, label: "Drop-offs", value: "Available" },
            { icon: "pin" as const, label: "Meeting point", value: "Confirmed with your booking" },
          ].map((fact) => (
            <div key={fact.label} className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F6FC] text-[#1FA3D6]">
                <StepIcon name={fact.icon} />
              </span>
              <div>
                <dt className="text-xs font-semibold tracking-[0.15em] text-[#5B7A93] uppercase">
                  {fact.label}
                </dt>
                <dd className="font-semibold text-[#0A2740]">{fact.value}</dd>
              </div>
            </div>
          ))}
          <div className="flex gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E6F6FC] text-[#1FA3D6]">
              <StepIcon name="terminal" />
            </span>
            <div>
              <dt className="text-xs font-semibold tracking-[0.15em] text-[#5B7A93] uppercase">
                Airlines
              </dt>
              <dd>
                <a
                  href={terminal.heathrowGuideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${inlineLink} min-h-0 gap-1 whitespace-nowrap`}
                >
                  Heathrow guide <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </dd>
            </div>
          </div>
        </dl>
        <p className={`${SECTION_CONTAINER} pb-5 text-sm text-[#5B7A93]`}>
          Detailed {terminal.name} guidance is coming soon. This page has our general pickup and
          drop-off information.
        </p>
      </section>

      <section aria-labelledby="arriving-heading" className="py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="arriving-heading" className={sectionHeading}>
            Arriving at {terminal.name}
          </h2>
          <JourneySteps items={PICKUPS} />
        </div>
      </section>

      <section aria-labelledby="departing-heading" className="bg-[#E6F6FC] py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="departing-heading" className={sectionHeading}>
            Departing from {terminal.name}
          </h2>
          <JourneySteps items={DROP_OFFS} />
        </div>
      </section>

      <section aria-labelledby="meeting-heading" className="py-14 md:py-20">
        <div className={`${SECTION_CONTAINER} grid gap-10 md:grid-cols-2`}>
          <div>
            <h2 id="meeting-heading" className={sectionHeading}>
              Meeting your driver
            </h2>
            <div className="mt-6">
              <MeetingPanel />
            </div>
          </div>
          <div>
            <h2 className={sectionHeading}>Check your terminal</h2>
            <p className="mt-6 leading-relaxed text-[#0A2740]/80">
              Airlines can change terminals. Check with your airline or Heathrow’s official
              terminal guide before you travel, and let us know if your terminal changes.
            </p>
            <ul className="mt-3">
              <li>
                <a
                  href={terminal.heathrowGuideUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  Heathrow’s {terminal.name} guide <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={WHICH_TERMINAL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={externalLink}
                >
                  Which terminal is my airline? <span aria-hidden="true">↗</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="before-heading" className="bg-[#E6F6FC] py-14 md:py-20">
        <div className={`${SECTION_CONTAINER} grid gap-10 md:grid-cols-2`}>
          <div>
            <h2 id="before-heading" className={sectionHeading}>
              Before you travel
            </h2>
            <div className="mt-6">
              <CheckList items={CHECKLIST} />
            </div>
            <p className="mt-6 text-[#0A2740]/80">
              Choosing a vehicle?{" "}
              <Link href="/our-vehicles" className={inlineLink}>
                See our vehicles
              </Link>
            </p>
          </div>
          <div>
            <h2 className={sectionHeading}>Book your {terminal.name} transfer</h2>
            <div className="mt-6">
              <BookingCta />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="other-terminals-heading" className="py-14 md:py-16">
        <div className={SECTION_CONTAINER}>
          <h2 id="other-terminals-heading" className={sectionHeading}>
            Heathrow terminal guides
          </h2>
          <div className="mt-6">
            <TerminalBoard current={terminal.slug} />
          </div>
          <p className="mt-4">
            <Link href="/airport-transfers/terminal-guides" className={inlineLink}>
              All terminal guides
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
