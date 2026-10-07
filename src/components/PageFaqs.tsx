import { FaqAccordion, FaqJsonLd } from "@/components/FaqList";
import { Section, type Tone } from "@/components/transfers/TransferBlocks";
import type { Faq } from "@/lib/faqs";

// A page's own questions in a standard section, with FAQPage schema for those questions only.
export default function PageFaqs({
  items,
  tone = "pale",
  title = "Common questions",
  id = "faqs",
  summary,
}: {
  items: Faq[];
  // One plain sentence that defines the page's service, for answer engines to quote.
  summary?: string;
  tone?: Exclude<Tone, "navy">;
  title?: string;
  id?: string;
}) {
  return (
    <Section tone={tone} id={id} eyebrow="FAQs" title={title}>
      {summary && (
        <p data-speakable className="mt-3 max-w-[44rem] leading-relaxed text-[#0A2740]/80">
          {summary}
        </p>
      )}
      <div className="mt-6">
        <FaqAccordion items={items} compact />
      </div>
      <FaqJsonLd items={items} />
    </Section>
  );
}
