// The site's content column: 1056px of content on desktop
// (70rem less 2rem padding each side), 24px gutters on phones and 32px from tablets up.
// Shared by the top bar, header, hero text, every section and the footer, so all their
// left and right edges line up.
export const SECTION_CONTAINER = "mx-auto w-full max-w-[70rem] px-6 sm:px-8";

// Cards: lift with a soft shadow on hover. Uses the translate property, so it doesn't clash
// with the transform StaggerIn animates.
export const CARD_HOVER =
  "transition-[translate,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(10,39,64,0.12)] motion-reduce:transition-none motion-reduce:hover:translate-y-0";
