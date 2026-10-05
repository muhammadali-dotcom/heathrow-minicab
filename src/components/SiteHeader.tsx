import PhoneIcon from "@/components/PhoneIcon";
import SiteNav from "@/components/SiteNav";
import Wordmark from "@/components/Wordmark";
import { ALT_PHONE, NAV, PRIMARY_PHONE } from "@/lib/site";
import { SECTION_CONTAINER } from "@/lib/layout";

const topBarNumbers = [
  { phone: PRIMARY_PHONE, label: "Bookings" },
  { phone: ALT_PHONE, label: "Alternative" },
];

function TopBar() {
  return (
    <div className="bg-[#0A2740] text-white">
      <div className={`${SECTION_CONTAINER} flex h-11 items-center justify-center gap-x-4 text-sm sm:gap-x-6 md:justify-end`}>
        {/* From md: "Call us to book" on the logo line, the numbers ending at the Book Online edge. */}
        <span className="hidden text-white/70 md:mr-auto md:inline">Call us to book</span>
        {topBarNumbers.map(({ phone, label }) => (
          <a
            key={phone.tel}
            href={`tel:${phone.tel}`}
            className="inline-flex h-11 items-center gap-1.5 rounded-sm font-semibold whitespace-nowrap hover:text-[#4FB8E0] focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-white"
          >
            <PhoneIcon className="h-3.5 w-3.5 text-[#4FB8E0]" />
            <span className="hidden font-normal text-white/70 sm:inline">{label}</span>
            {phone.display}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function SiteHeader() {
  // Sticky: the top bar and the logo/menu row stay in view while scrolling (anchor offsets are
  // handled by scroll-padding-top in globals.css).
  return (
    <header className="sticky top-0 z-30 border-b border-[#D5E8F2] bg-white">
      <TopBar />
      <div className={`${SECTION_CONTAINER} flex h-16 items-center justify-between gap-4 lg:h-20`}>
        <Wordmark />
        <SiteNav nav={NAV} />
      </div>
    </header>
  );
}
