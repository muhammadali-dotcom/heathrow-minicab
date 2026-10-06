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
        {/* Desktop only: an even 55% navy tint (no gradient) so white text reads over the sky. */}
        <div aria-hidden="true" className="absolute inset-0 hidden bg-[#0A2740]/55 xl:block" />
      </div>

      {/* Same container as the header, so the text lines up with the logo. From xl the text sits
          directly on the tinted photo, with a soft glow on the headline. */}
      <div className={`relative ${SECTION_CONTAINER} py-8 sm:py-10 xl:pt-14 xl:pb-12`}>
        <div className="max-w-2xl xl:max-w-[40rem] 2xl:max-w-[44rem]">
          {/* Small departures-board detail; decorative only. */}
          <div
            aria-hidden="true"
            className="mb-4 flex items-center gap-2 text-[#4FB8E0]"
          >
            <span className="rounded-md bg-[#1FA3D6] px-2 py-0.5 font-mono text-xs font-bold tracking-widest text-[#0A2740]">
              LHR
            </span>
            <PlaneIcon className="h-4 w-4 rotate-90" />
          </div>

          <h1
            id="hero-heading"
            className="text-3xl leading-tight font-bold text-balance text-white sm:text-4xl xl:text-[2.25rem] xl:text-wrap xl:[text-shadow:0_0_18px_rgb(79_184_224/0.25),0_1px_2px_rgb(10_39_64/0.4)] 2xl:text-[2.5rem]"
          >
            {/* Three lines from xl (the text area fits the ~17.25em middle line); natural wrapping
                below. The nowrap keeps the dash on the end of its line rather than starting the next. */}
            Heathrow airport transfers,{" "}
            <span className="xl:block">
              from your doorstep to <span className="whitespace-nowrap">departures,</span>
            </span>
            <span className="xl:block">and arrivals to home.</span>
          </h1>

          <p className="mt-3 text-base leading-relaxed text-white sm:text-lg xl:[text-shadow:0_1px_2px_rgb(10_39_64/0.5)]">
            {HERO_COPY}
          </p>

          <div className="mt-5">
            <BookingCta tone="dark" />
          </div>
        </div>
      </div>
    </section>
  );
}
