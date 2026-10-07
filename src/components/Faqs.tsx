import Link from "next/link";
import { callButtonLight, whatsappButtonLight, whatsappIconClass } from "@/components/BookingCta";
import { FaqAccordion, FaqJsonLd } from "@/components/FaqList";
import PhoneIcon from "@/components/PhoneIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { FAQS } from "@/lib/faqs";
import { SECTION_CONTAINER } from "@/lib/layout";
import { PRIMARY_PHONE, WHATSAPP_URL } from "@/lib/site";

type FaqsProps = {
  showHeader?: boolean; // false on its own page, where the PageBanner carries the H1
  // The homepage repeats the general questions from /faqs, so only /faqs emits FAQPage schema.
  withSchema?: boolean;
};

const SECTION_NAME = "Frequently asked questions";

export default function Faqs({ showHeader = true, withSchema = false }: FaqsProps) {
  return (
    <section
      {...(showHeader ? { "aria-labelledby": "faqs-heading" } : { "aria-label": SECTION_NAME })}
      data-tone="pale"
      className="bg-[#E6F6FC] py-16 md:py-24"
    >
      <div className={SECTION_CONTAINER}>
        {showHeader && (
          <div className="max-w-2xl">
            <span
              aria-hidden="true"
              className="mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
            />
            <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">FAQS</p>
            <h2
              id="faqs-heading"
              className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
            >
              Questions before you book
            </h2>
          </div>
        )}

        <div className={`space-y-3 ${showHeader ? "mt-12 md:mt-16" : ""}`}>
          <FaqAccordion items={FAQS} />
        </div>
        {showHeader && (
          <p className="mt-8">
            <Link
              href="/faqs"
              className="inline-flex min-h-11 items-center gap-1 rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]"
            >
              See all questions <span aria-hidden="true">→</span>
            </Link>
          </p>
        )}
        {!showHeader && (
          <div className="mt-8 rounded-xl border border-[#D5E8F2] bg-white p-6 md:flex md:items-center md:justify-between md:gap-8 md:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A2740]">Still have a question?</h2>
              <p className="mt-1 leading-relaxed text-[#0A2740]/80">
                Call or message us for help with your journey.
              </p>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 md:mt-0 md:shrink-0">
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                className={`${callButtonLight} min-h-12 px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]`}
              >
                Call Us
                <PhoneIcon className="h-5 w-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${whatsappButtonLight} min-h-12 px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]`}
              >
                <WhatsAppIcon className={`h-5 w-5 ${whatsappIconClass}`} />
                WhatsApp Us
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        )}
      </div>
      {withSchema && <FaqJsonLd items={FAQS} />}
    </section>
  );
}
