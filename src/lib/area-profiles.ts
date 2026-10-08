import type { Area } from "@/lib/areas";

type AreaProfile = {
  pickupContext: string;
  localPlaces: string[];
  routeContext: string;
  planningTip: string;
  localFaqs: { id: string; question: string; answer: string }[];
};

const northRoute =
  "For many North London journeys, drivers may consider roads such as the A1, A406 North Circular, M1, M25 or A40 depending on the terminal, time of day and live traffic.";

const westRoute =
  "For many West London journeys, drivers may consider roads such as the A4, A312, M4, Great West Road or local Heathrow access roads depending on the terminal, time of day and live traffic.";

export const AREA_PROFILES: Record<Area["slug"], AreaProfile> = {
  finchley: {
    pickupContext:
      "Finchley bookings often include home pickups around Finchley Central, North Finchley and Church End, plus collections near local stations and shopping parades.",
    localPlaces: [
      "Finchley Central Underground station",
      "North Finchley town centre",
      "Regents Park Road and Hendon Lane",
      "Avenue House and nearby residential streets",
    ],
    routeContext: northRoute,
    planningTip:
      "If your pickup is near a station, school or high street, share the exact entrance or nearest landmark so the driver can stop safely and find you quickly.",
    localFaqs: [
      {
        id: "finchley-central-pickup",
        question: "Can you collect from Finchley Central station?",
        answer:
          "Yes. Tell us the exact side, entrance or nearby landmark when booking, and we’ll confirm a practical pickup point for your driver.",
      },
      {
        id: "north-finchley-collection",
        question: "Do you cover North Finchley as well as Finchley Central?",
        answer:
          "Yes. We cover Finchley, including North Finchley, Finchley Central and nearby residential streets, for Heathrow transfers.",
      },
    ],
  },
  "east-finchley": {
    pickupContext:
      "East Finchley pickups often involve homes around the High Road, station-area collections and residential roads near the A1000.",
    localPlaces: [
      "East Finchley Underground station",
      "East Finchley High Road",
      "Phoenix Cinema area",
      "Great North Road and nearby residential roads",
    ],
    routeContext: northRoute,
    planningTip:
      "For station or High Road pickups, include the nearest shopfront, side road or entrance so your driver can avoid confusion on busier stretches.",
    localFaqs: [
      {
        id: "east-finchley-station",
        question: "Can you collect from East Finchley station?",
        answer:
          "Yes. Share the exact meeting point you want to use, and we’ll confirm whether it works for a safe, practical pickup.",
      },
      {
        id: "east-finchley-early",
        question: "Can you collect from East Finchley for an early Heathrow flight?",
        answer:
          "Yes. We run 24/7, so early-morning transfers from East Finchley can be arranged in advance.",
      },
    ],
  },
  hendon: {
    pickupContext:
      "Hendon bookings commonly include collections around Hendon Central, Brent Cross, The Burroughs and nearby residential streets.",
    localPlaces: [
      "Hendon Central Underground station",
      "Brent Cross shopping area",
      "The Burroughs",
      "Watford Way and surrounding residential roads",
    ],
    routeContext: northRoute,
    planningTip:
      "If you are near Brent Cross or Hendon Central, give a precise entrance, road name or building name so your pickup point is clear before travel.",
    localFaqs: [
      {
        id: "hendon-central-pickup",
        question: "Can you pick up near Hendon Central?",
        answer:
          "Yes. We cover Hendon Central and nearby roads; send the exact address or landmark when you book.",
      },
      {
        id: "brent-cross-pickup",
        question: "Do you collect from the Brent Cross area?",
        answer:
          "Yes. We can arrange Heathrow transfers from the Brent Cross area, subject to confirming a clear pickup point.",
      },
    ],
  },
  "mill-hill": {
    pickupContext:
      "Mill Hill transfers often start around Mill Hill Broadway, Station Road, Mill Hill East and residential roads across NW7.",
    localPlaces: [
      "Mill Hill Broadway station",
      "Station Road",
      "The Broadway",
      "Mill Hill East and nearby residential streets",
    ],
    routeContext: northRoute,
    planningTip:
      "For pickups around Mill Hill Broadway, tell us whether you need the station side, a shopfront on The Broadway or a nearby residential address.",
    localFaqs: [
      {
        id: "mill-hill-broadway-pickup",
        question: "Can you collect from Mill Hill Broadway?",
        answer:
          "Yes. We cover Mill Hill Broadway and Station Road; share the exact address or meeting point when booking.",
      },
      {
        id: "mill-hill-east",
        question: "Do you cover Mill Hill East?",
        answer:
          "Yes. We cover Mill Hill East as part of our Mill Hill Heathrow transfer service.",
      },
    ],
  },
  barnet: {
    pickupContext:
      "Barnet pickups often include High Barnet, Chipping Barnet, New Barnet and residential roads around the town centre.",
    localPlaces: [
      "High Barnet Underground station",
      "Chipping Barnet town centre",
      "The Spires area",
      "Barnet Hospital area",
    ],
    routeContext: northRoute,
    planningTip:
      "Barnet sits further north than some of our other London pickup areas, so allow extra planning margin for peak-time road conditions.",
    localFaqs: [
      {
        id: "high-barnet-pickup",
        question: "Can you collect from High Barnet?",
        answer:
          "Yes. We cover High Barnet and Chipping Barnet for Heathrow transfers, with collection details confirmed before travel.",
      },
      {
        id: "new-barnet-pickup",
        question: "Do you cover New Barnet too?",
        answer:
          "Yes. Tell us your exact New Barnet address or meeting point and we’ll confirm the transfer details.",
      },
    ],
  },
  edgware: {
    pickupContext:
      "Edgware transfers often involve Station Road, Edgware station, the Broadwalk area, Burnt Oak and surrounding residential streets.",
    localPlaces: [
      "Edgware Underground station",
      "The Broadwalk Centre",
      "Station Road",
      "Burnt Oak and nearby residential roads",
    ],
    routeContext: northRoute,
    planningTip:
      "Station Road and shopping-centre areas can be busy, so include a precise pickup landmark and mobile number when booking.",
    localFaqs: [
      {
        id: "edgware-station-pickup",
        question: "Can you collect from Edgware station?",
        answer:
          "Yes. Share the station side or nearby landmark, and we’ll confirm a practical pickup point.",
      },
      {
        id: "burnt-oak-edgware",
        question: "Do you cover Burnt Oak near Edgware?",
        answer:
          "Yes. We can arrange Heathrow transfers from Burnt Oak and nearby roads as part of our Edgware coverage.",
      },
    ],
  },
  "golders-green": {
    pickupContext:
      "Golders Green bookings often include station-area collections, Finchley Road, Golders Green Road, North End Road and homes close to Hampstead Garden Suburb.",
    localPlaces: [
      "Golders Green Underground and bus station",
      "Golders Green Road",
      "Finchley Road",
      "Golders Hill Park area",
    ],
    routeContext: northRoute,
    planningTip:
      "For station or bus-station pickups, confirm the exact side or nearby road so the driver can avoid waiting in the wrong place.",
    localFaqs: [
      {
        id: "golders-green-station",
        question: "Can you collect from Golders Green station?",
        answer:
          "Yes. We collect from Golders Green station-area addresses when a clear meeting point is agreed.",
      },
      {
        id: "golders-green-hampstead",
        question: "Do you cover homes near Hampstead Garden Suburb?",
        answer:
          "Yes. We cover residential addresses around Golders Green and Hampstead Garden Suburb.",
      },
    ],
  },
  "hampstead-garden-suburb": {
    pickupContext:
      "Hampstead Garden Suburb pickups are usually residential, often around quiet streets, local shopping parades and homes close to Golders Green or Finchley.",
    localPlaces: [
      "Hampstead Garden Suburb conservation area",
      "Temple Fortune",
      "Golders Green Crematorium area",
      "Local shopping parades and residential closes",
    ],
    routeContext: northRoute,
    planningTip:
      "Because many Suburb pickups are on residential roads, provide the house number, postcode and any access notes when booking.",
    localFaqs: [
      {
        id: "hgs-residential-pickup",
        question: "Can you collect from residential roads in Hampstead Garden Suburb?",
        answer:
          "Yes. Share your full address and any access details, and we’ll confirm your pickup arrangements.",
      },
      {
        id: "hgs-golders-green",
        question: "Can you pick up near Golders Green as well?",
        answer:
          "Yes. We cover both Hampstead Garden Suburb and nearby Golders Green addresses.",
      },
    ],
  },
  whetstone: {
    pickupContext:
      "Whetstone transfers often include Totteridge & Whetstone station, Whetstone High Road, Oakleigh Park and nearby residential roads.",
    localPlaces: [
      "Totteridge & Whetstone Underground station",
      "Whetstone High Road",
      "Oakleigh Park station area",
      "Totteridge Lane and nearby residential streets",
    ],
    routeContext: northRoute,
    planningTip:
      "If your pickup is near the High Road or station, use a clear landmark or side road in the booking notes.",
    localFaqs: [
      {
        id: "totteridge-whetstone-station",
        question: "Can you collect from Totteridge & Whetstone station?",
        answer:
          "Yes. Tell us the exact side or nearby landmark and we’ll confirm a suitable pickup point.",
      },
      {
        id: "oakleigh-park-whetstone",
        question: "Do you cover Oakleigh Park addresses near Whetstone?",
        answer:
          "Yes. We can collect from Oakleigh Park and nearby residential roads for Heathrow transfers.",
      },
    ],
  },
  "muswell-hill": {
    pickupContext:
      "Muswell Hill bookings often start around Muswell Hill Broadway, Fortis Green, Alexandra Park and residential streets close to Highgate or East Finchley.",
    localPlaces: [
      "Muswell Hill Broadway",
      "Alexandra Palace and Alexandra Park area",
      "Fortis Green",
      "Highgate Wood side of Muswell Hill",
    ],
    routeContext: northRoute,
    planningTip:
      "Muswell Hill has several busy local approaches, so share luggage details and your exact entrance if you are being collected from a flat or venue.",
    localFaqs: [
      {
        id: "muswell-hill-broadway",
        question: "Can you collect from Muswell Hill Broadway?",
        answer:
          "Yes. We cover Muswell Hill Broadway and nearby residential streets for Heathrow transfers.",
      },
      {
        id: "alexandra-palace-area",
        question: "Do you collect near Alexandra Palace?",
        answer:
          "Yes. We can collect from addresses around Alexandra Palace and Alexandra Park when the exact pickup point is confirmed.",
      },
    ],
  },
  hounslow: {
    pickupContext:
      "Hounslow bookings often include the High Street, Hounslow Central, Hounslow East, Hounslow West and residential roads close to Heathrow.",
    localPlaces: [
      "Hounslow town centre",
      "Hounslow Central Underground station",
      "Treaty Centre and High Street area",
      "Bell Square and Hounslow House area",
    ],
    routeContext: westRoute,
    planningTip:
      "Hounslow is close to Heathrow, but local traffic and terminal access still matter, so confirm your terminal and flight time when booking.",
    localFaqs: [
      {
        id: "hounslow-central-pickup",
        question: "Can you collect from Hounslow Central?",
        answer:
          "Yes. We cover Hounslow Central and nearby town-centre addresses for Heathrow transfers.",
      },
      {
        id: "hounslow-terminal",
        question: "Do I need to tell you my Heathrow terminal from Hounslow?",
        answer:
          "Yes. Please share your terminal and flight time so we can plan the correct drop-off or pickup arrangements.",
      },
    ],
  },
  southall: {
    pickupContext:
      "Southall transfers often include Southall station, The Broadway, South Road, Uxbridge Road and nearby residential streets.",
    localPlaces: [
      "Southall station",
      "The Broadway",
      "South Road",
      "Uxbridge Road",
    ],
    routeContext: westRoute,
    planningTip:
      "Southall town-centre roads can be busy, so a precise address, entrance or shopfront helps your driver identify the pickup point.",
    localFaqs: [
      {
        id: "southall-station",
        question: "Can you collect from Southall station?",
        answer:
          "Yes. Tell us the station side or nearest landmark and we’ll confirm the pickup details.",
      },
      {
        id: "southall-broadway",
        question: "Do you cover Southall Broadway?",
        answer:
          "Yes. We cover Southall Broadway, South Road and nearby residential streets for Heathrow transfers.",
      },
    ],
  },
  hayes: {
    pickupContext:
      "Hayes bookings often include Hayes & Harlington station, Station Road, Hayes town centre, Stockley Park and homes around the Grand Union Canal side of town.",
    localPlaces: [
      "Hayes & Harlington station",
      "Station Road",
      "Hayes town centre",
      "Stockley Park and The Old Vinyl Factory area",
    ],
    routeContext: westRoute,
    planningTip:
      "For station or Stockley Park pickups, include the building name, entrance or reception point so collection is straightforward.",
    localFaqs: [
      {
        id: "hayes-harlington-station",
        question: "Can you collect from Hayes & Harlington station?",
        answer:
          "Yes. Share the exact station-side meeting point and we’ll confirm the arrangements.",
      },
      {
        id: "stockley-park-hayes",
        question: "Do you collect from Stockley Park?",
        answer:
          "Yes. We can collect from Stockley Park offices when you provide the building or reception details.",
      },
    ],
  },
  ealing: {
    pickupContext:
      "Ealing transfers often start around Ealing Broadway, Haven Green, Ealing Common, Walpole Park and residential roads across W5.",
    localPlaces: [
      "Ealing Broadway station",
      "Haven Green",
      "Ealing Broadway shopping area",
      "Walpole Park and Ealing Green",
    ],
    routeContext: westRoute,
    planningTip:
      "For Ealing Broadway pickups, tell us whether you are near the station, shopping centre, Haven Green or a nearby residential street.",
    localFaqs: [
      {
        id: "ealing-broadway-station",
        question: "Can you collect from Ealing Broadway station?",
        answer:
          "Yes. We cover Ealing Broadway station-area pickups when a clear meeting point is agreed.",
      },
      {
        id: "ealing-common",
        question: "Do you cover Ealing Common?",
        answer:
          "Yes. We cover Ealing Common and nearby W5 addresses for Heathrow transfers.",
      },
    ],
  },
  twickenham: {
    pickupContext:
      "Twickenham bookings often include Twickenham station, London Road, Church Street, riverside addresses and event-day collections near the stadium area.",
    localPlaces: [
      "Twickenham station",
      "Twickenham Stadium area",
      "Church Street and Twickenham Riverside",
      "The Exchange opposite the station",
    ],
    routeContext: westRoute,
    planningTip:
      "On major event days, confirm any road closures or meeting-point restrictions early, especially for pickups near the stadium.",
    localFaqs: [
      {
        id: "twickenham-station",
        question: "Can you collect from Twickenham station?",
        answer:
          "Yes. Share the exact side or nearby landmark and we’ll confirm a suitable pickup point.",
      },
      {
        id: "twickenham-event-days",
        question: "Can you collect near Twickenham Stadium on event days?",
        answer:
          "Usually yes, but meeting points can be affected by event traffic and restrictions, so contact us before booking.",
      },
    ],
  },
  isleworth: {
    pickupContext:
      "Isleworth transfers often include Isleworth station, London Road, Osterley-side addresses and residential streets between Hounslow and Richmond.",
    localPlaces: [
      "Isleworth station",
      "London Road",
      "Osterley Sports & Athletic Centre area",
      "Nearby Hounslow and Richmond boundary roads",
    ],
    routeContext: westRoute,
    planningTip:
      "If your pickup is near a school, sports centre or station, add a precise landmark so your driver knows where to meet you.",
    localFaqs: [
      {
        id: "isleworth-station",
        question: "Can you collect from Isleworth station?",
        answer:
          "Yes. We cover Isleworth station-area pickups when the exact meeting point is confirmed.",
      },
      {
        id: "osterley-isleworth",
        question: "Do you cover Osterley-side addresses near Isleworth?",
        answer:
          "Yes. We can collect from Isleworth and nearby Osterley-side residential addresses for Heathrow transfers.",
      },
    ],
  },
};

export const DEFAULT_AREA_PROFILE: AreaProfile = {
  pickupContext:
    "We collect from homes, hotels, offices and agreed meeting points in this area, with your pickup details confirmed before travel.",
  localPlaces: ["Local homes", "Hotels", "Offices", "Agreed meeting points"],
  routeContext:
    "Your driver plans the route using the terminal, time of day and live road conditions available before travel.",
  planningTip:
    "Share your full address, terminal, flight time, passengers and luggage when booking so we can confirm the right pickup details.",
  localFaqs: [],
};
