import type { BANNER_IMAGES } from "@/components/PageBanner";
import type { Faq } from "@/lib/faqs";

// Travel guides for research searches ("how early to leave for Heathrow", "Heathrow drop-off
// charge"). Every airport fact comes from the heathrow.com page listed in the guide's sources,
// checked on the guide's lastChecked date; re-check the facts before changing that date.

export type GuideSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  // Airlines grouped by terminal, rendered as one card per terminal.
  terminals?: { terminal: string; airlines: string[]; note?: string }[];
};

export type Guide = {
  slug: string;
  title: string; // the H1
  seoTitle: string;
  description: string;
  crumb: string;
  image: keyof typeof BANNER_IMAGES;
  lastChecked: string; // YYYY-MM-DD
  answer: string; // the short direct answer under the banner
  sections: GuideSection[];
  faqs: Faq[];
  related: { href: string; label: string; hint: string }[];
  sources: { href: string; label: string }[];
};

// British Airways routes that Heathrow's terminal finder lists at Terminal 3 (all others: T5).
const BA_TERMINAL_3 = [
  "Atlanta",
  "Bahrain",
  "Bermuda",
  "Bucharest",
  "Budapest",
  "Cologne",
  "Dallas Fort Worth",
  "Denver",
  "Figari",
  "Gibraltar",
  "Gothenburg",
  "Grand Cayman",
  "Hannover",
  "Krakow",
  "Luxembourg",
  "Marseille",
  "Olbia",
  "Oslo",
  "Perugia",
  "Phoenix",
  "Prague",
  "Providenciales",
  "Riga",
  "Rimini",
  "São Paulo",
  "Sofia",
  "Stuttgart",
  "Tirana",
  "Toulouse",
  "Valencia",
  "Vienna",
];

export const GUIDES: Guide[] = [
  {
    slug: "how-early-to-leave-for-heathrow",
    title: "How early should you leave for Heathrow?",
    seoTitle: "How Early to Get to Heathrow: Arrival Times by Flight",
    description:
      "Heathrow recommends arriving 2 hours before UK and European flights and 3 hours before long-haul. How to work out your pickup time from North or West London.",
    crumb: "How early to leave",
    image: "early",
    lastChecked: "2026-10-21",
    answer:
      "Heathrow recommends arriving at the airport two hours before flights within the UK or Europe, and three hours before long-haul international flights. Work back from that time to set your pickup: your journey to the terminal comes on top.",
    sections: [
      {
        title: "Heathrow’s recommended arrival times",
        paragraphs: [
          "Heathrow’s own guidance is a simple rule of thumb, and it lines up with when most airlines open bag drop.",
        ],
        bullets: [
          "UK and European flights: arrive about 2 hours before departure. Bag drop usually opens around 2 hours before short-haul flights.",
          "Long-haul flights: arrive about 3 hours before departure. Bag drop usually opens around 3 hours before long-haul flights.",
          "Boarding often starts 30 to 45 minutes before short-haul departures and 45 to 60 minutes before long-haul departures, so you need to be through security well before then.",
        ],
      },
      {
        title: "Working out your pickup time",
        paragraphs: [
          "Start from the time you want to be at the terminal, then allow for the road journey from your address. For a 10:00 long-haul flight, for example, you’d aim to be at the terminal by about 07:00, and your pickup time is set back from there.",
          "How far back depends on where you are, which terminal you’re flying from and the time of day. From West London areas such as Hounslow, Hayes or Southall you’re on Heathrow’s side of the city. From North London, the route usually involves the A406 North Circular, the M1, the A40 or the M25, which are busy at rush hour.",
          "When you book with us, we plan your collection time around your flight, terminal and address, so you don’t have to work it out alone.",
        ],
      },
      {
        title: "When to allow extra time",
        bullets: [
          "School holidays and bank holiday weekends, when the terminals and roads are busier.",
          "Weekday rush hours, if your pickup falls between about 7 and 10 in the morning or 4 and 7 in the evening.",
          "Travelling with children, a lot of luggage or anyone who needs assistance at the airport.",
          "If you haven’t checked in online, or need to drop bags at a desk rather than a self-service point.",
        ],
        paragraphs: [
          "Heathrow publishes live security wait times on heathrow.com, which are worth a look on the day.",
        ],
      },
    ],
    faqs: [
      {
        id: "guide-early-europe",
        question: "How early should I get to Heathrow for a European flight?",
        answer:
          "Heathrow recommends arriving about two hours before flights within the UK or Europe. Check your airline’s bag drop closing time, especially if you’re checking in luggage.",
      },
      {
        id: "guide-early-long-haul",
        question: "How early should I get to Heathrow for a long-haul flight?",
        answer:
          "Heathrow recommends arriving about three hours before long-haul international flights.",
      },
      {
        id: "guide-early-pickup-time",
        question: "What time will my minicab collect me?",
        answer:
          "We set your collection time when you book, based on your flight time, terminal, pickup address and the time of day, so you reach the terminal in good time.",
      },
    ],
    related: [
      {
        href: "/airport-transfers/heathrow-drop-offs",
        label: "Heathrow drop-offs",
        hint: "How our door-to-terminal journeys are planned.",
      },
      {
        href: "/guides/which-heathrow-terminal",
        label: "Which terminal is my airline?",
        hint: "Find your terminal before you set off.",
      },
      {
        href: "/areas",
        label: "Areas we cover",
        hint: "North and West London pickup areas.",
      },
    ],
    sources: [
      {
        href: "https://www.heathrow.com/heathrow-blog/top-tips-for-timing-your-airport-journey",
        label: "Heathrow: Top tips for timing your airport journey",
      },
    ],
  },
  {
    slug: "heathrow-drop-off-charge",
    title: "Heathrow drop-off charge explained",
    seoTitle: "Heathrow Drop-Off Charge: £7 Fee, How to Pay & Taxis",
    description:
      "Heathrow’s Terminal Drop-Off Charge is £7 per visit at Terminals 2, 3, 4 and 5. How to pay, the penalty, Blue Badge discount and how it works with a minicab.",
    crumb: "Drop-off charge",
    image: "t4",
    lastChecked: "2026-10-21",
    answer:
      "Heathrow charges £7 every time a vehicle enters the drop-off area outside Terminals 2, 3, 4 or 5, 24 hours a day. Taxis and private hire cars pay it too. Dropping off at a Heathrow Park & Ride car park is free.",
    sections: [
      {
        title: "How the charge works",
        bullets: [
          "£7 each time a vehicle enters a terminal drop-off area. Entering again means paying again.",
          "It applies at all four terminals, 24 hours a day, 365 days a year.",
          "Only the drop-off zones directly in front of the terminals are charged. Drop-offs at the Park & Ride car parks are free.",
          "You can’t pay at an airport ticket machine or in the drop-off zone itself.",
        ],
      },
      {
        title: "How to pay, and what happens if you don’t",
        bullets: [
          "Pay online, by Heathrow’s automated phone line, or automatically with AutoPay.",
          "Card payments only; cash and cheques aren’t accepted.",
          "If you pay after your visit, payment must be made by midnight the next day.",
          "Missing the deadline leads to an £80 Parking Charge, reduced to £40 if paid within 14 days.",
        ],
      },
      {
        title: "Blue Badge discount",
        paragraphs: [
          "Holders of a valid UK or EEA Blue Badge can apply for a 100% discount, even if they don’t drive or own a car. If you’re arriving by taxi or private hire, the discount is applied using that vehicle’s registration number, so mention it when you book.",
        ],
      },
      {
        title: "Drop-offs and pickups with a minicab",
        paragraphs: [
          "Heathrow’s charge applies to taxis and private hire vehicles every time they enter a terminal drop-off area. With us, the drop-off charge isn’t part of the journey price; it’s added to your quote, so you see the full cost before you book.",
          "Pickups are different: Heathrow doesn’t allow picking up or waiting in the forecourt drop-off areas. Drivers collect from Terminal Parking or a Park & Ride car park instead. At Terminal 4, pickups use the Terminal 4 Priority Pick-Up area or Zone A of the Park & Ride car park.",
        ],
      },
    ],
    faqs: [
      {
        id: "guide-charge-amount",
        question: "How much is the Heathrow drop-off charge?",
        answer:
          "£7 each time a vehicle enters the drop-off area outside Terminal 2, 3, 4 or 5. It applies 24 hours a day.",
      },
      {
        id: "guide-charge-taxis",
        question: "Do taxis and minicabs pay the Heathrow drop-off charge?",
        answer:
          "Yes. Heathrow says all taxis and private hire vehicles must pay the charge each time they enter the terminal drop-off zones. With us it’s added to your quote before you book.",
      },
      {
        id: "guide-charge-deadline",
        question: "When do I have to pay the drop-off charge?",
        answer:
          "If you pay after your visit, by midnight the next day. Otherwise Heathrow issues an £80 Parking Charge, reduced to £40 if paid within 14 days.",
      },
      {
        id: "guide-charge-free",
        question: "Is there a free way to drop off at Heathrow?",
        answer:
          "Yes. Dropping off at a Heathrow Park & Ride car park is free, though you then take the shuttle bus to the terminal.",
      },
    ],
    related: [
      {
        href: "/airport-transfers/heathrow-drop-offs",
        label: "Heathrow drop-offs",
        hint: "Door to departures, with the charge shown in your quote.",
      },
      {
        href: "/airport-transfers/heathrow-pickups",
        label: "Heathrow pickups",
        hint: "Where your driver meets you after you land.",
      },
      {
        href: "/airport-transfers/terminal-guides",
        label: "Terminal guides",
        hint: "Meeting points and parking for each terminal.",
      },
    ],
    sources: [
      {
        href: "https://www.heathrow.com/transport-and-directions/terminal-drop-off-charge",
        label: "Heathrow: Terminal Drop-Off Charge",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/passenger-pick-up",
        label: "Heathrow: Passenger pick-up",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-4",
        label: "Heathrow: Terminal 4 parking",
      },
    ],
  },
  {
    slug: "which-heathrow-terminal",
    title: "Which Heathrow terminal is my airline?",
    seoTitle: "Which Heathrow Terminal? Airlines at T2, T3, T4 & T5",
    description:
      "Which Heathrow terminal your airline uses: British Airways at T5 (some routes T3), Virgin Atlantic at T3, Qatar at T4, Lufthansa and United at T2, and more.",
    crumb: "Which terminal?",
    image: "t3",
    lastChecked: "2026-10-21",
    answer:
      "British Airways flies mostly from Terminal 5, with some routes from Terminal 3. Virgin Atlantic, American, Delta and Emirates use Terminal 3. Star Alliance airlines such as Lufthansa, United and Air Canada use Terminal 2, and Qatar Airways, Etihad, Air France and KLM use Terminal 4.",
    sections: [
      {
        title: "Airlines by terminal",
        paragraphs: [
          "The main airlines at each terminal, taken from Heathrow’s terminal finder, which lists every airline. Airlines occasionally move terminals, so always check your booking or the airline’s app before you travel.",
        ],
        terminals: [
          {
            terminal: "Terminal 2",
            airlines: [
              "Aegean Airlines",
              "Aer Lingus",
              "Air Canada",
              "Air China",
              "Air India",
              "ANA",
              "Asiana Airlines",
              "Austrian",
              "Brussels Airlines",
              "Croatia Airlines",
              "Egyptair",
              "Ethiopian Airlines",
              "Eurowings",
              "EVA Air",
              "Icelandair",
              "ITA Airways",
              "JetBlue",
              "Loganair",
              "LOT Polish Airlines",
              "Lufthansa",
              "SAS",
              "Singapore Airlines",
              "Swiss",
              "TAP Portugal",
              "Thai Airways",
              "Turkish Airlines",
              "United Airlines",
            ],
          },
          {
            terminal: "Terminal 3",
            airlines: [
              "Virgin Atlantic",
              "American Airlines",
              "Delta Air Lines",
              "Emirates",
              "Qantas",
              "Cathay Pacific",
              "Japan Airlines",
              "Finnair",
              "LATAM Airlines",
              "Alaska Airlines",
              "Aeromexico",
              "IndiGo",
              "Royal Jordanian",
              "SriLankan Airlines",
              "China Airlines",
              "Hainan Airlines",
              "British Airways (some routes)",
            ],
          },
          {
            terminal: "Terminal 4",
            airlines: [
              "Qatar Airways",
              "Etihad Airways",
              "Air France",
              "KLM",
              "Korean Air",
              "Malaysia Airlines",
              "Saudia",
              "Gulf Air",
              "Kuwait Airways",
              "Oman Air",
              "Pakistan International Airlines",
              "Royal Air Maroc",
              "Kenya Airways",
              "RwandAir",
              "China Eastern",
              "China Southern",
              "Vietnam Airlines",
              "El Al",
              "Vueling",
              "WestJet",
            ],
          },
          {
            terminal: "Terminal 5",
            airlines: ["British Airways (most routes)", "Iberia"],
          },
        ],
      },
      {
        title: "British Airways flights from Terminal 3",
        paragraphs: [
          `Most British Airways flights use Terminal 5. Heathrow’s terminal finder lists these British Airways destinations at Terminal 3: ${BA_TERMINAL_3.join(", ")}.`,
          "If your British Airways flight is to one of these destinations, check the terminal on your booking and tell us when you book, so we drop you at the right one.",
        ],
      },
      {
        title: "Before you travel",
        bullets: [
          "Check the terminal on your booking confirmation or the airline’s app, and again on the day.",
          "Tell us your terminal and flight number when you book. If your terminal changes, let us know straight away.",
          "Codeshare flights leave from the operating airline’s terminal, which may not be the airline you booked with.",
        ],
      },
    ],
    faqs: [
      {
        id: "guide-terminal-ba",
        question: "Which terminal is British Airways at Heathrow?",
        answer:
          "Mostly Terminal 5. Heathrow’s terminal finder lists some British Airways routes, such as Atlanta, Prague and Vienna, at Terminal 3, so check your booking.",
      },
      {
        id: "guide-terminal-virgin",
        question: "Which terminal is Virgin Atlantic at Heathrow?",
        answer: "Terminal 3.",
      },
      {
        id: "guide-terminal-emirates",
        question: "Which terminal is Emirates at Heathrow?",
        answer: "Terminal 3.",
      },
      {
        id: "guide-terminal-qatar",
        question: "Which terminal is Qatar Airways at Heathrow?",
        answer: "Terminal 4.",
      },
    ],
    related: [
      {
        href: "/airport-transfers/terminal-guides",
        label: "Terminal guides",
        hint: "Meeting points and parking at Terminals 2, 3, 4 and 5.",
      },
      {
        href: "/guides/how-early-to-leave-for-heathrow",
        label: "How early to leave",
        hint: "Recommended arrival times and your pickup time.",
      },
      {
        href: "/airport-transfers/heathrow-pickups",
        label: "Heathrow pickups",
        hint: "How your driver meets you in arrivals.",
      },
    ],
    sources: [
      {
        href: "https://www.heathrow.com/at-the-airport/terminal-guides/which-terminal",
        label: "Heathrow: Which terminal?",
      },
    ],
  },
];

export const findGuide = (slug: string) => GUIDES.find((guide) => guide.slug === slug);
