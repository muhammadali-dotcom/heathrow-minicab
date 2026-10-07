import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ctaButtonClass } from "@/components/BookingCta";
import CalendarIcon from "@/components/CalendarIcon";
import PhoneIcon from "@/components/PhoneIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FeatureIcon, PhoneLink, TransfersHero } from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import { ALT_PHONE, BOOK_ONLINE_HREF, PRIMARY_PHONE, WHATSAPP_URL } from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Contact Heathrow Minicab | Call 020 8343 4444",
    description:
      "Call 020 8343 4444 or 020 8569 4040, or message us on WhatsApp, to book or ask about a Heathrow airport transfer. Available 24/7.",
    path: "/contact",
  }),
};

const button = `${ctaButtonClass} mt-6 min-h-12 w-full px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]`;

type ContactWay = {
  title: string;
  icon: ReactNode;
  text: ReactNode;
  action: ReactNode;
};

const ways: ContactWay[] = [
  {
    title: "Call us",
    icon: <PhoneIcon className="h-6 w-6" />,
    text: (
      <>
        Bookings <PhoneLink tel={PRIMARY_PHONE.tel} display={PRIMARY_PHONE.display} />, or our
        alternative line <PhoneLink tel={ALT_PHONE.tel} display={ALT_PHONE.display} />.
      </>
    ),
    action: (
      <a
        href={`tel:${PRIMARY_PHONE.tel}`}
        aria-label={`Call now: ${PRIMARY_PHONE.display}`}
        className={button}
      >
        Call Now
        <PhoneIcon className="h-5 w-5" />
      </a>
    ),
  },
  {
    title: "WhatsApp",
    icon: <WhatsAppIcon className="h-7 w-7" />,
    text: "Message us your journey details, day or night.",
    action: (
      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={button}>
        <WhatsAppIcon className="h-5 w-5" />
        Chat on WhatsApp
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    ),
  },
  {
    title: "Book online",
    icon: <CalendarIcon className="h-7 w-7" />,
    text: "Get a quote and book your transfer online.",
    action: (
      <a href={BOOK_ONLINE_HREF} className={button}>
        Book Online
        <CalendarIcon className="h-5 w-5" />
      </a>
    ),
  },
];

export default function Page() {
  return (
    <>
      <TransfersHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact Us"
        title="Contact Heathrow Minicab"
        intro="Book online or call us to plan your Heathrow transfer."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Online" }}
        secondaryLabel="Call Us"
        image={{
          src: "/images/contact-hero.webp",
          width: 1388,
          height: 925,
          alt: "Navy Heathrow Minicab saloons and an MPV outside a Heathrow terminal as a plane takes off",
        }}
      />

      {/* Centred header as on the home page sections; text takes the slack (flex-1) so the
          three full-width buttons line up along the bottom. */}
      <section aria-labelledby="ways-heading" className="bg-[#E6F6FC] py-16 md:py-20">
        <div className={SECTION_CONTAINER}>
          <div className="mx-auto max-w-2xl text-center">
            <span
              aria-hidden="true"
              className="mx-auto mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
            />
            <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
              Get in touch
            </p>
            <h2
              id="ways-heading"
              className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
            >
              Ways to reach us
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#0A2740]/80">
              Choose whichever suits you. We’re here 24/7.
            </p>
          </div>

          <ul className="mt-10 grid gap-6 md:grid-cols-3">
            {ways.map((way) => (
              <li
                key={way.title}
                className="flex h-full flex-col items-center rounded-2xl border-t-4 border-[#1FA3D6] bg-white p-8 text-center shadow-sm shadow-[#0A2740]/5 transition hover:-translate-y-1 hover:shadow-lg motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <span
                  aria-hidden="true"
                  className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1FA3D6] text-[#0A2740]"
                >
                  {way.icon}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[#0A2740]">{way.title}</h3>
                <p className="mt-2 flex-1 leading-relaxed text-[#0A2740]/80">{way.text}</p>
                {way.action}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Slim white strip before the navy footer. */}
      <section aria-label="Opening hours" className="bg-white py-8">
        <div
          className={`${SECTION_CONTAINER} flex items-center justify-center gap-4 text-center sm:text-left`}
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#E6F6FC] text-[#0A2740]"
          >
            <FeatureIcon name="allday" />
          </span>
          <p className="text-lg font-semibold text-[#0A2740]">
            Open 24/7, every day of the year, including early flights and late arrivals.
          </p>
        </div>
      </section>
    </>
  );
}
