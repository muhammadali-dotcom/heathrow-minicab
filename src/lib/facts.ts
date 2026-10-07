import type { FeatureIconName } from "@/components/transfers/TransferBlocks";

// Short, quotable facts as confirmed by the business. One source for the Key facts block,
// llms.txt and structured data, so the site and AI summaries never drift apart. Don't add
// prices, journey times, ratings or licence details until they're confirmed.
export type KeyFact = {
  id: string;
  // label/value: the plain fact for llms.txt.
  label: string;
  value: string;
  // title/text/icon: the Key facts cards on the site.
  title: string;
  text: string;
  icon: FeatureIconName;
};

// The first two (hours, terminals) are the large feature cards; the rest are the small cards.
export const KEY_FACTS: KeyFact[] = [
  {
    id: "hours",
    label: "Hours",
    value: "Open 24/7, every day of the year",
    title: "Here whenever you fly",
    text: "Early departures. Late arrivals. Every day of the year.",
    icon: "clock",
  },
  {
    id: "terminals",
    label: "Terminals",
    value: "Heathrow Terminals 2, 3, 4 and 5",
    title: "Every Heathrow terminal",
    text: "Pickups and drop-offs across Terminals 2, 3, 4 and 5.",
    icon: "plane",
  },
  {
    id: "meet-and-greet",
    label: "Meet and greet",
    value: "Name board inside arrivals, or an agreed pickup point",
    title: "Meet & greet",
    text: "Name board in arrivals or your agreed pickup point.",
    icon: "board",
  },
  {
    id: "flight-monitoring",
    label: "Flight delays",
    value: "Flights monitored and pickups adjusted for delays",
    title: "Flight monitoring",
    text: "Pickup arrangements adjusted for flight delays.",
    icon: "plane",
  },
  {
    id: "waiting",
    label: "Waiting",
    value: "15 minutes’ free waiting from your agreed pickup time",
    title: "15 minutes included",
    text: "Free waiting from your agreed pickup time.",
    icon: "clock",
  },
  {
    id: "price",
    label: "Price",
    value: "Fixed once confirmed: no meter, so traffic doesn’t change it",
    title: "Fixed journey fare",
    text: "Confirmed before travel. Traffic won’t change it.",
    icon: "tag",
  },
  {
    id: "child-seats",
    label: "Child seats",
    value: "Available on request at no extra cost",
    title: "Child seats on request",
    text: "Available at no extra cost. Request when booking.",
    icon: "seat",
  },
  {
    id: "vehicles",
    label: "Vehicles",
    value: "Saloon, estate, MPV for up to 6, and executive cars",
    title: "Room for your journey",
    text: "Saloon, estate, MPV and executive cars.",
    icon: "car",
  },
];

// Small print under the Key facts cards.
export const KEY_FACTS_NOTE = "Additional waiting or journey changes may cost extra.";

// Topics the business can answer about, for the knowsAbout schema property.
export const KNOWS_ABOUT = [
  "Heathrow airport transfers",
  "Heathrow Terminal 2",
  "Heathrow Terminal 3",
  "Heathrow Terminal 4",
  "Heathrow Terminal 5",
  "Airport meet and greet",
  "Minicab and private hire",
  "Airport-to-airport transfers",
  "Hotel transfers",
  "Family and group transfers",
  "Executive airport transfers",
];
