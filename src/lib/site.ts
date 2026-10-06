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

// Set NEXT_PUBLIC_BOOKING_URL when the online booker is ready.
export const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

// Where every "Book Online" button goes: the hosted booker once configured,
// otherwise /book, which asks visitors to call while online booking is set up.
export const BOOK_ONLINE_HREF = BOOKING_URL ?? "/book";

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

export const LEGAL_LINKS: NavLink[] = [
  { label: "Terms", href: "/terms" },
  { label: "Privacy", href: "/privacy" },
];
