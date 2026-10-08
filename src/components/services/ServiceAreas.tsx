import Link from "next/link";
import { Section, type Tone } from "@/components/transfers/TransferBlocks";
import { AREA_REGIONS, AREAS } from "@/lib/areas";

// "Pickup areas" on each service page: links into every area page, grouped by region, so the
// area pages are reachable from the services as well as from the homepage and /areas.
export default function ServiceAreas({ tone }: { tone: Exclude<Tone, "navy"> }) {
  return (
    <Section
      tone={tone}
      id="pickup-areas"
      title="Pickup areas we cover"
      intro="This service runs from all of our North and West London pickup areas. Choose yours for local pickup notes and route planning."
    >
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {AREA_REGIONS.map((region) => (
          <div key={region.id}>
            <h3
              id={`pickup-areas-${region.id}`}
              className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase"
            >
              {region.label}
            </h3>
            <ul aria-labelledby={`pickup-areas-${region.id}`} className="mt-3 flex flex-wrap gap-2">
              {AREAS.filter((area) => area.region === region.id).map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className={`inline-flex min-h-11 items-center rounded-full px-4 font-medium text-[#0A2740] underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-[#1FA3D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] ${
                      tone === "pale" ? "bg-white" : "bg-[#E6F6FC]"
                    }`}
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
