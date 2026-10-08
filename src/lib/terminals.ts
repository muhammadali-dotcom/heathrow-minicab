import type { Faq } from "@/lib/faqs";

// Heathrow's terminals. Keep exact driver instructions cautious: the booking confirmation remains
// the source of truth for each journey, while this data gives useful terminal-specific guidance.
export type Terminal = {
  number: "2" | "3" | "4" | "5";
  name: string;
  goodToKnow: string;
  meetingPoint: string;
  pickupParking: string;
  departureTip: string;
  helpTip: string;
  faqs: Faq[];
};

const TERMINAL_DETAILS: Record<Terminal["number"], Omit<Terminal, "number" | "name">> = {
  "2": {
    goodToKnow:
      "Terminal 2 is served by its own arrivals hall and nearby Terminal Parking, formerly known as Short Stay Parking.",
    meetingPoint:
      "Heathrow’s public meeting point for Terminal 2 is opposite the international arrivals exit. Your driver’s exact meeting instruction is confirmed with your booking.",
    pickupParking:
      "For passenger collections, Heathrow directs drivers to Terminal Parking rather than waiting on the terminal forecourt. Terminal 2 Terminal Parking is close to arrivals and departures.",
    departureTip:
      "For drop-offs, check that your airline confirms Terminal 2 before collection and tell us straight away if your terminal changes.",
    helpTip:
      "If you cannot see your driver, stay inside arrivals near a clearly signed Terminal 2 landmark and call or WhatsApp us with your booking name.",
    faqs: [
      {
        id: "terminal-2-meeting-point",
        question: "Where is the Terminal 2 meeting point?",
        answer:
          "Heathrow’s public Terminal 2 meeting point is opposite the international arrivals exit. Your booking confirmation tells you the exact meeting arrangement for your driver.",
      },
      {
        id: "terminal-2-parking",
        question: "Where do drivers collect passengers at Terminal 2?",
        answer:
          "Heathrow directs passenger collections to Terminal Parking rather than waiting on the forecourt. Any applicable parking or pickup charge is confirmed with your quote.",
      },
    ],
  },
  "3": {
    goodToKnow:
      "Terminal 3 has its own arrivals area, with Terminal Parking close to both arrivals and departures.",
    meetingPoint:
      "Heathrow’s public meeting point for Terminal 3 is in the seating area on the ground floor of Arrivals. Your confirmed booking may specify a driver name-board meeting or another agreed point.",
    pickupParking:
      "For collections, Heathrow directs drivers to Terminal Parking rather than waiting on the terminal forecourt. Terminal 3 Terminal Parking is connected to arrivals by a covered walkway.",
    departureTip:
      "For drop-offs, confirm Terminal 3 against your airline or flight confirmation before you travel.",
    helpTip:
      "If you need help in Terminal 3, stay in arrivals near a signed landmark or seating area and contact us with your nearest landmark.",
    faqs: [
      {
        id: "terminal-3-meeting-point",
        question: "Where is the Terminal 3 meeting point?",
        answer:
          "Heathrow’s public Terminal 3 meeting point is in the seating area on the ground floor of Arrivals. Your driver meeting arrangement is confirmed before travel.",
      },
      {
        id: "terminal-3-parking",
        question: "Is Terminal 3 pickup from the forecourt?",
        answer:
          "No. Heathrow says drivers should not wait on the terminal forecourt for pickups. Collections use Terminal Parking or another agreed arrangement confirmed with your booking.",
      },
    ],
  },
  "4": {
    goodToKnow:
      "Terminal 4 has different parking and pickup arrangements from the central terminals, and Heathrow changed passenger parking arrangements in 2026.",
    meetingPoint:
      "Heathrow’s public meeting point for Terminal 4 is next to WHSmith on the ground floor of Arrivals. Your booking confirmation remains the final meeting instruction.",
    pickupParking:
      "For Terminal 4, Heathrow says passenger parking has moved to Park & Ride Zone A, with shuttle buses to the terminal. Quick paid collections can use the Priority Pick-Up area outside arrivals where available.",
    departureTip:
      "Terminal 4 drop-offs continue at departures, with Heathrow’s terminal forecourt drop-off charge applying to each visit.",
    helpTip:
      "If you are unsure where to stand at Terminal 4, stay inside arrivals near WHSmith or another clear landmark and contact us.",
    faqs: [
      {
        id: "terminal-4-meeting-point",
        question: "Where is the Terminal 4 meeting point?",
        answer:
          "Heathrow’s public Terminal 4 meeting point is next to WHSmith on the ground floor of Arrivals. Your booking confirmation gives the exact meeting arrangement.",
      },
      {
        id: "terminal-4-parking-change",
        question: "Has Terminal 4 parking changed?",
        answer:
          "Yes. Heathrow says Terminal 4 passenger parking has moved to Park & Ride Zone A, with shuttle buses to the terminal. Pickup arrangements and fees should be checked when booking.",
      },
    ],
  },
  "5": {
    goodToKnow:
      "Terminal 5 has two public arrivals meeting points and its own Terminal Parking beside the terminal.",
    meetingPoint:
      "Heathrow lists two Terminal 5 arrivals meeting points: the north point opposite Travelex and the south point near Costa Coffee. Your confirmed driver meeting instruction may specify which one to use.",
    pickupParking:
      "Terminal 5 Terminal Parking, also signposted as Short Stay in places, is next to the terminal and linked by covered walkways to arrivals and departures.",
    departureTip:
      "Terminal 5 is large, so check your airline and terminal before collection and allow time to reach the right departures area.",
    helpTip:
      "If you are not sure which Terminal 5 meeting point to use, stay by the north or south arrivals meeting point named in your booking and contact us.",
    faqs: [
      {
        id: "terminal-5-meeting-points",
        question: "Which Terminal 5 meeting point should I use?",
        answer:
          "Heathrow lists a north meeting point opposite Travelex and a south meeting point near Costa Coffee. Use the one confirmed with your booking.",
      },
      {
        id: "terminal-5-short-stay",
        question: "Is Terminal 5 Short Stay the same as Terminal Parking?",
        answer:
          "Heathrow has renamed Short Stay Parking as Terminal Parking, but some signage may still say Short Stay. Follow airport signs for the terminal car park.",
      },
    ],
  },
};

export const TERMINALS: Terminal[] = (["2", "3", "4", "5"] as const).map((number) => ({
  number,
  name: `Terminal ${number}`,
  ...TERMINAL_DETAILS[number],
}));

export const TERMINAL_SPECIFIC_FAQS: Faq[] = TERMINALS.flatMap((terminal) => terminal.faqs);
