import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import HideOnPaths from "@/components/HideOnPaths";
import PlaneIcon from "@/components/PlaneIcon";
import Wordmark from "@/components/Wordmark";
import {
  ALT_PHONE,
  BUSINESS_BASE_LABEL,
  BUSINESS_EMAIL,
  COMPANY_LINKS,
  NAV,
  PRIMARY_PHONE,
  SITE_NAME,
  TFL_LICENCE,
  type NavLink,
} from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

const footerNumbers = [
  { phone: PRIMARY_PHONE, label: "Bookings" },
  { phone: ALT_PHONE, label: "Alternative" },
];

// Footer columns reuse the header's dropdown links, plus the company pages.
const linkColumns: { title: string; links: NavLink[] }[] = [
  ...NAV.flatMap((item) => (item.children ? [{ title: item.label, links: item.children }] : [])),
  { title: "Company", links: COMPANY_LINKS },
];

const terminals = ["2", "3", "4", "5"];

const whiteLink =
  "rounded-sm hover:text-white hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function TerminalRoute() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
      <p className="shrink-0 text-sm font-semibold text-white">Every terminal, covered</p>
      <div className="relative flex flex-1 items-center gap-3">
        <span
          aria-hidden="true"
          className="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-[#4FB8E0]/50"
        />
        <ul aria-label="Heathrow terminals" className="relative flex flex-1 justify-between">
          {terminals.map((number) => (
            <li
              key={number}
              className="rounded-md bg-[#1FA3D6] px-2.5 py-1 font-mono text-sm font-bold text-[#0A2740]"
            >
              <span aria-hidden="true">T{number}</span>
              <span className="sr-only">Terminal {number}</span>
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="relative bg-[#0A2740] pl-2 text-[#4FB8E0]">
          <PlaneIcon className="h-5 w-5 rotate-45" />
        </span>
      </div>
    </div>
  );
}

export default function SiteFooter() {
  // Bottom padding leaves room for the fixed MobileCallBar below lg.
  return (
    <footer className="bg-[#0A2740] pb-[calc(4.75rem+env(safe-area-inset-bottom))] text-white lg:pb-0">
      {/* Airport Transfers and individual service pages end with their own closing CTA, so the
          band is skipped there; so is About, which ends with its own contact panel. */}
      <HideOnPaths prefixes={["/airport-transfers", "/services/", "/areas/", "/about"]}>
        <CtaBand />
      </HideOnPaths>

      <div className={`${SECTION_CONTAINER} pt-14 md:pt-16`}>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_3fr] lg:gap-12">
          <div className="max-w-xs">
            <Wordmark inverted />
            <p className="mt-4 leading-relaxed text-white/80">
              Heathrow airport transfers, from your doorstep to departures—and arrivals to home.
            </p>
            <ul aria-label="Contact us" className="mt-4">
              {footerNumbers.map(({ phone, label }) => (
                <li key={phone.tel} className="text-sm text-white/70">
                  {label}{" "}
                  <a
                    href={`tel:${phone.tel}`}
                    className={`inline-flex min-h-11 items-center font-semibold text-white ${whiteLink}`}
                  >
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="text-sm text-white/70">
                Email{" "}
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className={`inline-flex min-h-11 items-center font-semibold break-all text-white ${whiteLink}`}
                >
                  {BUSINESS_EMAIL}
                </a>
              </li>
            </ul>
            {/* Same name, numbers, email, hours and base on every page, matching the business schema. */}
            <p className="mt-2 text-sm font-semibold text-white">Open 24/7, every day</p>
            <p className="mt-1 text-sm text-white/70">Based in {BUSINESS_BASE_LABEL}</p>
            <p className="mt-1 text-sm text-white/70">
              Serving North and West London and Heathrow Terminals 2–5
            </p>
          </div>

          <nav aria-label="Footer" className="grid gap-x-6 gap-y-8 sm:grid-cols-3">
            {linkColumns.map((column) => (
              <div key={column.title}>
                <h2 className="text-sm font-semibold tracking-[0.15em] text-[#4FB8E0] uppercase">
                  {column.title}
                </h2>
                <ul className="mt-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`inline-flex min-h-11 items-center text-white/85 ${whiteLink}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="mt-12">
          <TerminalRoute />
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/80 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME}
            {TFL_LICENCE &&
              ` · Operated by ${TFL_LICENCE.operator}, TfL private hire operator licence ${TFL_LICENCE.number}`}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6">
            <li>
              <a href="#top" className={`inline-flex min-h-11 items-center gap-1 ${whiteLink}`}>
                Back to top <span aria-hidden="true">↑</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
