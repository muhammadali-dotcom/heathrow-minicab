import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckList,
  GuideCard,
  inlineLink,
  sectionHeading,
} from "@/components/GuideBlocks";
import PageBanner, { BANNER_IMAGES } from "@/components/PageBanner";
import { CHECKLIST } from "@/lib/airportGuidance";
import { SECTION_CONTAINER } from "@/lib/layout";

export const metadata: Metadata = {
  title: "Heathrow Pickups & Drop-offs | Heathrow Minicab",
  description:
    "Heathrow pickup and drop-off information: what to share when booking, terminal guides and how to prepare for your journey.",
};

const PICKUPS_HREF = "/airport-transfers/heathrow-pickups";
const DROP_OFFS_HREF = "/airport-transfers/heathrow-drop-offs";
const TERMINAL_GUIDES_HREF = "/airport-transfers/terminal-guides";

const bannerLinks = [
  { href: PICKUPS_HREF, label: "Heathrow pickups" },
  { href: DROP_OFFS_HREF, label: "Heathrow drop-offs" },
  { href: TERMINAL_GUIDES_HREF, label: "Terminal guides" },
];

// Overview hub: each topic has its own page.
export default function Page() {
  return (
    <>
      <PageBanner
        image="t2"
        crumb="Airport Transfers"
        title="Heathrow pickup and drop-off information"
        intro="Arriving at Heathrow or heading to your departure terminal? Check what to share when booking and how to prepare for your journey."
        links={bannerLinks}
      />

      <section aria-labelledby="plan-heading" className="py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="plan-heading" className={sectionHeading}>
            Plan your journey
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            <li>
              <GuideCard
                href={PICKUPS_HREF}
                title="Arriving at Heathrow"
                text="What to share when booking a pickup and how your meeting is arranged."
                image={BANNER_IMAGES.arrival}
              />
            </li>
            <li>
              <GuideCard
                href={DROP_OFFS_HREF}
                title="Departing from Heathrow"
                text="What to share for a drop-off and how to plan your collection time."
                image={BANNER_IMAGES.early}
              />
            </li>
          </ul>
        </div>
      </section>

      {/* Kept as an anchor for old #terminal-guides links; the guides have their own page. */}
      <section
        id="terminal-guides"
        aria-labelledby="terminal-guides-heading"
        className="bg-[#E6F6FC] py-12 md:py-14"
      >
        <div
          className={`${SECTION_CONTAINER} flex flex-col gap-4 md:flex-row md:items-center md:justify-between`}
        >
          <div>
            <h2 id="terminal-guides-heading" className={sectionHeading}>
              Heathrow terminal guides
            </h2>
            <p className="mt-2 leading-relaxed text-[#0A2740]/80">
              Pickup and drop-off information for Terminals 2, 3, 4 and 5.
            </p>
          </div>
          <Link href={TERMINAL_GUIDES_HREF} className={inlineLink}>
            Go to Terminal Guides <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="before-heading" className="py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="before-heading" className={sectionHeading}>
            Before you travel
          </h2>
          <div className="mt-6 max-w-[40rem]">
            <CheckList items={CHECKLIST} />
          </div>
          <p className="mt-8 flex flex-wrap gap-x-8 gap-y-1 text-[#0A2740]/80">
            <span>
              Choosing a vehicle?{" "}
              <Link href="/our-vehicles" className={inlineLink}>
                See our vehicles
              </Link>
            </span>
            <span>
              More questions?{" "}
              <Link href="/faqs" className={inlineLink}>
                Read our FAQs
              </Link>
            </span>
          </p>
        </div>
      </section>
    </>
  );
}
