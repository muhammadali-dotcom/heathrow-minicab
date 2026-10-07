import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { AREA_FAQS } from "@/lib/faqs";
import Link from "next/link";
import { WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { callButtonLight } from "@/components/BookingCta";
import PageBanner from "@/components/PageBanner";
import PhoneIcon from "@/components/PhoneIcon";
import { AREA_REGIONS, AREAS } from "@/lib/areas";
import { SECTION_CONTAINER } from "@/lib/layout";
import { PRIMARY_PHONE } from "@/lib/site";

const seo = {
  title: "Minicab to Heathrow from North & West London",
  description:
    "Heathrow airport transfers from Finchley, Hendon, Barnet, Mill Hill, Edgware, Ealing, Hounslow, Southall and more. Available 24/7.",
  path: "/areas",
};

export const metadata: Metadata = pageMetadata(seo);

function PinIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-4 w-4 fill-none stroke-current"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 21s-6-5.6-6-11a6 6 0 0 1 12 0c0 5.4-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  );
}

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} type="CollectionPage" />
      <PageBanner
        image="hero"
        crumb="Areas We Cover"
        eyebrow="Areas we cover"
        title="Heathrow transfers from North and West London"
        intro="Pickups and drop-offs between Heathrow and your door."
      />

      <section aria-label="Areas we cover" className="bg-white py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          {/* One compact panel per region, names listed in columns. */}
          <div className="grid gap-6 md:grid-cols-2">
            {AREA_REGIONS.map((region) => {
              const areas = AREAS.filter((area) => area.region === region.id);
              return (
                <div key={region.id} className="rounded-xl bg-[#E6F6FC] p-6 md:p-8">
                  <h2
                    id={`${region.id}-heading`}
                    className="text-2xl leading-snug font-bold tracking-tight text-[#0A2740]"
                  >
                    {region.label}
                  </h2>
                  <ul aria-labelledby={`${region.id}-heading`} className="mt-4 columns-2 gap-6">
                    {areas.map((area) => (
                      <li key={area.slug} className="break-inside-avoid">
                        <Link
                          href={`/areas/${area.slug}`}
                          className="inline-flex min-h-11 items-start gap-2 rounded-sm py-1.5 font-medium text-[#0A2740] underline decoration-transparent decoration-2 underline-offset-4 hover:decoration-[#1FA3D6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]"
                        >
                          <span className="mt-1 text-[#1FA3D6]">
                            <PinIcon />
                          </span>
                          {area.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="mt-12 flex flex-col gap-5 rounded-xl bg-[#E6F6FC] p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
            <div>
              <h2 className="text-xl font-bold text-[#0A2740]">Don’t see your area?</h2>
              <p className="mt-1 text-[#0A2740]/80">
                Call us to check, or see{" "}
                <Link
                  href="/services/long-distance-airport-transfers"
                  className="rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]"
                >
                  Long-Distance Airport Transfers
                </Link>{" "}
                for journeys beyond North and West London.
              </p>
            </div>
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              className={`${callButtonLight} min-h-12 shrink-0 px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]`}
            >
              Call {PRIMARY_PHONE.display}
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      <PageFaqs
        items={AREA_FAQS}
        tone="pale"
        summary="Heathrow Minicab covers 16 areas across North and West London for transfers to and from Heathrow, 24/7."
      />
    </>
  );
}
