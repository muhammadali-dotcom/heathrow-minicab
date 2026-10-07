import { callButtonDark, ctaButtonClass } from "@/components/BookingCta";
import CalendarIcon from "@/components/CalendarIcon";
import PhoneIcon from "@/components/PhoneIcon";
import { BOOK_ONLINE_HREF, PRIMARY_PHONE } from "@/lib/site";

const sizing =
  "min-h-12 flex-1 px-4 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

// Fixed bar on phones and tablets: Book Online (filled) beside Call (outline); desktop has the
// numbers in the top bar.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex gap-3 border-t border-white/10 bg-[#0A2740] px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] sm:px-6 lg:hidden">
      <a href={BOOK_ONLINE_HREF} className={`${ctaButtonClass} ${sizing}`}>
        Book Online
        <CalendarIcon className="h-5 w-5" />
      </a>
      <a
        href={`tel:${PRIMARY_PHONE.tel}`}
        aria-label={`Call ${PRIMARY_PHONE.display}`}
        className={`${callButtonDark} ${sizing}`}
      >
        Call
        <PhoneIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
