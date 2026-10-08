import Link from "next/link";
import { AREAS } from "@/lib/areas";
import { SECTION_CONTAINER } from "@/lib/layout";

// Homepage "Areas we cover" strip: every area as a chip, linking through to /areas.
export default function AreasStrip() {
  return (
    <section aria-labelledby="areas-heading" className="bg-white py-16 md:py-24">
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
          />
          <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
            AREAS WE COVER
          </p>
          <h2
            id="areas-heading"
            className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
          >
            Heathrow transfers across North and West London
          </h2>
        </div>

        <ul className="mt-10 flex max-w-4xl flex-wrap gap-3">
          {AREAS.map((area) => (
            <li key={area.slug}>
              <Link
                href={`/areas/${area.slug}`}
                className="inline-flex min-h-11 items-center rounded-full bg-[#E6F6FC] px-4 py-2 font-medium text-[#0A2740] transition-colors hover:bg-[#CBEFFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] motion-reduce:transition-none"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10">
          <Link
            href="/areas"
            className="inline-flex min-h-11 items-center gap-1 rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]"
          >
            See all areas we cover <span aria-hidden="true">→</span>
          </Link>
        </p>
      </div>
    </section>
  );
}
