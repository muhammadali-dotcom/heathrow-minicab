import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { ctaButtonClass } from "@/components/BookingCta";
import Breadcrumb from "@/components/Breadcrumb";
import PhoneIcon from "@/components/PhoneIcon";
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
  // Two lines from md (each string is a line); natural wrapping below.
  title: [string, string];
  intro: string;
  cta: { href: string; label: string };
  image: { src: string; width: number; height: number; alt: string; position: string };
};

// Text on the left (~55%), one photograph on the right (~45%); text first on mobile.
export function TransfersHero({ crumbs, eyebrow, title, intro, cta, image }: HeroProps) {
  const isInternal = cta.href.startsWith("/") || cta.href.startsWith("#");
  const ctaClass = `${ctaButtonClass} mt-2 min-h-12 px-6 text-base ${focusNavy}`;
  return (
    <section aria-labelledby="page-heading" className={SECTION_CONTAINER}>
      <div className="pt-6">
        <Breadcrumb tone="light" items={crumbs} />
      </div>
      <div className="grid items-center gap-8 pt-4 pb-10 md:grid-cols-[1.3fr_1fr] md:gap-10 md:pb-12">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1
            id="page-heading"
            className="mt-3 text-3xl leading-tight font-bold tracking-tight text-[#0A2740] md:text-[2.375rem] md:leading-[1.16]"
          >
            <span className="md:block">{title[0]}</span>{" "}
            <span className="md:block">{title[1]}</span>
          </h1>
          <p className="mt-4 mb-6 max-w-[34rem] text-lg leading-relaxed text-[#0A2740]/80">
            {intro}
          </p>
          {isInternal ? (
            <Link href={cta.href} className={ctaClass}>
              {cta.label}
            </Link>
          ) : (
            <a href={cta.href} className={ctaClass}>
              {cta.label}
            </a>
          )}
        </div>
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          sizes="(min-width: 1024px) 420px, (min-width: 768px) 40vw, 100vw"
          loading="eager"
          fetchPriority="high"
          style={{ objectPosition: image.position }}
          className="aspect-[16/10] w-full rounded-xl object-cover md:aspect-[4/3]"
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

export function Timeline({ steps }: { steps: { title: string; text: ReactNode }[] }) {
  return (
    <ol className="mt-6 space-y-6">
      {steps.map((step, i) => (
        <li key={step.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
          <span
            aria-hidden="true"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E6F6FC] text-xs font-bold text-[#0A2740] in-data-[tone=navy]:bg-[#12385A] in-data-[tone=navy]:text-[#4FB8E0]"
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

export function FaqList({ items }: { items: { question: string; answer: ReactNode }[] }) {
  return (
    <div className="mt-4">
      {items.map((item) => (
        <details
          key={item.question}
          className="group border-b border-[#D5E8F2] in-data-[tone=navy]:border-white/15"
        >
          <summary
            className={`flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 rounded-sm py-3 font-semibold [&::-webkit-details-marker]:hidden ${heading} ${focusNavy}`}
          >
            {item.question}
            <span aria-hidden="true" className="text-xl text-[#1FA3D6] group-open:rotate-45">
              +
            </span>
          </summary>
          <p className={`pb-4 leading-relaxed ${body}`}>{item.answer}</p>
        </details>
      ))}
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
