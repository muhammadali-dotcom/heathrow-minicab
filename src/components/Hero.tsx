import { getImageProps } from "next/image";
import BookingCta from "@/components/BookingCta";
import PlaneIcon from "@/components/PlaneIcon";
import { HERO_COPY } from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

const alt =
  "Black Mercedes saloon parked outside a Heathrow terminal as a plane takes off overhead";

// Desktop (xl+): the wide 2.4:1 composition, shown whole: the hero takes the image's own
// proportions, so the plane, sign and full car are never cropped.
const DESKTOP_PHOTO = { src: "/images/heathrow-hero-wide.webp", width: 1942, height: 809 };
// Phones and tablets: the tighter 16:9 photo above the text, so the car stays large.
const MOBILE_PHOTO = { src: "/images/heathrow-hero.webp", width: 1672, height: 941 };

// Confirmed in KEY_FACTS (src/lib/facts.ts): price, flight monitoring, meet and greet, hours.
const TRUST_POINTS = ["Fixed fares", "Flight monitoring", "Meet & greet", "24/7 service"];

function TickBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1FA3D6] text-[#0A2740]"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-3.5 w-3.5 fill-none stroke-current"
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
    </span>
  );
}

export default function Hero() {
  const common = { alt, sizes: "100vw" };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...common, ...DESKTOP_PHOTO });
  const { props: mobileProps } = getImageProps({
    ...common,
    ...MOBILE_PHOTO,
    loading: "eager",
    fetchPriority: "high",
  });

  return (
    <section aria-labelledby="hero-heading" className="relative bg-[#0A2740] xl:aspect-[1942/809]">
      {/* Below xl: the whole 16:9 photo at its own aspect ratio, above the text.
          From xl: the whole wide photo behind the text. Taller content grows the hero rather
          than being clipped. */}
      <div className="relative aspect-[1672/941] xl:absolute xl:inset-0 xl:aspect-auto">
        <picture>
          <source media="(min-width: 80rem)" srcSet={desktopSrcSet} sizes="100vw" />
          <img {...mobileProps} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
        </picture>
        {/* Desktop only: navy behind the text on the left, fading out so the car and plane on the
            right stay vivid. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden bg-linear-to-r from-[#0A2740]/95 via-[#0A2740]/70 via-45% to-[#0A2740]/0 xl:block"
        />
      </div>

      {/* Same container as the header, so the text lines up with the logo. From xl the text sits
          on the gradient, with a soft glow on the blue line. */}
      <div className={`relative ${SECTION_CONTAINER} py-8 sm:py-10 xl:pt-14 xl:pb-12`}>
        <div className="max-w-2xl xl:max-w-[48rem]">
          {/* Pill badge; decorative, the H1 says the same. */}
          <p
            aria-hidden="true"
            className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/5 px-4 py-2 text-[11px] font-bold tracking-[0.2em] whitespace-nowrap text-white/90 uppercase sm:text-xs"
          >
            <PlaneIcon className="h-4 w-4 rotate-90 text-[#4FB8E0]" />
            {/* "airport" drops on phones so the pill stays on one line. */}
            <span>
              Heathrow <span className="hidden sm:inline">airport </span>transfers · 24/7
            </span>
          </p>

          <h1
            id="hero-heading"
            className="text-[2rem] leading-[1.1] font-bold tracking-tight text-balance text-white sm:text-[2.5rem] xl:text-[3rem] xl:text-wrap xl:[text-shadow:0_1px_2px_rgb(10_39_64/0.4)]"
          >
            {/* Three lines from xl, the last in light blue; natural wrapping below. The nowrap keeps
                the comma on the end of its line rather than starting the next. */}
            Heathrow airport transfers,{" "}
            <span className="xl:block">
              from your doorstep to <span className="whitespace-nowrap">departures,</span>
            </span>{" "}
            <span className="text-[#4FB8E0] xl:block xl:[text-shadow:0_0_24px_rgb(79_184_224/0.35)]">
              and arrivals to home.
            </span>
          </h1>

          <p className="mt-4 max-w-[38rem] text-base leading-relaxed text-white/90 sm:text-lg xl:[text-shadow:0_1px_2px_rgb(10_39_64/0.5)]">
            {HERO_COPY}
          </p>

          <div className="mt-6">
            <BookingCta tone="dark" />
          </div>

          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-6">
            {TRUST_POINTS.map((point) => (
              <li key={point} className="flex items-center gap-2 text-sm font-medium text-white">
                <TickBadge />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
