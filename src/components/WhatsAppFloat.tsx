import WhatsAppIcon from "@/components/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/site";

// Floating WhatsApp button on every page. Below lg it sits above the fixed MobileCallBar.
export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed right-4 bottom-[calc(6.5rem+env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:bg-[#1EBE5D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A2740] lg:right-6 lg:bottom-6"
    >
      <WhatsAppIcon className="h-[30px] w-[30px]" />
    </a>
  );
}
