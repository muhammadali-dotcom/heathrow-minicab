import type { Metadata } from "next";
import Link from "next/link";
import { callButtonLight, ctaButtonClass } from "@/components/BookingCta";
import PhoneIcon from "@/components/PhoneIcon";
import { SECTION_CONTAINER } from "@/lib/layout";
import { PRIMARY_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found | Heathrow Minicab",
  robots: { index: false },
  // Don't inherit the homepage canonical: a missing URL isn't a copy of the homepage.
  alternates: { canonical: null },
};

const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

const POPULAR = [
  { label: "Airport transfers", href: "/airport-transfers" },
  { label: "Heathrow pickups", href: "/airport-transfers/heathrow-pickups" },
  { label: "Heathrow drop-offs", href: "/airport-transfers/heathrow-drop-offs" },
  { label: "Areas we cover", href: "/areas" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

// Shown for any URL that doesn't exist (and for notFound()), inside the normal header and footer.
export default function NotFound() {
  return (
    <section aria-labelledby="not-found-heading" className="bg-white py-16 md:py-24">
      <div className={SECTION_CONTAINER}>
        <p
          aria-hidden="true"
          className="inline-block rounded-lg border-2 border-[#1FA3D6] bg-[#E6F6FC] px-4 py-2 font-mono text-3xl font-bold text-[#0A2740] md:text-4xl"
        >
          404
        </p>
        <h1
          id="not-found-heading"
          className="mt-6 text-3xl leading-tight font-bold text-balance text-[#0A2740] md:text-4xl"
        >
          We can’t find that page
        </h1>
        <p className="mt-3 max-w-[40rem] text-lg leading-relaxed text-[#0A2740]/80">
          The link may be out of date or the address mistyped. Try one of the pages below, or call
          us to book your Heathrow transfer.
        </p>

        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
          <Link href="/" className={`${ctaButtonClass} min-h-12 px-6 text-base ${focusNavy}`}>
            Go to homepage
          </Link>
          <a
            href={`tel:${PRIMARY_PHONE.tel}`}
            className={`${callButtonLight} min-h-12 px-6 text-base ${focusNavy}`}
          >
            Call {PRIMARY_PHONE.display}
            <PhoneIcon className="h-5 w-5" />
          </a>
        </div>

        <nav aria-labelledby="popular-pages-heading" className="mt-12">
          <h2
            id="popular-pages-heading"
            className="text-xs font-bold tracking-[0.15em] text-[#0A2740] uppercase"
          >
            Popular pages
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {POPULAR.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className={`inline-flex min-h-11 items-center rounded-full border border-[#D5E8F2] bg-white px-4 text-sm font-semibold text-[#0A2740] hover:border-[#0A2740] ${focusNavy}`}
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
