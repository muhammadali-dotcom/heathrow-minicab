import type { ReactNode } from "react";
import { ctaButtonClass } from "@/components/BookingCta";
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

function Cross() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-current text-[#5B7A93]"
      strokeWidth={2.25}
      strokeLinecap="round"
    >
      <path d="M7 7l10 10M17 7L7 17" />
    </svg>
  );
}

const label = "text-xs font-bold tracking-[0.15em] uppercase";

// The worry on the left, how we handle it on the right; stacks on phones.
export function ProblemSolution({ worries, answers }: { worries: string[]; answers: ReactNode[] }) {
  return (
    <div className="mt-8 grid overflow-hidden rounded-xl border border-white/10 md:grid-cols-2">
      <div className="bg-white p-6 md:p-8">
        <p className={`${label} text-[#5B7A93]`}>The worry</p>
        <ul className="mt-4 space-y-4">
          {worries.map((worry) => (
            <li key={worry} className="flex gap-3 leading-relaxed text-[#0A2740]">
              <Cross />
              {worry}
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-[#12385A] p-6 md:p-8">
        <p className={`${label} text-[#4FB8E0]`}>How we handle it</p>
        <ul className="mt-4 space-y-4">
          {answers.map((answer, i) => (
            <li key={i} className="flex gap-3 leading-relaxed text-white">
              <Tick className="text-[#4FB8E0]" />
              <span>{answer}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

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
      <div className="mt-8 hidden overflow-hidden rounded-xl border border-[#D5E8F2] bg-white md:block">
        <table className="w-full border-collapse text-left">
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
                  className="border-t border-[#D5E8F2] px-5 py-4 align-top text-sm font-semibold text-[#0A2740]"
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

// A bold statement on the left, short numbered lines on the right.
export function HighlightPanel({
  kicker,
  statement,
  steps,
}: {
  kicker: string;
  statement: string;
  steps: string[];
}) {
  return (
    <div className="grid overflow-hidden rounded-xl border border-[#D5E8F2] md:grid-cols-[1fr_1.4fr]">
      <div className="flex flex-col justify-center bg-[#0A2740] p-8 md:p-10">
        <p className={`${label} text-[#4FB8E0]`}>{kicker}</p>
        <p className="mt-3 text-3xl leading-tight font-bold text-white md:text-4xl">{statement}</p>
      </div>
      <ol className="divide-y divide-[#D5E8F2] bg-white px-6 md:px-8">
        {steps.map((step, i) => (
          <li key={step} className="flex items-center gap-5 py-5">
            <span
              aria-hidden="true"
              className="font-mono text-2xl font-bold text-[#1FA3D6] tabular-nums"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-lg text-[#0A2740]">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Airport-departures-board rows: IATA codes in mono, airport name, direction.
export function RouteBoard({
  routes,
}: {
  routes: { from: string; to: string; name: string; note: string }[];
}) {
  return (
    <ul className="mt-8 overflow-hidden rounded-xl bg-[#0A2740]">
      {routes.map((route) => (
        <li
          key={route.to}
          className="grid grid-cols-[auto_1fr] items-center gap-x-6 gap-y-1 border-b border-white/10 px-6 py-5 last:border-b-0 sm:grid-cols-[10rem_1fr_auto]"
        >
          <span className="font-mono text-xl font-bold tracking-wider text-[#4FB8E0]">
            {route.from} <span aria-hidden="true">⇄</span>
            <span className="sr-only">to and from</span> {route.to}
          </span>
          <span className="text-lg font-semibold text-white">{route.name}</span>
          <span className="col-start-2 text-sm text-white/70 sm:col-start-auto">{route.note}</span>
        </li>
      ))}
    </ul>
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
    <ul className="mt-8 border-t border-[#D5E8F2]">
      {journeys.map((journey) => (
        <li
          key={journey.to}
          className="grid gap-1 border-b border-[#D5E8F2] py-5 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-8"
        >
          <span className="flex flex-wrap items-center gap-3 text-xl font-bold text-[#0A2740]">
            {journey.from}
            <span aria-hidden="true" className="text-[#1FA3D6]">
              ⇄
            </span>
            <span className="sr-only">and</span>
            {journey.to}
          </span>
          <span className="leading-relaxed text-[#0A2740]/80">{journey.note}</span>
        </li>
      ))}
    </ul>
  );
}

// Two titled tick lists side by side (e.g. outbound and return).
export function SplitChecklist({ groups }: { groups: { title: string; items: string[] }[] }) {
  return (
    <div className="mt-6 grid gap-6 md:grid-cols-2">
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
    <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
    <div className="mt-6 max-w-[34rem] rounded-xl border border-[#D5E8F2] bg-white p-5 md:p-6">
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
        className={`${ctaButtonClass} mt-5 min-h-12 px-6 text-base ${focusNavy}`}
      >
        <WhatsAppIcon className="h-5 w-5" />
        Send on WhatsApp
        <span className="sr-only">(opens in a new tab)</span>
      </a>
    </div>
  );
}

// A booking-form look (not a real form): labelled blank fields. Screen readers get the list.
export function FormPreview({ fields }: { fields: string[] }) {
  return (
    <div className="mt-6 rounded-xl border border-[#D5E8F2] bg-white p-6 md:p-8">
      <ul className="sr-only">
        {fields.map((field) => (
          <li key={field}>{field}</li>
        ))}
      </ul>
      <div aria-hidden="true" className="grid gap-x-6 gap-y-5 sm:grid-cols-2">
        {fields.map((field) => (
          <div key={field}>
            <p className="text-sm font-semibold text-[#0A2740]">{field}</p>
            <div className="mt-2 h-11 rounded-md border border-[#D5E8F2] bg-[#F5FBFE]" />
          </div>
        ))}
      </div>
    </div>
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
