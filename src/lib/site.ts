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
// Bittacy Cars' published address (bittacycars.com/contact), used until the brand has its own.
export const BUSINESS_EMAIL = "bittacycs@hotmail.com";

// Where the business is based. Area only (no street address): it's a service-area business.
export const BUSINESS_BASE = { locality: "Mill Hill", area: "North London", postcode: "NW7" };
export const BUSINESS_BASE_LABEL = `${BUSINESS_BASE.locality}, ${BUSINESS_BASE.area} (${BUSINESS_BASE.postcode})`;

// One sentence that defines the business. Repeated word for word in the schema, About page and
// llms.txt so search and AI engines recognise the same entity everywhere.
export const BUSINESS_SUMMARY = `${SITE_NAME} is a 24/7 private hire service based in ${BUSINESS_BASE_LABEL}, providing airport transfers between North and West London and Heathrow Terminals 2, 3, 4 and 5.`;

// Official profiles for the business (Google Business Profile, Bing Places, directories).
// Each URL is added to the sitewide schema as sameAs, which helps search and AI engines
// recognise the brand. Add them here as they're created.
export const SAME_AS: string[] = [];

// TfL private hire operator licence. Shown in the footer and schema once set.
export const TFL_LICENCE: { number: string; operator: string } | null = null;

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

// Policy pages, linked from the footer on every page.
export const LEGAL_LINKS: NavLink[] = [
  { label: "Privacy policy", href: "/privacy" },
  { label: "Booking terms", href: "/terms" },
];
