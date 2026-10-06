import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BookingCta from "@/components/BookingCta";
import { CheckList, RelatedLinks, inlineLink, sectionHeading } from "@/components/GuideBlocks";
import PageBanner from "@/components/PageBanner";
import { SECTION_CONTAINER } from "@/lib/layout";
import { SERVICES, findVehicle } from "@/lib/services";
import type { Vehicle } from "@/lib/vehicles";

// Only the confirmed services exist; any other slug is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((service) => ({ service: service.slug }));
}

const findService = (slug: string) => SERVICES.find((service) => service.slug === slug);

export async function generateMetadata({
  params,
}: PageProps<"/services/[service]">): Promise<Metadata> {
  const service = findService((await params).service);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} | Heathrow Minicab`,
    description: service.text,
    path: `/services/${service.slug}`,
  });
}

// Same details as the vehicle cards, read from VEHICLES.
function VehiclePanel({ vehicle }: { vehicle: Vehicle }) {
  const rows = [
    { label: "Passengers", value: vehicle.passengers === null ? "On request" : `x ${vehicle.passengers}` },
    { label: "Large suitcases", value: `x ${vehicle.luggage.large}` },
    { label: "Small bags", value: `x ${vehicle.luggage.small}` },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-[#D5E8F2] bg-white">
      <div className="relative aspect-[3/2] bg-[#E6F6FC]">
        <div className="absolute inset-x-6 top-6 bottom-5">
          <Image
            src={vehicle.image.src}
            alt={vehicle.image.alt}
            fill
            sizes="(min-width: 768px) 440px, 100vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
      <div className="p-6">
        <p className="text-sm font-semibold tracking-[0.15em] text-[#5B7A93] uppercase">
          Recommended vehicle
        </p>
        <h3 className="mt-1 text-xl font-semibold text-[#0A2740]">{vehicle.name}</h3>
        <p className="mt-1 text-sm font-medium text-[#5B7A93]">{vehicle.model} or similar</p>
        <dl className="mt-4 space-y-2.5 border-t border-[#D5E8F2] pt-4">
          {rows.map(({ label, value }) => (
            <div key={label} className="flex items-baseline justify-between gap-3">
              <dt className="text-sm text-[#5B7A93]">{label}</dt>
              <dd className="text-sm font-semibold text-[#0A2740]">{value}</dd>
            </div>
          ))}
        </dl>
        <Link href="/our-vehicles" className={`${inlineLink} mt-3`}>
          Compare our vehicles
        </Link>
      </div>
    </div>
  );
}

export default async function Page({ params }: PageProps<"/services/[service]">) {
  const service = findService((await params).service);
  if (!service) notFound();

  const vehicle = service.vehicleId ? findVehicle(service.vehicleId) : null;

  return (
    <>
      <PageBanner
        image={service.image}
        crumb={service.title}
        parents={[{ href: "/services", label: "Services" }]}
        title={service.title}
        intro={service.text}
      />

      <section aria-labelledby="details-heading" className="py-14 md:py-20">
        <div className={`${SECTION_CONTAINER} grid gap-10 md:grid-cols-2 md:gap-12`}>
          <div>
            <h2 id="details-heading" className={sectionHeading}>
              Good to know
            </h2>
            <div className="mt-6">
              <CheckList items={service.points} />
            </div>
            {!vehicle && (
              <p className="mt-6 text-[#0A2740]/80">
                Not sure which car you need?{" "}
                <Link href="/our-vehicles" className={inlineLink}>
                  Compare our vehicles
                </Link>
              </p>
            )}
          </div>
          {vehicle && <VehiclePanel vehicle={vehicle} />}
        </div>
      </section>

      <section aria-labelledby="book-heading" className="bg-[#E6F6FC] py-14 md:py-16">
        <div
          className={`${SECTION_CONTAINER} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}
        >
          <h2 id="book-heading" className={sectionHeading}>
            Book your Heathrow transfer
          </h2>
          <BookingCta />
        </div>
      </section>

      <RelatedLinks
        heading="Other services"
        links={SERVICES.filter((s) => s.slug !== service.slug).map((s) => ({
          href: `/services/${s.slug}`,
          label: s.title,
        }))}
      />
    </>
  );
}
