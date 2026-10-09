import type { ReactNode } from "react";
import PageBanner from "@/components/PageBanner";
import { SECTION_CONTAINER } from "@/lib/layout";
import { CONTENT_UPDATED } from "@/lib/seo";
import { BUSINESS_EMAIL, PRIMARY_PHONE } from "@/lib/site";

export type LegalSection = { id: string; title: string; body: ReactNode };

const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

export const legalLink = `rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] ${focusNavy}`;

// Body text helpers so every policy reads the same.
export function P({ children }: { children: ReactNode }) {
  return <p className="mt-3 max-w-[65ch] leading-relaxed text-[#0A2740]/80">{children}</p>;
}

export function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 max-w-[65ch] list-disc space-y-2 pl-5 leading-relaxed text-[#0A2740]/80 marker:text-[#1FA3D6]">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

const updated = new Date(CONTENT_UPDATED).toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

// Shared layout for the policy pages: banner, last-updated date, contents, numbered sections
// and a contact box.
export default function LegalDocument({
  title,
  crumb,
  intro,
  sections,
}: {
  title: string;
  crumb: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageBanner image="t2" crumb={crumb} title={title} intro={intro} />

      <section aria-label={title} className="bg-white py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <p className="text-sm text-[#4E6B84]">Last updated: {updated}</p>

          <nav aria-label="On this page" className="mt-6">
            <h2 className="text-xs font-bold tracking-[0.15em] text-[#0A2740] uppercase">
              On this page
            </h2>
            <ol className="mt-3 flex flex-wrap gap-2">
              {sections.map((section, i) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className={`inline-flex min-h-11 items-center rounded-full border border-[#D5E8F2] bg-white px-4 text-sm font-semibold text-[#0A2740] hover:border-[#0A2740] ${focusNavy}`}
                  >
                    {i + 1}. {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="mt-10 space-y-10">
            {sections.map((section, i) => (
              <section key={section.id} id={section.id} className="scroll-mt-4">
                <h2 className="text-2xl leading-snug font-bold tracking-tight text-[#0A2740]">
                  {i + 1}. {section.title}
                </h2>
                {section.body}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl bg-[#E6F6FC] p-6 md:p-8">
            <h2 className="text-xl font-bold text-[#0A2740]">Questions?</h2>
            <p className="mt-2 leading-relaxed text-[#0A2740]/80">
              Call{" "}
              <a href={`tel:${PRIMARY_PHONE.tel}`} className={legalLink}>
                {PRIMARY_PHONE.display}
              </a>{" "}
              or email{" "}
              <a href={`mailto:${BUSINESS_EMAIL}`} className={`${legalLink} break-all`}>
                {BUSINESS_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
