# Citations and Local Links Checklist

Use this as the source of truth when creating listings, asking for local links or adding profile
URLs to `SAME_AS` in `src/lib/site.ts`.

## NAP profile

| Field | Use this value |
|---|---|
| Business name | Heathrow Minicab |
| Website | https://www.heathrowminicab.com |
| Main phone | 020 8343 4444 |
| Backup phone | 020 8569 4040 |
| Base | Mill Hill, North London (NW7) |
| Business type | Service-area private hire / minicab business |
| Hours | 24 hours, 7 days |
| Main services | Heathrow airport transfers, Heathrow pickups, Heathrow drop-offs, meet and greet, airport-to-airport transfers, family and group transfers, executive airport transfers |
| Service areas | Finchley, East Finchley, Hendon, Mill Hill, Barnet, Edgware, Golders Green, Hampstead Garden Suburb, Whetstone, Muswell Hill, Hounslow, Southall, Hayes, Ealing, Twickenham, Isleworth and Heathrow |

Keep the business name, phone numbers, website and service-area wording consistent everywhere.
Do not add keywords to the business name on directory profiles.

## Citation rollout order

| Priority | Platform | Status | Public profile URL |
|---|---|---|---|
| 1 | Google Business Profile | To create/claim | |
| 2 | Bing Places | To create/claim | |
| 3 | Apple Business Connect | To create/claim | |
| 4 | Yell | To create/claim | |
| 5 | FreeIndex | To create/claim | |
| 6 | Thomson Local | To create/claim | |
| 7 | Cylex | To create/claim | |
| 8 | Scoot | To create/claim | |
| 9 | Hotfrog | To create/claim | |
| 10 | 192.com | To create/claim | |
| 11 | Trustpilot | To create/claim | |

After each listing is live, add the public profile URL to `SAME_AS` in `src/lib/site.ts` and
redeploy so the LocalBusiness schema reinforces the same entity.

## Profile content

- Description: "Heathrow Minicab is a 24/7 private hire service based in Mill Hill, North London (NW7), providing airport transfers between North and West London and Heathrow Terminals 2, 3, 4 and 5."
- Categories to use where available: Taxi service, Airport shuttle service, Car service, Private hire service.
- Photos to upload: real vehicles, driver/name-board pickup, vehicle interiors, luggage space, Heathrow-safe exterior shots.
- Services to list: Heathrow airport transfer, Heathrow airport pickup, meet and greet, Heathrow drop-off, airport-to-airport transfer, family airport transfer, executive airport transfer.

## Local link outreach targets

Contact these in batches of five, tracking date contacted, contact name, page requested and result.

| Group | Examples to target | Link angle |
|---|---|---|
| Hotels and guest houses | Independent hotels, B&Bs and serviced apartments near the top 6 areas | "Airport transfer option for guests travelling to Heathrow" |
| Venues and events | Wedding venues, halls, community venues and event spaces | "Recommended local Heathrow transfer provider" |
| Local businesses/offices | Offices in Finchley, Hendon, Mill Hill, Edgware, Barnet and Golders Green | "Travel option for staff, clients and airport visitors" |

Ask for links from useful pages such as travel information, directions, guest services,
recommended suppliers or visitor information. Avoid paid link packages, bulk directory blasts and
irrelevant guest posts.

## Monthly review

- Check Google Business Profile calls, profile views and review count.
- Check Search Console queries for area pages and pickup/drop-off pages.
- Add newly live citation URLs to `SAME_AS`.
- Ask ChatGPT, Perplexity and Gemini whether Heathrow Minicab appears for the top area searches.
