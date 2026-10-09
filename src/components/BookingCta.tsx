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
  onlineOnly?: boolean; // just the Book Online button (desktop header)
};

// Button hierarchy used site-wide:
// - main booking/quote action: filled brand blue with navy text (5.3:1; hover #4FB8E0 is 6.7:1)
// - Call: 2px outline (navy on light backgrounds, white on navy/photo)
// - WhatsApp: 1px secondary outline with the green WhatsApp icon
const ctaShape =
  "inline-flex items-center justify-center gap-3 rounded-md font-semibold whitespace-nowrap";
export const ctaButtonClass = `${ctaShape} bg-[#1FA3D6] text-[#0A2740] hover:bg-[#4FB8E0]`;
export const callButtonLight = `${ctaShape} border-2 border-[#0A2740] bg-white text-[#0A2740] hover:bg-[#E6F6FC]`;
export const callButtonDark = `${ctaShape} border-2 border-white text-white hover:bg-white/10`;
export const whatsappButtonLight = `${ctaShape} border border-[#0A2740] bg-white text-[#0A2740] hover:bg-[#E6F6FC]`;
export const whatsappIconClass = "text-[#25D366]";

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
  const sizing = `${size === "sm" ? "min-h-10 px-4 text-sm" : "min-h-12 px-6 text-base"} ${
    fullWidth ? "w-full" : ""
  } ${focus}`;
  const button = `${ctaButtonClass} ${sizing}`;
  const outline = `${tone === "dark" ? callButtonDark : callButtonLight} ${sizing}`;
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";

  if (onlineOnly) {
    return (
      <a href={BOOK_ONLINE_HREF} className={button}>
        Book Online
        <CalendarIcon className={icon} />
      </a>
    );
  }

  const callButton = (phone: typeof PRIMARY_PHONE) => (
    <a key={phone.tel} href={`tel:${phone.tel}`} className={outline}>
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
