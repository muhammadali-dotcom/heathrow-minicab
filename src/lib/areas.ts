// Areas we pick up from and drop off to, as confirmed by the business. Slugs are ready for
// individual area pages (e.g. /areas/hendon) once each has its own content.
export type AreaRegion = "north" | "west";

export type Area = {
  name: string;
  slug: string;
  region: AreaRegion;
};

export const AREA_REGIONS: { id: AreaRegion; label: string }[] = [
  { id: "north", label: "North London" },
  { id: "west", label: "West London" },
];

const NORTH = [
  "Finchley",
  "East Finchley",
  "Hendon",
  "Mill Hill",
  "Barnet",
  "Edgware",
  "Golders Green",
  "Hampstead Garden Suburb",
  "Whetstone",
  "Muswell Hill",
];

const WEST = ["Hounslow", "Southall", "Hayes", "Ealing", "Twickenham", "Isleworth"];

const toArea =
  (region: AreaRegion) =>
  (name: string): Area => ({
    name,
    slug: name.toLowerCase().replaceAll(" ", "-"),
    region,
  });

export const AREAS: Area[] = [...NORTH.map(toArea("north")), ...WEST.map(toArea("west"))];
