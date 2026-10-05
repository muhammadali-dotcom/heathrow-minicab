import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ctaButtonClass } from "@/components/BookingCta";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneIcon from "@/components/PhoneIcon";
import PlaneIcon from "@/components/PlaneIcon";
import { SECTION_CONTAINER } from "@/lib/layout";
import { PRIMARY_PHONE } from "@/lib/site";

// Building blocks for the Airport Transfers pages, following the supplied design reference
// (design-reference/heathrow-airport-transfers-preview.html) in the site's own palette.

// Sections set data-tone="white" | "navy" | "pale"; blocks inside adapt with in-data-[tone=…]
// variants, so they stay plain server components.
export type Tone = "white" | "navy" | "pale";

const toneBg: Record<Tone, string> = {
  white: "bg-white",
  navy: "bg-[#0A2740]",
  pale: "bg-[#E6F6FC]",
};

const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] in-data-[tone=navy]:focus-visible:outline-white";

const heading = "text-[#0A2740] in-data-[tone=navy]:text-white";
const body = "text-[#0A2740]/80 in-data-[tone=navy]:text-white/85";

export const textLink = `inline-flex min-h-11 items-center gap-1 rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] in-data-[tone=navy]:text-white in-data-[tone=navy]:decoration-[#4FB8E0] in-data-[tone=navy]:hover:decoration-white ${focusNavy}`;

const eyebrowClass =
  "text-xs font-bold tracking-[0.15em] text-[#0A2740] uppercase in-data-[tone=navy]:text-[#4FB8E0]";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className={eyebrowClass}>{children}</p>;
}

type HeroProps = {
  crumbs: { href?: string; label: string }[];
  eyebrow: string;
  title: string;
  intro: string;
  primary: { href: string; label: string };
  image: { src: string; width: number; height: number; alt: string };
};

// About equal text and photo columns, the photo shown whole at its natural ratio; text first on
// mobile. Primary action plus a navy-outline "Call to Book".
export function TransfersHero({ crumbs, eyebrow, title, intro, primary, image }: HeroProps) {
  const isInternal = primary.href.startsWith("/") || primary.href.startsWith("#");
  const primaryClass = `${ctaButtonClass} min-h-12 px-6 text-base ${focusNavy}`;
  return (
    <section aria-labelledby="page-heading" className={SECTION_CONTAINER}>
      <div className="pt-6">
        <Breadcrumb tone="light" items={crumbs} />
      </div>
      <div className="grid items-center gap-8 pt-4 pb-10 md:grid-cols-2 md:gap-12 md:pb-12">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            id="page-heading"
            className="mt-3 max-w-[34rem] text-[clamp(1.875rem,1.2rem+2.4vw,2.75rem)] leading-[1.15] font-bold tracking-tight text-balance text-[#0A2740]"
          >
            {title}
          </h1>
          <p className="mt-4 max-w-[34rem] text-lg leading-relaxed text-[#0A2740]/80">{intro}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            {isInternal ? (
              <Link href={primary.href} className={primaryClass}>
                {primary.label}
              </Link>
            ) : (
              <a href={primary.href} className={primaryClass}>
                {primary.label}
              </a>
            )}
            <a
              href={`tel:${PRIMARY_PHONE.tel}`}
              aria-label={`Call to Book: ${PRIMARY_PHONE.display}`}
              className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md border-2 border-[#0A2740] bg-white px-6 text-base font-semibold whitespace-nowrap text-[#0A2740] hover:bg-[#E6F6FC] ${focusNavy}`}
            >
              Call to Book
              <PhoneIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          priority
          className="h-auto w-full rounded-xl"
        />
      </div>
    </section>
  );
}

export function Section({
  id,
  tone,
  eyebrow,
  title,
  intro,
  children,
}: {
  id?: string;
  tone: Tone;
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
}) {
  const headingId = id ? `${id}-heading` : undefined;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      data-tone={tone}
      className={`scroll-mt-4 py-12 md:py-16 ${toneBg[tone]}`}
    >
      <div className={SECTION_CONTAINER}>
        {eyebrow && (
          <div className="mb-3">
            <Eyebrow>{eyebrow}</Eyebrow>
          </div>
        )}
        {title && (
          <h2
            id={headingId}
            className={`text-2xl leading-snug font-bold tracking-tight ${heading}`}
          >
            {title}
          </h2>
        )}
        {intro && <p className={`mt-3 max-w-[40rem] leading-relaxed ${body}`}>{intro}</p>}
        {children}
      </div>
    </section>
  );
}

// Main content and a side note: about 60 / 40 on desktop.
export function Columns({ main, aside }: { main: ReactNode; aside: ReactNode }) {
  return (
    <div className="grid gap-8 md:grid-cols-[1.5fr_1fr] md:gap-10">
      <div>{main}</div>
      <div>{aside}</div>
    </div>
  );
}

export function SubHeading({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <h2 id={id} className={`text-2xl leading-snug font-bold tracking-tight ${heading}`}>
      {children}
    </h2>
  );
}

export function InfoAside({
  title,
  children,
  link,
}: {
  title: string;
  children: ReactNode;
  link?: { href: string; label: string };
}) {
  return (
    <aside className="border-l-[3px] border-[#1FA3D6] bg-[#E6F6FC] px-6 py-5 in-data-[tone=navy]:border-[#4FB8E0] in-data-[tone=navy]:bg-white/5 in-data-[tone=pale]:bg-white">
      <h3 className={`text-lg font-semibold ${heading}`}>{title}</h3>
      <div className={`mt-2 leading-relaxed ${body}`}>{children}</div>
      {link && (
        <Link href={link.href} className={`${textLink} mt-2`}>
          {link.label} <span aria-hidden="true">→</span>
        </Link>
      )}
    </aside>
  );
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={`mt-4 list-disc space-y-2 pl-5 leading-relaxed marker:text-[#1FA3D6] ${body}`}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function RouteCard({
  eyebrow,
  title,
  text,
  href,
  linkLabel,
}: {
  eyebrow: string;
  title: string;
  text: string;
  href: string;
  linkLabel: string;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-[#D5E8F2] bg-white p-6 in-data-[tone=navy]:border-white/10 in-data-[tone=navy]:bg-[#12385A]">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className={`mt-2 text-lg font-semibold ${heading}`}>{title}</h3>
      <p className={`mt-2 flex-1 leading-relaxed ${body}`}>{text}</p>
      <Link href={href} className={`${textLink} mt-3 self-start`}>
        {linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export type FeatureIconName = "plane" | "board" | "clock" | "seat" | "car" | "allday";

// Simple 24x24 line icons for the feature cards; the plane reuses the site's PlaneIcon.
const featurePaths: Record<Exclude<FeatureIconName, "plane">, ReactNode> = {
  board: (
    <>
      <rect x="3" y="5" width="18" height="11" rx="1.5" />
      <path d="M7 9.5h10M7 12.5h6M9 16v3M15 16v3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  seat: (
    <>
      <path d="M8 4h5a3 3 0 0 1 3 3v6H8z" />
      <path d="M6 13h12v3a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z" />
      <path d="M8 19l-1 2M16 19l1 2" />
    </>
  ),
  car: (
    <>
      <path d="M4 15.5V12l2-4.5h12l2 4.5v3.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Z" />
      <path d="M4 12h16" />
      <circle cx="8" cy="16.5" r="1.5" />
      <circle cx="16" cy="16.5" r="1.5" />
    </>
  ),
  allday: (
    <>
      <path d="M20 12a8 8 0 1 1-2.34-5.66" />
      <path d="M20 4v4h-4" />
      <path d="M12 8v4l2.5 1.5" />
    </>
  ),
};

function FeatureIcon({ name }: { name: FeatureIconName }) {
  if (name === "plane") return <PlaneIcon className="h-6 w-6" />;
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-6 w-6 fill-none stroke-current"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {featurePaths[name]}
    </svg>
  );
}

// Icon cards for the reasons to travel with us; 1 / 2 / 3 columns.
export function FeatureGrid({
  items,
}: {
  items: {
    icon: FeatureIconName;
    title: string;
    text: string;
    link?: { href: string; label: string };
  }[];
}) {
  return (
    <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <li
          key={item.title}
          className="flex flex-col rounded-xl border border-[#D5E8F2] bg-white p-6 in-data-[tone=navy]:border-white/10 in-data-[tone=navy]:bg-[#12385A]"
        >
          <span
            aria-hidden="true"
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#E6F6FC] text-[#0A2740]"
          >
            <FeatureIcon name={item.icon} />
          </span>
          <h3 className={`mt-4 text-lg font-semibold ${heading}`}>{item.title}</h3>
          <p className={`mt-2 flex-1 leading-relaxed ${body}`}>{item.text}</p>
          {item.link && (
            <Link href={item.link.href} className={`${textLink} mt-2 self-start`}>
              {item.link.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

// Booking checklist: ticked items on a white card, 1 / 2 columns.
export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-xl border border-[#D5E8F2] bg-white p-6 in-data-[tone=white]:bg-[#E6F6FC]">
      <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-relaxed text-[#0A2740]">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1FA3D6] text-[#0A2740]"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-none stroke-current"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Timeline({ steps }: { steps: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="mt-6 space-y-6">
      {steps.map((step, i) => (
        <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6FC] text-xs font-bold text-[#0A2740] in-data-[tone=navy]:bg-[#12385A] in-data-[tone=navy]:text-[#4FB8E0] in-data-[tone=pale]:bg-white"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className={`text-lg font-semibold ${heading}`}>{step.title}</h3>
            <p className={`mt-1 leading-relaxed ${body}`}>{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function PolicyBlock({
  value,
  label,
  children,
}: {
  value: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="mt-6 grid gap-4 rounded-xl bg-[#E6F6FC] p-6 sm:grid-cols-[11rem_1fr] sm:gap-6 in-data-[tone=pale]:bg-white">
      <div>
        <p className="text-3xl leading-tight font-bold whitespace-nowrap text-[#0A2740]">{value}</p>
        <p className="text-sm text-[#0A2740]/70">{label}</p>
      </div>
      <p className="leading-relaxed text-[#0A2740]/80">{children}</p>
    </div>
  );
}

export function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={textLink}>
      {children} <span aria-hidden="true">↗</span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

// Inline tel link for use inside running text.
export function PhoneLink({ tel, display }: { tel: string; display: string }) {
  return (
    <a
      href={`tel:${tel}`}
      className={`rounded-sm font-semibold underline decoration-[#1FA3D6] decoration-2 underline-offset-4 ${heading} ${focusNavy}`}
    >
      {display}
    </a>
  );
}

// One closing action per page: a call button to the bookings line. The "photo" tone reuses the
// homepage CTA's Terminal 5 photo under the same even 70% navy tint.
export function ClosingCta({
  tone,
  title,
  text,
  buttonLabel,
}: {
  tone: "white" | "pale" | "photo";
  title: string;
  text: string;
  buttonLabel: string;
}) {
  const isPhoto = tone === "photo";
  return (
    <section
      aria-labelledby="closing-heading"
      data-tone={isPhoto ? "navy" : tone}
      className={`py-12 md:py-14 ${isPhoto ? "relative overflow-hidden bg-[#0A2740]" : toneBg[tone]}`}
    >
      {isPhoto && (
        <>
          <Image
            src="/images/cta-terminal5.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div aria-hidden="true" className="absolute inset-0 bg-[#0A2740]/70" />
        </>
      )}
      <div
        className={`${SECTION_CONTAINER} relative flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between`}
      >
        <div>
          <h2 id="closing-heading" className={`text-xl font-bold md:text-[1.375rem] ${heading}`}>
            {title}
          </h2>
          <p className={`mt-1 ${body}`}>{text}</p>
        </div>
        <a
          href={`tel:${PRIMARY_PHONE.tel}`}
          aria-label={`${buttonLabel}: ${PRIMARY_PHONE.display}`}
          className={`${ctaButtonClass} min-h-12 shrink-0 px-6 text-base ${focusNavy}`}
        >
          {buttonLabel}
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </section>
  );
}
