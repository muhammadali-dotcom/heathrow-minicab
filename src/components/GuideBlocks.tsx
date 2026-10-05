import Image from "next/image";
import Link from "next/link";
import { SECTION_CONTAINER } from "@/lib/layout";

// Building blocks for the Services pages.

export const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

export const inlineLink = `inline-flex min-h-11 items-center rounded-sm font-semibold text-[#0A2740] underline underline-offset-4 hover:no-underline ${focusNavy}`;

export const sectionHeading = "text-2xl font-bold text-[#0A2740] md:text-3xl";

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-0.5 h-5 w-5 shrink-0 fill-none stroke-[#1FA3D6]"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 10.5l3.5 3.5 7.5-8" />
    </svg>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-[#0A2740]">
          <CheckIcon />
          {item}
        </li>
      ))}
    </ul>
  );
}

// Hub card: the whole card is one link, with an optional 16:9 photo.
export function GuideCard({
  href,
  title,
  text,
  image,
}: {
  href: string;
  title: string;
  text: string;
  image?: string;
}) {
  return (
    <Link
      href={href}
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#D5E8F2] bg-white hover:border-[#1FA3D6] ${focusNavy}`}
    >
      {image && (
        <span className="relative block aspect-[16/9] bg-[#E6F6FC]">
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 470px, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
        </span>
      )}
      <span className="flex flex-1 flex-col p-6">
        <span className="text-lg font-semibold text-[#0A2740]">{title}</span>
        <span className="mt-2 flex-1 leading-relaxed text-[#0A2740]/80">{text}</span>
        <span className="mt-4 inline-flex items-center gap-1 font-semibold text-[#0A2740] group-hover:underline group-hover:underline-offset-4">
          Read more <span aria-hidden="true">→</span>
        </span>
      </span>
    </Link>
  );
}

// "Other pages" chip links at the foot of guide pages.
export function RelatedLinks({
  heading,
  links,
}: {
  heading: string;
  links: { href: string; label: string }[];
}) {
  return (
    <nav aria-label={heading} className="py-12">
      <div className={SECTION_CONTAINER}>
        <h2 className="text-lg font-semibold text-[#0A2740]">{heading}</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`inline-flex min-h-11 items-center gap-1.5 rounded-md bg-[#0A2740] px-4 text-sm font-semibold text-white hover:bg-[#12385A] ${focusNavy}`}
              >
                {link.label}
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
