import type { Area } from "@/lib/areas";

type AreaProfile = {
  // Postcode districts the area covers, and the stations in or nearest to it.
  postcodes: string[];
  stations: string[];
  pickupContext: string;
  localPlaces: string[];
  routeContext: string;
  planningTip: string;
  localFaqs: { id: string; question: string; answer: string }[];
};

export const AREA_PROFILES: Record<Area["slug"], AreaProfile> = {
  finchley: {
    postcodes: ["N3", "N12"],
    stations: [
      "Finchley Central (Northern line)",
      "West Finchley (Northern line)",
      "Woodside Park (Northern line)",
    ],
    pickupContext:
      "Finchley bookings often include home pickups around Finchley Central, North Finchley, Church End and residential roads towards East End Road, plus collections near local stations, schools and shopping parades.",
    localPlaces: [
      "Finchley Central Underground station",
      "North Finchley town centre",
      "Regents Park Road and Hendon Lane",
      "Avenue House and nearby residential streets",
      "East End Road and Church End addresses",
    ],
    routeContext:
      "Finchley to Heathrow transfers are planned around your exact address and terminal. Drivers may consider routes via the A406 North Circular, A1, M1, M25, A40 or M4 depending on whether you are travelling to Terminals 2, 3, 4 or 5 and what live traffic looks like.",
    planningTip:
      "When booking from Finchley, share the full pickup address, nearest entrance or landmark, Heathrow terminal, flight time, passengers, luggage and any child seats so we can confirm the right vehicle and collection point.",
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
      {
        id: "finchley-terminals",
        question: "Do you go from Finchley to all Heathrow terminals?",
        answer:
          "Yes. We arrange Finchley transfers to Heathrow Terminals 2, 3, 4 and 5, and pickups back to Finchley from arrivals.",
      },
      {
        id: "finchley-booking-details",
        question: "What should I tell you when booking from Finchley?",
        answer:
          "Send your Finchley pickup address, Heathrow terminal, flight time, passengers, suitcases, child-seat requests and mobile number so we can confirm the journey clearly.",
      },
    ],
  },
  "east-finchley": {
    postcodes: ["N2"],
    stations: [
      "East Finchley (Northern line)",
    ],
    pickupContext:
      "East Finchley pickups often involve homes around the High Road, station-area collections and residential roads near the A1000.",
    localPlaces: [
      "East Finchley Underground station",
      "East Finchley High Road",
      "Phoenix Cinema area",
      "Great North Road and nearby residential roads",
    ],
    routeContext:
      "East Finchley sits on the A1000 Great North Road, so many Heathrow journeys head to the A406 North Circular and then the A40, or the M1 and M25, depending on your terminal and live traffic.",
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
    postcodes: ["NW4"],
    stations: [
      "Hendon Central (Northern line)",
      "Hendon (Thameslink)",
    ],
    pickupContext:
      "Hendon bookings commonly include collections around Hendon Central, Brent Cross, The Burroughs, West Hendon and residential roads around Watford Way.",
    localPlaces: [
      "Hendon Central Underground station",
      "Brent Cross shopping area",
      "The Burroughs",
      "Watford Way and surrounding residential roads",
      "West Hendon Broadway and nearby homes",
    ],
    routeContext:
      "Hendon to Heathrow journeys are planned around the pickup side of Hendon, your terminal and live traffic. Depending on conditions, drivers may consider routes using the A41, A406 North Circular, M1, M25, A40 or M4 for Terminals 2, 3, 4 and 5.",
    planningTip:
      "When booking from Hendon, include the exact address or entrance, Heathrow terminal, flight time, passenger count, luggage and any extra stops, especially if the pickup is near Brent Cross or Hendon Central.",
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
      {
        id: "hendon-west-hendon",
        question: "Do you collect from West Hendon?",
        answer:
          "Yes. We cover West Hendon and nearby residential roads for pre-booked Heathrow transfers.",
      },
      {
        id: "hendon-terminal-details",
        question: "Do you need my Heathrow terminal for a Hendon pickup?",
        answer:
          "Yes. Please share whether you are travelling to Terminal 2, 3, 4 or 5 so we can plan the drop-off or arrivals pickup correctly.",
      },
    ],
  },
  "mill-hill": {
    postcodes: ["NW7"],
    stations: [
      "Mill Hill Broadway (Thameslink)",
      "Mill Hill East (Northern line)",
    ],
    pickupContext:
      "Mill Hill transfers often start around Mill Hill Broadway, Station Road, Mill Hill East, Bittacy Hill and residential roads across NW7.",
    localPlaces: [
      "Mill Hill Broadway station",
      "Station Road",
      "The Broadway",
      "Mill Hill East and nearby residential streets",
      "Bittacy Hill and Holders Hill Road",
    ],
    routeContext:
      "Mill Hill to Heathrow routes depend on your side of NW7, the terminal and the time of day. Drivers may consider the A1, M1, A406, M25, A40 or M4 when planning journeys to Terminals 2, 3, 4 and 5.",
    planningTip:
      "For Mill Hill pickups, tell us the exact side of Mill Hill Broadway or Mill Hill East, the Heathrow terminal, flight time, number of passengers, luggage and any mobility or child-seat needs.",
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
      {
        id: "mill-hill-nw7",
        question: "Do you cover residential addresses across NW7?",
        answer:
          "Yes. We collect from homes, offices and agreed meeting points across Mill Hill and NW7 for Heathrow transfers.",
      },
      {
        id: "mill-hill-terminal",
        question: "Can I book from Mill Hill to Terminal 5?",
        answer:
          "Yes. We cover Terminal 5 as well as Terminals 2, 3 and 4 for Mill Hill journeys to and from Heathrow.",
      },
    ],
  },
  barnet: {
    postcodes: ["EN4", "EN5"],
    stations: [
      "High Barnet (Northern line)",
      "New Barnet (Great Northern)",
    ],
    pickupContext:
      "Barnet pickups often include High Barnet, Chipping Barnet, New Barnet, The Spires area, Barnet Hospital and residential roads around the town centre.",
    localPlaces: [
      "High Barnet Underground station",
      "Chipping Barnet town centre",
      "The Spires area",
      "Barnet Hospital area",
      "New Barnet station and nearby residential roads",
    ],
    routeContext:
      "Barnet sits further north than many Heathrow pickup areas, so route planning matters. Drivers may consider the A1, M25, M1, A406, A40 or M4 depending on your exact pickup, Heathrow terminal and live traffic.",
    planningTip:
      "When booking from Barnet, share the exact pickup point, terminal, flight time, luggage, passengers and any extra stops so the collection time can be planned with a comfortable margin.",
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
      {
        id: "barnet-hospital-area",
        question: "Can you collect near Barnet Hospital?",
        answer:
          "Yes. We can collect from the Barnet Hospital area and nearby residential roads when the exact pickup point is confirmed.",
      },
      {
        id: "barnet-early-terminal",
        question: "Can you take me from Barnet to Heathrow for an early flight?",
        answer:
          "Yes. We operate 24/7 and can arrange early Barnet pickups to Heathrow Terminals 2, 3, 4 and 5.",
      },
    ],
  },
  edgware: {
    postcodes: ["HA8"],
    stations: [
      "Edgware (Northern line)",
    ],
    pickupContext:
      "Edgware transfers often involve Station Road, Edgware station, The Broadwalk Centre, Burnt Oak, Hale Lane and surrounding residential streets.",
    localPlaces: [
      "Edgware Underground station",
      "The Broadwalk Centre",
      "Station Road",
      "Burnt Oak and nearby residential roads",
      "Hale Lane and Canons Park side addresses",
    ],
    routeContext:
      "Edgware to Heathrow transfers can be planned via different North London and motorway routes depending on the terminal, time of day and traffic. Drivers may consider the A1, M1, M25, A406, A40 or M4 for Terminals 2, 3, 4 and 5.",
    planningTip:
      "For Edgware pickups, include the precise road, station side, building entrance or shopfront, plus your Heathrow terminal, flight time, passengers, luggage and mobile number.",
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
      {
        id: "edgware-broadwalk",
        question: "Can you collect near The Broadwalk Centre?",
        answer:
          "Yes. We can arrange pickups near The Broadwalk Centre when you provide a clear meeting point or nearby road.",
      },
      {
        id: "edgware-terminal-five",
        question: "Do you cover Edgware to Heathrow Terminal 5?",
        answer:
          "Yes. We cover Terminal 5 and the other passenger terminals for Edgware to Heathrow journeys.",
      },
    ],
  },
  "golders-green": {
    postcodes: ["NW11"],
    stations: [
      "Golders Green (Northern line)",
    ],
    pickupContext:
      "Golders Green bookings often include station-area collections, Finchley Road, Golders Green Road, North End Road, Temple Fortune and homes close to Hampstead Garden Suburb.",
    localPlaces: [
      "Golders Green Underground and bus station",
      "Golders Green Road",
      "Finchley Road",
      "Golders Hill Park area",
      "Temple Fortune and North End Road",
    ],
    routeContext:
      "Golders Green to Heathrow route planning depends on whether the pickup is near the station, Finchley Road or residential streets. Drivers may consider the A406, A41, A40, M1, M25 or M4 depending on the terminal and live traffic.",
    planningTip:
      "When booking from Golders Green, tell us the exact pickup side, nearby road or building, plus your Heathrow terminal, flight time, passengers, luggage and whether you need a name-board pickup on return.",
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
      {
        id: "golders-green-temple-fortune",
        question: "Do you cover Temple Fortune?",
        answer:
          "Yes. We cover Temple Fortune and nearby Golders Green residential addresses for Heathrow transfers.",
      },
      {
        id: "golders-green-return-pickup",
        question: "Can you bring me back from Heathrow to Golders Green?",
        answer:
          "Yes. We arrange Heathrow arrivals pickups back to Golders Green, with the meeting point confirmed when you book.",
      },
    ],
  },
  "hampstead-garden-suburb": {
    postcodes: ["NW11", "N2"],
    stations: [
      "Golders Green (Northern line)",
      "East Finchley (Northern line)",
    ],
    pickupContext:
      "Hampstead Garden Suburb pickups are usually residential, often around quiet streets, local shopping parades and homes close to Golders Green or Finchley.",
    localPlaces: [
      "Hampstead Garden Suburb conservation area",
      "Temple Fortune",
      "Golders Green Crematorium area",
      "Local shopping parades and residential closes",
    ],
    routeContext:
      "From Hampstead Garden Suburb, drivers usually head for the A1 or the A406 North Circular, then the A40 or the M1 and M25 towards Heathrow, depending on your terminal and the time of day.",
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
    postcodes: ["N20"],
    stations: [
      "Totteridge & Whetstone (Northern line)",
    ],
    pickupContext:
      "Whetstone transfers often include Totteridge & Whetstone station, Whetstone High Road, Oakleigh Park and nearby residential roads.",
    localPlaces: [
      "Totteridge & Whetstone Underground station",
      "Whetstone High Road",
      "Oakleigh Park station area",
      "Totteridge Lane and nearby residential streets",
    ],
    routeContext:
      "Whetstone is on the A1000 at the northern edge of our area, so drivers may use the A406 North Circular and A40, or head out to the M25, depending on your terminal and traffic.",
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
    postcodes: ["N10"],
    stations: [
      "Highgate (Northern line)",
      "Alexandra Palace (Great Northern)",
    ],
    pickupContext:
      "Muswell Hill bookings often start around Muswell Hill Broadway, Fortis Green, Alexandra Park and residential streets close to Highgate or East Finchley.",
    localPlaces: [
      "Muswell Hill Broadway",
      "Alexandra Palace and Alexandra Park area",
      "Fortis Green",
      "Highgate Wood side of Muswell Hill",
    ],
    routeContext:
      "Muswell Hill journeys usually start on local roads down to the A406 North Circular, then continue on the A40 or the M1 and M25 towards Heathrow, depending on your terminal and live traffic.",
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
    postcodes: ["TW3", "TW4", "TW5"],
    stations: [
      "Hounslow Central (Piccadilly line)",
      "Hounslow East (Piccadilly line)",
      "Hounslow West (Piccadilly line)",
      "Hounslow (South Western Railway)",
    ],
    pickupContext:
      "Hounslow bookings often include the High Street, Hounslow Central, Hounslow East, Hounslow West and residential roads close to Heathrow.",
    localPlaces: [
      "Hounslow town centre",
      "Hounslow Central Underground station",
      "Treaty Centre and High Street area",
      "Bell Square and Hounslow House area",
    ],
    routeContext:
      "Hounslow is Heathrow’s neighbour: journeys are short runs along roads such as the A30 Great South West Road or the A4 Bath Road, with the exact approach depending on your terminal.",
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
    postcodes: ["UB1", "UB2"],
    stations: [
      "Southall (Elizabeth line)",
    ],
    pickupContext:
      "Southall transfers often include Southall station, The Broadway, South Road, Uxbridge Road and nearby residential streets.",
    localPlaces: [
      "Southall station",
      "The Broadway",
      "South Road",
      "Uxbridge Road",
    ],
    routeContext:
      "From Southall, drivers usually take the A312 (The Parkway) or local roads towards the A4 and Heathrow’s perimeter roads, choosing the approach for your terminal.",
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
    postcodes: ["UB3", "UB4"],
    stations: [
      "Hayes & Harlington (Elizabeth line)",
    ],
    pickupContext:
      "Hayes bookings often include Hayes & Harlington station, Station Road, Hayes town centre, Stockley Park and homes around the Grand Union Canal side of town.",
    localPlaces: [
      "Hayes & Harlington station",
      "Station Road",
      "Hayes town centre",
      "Stockley Park and The Old Vinyl Factory area",
    ],
    routeContext:
      "Hayes is close to Heathrow: drivers usually use the A312 or North Hyde Road towards the A4, M4 and Heathrow’s perimeter roads, depending on your terminal.",
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
    postcodes: ["W5", "W13"],
    stations: [
      "Ealing Broadway (Elizabeth, Central and District lines)",
      "West Ealing (Elizabeth line)",
      "Ealing Common (District and Piccadilly lines)",
    ],
    pickupContext:
      "Ealing transfers often start around Ealing Broadway, Haven Green, Ealing Common, Walpole Park and residential roads across W5.",
    localPlaces: [
      "Ealing Broadway station",
      "Haven Green",
      "Ealing Broadway shopping area",
      "Walpole Park and Ealing Green",
    ],
    routeContext:
      "From Ealing, drivers may take the A4020 Uxbridge Road and A312, or the A406 to the M4, towards Heathrow, depending on your terminal and the time of day.",
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
    postcodes: ["TW1", "TW2"],
    stations: [
      "Twickenham (South Western Railway)",
      "Strawberry Hill (South Western Railway)",
    ],
    pickupContext:
      "Twickenham bookings often include Twickenham station, London Road, Church Street, riverside addresses and event-day collections near the stadium area.",
    localPlaces: [
      "Twickenham station",
      "Twickenham Stadium area",
      "Church Street and Twickenham Riverside",
      "The Exchange opposite the station",
    ],
    routeContext:
      "Twickenham journeys usually use the A316 and roads through Hounslow, such as the A30 or A314, towards Heathrow, depending on your terminal and live traffic.",
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
    postcodes: ["TW7"],
    stations: [
      "Isleworth (South Western Railway)",
      "Osterley (Piccadilly line)",
    ],
    pickupContext:
      "Isleworth transfers often include Isleworth station, London Road, Osterley-side addresses and residential streets between Hounslow and Richmond.",
    localPlaces: [
      "Isleworth station",
      "London Road",
      "Osterley Sports & Athletic Centre area",
      "Nearby Hounslow and Richmond boundary roads",
    ],
    routeContext:
      "From Isleworth, drivers may use the A315 London Road or the A4 Great West Road towards Heathrow, with the approach depending on your terminal.",
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
  postcodes: [],
  stations: [],
  pickupContext:
    "We collect from homes, hotels, offices and agreed meeting points in this area, with your pickup details confirmed before travel.",
  localPlaces: ["Local homes", "Hotels", "Offices", "Agreed meeting points"],
  routeContext:
    "Your driver plans the route using the terminal, time of day and live road conditions available before travel.",
  planningTip:
    "Share your full address, terminal, flight time, passengers and luggage when booking so we can confirm the right pickup details.",
  localFaqs: [],
};
