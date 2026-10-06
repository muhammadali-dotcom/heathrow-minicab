import ArrowRightIcon from "@/components/ArrowRightIcon";
import CalendarIcon from "@/components/CalendarIcon";
import PhoneIcon from "@/components/PhoneIcon";
import { ALT_PHONE, BOOK_ONLINE_HREF, PRIMARY_PHONE } from "@/lib/site";

type BookingCtaProps = {
  tone?: "light" | "dark"; // background the CTA sits on (sets the focus outline colour)
  align?: "start" | "center";
  size?: "md" | "sm";
  fullWidth?: boolean;
  stacked?: boolean; // keep buttons in a column, for narrow spaces
  online?: boolean; // false on /book: both call buttons instead of Book Online + Call
  onlineOnly?: boolean; // just "Book Online →" (desktop header)
};

// Shared shape for every booking button: square-ish, filled brand blue with navy text,
// icon on the right. Navy on #1FA3D6 is 5.3:1; the darker hover #1C98C9 is 4.6:1.
export const ctaButtonClass =
  "inline-flex items-center justify-center gap-3 rounded-md bg-[#1FA3D6] font-semibold whitespace-nowrap text-[#0A2740] hover:bg-[#1C98C9]";

// The booking CTA used across the site: "Book Online" (to the hosted web booker) and
// "Call 020 8343 4444".
export default function BookingCta({
  tone = "light",
  align = "start",
  size = "md",
  fullWidth = false,
  stacked = false,
  online = true,
  onlineOnly = false,
}: BookingCtaProps) {
  const focus = `focus-visible:outline-2 focus-visible:outline-offset-2 ${
    tone === "dark" ? "focus-visible:outline-white" : "focus-visible:outline-[#0A2740]"
  }`;
  const button = `${ctaButtonClass} ${
    size === "sm" ? "min-h-11 px-4 text-sm" : "min-h-12 px-6 text-base"
  } ${fullWidth ? "w-full" : ""} ${focus}`;
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  if (onlineOnly) {
    return (
      <a href={BOOK_ONLINE_HREF} className={button}>
        Book Online
        <ArrowRightIcon className={icon} />
      </a>
    );
  }

  const callButton = (phone: typeof PRIMARY_PHONE) => (
    <a key={phone.tel} href={`tel:${phone.tel}`} className={button}>
      Call {phone.display}
      <PhoneIcon className={icon} />
    </a>
  );

  return (
    <div
      className={`flex flex-col gap-3 ${stacked ? "" : "sm:flex-row sm:flex-wrap"} ${
        align === "center" ? "items-center justify-center" : "items-start"
      } ${fullWidth ? "w-full items-stretch" : ""}`}
    >
      {online ? (
        <>
          <a href={BOOK_ONLINE_HREF} className={button}>
            Book Online
            <CalendarIcon className={icon} />
          </a>
          {callButton(PRIMARY_PHONE)}
        </>
      ) : (
        <>
          {callButton(PRIMARY_PHONE)}
          {callButton(ALT_PHONE)}
        </>
      )}
    </div>
  );
}
