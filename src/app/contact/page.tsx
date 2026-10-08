import type { Metadata } from "next";
import { callButtonLight, ctaButtonClass, whatsappIconClass } from "@/components/BookingCta";
import ArrowRightIcon from "@/components/ArrowRightIcon";
import CalendarIcon from "@/components/CalendarIcon";
import MailIcon from "@/components/MailIcon";
import PhoneIcon from "@/components/PhoneIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import {
  FeatureIcon,
  Section,
  TransfersHero,
} from "@/components/transfers/TransferBlocks";
import { SplitChecklist } from "@/components/services/ServiceBlocks";
import { WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import {
  ALT_PHONE,
  BOOK_ONLINE_HREF,
  BUSINESS_EMAIL,
  PRIMARY_PHONE,
  WHATSAPP_URL,
} from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

const seo = {
  title: "Contact Heathrow Minicab | Call 020 8343 4444",
  description:
    "Call 020 8343 4444 or 020 8569 4040, or message us on WhatsApp, to book or ask about a Heathrow airport transfer. Available 24/7.",
  path: "/contact",
};

export const metadata: Metadata = pageMetadata(seo);

const sizing =
  "min-h-11 w-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";
const button = `${callButtonLight} ${sizing}`;
const primaryButton = `${ctaButtonClass} min-h-11 w-full px-4 text-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`;
const iconBox =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#E6F6FC] text-[#0A2740]";

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} type="ContactPage" />
      <TransfersHero
        crumbs={[{ label: "Contact" }]}
        title="Contact Heathrow Minicab"
        intro="Book online or call us to plan your Heathrow transfer. We’re based in Mill Hill, North London, and open 24/7."
        primary={{ href: BOOK_ONLINE_HREF, label: "Book Online" }}
        secondaryLabel="Call Us"
        image={{
          src: "/images/contact-hero.webp",
          width: 1388,
          height: 925,
          alt: "Navy Heathrow Minicab saloons and an MPV outside a Heathrow terminal as a plane takes off",
        }}
      />

      <section
        id="ways-to-reach-us"
        aria-labelledby="ways-to-reach-us-heading"
        className="scroll-mt-4 bg-[#E6F6FC] py-12 md:py-16"
      >
        <div className={SECTION_CONTAINER}>
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="text-xs font-bold tracking-[0.28em] text-[#0A2740] uppercase">
                Get in touch
              </p>
              <h2
                id="ways-to-reach-us-heading"
                className="mt-3 text-2xl leading-snug font-bold tracking-tight text-[#0A2740]"
              >
                Ways to reach us
              </h2>
              <p className="mt-3 max-w-[40rem] leading-relaxed text-[#0A2740]/80">
                Book a transfer or speak to our team. We’re here 24/7.
              </p>
            </div>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#0A2740] bg-white/40 px-4 py-2 text-sm font-semibold whitespace-nowrap text-[#0A2740] md:mt-3">
              <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-[#1FA3D6]" />
              Available 24/7
            </div>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative overflow-hidden rounded-xl bg-[#0A2740] p-5 text-white shadow-[0_16px_36px_rgba(10,39,64,0.14)]">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#1FA3D6] text-[#1FA3D6]"
              >
                <CalendarIcon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-xl leading-snug font-semibold">
                Ready for your next trip?
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/85">
                Arrange your airport transfer in a few simple steps.
              </p>

              <ol className="mt-4 space-y-0">
                {["Choose your route", "Add your journey details", "Confirm your booking"].map(
                  (step, index) => (
                    <li
                      key={step}
                      className="grid grid-cols-[2.75rem_1fr] items-center border-b border-[#8BD7F0]/45 py-3 last:border-b-0"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-sm font-semibold">{step}</span>
                    </li>
                  ),
                )}
              </ol>

              <a href={BOOK_ONLINE_HREF} className={`${primaryButton} mt-5`}>
                Book online
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>

            <div className="rounded-xl bg-white p-5 shadow-[0_16px_36px_rgba(10,39,64,0.08)]">
              <div className="grid gap-0 divide-y divide-[#BFE5F4]">
                <a
                  href={`tel:${PRIMARY_PHONE.tel}`}
                  aria-label={`Call now: ${PRIMARY_PHONE.display}`}
                  className="grid gap-3 py-4 text-[#0A2740] first:pt-0 sm:grid-cols-[3.25rem_1fr_1.75rem] sm:items-center"
                >
                  <span aria-hidden="true" className={iconBox}>
                    <PhoneIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">Give us a call</span>
                    <span className="mt-1 block text-sm leading-relaxed text-[#0A2740]/75">
                      For bookings, changes or pickup help.
                    </span>
                    <span className="mt-1.5 block text-sm leading-relaxed text-[#0A2740]/75">
                      {[PRIMARY_PHONE, ALT_PHONE].map((phone, i) => (
                        <span key={phone.tel} className="block">
                          {i === 0 ? "Bookings" : "Alternative"}{" "}
                          <span className="whitespace-nowrap font-bold text-[#0A2740] underline decoration-[#1FA3D6] underline-offset-4">
                            {phone.display}
                          </span>
                        </span>
                      ))}
                    </span>
                  </span>
                  <ArrowRightIcon className="hidden h-5 w-5 sm:block" />
                </a>

                <div className="grid gap-3 py-4 text-[#0A2740] sm:grid-cols-[3.25rem_1fr_1.75rem] sm:items-center">
                  <span aria-hidden="true" className={iconBox}>
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold">Message on WhatsApp</h3>
                    <p className="mt-1 text-sm leading-relaxed text-[#0A2740]/75">
                      Send your flight details, addresses or questions.
                    </p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${button} mt-3 max-w-[16rem]`}
                    >
                      Chat with us
                      <WhatsAppIcon className={`h-4 w-4 ${whatsappIconClass}`} />
                      <span className="sr-only">(opens in a new tab)</span>
                    </a>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open WhatsApp chat"
                    className="hidden justify-self-end sm:block"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>

                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="grid gap-3 py-4 text-[#0A2740] sm:grid-cols-[3.25rem_1fr_1.75rem] sm:items-center"
                >
                  <span aria-hidden="true" className={iconBox}>
                    <MailIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold">Email our team</span>
                    <span className="mt-1 block text-sm leading-relaxed text-[#0A2740]/75">
                      For general enquiries and journey requests.
                    </span>
                    <span className="mt-1 block text-sm font-bold text-[#0A2740]">
                      {BUSINESS_EMAIL}
                    </span>
                  </span>
                  <ArrowRightIcon className="hidden h-5 w-5 sm:block" />
                </a>
              </div>

              <div className="mt-3 flex items-start gap-3 rounded-lg bg-[#DDF4FC] px-4 py-3 text-sm leading-relaxed text-[#0A2740]">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-[#1FA3D6] text-xs font-bold text-[#1FA3D6]"
                >
                  i
                </span>
                <p className="border-l border-[#1FA3D6]/60 pl-4">
                  Need help with an existing booking? Have your booking details ready.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section
        tone="white"
        id="what-to-send"
        eyebrow="Booking details"
        title="What to send us"
        intro="The clearer your details are, the quicker we can help confirm the right journey, vehicle and pickup arrangements."
      >
        <SplitChecklist
          groups={[
            {
              title: "Journey",
              items: ["Pickup address", "Destination or Heathrow terminal", "Date and time"],
            },
            {
              title: "Flight",
              items: ["Flight number", "Arrival or departure terminal", "Any flight changes"],
            },
            {
              title: "Passengers",
              items: [
                "Number of passengers",
                "Large suitcases and small bags",
                "Child seats or return journey",
              ],
            },
          ]}
        />
      </Section>

      <Section tone="white" id="heathrow-help" title="Need help at Heathrow?">
        <div className="rounded-xl border border-[#D5E8F2] bg-[#E6F6FC] p-6 md:p-8">
          <p className="max-w-[48rem] leading-relaxed text-[#0A2740]/80">
            If you have landed and need help finding your driver, stay inside the terminal at a
            clearly signed place. Call us with your booking name, terminal and nearest landmark so
            we can guide you.
          </p>
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            aria-label={`Call Heathrow pickup help: ${PRIMARY_PHONE.display}`}
            className={`${callButtonLight} mt-5 min-h-12 px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]`}
          >
            Call {PRIMARY_PHONE.display}
            <PhoneIcon className="h-5 w-5" />
          </a>
        </div>
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
