export type Vehicle = {
  id: "saloon" | "estate" | "mpv" | "executive";
  name: string;
  // Example model shown as "<model> or similar"; the exact car isn't guaranteed.
  model: string;
  // Shown as short "x N" rows on every card. Passengers null = confirmed when booking
  // (shown as "On request").
  passengers: number | null;
  luggage: { large: number; small: number };
  // Short "Best for:" line on the vehicle cards.
  bestFor: string;
  // A few plain sentences for the Our Vehicles page and its structured data.
  description: string;
  // Transparent cutouts, trimmed and resized from the supplied photos.
  image: { src: string; alt: string };
};

export const VEHICLES: Vehicle[] = [
  {
    id: "saloon",
    name: "Saloon",
    model: "Skoda Octavia",
    bestFor: "Solo travellers, couples and small families",
    description:
      "A Skoda Octavia or similar for up to 4 passengers with 2 large suitcases and 2 small bags. Our everyday car for solo travellers, couples and small families with standard luggage.",
    passengers: 4,
    luggage: { large: 2, small: 2 },
    image: {
      src: "/images/vehicles/saloon.webp",
      alt: "Charcoal Skoda Octavia saloon with a Heathrow Minicab number plate",
    },
  },
  {
    id: "estate",
    name: "Estate",
    model: "Skoda Superb Estate",
    bestFor: "Extra luggage and longer trips",
    description:
      "A Skoda Superb Estate or similar with the same 4 seats as a saloon and room for a third large suitcase. Choose it for heavier packing or a longer trip.",
    passengers: 4,
    luggage: { large: 3, small: 2 },
    image: {
      src: "/images/vehicles/estate.webp",
      alt: "Charcoal Skoda Superb Estate with a Heathrow Minicab number plate",
    },
  },
  {
    id: "mpv",
    name: "MPV",
    model: "Ford Galaxy",
    bestFor: "Families and groups of up to 6",
    description:
      "A Ford Galaxy or similar for up to 6 passengers with 4 large suitcases and 2 small bags. Our largest vehicle, for families, groups, or 4 travellers with more luggage than an estate takes.",
    passengers: 6,
    luggage: { large: 4, small: 2 },
    image: {
      src: "/images/vehicles/mpv.webp",
      alt: "Charcoal Ford Galaxy MPV with a Heathrow Minicab number plate",
    },
  },
  {
    id: "executive",
    name: "Executive",
    model: "Mercedes E-Class",
    bestFor: "Business travel and special occasions",
    description:
      "A Mercedes E-Class or similar for up to 4 passengers with 2 large suitcases and 2 small bags. A more premium car with a quieter cabin, for business travel, clients and special occasions.",
    passengers: 4,
    luggage: { large: 2, small: 2 },
    image: {
      src: "/images/vehicles/executive.webp",
      alt: "Charcoal Mercedes E-Class saloon with a Heathrow Minicab number plate",
    },
  },
];

// Capacity rows for a ComparisonTable with one column per vehicle. goodFor overrides the
// "Best for" wording for a page's audience.
export function vehicleComparisonRows(goodFor?: Record<Vehicle["id"], string>) {
  return [
    { label: "Example car", values: VEHICLES.map((v) => `${v.model} or similar`) },
    {
      label: "Passengers",
      values: VEHICLES.map((v) => (v.passengers === null ? "On request" : v.passengers)),
    },
    { label: "Large suitcases", values: VEHICLES.map((v) => v.luggage.large) },
    { label: "Small bags", values: VEHICLES.map((v) => v.luggage.small) },
    goodFor
      ? { label: "Good for", values: VEHICLES.map((v) => goodFor[v.id]) }
      : { label: "Best for", values: VEHICLES.map((v) => v.bestFor) },
  ];
}
