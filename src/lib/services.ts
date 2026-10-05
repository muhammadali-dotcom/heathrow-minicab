import { VEHICLES, type Vehicle } from "@/lib/vehicles";

export type Service = {
  slug: string;
  title: string;
  summary: string; // one line for hub cards
  text: string; // page intro
  points: string[];
  vehicleId?: Vehicle["id"];
  image: "t4" | "family" | "hero";
};

export const findVehicle = (id: Vehicle["id"]) => {
  const found = VEHICLES.find((v) => v.id === id);
  if (!found) throw new Error(`Unknown vehicle: ${id}`);
  return found;
};

// Same values as the vehicle cards, so capacities stay in one place (src/lib/vehicles.ts).
export const capacity = (v: Vehicle) =>
  `${v.passengers === null ? "Passenger numbers confirmed when booking" : `Up to ${v.passengers} passengers`}, ${v.luggage.large} large suitcases and ${v.luggage.small} small bags`;

const mpv = findVehicle("mpv");
const executive = findVehicle("executive");

// Only services the business has confirmed it offers.
export const SERVICES: Service[] = [
  {
    slug: "airport-to-airport-transfers",
    title: "Airport-to-Airport Transfers",
    summary: "Connecting between Heathrow and another airport, planned around both flights.",
    text: "Connecting between Heathrow and another airport? We’ll plan your transfer around both flights.",
    points: [
      "Tell us both airports, your flight times and terminals when booking.",
      "Let us know your passenger numbers and luggage so we can suggest a suitable vehicle.",
      "Contact us if either flight time or terminal changes.",
    ],
    image: "t4",
  },
  {
    slug: "family-group-transfers",
    title: "Family & Group Transfers",
    summary: "Room for your group and luggage in one vehicle.",
    text: `Travelling together? Our MPV (${mpv.model} or similar) keeps your group and luggage in one vehicle.`,
    points: [
      `${capacity(mpv)}.`,
      "Tell us everyone’s luggage, including pushchairs or bulky items, when booking.",
      "Child seats are available on request.",
    ],
    vehicleId: "mpv",
    image: "family",
  },
  {
    slug: "business-airport-travel",
    title: "Business Airport Travel",
    summary: "An executive car for your Heathrow business trip.",
    text: `Travelling for work? Choose our executive car (${executive.model} or similar) for your Heathrow journey.`,
    points: [
      `${capacity(executive)}.`,
      "Share your flight and meeting details when booking so we can plan your pickup time.",
    ],
    vehicleId: "executive",
    image: "hero",
  },
  {
    slug: "child-seats",
    title: "Child Seats",
    summary: "Child seats available on request for your Heathrow journey.",
    text: "Travelling with young children? Child seats are available on request.",
    points: [
      "Request a child seat when you book.",
      "Tell us your child’s age so we can confirm a suitable seat.",
    ],
    image: "family",
  },
];
