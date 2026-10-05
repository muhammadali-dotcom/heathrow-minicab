import type { ReactNode } from "react";

// Small line icons for guide steps; decorative (the step heading carries the meaning).
export type StepIconName = "plane" | "sign" | "phone" | "pin" | "clock" | "terminal";

const paths: Record<StepIconName, ReactNode> = {
  // Plane, for flight details.
  plane: <path d="M10.5 13.5 3 16v-2l7.5-4.5V4.5a1.5 1.5 0 0 1 3 0v5L21 14v2l-7.5-2.5v4L16 19v1.5l-4-1-4 1V19l2.5-1.5Z" />,
  // Name board held up in arrivals.
  sign: (
    <>
      <rect x="3" y="4" width="18" height="11" rx="1.5" />
      <path d="M7 8h10M7 11h6M9 15v5M15 15v5" />
    </>
  ),
  // Phone, for keeping in touch.
  phone: (
    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1Z" />
  ),
  // Map pin, for the pickup address.
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  // Clock, for the collection time.
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  // Terminal building.
  terminal: <path d="M3 20h18M5 20V10l7-5 7 5v10M9 20v-5h6v5M9 11h.01M15 11h.01" />,
};

export default function StepIcon({ name, className = "h-5 w-5" }: { name: StepIconName; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
