import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/site";

type WordmarkProps = {
  inverted?: boolean; // white "Heathrow" for navy backgrounds
};

// Site logo, linking home. Assets are trimmed, transparent versions of the
// supplied logo (public/images/Elegant Heathrow Minicab car-to-plane logo.png).
export default function Wordmark({ inverted = false }: WordmarkProps) {
  return (
    <Link
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
        sizes="(min-width: 1024px) 172px, 143px"
        loading={inverted ? "lazy" : "eager"}
        className="h-10 w-auto lg:h-12"
      />
    </Link>
  );
}
