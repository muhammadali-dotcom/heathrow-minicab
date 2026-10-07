import { AREA_REGIONS, AREAS } from "@/lib/areas";
import { PRIMARY_PHONE } from "@/lib/site";

export type Faq = {
  id: string;
  question: string;
  answer: string;
};

// Answers as confirmed by the business. Keep them free of provider names, card types,
// cancellation cutoffs, prices, journey times or other details that haven't been confirmed.
// Each answer opens with the direct answer so answer engines can quote it on its own.

// General questions: the homepage and the top of /faqs.
export const FAQS: Faq[] = [
  {
    id: "flight-delays",
    question: "What happens if my flight is delayed?",
    answer:
      "We monitor your flight and adjust pickup arrangements for delays. Please contact us if your flight is cancelled, diverted or changed so we can confirm your updated pickup details.",
  },
  {
    id: "meeting-driver",
    question: "Where will I meet my driver at Heathrow?",
    answer:
      "Your meeting arrangement is confirmed when you book. Depending on your booking, your driver will meet you inside arrivals with a name board or at an agreed pickup location. Check your confirmation and contact us if you need help.",
  },
  {
    id: "waiting-charges",
    question: "Are there any waiting charges?",
    answer:
      "Your pickup includes 15 minutes of free waiting, starting at your agreed pickup time. Charges apply after that at the rate confirmed before you book.",
  },
  {
    id: "payments",
    question: "How can I pay?",
    answer:
      "We accept cash and online payment. Please confirm your preferred payment method and any payment instructions when booking.",
  },
  {
    id: "cancellations",
    question: "Can I change or cancel my booking?",
    answer:
      "Please call us as soon as possible if you need to change or cancel your booking. We’ll confirm your options and any applicable charges before proceeding.",
  },
];

// Pricing and what's included: /airport-transfers.
export const PRICING_FAQS: Faq[] = [
  {
    id: "how-price-works",
    question: "How is the price of a Heathrow transfer worked out?",
    answer:
      "The price depends on the time, day and route of your journey. Once your quote is confirmed, the price is fixed: there’s no meter, so traffic doesn’t change the fare.",
  },
  {
    id: "whats-included",
    question: "What’s included in the price?",
    answer:
      "Waiting, parking and any extras are covered as agreed in your quote. The Heathrow drop-off charge isn’t part of the journey price; it’s added to your quote so you see the full cost before you book.",
  },
  {
    id: "return-journeys",
    question: "Can I book my return journey at the same time?",
    answer:
      "Yes. Give us both dates and times when you book and we’ll arrange your journey to Heathrow and your pickup when you land.",
  },
];

// Heathrow arrivals: /airport-transfers/heathrow-pickups.
export const PICKUP_FAQS: Faq[] = [
  {
    id: "pickup-flight-monitoring",
    question: "Do you monitor my flight for a Heathrow pickup?",
    answer:
      "Yes. We monitor your flight and adjust your pickup for delays. If your flight changes, contact us too so we can confirm your updated pickup details.",
  },
  {
    id: "pickup-waiting",
    question: "How long will my driver wait at Heathrow arrivals?",
    answer:
      "Your pickup includes 15 minutes of free waiting, starting at your agreed pickup time. Waiting after that is charged at the rate confirmed before you book.",
  },
  {
    id: "pickup-cant-find-driver",
    question: "What should I do if I can’t find my driver?",
    answer: `Stay in a clearly signed spot in arrivals and call ${PRIMARY_PHONE.display} or message us on WhatsApp. Tell us your terminal and the nearest landmark so we can guide you to your driver.`,
  },
  {
    id: "pickup-name-board",
    question: "Will my driver hold a name board?",
    answer:
      "Depending on your booking, your driver meets you inside the arrivals hall with a name board, or at a pickup point agreed when you book. Your confirmation shows which applies.",
  },
];

// Heathrow departures: /airport-transfers/heathrow-drop-offs.
export const DROPOFF_FAQS: Faq[] = [
  {
    id: "dropoff-charge",
    question: "Is the Heathrow drop-off charge included?",
    answer:
      "The Heathrow drop-off charge isn’t part of the journey price. It’s added to your quote, so you see the full cost before you book.",
  },
  {
    id: "dropoff-collection-time",
    question: "When will you collect me for my flight?",
    answer:
      "Tell us your flight time and terminal when you book, and we’ll agree a collection time planned around your flight. Your driver collects you from your door at that time.",
  },
  {
    id: "dropoff-early",
    question: "Can you take me to Heathrow for an early-morning flight?",
    answer:
      "Yes. We run 24/7, so we can collect you for early-morning and late-night departures to Heathrow Terminals 2, 3, 4 and 5.",
  },
];

// Terminals: /airport-transfers/terminal-guides.
export const TERMINAL_FAQS: Faq[] = [
  {
    id: "terminals-covered",
    question: "Which Heathrow terminals do you cover?",
    answer:
      "We cover all four passenger terminals at Heathrow: Terminals 2, 3, 4 and 5, for both arrivals and departures.",
  },
  {
    id: "terminal-meeting-point",
    question: "Does my meeting point depend on my terminal?",
    answer:
      "Yes. Your meeting point is confirmed for your terminal when you book: inside arrivals with a name board, or at an agreed pickup point.",
  },
  {
    id: "terminal-change",
    question: "What if my terminal changes?",
    answer: `Contact us as soon as you know, on ${PRIMARY_PHONE.display} or WhatsApp, and we’ll update your pickup or drop-off details.`,
  },
];

// Vehicles: /our-vehicles.
export const VEHICLE_FAQS: Faq[] = [
  {
    id: "vehicle-six-passengers",
    question: "Which vehicle fits 6 passengers?",
    answer:
      "Our MPV (a Ford Galaxy or similar) seats up to 6 passengers, with room for 4 large suitcases and 2 small bags.",
  },
  {
    id: "vehicle-most-luggage",
    question: "Which car has the most luggage space for 4 people?",
    answer:
      "The estate (a Skoda Superb Estate or similar) takes 4 passengers with 3 large suitcases and 2 small bags. A saloon takes 4 passengers with 2 large suitcases and 2 small bags.",
  },
  {
    id: "vehicle-executive",
    question: "Do you offer executive cars?",
    answer:
      "Yes. Our executive option is a Mercedes E-Class or similar, for up to 4 passengers with 2 large suitcases and 2 small bags.",
  },
  {
    id: "vehicle-exact-model",
    question: "Can I choose an exact car model?",
    answer:
      "The models shown are examples, so you’ll get that car or a similar one. Choose the vehicle type that fits your passengers and luggage, and we’ll confirm it when you book.",
  },
];

const areaList = (region: (typeof AREA_REGIONS)[number]["id"]) =>
  AREAS.filter((a) => a.region === region)
    .map((a) => a.name)
    .join(", ");

// Coverage: /areas.
export const AREA_FAQS: Faq[] = [
  {
    id: "areas-covered",
    question: "Which areas do you cover for Heathrow transfers?",
    answer: `We cover North London (${areaList("north")}) and West London (${areaList("west")}), for journeys to and from Heathrow.`,
  },
  {
    id: "areas-not-listed",
    question: "Do you cover areas that aren’t listed?",
    answer:
      "Call us to check. For journeys beyond North and West London, such as the South East, Oxford or Cambridge, see our long-distance airport transfers.",
  },
  {
    id: "areas-home-pickup",
    question: "Can you collect me from home for an early flight?",
    answer: "Yes. We run 24/7 and collect you from your door at a time planned around your flight.",
  },
];

// Service pages.
export const FAMILY_FAQS: Faq[] = [
  {
    id: "family-child-seats",
    question: "Do you provide child seats?",
    answer:
      "Yes, child seats are available on request at no extra cost. Tell us each child’s age when you book so we can arrange a suitable seat.",
  },
  {
    id: "family-extra-stops",
    question: "Can you collect from more than one address?",
    answer:
      "Yes. Give us every collection address when you book, and we’ll include the extra stops in your quote.",
  },
  {
    id: "family-largest-vehicle",
    question: "How many people fit in your largest vehicle?",
    answer:
      "Our MPV seats up to 6 passengers with 4 large suitcases and 2 small bags. Tell us your group size and luggage and we’ll help choose the right vehicle.",
  },
];

export const HOTEL_FAQS: Faq[] = [
  {
    id: "hotel-from-heathrow",
    question: "Can you take me from Heathrow to my hotel?",
    answer:
      "Yes. Your driver meets you at Heathrow, inside arrivals with a name board or at an agreed pickup point, and takes you to your hotel.",
  },
  {
    id: "hotel-areas",
    question: "Which hotels do you cover?",
    answer:
      "Hotels near Heathrow (Bath Road, Harlington, Hayes and Hounslow), in central London (Paddington, Kensington, Westminster and King’s Cross) and across North and West London.",
  },
  {
    id: "hotel-return",
    question: "Can I book my return to Heathrow at the same time?",
    answer: "Yes. Give us both dates and times when you book and we’ll arrange both journeys.",
  },
];

export const AIRPORT_FAQS: Faq[] = [
  {
    id: "airports-covered",
    question: "Which airports do you connect Heathrow with?",
    answer:
      "We arrange road transfers between Heathrow and Gatwick, Stansted, Luton and London City airports, in either direction.",
  },
  {
    id: "airports-connection-time",
    question: "Can you guarantee I’ll make my connection?",
    answer:
      "We plan around both flights, but we can’t guarantee connection times. Allow time for passport control, baggage collection, road traffic and your next airline’s check-in deadline.",
  },
  {
    id: "airports-fixed-price",
    question: "Is the price fixed for an airport-to-airport transfer?",
    answer:
      "Yes, once your quote is confirmed the price is fixed. There’s no meter, so traffic doesn’t change the fare.",
  },
];

export const LONG_DISTANCE_FAQS: Faq[] = [
  {
    id: "long-distance-where",
    question: "Where can you take me from Heathrow?",
    answer:
      "Common long-distance journeys include the South East (such as Brighton, Southampton, Portsmouth, Kent, Surrey and Sussex), Oxford and Cambridge. Ask us if your town isn’t listed.",
  },
  {
    id: "long-distance-price",
    question: "Is a long-distance fare fixed?",
    answer:
      "Yes, your fare is fixed when confirmed. Any additional waiting or changes are charged as explained before you book.",
  },
  {
    id: "long-distance-stops",
    question: "Can I stop on the way?",
    answer: "Yes. Requested stops are agreed in your quote before you book.",
  },
];

export const BUSINESS_FAQS: Faq[] = [
  {
    id: "business-book-for-others",
    question: "Can I book a Heathrow transfer for a colleague or client?",
    answer:
      "Yes. Book for yourself, a colleague or a visiting client. Give us the passenger’s name, mobile number and flight details so the driver can meet them.",
  },
  {
    id: "business-standard-vs-executive",
    question: "What’s the difference between standard and executive?",
    answer:
      "Executive is a more premium car (a Mercedes E-Class or similar) with a quieter cabin for clients, VIP guests or work between meetings. Pickup and return arrangements are the same as a standard booking.",
  },
  {
    id: "business-returns",
    question: "Can I book outbound and return journeys together?",
    answer: "Yes. Return journeys can be arranged at the same time as your outbound trip.",
  },
];

// Templated questions for each area page.
export function areaFaqs(area: string, region: string): Faq[] {
  return [
    {
      id: "area-covered",
      question: `Do you cover ${area} for Heathrow transfers?`,
      answer: `Yes. Heathrow Minicab collects from homes, hotels and offices in ${area}, ${region}, and takes you to Heathrow Terminals 2, 3, 4 or 5. We also bring you home to ${area} from Heathrow arrivals.`,
    },
    {
      id: "area-early-late",
      question: `Can you pick me up in ${area} for an early or late flight?`,
      answer: `Yes. We run 24/7, so we can collect you in ${area} for early-morning and late-night flights, at a time planned around your departure.`,
    },
    {
      id: "area-arrivals",
      question: `Can you meet me at Heathrow and take me home to ${area}?`,
      answer: `Yes. Your driver meets you inside arrivals with a name board or at an agreed pickup point. We monitor your flight, and your pickup includes 15 minutes of free waiting from the agreed time.`,
    },
    {
      id: "area-price",
      question: `How do I get a price from ${area} to Heathrow?`,
      answer: `Book online, call ${PRIMARY_PHONE.display} or message us on WhatsApp with your address, date, time and terminal. The price depends on time, day and route, and is fixed once confirmed.`,
    },
  ];
}

// Every group, in /faqs page order.
export const FAQ_GROUPS: { id: string; title: string; items: Faq[] }[] = [
  { id: "general", title: "Booking and general", items: FAQS },
  { id: "pricing", title: "Prices and what’s included", items: PRICING_FAQS },
  { id: "pickups", title: "Heathrow pickups", items: PICKUP_FAQS },
  { id: "drop-offs", title: "Heathrow drop-offs", items: DROPOFF_FAQS },
  { id: "terminals", title: "Heathrow terminals", items: TERMINAL_FAQS },
  { id: "vehicles", title: "Vehicles and luggage", items: VEHICLE_FAQS },
  { id: "areas", title: "Areas we cover", items: AREA_FAQS },
  { id: "families", title: "Families and groups", items: FAMILY_FAQS },
  { id: "hotels", title: "Hotel transfers", items: HOTEL_FAQS },
  { id: "airports", title: "Airport-to-airport transfers", items: AIRPORT_FAQS },
  { id: "long-distance", title: "Long-distance transfers", items: LONG_DISTANCE_FAQS },
  { id: "business", title: "Business travel", items: BUSINESS_FAQS },
];
