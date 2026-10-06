import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import PageBanner from "@/components/PageBanner";
import Vehicles from "@/components/Vehicles";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "Our Vehicles | Saloon, Estate, MPV & Executive",
    description:
      "Heathrow minicab vehicles with passenger and luggage capacity: saloon, estate, MPV for up to 6 passengers, and executive cars.",
    path: "/our-vehicles",
  }),
};

export default function Page() {
  return (
    <>
      <PageBanner
        image="hero"
        crumb="Our Vehicles"
        eyebrow="Our vehicles"
        title="Choose a car that fits your journey."
      />
      <Vehicles showHeader={false} />
    </>
  );
}
