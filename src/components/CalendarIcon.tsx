type CalendarIconProps = {
  className?: string;
};

// Calendar with a tick, for "Book Online".
export default function CalendarIcon({ className = "h-4 w-4" }: CalendarIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 9.5h17M8 3v4M16 3v4M9 15l2 2 4-4" />
    </svg>
  );
}
