import Link from "next/link";
import FlapTile from "@/components/FlapTile";
import { TERMINALS } from "@/lib/terminals";

const focusWhite =
  "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white";

// Heathrow terminals as an airport departures board: one row per terminal linking to its page.
// The pages hold general (not terminal-specific) guidance until terminal details are confirmed,
// so the guide column says "General info".
// "current" marks the terminal page being viewed.
export default function TerminalBoard({ current }: { current?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-[#0A2740] font-mono text-white">
      <div
        aria-hidden="true"
        className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs font-semibold tracking-[0.2em] text-[#4FB8E0] sm:px-6"
      >
        <span>Heathrow · Terminal guides</span>
        <span className="hidden sm:inline">LHR</span>
      </div>
      <div
        aria-hidden="true"
        className="hidden grid-cols-[6rem_1fr_1fr_10rem] gap-4 px-6 pt-4 pb-2 text-xs tracking-[0.2em] text-white/55 sm:grid"
      >
        <span>Terminal</span>
        <span>Pickups</span>
        <span>Drop-offs</span>
        <span className="text-right">Guide</span>
      </div>
      <ul className="divide-y divide-white/10">
        {TERMINALS.map((terminal) => {
          const isCurrent = terminal.slug === current;
          // Board cells are visual only; screen readers get one plain sentence per row.
          const row = (
            <>
              <span aria-hidden="true" className="text-lg font-bold">
                <FlapTile>{`T${terminal.number}`}</FlapTile>
              </span>
              <span className="sr-only">
                {terminal.name}: general pickup and drop-off information.
                {isCurrent ? " You’re on this page." : ""}
              </span>
              <span aria-hidden="true" className="hidden text-sm tracking-widest sm:inline">
                ✓ Yes
              </span>
              <span aria-hidden="true" className="hidden text-sm tracking-widest sm:inline">
                ✓ Yes
              </span>
              <span aria-hidden="true" className="text-sm text-white/80 sm:hidden">
                Pickups ✓ · Drop-offs ✓
              </span>
              <span
                className={`text-right text-sm font-semibold tracking-widest ${isCurrent ? "text-white/60" : "text-[#4FB8E0]"}`}
              >
                {isCurrent ? (
                  <span aria-hidden="true">You’re here</span>
                ) : (
                  <>
                    General info <span aria-hidden="true">→</span>
                  </>
                )}
              </span>
            </>
          );
          const rowClass =
            "grid min-h-16 grid-cols-[4.5rem_1fr_auto] items-center gap-4 px-4 py-3 sm:grid-cols-[6rem_1fr_1fr_10rem] sm:px-6";
          return (
            <li key={terminal.slug}>
              {isCurrent ? (
                <div aria-current="page" className={`${rowClass} bg-white/5`}>
                  {row}
                </div>
              ) : (
                <Link
                  href={`/airport-transfers/${terminal.slug}`}
                  className={`${rowClass} hover:bg-white/5 ${focusWhite}`}
                >
                  {row}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
