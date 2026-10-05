"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import BookingCta from "@/components/BookingCta";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import { SECTION_CONTAINER } from "@/lib/layout";
import { WHATSAPP_URL, type NavItem } from "@/lib/site";

type SiteNavProps = {
  nav: NavItem[];
};

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className={`h-4 w-4 fill-current ${open ? "rotate-180" : ""}`}
    >
      <path d="M5.3 7.3a1 1 0 0 1 1.4 0L10 10.6l3.3-3.3a1 1 0 1 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 0-1.4Z" />
    </svg>
  );
}

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const panelId = useId();

  // Mouse users open the menu by hovering; touch and keyboard use the chevron toggle.
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = null;
  };
  useEffect(() => cancelClose, []);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <li
      ref={ref}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        closeTimer.current = setTimeout(() => setOpen(false), 150);
      }}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      {/* The label goes to the section's page; the chevron is a separate toggle for its links. */}
      <div className="flex items-center">
        <Link
          href={item.href}
          className={`inline-flex min-h-11 items-center rounded-md pr-0.5 pl-0 text-sm font-medium whitespace-nowrap text-[#0A2740] hover:underline hover:underline-offset-4 ${focusRing}`}
        >
          {item.label}
        </Link>
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          aria-label={`${open ? "Hide" : "Show"} ${item.label} links`}
          onClick={() => setOpen((v) => !v)}
          className={`inline-flex h-11 w-5 items-center justify-center rounded-md text-[#0A2740] hover:bg-[#E6F6FC] ${focusRing}`}
        >
          <Chevron open={open} />
        </button>
      </div>
      {/* Top padding (not margin) bridges the gap, so moving the mouse into the menu keeps it open. */}
      <div id={panelId} hidden={!open} className="absolute top-full left-0 z-30 pt-2">
        <ul className="w-64 rounded-xl border border-[#D5E8F2] bg-white p-2">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-2.5 text-sm text-[#0A2740] hover:bg-[#E6F6FC] ${focusRing}`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}

function MobileItem({ item, onNavigate }: { item: NavItem; onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="border-b border-[#D5E8F2] last:border-b-0">
      <div className="flex items-center justify-between gap-2">
        <Link
          href={item.href}
          onClick={onNavigate}
          className={`flex min-h-12 flex-1 items-center rounded-md font-medium text-[#0A2740] ${focusRing}`}
        >
          {item.label}
        </Link>
        {item.children && (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            aria-label={`${open ? "Hide" : "Show"} ${item.label} links`}
            onClick={() => setOpen((v) => !v)}
            className={`flex h-11 w-11 items-center justify-center rounded-full text-[#0A2740] hover:bg-[#E6F6FC] ${focusRing}`}
          >
            <Chevron open={open} />
          </button>
        )}
      </div>
      {item.children && (
        <ul id={panelId} hidden={!open} className="pb-2 pl-4">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className={`flex min-h-11 items-center rounded-md text-sm text-[#0A2740] ${focusRing}`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function SiteNav({ nav }: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      {/* Desktop */}
      {/* The menu fills the space between logo and buttons, centred, with equal gaps. */}
      <nav aria-label="Main" className="hidden flex-1 items-center gap-4 lg:flex">
        <ul className="flex flex-1 items-center justify-center gap-6">
          {nav.map((item) =>
            item.children ? (
              <Dropdown key={item.href} item={item} />
            ) : (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex min-h-11 items-center rounded-md px-0 text-sm font-medium whitespace-nowrap text-[#0A2740] hover:underline hover:underline-offset-4 ${focusRing}`}
                >
                  {item.label}
                </Link>
              </li>
            ),
          )}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex min-h-11 items-center gap-2 rounded-md border border-[#0A2740] bg-white px-3 text-sm font-semibold whitespace-nowrap text-[#0A2740] hover:bg-[#E6F6FC] ${focusRing}`}
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp
          </a>
          <BookingCta size="sm" onlineOnly />
        </div>
      </nav>

      {/* Mobile */}
      <div className="lg:hidden">
        <button
          ref={menuButtonRef}
          type="button"
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
          onClick={() => setMenuOpen((v) => !v)}
          className={`min-h-11 rounded-full border border-[#0A2740] px-4 text-sm font-semibold text-[#0A2740] ${focusRing}`}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav
          id={mobileMenuId}
          aria-label="Main"
          hidden={!menuOpen}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-6.75rem-4.5rem-env(safe-area-inset-bottom))] overflow-y-auto border-b border-[#D5E8F2] bg-white"
        >
          <ul className={`${SECTION_CONTAINER} py-2`}>
            {nav.map((item) => (
              <MobileItem key={item.href} item={item} onNavigate={close} />
            ))}
          </ul>
          <div className={`${SECTION_CONTAINER} border-t border-[#D5E8F2] pt-4 pb-6`}>
            <BookingCta fullWidth stacked />
          </div>
        </nav>
      </div>
    </>
  );
}
