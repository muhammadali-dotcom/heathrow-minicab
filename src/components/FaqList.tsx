import { JsonLd } from "@/components/JsonLd";
import type { Faq } from "@/lib/faqs";

// FAQPage structured data. Emit it once per page, for the questions shown on that page.
export function FaqJsonLd({ items }: { items: Faq[] }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: items.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      }}
    />
  );
}

// Accordion of questions; ids double as in-page anchors (e.g. /faqs#waiting-charges).
export function FaqAccordion({ items, compact = false }: { items: Faq[]; compact?: boolean }) {
  return (
    <div className="space-y-3">
      {items.map((faq) => (
        <details
          key={faq.id}
          id={faq.id}
          className="group scroll-mt-4 rounded-xl border border-[#D5E8F2] bg-white shadow-sm transition-shadow duration-200 open:shadow-md motion-reduce:transition-none in-data-[tone=pale]:border-white"
        >
          <summary
            className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 font-semibold text-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] md:px-6 [&::-webkit-details-marker]:hidden ${compact ? "py-4 text-base" : "py-5 text-lg"}`}
          >
            <span>{faq.question}</span>
            <span
              aria-hidden="true"
              className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F6FC] text-[#0A2740]"
            >
              <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
              <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-200 group-open:scale-y-0 motion-reduce:transition-none" />
            </span>
          </summary>
          <p className="max-w-[65ch] px-5 pb-5 leading-relaxed text-[#0A2740]/80 md:px-6 md:pb-6">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
