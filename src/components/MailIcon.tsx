type MailIconProps = {
  className?: string;
};

// Envelope, for "Email Us".
export default function MailIcon({ className = "h-4 w-4" }: MailIconProps) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`shrink-0 fill-none stroke-current ${className}`}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6.5 8.5-6.5" />
    </svg>
  );
}
