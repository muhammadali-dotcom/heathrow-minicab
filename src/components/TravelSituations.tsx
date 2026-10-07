import Image from "next/image";
import BookingCta from "@/components/BookingCta";
import { SECTION_CONTAINER } from "@/lib/layout";

type TravelSituationCard = {
  image: string;
  alt: string;
  heading: string;
  text: string;
};

const cards: TravelSituationCard[] = [
  {
    image: "/images/early-flight.webp",
    alt: "Traveller wheeling a suitcase down a driveway at sunrise towards a waiting black car with its door open",
    heading: "An early flight to catch?",
    text: "Arrange your journey to Heathrow in advance, with your pickup address and departure terminal ready.",
  },
  {
    image: "/images/airport-arrival.webp",
    alt: "Smiling traveller walking through a bright airport terminal pulling a navy suitcase",
    heading: "A long flight behind you?",
    text: "Plan your journey from Heathrow to your home, hotel or next destination before you travel.",
  },
  {
    image: "/images/family-transfer.webp",
    alt: "Family with two suitcases and a holdall loading their luggage into the boot of a car outside an airport terminal",
    heading: "Travelling with family and bags?",
    text: "Tell us your passenger numbers and luggage so we can help you choose a suitable vehicle.",
  },
];

export default function TravelSituations() {
  return (
    <section
      aria-labelledby="travel-situations-heading"
      className="bg-white py-16 md:py-24"
    >
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
          />
          <p className="text-sm font-semibold tracking-[0.15em] text-[#0A2740] uppercase">
            YOUR HEATHROW JOURNEY
          </p>
          <h2
            id="travel-situations-heading"
            className="mt-3 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
          >
            Different travel plans. <span className="lg:block">The same need to get there.</span>
          </h2>
        </div>

        <ul className="mt-8 grid gap-6 md:mt-12 md:grid-cols-3">
          {cards.map((card) => (
            <li key={card.image}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#D5E8F2] bg-white">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 310px, (min-width: 768px) 33vw, 100vw"
                  className="aspect-[3/2] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold text-[#0A2740]">
                    {card.heading}
                  </h3>
                  <p className="mt-3 leading-relaxed text-[#5B7A93]">
                    {card.text}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="mt-10 md:mt-12">
          <BookingCta />
        </div>
      </div>
    </section>
  );
}
