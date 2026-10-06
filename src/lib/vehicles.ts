export type Vehicle = {
  id: "saloon" | "estate" | "mpv" | "executive";
  name: string;
  // Example model shown as "<model> or similar"; the exact car isn't guaranteed.
  model: string;
  // Shown as short "x N" rows on every card. Passengers null = confirmed when booking
  // (shown as "On request").
  passengers: number | null;
  luggage: { large: number; small: number };
  // Transparent cutouts, trimmed and resized from the supplied photos.
  image: { src: string; alt: string };
};

export const VEHICLES: Vehicle[] = [
  {
    id: "saloon",
    name: "Saloon",
    model: "Skoda Octavia",
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
    passengers: 4,
    luggage: { large: 2, small: 2 },
    image: {
      src: "/images/vehicles/executive.webp",
      alt: "Charcoal Mercedes E-Class saloon with a Heathrow Minicab number plate",
    },
  },
];
