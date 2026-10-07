import { AREA_REGIONS, AREAS } from "@/lib/areas";
import { KEY_FACTS } from "@/lib/facts";
import { FAQ_GROUPS } from "@/lib/faqs";
import { absoluteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import {
  ALT_PHONE,
  BOOK_ONLINE_HREF,
  BUSINESS_BASE_LABEL,
  BUSINESS_EMAIL,
  BUSINESS_SUMMARY,
  PRIMARY_PHONE,
  SITE_NAME,
  TFL_LICENCE,
} from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

// Plain-text summaries for AI assistants and answer engines (llmstxt.org), built from the same
// data as the pages so the facts always match. /llms.txt is the short version; /llms-full.txt
// adds every question and answer.

const vehicles = VEHICLES.map(
  (v) =>
    `- ${v.name}: ${v.model} or similar, ${v.passengers === null ? "passengers on request" : `${v.passengers} passengers`}, ${v.luggage.large} large and ${v.luggage.small} small bags. Best for ${v.bestFor.toLowerCase()}.`,
).join("\n");

const areas = AREA_REGIONS.map(
  (region) =>
    `- ${region.label}: ${AREAS.filter((a) => a.region === region.id)
      .map((a) => `[${a.name}](${absoluteUrl(`/areas/${a.slug}`)})`)
      .join(", ")}`,
).join("\n");

const services = SERVICES.map(
  (s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`,
).join("\n");

export function llmsSummary() {
  return `# ${SITE_NAME}

> ${BUSINESS_SUMMARY} Services include pickups from Heathrow arrivals and drop-offs to Heathrow departures.

## Key facts
- Base: ${BUSINESS_BASE_LABEL}.
${KEY_FACTS.map((f) => `- ${f.label}: ${f.value}.`).join("\n")}
- Pricing: the price depends on time, day and route, and is fixed once confirmed. Waiting, parking and any extras are covered as agreed in the quote. The Heathrow drop-off charge is not included in the journey price; it is added to the quote.
- Waiting after the 15 free minutes is charged at the rate confirmed before booking.
- Payment: cash and online payment.
- Changes and cancellations: call as soon as possible; options and any charges are confirmed before proceeding.${TFL_LICENCE ? `\n- Operated by ${TFL_LICENCE.operator}, TfL private hire operator licence ${TFL_LICENCE.number}.` : ""}

## How to book
- Online: ${BOOK_ONLINE_HREF}
- Phone: ${PRIMARY_PHONE.display} (${PRIMARY_PHONE.tel}); alternative line ${ALT_PHONE.display} (${ALT_PHONE.tel})
- WhatsApp: ${PRIMARY_PHONE.display}
- Email (general enquiries): ${BUSINESS_EMAIL}
- For urgent pickup help or booking changes, please call.

## Vehicles
${vehicles}

## Areas covered
${areas}

## Pages
- [Home](${absoluteUrl("/")}): overview, terminals, how to book, vehicles and FAQs.
- [Heathrow airport transfers](${absoluteUrl("/airport-transfers")}): how pickups, drop-offs and pricing work.
- [Heathrow pickups](${absoluteUrl("/airport-transfers/heathrow-pickups")}): meet and greet in arrivals, waiting time and help finding your driver.
- [Heathrow drop-offs](${absoluteUrl("/airport-transfers/heathrow-drop-offs")}): door-to-terminal journeys and collection times.
- [Heathrow terminal guides](${absoluteUrl("/airport-transfers/terminal-guides")}): Terminals 2, 3, 4 and 5 for arrivals and departures.
- [Areas we cover](${absoluteUrl("/areas")}): North and West London pickup areas, each with its own page.
- [Our vehicles](${absoluteUrl("/our-vehicles")}): passenger and luggage capacity.
- [FAQs](${absoluteUrl("/faqs")}): every common question, grouped by topic.
- [About](${absoluteUrl("/about")})
- [Contact](${absoluteUrl("/contact")})
- [Full text for AI assistants](${absoluteUrl("/llms-full.txt")}): this summary plus every question and answer.

## Services
${services}
`;
}

export function llmsFull() {
  const faqs = FAQ_GROUPS.map(
    (group) =>
      `### ${group.title}\n\n${group.items.map((f) => `**${f.question}**\n${f.answer}`).join("\n\n")}`,
  ).join("\n\n");
  return `${llmsSummary()}
## Questions and answers

${faqs}
`;
}

export const textResponse = (body: string) =>
  new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
