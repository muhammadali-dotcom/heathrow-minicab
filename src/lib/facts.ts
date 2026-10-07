// Short, quotable facts as confirmed by the business. One source for the Key facts block,
// llms.txt and structured data, so the site and AI summaries never drift apart. Don't add
// prices, journey times, ratings or licence details until they're confirmed.
export type KeyFact = { label: string; value: string };

export const KEY_FACTS: KeyFact[] = [
  { label: "Hours", value: "Open 24/7, every day of the year" },
  { label: "Terminals", value: "Heathrow Terminals 2, 3, 4 and 5" },
  { label: "Meet and greet", value: "Name board inside arrivals, or an agreed pickup point" },
  { label: "Flight delays", value: "Flights monitored and pickups adjusted for delays" },
  { label: "Waiting", value: "15 minutes’ free waiting from your agreed pickup time" },
  { label: "Price", value: "Fixed once confirmed: no meter, so traffic doesn’t change it" },
  { label: "Child seats", value: "Available on request at no extra cost" },
  { label: "Vehicles", value: "Saloon, estate, MPV for up to 6, and executive cars" },
];

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
