import Link from "next/link";
import type { ReactNode } from "react";
import { whatsappButtonLight, whatsappIconClass } from "@/components/BookingCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PRIMARY_PHONE } from "@/lib/site";

// Section designs used only on the Services pages, so they read differently from the
// Airport Transfers guides. Same palette; no gradients.

const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] in-data-[tone=navy]:focus-visible:outline-white";

function Tick({ className = "text-[#1FA3D6]" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`mt-0.5 h-5 w-5 shrink-0 fill-none stroke-current ${className}`}
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

// Navy text link for use inside white cards (any band colour).
const cardLink =
  "inline-flex min-h-11 items-center gap-1 rounded-sm font-semibold text-[#0A2740] underline decoration-[#1FA3D6] decoration-2 underline-offset-4 hover:decoration-[#0A2740] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

// Accessible comparison table from md up; on phones each column becomes a card so nothing is
// hidden off-screen. CSS hides the inactive layout, so assistive tech meets only one.
export function ComparisonTable({
  caption,
  columns,
  rows,
  highlight,
  highlightLabel,
}: {
  caption: string;
  columns: string[]; // data columns (the first column holds the row labels)
  rows: { label: string; values: ReactNode[] }[];
  highlight?: number; // index into columns
  highlightLabel?: string;
}) {
  return (
    <>
      <div className="mt-8 hidden overflow-x-auto rounded-xl border border-[#D5E8F2] bg-white md:block">
        <table className="min-w-[44rem] w-full border-collapse text-left">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-[#0A2740] text-white">
              <td className="w-[11rem] px-5 py-4" />
              {columns.map((column, i) => (
                <th
                  key={column}
                  scope="col"
                  className={`px-5 py-4 align-bottom text-base font-semibold ${
                    i === highlight ? "bg-[#1FA3D6] text-[#0A2740]" : ""
                  }`}
                >
                  {i === highlight && highlightLabel && (
                    <span className="mb-1 block text-xs font-bold tracking-[0.15em] uppercase">
                      {highlightLabel}
                    </span>
                  )}
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, r) => (
              <tr key={row.label} className={r % 2 ? "bg-[#F5FBFE]" : "bg-white"}>
                <th
                  scope="row"
                  className="border-t border-[#D5E8F2] px-5 py-4 align-top text-sm font-semibold whitespace-nowrap text-[#0A2740]"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td
                    key={i}
                    className={`border-t border-[#D5E8F2] px-5 py-4 align-top leading-relaxed text-[#0A2740]/85 ${
                      i === highlight ? "bg-[#E6F6FC] font-medium text-[#0A2740]" : ""
                    }`}
                  >
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul aria-label={caption} className="mt-8 space-y-4 md:hidden">
        {columns.map((column, i) => {
          const isHighlight = i === highlight;
          return (
            <li
              key={column}
              className={`overflow-hidden rounded-xl border bg-white ${
                isHighlight ? "border-[#1FA3D6]" : "border-[#D5E8F2]"
              }`}
            >
              <h3
                className={`px-5 py-3 font-semibold ${
                  isHighlight ? "bg-[#1FA3D6] text-[#0A2740]" : "bg-[#0A2740] text-white"
                }`}
              >
                {isHighlight && highlightLabel && (
                  <span className="block text-xs font-bold tracking-[0.15em] uppercase">
                    {highlightLabel}
                  </span>
                )}
                {column}
              </h3>
              <dl className="divide-y divide-[#D5E8F2] px-5">
                {rows.map((row) => (
                  <div key={row.label} className="flex justify-between gap-4 py-3">
                    <dt className="text-sm font-semibold text-[#0A2740]">{row.label}</dt>
                    <dd className="text-right text-[#0A2740]/85">{row.values[i]}</dd>
                  </div>
                ))}
              </dl>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Region headings with destination chips.
export function RegionChips({ regions }: { regions: { name: string; places: string[] }[] }) {
  return (
    <div className="mt-8 grid gap-6 md:grid-cols-2">
      {regions.map((region) => (
        <div key={region.name} className="rounded-xl border border-[#D5E8F2] bg-white p-6">
          <h3 className="text-lg font-semibold text-[#0A2740]">{region.name}</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {region.places.map((place) => (
              <li
                key={place}
                className="rounded-full bg-[#E6F6FC] px-4 py-2 font-medium text-[#0A2740]"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// "From ⇄ To" rows with a short note.
export function JourneyList({
  journeys,
}: {
  journeys: { from: string; to: string; note: string }[];
}) {
  return (
    <ul className="mt-8 border-t border-[#D5E8F2] in-data-[tone=navy]:border-white/15">
      {journeys.map((journey) => (
        <li
          key={journey.to}
          className="grid gap-1 border-b border-[#D5E8F2] py-5 in-data-[tone=navy]:border-white/15 md:grid-cols-[28rem_1fr] md:items-center md:gap-8"
        >
          <span className="flex flex-wrap items-center gap-3 text-xl font-bold text-[#0A2740] in-data-[tone=navy]:text-white md:flex-nowrap md:whitespace-nowrap">
            {journey.from}
            <span aria-hidden="true" className="text-[#1FA3D6] in-data-[tone=navy]:text-[#4FB8E0]">
              ⇄
            </span>
            <span className="sr-only">and</span>
            {journey.to}
          </span>
          <span className="leading-relaxed text-[#0A2740]/80 in-data-[tone=navy]:text-white/80">
            {journey.note}
          </span>
        </li>
      ))}
    </ul>
  );
}

// Two titled tick lists side by side (e.g. outbound and return).
export function SplitChecklist({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div
      className={`mt-6 grid gap-6 md:grid-cols-2 ${groups.length === 3 ? "lg:grid-cols-3" : ""}`}
    >
      {groups.map((group) => (
        <div key={group.title} className="rounded-xl border border-[#D5E8F2] bg-white p-6">
          <h3 className="text-lg font-semibold text-[#0A2740]">{group.title}</h3>
          <ul className="mt-4 space-y-3">
            {group.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-[#0A2740]">
                <Tick />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

// Numbered tiles in a row.
export function NumberedStrip({ items }: { items: string[] }) {
  return (
    <ol
      className={`mt-6 grid gap-4 ${items.length === 3 ? "md:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-4"}`}
    >
      {items.map((item, i) => (
        <li key={item} className="rounded-xl border border-[#D5E8F2] bg-white p-5">
          <span
            aria-hidden="true"
            className="block font-mono text-3xl font-bold text-[#1FA3D6] tabular-nums"
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="mt-2 block leading-snug font-semibold text-[#0A2740]">{item}</span>
        </li>
      ))}
    </ol>
  );
}

// A WhatsApp-style message listing the details to send, with a button that pre-fills it.
export function MessagePreview({ intro, lines }: { intro: string; lines: string[] }) {
  const text = `${intro}\n${lines.map((line) => `${line}: `).join("\n")}`;
  const href = `https://wa.me/${PRIMARY_PHONE.tel.replace("+", "")}?text=${encodeURIComponent(text)}`;
  return (
    <div className="mx-auto mt-6 w-full max-w-[36rem] rounded-xl border border-[#D5E8F2] bg-white p-5 md:p-6">
      <p className="flex items-center gap-2 text-sm font-semibold text-[#5B7A93]">
        <WhatsAppIcon className="h-4 w-4" />
        Your message to {PRIMARY_PHONE.display}
      </p>
      <div className="mt-4 rounded-2xl rounded-tl-sm bg-[#E6F6FC] p-5 text-[#0A2740]">
        <p>{intro}</p>
        <ul className="mt-3 space-y-1.5">
          {lines.map((line) => (
            <li key={line}>
              <span className="font-semibold">{line}:</span>{" "}
              <span aria-hidden="true" className="text-[#5B7A93]">
                …
              </span>
            </li>
          ))}
        </ul>
      </div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${whatsappButtonLight} mt-5 min-h-12 px-6 text-base ${focusNavy}`}
      >
        <WhatsAppIcon className={`h-5 w-5 ${whatsappIconClass}`} />
        Send on WhatsApp
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
}

// Labelled cards with a short explanation and an optional link.
export function DetailCards({
  items,
}: {
  items: { label: string; hint: string; link?: { href: string; label: string } }[];
}) {
  // 5 cards: 3 on the first row and 2 wider ones on the second, so both rows fill the width.
  const cols =
    items.length === 4
      ? "lg:grid-cols-4"
      : items.length === 5
        ? "lg:grid-cols-6"
        : "lg:grid-cols-3";
  const span = (i: number) =>
    items.length === 5 ? (i < 3 ? "lg:col-span-2" : "lg:col-span-3") : "";
  return (
    <ul className={`mt-6 grid gap-4 sm:grid-cols-2 ${cols}`}>
      {items.map((item, i) => (
        <li
          key={item.label}
          className={`flex flex-col rounded-xl border border-[#D5E8F2] bg-white p-5 ${span(i)}`}
        >
          <p className="font-semibold text-[#0A2740]">{item.label}</p>
          <p className="mt-1 flex-1 text-sm leading-relaxed text-[#5B7A93]">{item.hint}</p>
          {item.link && (
            <Link href={item.link.href} className={`${cardLink} mt-2 self-start`}>
              {item.link.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

// Two journeys side by side, each headed "From → To".
export function PathCards({
  items,
}: {
  items: {
    title?: string; // plain heading instead of "from → to"
    from?: string;
    to?: string;
    text: string;
    link?: { href: string; label: string };
  }[];
}) {
  return (
    <ul className="mt-8 grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <li
          key={item.title ?? `${item.from}-${item.to}`}
          className="flex flex-col rounded-xl border border-[#D5E8F2] bg-white p-6 md:p-8"
        >
          {item.title ? (
            <h3 className="text-xl font-bold text-[#0A2740]">{item.title}</h3>
          ) : (
            <h3 className="flex flex-wrap items-center gap-3 text-xl font-bold text-[#0A2740]">
              {item.from}
              <span aria-hidden="true" className="text-[#1FA3D6]">
                →
              </span>
              <span className="sr-only">to</span>
              {item.to}
            </h3>
          )}
          <p className="mt-3 flex-1 leading-relaxed text-[#0A2740]/80">{item.text}</p>
          {item.link && (
            <Link href={item.link.href} className={`${cardLink} mt-3 self-start`}>
              {item.link.label} <span aria-hidden="true">→</span>
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}

// Plain text columns under a blue top rule.
export function RuleColumns({
  columns,
}: {
  columns: { title: string; text: string; link?: ReactNode }[];
}) {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-3">
      {columns.map((column) => (
        <div key={column.title} className="border-t-4 border-[#1FA3D6] pt-5">
          <h3 className="text-lg font-semibold text-[#0A2740]">{column.title}</h3>
          <p className="mt-2 leading-relaxed text-[#0A2740]/80">{column.text}</p>
          {column.link}
        </div>
      ))}
    </div>
  );
}

// One checklist panel with labelled groups side by side (stacked on phones).
export function GroupedChecklist({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="mt-6 grid gap-6 rounded-xl border border-[#D5E8F2] bg-white p-6 md:grid-cols-[1fr_2fr] md:gap-0 md:p-8">
      {groups.map((group, g) => (
        <div
          key={group.title}
          className={
            g > 0
              ? "border-t border-[#D5E8F2] pt-6 md:border-t-0 md:border-l md:pt-0 md:pl-8"
              : "md:pr-8"
          }
        >
          <h3 className="text-xs font-bold tracking-[0.15em] text-[#5B7A93] uppercase">
            {group.title}
          </h3>
          <ul className={`mt-4 grid gap-3 ${group.items.length > 3 ? "sm:grid-cols-2" : ""}`}>
            {group.items.map((item) => (
              <li key={item} className="flex gap-3 leading-relaxed text-[#0A2740]">
                <Tick />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
