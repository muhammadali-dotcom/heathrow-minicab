import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import FlapTile from "@/components/FlapTile";
import { SECTION_CONTAINER } from "@/lib/layout";

// Photos are cropped from the supplied terminal images (their yellow labels removed).
// T5 shares the footer CTA band's photo, so only the Terminal 5 page uses it.
export const BANNER_IMAGES = {
  t2: "/images/banners/t2.jpg",
  t3: "/images/banners/t3.jpg",
  t4: "/images/banners/t4.jpg",
  t5: "/images/cta-terminal5.jpg",
  hero: "/images/heathrow-hero-wide.png",
  arrival: "/images/airport-arrival.png",
  family: "/images/family-transfer.png",
  early: "/images/early-flight.png",
} as const;

type PageBannerProps = {
  title: string;
  crumb?: string; // short page name for the breadcrumb (defaults to the title)
  parents?: { href: string; label: string }[]; // optional middle breadcrumb levels
  eyebrow?: string;
  intro?: string;
  image: keyof typeof BANNER_IMAGES;
  links?: { href: string; label: string }[];
  badge?: string; // large decorative flap tile on the right from md, e.g. "T5"
};

const focusWhite =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Shared header for inner pages: a photo under an even 70% navy tint (no gradient),
// breadcrumb, the page's H1 and optional in-page links.
export default function PageBanner({
  title,
  crumb,
  parents,
  eyebrow,
  intro,
  image,
  links,
  badge,
}: PageBannerProps) {
  return (
    <section aria-labelledby="page-heading" className="relative overflow-hidden bg-[#0A2740]">
      <Image
        src={BANNER_IMAGES[image]}
        alt=""
        fill
        sizes="100vw"
        loading="eager"
        fetchPriority="high"
        className="object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-[#0A2740]/70" />

      <div className={`relative ${SECTION_CONTAINER} py-14 md:py-20`}>
        <Breadcrumb
          tone="dark"
          items={[...(parents ?? []), { label: crumb ?? title }]}
        />

        {eyebrow && (
          <p className="mt-2 text-sm font-semibold tracking-[0.15em] text-[#4FB8E0] uppercase">
            {eyebrow}
          </p>
        )}
        <h1
          id="page-heading"
          className="mt-3 max-w-[22ch] text-3xl leading-tight font-bold text-balance text-white md:text-5xl"
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-[35rem] text-lg leading-relaxed text-white/85">{intro}</p>
        )}

        {links && links.length > 0 && (
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
        )}

        {badge && (
          <div
            aria-hidden="true"
            className="absolute top-1/2 right-6 hidden -translate-y-1/2 sm:right-8 md:block"
          >
            <FlapTile size="giant">{badge}</FlapTile>
          </div>
        )}
      </div>
    </section>
  );
}
