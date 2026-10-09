"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import ArrowRightIcon from "@/components/ArrowRightIcon";
import { ctaButtonClass } from "@/components/BookingCta";
import { FeatureIcon } from "@/components/transfers/TransferBlocks";
import { VEHICLES, type Vehicle } from "@/lib/vehicles";

// Vehicle tabs on a navy panel beside a "Compare the space" table, with a two-vehicle band
// underneath. The table is fully rendered without JavaScript; picking a tab only swaps the
// panel and moves the row highlight.

const HEADLINES: Record<Vehicle["id"], string> = {
  saloon: "Simple, comfortable, ready to go.",
  estate: "Space for the extra bags.",
  mpv: "Room for your whole group.",
  executive: "A more comfortable ride.",
};

const focusWhite =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const COLUMNS = [
  { icon: "people", label: "People", value: (v: Vehicle) => v.passengers ?? "On request" },
  { icon: "luggage", label: "Large cases", value: (v: Vehicle) => v.luggage.large },
  { icon: "bag", label: "Small bags", value: (v: Vehicle) => v.luggage.small },
] as const;

export default function VehiclePicker({
  goodFor,
  defaultId = "mpv",
}: {
  // Short line under each vehicle name in the table, worded for the page's audience.
  goodFor: Record<Vehicle["id"], string>;
  defaultId?: Vehicle["id"];
}) {
  const [selectedId, setSelectedId] = useState<Vehicle["id"]>(defaultId);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const selected = VEHICLES.find((v) => v.id === selectedId) ?? VEHICLES[0];

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = VEHICLES.length - 1;
    const next =
      event.key === "ArrowRight"
        ? index === last
          ? 0
          : index + 1
        : event.key === "ArrowLeft"
          ? index === 0
            ? last
            : index - 1
          : event.key === "Home"
            ? 0
            : event.key === "End"
              ? last
              : null;
    if (next === null) return;
    event.preventDefault();
    setSelectedId(VEHICLES[next].id);
    tabs.current[next]?.focus();
  }

  return (
    <div className="mt-10 overflow-hidden rounded-2xl border border-[#D5E8F2] bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Picker */}
        <div className="bg-[#0A2740] p-5 sm:p-8">
          <div
            role="tablist"
            aria-label="Vehicle types"
            className="grid grid-cols-4 overflow-hidden rounded-lg border border-white/40"
          >
            {VEHICLES.map((v, i) => {
              const isSelected = v.id === selectedId;
              return (
                <button
                  key={v.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`vehicle-tab-${v.id}`}
                  aria-selected={isSelected}
                  aria-controls="vehicle-tabpanel"
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelectedId(v.id)}
                  onKeyDown={(event) => onTabKey(event, i)}
                  className={`min-h-11 px-1 text-[13px] font-semibold sm:text-base ${focusWhite} focus-visible:-outline-offset-4 ${
                    i > 0 ? "border-l border-white/40" : ""
                  } ${isSelected ? "bg-[#1FA3D6] text-[#0A2740]" : "text-white hover:bg-white/10"}`}
                >
                  {v.name}
                </button>
              );
            })}
          </div>

          <div
            role="tabpanel"
            id="vehicle-tabpanel"
            aria-labelledby={`vehicle-tab-${selected.id}`}
            tabIndex={0}
            className={`mt-6 rounded-sm ${focusWhite}`}
          >
            <h3 className="text-2xl leading-tight font-bold text-white sm:text-3xl">
              {HEADLINES[selected.id]}
            </h3>
            <p className="mt-1 text-white/80">{selected.model} or similar.</p>

            <div className="relative mt-4 aspect-[16/9]">
              {/* Decorative route from a start point to a pin, behind the car. */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 225"
                className="absolute inset-0 hidden h-full w-full md:block"
                fill="none"
              >
                <path
                  d="M24 120 C 30 70, 70 50, 120 52 M300 92 C 340 92, 370 80, 372 52"
                  stroke="#1FA3D6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="24" cy="124" r="7" stroke="#1FA3D6" strokeWidth="3" />
                <path
                  d="M372 18a12 12 0 0 1 12 12c0 9-12 22-12 22s-12-13-12-22a12 12 0 0 1 12-12Z"
                  fill="#1FA3D6"
                />
                <circle cx="372" cy="30" r="4.5" fill="#0A2740" />
              </svg>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-[24%] rounded-[50%] bg-[#E6F6FC]"
              />
              <div className="absolute inset-x-[10%] top-[8%] bottom-[9%]">
                <Image
                  key={selected.id}
                  src={selected.image.src}
                  alt={selected.image.alt}
                  fill
                  sizes="(min-width: 1024px) 400px, 90vw"
                  className="object-contain object-bottom"
                />
              </div>
            </div>

            <dl className="mt-6 grid grid-cols-3 divide-x divide-white/25">
              {COLUMNS.map((col, i) => (
                // Number above label visually; icon sits to the left from sm.
                <div
                  key={col.label}
                  className={`relative flex flex-col-reverse ${i === 0 ? "pr-2 sm:pl-9" : "px-2 sm:pl-13"}`}
                >
                  <dt className="mt-1 text-sm text-white/80">
                    <span
                      aria-hidden="true"
                      className={`absolute top-1/2 hidden -translate-y-1/2 text-white sm:block ${i === 0 ? "left-0" : "left-4"}`}
                    >
                      <FeatureIcon name={col.icon} />
                    </span>
                    {col.label.toLowerCase()}
                  </dt>
                  <dd className="text-2xl leading-none font-bold text-white">
                    {col.value(selected)}
                  </dd>
                </div>
              ))}
            </dl>

            {selected.id === "mpv" && (
              <p className="mt-5 inline-flex rounded-full bg-[#1FA3D6] px-4 py-1.5 text-sm font-bold tracking-wide text-[#0A2740] uppercase">
                MPV · Most room
              </p>
            )}
          </div>
        </div>

        {/* Compare */}
        <div className="p-5 sm:p-8">
          <table aria-labelledby="compare-space-heading" className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[#D5E8F2]">
                <td className="pb-4 align-bottom">
                  <h3
                    id="compare-space-heading"
                    className="text-xl leading-tight font-bold text-[#0A2740] sm:text-2xl"
                  >
                    Compare the space
                  </h3>
                </td>
                {COLUMNS.map((col) => (
                  <th
                    key={col.label}
                    scope="col"
                    className="px-1 pb-4 text-center align-bottom text-xs font-normal text-[#4E6B84] sm:text-sm"
                  >
                    <span className="flex flex-col items-center gap-1 text-[#0A2740]">
                      <FeatureIcon name={col.icon} />
                      <span className="text-[#4E6B84]">{col.label}</span>
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {VEHICLES.map((v) => {
                const isSelected = v.id === selectedId;
                return (
                  <tr
                    key={v.id}
                    className={`border-b border-[#D5E8F2] ${isSelected ? "bg-[#E6F6FC]" : ""}`}
                  >
                    <th
                      scope="row"
                      className={`py-4 pr-2 pl-3 align-middle font-normal ${
                        isSelected ? "shadow-[inset_3px_0_0_#1FA3D6]" : ""
                      }`}
                    >
                      <span className="block text-lg font-bold text-[#0A2740]">{v.name}</span>
                      <span className="block text-sm text-[#4E6B84]">{goodFor[v.id]}</span>
                    </th>
                    {COLUMNS.map((col) => (
                      <td
                        key={col.label}
                        className="px-1 py-4 text-center align-middle text-lg font-bold text-[#0A2740]"
                      >
                        {col.value(v)}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-4 flex items-start gap-2 text-sm text-[#4E6B84]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-current"
              strokeWidth={2}
              strokeLinecap="round"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 11v5M12 8h.01" />
            </svg>
            Capacities are a guide. Passenger and luggage maximums may not fit together.
          </p>
        </div>
      </div>

      {/* Larger groups */}
      <div className="flex flex-col gap-4 border-t border-[#D5E8F2] bg-[#E6F6FC] p-5 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
        <div className="flex items-center gap-6">
          <span
            aria-hidden="true"
            className="hidden items-center gap-2 border-r border-[#0A2740]/20 pr-6 text-[#0A2740] sm:flex [&_svg]:h-9 [&_svg]:w-9"
          >
            <FeatureIcon name="car" />
            <FeatureIcon name="car" />
          </span>
          <div>
            <p className="text-lg font-bold text-[#0A2740]">More than 6 travelling?</p>
            <p className="text-[#0A2740]/80">Ask us about two vehicles for your group.</p>
          </div>
        </div>
        <Link
          href="/contact"
          className={`${ctaButtonClass} min-h-12 self-start px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] sm:self-auto`}
        >
          Help me choose
          <ArrowRightIcon className="h-5 w-5" />
        </Link>
      </div>
    </div>
  );
}
