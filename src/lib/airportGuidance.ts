// Confirmed Heathrow guidance, shared by /airport-transfers and the terminal pages.
// Keep it free of meeting points, procedures or timings that haven't been confirmed.
import type { StepIconName } from "@/components/StepIcon";

export type InfoItem = { heading: string; text: string; icon: StepIconName };

export const PICKUPS: InfoItem[] = [
  {
    heading: "Share your flight details",
    icon: "plane",
    text: "Provide your flight number, arrival date, terminal, destination, passenger numbers and luggage when booking.",
  },
  {
    heading: "Confirm your meeting arrangement",
    icon: "sign",
    text: "Your booking will confirm whether you meet your driver inside arrivals with a name board or at an agreed pickup location.",
  },
  {
    heading: "Keep us updated",
    icon: "phone",
    text: "We monitor your flight and adjust pickup arrangements for delays. Please also contact us if your flight is delayed or your plans change.",
  },
];

export const DROP_OFFS: InfoItem[] = [
  {
    heading: "Provide your journey details",
    icon: "pin",
    text: "Share your pickup address, travel date, flight departure time, terminal, passenger numbers and luggage.",
  },
  {
    heading: "Agree your collection time",
    icon: "clock",
    text: "Confirm your pickup time when booking, allowing for the journey and your airline’s check-in requirements.",
  },
  {
    heading: "Check your terminal",
    icon: "terminal",
    text: "Confirm your departure terminal with your airline and let us know if it changes.",
  },
];

export const CHECKLIST = [
  "Have your booking confirmation available.",
  "Keep the phone number provided with your booking reachable.",
  "Tell us if your flight, terminal, pickup address or travel plans change.",
  "Be ready at the location and time confirmed with your booking.",
];

export const MEETING_MESSAGE =
  "Your exact meeting point is confirmed with your booking. Call us if you need help finding your driver.";
