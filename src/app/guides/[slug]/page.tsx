import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { WebPageJsonLd } from "@/components/JsonLd";
import PageBanner from "@/components/PageBanner";
import PageFaqs from "@/components/PageFaqs";
import { DetailCards } from "@/components/services/ServiceBlocks";
import { BulletList, Section } from "@/components/transfers/TransferBlocks";
import { GUIDES, findGuide, type Guide, type GuideSection } from "@/lib/guides";
import { formatDate, pageMetadata } from "@/lib/seo";
import StaggerIn from "@/components/StaggerIn";
import { CARD_HOVER } from "@/lib/layout";

export const dynamicParams = false;

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }));
}

const guideSeo = (guide: Guide) => ({
  title: guide.seoTitle,
  description: guide.description,
  path: `/guides/${guide.slug}`,
});

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const guide = findGuide((await params).slug);
  return guide ? pageMetadata(guideSeo(guide)) : {};
}

const sourceLink =
  "rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

function TerminalCards({ terminals }: { terminals: NonNullable<GuideSection["terminals"]> }) {
  return (
    <StaggerIn as="ul" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {terminals.map((item) => (
        <li
          key={item.terminal}
          className={`rounded-xl border border-[#D5E8F2] bg-white p-5 ${CARD_HOVER}`}
        >
          <h3 className="text-lg font-semibold text-[#0A2740]">{item.terminal}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#0A2740]/80">
            {item.airlines.join(", ")}
          </p>
        </li>
      ))}
    </StaggerIn>
  );
}

export default async function Page({ params }: PageProps<"/guides/[slug]">) {
  const guide = findGuide((await params).slug);
  if (!guide) notFound();

  const seo = guideSeo(guide);
  // Sections alternate from pale, after the white answer section.
  const tone = (i: number) => (i % 2 ? "white" : "pale");
  const faqTone = tone(guide.sections.length);

  return (
    <>
      <WebPageJsonLd {...seo} dateModified={guide.lastChecked} />
      <PageBanner
        image={guide.image}
        crumb={guide.crumb}
        parents={[{ href: "/guides", label: "Guides" }]}
        title={guide.title}
      />

      <Section tone="white" id="answer">
        <p data-speakable className="max-w-[44rem] text-lg leading-relaxed text-[#0A2740]">
          {guide.answer}
        </p>
        <p className="mt-4 text-sm text-[#4E6B84]">
          Last checked against heathrow.com on{" "}
          <time dateTime={guide.lastChecked}>{formatDate(guide.lastChecked)}</time>.
        </p>
      </Section>

      {guide.sections.map((section, i) => (
        <Section key={section.title} tone={tone(i)} id={`section-${i + 1}`} title={section.title}>
          {section.paragraphs?.map((text) => (
            <p key={text} className="mt-3 max-w-[44rem] leading-relaxed text-[#0A2740]/80">
              {text}
            </p>
          ))}
          {section.bullets && <BulletList items={section.bullets} />}
          {section.terminals && <TerminalCards terminals={section.terminals} />}
        </Section>
      ))}

      <PageFaqs items={guide.faqs} tone={faqTone} />

      <Section tone={faqTone === "pale" ? "white" : "pale"} id="related" title="Related guides">
        <DetailCards
          items={guide.related.map((item) => ({
            label: item.label,
            hint: item.hint,
            link: { href: item.href, label: "Read more" },
          }))}
        />
        <div className="mt-10">
          <p className="text-sm font-semibold text-[#0A2740]">Sources</p>
          <ul className="mt-2 space-y-1 text-sm">
            {guide.sources.map((source) => (
              <li key={source.href}>
                <a href={source.href} rel="noopener" className={sourceLink}>
                  {source.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
