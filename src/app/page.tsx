import AreasStrip from "@/components/AreasStrip";
import Faqs from "@/components/Faqs";
import HeathrowTerminals from "@/components/HeathrowTerminals";
import Hero from "@/components/Hero";
import HowToBook from "@/components/HowToBook";
import TravelSituations from "@/components/TravelSituations";
import QuickFacts from "@/components/QuickFacts";
import Vehicles from "@/components/Vehicles";
import { WebPageJsonLd } from "@/components/JsonLd";
import { HOME_SEO } from "@/lib/seo";

export default function Home() {
  return (
    <>
      <WebPageJsonLd {...HOME_SEO} />
      <Hero />
      <QuickFacts />
      <TravelSituations />
      <HeathrowTerminals />
      <AreasStrip />
      <HowToBook />
      <Vehicles />
      <Faqs />
    </>
  );
}
