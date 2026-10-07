"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
const activeDesktop =
  "text-[#0A2740] after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:rounded-full after:bg-[#1FA3D6] after:transition-transform after:duration-300 motion-reduce:after:transition-none";
const inactiveDesktop =
  "text-[#0A2740] after:absolute after:inset-x-0 after:bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-[#1FA3D6] after:transition-transform after:duration-300 hover:after:scale-x-100 motion-reduce:after:transition-none";

function isCurrentPath(pathname: string, href?: string, children?: NavItem["children"]) {
  if (!href && !children?.length) return false;
  if (href === "/") return pathname === "/";
  if (href && (pathname === href || pathname.startsWith(`${href}/`))) return true;
  return children?.some((child) => pathname === child.href || pathname.startsWith(`${child.href}/`)) ?? false;
}

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

function Dropdown({
  item,
  current,
  pathname,
}: {
  item: NavItem;
  current: boolean;
  pathname: string;
}) {
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
      {/* With an href, the label goes to the section's page and the chevron is a separate toggle;
          without one, the label and chevron are a single toggle button. */}
      {item.href ? (
        <div className="flex items-center">
          <Link
            href={item.href}
            aria-current={current ? "page" : undefined}
            className={`relative inline-flex min-h-11 items-center rounded-md pr-0.5 pl-0 text-sm font-medium whitespace-nowrap ${current ? activeDesktop : inactiveDesktop} ${focusRing}`}
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
      ) : (
        <button
          ref={buttonRef}
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className={`relative inline-flex min-h-11 items-center gap-0.5 rounded-md text-sm font-medium whitespace-nowrap ${current ? activeDesktop : inactiveDesktop} ${focusRing}`}
        >
          {item.label}
          <Chevron open={open} />
        </button>
      )}
      {/* Top padding (not margin) bridges the gap, so moving the mouse into the menu keeps it open. */}
      <div id={panelId} hidden={!open} className="absolute top-full left-0 z-30 pt-2">
        <ul className="w-64 rounded-xl border border-[#D5E8F2] bg-white p-2">
          {item.children?.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={() => setOpen(false)}
                aria-current={isCurrentPath(pathname, child.href) ? "page" : undefined}
                className={`block rounded-lg px-3 py-2.5 text-sm text-[#0A2740] hover:bg-[#E6F6FC] aria-[current=page]:bg-[#E6F6FC] aria-[current=page]:font-semibold ${focusRing}`}
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

function MobileItem({
  item,
  onNavigate,
  current,
  pathname,
}: {
  item: NavItem;
  onNavigate: () => void;
  current: boolean;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <li className="border-b border-[#D5E8F2] last:border-b-0">
      <div className="flex items-center justify-between gap-2">
        {item.href ? (
          <Link
            href={item.href}
            onClick={onNavigate}
            aria-current={current ? "page" : undefined}
            className={`flex min-h-12 flex-1 items-center rounded-md px-3 font-medium text-[#0A2740] ${current ? "bg-[#E6F6FC] font-semibold shadow-[inset_3px_0_0_#1FA3D6]" : ""} ${focusRing}`}
          >
            {item.label}
          </Link>
        ) : (
          <button
            type="button"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
            className={`flex min-h-12 flex-1 items-center justify-between rounded-md px-3 text-left font-medium text-[#0A2740] ${current ? "bg-[#E6F6FC] font-semibold shadow-[inset_3px_0_0_#1FA3D6]" : ""} ${focusRing}`}
          >
            {item.label}
            <span className="flex h-11 w-11 items-center justify-center">
              <Chevron open={open} />
            </span>
          </button>
        )}
        {item.href && item.children && (
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
                aria-current={isCurrentPath(pathname, child.href) ? "page" : undefined}
                className={`flex min-h-11 items-center rounded-md px-3 text-sm text-[#0A2740] aria-[current=page]:font-semibold aria-[current=page]:text-[#1786BB] ${focusRing}`}
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
  const pathname = usePathname();

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
              <Dropdown
                key={item.label}
                item={item}
                current={isCurrentPath(pathname, item.href, item.children)}
                pathname={pathname}
              />
            ) : (
              <li key={item.label}>
                <Link
                  href={item.href ?? "/"}
                  aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined}
                  className={`relative inline-flex min-h-11 items-center rounded-md px-0 text-sm font-medium whitespace-nowrap ${isCurrentPath(pathname, item.href) ? activeDesktop : inactiveDesktop} ${focusRing}`}
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
          className={`min-h-11 rounded-full border border-[#0A2740] px-4 text-sm font-semibold text-[#0A2740] hover:bg-[#E6F6FC] ${focusRing}`}
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
              <MobileItem
                key={item.label}
                item={item}
                onNavigate={close}
                current={isCurrentPath(pathname, item.href, item.children)}
                pathname={pathname}
              />
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
