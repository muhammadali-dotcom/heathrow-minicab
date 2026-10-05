"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SECTION_CONTAINER } from "@/lib/layout";

const LINKS = [
  { href: "/airport-transfers", label: "Overview" },
  { href: "/airport-transfers/heathrow-pickups", label: "Pickups" },
  { href: "/airport-transfers/heathrow-drop-offs", label: "Drop-offs" },
  { href: "/airport-transfers/terminal-guides", label: "Terminal Guides", short: "Terminals" },
];

// Secondary navigation across the Airport Transfers pages, marking the current one.
export default function TransfersSubnav() {
  const pathname = usePathname();
  return (
    <nav aria-label="Airport transfer pages" className="border-b border-[#D5E8F2] bg-[#E6F6FC]">
      {/* One row; on narrow phones it scrolls sideways within itself. */}
      <ul
        className={`${SECTION_CONTAINER} flex gap-x-6 overflow-x-auto whitespace-nowrap sm:gap-x-8`}
      >
        {LINKS.map((link) => {
          const current = pathname === link.href;
          return (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-12 items-center border-b-[3px] text-sm font-semibold focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#0A2740] ${
                  current
                    ? "border-[#1FA3D6] text-[#0A2740]"
                    : "border-transparent text-[#0A2740]/70 hover:border-[#D5E8F2] hover:text-[#0A2740]"
                }`}
              >
                {"short" in link ? (
                  <>
                    <span className="sm:hidden">{link.short}</span>
                    <span className="hidden sm:inline">{link.label}</span>
                  </>
                ) : (
                  link.label
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
