import Image from "next/image";
import Link from "next/link";

// Building blocks for the Services pages.

export const focusNavy =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740]";

export const sectionHeading = "text-2xl font-bold text-[#0A2740] md:text-3xl";

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
