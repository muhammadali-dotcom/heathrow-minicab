// The service pages, in menu order. Drives the Services dropdown, footer column, /services hub,
// sitemap and llms.txt. Each page lives in its own folder under src/app/services/.
export type Service = {
  slug: string;
  title: string;
  summary: string; // one line for hub cards and llms.txt
  // Placeholder photos until each service has its own; swap the src here and in the page hero.
  image: { src: string; alt: string; width: number; height: number };
};

export const SERVICES: Service[] = [
  {
    slug: "family-group-transfers",
    title: "Family & Group Airport Transfers",
    summary: "Room for your family or group and everyone’s luggage, with child seats on request.",
    image: {
      src: "/images/service-family.webp",
      alt: "Driver loading suitcases into a navy MPV as a family with two children waits at an airport terminal",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "airport-hotel-transfers",
    title: "Airport & Hotel Transfers",
    summary:
      "Between Heathrow and your hotel, in either direction, with returns bookable together.",
    image: {
      src: "/images/service-hotel.webp",
      alt: "Driver opening the car door for a smiling guest with a suitcase outside a London hotel",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "airport-to-airport-transfers",
    title: "Airport-to-Airport Transfers",
    summary: "Road transfers between Heathrow and Gatwick, Stansted, Luton or London City.",
    image: {
      src: "/images/service-airport-to-airport.webp",
      alt: "Driver loading suitcases into a navy estate car for two travellers at an airport terminal",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "long-distance-airport-transfers",
    title: "Long-Distance Airport Transfers",
    summary: "Heathrow transfers to and from the South East, Oxford and Cambridge.",
    image: {
      src: "/images/service-long-distance.webp",
      alt: "Navy estate car on a countryside road with Heathrow Airport and a departing plane in the distance",
      width: 1536,
      height: 1024,
    },
  },
  {
    slug: "executive-business-travel",
    title: "Executive & Business Airport Travel",
    summary: "Airport transfers to offices, hotels and meetings, in a standard or executive car.",
    image: {
      src: "/images/service-executive.webp",
      alt: "Driver holding the car door open for a business traveller with a suitcase outside an airport terminal",
      width: 1536,
      height: 1024,
    },
  },
];

export const findService = (slug: string) => {
  const found = SERVICES.find((service) => service.slug === slug);
  if (!found) throw new Error(`Unknown service: ${slug}`);
  return found;
};
