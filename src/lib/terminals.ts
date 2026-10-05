// Heathrow's terminals. Airline lists aren't stored here because Heathrow reallocates
// airlines often; pages link to Heathrow's own guides instead.
export type Terminal = {
  number: "2" | "3" | "4" | "5";
  slug: string;
  name: string;
  image: "t2" | "t3" | "t4" | "t5";
  heathrowGuideUrl: string;
};

export const WHICH_TERMINAL_URL =
  "https://www.heathrow.com/at-the-airport/terminal-guides/which-terminal";

export const TERMINALS: Terminal[] = (["2", "3", "4", "5"] as const).map((number) => ({
  number,
  slug: `terminal-${number}`,
  name: `Terminal ${number}`,
  image: `t${number}`,
  heathrowGuideUrl: `https://www.heathrow.com/at-the-airport/terminal-guides/terminal-${number}-guide`,
}));
