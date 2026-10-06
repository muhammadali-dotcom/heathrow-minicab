import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { GuideCard, sectionHeading } from "@/components/GuideBlocks";
import PageBanner from "@/components/PageBanner";
import { SECTION_CONTAINER } from "@/lib/layout";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Heathrow Transfer Services | Heathrow Minicab",
    description:
      "Airport-to-airport transfers, family and group travel, business airport travel and child seats on request, for Heathrow journeys.",
    path: "/services",
  }),
};

// Overview hub: each service has its own page.
export default function Page() {
  return (
    <>
      <PageBanner
        image="t3"
        crumb="Services"
        title="Our services"
        intro="Heathrow transfers planned around your journey, whoever you’re travelling with."
      />

      <section aria-labelledby="services-heading" className="py-14 md:py-20">
        <div className={SECTION_CONTAINER}>
          <h2 id="services-heading" className={sectionHeading}>
            Choose your service
          </h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2">
            {SERVICES.map((service) => (
              <li key={service.slug}>
                <GuideCard
                  href={`/services/${service.slug}`}
                  title={service.title}
                  text={service.summary}
                  image={service.image.src}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
