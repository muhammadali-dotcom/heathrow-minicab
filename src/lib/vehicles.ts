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
  // Transparent cutouts, trimmed and resized from the supplied photos.
  image: { src: string; alt: string };
};

export const VEHICLES: Vehicle[] = [
  {
    id: "saloon",
    name: "Saloon",
    model: "Skoda Octavia",
    bestFor: "Solo travellers, couples and small families",
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
    passengers: 4,
    luggage: { large: 2, small: 2 },
    image: {
      src: "/images/vehicles/executive.webp",
      alt: "Charcoal Mercedes E-Class saloon with a Heathrow Minicab number plate",
    },
  },
];
