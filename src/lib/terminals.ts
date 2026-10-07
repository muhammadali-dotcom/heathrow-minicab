// Heathrow's terminals. Airline lists and exact meeting landmarks are not stored here because
// they can change; the booking confirmation is the source of truth for each journey.
export type Terminal = {
  number: "2" | "3" | "4" | "5";
  name: string;
  goodToKnow: string;
};

const GOOD_TO_KNOW: Record<Terminal["number"], string> = {
  "2": "Use Terminal 2 for your arrival or departure only if it matches your flight and booking confirmation.",
  "3": "Use Terminal 3 for your arrival or departure only if it matches your flight and booking confirmation.",
  "4": "Use Terminal 4 for your arrival or departure only if it matches your flight and booking confirmation.",
  "5": "Use Terminal 5 for your arrival or departure only if it matches your flight and booking confirmation.",
};

export const TERMINALS: Terminal[] = (["2", "3", "4", "5"] as const).map((number) => ({
  number,
  name: `Terminal ${number}`,
  goodToKnow: GOOD_TO_KNOW[number],
}));
