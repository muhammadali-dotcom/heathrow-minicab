import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { HeroRise, HeroWords } from "@/components/HeroWords";
import { SECTION_CONTAINER } from "@/lib/layout";

// Photos are cropped from the supplied terminal images (their yellow labels removed).
// T5 shares the footer CTA band's photo, so only the Terminal 5 page uses it. Alts match the
// ones the same photos have elsewhere on the site.
export const BANNER_IMAGES = {
  t2: {
    src: "/images/banners/t2.jpg",
    alt: "Glass-fronted Heathrow terminal with a curved roof and a covered drop-off area",
  },
  t3: {
    src: "/images/banners/t3.jpg",
    alt: "Heathrow terminal entrance with a long glass canopy and sliding doors",
  },
  t4: {
    src: "/images/banners/t4.jpg",
    alt: "Heathrow terminal frontage with a covered walkway and the control tower in the distance",
  },
  t5: { src: "/images/cta-terminal5.jpg", alt: "Glass-fronted Heathrow airport terminal entrance" },
  hero: {
    src: "/images/heathrow-hero-wide.webp",
    alt: "Black Mercedes saloon parked outside a Heathrow terminal as a plane takes off overhead",
  },
  arrival: {
    src: "/images/airport-arrival.webp",
    alt: "Smiling traveller walking through a bright airport terminal pulling a navy suitcase",
  },
  family: {
    src: "/images/family-transfer.webp",
    alt: "Family with two suitcases and a holdall loading their luggage into the boot of a car outside an airport terminal",
  },
  early: {
    src: "/images/early-flight.webp",
    alt: "Traveller wheeling a suitcase down a driveway at sunrise towards a waiting black car with its door open",
  },
} as const;

type PageBannerProps = {
  title: string;
  crumb?: string; // short page name for the breadcrumb (defaults to the title)
  parents?: { href: string; label: string }[]; // optional middle breadcrumb levels
  intro?: string;
  image: keyof typeof BANNER_IMAGES;
  links?: { href: string; label: string }[];
};

const focusWhite =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Shared header for inner pages: a photo under an even 70% navy tint (no gradient),
// breadcrumb, the page's H1 and optional in-page links.
export default function PageBanner({
  title,
  crumb,
  parents,
  intro,
  image,
  links,
}: PageBannerProps) {
  return (
    <section aria-labelledby="page-heading" className="relative overflow-hidden bg-[#0A2740]">
      <Image
        src={BANNER_IMAGES[image].src}
        alt={BANNER_IMAGES[image].alt}
        fill
        sizes="100vw"
        preload
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0A2740]/70" />

      <div className={`relative ${SECTION_CONTAINER} py-14 md:py-20`}>
        <HeroRise from="left" delay={0}>
          <Breadcrumb tone="dark" items={[...(parents ?? []), { label: crumb ?? title }]} />
        </HeroRise>

        <h1
          id="page-heading"
          className="mt-3 max-w-[22ch] text-3xl leading-tight font-bold text-balance text-white md:text-5xl"
        >
          <HeroWords parts={[{ text: title }]} />
        </h1>
        {intro && (
          <HeroRise delay={0.6}>
            <p className="mt-4 max-w-[35rem] text-lg leading-relaxed text-white/85">{intro}</p>
          </HeroRise>
        )}

        {links && links.length > 0 && (
          <HeroRise delay={0.75}>
            <nav aria-label="On this page" className="mt-7">
              <ul className="flex flex-wrap gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`inline-flex min-h-11 items-center rounded-full border border-white/40 bg-white/10 px-4 text-sm font-semibold text-white hover:bg-white/20 ${focusWhite}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </HeroRise>
        )}
      </div>
    </section>
  );
}
