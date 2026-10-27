// Top-down car, nose pointing right. Used on the journey route and the intro screen.
export default function CarIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 28 14" className="block h-[14px] w-[28px]">
      <rect width="28" height="14" rx="4" fill="#0A2740" />
      <rect x="16" y="2" width="5" height="10" rx="1.5" fill="#E6F6FC" />
      <rect x="4" y="2.5" width="3" height="9" rx="1" fill="#E6F6FC" opacity="0.7" />
      <rect x="25.5" y="2" width="2" height="2.5" rx="0.5" fill="#FFFFFF" />
      <rect x="25.5" y="9.5" width="2" height="2.5" rx="0.5" fill="#FFFFFF" />
    </svg>
  );
}
