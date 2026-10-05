// Heathrow's terminals. Airline lists aren't stored here because Heathrow reallocates
// airlines often. "Good to know" lines are taken from heathrow.com (terminal guides and rail
// station pages); the site doesn't link out to it.
export type Terminal = {
  number: "2" | "3" | "4" | "5";
  name: string;
  goodToKnow: string;
};

const GOOD_TO_KNOW: Record<Terminal["number"], string> = {
  "2": "Known as the Queen’s Terminal. It shares the Heathrow Terminals 2 & 3 rail station, a few minutes’ walk away via a pedestrian subway.",
  "3": "Shares the Heathrow Terminals 2 & 3 rail station with Terminal 2, a few minutes’ walk away via a pedestrian subway.",
  "4": "Terminal 4’s rail station is below Arrivals. Heathrow Express doesn’t stop here; it serves Terminals 2 & 3 and Terminal 5.",
  "5": "Terminal 5’s rail station is in the basement of the terminal building.",
};

export const TERMINALS: Terminal[] = (["2", "3", "4", "5"] as const).map((number) => ({
  number,
  name: `Terminal ${number}`,
  goodToKnow: GOOD_TO_KNOW[number],
}));
