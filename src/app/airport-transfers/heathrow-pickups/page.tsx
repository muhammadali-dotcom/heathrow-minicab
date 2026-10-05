import type { Metadata } from "next";
import HeathrowGuidePage from "@/components/HeathrowGuidePage";
import { PICKUPS } from "@/lib/airportGuidance";

export const metadata: Metadata = {
  title: "Heathrow Pickups | Heathrow Minicab",
  description:
    "Arriving at Heathrow? What to share when booking your pickup and how your meeting with your driver is arranged.",
};

export default function Page() {
  return (
    <HeathrowGuidePage
      kind="pickups"
      title="Heathrow pickups"
      intro="Arriving at Heathrow? Here’s what to share when booking and how your pickup is arranged."
      image="arrival"
      stepsHeading="Arriving at Heathrow"
      steps={PICKUPS}
    />
  );
}
