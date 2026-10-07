import { AREAS } from "@/lib/areas";
import { KNOWS_ABOUT } from "@/lib/facts";
import { CONTENT_UPDATED, SITE_URL, absoluteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import {
  BOOK_ONLINE_HREF,
  BUSINESS_BASE,
  BUSINESS_EMAIL,
  BUSINESS_SUMMARY,
  PHONE_NUMBERS,
  PRIMARY_PHONE,
  SAME_AS,
  SITE_NAME,
  TFL_LICENCE,
} from "@/lib/site";

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
const WEBSITE_ID = `${SITE_URL}/#website`;

const ALL_WEEK = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const OPEN_24_7 = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ALL_WEEK,
  opens: "00:00",
  closes: "23:59",
};

// The transfer pages and service pages offered by the business, for hasOfferCatalog.
const CATALOGUE = [
  { name: "Heathrow airport pickups", path: "/airport-transfers/heathrow-pickups" },
  { name: "Heathrow airport drop-offs", path: "/airport-transfers/heathrow-drop-offs" },
  ...SERVICES.map((service) => ({ name: service.title, path: `/services/${service.slug}` })),
];

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
            description: BUSINESS_SUMMARY,
            url: absoluteUrl("/"),
            logo: absoluteUrl("/images/logo.png"),
            image: absoluteUrl("/images/airport-transfers-overview-hero.webp"),
            telephone: PRIMARY_PHONE.tel,
            // Base area only; no street address, as a service-area business.
            address: {
              "@type": "PostalAddress",
              addressLocality: BUSINESS_BASE.locality,
              addressRegion: "London",
              postalCode: BUSINESS_BASE.postcode,
              addressCountry: "GB",
            },
            contactPoint: PHONE_NUMBERS.map((phone) => ({
              "@type": "ContactPoint",
              telephone: phone.tel,
              contactType: "reservations",
              areaServed: "GB",
              availableLanguage: "en",
            })),
            email: BUSINESS_EMAIL,
            slogan: "Heathrow airport transfers, from your doorstep to departures.",
            knowsAbout: KNOWS_ABOUT,
            openingHoursSpecification: OPEN_24_7,
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Heathrow airport transfers",
              itemListElement: CATALOGUE.map((item) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: item.name,
                  url: absoluteUrl(item.path),
                },
              })),
            },
            potentialAction: {
              "@type": "ReserveAction",
              name: "Book online",
              target: { "@type": "EntryPoint", urlTemplate: BOOK_ONLINE_HREF },
            },
            ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
            ...(TFL_LICENCE
              ? {
                  identifier: {
                    "@type": "PropertyValue",
                    name: "TfL private hire operator licence",
                    value: TFL_LICENCE.number,
                  },
                }
              : {}),
            areaServed: AREA_SERVED,
          },
          {
            "@type": "WebSite",
            "@id": WEBSITE_ID,
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
  areaServed = AREA_SERVED,
}: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  // Defaults to every area we cover; an area page narrows it to that area plus Heathrow.
  areaServed?: object[];
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
        areaServed,
        hoursAvailable: OPEN_24_7,
        availableChannel: [
          {
            "@type": "ServiceChannel",
            name: "Online booking",
            serviceUrl: BOOK_ONLINE_HREF,
          },
          {
            "@type": "ServiceChannel",
            name: "Phone bookings",
            servicePhone: { "@type": "ContactPoint", telephone: PRIMARY_PHONE.tel },
          },
        ],
      }}
    />
  );
}

// One page: its place in the site, its subject and when it was last reviewed. speakable points
// voice assistants at the H1 and any block marked data-speakable (the page's direct answer).
export function WebPageJsonLd({
  path,
  title,
  description,
  type = "WebPage",
}: {
  path: string;
  title: string;
  description: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": type,
        "@id": `${absoluteUrl(path)}#webpage`,
        url: absoluteUrl(path),
        name: title,
        description,
        inLanguage: "en-GB",
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": BUSINESS_ID },
        dateModified: CONTENT_UPDATED,
        speakable: {
          "@type": "SpeakableSpecification",
          cssSelector: ["h1", "[data-speakable]"],
        },
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
