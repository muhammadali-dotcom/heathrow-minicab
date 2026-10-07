import { SERVICES } from "@/lib/services";

export type PhoneNumber = {
  label: string;
  display: string;
  tel: string;
};

export type NavLink = {
  label: string;
  href: string;
};

// An item without href is a dropdown-only menu (no landing page of its own).
export type NavItem = {
  label: string;
  href?: string;
  children?: NavLink[];
};

export const SITE_NAME = "Heathrow Minicab";

// The hosted web booker. NEXT_PUBLIC_BOOKING_URL overrides it (e.g. for testing).
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://www.bittacycars.com/booking";

// Where every "Book Online" / "Get a Quote" button goes (same tab).
export const BOOK_ONLINE_HREF = BOOKING_URL;

export const PHONE_NUMBERS: PhoneNumber[] = [
  { label: "Bookings", display: "020 8343 4444", tel: "+442083434444" },
  { label: "Alternative bookings line", display: "020 8569 4040", tel: "+442085694040" },
];

// Used by every Call to Book CTA; the alternative line is shown alongside where space allows.
export const PRIMARY_PHONE: PhoneNumber = PHONE_NUMBERS[0];
export const ALT_PHONE: PhoneNumber = PHONE_NUMBERS[1];

// WhatsApp Business is on the main bookings line; chats open with a ready-to-send message.
export const WHATSAPP_URL = `https://wa.me/442083434444?text=${encodeURIComponent(
  "Hi, I'd like to book a Heathrow transfer.",
)}`;

const HERO_COPY_PHONE =
  "Whether you’re catching a flight or heading home, arrange your journey in advance. Call us to get a quote and help plan your transfer.";
const HERO_COPY_ONLINE =
  "Whether you’re catching a flight or heading home, arrange your journey in advance. Get a quote online or call us to help plan your transfer.";

// Switches automatically once NEXT_PUBLIC_BOOKING_URL is set.
export const HERO_COPY = BOOKING_URL ? HERO_COPY_ONLINE : HERO_COPY_PHONE;

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Airport Transfers",
    href: "/airport-transfers",
    children: [
      { label: "Overview", href: "/airport-transfers" },
      { label: "Heathrow Pickups", href: "/airport-transfers/heathrow-pickups" },
      { label: "Heathrow Drop-offs", href: "/airport-transfers/heathrow-drop-offs" },
      { label: "Terminal Guides", href: "/airport-transfers/terminal-guides" },
    ],
  },
  {
    label: "Services",
    // Built from SERVICES so labels and URLs match the service pages.
    children: SERVICES.map((service) => ({
      label: service.title,
      href: `/services/${service.slug}`,
    })),
  },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const COMPANY_LINKS: NavLink[] = [
  { label: "Our Vehicles", href: "/our-vehicles" },
  { label: "Areas We Cover", href: "/areas" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
  { label: "About Us", href: "/about" },
];
