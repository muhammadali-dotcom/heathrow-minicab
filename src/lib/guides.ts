import type { BANNER_IMAGES } from "@/components/PageBanner";
import type { Faq } from "@/lib/faqs";

// Travel guides for research searches ("how early to leave for Heathrow", "Heathrow drop-off
// charge"). Every airport fact comes from the heathrow.com page listed in the guide's sources,
// checked on the guide's lastChecked date; re-check the facts before changing that date.

export type GuideSection = {
  title: string;
  // Stable anchor for linking to this section from other pages (e.g. "terminal-3").
  id?: string;
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
    seoTitle: "Heathrow Drop-Off Charge: £7 at T2, T3, T4 & T5, How to Pay",
    description:
      "Heathrow’s drop-off charge is £7 per visit at Terminals 2, 3, 4 and 5. Where each terminal’s drop-off is, how to pay online or by phone, the deadline and taxis.",
    crumb: "Drop-off charge",
    image: "t4",
    lastChecked: "2026-11-09",
    answer:
      "Heathrow charges £7 every time a vehicle enters the drop-off area outside Terminals 2, 3, 4 or 5, 24 hours a day. It’s the same £7 at every terminal, paid the same way: online, by phone or with AutoPay, by midnight the next day. Taxis and private hire cars pay it too. Dropping off at a Heathrow Park & Ride car park is free.",
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
          "Pay online, by Heathrow’s automated phone line (0330 008 5600), or automatically with AutoPay.",
          "Card payments only; cash and cheques aren’t accepted.",
          "If you pay after your visit, payment must be made by midnight the next day.",
          "Missing the deadline leads to an £80 Parking Charge, reduced to £40 if paid within 14 days.",
        ],
      },
      {
        id: "terminal-2",
        title: "Terminal 2 drop-off: where to go and how to pay",
        bullets: [
          "The Terminal 2 drop-off area is off Constellation Way: follow the up ramp to reach it.",
          "Each visit costs £7, paid online or by phone afterwards, by midnight the next day.",
          "Free alternative: the Terminal 2 Park & Ride car park, free for the first 29 minutes.",
          "Pickups aren’t allowed on the forecourt; use Terminal 2 Terminal Parking (formerly Short Stay) or the Park & Ride.",
        ],
      },
      {
        id: "terminal-3",
        title: "Terminal 3 drop-off: where to go and how to pay",
        bullets: [
          "To reach the Terminal 3 drop-off zone, follow Cosmopolitan Way on to Camborne Road and join one of the four drop-off lanes.",
          "Each visit costs £7, paid online or by phone afterwards, by midnight the next day.",
          "Free alternative: the Terminal 3 Park & Ride car park, free for the first 29 minutes, with a bus to the terminal.",
          "Pickups aren’t allowed on the forecourt; the nearest pickup point is Terminal 3 Terminal Parking (formerly Short Stay).",
        ],
      },
      {
        id: "terminal-4",
        title: "Terminal 4 drop-off: where to go and how to pay",
        bullets: [
          "Follow Stratford Road to the Terminal 4 drop-off area; at the top of the ramp there are three lanes.",
          "Each visit costs £7. It can’t be paid at the drop-off zone: pay online or by phone, by midnight the next day.",
          "The Terminal 4 multi-storey car park closed from 23 June 2026 for redevelopment. Passenger parking moved to Zone A of the Terminal 4 Park & Ride, which is free for up to 2 hours.",
          "Pickups use the Terminal 4 Priority Pick-Up area (paid, from £7 for up to 10 minutes) or Park & Ride Zone A, not the drop-off forecourt.",
        ],
      },
      {
        id: "terminal-5",
        title: "Terminal 5 drop-off: where to go and how to pay",
        bullets: [
          "The Terminal 5 drop-off zone is reached along Wayfarer Road; at the top of the ramp it splits into two drop-off lanes.",
          "Each visit costs £7, paid online or by phone afterwards, by midnight the next day.",
          "Free alternative: the Terminal 5 Park & Ride car park, free for the first 29 minutes, with a bus to the terminal.",
          "Pickups aren’t allowed on the forecourt; the nearest pickup point is Terminal 5 Terminal Parking (Car Park 5), about a 2-minute walk from the terminal.",
        ],
      },
      {
        title: "Blue Badge discount",
        paragraphs: [
          "Holders of a valid UK or EEA Blue Badge can apply for a 100% discount, even if they don’t drive or own a car. Apply in advance. If you’re arriving by taxi or private hire, the discount is applied using that vehicle’s registration number, so mention it when you book.",
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
        id: "guide-charge-pay-terminal",
        question: "How do I pay the Terminal 2, 3 or 5 drop-off charge?",
        answer:
          "The same way at every terminal: online, by Heathrow’s automated phone line or with AutoPay, by card, by midnight the day after your visit. You can’t pay at the drop-off zone or at a ticket machine.",
      },
      {
        id: "guide-charge-t2-where",
        question: "Where is the Terminal 2 drop-off?",
        answer:
          "Off Constellation Way: follow the up ramp to the Terminal 2 drop-off area. Each visit costs £7.",
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
      {
        href: "/guides/picking-up-from-heathrow",
        label: "Picking someone up",
        hint: "Where to park and wait, since pickups aren’t allowed on the forecourt.",
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
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-2",
        label: "Heathrow: Terminal 2 parking",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-3",
        label: "Heathrow: Terminal 3 parking",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-4",
        label: "Heathrow: Terminal 4 parking",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-5",
        label: "Heathrow: Terminal 5 parking",
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
  {
    slug: "picking-up-from-heathrow",
    title: "Picking someone up from Heathrow: where to park and wait",
    seoTitle: "Heathrow Pick-Up: Where to Park and Wait for Arrivals",
    description:
      "You can’t pick up on Heathrow’s terminal forecourts. Where to park and wait at Terminals 2, 3, 4 and 5, what it costs, the free Park & Ride and meeting points.",
    crumb: "Picking someone up",
    image: "arrival",
    lastChecked: "2026-11-12",
    answer:
      "Heathrow doesn’t allow picking up or waiting on the terminal forecourts. Park in the terminal’s Terminal Parking car park (formerly Short Stay) and meet your passenger in arrivals, or use a Park & Ride car park, which is free for the first 29 minutes. At Terminal 4, use the Priority Pick-Up area outside arrivals or Zone A of the Park & Ride, free for up to 2 hours.",
    sections: [
      {
        title: "No pickups on the forecourt",
        bullets: [
          "The forecourts directly outside the terminals are for drop-offs only. Heathrow says picking up passengers there is prohibited, and unattended cars are removed by the police.",
          "Every visit to a forecourt drop-off area is charged £7, so circling round to wait costs £7 each time.",
          "Instead, park in a car park and meet your passenger inside the terminal.",
        ],
      },
      {
        id: "terminal-parking",
        title: "Terminal Parking at Terminals 2, 3 and 5",
        paragraphs: [
          "The nearest place to wait is the terminal’s own Terminal Parking car park, formerly called Short Stay, a short walk from arrivals. Pay at the pay-on-foot machines before you leave; pickup parking isn’t booked online.",
        ],
        bullets: [
          "Up to 29 minutes: £8.50",
          "30 to 44 minutes: £12.50",
          "45 to 59 minutes: £16.00",
          "Each hour or part hour after that: £8.50",
        ],
      },
      {
        id: "park-and-ride",
        title: "The free option: Park & Ride",
        bullets: [
          "Heathrow’s Park & Ride car parks are free for the first 29 minutes, then £10.00 up to 1 hour 59 minutes.",
          "Blue Badge holders get 2 hours free.",
          "Shuttle buses run every 15 minutes from the terminal doors, so allow time for your passenger to make the trip.",
        ],
      },
      {
        id: "terminal-4",
        title: "Terminal 4: Priority Pick-Up or Zone A",
        bullets: [
          "Terminal 4’s multi-storey car park closed on 23 June 2026, so there’s no Terminal Parking there.",
          "Priority Pick-Up is outside the Terminal 4 arrivals hall: follow Salisbury Road and stay in the two right-hand lanes at the Terminal 4 roundabout. Up to 10 minutes costs £7.00, 11 to 29 minutes £14.00 and 30 to 60 minutes £25.00. Pay online, by phone or with AutoPay by midnight the next day.",
          "Blue Badge discounts don’t apply to Priority Pick-Up.",
          "Free option: Zone A of the Terminal 4 Park & Ride, free for up to 2 hours, with free shuttle buses to the terminal every five minutes.",
        ],
      },
      {
        id: "meeting-points",
        title: "Where to meet your passenger",
        bullets: [
          "Terminal 2: opposite the international arrivals exit.",
          "Terminal 3: in the seating area on the ground floor of Arrivals.",
          "Terminal 4: next to WHSmith on the ground floor of Arrivals.",
          "Terminal 5: the north meeting point opposite Travelex, or the south meeting point near Costa Coffee.",
        ],
      },
      {
        title: "Or let a driver do the waiting",
        paragraphs: [
          "If you’d rather not drive to Heathrow, book a pickup instead. We monitor the flight, your driver meets the passenger inside arrivals with a name board or at an agreed pickup point, and the pickup includes 15 minutes of free waiting from the agreed time. Any parking or pickup charge is shown in your quote before you book.",
        ],
      },
    ],
    faqs: [
      {
        id: "guide-pickup-forecourt",
        question: "Can I pick someone up outside the terminal at Heathrow?",
        answer:
          "No. Heathrow doesn’t allow pickups or waiting on the terminal forecourts. Use the terminal’s Terminal Parking car park, a Park & Ride car park, or at Terminal 4 the Priority Pick-Up area.",
      },
      {
        id: "guide-pickup-free",
        question: "Is there a free way to pick someone up from Heathrow?",
        answer:
          "Yes. Park & Ride car parks are free for the first 29 minutes, and at Terminal 4, Zone A of the Park & Ride is free for up to 2 hours. Your passenger takes the shuttle bus from the terminal.",
      },
      {
        id: "guide-pickup-cost",
        question: "How much does it cost to wait in Terminal Parking?",
        answer:
          "Heathrow lists £8.50 for up to 29 minutes, £12.50 for 30 to 44 minutes and £16.00 for 45 to 59 minutes at Terminals 2, 3 and 5, paid at the pay-on-foot machines. Prices can change.",
      },
      {
        id: "guide-pickup-t4",
        question: "Where do I pick someone up at Terminal 4?",
        answer:
          "At the Priority Pick-Up area outside the arrivals hall (from £7.00 for up to 10 minutes), or for free in Zone A of the Terminal 4 Park & Ride for up to 2 hours.",
      },
    ],
    related: [
      {
        href: "/airport-transfers/heathrow-pickups",
        label: "Heathrow pickups",
        hint: "Book a driver to meet your passenger in arrivals.",
      },
      {
        href: "/guides/heathrow-terminal-4-changes",
        label: "Terminal 4 changes",
        hint: "Parking, pick-up and drop-off since the car park closed.",
      },
      {
        href: "/airport-transfers/terminal-guides",
        label: "Terminal guides",
        hint: "Meeting points and parking for each terminal.",
      },
    ],
    sources: [
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/passenger-pick-up",
        label: "Heathrow: Passenger pick-up",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-4-priority-pick-up",
        label: "Heathrow: Terminal 4 Priority Pick-Up",
      },
      {
        href: "https://www.heathrow.com/arrivals/meeting-points",
        label: "Heathrow: Meeting points",
      },
    ],
  },
  {
    slug: "heathrow-terminal-4-changes",
    title: "Heathrow Terminal 4 changes: parking, pick-up and drop-off",
    seoTitle: "Heathrow Terminal 4 Changes: Parking, Pick-Up & Drop-Off",
    description:
      "Heathrow Terminal 4’s car park closed on 23 June 2026. Where to park now, the Priority Pick-Up area, free Zone A parking and how drop-off works.",
    crumb: "Terminal 4 changes",
    image: "t4",
    lastChecked: "2026-11-12",
    answer:
      "Heathrow Terminal 4’s multi-storey car park closed on 23 June 2026 for redevelopment. Passenger parking has moved to Zone A of the Terminal 4 Park & Ride, free for up to 2 hours, with free shuttle buses every five minutes. Quick pickups can use the Priority Pick-Up area outside arrivals, and drop-offs carry on as before, with the £7 charge.",
    sections: [
      {
        title: "What has changed",
        bullets: [
          "The Terminal 4 multi-storey car park, used for Terminal Parking and Meet & Greet Parking, closed on 23 June 2026.",
          "Heathrow says it’s part of a redevelopment to improve the terminal’s facilities, including a new car park, an improved drop-off area and modernised facilities.",
          "Meet & Greet Parking isn’t available at Terminal 4.",
        ],
      },
      {
        id: "zone-a",
        title: "Parking now: Park & Ride Zone A",
        bullets: [
          "All passenger parking for Terminal 4 has moved to Zone A of the Terminal 4 Park & Ride.",
          "Up to 2 hours’ parking is free in Zone A only. After that, Park & Ride drive-up prices apply; check Heathrow’s site for current rates.",
          "Free shuttle buses run every five minutes between Zone A and Terminal 4, taking as little as six minutes. All buses are fully accessible, and there’s an assisted services hub in Zone A.",
          "Zones B to D are for pre-booked parking, with shuttle buses every 15 minutes.",
        ],
      },
      {
        id: "priority-pick-up",
        title: "Priority Pick-Up outside arrivals",
        bullets: [
          "The Priority Pick-Up area is outside the Terminal 4 arrivals hall. Follow Salisbury Road and stay in the two right-hand lanes at the Terminal 4 roundabout.",
          "Charges per visit: up to 10 minutes £7.00, 11 to 29 minutes £14.00, 30 to 60 minutes £25.00, then £25.00 for each extra hour, up to £200.00 a day.",
          "There are no barriers. Pay by card online, by phone or with AutoPay by midnight the next day; non-payment brings an £80 Parking Charge, reduced to £40 if paid within 14 days.",
          "Blue Badge discounts don’t apply to Priority Pick-Up.",
        ],
      },
      {
        id: "drop-off",
        title: "Dropping off at Terminal 4",
        bullets: [
          "Drop-offs continue as normal in the left-hand lane; the right-hand lane is Priority Pick-Up, for arrivals collections only.",
          "The usual £7 Terminal Drop-Off Charge applies to each visit.",
          "Pickups aren’t allowed in the drop-off area.",
        ],
      },
      {
        title: "Travelling with a minicab",
        paragraphs: [
          "Nothing changes for you when you book a transfer: your driver handles the parking and pickup arrangements. For Terminal 4 arrivals, Heathrow’s public meeting point is next to WHSmith on the ground floor of Arrivals, and your booking confirmation gives your exact meeting instruction. Any parking or pickup charge is shown in your quote before you book.",
        ],
      },
    ],
    faqs: [
      {
        id: "guide-t4-car-park",
        question: "Is the Terminal 4 car park closed?",
        answer:
          "Yes. Heathrow’s Terminal 4 multi-storey car park closed on 23 June 2026 for redevelopment. Passenger parking has moved to Zone A of the Terminal 4 Park & Ride.",
      },
      {
        id: "guide-t4-where-park",
        question: "Where do I park at Terminal 4 now?",
        answer:
          "In Zone A of the Terminal 4 Park & Ride, which is free for up to 2 hours, with free shuttle buses to the terminal every five minutes.",
      },
      {
        id: "guide-t4-priority-cost",
        question: "How much is Terminal 4 Priority Pick-Up?",
        answer:
          "£7.00 for up to 10 minutes, £14.00 for 11 to 29 minutes and £25.00 for 30 to 60 minutes, paid online, by phone or with AutoPay by midnight the next day.",
      },
      {
        id: "guide-t4-drop-off",
        question: "Can I still drop off at Terminal 4?",
        answer:
          "Yes. Drop-offs continue as normal in the left-hand lane, with the £7 Terminal Drop-Off Charge for each visit.",
      },
    ],
    related: [
      {
        href: "/guides/picking-up-from-heathrow",
        label: "Picking someone up",
        hint: "Where to park and wait at every terminal.",
      },
      {
        href: "/guides/heathrow-drop-off-charge",
        label: "Drop-off charge",
        hint: "The £7 charge and how to pay it.",
      },
      {
        href: "/airport-transfers/terminal-guides",
        label: "Terminal guides",
        hint: "Meeting points and parking for each terminal.",
      },
    ],
    sources: [
      {
        href: "https://www.heathrow.com/at-the-airport/changes-to-terminal-4",
        label: "Heathrow: Changes to Terminal 4",
      },
      {
        href: "https://www.heathrow.com/transport-and-directions/heathrow-parking/terminal-4-priority-pick-up",
        label: "Heathrow: Terminal 4 Priority Pick-Up",
      },
      {
        href: "https://www.heathrow.com/arrivals/meeting-points",
        label: "Heathrow: Meeting points",
      },
    ],
  },
  {
    slug: "heathrow-to-gatwick",
    title: "Heathrow to Gatwick: how to travel between the airports",
    seoTitle: "Heathrow to Gatwick: Coach, Train or Car Between Airports",
    description:
      "How to get from Heathrow to Gatwick: direct coaches, trains changing in central London, or a pre-booked car. What Heathrow advises about allowing time.",
    crumb: "Heathrow to Gatwick",
    image: "hero",
    lastChecked: "2026-11-12",
    answer:
      "There are no direct trains between Heathrow and Gatwick, which are 42 miles apart by road. Your options are a direct coach (National Express, FlixBus or The Airline), a train changing in central London at Victoria or Farringdon, or a pre-booked car from terminal to terminal. Heathrow advises allowing plenty of time for the connection.",
    sections: [
      {
        title: "By coach",
        bullets: [
          "Heathrow lists three coach operators running direct between the airports throughout the day: National Express, FlixBus and The Airline (Oxford Bus Company).",
          "Heathrow gives coach journey times of about 70 to 75 minutes; traffic can make it longer.",
          "National Express picks up at Heathrow Central Bus Station (for Terminals 2 and 3), Terminal 4 and Terminal 5, and calls at both Gatwick North and Gatwick South.",
        ],
      },
      {
        title: "By train",
        bullets: [
          "There’s no direct train: you change in central London, at Victoria or Farringdon.",
          "Via Farringdon: the Elizabeth line runs direct from Heathrow to Farringdon, then Thameslink to Gatwick.",
          "Via Victoria: Heathrow Express or the Elizabeth line to Paddington, the Circle line to Victoria, then the Gatwick Express or Southern to Gatwick.",
          "With heavy luggage, allow for changing lines and stations in central London.",
        ],
      },
      {
        title: "By pre-booked car",
        paragraphs: [
          "A pre-booked car takes you from one terminal to the other with no changes. Your driver meets you inside arrivals at Heathrow, helps with your luggage and drops you at your Gatwick terminal, and the price is fixed when you book. Journey time depends on traffic, especially on the M25.",
        ],
      },
      {
        title: "Allowing time for the connection",
        bullets: [
          "Heathrow recommends allowing plenty of time, including for passport control, reclaiming bags, check-in, security and waiting times.",
          "Allow for possible traffic or service delays, too.",
          "Journey times, fares and frequencies change, so check with the operator before you travel.",
        ],
      },
    ],
    faqs: [
      {
        id: "guide-lhr-lgw-train",
        question: "Is there a direct train from Heathrow to Gatwick?",
        answer:
          "No. Heathrow says there are no direct trains; you change in central London, at Victoria or Farringdon.",
      },
      {
        id: "guide-lhr-lgw-distance",
        question: "How far is Heathrow from Gatwick?",
        answer: "About 42 miles (68 km) by road, according to Heathrow.",
      },
      {
        id: "guide-lhr-lgw-coach",
        question: "Is there a coach from Heathrow to Gatwick?",
        answer:
          "Yes. National Express, FlixBus and The Airline run direct coaches between the airports throughout the day.",
      },
      {
        id: "guide-lhr-lgw-car",
        question: "Can you take me from Heathrow to Gatwick?",
        answer:
          "Yes. We run airport-to-airport transfers between Heathrow and Gatwick, with your driver meeting you in Heathrow arrivals and the price fixed when you book.",
      },
    ],
    related: [
      {
        href: "/services/airport-to-airport-transfers",
        label: "Airport-to-airport transfers",
        hint: "Heathrow to Gatwick, Stansted, Luton or London City by car.",
      },
      {
        href: "/guides/which-heathrow-terminal",
        label: "Which terminal?",
        hint: "Find your Heathrow terminal by airline.",
      },
      {
        href: "/guides/how-early-to-leave-for-heathrow",
        label: "How early to leave",
        hint: "Heathrow’s recommended arrival times.",
      },
    ],
    sources: [
      {
        href: "https://www.heathrow.com/transport-and-directions/travel-between-airports",
        label: "Heathrow: Travel between airports",
      },
      {
        href: "https://www.nationalexpress.com/en/airports/gatwick/heathrow-to-gatwick",
        label: "National Express: Heathrow to Gatwick",
      },
    ],
  },
];

export const findGuide = (slug: string) => GUIDES.find((guide) => guide.slug === slug);
