import { Fragment } from "react";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

type Crumb = { href?: string; label: string };

const tones = {
  // On photo banners.
  dark: {
    list: "text-white/75",
    link: "hover:text-white focus-visible:outline-white",
    current: "text-white",
  },
  // On light backgrounds.
  light: {
    list: "text-[#0A2740]/70",
    link: "hover:text-[#0A2740] focus-visible:outline-[#0A2740]",
    current: "text-[#0A2740]",
  },
};

// Home / … / current page. The last item is the current page; the others link.
export default function Breadcrumb({ items, tone }: { items: Crumb[]; tone: "light" | "dark" }) {
  const t = tones[tone];
  const all: Crumb[] = [{ href: "/", label: "Home" }, ...items];
  return (
    <nav aria-label="Breadcrumb">
      <BreadcrumbJsonLd items={all} />
      <ol className={`flex flex-wrap items-center gap-2 text-sm ${t.list}`}>
        {all.map((crumb, i) => {
          const isLast = i === all.length - 1;
          return (
            <Fragment key={`${crumb.label}-${i}`}>
              {i > 0 && <li aria-hidden="true">/</li>}
              {isLast || !crumb.href ? (
                <li aria-current={isLast ? "page" : undefined} className={`font-medium ${t.current}`}>
                  {crumb.label}
                </li>
              ) : (
                <li>
                  <Link
                    href={crumb.href}
                    className={`inline-flex min-h-11 items-center rounded-sm hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 ${t.link}`}
                  >
                    {crumb.label}
                  </Link>
                </li>
              )}
            </Fragment>
          );
        })}
      </ol>
    </nav>
  );
}
