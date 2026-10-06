import AreasStrip from "@/components/AreasStrip";
import Faqs from "@/components/Faqs";
import HeathrowTerminals from "@/components/HeathrowTerminals";
import Hero from "@/components/Hero";
import HowToBook from "@/components/HowToBook";
import TravelSituations from "@/components/TravelSituations";
import Vehicles from "@/components/Vehicles";

export default function Home() {
  return (
    <>
      <Hero />
      <TravelSituations />
      <HeathrowTerminals />
      <AreasStrip />
      <HowToBook />
      <Vehicles />
      <Faqs />
    </>
  );
}
