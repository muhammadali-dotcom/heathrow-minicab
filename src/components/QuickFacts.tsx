import PlaneIcon from "@/components/PlaneIcon";
import { FeatureIcon } from "@/components/transfers/TransferBlocks";
import { KEY_FACTS, KEY_FACTS_NOTE } from "@/lib/facts";
import { SECTION_CONTAINER } from "@/lib/layout";

const TERMINALS = ["2", "3", "4", "5"];

// Large decorative clock face for the 24/7 card.
function ClockFace() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 120 120"
      className="hidden h-36 w-36 shrink-0 fill-none stroke-[#1FA3D6] sm:block md:h-40 md:w-40"
      strokeWidth={3}
      strokeLinecap="round"
    >
      <circle cx="60" cy="60" r="54" />
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * Math.PI) / 4;
        const [r1, r2] = i % 2 === 0 ? [40, 48] : [42, 47];
        return (
          <line
            key={i}
            x1={60 + r1 * Math.sin(a)}
            y1={60 - r1 * Math.cos(a)}
            x2={60 + r2 * Math.sin(a)}
            y2={60 - r2 * Math.cos(a)}
          />
        );
      })}
      <path d="M60 60V26M60 60l20 18" strokeWidth={4} />
      <circle cx="60" cy="60" r="2.5" className="fill-[#1FA3D6]" />
    </svg>
  );
}

// "At a glance" facts: two feature cards (24/7, terminals) and six short facts, all from
// KEY_FACTS so they match llms.txt. data-speakable marks the facts so search engines,
// answer engines and AI assistants can quote each one on its own.
export default function QuickFacts({ id = "key-facts" }: { id?: string }) {
  const [hours, terminals, ...rest] = KEY_FACTS;

  return (
    <section aria-labelledby={`${id}-heading`} className="bg-[#E6F6FC] py-16 md:py-24">
      <div className={SECTION_CONTAINER}>
        <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
          Your journey, simplified
        </p>
        <h2
          id={`${id}-heading`}
          className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
        >
          Heathrow Minicab at a glance
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-[#0A2740]/80">
          The details that make your airport journey easier.
        </p>

        <div data-speakable>
          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="flex items-center justify-between gap-6 rounded-xl bg-[#0A2740] p-6 text-white md:p-8">
              <div>
                <span aria-hidden="true" className="text-[#4FB8E0]">
                  <FeatureIcon name="clock" />
                </span>
                <h3 className="mt-3">
                  <span className="block text-5xl leading-none font-bold tracking-tight md:text-6xl">
                    24/7
                  </span>
                  <span className="mt-3 block text-xl font-bold">{hours.title}</span>
                </h3>
                <p className="mt-2 leading-relaxed text-white/85">{hours.text}</p>
              </div>
              <ClockFace />
            </div>

            <div className="flex flex-col justify-between gap-6 rounded-xl border border-[#D5E8F2] bg-white p-6 md:p-8">
              <h3 className="flex items-center gap-4">
                <span aria-hidden="true" className="flex flex-col items-start text-[#0A2740]">
                  <PlaneIcon className="h-8 w-8" />
                  <span className="mt-1 h-1 w-8 rounded-full bg-[#1FA3D6]" />
                </span>
                <span className="text-2xl leading-snug font-bold tracking-tight text-[#0A2740]">
                  {terminals.title}
                </span>
              </h3>
              <div>
                <ul aria-label="Heathrow terminals" className="flex flex-wrap gap-3">
                  {TERMINALS.map((n) => (
                    <li
                      key={n}
                      className="rounded-lg border-2 border-[#1FA3D6] bg-[#E6F6FC] px-4 py-2 font-mono text-lg font-bold text-[#0A2740]"
                    >
                      <span aria-hidden="true">T{n}</span>
                      <span className="sr-only">Terminal {n}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 leading-relaxed text-[#0A2740]/80">{terminals.text}</p>
              </div>
            </div>
          </div>

          <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((fact) => (
              <li
                key={fact.id}
                className="flex gap-4 rounded-xl border border-[#D5E8F2] bg-white p-5"
              >
                <span
                  aria-hidden="true"
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#E6F6FC] text-[#0A2740]"
                >
                  <FeatureIcon name={fact.icon} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A2740]">{fact.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#0A2740]/80">{fact.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-[#5B7A93]">{KEY_FACTS_NOTE}</p>
      </div>
    </section>
  );
}
