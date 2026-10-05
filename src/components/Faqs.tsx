import { FAQS } from "@/lib/faqs";
import { SECTION_CONTAINER } from "@/lib/layout";

type FaqsProps = {
  showHeader?: boolean; // false on its own page, where the PageBanner carries the H1
};

// FAQPage structured data.
function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

const SECTION_NAME = "Frequently asked questions";

export default function Faqs({ showHeader = true }: FaqsProps) {
  return (
    <section
      {...(showHeader ? { "aria-labelledby": "faqs-heading" } : { "aria-label": SECTION_NAME })}
      className="bg-[#E6F6FC] py-16 md:py-24"
    >
      <div className={SECTION_CONTAINER}>
        {showHeader && (
          <div className="text-center">
            <span
              aria-hidden="true"
              className="mx-auto mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
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
          {FAQS.map((faq) => (
            <details
              key={faq.id}
              id={faq.id}
              className="group rounded-2xl border border-white bg-white"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 text-lg font-semibold text-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#E6F6FC]"
                >
                  <span className="absolute h-0.5 w-3.5 rounded-full bg-[#0A2740]" />
                  <span className="absolute h-3.5 w-0.5 rounded-full bg-[#0A2740] group-open:hidden" />
                </span>
              </summary>
              <p className="max-w-[65ch] px-6 pb-6 leading-relaxed text-[#0A2740]/80">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
      <FaqJsonLd />
    </section>
  );
}
