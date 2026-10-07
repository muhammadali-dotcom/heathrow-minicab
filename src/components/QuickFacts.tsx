import { KEY_FACTS } from "@/lib/facts";
import { SECTION_CONTAINER } from "@/lib/layout";

// "At a glance" facts as short, self-contained statements that search engines, answer engines
// and AI assistants can quote directly. data-speakable marks it for the WebPage speakable spec.
export default function QuickFacts({ id = "key-facts" }: { id?: string }) {
  return (
    <section aria-labelledby={`${id}-heading`} className="bg-[#E6F6FC] py-10 md:py-12">
      <div className={SECTION_CONTAINER}>
        <p className="text-xs font-bold tracking-[0.15em] text-[#0A2740] uppercase">Key facts</p>
        <h2
          id={`${id}-heading`}
          className="mt-3 text-2xl leading-snug font-bold tracking-tight text-[#0A2740]"
        >
          Heathrow Minicab at a glance
        </h2>
        <dl data-speakable className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {KEY_FACTS.map((fact) => (
            <div key={fact.label} className="rounded-xl border border-white bg-white p-4">
              <dt className="text-xs font-bold tracking-[0.1em] text-[#5B7A93] uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm leading-relaxed font-semibold text-[#0A2740]">
                {fact.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
