import { AREAS } from "@/lib/areas";
import { SITE_URL, absoluteUrl } from "@/lib/seo";
import { PHONE_NUMBERS, PRIMARY_PHONE, SITE_NAME } from "@/lib/site";

// Structured data (schema.org JSON-LD). "<" is escaped so the payload can't close the tag.
export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export const BUSINESS_ID = `${SITE_URL}/#business`;

// Confirmed pickup areas plus Heathrow itself.
const AREA_SERVED = [
  ...AREAS.map((area) => ({ "@type": "Place", name: `${area.name}, London` })),
  { "@type": "Airport", name: "London Heathrow Airport", iataCode: "LHR" },
];

// Sitewide: the business (a service-area business, so no street address) and the website.
export function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": BUSINESS_ID,
            name: SITE_NAME,
            description:
              "24/7 minicab service for Heathrow airport transfers from North and West London.",
            url: absoluteUrl("/"),
            logo: absoluteUrl("/images/logo.png"),
            image: absoluteUrl("/images/airport-transfers-overview-hero.webp"),
            telephone: PRIMARY_PHONE.tel,
            contactPoint: PHONE_NUMBERS.map((phone) => ({
              "@type": "ContactPoint",
              telephone: phone.tel,
              contactType: "reservations",
              areaServed: "GB",
              availableLanguage: "en",
            })),
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "00:00",
              closes: "23:59",
            },
            areaServed: AREA_SERVED,
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: absoluteUrl("/"),
            name: SITE_NAME,
            inLanguage: "en-GB",
            publisher: { "@id": BUSINESS_ID },
          },
        ],
      }}
    />
  );
}

// One airport-transfer service, linked to the business.
export function ServiceJsonLd({
  name,
  serviceType,
  description,
  path,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        serviceType,
        description,
        url: absoluteUrl(path),
        provider: { "@id": BUSINESS_ID },
        areaServed: AREA_SERVED,
      }}
    />
  );
}

// Breadcrumb trail as absolute URLs; the current page has no href.
export function BreadcrumbJsonLd({
  items,
  currentPath,
}: {
  items: { href?: string; label: string }[];
  currentPath?: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        // Middle crumbs without a page (e.g. "Services") are left out; Google needs a URL on
        // every item except the last.
        itemListElement: items
          .filter((item, i) => item.href || i === items.length - 1)
          .map((item, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: item.label,
            ...(item.href
              ? { item: absoluteUrl(item.href) }
              : currentPath
                ? { item: absoluteUrl(currentPath) }
                : {}),
          })),
      }}
    />
  );
}
