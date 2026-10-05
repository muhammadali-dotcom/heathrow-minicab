import { ctaButtonClass } from "@/components/BookingCta";
import PhoneIcon from "@/components/PhoneIcon";
import { PRIMARY_PHONE } from "@/lib/site";

// Fixed call button on phones and tablets; desktop has the numbers in the top bar.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-[#0A2740] px-6 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={`tel:${PRIMARY_PHONE.tel}`}
        className={`${ctaButtonClass} min-h-12 w-full px-6 text-base focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
      >
        Call {PRIMARY_PHONE.display}
        <PhoneIcon className="h-5 w-5" />
      </a>
    </div>
  );
}
