import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { PICKUP_FAQS } from "@/lib/faqs";
import { ServiceJsonLd, WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import {
  Checklist,
  Columns,
  Eyebrow,
  FeatureIcon,
  HelpPanel,
  InfoAside,
  JourneyFacts,
  Section,
  SubHeading,
  Timeline,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { BOOK_ONLINE_HREF } from "@/lib/site";
import MaskHeading from "@/components/MaskHeading";
import StaggerIn from "@/components/StaggerIn";

const seo = {
  title: "Heathrow Airport Pickups | Meet & Greet Minicab",
  description:
    "Heathrow airport pickup with a name board in arrivals. We monitor your flight, and 15 minutes’ free waiting starts at your agreed pickup time.",
  path: "/airport-transfers/heathrow-pickups",
};

export const metadata: Metadata = pageMetadata(seo);

const waitingSteps = [
  {
    icon: "plane",
    title: "Your flight lands",
    text: "We use your flight’s landing time to plan your pickup.",
  },
  {
    icon: "luggage",
    title: "Time to collect your bags",
    text: "Agree a pickup time that allows for passport control and baggage collection.",
  },
  {
    icon: "clock",
    title: "Your agreed pickup time",
    text: "Your 15 minutes of free waiting starts here.",
  },
] as const;

const waitingCharges = [
  {
    icon: "clock",
    title: "After 15 minutes",
    text: "Charged at the rate confirmed before you book.",
  },
  {
    icon: "tag",
    title: "Parking charges",
    text: "Any applicable parking charge is confirmed with your quote.",
  },
] as const;

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <ServiceJsonLd
        name="Heathrow airport pickups"
        serviceType="Airport pickup"
        description="Meet and greet with a name board in Heathrow arrivals, with flight monitoring and 15 minutes' free waiting."
        path="/airport-transfers/heathrow-pickups"
      />
      <TransfersHero
        crumbs={[
          { href: "/airport-transfers", label: "Airport Transfers" },
          { label: "Heathrow Pickups" },
        ]}
        title="Heathrow pickups,"
        titleAccent="from arrivals to your door."
        intro="Your pickup point is confirmed when you book, so you know where to go after you land."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Your Pickup" }}
        image={{
          src: "/images/pickups-hero.webp",
          width: 1536,
          height: 1024,
          alt: "Driver in a suit holding a welcome sign, greeting a smiling traveller with a suitcase in an airport arrivals hall",
        }}
      />

      <Section tone="navy" id="meet-and-greet">
        <StaggerIn className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
          <div className="md:order-2">
            <Eyebrow>Meet and greet</Eyebrow>
            <MaskHeading
              id="meet-and-greet-heading"
              className="mt-3 text-2xl leading-snug font-bold tracking-tight text-white md:text-3xl"
              parts={[{ text: "Look for your name in arrivals" }]}
            />
            <p className="mt-4 leading-relaxed text-white/85">
              Your driver meets you inside the arrivals hall with a name board, or at a pickup
              location agreed with your booking.
            </p>
            <p className="mt-4 leading-relaxed text-white/85 italic">
              Keep your phone switched on when you land so we can reach you.
            </p>
          </div>
          <div className="md:order-1">
            <Image
              src="/images/pickups-meet-and-greet-v2.jpg"
              alt="Professional private hire driver holding a welcome board inside Heathrow arrivals"
              width={768}
              height={1152}
              sizes="(min-width: 768px) 256px, 70vw"
              className="mx-auto h-auto w-full max-w-[16rem] rounded-xl"
            />
          </div>
        </StaggerIn>
      </Section>

      <Section tone="pale">
        <Columns
          main={
            <>
              <SubHeading text="After your flight lands" />
              <Timeline
                steps={[
                  {
                    title: "Clear arrivals and collect your bags",
                    text: "Allow time for passport control and baggage collection when arranging your pickup.",
                  },
                  {
                    title: "Check your confirmed meeting instructions",
                    text: "Check the meeting point confirmed with your booking and keep your phone available.",
                  },
                  {
                    title: "Meet your driver",
                    text: "Meet your driver at the agreed point. If you can’t see them, use the contact options below.",
                  },
                ]}
              />
            </>
          }
          aside={
            <InfoAside
              title="We monitor your flight"
              link={{
                href: "/airport-transfers/terminal-guides",
                label: "Find your terminal",
              }}
            >
              We monitor your flight and adjust your pickup arrangements if it’s delayed. If it’s
              cancelled, diverted or changed, contact us so we can confirm your new arrangements.
            </InfoAside>
          }
        />
        <HelpPanel />
      </Section>

      <Section tone="white" id="waiting">
        <StaggerIn className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:gap-10">
          <div>
            <Eyebrow>Your Heathrow pickup</Eyebrow>
            <MaskHeading
              id="waiting-heading"
              className="mt-3 text-2xl leading-snug font-bold tracking-tight text-[#0A2740]"
              parts={[
                { text: "A little time to land." },
                { text: "A clear plan for pickup.", className: "sm:block" },
              ]}
            />
            <p className="mt-3 max-w-[40rem] leading-relaxed text-[#0A2740]/80">
              Plan your pickup around your landing time, with 15 minutes’ free waiting from your
              agreed pickup time.
            </p>

            <h3 className="mt-8 text-lg font-semibold text-[#0A2740]">
              From landing to your pickup
            </h3>
            <ol className="mt-4 space-y-1">
              {waitingSteps.map((step, i) => {
                const last = i === waitingSteps.length - 1;
                return (
                  <li
                    key={step.title}
                    className={`relative grid grid-cols-[auto_auto_1fr] items-start gap-4 rounded-xl px-4 py-3 sm:gap-5 ${last ? "bg-[#E6F6FC]" : ""}`}
                  >
                    {!last && (
                      <span
                        aria-hidden="true"
                        className="absolute top-[3.25rem] -bottom-[1.75rem] left-[1.9375rem] border-l-2 border-dashed border-[#1FA3D6]/40"
                      />
                    )}
                    <span
                      aria-hidden="true"
                      className="mt-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1FA3D6] bg-white text-xs font-bold text-[#0A2740]"
                    >
                      {i + 1}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-[#0A2740] ${last ? "bg-white" : "bg-[#E6F6FC]"}`}
                    >
                      <FeatureIcon name={step.icon} />
                    </span>
                    <div className="pt-1">
                      <h4 className="font-semibold text-[#0A2740]">{step.title}</h4>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#0A2740]/80">
                        {step.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div data-tone="navy" className="rounded-xl bg-[#0A2740] p-5 text-white md:p-6">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-[#4FB8E0]">
                <FeatureIcon name="clock" />
              </span>
              <Eyebrow>Free waiting included</Eyebrow>
            </div>
            <p className="mt-3 flex flex-wrap items-baseline gap-x-2">
              <span className="text-4xl leading-none font-bold tracking-tight">15</span>
              <span className="text-xl leading-none font-bold tracking-tight text-[#4FB8E0]">
                minutes
              </span>
            </p>
            <p className="mt-1 text-sm text-white/85">From your agreed pickup time.</p>

            <ul className="mt-5 space-y-4 border-t border-white/15 pt-5">
              {waitingCharges.map((item) => (
                <li key={item.title} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#12385A] text-[#4FB8E0] [&_svg]:h-5 [&_svg]:w-5"
                  >
                    <FeatureIcon name={item.icon} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-white/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </StaggerIn>
      </Section>

      <Section
        tone="pale"
        id="terminal-pickup-notes"
        eyebrow="Terminal pickup notes"
        title="Terminals 2, 3, 4 and 5 are covered"
        intro="Heathrow terminal layouts differ, so your confirmed booking instructions always come first. Use these notes to prepare before you land."
      >
        <StaggerIn className="mt-6 grid gap-4 md:grid-cols-2">
          {[
            {
              title: "Terminal 2 arrivals",
              text: "Check your confirmed meeting point after baggage reclaim and keep your phone available when you enter arrivals.",
            },
            {
              title: "Terminal 3 arrivals",
              text: "Follow the arrivals signs, then use the meeting arrangement confirmed with your booking.",
            },
            {
              title: "Terminal 4 arrivals",
              text: "Terminal 4 can involve a different transfer route, so share your flight number and terminal when booking.",
            },
            {
              title: "Terminal 5 arrivals",
              text: "Terminal 5 is busy, so follow the agreed meeting point and call us if you cannot see your driver.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-xl border border-[#D5E8F2] bg-white p-5">
              <h3 className="text-lg font-semibold text-[#0A2740]">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-[#0A2740]/80">{item.text}</p>
            </div>
          ))}
        </StaggerIn>
      </Section>

      <Section
        tone="white"
        id="pickup-journey-facts"
        eyebrow="Before you land"
        title="Clear answers about Heathrow pickups"
        intro="Your exact meeting arrangement is confirmed with your booking, but these facts apply to Heathrow pickup planning."
      >
        <JourneyFacts variant="pickup" />
      </Section>

      <Section
        tone="pale"
        id="booking-checklist"
        eyebrow="Before you book"
        title="Your booking checklist"
        intro="Have these details ready when you book online or call. They help us suggest a suitable vehicle and confirm your arrangements."
      >
        <Checklist
          items={[
            "Flight number and arrival date",
            "Arrival terminal, if you know it",
            "Destination address",
            "Number of passengers",
            "Large suitcases and small bags",
            "Child seats, if needed",
            "Any extra stops",
            "A mobile number we can reach you on",
          ]}
        />
      </Section>
      <PageFaqs
        items={PICKUP_FAQS}
        tone="pale"
        summary="A Heathrow pickup is a pre-booked minicab from arrivals: your driver meets you inside the arrivals hall with a name board or at an agreed point, monitors your flight and includes 15 minutes’ free waiting."
      />
    </>
  );
}
