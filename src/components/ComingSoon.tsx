import PageBanner from "@/components/PageBanner";
import { SECTION_CONTAINER } from "@/lib/layout";

type ComingSoonProps = {
  title: string;
  image: "t2" | "t3" | "t4" | "hero";
  sections?: { id: string; heading: string }[];
};

export default function ComingSoon({ title, image, sections = [] }: ComingSoonProps) {
  return (
    <>
      <PageBanner title={title} image={image} />
      <div className={`${SECTION_CONTAINER} py-16 md:py-20`}>
        <p className="text-lg text-[#0A2740]/80">Details coming soon.</p>
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-heading`}
            className="mt-12 scroll-mt-8 rounded-2xl border border-[#E6F6FC] p-6"
          >
            <h2 id={`${section.id}-heading`} className="text-xl font-semibold text-[#0A2740]">
              {section.heading}
            </h2>
            <p className="mt-2 text-[#0A2740]/80">Details coming soon.</p>
          </section>
        ))}
      </div>
    </>
  );
}
