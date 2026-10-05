// Heathrow's terminals and Heathrow's own guides for them. Airline lists aren't stored here
// because Heathrow reallocates airlines often; the official guides stay current.
export type Terminal = {
  number: "2" | "3" | "4" | "5";
  name: string;
  heathrowGuideUrl: string;
};

export const TERMINAL_GUIDES_URL = "https://www.heathrow.com/at-the-airport/terminal-guides";

export const TERMINALS: Terminal[] = (["2", "3", "4", "5"] as const).map((number) => ({
  number,
  name: `Terminal ${number}`,
  heathrowGuideUrl: `https://www.heathrow.com/at-the-airport/terminal-guides/terminal-${number}-guide`,
}));
