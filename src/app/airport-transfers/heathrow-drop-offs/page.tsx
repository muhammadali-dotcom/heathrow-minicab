import type { Metadata } from "next";
import HeathrowGuidePage from "@/components/HeathrowGuidePage";
import { DROP_OFFS } from "@/lib/airportGuidance";

export const metadata: Metadata = {
  title: "Heathrow Drop-offs | Heathrow Minicab",
  description:
    "Heading to Heathrow? What to share when booking your drop-off and how to plan your collection time.",
};

export default function Page() {
  return (
    <HeathrowGuidePage
      kind="drop-offs"
      title="Heathrow drop-offs"
      intro="Heading to your departure terminal? Here’s what to share when booking and how to plan your collection time."
      image="early"
      stepsHeading="Departing from Heathrow"
      steps={DROP_OFFS}
    />
  );
}
