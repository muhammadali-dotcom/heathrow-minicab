import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import Vehicles from "@/components/Vehicles";

export const metadata: Metadata = { title: "Our Vehicles | Heathrow Minicab" };

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
