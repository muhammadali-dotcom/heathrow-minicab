import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCta from "@/components/BookingCta";
import {
  CheckList,
  InfoList,
  MeetingPanel,
  focusNavy,
  inlineLink,
  sectionHeading,
} from "@/components/GuideBlocks";
import PageBanner from "@/components/PageBanner";
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

  const others = TERMINALS.filter((t) => t.slug !== terminal.slug);

  return (
    <>
      <PageBanner
        image={terminal.image}
        crumb={terminal.name}
        parent={{ href: "/airport-transfers", label: "Airport Transfers" }}
        eyebrow="Heathrow terminal guide"
        // Non-breaking space keeps "Terminal N" together when the heading wraps.
        title={`Heathrow ${terminal.name.replace(" ", "\u00a0")} taxi transfers`}
        intro={`Pickups from and drop-offs at Heathrow ${terminal.name}, planned around your flight. Tell us your terminal when you book.`}
      />

      <section aria-labelledby="arriving-heading" className="py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="arriving-heading" className={sectionHeading}>
            Arriving at {terminal.name}
          </h2>
          <InfoList items={PICKUPS} />
        </div>
      </section>

      <section aria-labelledby="departing-heading" className="bg-[#E6F6FC] py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="departing-heading" className={sectionHeading}>
            Departing from {terminal.name}
          </h2>
          <InfoList items={DROP_OFFS} />
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

      <nav aria-labelledby="other-terminals-heading" className="py-12">
        <div className={SECTION_CONTAINER}>
          <h2 id="other-terminals-heading" className="text-lg font-semibold text-[#0A2740]">
            Other Heathrow terminals
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {others.map((t) => (
              <li key={t.slug}>
                <Link
                  href={`/airport-transfers/${t.slug}`}
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-md bg-[#0A2740] px-4 text-sm font-semibold text-white hover:bg-[#12385A] ${focusNavy}`}
                >
                  {t.name}
                  <span aria-hidden="true">→</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/airport-transfers"
                className={`inline-flex min-h-11 items-center rounded-md border border-[#0A2740] px-4 text-sm font-semibold text-[#0A2740] hover:bg-[#E6F6FC] ${focusNavy}`}
              >
                All Heathrow pickup &amp; drop-off info
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
