import Image from "next/image";
import { VEHICLES, type Vehicle } from "@/lib/vehicles";
import { SECTION_CONTAINER } from "@/lib/layout";

type VehiclesProps = {
  showHeader?: boolean; // false on its own page, where the PageBanner carries the H1
};

function Capacity({ vehicle }: { vehicle: Vehicle }) {
  const rows = [
    {
      label: "Passengers",
      value: vehicle.passengers === null ? "On request" : `x ${vehicle.passengers}`,
    },
    { label: "Large suitcases", value: `x ${vehicle.luggage.large}` },
    { label: "Small bags", value: `x ${vehicle.luggage.small}` },
  ];
  return (
    <dl className="mt-4 flex-1 space-y-2.5 border-t border-[#D5E8F2] pt-4">
      {rows.map(({ label, value }) => (
        <div key={label} className="flex items-baseline justify-between gap-3">
          <dt className="text-sm text-[#5B7A93]">{label}</dt>
          <dd className="text-sm font-semibold whitespace-nowrap text-[#0A2740]">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

const SECTION_NAME = "Our vehicles";

export default function Vehicles({ showHeader = true }: VehiclesProps) {
  return (
    <section
      {...(showHeader ? { "aria-labelledby": "vehicles-heading" } : { "aria-label": SECTION_NAME })}
      className="bg-white py-16 md:py-24"
    >
      <div className={SECTION_CONTAINER}>
        {showHeader && (
          <div className="mx-auto max-w-2xl text-center">
            <span
              aria-hidden="true"
              className="mx-auto mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
            />
            <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
              OUR VEHICLES
            </p>
            <h2
              id="vehicles-heading"
              className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
            >
              Choose a car that fits your journey.
            </h2>
          </div>
        )}

        <ul
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ${showHeader ? "mt-12 md:mt-16" : ""}`}
        >
          {VEHICLES.map((vehicle) => (
            <li key={vehicle.id}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#D5E8F2] bg-white">
                <div className="relative aspect-[3/2] bg-[#E6F6FC]">
                  {/* Dashed "road" the wheels sit on, echoing the How to Book route. */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-5 bottom-5 border-t-2 border-dashed border-[#1FA3D6]/40"
                  />
                  <div className="absolute inset-x-5 top-6 bottom-5">
                    <Image
                      src={vehicle.image.src}
                      alt={vehicle.image.alt}
                      fill
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                      className="object-contain object-bottom"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-[#0A2740]">{vehicle.name}</h3>
                  {/* Two lines reserved from lg so a wrapping model name doesn't push the rows down. */}
                  <p className="mt-1 text-sm font-medium text-[#5B7A93] lg:min-h-10">
                    {vehicle.model} or similar
                  </p>
                  <Capacity vehicle={vehicle} />
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-10 max-w-[60ch] text-center text-[#0A2740]/80">
          Tell us your passenger numbers and luggage when you book and we’ll help you choose.
        </p>
      </div>
    </section>
  );
}
