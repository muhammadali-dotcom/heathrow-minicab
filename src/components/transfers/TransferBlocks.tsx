import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  callButtonLight,
  ctaButtonClass,
  whatsappButtonLight,
  whatsappIconClass,
} from "@/components/BookingCta";
import Breadcrumb from "@/components/Breadcrumb";
import CalendarIcon from "@/components/CalendarIcon";
import PhoneIcon from "@/components/PhoneIcon";
import PlaneIcon from "@/components/PlaneIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SECTION_CONTAINER } from "@/lib/layout";
import { ALT_PHONE, BOOK_ONLINE_HREF, PRIMARY_PHONE, WHATSAPP_URL } from "@/lib/site";
import { VEHICLES, type Vehicle } from "@/lib/vehicles";

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

// Call and WhatsApp outlines (see BookingCta): navy on light sections, white inside navy ones.
const onNavy =
  "in-data-[tone=navy]:border-white in-data-[tone=navy]:bg-transparent in-data-[tone=navy]:text-white in-data-[tone=navy]:hover:bg-white/10";
const callOutline = `${callButtonLight} ${onNavy} min-h-12 px-6 text-base ${focusNavy}`;
const whatsappOutline = `${whatsappButtonLight} ${onNavy} min-h-12 px-6 text-base ${focusNavy}`;

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
  title: string;
  // Optional second part of the headline, shown in blue within the same H1.
  titleAccent?: string;
  intro: string;
  primary: { href: string; label: string };
  // Label for the navy-outline phone button; defaults to "Call to Book".
  secondaryLabel?: string;
  // false hides the phone button (e.g. a page with a single contact CTA).
  showCall?: boolean;
  image: { src: string; width: number; height: number; alt: string };
};

// About equal text and photo columns, the photo shown whole at its natural ratio; text first on
// mobile. Primary action plus a navy-outline "Call to Book".
export function TransfersHero({
  crumbs,
  title,
  titleAccent,
  intro,
  primary,
  secondaryLabel = "Call to Book",
  showCall = true,
  image,
}: HeroProps) {
  const isInternal = primary.href.startsWith("/") || primary.href.startsWith("#");
  const primaryClass = `${ctaButtonClass} min-h-12 px-6 text-base ${focusNavy}`;
  return (
    <section aria-labelledby="page-heading" className={SECTION_CONTAINER}>
      <div className="pt-6">
        <Breadcrumb tone="light" items={crumbs} />
      </div>
      <div className="grid items-center gap-8 pt-4 pb-10 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-12 md:pb-12">
        <div>
          <h1
            id="page-heading"
            className="text-[1.875rem] leading-[1.15] font-bold tracking-tight text-balance text-[#0A2740] md:text-[1.75rem] lg:text-[2rem]"
          >
            {/* From lg each part is one line: navy title, then the blue accent. The accent's leading
                space keeps the words apart where the parts wrap inline (phones, tablets). */}
            <span className="lg:block lg:whitespace-nowrap">{title}</span>
            {titleAccent && (
              <span className="text-[#1786BB] lg:block lg:whitespace-nowrap"> {titleAccent}</span>
            )}
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
            {showCall && (
              <a
                href={`tel:${PRIMARY_PHONE.tel}`}
                aria-label={`${secondaryLabel}: ${PRIMARY_PHONE.display}`}
                className={`inline-flex min-h-12 items-center justify-center gap-3 rounded-md border-2 border-[#0A2740] bg-white px-6 text-base font-semibold whitespace-nowrap text-[#0A2740] hover:bg-[#E6F6FC] ${focusNavy}`}
              >
                {secondaryLabel}
                <PhoneIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 50vw, 100vw"
          preload
          loading="eager"
          fetchPriority="high"
          className="h-auto w-full rounded-xl bg-[#E6F6FC]"
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

type JourneyFactId = "terminals" | "meeting" | "price" | "journey-time";

export function JourneyFacts({
  variant = "transfer",
  links = true,
  omit = [],
}: {
  variant?: "transfer" | "pickup" | "dropoff" | "area" | "terminal";
  links?: boolean;
  // Cards to leave out where the page already covers them in another section.
  omit?: JourneyFactId[];
}) {
  const copy = {
    transfer: {
      heading: "Meeting details and journey times",
      intro:
        "Two things to plan around: where you’ll meet your driver, and how long the road to or from Heathrow may take.",
    },
    pickup: {
      heading: "Pickup facts before you land",
      intro:
        "A Heathrow pickup is planned around your flight, terminal and agreed meeting instructions. Your meeting point is confirmed when you book.",
    },
    dropoff: {
      heading: "Drop-off facts before you travel",
      intro:
        "A Heathrow drop-off is planned around your address, flight time, terminal and luggage. Your collection time is agreed when you book.",
    },
    area: {
      heading: "What affects your Heathrow journey?",
      intro:
        "Your Heathrow journey depends on your pickup address, terminal, date, time, passengers, luggage, traffic and any extra stops.",
    },
    terminal: {
      heading: "Terminal facts before you travel",
      intro:
        "Heathrow Minicab covers Terminals 2, 3, 4 and 5. Terminal-specific guidance helps you plan, but your booking confirmation is the final meeting instruction.",
    },
  }[variant];

  const allItems = [
    {
      id: "terminals" as JourneyFactId,
      icon: "plane" as const,
      title: "Terminals covered",
      text: "We cover Heathrow Terminals 2, 3, 4 and 5 for arrivals and departures.",
      link: links ? { href: "/airport-transfers/terminal-guides", label: "Terminal guides" } : undefined,
    },
    {
      id: "meeting" as JourneyFactId,
      icon: "board" as const,
      title: "Confirmed meeting details",
      text: "Your meeting point, pickup point or collection time is confirmed with your booking.",
      link: links ? { href: "/airport-transfers/heathrow-pickups", label: "Pickup guide" } : undefined,
    },
    {
      id: "price" as JourneyFactId,
      icon: "tag" as const,
      title: "Price fixed once confirmed",
      text: "The price is fixed once confirmed, but it depends on route, time, day, vehicle, stops, waiting, parking and airport charges.",
    },
    {
      id: "journey-time" as JourneyFactId,
      icon: "clock" as const,
      title: "Journey time varies",
      text: "Journey time varies with traffic, terminal, time of day, roadworks and airport processing time.",
      link: links ? { href: "/airport-transfers/heathrow-drop-offs", label: "Drop-off guide" } : undefined,
    },
  ];
  const items = allItems.filter((item) => !omit.includes(item.id));

  return (
    <div className="mt-6">
      <p data-speakable className={`max-w-[46rem] leading-relaxed ${body}`}>
        <span className={`block text-lg font-semibold ${heading}`}>{copy.heading}</span>
        <span className="mt-1 block">{copy.intro}</span>
      </p>
      <FeatureGrid compact columns={items.length > 2 ? 4 : 2} items={items} />
    </div>
  );
}

export type FeatureIconName =
  | "plane"
  | "board"
  | "clock"
  | "seat"
  | "car"
  | "allday"
  | "home"
  | "luggage"
  | "bag"
  | "chat"
  | "people"
  | "tag";

// Simple 24x24 line icons for the feature cards; the plane reuses the site's PlaneIcon.
const featurePaths: Record<Exclude<FeatureIconName, "plane">, ReactNode> = {
  tag: (
    <>
      <path d="M3 12.2V4.5A1.5 1.5 0 0 1 4.5 3h7.7a1.5 1.5 0 0 1 1.06.44l7.3 7.3a1.5 1.5 0 0 1 0 2.12l-7.7 7.7a1.5 1.5 0 0 1-2.12 0l-7.3-7.3A1.5 1.5 0 0 1 3 12.2Z" />
      <circle cx="8" cy="8" r="1.5" />
    </>
  ),
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
  chat: (
    <>
      <path d="M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-8l-4 3.5V16H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
      <path d="M8 9.5h8M8 12.5h5" />
    </>
  ),
  people: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.25" />
      <path d="M16 13.6A4.5 4.5 0 0 1 21 18" />
    </>
  ),
  luggage: (
    <>
      <rect x="5" y="7" width="14" height="12" rx="2" />
      <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
      <path d="M9 11v4M15 11v4M8 19v1.5M16 19v1.5" />
    </>
  ),
  bag: (
    <>
      <path d="M5.5 9h13l-1 10a1.5 1.5 0 0 1-1.5 1.5H8A1.5 1.5 0 0 1 6.5 19Z" />
      <path d="M9 9V7a3 3 0 0 1 6 0v2" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-6.5 8 6.5" />
      <path d="M6 9.5V19h12V9.5" />
      <path d="M10 19v-5h4v5" />
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

export function FeatureIcon({ name }: { name: FeatureIconName }) {
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
  columns = 3,
  compact = false,
}: {
  // Desktop columns; 2 or 4 suit smaller or even-numbered sets.
  columns?: 2 | 3 | 4;
  compact?: boolean;
  items: {
    icon: FeatureIconName;
    title: string;
    text: string;
    link?: { href: string; label: string };
  }[];
}) {
  return (
    <ul
      className={`${compact ? "mt-6 gap-4" : "mt-8 gap-6"} grid sm:grid-cols-2 ${columns === 4 ? "lg:grid-cols-4" : columns === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {items.map((item) => (
        <li
          key={item.title}
          className={`${compact ? "p-5" : "p-6"} flex h-full flex-col rounded-xl border border-[#D5E8F2] bg-white in-data-[tone=navy]:border-white/10 in-data-[tone=navy]:bg-[#12385A]`}
        >
          <span
            aria-hidden="true"
            className={`${compact ? "h-10 w-10" : "h-11 w-11"} flex items-center justify-center rounded-lg bg-[#E6F6FC] text-[#0A2740]`}
          >
            <FeatureIcon name={item.icon} />
          </span>
          <h3 className={`${compact ? "mt-3" : "mt-4"} text-lg font-semibold ${heading}`}>
            {item.title}
          </h3>
          <p className={`${compact ? "mt-1.5 text-sm" : "mt-2"} flex-1 leading-relaxed ${body}`}>
            {item.text}
          </p>
          {item.link && (
            <Link href={item.link.href} className={`${textLink} mt-3 self-start`}>
              {item.link.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

// Booking checklist: ticked items on a white card, 1 / 2 columns.
// Navy tick in a brand-blue circle, used by the checklist.
function TickBadge() {
  return (
    <span
      aria-hidden="true"
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1FA3D6] text-[#0A2740]"
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
  );
}

export function Checklist({ items }: { items: string[] }) {
  return (
    <div className="mt-6 rounded-xl border border-[#D5E8F2] bg-white p-6 in-data-[tone=white]:bg-[#E6F6FC]">
      <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3 leading-relaxed text-[#0A2740]">
            <span className="mt-0.5">
              <TickBadge />
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Compact vehicle cards: cutout, name and capacity rows; 1 / 2 / 4 columns.
export function VehicleCards({ ids }: { ids?: Vehicle["id"][] } = {}) {
  const vehicles = ids ? VEHICLES.filter((v) => ids.includes(v.id)) : VEHICLES;
  return (
    <ul
      className={`mt-8 grid gap-6 sm:grid-cols-2 ${vehicles.length > 2 ? "lg:grid-cols-4" : "lg:max-w-[38rem]"}`}
    >
      {vehicles.map((vehicle) => {
        const rows = [
          {
            label: "Passengers",
            value: vehicle.passengers === null ? "On request" : `x ${vehicle.passengers}`,
          },
          { label: "Large cases", value: `x ${vehicle.luggage.large}` },
          { label: "Small bags", value: `x ${vehicle.luggage.small}` },
        ];
        return (
          <li
            key={vehicle.id}
            className="flex flex-col rounded-xl border border-[#D5E8F2] bg-white p-5"
          >
            <div className="relative h-24">
              <Image
                src={vehicle.image.src}
                alt={vehicle.image.alt}
                fill
                sizes="(min-width: 1024px) 200px, (min-width: 640px) 45vw, 90vw"
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0A2740]">{vehicle.name}</h3>
            <p className="text-sm text-[#4E6B84]">{vehicle.model} or similar</p>
            <p className="mt-2 pb-3 text-sm text-[#0A2740] lg:min-h-16">
              <span className="font-semibold">Best for:</span> {vehicle.bestFor}
            </p>
            <dl className="mt-auto space-y-1.5 border-t border-[#D5E8F2] pt-3">
              {rows.map(({ label, value }) => (
                <div key={label} className="flex items-baseline justify-between gap-3">
                  <dt className="text-sm text-[#4E6B84]">{label}</dt>
                  <dd className="text-sm font-semibold whitespace-nowrap text-[#0A2740]">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        );
      })}
    </ul>
  );
}

// Numbered steps in a row from md (stacked on phones).
export function StepRow({ steps }: { steps: { title: string; text: string }[] }) {
  return (
    <ol className="mt-6 grid gap-6 md:grid-cols-3">
      {steps.map((step, i) => (
        <li key={step.title} className="flex gap-4 md:flex-col md:gap-3">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#E6F6FC] text-xs font-bold text-[#0A2740]"
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

const WHATSAPP_HELP_URL = `https://wa.me/442083434444?text=${encodeURIComponent(
  "Hi, I'm at Heathrow and can't find my driver. My terminal is: ",
)}`;

// Prominent help card for arrivals: phone line(s) and WhatsApp. Defaults suit the Pickups page.
export function HelpPanel({
  headingLevel = "h3",
  text = "Stay in a clearly signed spot in arrivals and contact us. Tell us your terminal and the nearest landmark.",
  primaryLabel = `Call ${PRIMARY_PHONE.display}`,
  showAltPhone = true,
  whatsappLabel = "WhatsApp us",
  className = "mt-10",
}: {
  headingLevel?: "h2" | "h3";
  text?: string;
  primaryLabel?: string;
  showAltPhone?: boolean;
  whatsappLabel?: string;
  className?: string;
}) {
  const Heading = headingLevel;
  return (
    <div data-tone="navy" className={`rounded-xl bg-[#0A2740] p-6 md:p-8 ${className}`}>
      <Heading className="text-xl font-bold text-white md:text-2xl">
        Can’t find your driver?
      </Heading>
      <p className="mt-2 max-w-[40rem] leading-relaxed text-white/85">{text}</p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`tel:${PRIMARY_PHONE.tel}`}
          aria-label={
            primaryLabel.includes(PRIMARY_PHONE.display)
              ? undefined
              : `${primaryLabel}: ${PRIMARY_PHONE.display}`
          }
          className={callOutline}
        >
          {primaryLabel}
          <PhoneIcon className="h-5 w-5" />
        </a>
        {showAltPhone && (
          <a href={`tel:${ALT_PHONE.tel}`} className={callOutline}>
            Call {ALT_PHONE.display}
            <PhoneIcon className="h-5 w-5" />
          </a>
        )}
        <a
          href={WHATSAPP_HELP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={whatsappOutline}
        >
          <WhatsAppIcon className={`h-5 w-5 ${whatsappIconClass}`} />
          {whatsappLabel}
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

// Icon steps joined by a dashed route line: a row from md, stacked on phones.
export function RouteSteps({
  steps,
}: {
  steps: { icon: FeatureIconName; title: string; text: string }[];
}) {
  return (
    <ol className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6">
      <span
        aria-hidden="true"
        className="absolute top-7 bottom-7 left-7 border-l-2 border-dashed border-[#4FB8E0]/40 in-data-[tone=pale]:border-[#1FA3D6]/40 md:hidden"
      />
      <span
        aria-hidden="true"
        className="absolute top-7 right-[16.67%] left-[16.67%] hidden border-t-2 border-dashed border-[#4FB8E0]/40 in-data-[tone=pale]:border-[#1FA3D6]/40 md:block"
      />
      {steps.map((step, i) => (
        <li
          key={step.title}
          className="relative flex gap-5 md:flex-col md:items-center md:text-center"
        >
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#E6F6FC] text-[#0A2740] in-data-[tone=navy]:bg-[#12385A] in-data-[tone=navy]:text-[#4FB8E0] in-data-[tone=pale]:bg-white"
          >
            <FeatureIcon name={step.icon} />
          </span>
          <div className="md:mt-4">
            <p className={eyebrowClass}>Step {i + 1}</p>
            <h3 className={`mt-1 text-lg font-semibold ${heading}`}>{step.title}</h3>
            <p className={`mt-1 leading-relaxed ${body} md:mx-auto md:max-w-[18rem]`}>
              {step.text}
            </p>
          </div>
        </li>
      ))}
    </ol>
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

// Closing actions: Book Online (filled), a call button to the bookings line (outline) and an
// optional WhatsApp button (secondary outline). The "photo" tone reuses the
// homepage CTA's Terminal 5 photo under the same even 70% navy tint.
export function ClosingCta({
  tone,
  title,
  text,
  buttonLabel,
  whatsapp = false,
}: {
  tone: "white" | "pale" | "photo";
  title: string;
  text: string;
  buttonLabel: string;
  // Adds a "WhatsApp Us" button beside the call button; a string pre-fills the message.
  whatsapp?: boolean | string;
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
        // Three buttons (with WhatsApp) need the full row, so they stay stacked until lg.
        className={`${SECTION_CONTAINER} relative flex flex-col gap-5 ${
          whatsapp
            ? "lg:flex-row lg:items-center lg:justify-between"
            : "sm:flex-row sm:items-center sm:justify-between"
        }`}
      >
        <div>
          <h2 id="closing-heading" className={`text-xl font-bold md:text-[1.375rem] ${heading}`}>
            {title}
          </h2>
          <p className={`mt-1 ${body}`}>{text}</p>
        </div>
        <div className="flex shrink-0 flex-wrap gap-3">
          <a
            href={BOOK_ONLINE_HREF}
            className={`${ctaButtonClass} min-h-12 shrink-0 px-6 text-base ${focusNavy}`}
          >
            Book Online
            <CalendarIcon className="h-5 w-5" />
          </a>
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            aria-label={`${buttonLabel}: ${PRIMARY_PHONE.display}`}
            className={`${callOutline} shrink-0`}
          >
            {buttonLabel}
            <PhoneIcon className="h-5 w-5" />
          </a>
          {whatsapp && (
            <a
              href={
                typeof whatsapp === "string"
                  ? `https://wa.me/${PRIMARY_PHONE.tel.replace("+", "")}?text=${encodeURIComponent(whatsapp)}`
                  : WHATSAPP_URL
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`${whatsappOutline} shrink-0`}
            >
              <WhatsAppIcon className={`h-5 w-5 ${whatsappIconClass}`} />
              WhatsApp Us
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
