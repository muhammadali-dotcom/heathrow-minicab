import Image from "next/image";
import { SITE_NAME } from "@/lib/site";

type WordmarkProps = {
  inverted?: boolean; // white "Heathrow" for navy backgrounds
};

// Site logo, linking home. Assets are trimmed, transparent versions of the supplied logo.
export default function Wordmark({ inverted = false }: WordmarkProps) {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages -- logo clicks must perform a full page load.
    <a
      href="/"
      className={`inline-flex shrink-0 rounded-sm py-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${
        inverted ? "focus-visible:outline-white" : "focus-visible:outline-[#0A2740]"
      }`}
    >
      <Image
        src={inverted ? "/images/logo-on-dark.png" : "/images/logo.png"}
        alt={SITE_NAME}
        width={800}
        height={224}
        sizes={inverted ? "(min-width: 1024px) 143px, 129px" : "(min-width: 1024px) 172px, 143px"}
        loading={inverted ? "lazy" : "eager"}
        // Low priority so the header logo isn't preloaded ahead of the hero (the LCP image).
        fetchPriority={inverted ? undefined : "low"}
        // The header logo is a step larger than the footer one so it stands out.
        className={inverted ? "h-9 w-auto lg:h-10" : "h-10 w-auto lg:h-12"}
      />
    </a>
  );
}
