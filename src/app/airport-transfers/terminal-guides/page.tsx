import type { Metadata } from "next";
import Image from "next/image";
import BookingCta from "@/components/BookingCta";
import Breadcrumb from "@/components/Breadcrumb";
import { MeetingPanel, sectionHeading } from "@/components/GuideBlocks";
import TerminalBoard from "@/components/TerminalBoard";
import { SECTION_CONTAINER } from "@/lib/layout";
import { ALT_PHONE, PRIMARY_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Heathrow Terminal Guides | Heathrow Minicab",
  description:
    "Pickup and drop-off guidance for Heathrow Terminals 2, 3, 4 and 5. Your exact meeting point is confirmed with your booking.",
};

const focusWhite =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

export default function Page() {
  return (
    <>
      {/* Compact two-column hero so visitors reach the guides quickly. The photo is illustrative,
          not a Heathrow meeting-point reference; shown whole at its own 3:2 proportions. */}
      <section aria-labelledby="page-heading" className="bg-[#E6F6FC]">
        <div
          className={`${SECTION_CONTAINER} grid items-center gap-8 py-10 md:grid-cols-[1fr_18rem] md:gap-10 md:py-14 lg:grid-cols-[1fr_26rem]`}
        >
          <div>
            <Breadcrumb
              tone="light"
              items={[
                { href: "/airport-transfers", label: "Airport Transfers" },
                { label: "Terminal Guides" },
              ]}
            />
            <p className="mt-2 text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
              Heathrow terminal guides
            </p>
            <h1
              id="page-heading"
              className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
            >
              Find your way at Heathrow.
            </h1>
            <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-[#0A2740]/80">
              Choose your terminal for pickup and drop-off guidance. Your exact meeting point is
              confirmed with your booking.
            </p>
          </div>
          <Image
            src="/images/terminal-guides-hero.png"
            alt="Traveller with a suitcase approaching an airport terminal."
            width={1536}
            height={1024}
            sizes="(min-width: 1024px) 416px, (min-width: 768px) 288px, 100vw"
            loading="eager"
            fetchPriority="high"
            className="h-auto w-full rounded-2xl"
          />
        </div>
      </section>

      <section aria-labelledby="choose-heading" className="py-12 md:py-16">
        <div className={SECTION_CONTAINER}>
          <h2 id="choose-heading" className={sectionHeading}>
            Choose your terminal
          </h2>
          <div className="mt-6">
            <TerminalBoard />
          </div>
          <p className="mt-4 max-w-[40rem] text-sm leading-relaxed text-[#5B7A93]">
            Detailed terminal-specific guidance is coming soon. Each terminal page currently has our
            general pickup and drop-off information.
          </p>
          <div className="mt-8">
            <MeetingPanel />
          </div>
        </div>
      </section>

      <section aria-labelledby="help-heading" className="bg-[#0A2740] py-10 text-white">
        <div
          className={`${SECTION_CONTAINER} flex flex-col gap-5 md:flex-row md:items-center md:justify-between`}
        >
          <h2 id="help-heading" className="text-xl font-bold md:text-2xl">
            Need help with your terminal?
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <p className="flex flex-wrap gap-x-5 text-sm text-white/80">
              {[
                { phone: PRIMARY_PHONE, label: "Bookings" },
                { phone: ALT_PHONE, label: "Alternative" },
              ].map(({ phone, label }) => (
                <span key={phone.tel}>
                  {label}{" "}
                  <a
                    href={`tel:${phone.tel}`}
                    className={`inline-flex min-h-11 items-center rounded-sm font-semibold text-white underline underline-offset-4 hover:no-underline ${focusWhite}`}
                  >
                    {phone.display}
                  </a>
                </span>
              ))}
            </p>
            <BookingCta tone="dark" onlineOnly />
          </div>
        </div>
      </section>
    </>
  );
}
