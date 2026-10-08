// Slow, endless strip of what we offer under the homepage hero. Pure CSS: the track holds two
// identical groups and slides by half its width. It pauses on hover, and with reduced motion it
// becomes one static, wrapped row.
const PHRASES = [
  "Airport transfers",
  "Local journeys",
  "Long distance",
  "Business travel",
  "Easy contact",
  "Reliable service",
  "Comfortable rides",
];

function Group({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-center gap-10 pr-10 motion-reduce:w-full motion-reduce:shrink motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-x-6 motion-reduce:gap-y-3 motion-reduce:pr-0 ${
        hidden ? "motion-reduce:hidden" : ""
      }`}
    >
      {PHRASES.map((phrase) => (
        <li
          key={phrase}
          className="flex items-center gap-10 text-xs motion-reduce:gap-6 font-semibold tracking-[0.3em] whitespace-nowrap text-white/90 uppercase sm:text-sm"
        >
          {phrase}
          <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#1FA3D6]" />
        </li>
      ))}
    </ul>
  );
}

export default function MarqueeStrip() {
  return (
    <section
      aria-label="What we offer"
      className="group border-y border-white/10 bg-[#0A2740] py-4"
    >
      {/* The fade sits on this wrapper, not the section, so the navy band stays solid. */}
      <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] motion-reduce:[mask-image:none]">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none motion-reduce:justify-center motion-reduce:px-6">
          <Group />
          <Group hidden />
        </div>
      </div>
    </section>
  );
}
