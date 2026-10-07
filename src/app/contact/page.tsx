import type { Metadata } from "next";
import type { ReactNode } from "react";
import { callButtonLight, whatsappIconClass } from "@/components/BookingCta";
import CalendarIcon from "@/components/CalendarIcon";
import MailIcon from "@/components/MailIcon";
import PhoneIcon from "@/components/PhoneIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  FeatureIcon,
  PhoneLink,
  Section,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { pageMetadata } from "@/lib/seo";
import {
  ALT_PHONE,
  BOOK_ONLINE_HREF,
  BUSINESS_EMAIL,
  PRIMARY_PHONE,
  WHATSAPP_URL,
} from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Contact Heathrow Minicab | Call 020 8343 4444",
    description:
      "Call 020 8343 4444 or 020 8569 4040, or message us on WhatsApp, to book or ask about a Heathrow airport transfer. Available 24/7.",
    path: "/contact",
  }),
};

const sizing =
  "mt-4 min-h-11 w-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";
// All four card buttons share one outline style so the row reads as equal choices; the hero
// above keeps the filled Book Online as the main action.
const button = `${callButtonLight} ${sizing}`;

type ContactWay = {
  title: string;
  icon: ReactNode;
  text: ReactNode;
  action: ReactNode;
};

// Book Online is the main action, so it leads; email gets the secondary outline.
const ways: ContactWay[] = [
  {
    title: "Book online",
    icon: <CalendarIcon className="h-5 w-5" />,
    text: "Get a quote and book your transfer online.",
    action: (
      <a href={BOOK_ONLINE_HREF} className={button}>
        Book Online
        <CalendarIcon className="h-4 w-4" />
      </a>
    ),
  },
  {
    title: "Call us",
    icon: <PhoneIcon className="h-5 w-5" />,
    text: (
      <>
        {[PRIMARY_PHONE, ALT_PHONE].map((phone, i) => (
          <span key={phone.tel} className="block">
            {i === 0 ? "Bookings" : "Alternative"}{" "}
            <span className="whitespace-nowrap">
              <PhoneLink tel={phone.tel} display={phone.display} />
            </span>
          </span>
        ))}
      </>
    ),
    action: (
      <a
        href={`tel:${PRIMARY_PHONE.tel}`}
        aria-label={`Call now: ${PRIMARY_PHONE.display}`}
        className={button}
      >
        Call Now
        <PhoneIcon className="h-4 w-4" />
      </a>
    ),
  },
  {
    title: "WhatsApp",
    icon: <WhatsAppIcon className="h-5 w-5" />,
    text: "Message us your journey details, day or night.",
    action: (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={button}
      >
        WhatsApp Us
        <WhatsAppIcon className={`h-4 w-4 ${whatsappIconClass}`} />
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    ),
  },
  {
    title: "Email us",
    icon: <MailIcon className="h-5 w-5" />,
    text: (
      <>
        For general enquiries.
        <span className="block font-semibold whitespace-nowrap text-[#0A2740]">
          {BUSINESS_EMAIL}
        </span>
      </>
    ),
    action: (
      <a href={`mailto:${BUSINESS_EMAIL}`} className={button}>
        Email Us
        <MailIcon className="h-4 w-4" />
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

      {/* Standard section header and FeatureGrid's compact card style; the text takes the
          slack (flex-1) so the buttons line up along the bottom. */}
      <Section
        tone="pale"
        id="ways-to-reach-us"
        eyebrow="Get in touch"
        title="Ways to reach us"
        intro="Choose whichever suits you. We’re here 24/7."
      >
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way) => (
            <li
              key={way.title}
              className="flex h-full flex-col rounded-xl border border-[#D5E8F2] bg-white p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#E6F6FC] text-[#0A2740]"
              >
                {way.icon}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-[#0A2740]">{way.title}</h3>
              <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[#0A2740]/80">{way.text}</p>
              {way.action}
            </li>
          ))}
        </ul>

        <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#0A2740]">
          <PhoneIcon className="h-4 w-4" />
          For urgent pickup help or booking changes, please call.
        </p>
      </Section>

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
