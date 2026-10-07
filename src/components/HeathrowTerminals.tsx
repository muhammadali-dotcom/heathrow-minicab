import Image from "next/image";
import Link from "next/link";
import { SECTION_CONTAINER } from "@/lib/layout";

type Terminal = {
  number: "2" | "3" | "4" | "5";
  name: string;
  // Shown at 16:9 above the card text. focus is an optional CSS object-position
  // (e.g. "50% 30%") to keep the entrance in frame.
  image?: { src: string; alt: string; focus?: string };
};

// Photos are cropped from the supplied images to remove their built-in yellow labels.
const terminals: Terminal[] = [
  {
    number: "2",
    name: "Terminal 2",
    image: {
      src: "/images/terminals/t2.jpg",
      alt: "Curved glass and steel entrance of Heathrow Terminal 2",
    },
  },
  {
    number: "3",
    name: "Terminal 3",
    image: { src: "/images/terminals/t3.jpg", alt: "Entrance and canopy of Heathrow Terminal 3" },
  },
  {
    number: "4",
    name: "Terminal 4",
    image: { src: "/images/terminals/t4.jpg", alt: "Glass frontage of Heathrow Terminal 4" },
  },
  {
    number: "5",
    name: "Terminal 5",
    image: {
      src: "/images/terminals/t5.jpg",
      alt: "Glass and steel frontage of Heathrow Terminal 5",
    },
  },
];

function Badge({ number, className = "" }: { number: Terminal["number"]; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`flex shrink-0 items-center justify-center rounded-lg bg-[#1FA3D6] font-mono font-bold text-[#0A2740] ${className}`}
    >
      T{number}
    </span>
  );
}

export default function HeathrowTerminals() {
  return (
    <section aria-labelledby="terminals-heading" className="bg-[#0A2740] py-16 md:py-24">
      <div className={SECTION_CONTAINER}>
        <div className="max-w-2xl">
          <span
            aria-hidden="true"
            className="mb-4 block h-1 w-10 rounded-full bg-[#1FA3D6]"
          />
          <p className="text-sm font-semibold tracking-[0.15em] text-[#4FB8E0] uppercase">
            HEATHROW TERMINALS
          </p>
          <h2
            id="terminals-heading"
            className="mt-3 text-3xl leading-tight font-bold text-balance text-white md:text-4xl"
          >
            Every Heathrow terminal, covered.
          </h2>
          <p className="mt-4 max-w-[35rem] text-lg leading-relaxed text-white/85">
            Departing or arriving at Terminal 2, 3, 4 or 5? Tell us your terminal when you book
            and we’ll plan your drop-off or pickup around it.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 md:mt-12 lg:grid-cols-4">
          {terminals.map((terminal) => (
            <li key={terminal.number}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12385A] hover:border-[#4FB8E0]">
                {terminal.image && (
                  <div className="relative aspect-[16/9] border-b border-white/10">
                    <Image
                      src={terminal.image.src}
                      alt={terminal.image.alt}
                      fill
                      sizes="(min-width: 1024px) 240px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                      style={{ objectPosition: terminal.image.focus ?? "center" }}
                    />
                    <Badge
                      number={terminal.number}
                      className="absolute top-3 left-3 px-2.5 py-1 text-base"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-3">
                    {!terminal.image && <Badge number={terminal.number} className="h-12 w-12 text-lg" />}
                    <h3 className="text-xl font-semibold text-white">{terminal.name}</h3>
                  </div>
                  <p className="mt-3 flex-1 text-white/85">
                    Drop-offs and pickups at {terminal.name}.
                  </p>
                  <Link
                    href={`/airport-transfers/terminal-guides#terminal-${terminal.number}`}
                    className="mt-3 inline-flex min-h-11 items-center gap-1 self-start rounded-sm text-sm font-semibold whitespace-nowrap text-[#4FB8E0] underline-offset-4 hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                  >
                    View {terminal.name} guide <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-white/70">
          Not sure which terminal? Check with your airline before you travel, as terminals can
          change.
        </p>
      </div>
    </section>
  );
}
