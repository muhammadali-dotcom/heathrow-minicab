import type { Metadata } from "next";
import PageFaqs from "@/components/PageFaqs";
import { VEHICLE_FAQS } from "@/lib/faqs";
import { WebPageJsonLd } from "@/components/JsonLd";
import { pageMetadata } from "@/lib/seo";
import PageBanner from "@/components/PageBanner";
import Vehicles from "@/components/Vehicles";

const seo = {
  title: "Our Vehicles | Saloon, Estate, MPV & Executive",
  description:
    "Heathrow minicab vehicles with passenger and luggage capacity: saloon, estate, MPV for up to 6 passengers, and executive cars.",
  path: "/our-vehicles",
};

export const metadata: Metadata = pageMetadata(seo);

export default function Page() {
  return (
    <>
      <WebPageJsonLd {...seo} />
      <PageBanner
        image="hero"
        crumb="Our Vehicles"
        eyebrow="Our vehicles"
        title="Choose a car that fits your journey."
      />
      <Vehicles showHeader={false} />
      <PageFaqs
        items={VEHICLE_FAQS}
        tone="pale"
        summary="Heathrow Minicab offers four vehicle types: saloon and estate for up to 4 passengers, an MPV for up to 6, and executive cars for up to 4."
      />
    </>
  );
}
