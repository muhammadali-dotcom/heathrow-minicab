"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import PhoneIcon from "@/components/PhoneIcon";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { PRIMARY_PHONE } from "@/lib/site";
import { TERMINALS, type Terminal } from "@/lib/terminals";

// One data source, two layouts: tabs from md, an accordion below. CSS hides the inactive
// layout, so assistive tech only ever meets one of them.

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const linkClass = `inline-flex min-h-11 items-center gap-2 rounded-sm font-semibold text-white underline decoration-[#4FB8E0] decoration-2 underline-offset-4 hover:decoration-white ${focusRing}`;

function TerminalPanel({
  terminal,
  showHeading = true,
}: {
  terminal: Terminal;
  showHeading?: boolean;
}) {
  return (
    <div className="rounded-xl bg-[#12385A] p-6 md:p-8">
      {showHeading && <h3 className="mb-2 text-2xl font-bold text-white">{terminal.name}</h3>}
      <p className="max-w-[44rem] text-sm leading-relaxed text-white/80">
        <span className="font-semibold text-[#4FB8E0]">Good to know: </span>
        {terminal.goodToKnow}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 md:gap-8">
        <div>
          <h4 className="text-lg font-semibold text-white">Arriving here?</h4>
          <p className="mt-1 leading-relaxed text-white/85">
            Follow the meeting instructions in your booking confirmation. Contact us if you need
            help finding your driver.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Flying from here?</h4>
          <p className="mt-1 leading-relaxed text-white/85">
            We drop you at {terminal.name} departures. Check your airline confirms {terminal.name}{" "}
            before you travel, and tell us if it changes.
          </p>
        </div>
      </div>

      <div className="mt-6 border-t border-white/15 pt-6">
        <div>
          <h4 className="text-sm font-semibold tracking-[0.15em] text-[#4FB8E0] uppercase">
            Need assistance?
          </h4>
          <div className="mt-1 flex flex-wrap gap-x-6">
            <a href={`tel:${PRIMARY_PHONE.tel}`} className={linkClass}>
              <PhoneIcon className="h-4 w-4" />
              Call {PRIMARY_PHONE.display}
            </a>
            <a
              href={`https://wa.me/442083434444?text=${encodeURIComponent(
                `Hi, I have a question about Heathrow ${terminal.name}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              <WhatsAppIcon className="h-4 w-4" />
              Ask us about {terminal.name}
              <span className="sr-only">on WhatsApp (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TerminalSelector() {
  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState<number | null>(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  // Links such as /airport-transfers/terminal-guides#terminal-4 open that terminal.
  useEffect(() => {
    function selectFromHash() {
      const match = window.location.hash.match(/^#terminal-([2-5])$/);
      const index = match ? TERMINALS.findIndex((t) => t.number === match[1]) : -1;
      if (index < 0) return;
      setSelected(index);
      setOpen(index);
    }
    selectFromHash();
    window.addEventListener("hashchange", selectFromHash);
    return () => window.removeEventListener("hashchange", selectFromHash);
  }, []);

  function onTabKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = TERMINALS.length - 1;
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
    setSelected(next);
    tabs.current[next]?.focus();
  }

  const current = TERMINALS[selected];

  return (
    <div className="mt-8">
      {/* Scroll targets for #terminal-N links; all sit at the top of the selector. */}
      {TERMINALS.map((terminal) => (
        <span
          key={terminal.number}
          id={`terminal-${terminal.number}`}
          className="block scroll-mt-4"
        />
      ))}
      {/* Tabs (md and up) */}
      <div className="hidden md:block">
        <div role="tablist" aria-label="Heathrow terminals" className="grid grid-cols-4 gap-3">
          {TERMINALS.map((terminal, i) => {
            const isSelected = i === selected;
            return (
              <button
                key={terminal.number}
                ref={(el) => {
                  tabs.current[i] = el;
                }}
                type="button"
                role="tab"
                id={`terminal-tab-${terminal.number}`}
                aria-selected={isSelected}
                aria-controls={`terminal-tabpanel-${terminal.number}`}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelected(i)}
                onKeyDown={(event) => onTabKey(event, i)}
                className={`min-h-12 rounded-lg px-4 text-base font-semibold ${focusRing} ${
                  isSelected
                    ? "bg-[#1FA3D6] text-[#0A2740]"
                    : "bg-[#12385A] text-white hover:bg-[#174468]"
                }`}
              >
                {terminal.name}
              </button>
            );
          })}
        </div>
        <div
          role="tabpanel"
          id={`terminal-tabpanel-${current.number}`}
          aria-labelledby={`terminal-tab-${current.number}`}
          tabIndex={0}
          className={`mt-4 rounded-xl ${focusRing}`}
        >
          <TerminalPanel terminal={current} />
        </div>
      </div>

      {/* Accordion (below md) */}
      <div className="space-y-3 md:hidden">
        {TERMINALS.map((terminal, i) => {
          const isOpen = open === i;
          return (
            <div key={terminal.number}>
              <h3>
                <button
                  type="button"
                  id={`terminal-acc-${terminal.number}`}
                  aria-expanded={isOpen}
                  aria-controls={`terminal-accpanel-${terminal.number}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className={`flex min-h-14 w-full items-center justify-between gap-4 rounded-lg px-5 text-left text-lg font-semibold ${focusRing} ${
                    isOpen ? "bg-[#1FA3D6] text-[#0A2740]" : "bg-[#12385A] text-white"
                  }`}
                >
                  {terminal.name}
                  <span aria-hidden="true" className="text-2xl leading-none">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
              </h3>
              <div
                id={`terminal-accpanel-${terminal.number}`}
                role="region"
                aria-labelledby={`terminal-acc-${terminal.number}`}
                hidden={!isOpen}
                className="mt-2"
              >
                <TerminalPanel terminal={terminal} showHeading={false} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
