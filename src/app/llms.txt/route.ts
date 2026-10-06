import { AREA_REGIONS, AREAS } from "@/lib/areas";
import { absoluteUrl } from "@/lib/seo";
import { SERVICES } from "@/lib/services";
import { ALT_PHONE, PRIMARY_PHONE, SITE_NAME } from "@/lib/site";
import { VEHICLES } from "@/lib/vehicles";

// Plain-text summary for AI assistants and answer engines (llmstxt.org). Facts here must
// match the site; update both together.
export const dynamic = "force-static";

export function GET() {
  const areas = AREA_REGIONS.map(
    (region) =>
      `- ${region.label}: ${AREAS.filter((a) => a.region === region.id)
        .map((a) => a.name)
        .join(", ")}`,
  ).join("\n");

  const services = SERVICES.map(
    (s) => `- [${s.title}](${absoluteUrl(`/services/${s.slug}`)}): ${s.summary}`,
  ).join("\n");

  const vehicles = VEHICLES.map(
    (v) =>
      `${v.name} (${v.model} or similar, ${v.passengers === null ? "passengers on request" : `${v.passengers} passengers`}, ${v.luggage.large} large and ${v.luggage.small} small bags)`,
  ).join("; ");

  const body = `# ${SITE_NAME}

> ${SITE_NAME} is a 24/7 minicab service for Heathrow airport transfers: pickups from Heathrow arrivals and drop-offs to Heathrow departures, Terminals 2, 3, 4 and 5, for passengers in North and West London.

## Key facts
- Available 24/7, all day, every day.
- Bookings: ${PRIMARY_PHONE.display} (${PRIMARY_PHONE.tel}). Alternative line: ${ALT_PHONE.display} (${ALT_PHONE.tel}). WhatsApp: ${PRIMARY_PHONE.display}.
- Fixed price once confirmed: no meter, so traffic doesn't change the fare. The price depends on time, day and route.
- Waiting, parking and any extras are covered as agreed in the quote. The Heathrow drop-off charge is not included in the journey price; it is added to the quote.
- Pickups: the driver meets passengers inside arrivals with a name board, or at an agreed pickup point, as confirmed in the booking.
- Flights are monitored and pickup arrangements adjusted for delays.
- 15 minutes' free waiting starts at the agreed pickup time; waiting after that is charged at the rate confirmed before booking.
- Child seats on request at no extra cost.
- Vehicles: ${vehicles}.

## Areas covered
${areas}

## Pages
- [Home](${absoluteUrl("/")}): overview, terminals, how to book, vehicles and FAQs.
- [Heathrow airport transfers](${absoluteUrl("/airport-transfers")}): how pickups, drop-offs and pricing work.
- [Heathrow pickups](${absoluteUrl("/airport-transfers/heathrow-pickups")}): meet and greet in arrivals, waiting time and help finding your driver.
- [Heathrow drop-offs](${absoluteUrl("/airport-transfers/heathrow-drop-offs")}): door-to-terminal journeys and collection times.
- [Heathrow terminal guides](${absoluteUrl("/airport-transfers/terminal-guides")}): Terminals 2, 3, 4 and 5 for arrivals and departures.
- [Areas we cover](${absoluteUrl("/areas")}): North and West London pickup areas.
- [Our vehicles](${absoluteUrl("/our-vehicles")}): passenger and luggage capacity.
- [FAQs](${absoluteUrl("/faqs")})
- [Contact](${absoluteUrl("/contact")})

## Services
${services}
`;

  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
