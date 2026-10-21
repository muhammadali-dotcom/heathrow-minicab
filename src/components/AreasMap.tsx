import Link from "next/link";
import { AREAS, type Area } from "@/lib/areas";

// Schematic map of the areas we cover, Heathrow bottom left. Positions follow real geography
// loosely (north cluster top right, west cluster near the airport) but are spread out so every
// label stays readable. Each dot links to its area page; hovering or focusing one draws its route
// to Heathrow. The chip list beside it stays the main, plain list of the same links.

type Spot = { x: number; y: number; label: "left" | "right" | "below" };

const SPOTS: Record<Area["slug"], Spot> = {
  barnet: { x: 300, y: 40, label: "right" },
  whetstone: { x: 368, y: 72, label: "right" },
  edgware: { x: 196, y: 70, label: "left" },
  "mill-hill": { x: 252, y: 104, label: "right" },
  finchley: { x: 320, y: 134, label: "right" },
  hendon: { x: 232, y: 160, label: "left" },
  "east-finchley": { x: 344, y: 172, label: "right" },
  "hampstead-garden-suburb": { x: 300, y: 206, label: "left" },
  "muswell-hill": { x: 404, y: 206, label: "below" },
  "golders-green": { x: 266, y: 240, label: "right" },
  hayes: { x: 108, y: 214, label: "left" },
  southall: { x: 158, y: 232, label: "right" },
  ealing: { x: 216, y: 270, label: "right" },
  isleworth: { x: 172, y: 300, label: "right" },
  hounslow: { x: 124, y: 316, label: "below" },
  twickenham: { x: 204, y: 334, label: "right" },
};

const HEATHROW = { x: 48, y: 290 };

const PLANE_PATH =
  "M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z";

// A gentle curve from the area to Heathrow.
function routePath({ x, y }: Spot) {
  const cx = (x + HEATHROW.x) / 2;
  const cy = (y + HEATHROW.y) / 2 - 36;
  return `M${x} ${y} Q${cx} ${cy} ${HEATHROW.x} ${HEATHROW.y}`;
}

const labelProps = {
  left: { dx: -11, dy: 4, textAnchor: "end" },
  right: { dx: 11, dy: 4, textAnchor: "start" },
  below: { dx: 0, dy: 22, textAnchor: "middle" },
} as const;

export default function AreasMap() {
  return (
    <div className="rounded-2xl border border-[#D5E8F2] bg-[#E6F6FC] p-3 sm:p-5">
      <svg
        viewBox="0 0 460 360"
        role="group"
        aria-label="Map of the areas we cover, with routes to Heathrow"
        className="h-auto w-full overflow-visible font-sans"
      >
        {/* The Thames, for orientation. */}
        <path
          d="M150 360 C 185 340, 205 326, 240 308 S 320 292, 360 306 S 430 306, 460 280"
          fill="none"
          stroke="#CBEFFA"
          strokeWidth={10}
          strokeLinecap="round"
        />

        <text
          x={450}
          y={18}
          textAnchor="end"
          className="fill-[#0A2740]/50 text-[10px] font-bold tracking-[0.2em]"
        >
          NORTH LONDON
        </text>
        <text x={12} y={190} className="fill-[#0A2740]/50 text-[10px] font-bold tracking-[0.2em]">
          WEST LONDON
        </text>

        {AREAS.map((area) => {
          const spot = SPOTS[area.slug];
          if (!spot) return null;
          const north = area.region === "north";
          const label = labelProps[spot.label];
          return (
            <Link
              key={area.slug}
              href={`/areas/${area.slug}`}
              aria-label={`${area.name} Heathrow transfers`}
              className="group outline-none"
            >
              <path
                d={routePath(spot)}
                fill="none"
                strokeWidth={2}
                strokeDasharray="5 5"
                strokeLinecap="round"
                className="pointer-events-none stroke-[#0A2740]/[0.08] transition-colors group-hover:stroke-[#1FA3D6] group-hover:motion-safe:animate-route group-focus-visible:stroke-[#1FA3D6] group-focus-visible:motion-safe:animate-route motion-reduce:transition-none"
              />
              {/* Invisible hit area: at least 44px across on a phone. */}
              <circle cx={spot.x} cy={spot.y} r={22} fill="transparent" />
              <circle
                cx={spot.x}
                cy={spot.y}
                r={6}
                className={`stroke-white transition-[r] group-hover:[r:8] group-focus-visible:[r:8] motion-reduce:transition-none ${
                  north ? "fill-[#0A2740]" : "fill-[#1FA3D6]"
                }`}
                strokeWidth={2}
              />
              <text
                x={spot.x + label.dx}
                y={spot.y + label.dy}
                textAnchor={label.textAnchor}
                stroke="#E6F6FC"
                strokeWidth={4}
                paintOrder="stroke"
                className="fill-[#0A2740] text-[13px] font-semibold group-hover:underline group-focus-visible:underline"
              >
                {area.name}
              </text>
              {/* Focus ring for keyboard users. */}
              <circle
                cx={spot.x}
                cy={spot.y}
                r={13}
                fill="none"
                strokeWidth={2}
                className="hidden stroke-[#0A2740] group-focus-visible:block"
              />
            </Link>
          );
        })}

        {/* Heathrow, on top of the routes that end at it. */}
        <g aria-hidden="true">
          <circle cx={HEATHROW.x} cy={HEATHROW.y} r={20} className="fill-[#0A2740]" />
          {/* PlaneIcon's 24×24 path, centred on the pin. */}
          <svg x={HEATHROW.x - 11} y={HEATHROW.y - 11} width={22} height={22} viewBox="0 0 24 24">
            <path d={PLANE_PATH} className="fill-white" />
          </svg>
          <text
            x={HEATHROW.x}
            y={HEATHROW.y + 38}
            textAnchor="middle"
            className="fill-[#0A2740] text-[12px] font-bold tracking-[0.15em]"
          >
            HEATHROW
          </text>
        </g>
      </svg>

      <p className="mt-2 flex flex-wrap gap-x-5 gap-y-1 px-1 text-sm text-[#0A2740]/80">
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#0A2740]" />
          North London
        </span>
        <span className="flex items-center gap-2">
          <span aria-hidden="true" className="h-3 w-3 rounded-full bg-[#1FA3D6]" />
          West London
        </span>
      </p>
    </div>
  );
}
