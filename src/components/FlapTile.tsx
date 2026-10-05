type FlapTileProps = {
  children: string;
  size?: "row" | "step" | "giant";
};

const sizes = {
  // Departure-board row in the hero.
  row: "h-full rounded-md bg-[#12385A] px-3 py-2 after:bg-[#0A2740] sm:px-4 sm:py-3",
  // Square step number.
  step: "h-14 w-14 justify-center rounded-lg bg-[#0A2740] text-xl font-bold after:bg-white/10",
  // Large terminal number in a page banner.
  giant:
    "h-36 w-44 justify-center rounded-2xl border border-white/15 bg-[#0A2740]/85 text-7xl font-bold tracking-tight after:bg-white/15 lg:h-44 lg:w-52 lg:text-8xl",
};

// A split-flap style tile: light-blue mono text with a thin line across the middle.
export default function FlapTile({ children, size = "row" }: FlapTileProps) {
  return (
    <span
      className={`relative flex shrink-0 items-center font-mono text-[#4FB8E0] after:absolute after:inset-x-0 after:top-1/2 after:h-px ${sizes[size]}`}
    >
      {children}
    </span>
  );
}
