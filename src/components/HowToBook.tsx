import type { ReactNode } from "react";
import BookingCta from "@/components/BookingCta";
import FlapTile from "@/components/FlapTile";
import JourneyRoute from "@/components/JourneyRoute";
import { BOOK_ONLINE_HREF, PRIMARY_PHONE } from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

type Step = {
  heading: string;
  text: ReactNode;
};

const steps: Step[] = [
  {
    heading: "Book online or call us",
    text: (
      <>
        <a
          href={BOOK_ONLINE_HREF}
          className="rounded-sm font-semibold text-[#0A2740] underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]"
        >
          Book online
        </a>{" "}
        or call{" "}
        <a
          href={`tel:${PRIMARY_PHONE.tel}`}
          className="rounded-sm font-semibold text-[#0A2740] underline underline-offset-4 hover:no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]"
        >
          {PRIMARY_PHONE.display}
        </a>{" "}
        to arrange your Heathrow transfer.
      </>
    ),
  },
  {
    heading: "Share your journey details",
    text: "Tell us your pickup location, date, time, terminal, passengers and luggage. Confirm your quote and booking details before you travel.",
  },
  {
    heading: "Travel at your agreed pickup time",
    text: "Be ready at the pickup location and time confirmed with your booking.",
  },
];

export default function HowToBook() {
  return (
    <section aria-labelledby="how-to-book-heading" className="bg-[#E6F6FC] py-16 md:py-24">
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
          />
          <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
            HOW TO BOOK
          </p>
          <h2
            id="how-to-book-heading"
            className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
          >
            Book your Heathrow transfer in three simple steps.
          </h2>
        </div>

        <div className="mt-10 md:mt-14">
          <JourneyRoute>
            <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
              {steps.map((step, i) => (
                <li key={step.heading} className="flex gap-5 md:flex-col md:gap-6">
                  <span data-stop className="relative z-10 self-start">
                    <FlapTile size="step">{String(i + 1).padStart(2, "0")}</FlapTile>
                  </span>

                  <div className="pt-3 md:pt-0 md:pr-6">
                    <h3 className="text-xl font-semibold text-[#0A2740]">{step.heading}</h3>
                    <p className="mt-2 leading-relaxed text-[#0A2740]/80">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </JourneyRoute>
        </div>

        <div className="mt-12 md:mt-16">
          <BookingCta />
        </div>
      </div>
    </section>
  );
}
