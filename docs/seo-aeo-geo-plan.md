# SEO, AEO and GEO plan: www.heathrowminicab.uk

This plan gets Heathrow Minicab found in three places:

- **SEO**: Google and Bing search results.
- **AEO** (answer engine optimisation): Google's AI Overviews, featured snippets and "People also ask" boxes.
- **GEO** (generative engine optimisation): AI assistants such as ChatGPT, Perplexity, Gemini and Claude, when someone asks them for a Heathrow minicab.

Part 1 says what's realistic. Part 2 lists what's already built into the site. Parts 3 to 9 are the work to do over the coming months, most important first. Part 10 is a 90-day checklist.

---

## 1. What we can realistically rank for

**Not realistic:** "heathrow" and "heathrow airport" on their own.
- Heathrow's official site, Wikipedia, Google Maps, flight trackers and news sites own these searches.
- People typing them want flight times, maps or news, not a minicab.
- No taxi firm ranks for them, so don't spend money chasing them.

**Realistic and valuable:** these are searches from people ready to book.

| Priority | Search terms | Page that should rank |
|---|---|---|
| 1 | heathrow minicab, heathrow minicabs, minicab heathrow | Home |
| 1 | heathrow airport transfer(s), airport transfer heathrow, heathrow transfers | /airport-transfers |
| 1 | minicab to heathrow, taxi to heathrow, cab to heathrow airport | /airport-transfers/heathrow-drop-offs |
| 1 | heathrow pickup, heathrow meet and greet taxi, taxi from heathrow | /airport-transfers/heathrow-pickups |
| 2 | {area} to heathrow taxi / minicab, e.g. "finchley to heathrow taxi", "hendon minicab heathrow" | /areas now, then individual area pages later |
| 2 | heathrow terminal 5 taxi, taxi heathrow terminal 2 | /airport-transfers/terminal-guides |
| 3 | heathrow taxi with child seat, heathrow MPV taxi, executive car heathrow | /services pages, /our-vehicles |

The biggest gains come from **local search**: the map pack, which is the three businesses Google shows on a map. See Part 3.

---

## 2. Technical SEO: already built

| What | Where | Why it matters |
|---|---|---|
| robots.txt | https://www.heathrowminicab.uk/robots.txt | Tells every search engine and AI crawler that it may read the site, and where the sitemap is. GPTBot, Perplexity, Claude, Google-Extended and Applebot are named explicitly. |
| sitemap.xml | https://www.heathrowminicab.uk/sitemap.xml | Lists the 14 pages that should be indexed. Unfinished pages (About, Terms, Privacy) and /book are left out. |
| Canonical links | Every page | Tells Google the one official address of each page, so duplicate copies don't dilute rankings. |
| Titles and descriptions | Every page | Each page now has a keyword-focused title (e.g. "Heathrow Airport Pickups \| Meet & Greet Minicab") and a description under 160 characters. These are what appear in Google results. |
| Share previews | Every page | Open Graph and Twitter tags, so links shared on WhatsApp, Facebook and similar show a proper title and image. |
| Structured data (schema) | Every page | Machine-readable facts: **LocalBusiness** (name, phones, 24/7 hours, the 16 areas and Heathrow served), **WebSite**, **Service** on the three airport pages, **BreadcrumbList** on inner pages, and **FAQPage** on the homepage and /faqs. |
| llms.txt | https://www.heathrowminicab.uk/llms.txt | A plain-text fact sheet written for AI assistants: services, prices policy, areas, phones and key pages. |
| noindex on placeholders | /about, /terms, /privacy | Keeps "Coming soon" pages out of Google until they have real content. **Remove the `robots` line in each page when you fill it in, and add the page to `src/app/sitemap.ts`.** |

**Do straight after launch:**
1. **Google Search Console** (search.google.com/search-console): add the domain `heathrowminicab.uk`, verify it through your DNS, submit `https://www.heathrowminicab.uk/sitemap.xml`, then use "URL inspection" and then "Request indexing" for the homepage and the airport pages.
2. **Bing Webmaster Tools** (bing.com/webmasters): import the site from Search Console. Bing also feeds ChatGPT search and Copilot.
3. **Google's Rich Results Test** (search.google.com/test/rich-results): test the homepage and /faqs to confirm the schema is read.
4. **PageSpeed Insights:** check mobile scores on the homepage and the airport pages, and aim for green Core Web Vitals.
5. **Domain:** `heathrowminicab.uk` and `heathrow-minicab.vercel.app` redirect to `https://www.heathrowminicab.uk`, so there's only one version of the site. If you'd rather use www, set `NEXT_PUBLIC_SITE_URL` to the www address instead.

---

## 3. Local SEO: the biggest lever

For "heathrow minicab" and "{area} to heathrow taxi", Google mostly shows the **map pack**. You get into it through a Google Business Profile, not through the website alone.

1. **Create a Google Business Profile** (business.google.com):
   - **Business name:** exactly "Heathrow Minicab". Don't add keywords or the profile can be suspended.
   - **Category:** "Taxi service" as the main one, plus "Airport shuttle service" and "Car service" if they apply.
   - **Set it up as a service-area business:** hide the street address and list the service areas from /areas (Finchley, Hendon, Barnet, Mill Hill, Edgware and the rest) plus Heathrow.
   - **Hours:** open 24 hours, 7 days.
   - **Phone:** 020 8343 4444 as the main number, with 020 8569 4040 as an additional number.
   - **Website:** https://www.heathrowminicab.uk.
   - **Photos:** the cars (your real fleet), drivers with name boards, and the terminal kerbside. Add new photos monthly.
   - **Services:** list "Heathrow airport transfer", "Heathrow airport pickup (meet and greet)", "Heathrow drop-off", "Airport-to-airport transfers" and "Child seats".
   - **Posts:** one a week, with simple updates such as "Early flight from T5? Book your 4am pickup".
2. **Keep your details identical everywhere** (known as NAP: name, address, phone). Use the same name, phone format and website on every listing. AI assistants and Google cross-check them.
3. **Directory listings (citations).** Create or claim these:
   - Bing Places;
   - Apple Business Connect, for Apple Maps and Siri;
   - Yell;
   - Thomson Local;
   - FreeIndex;
   - Cylex;
   - Scoot;
   - Hotfrog;
   - 192.com;
   - Trustpilot, also useful for reviews.

---

## 4. Reviews

Reviews are the strongest single factor in the map pack, and AI assistants quote them.

- **Ask every customer.** Send a WhatsApp message after each completed trip:
  > "Thanks for travelling with Heathrow Minicab today. If you have a moment, a quick Google review really helps us: [your review link]. Safe travels!"

  Get the link from your Google Business Profile ("Ask for reviews").
- **Aim for** 10 reviews in the first month, then a steady 5 to 10 a month.
- **Reply to every review** within a couple of days, good or bad, and mention the service naturally (e.g. "Glad your Terminal 5 pickup went smoothly").
- **Only show real reviews on the website**, and only once you have them. Never write or buy reviews; it's illegal under UK consumer law.

---

## 5. Content that ranks and earns trust

Do these in order:

1. **Licensing and trust.** Add your TfL private hire operator licence number to the footer and the About page. It's a strong trust signal for people, Google and AI assistants alike.
2. **About page.** Who runs the company, how long you've operated, the areas you're based in, and your driver standards. Then remove the noindex.
3. **Terms and Privacy pages.** These need real content. Privacy is a legal requirement if you take bookings.
4. **Area pages** (/areas/finchley, /areas/hendon and so on), starting with your busiest 3 to 5 areas. Each page needs **genuinely local** detail, or Google treats it as duplicate content:
   - the usual route to Heathrow from that area (e.g. "via the North Circular and M4");
   - which terminals customers from there use most;
   - common pickup points (estates, stations, hotels);
   - a typical journey-time range at different times of day, only if you're confident in it;
   - 2 or 3 area-specific FAQs.

   The site is ready for these: `src/lib/areas.ts` already has a slug for every area.
5. **Helpful guides.** One a month, with a short page answering a real question:
   - "How early should I leave Finchley for a Heathrow Terminal 5 flight?"
   - "Heathrow meet and greet: what happens when you land"
   - "Taxi or Heathrow Express from North London?" Be honest; it builds trust.
   - "Travelling to Heathrow with children: car seats explained"

---

## 6. AEO: answer engines (AI Overviews, featured snippets)

Answer engines lift short, direct answers from pages. To be the one quoted:

- **Start with the answer.** The first sentence under a heading should answer the question in under 40 words. For example: "Your driver meets you inside Heathrow arrivals holding a name board, or at a pickup point agreed when you book."
- **Use question headings** that match real searches: "How much waiting time is included?" or "Where will my driver meet me at Heathrow?"
- **Keep FAQs current.** They're on the homepage and /faqs with FAQPage schema. Add a question whenever customers ask the same thing twice.
- **Use lists and tables** for steps and comparisons. Snippets love them.
- **Include one clear "definition" sentence** on the homepage that AI can quote: "Heathrow Minicab is a 24/7 minicab service for Heathrow airport transfers from North and West London."

---

## 7. GEO: AI assistants (ChatGPT, Perplexity, Gemini, Claude)

AI assistants recommend businesses they can **read**, **verify** and **see mentioned elsewhere**.

1. **Readable (done).** AI crawlers are allowed in robots.txt, llms.txt gives them a clean summary, and the schema describes the business.
2. **Consistent.** The same facts (24/7, areas, phones, fixed price once confirmed, name-board meeting) must match across the site, Google Business Profile, directories and llms.txt. **When a fact changes, update `src/app/llms.txt/route.ts` too.**
3. **Mentioned elsewhere.** This is what moves AI recommendations most:
   - reviews on Google and Trustpilot;
   - listings in "best Heathrow taxi" round-ups and local directories;
   - helpful answers on Reddit (r/london, r/heathrow), Quora and local Facebook groups. Answer the question first, mention the company only where it's relevant, and never spam;
   - local news or community sites, through sponsorship or a story such as "local firm runs 4am airport runs for NHS staff".
4. **Check monthly.** Ask ChatGPT, Perplexity and Gemini questions such as "best minicab from Finchley to Heathrow" or "Heathrow meet and greet taxi North London", and note whether you're mentioned.

---

## 8. Links from other websites

Links from relevant local sites raise rankings.

- **Partners:** local hotels, B&Bs, travel agents, wedding venues, schools (for school-trip airport runs) and corporate offices in your areas. Offer them a simple partner arrangement and ask for a link from their "getting here" or "travel" page.
- **Community:** sponsor a local sports club or event. Club websites usually link to sponsors.
- **Directories:** the citations in Part 3 also count.
- **Avoid:** buying links, link farms and "SEO packages" promising hundreds of links. Google penalises them.

---

## 9. Measuring progress

| What | Where | How often |
|---|---|---|
| Search terms, positions and clicks | Google Search Console → Performance | Weekly at first, then monthly |
| Pages indexed, errors | Search Console → Pages / Sitemaps | Monthly |
| Calls, direction requests and profile views | Google Business Profile → Performance | Monthly |
| Number and average of reviews | Google Business Profile | Monthly |
| Mentions in AI answers | Ask ChatGPT, Perplexity and Gemini the target questions | Monthly |
| Bookings by source | Ask every caller "How did you find us?" | Ongoing |

Rankings for new sites usually take **3 to 6 months**. Local map-pack results can come sooner once your Google Business Profile and reviews are in place.

---

## 10. 90-day checklist

**Done in code (2026-10-07)**
- [x] The production vercel.app address redirects to www.heathrowminicab.uk; preview vercel.app hosts send `X-Robots-Tag: noindex` (`next.config.ts`).
- [x] Business schema: email, slogan, knowsAbout, offer catalogue, Book Online action; `sameAs` and licence fill in from `src/lib/site.ts` once set.
- [x] WebPage schema with dateModified and speakable on every page; Service schema with 24/7 hours and booking channels.
- [x] Key facts block on the homepage and /airport-transfers; footer shows phones, email and hours on every page.
- [x] Page-specific FAQs (with FAQPage schema) on every transfer, service, vehicles and areas page; /faqs groups every question.
- [x] 16 area pages (`/areas/[slug]`), linked from /areas and listed in the sitemap and llms.txt.
- [x] /llms.txt expanded and /llms-full.txt added (every question and answer).

**Business identity (2026-10-07)**
- [x] One entity sentence (`BUSINESS_SUMMARY`) and the base "Mill Hill, North London (NW7)" (`BUSINESS_BASE`) in `src/lib/site.ts`, used word for word in the schema (description + area-only address), footer, About, Contact, Key facts and llms.txt.
- [ ] Google Business Profile as a service-area business: address hidden, base Mill Hill, service areas = the 16 areas, website https://www.heathrowminicab.uk, hours 24/7, same phone numbers. This is the single biggest GEO/local lever.
- [ ] Bing Places and Apple Business Connect with identical details.
- [ ] Yell, FreeIndex and Thomson Local listings with identical details.
- [ ] Ask customers for a Google review after each trip.
- [ ] Add every profile URL to `SAME_AS` in `src/lib/site.ts` (it feeds the sameAs schema).

**Before deploying these changes**
- [x] Connected the domain in Vercel: www.heathrowminicab.uk is the main address; heathrowminicab.uk redirects to it.
- [ ] In Vercel → Environment Variables, make sure `NEXT_PUBLIC_SITE_URL` is unset or set to `https://www.heathrowminicab.uk`.
- [ ] After deploying, run the audit and Google's Rich Results Test on https://www.heathrowminicab.uk (homepage, /faqs and one area page).

**Weeks 1–2**
- [x] Deploy the site on https://www.heathrowminicab.uk, with heathrowminicab.uk redirecting to it.
- [ ] Set up Search Console and submit the sitemap; set up Bing Webmaster Tools.
- [ ] Run the Rich Results Test on the homepage and /faqs.
- [ ] Create and verify your Google Business Profile (Part 3).
- [ ] Add your TfL operator licence number to the site.

**Weeks 3–4**
- [ ] Start the review-request WhatsApp after every trip.
- [ ] Create the Bing Places, Apple Business Connect, Yell, Thomson Local and FreeIndex listings.
- [ ] Write the About, Terms and Privacy pages, then remove their noindex.

**Month 2**
- [ ] Add real local detail to the first 3 area pages (landmarks, hotels, typical pickups) so they're more than templates.
- [ ] Publish the first guide article.
- [ ] Add 5 more directory listings.
- [ ] Contact 5 local hotels or venues about partnership links.

**Month 3**
- [ ] Publish 2 more area pages and a second guide.
- [ ] Review Search Console: which terms are close to page 1? Strengthen those pages.
- [ ] Run the first monthly AI-answer check (Part 7).
- [ ] Target: 25+ Google reviews.

---

## Where things live in the code

- Site address: `src/lib/seo.ts` (`SITE_URL`). Override it with the `NEXT_PUBLIC_SITE_URL` environment variable.
- robots.txt: `src/app/robots.ts`.
- Sitemap: `src/app/sitemap.ts`. Add new pages here.
- AI fact sheets: `src/lib/llms.ts` builds `/llms.txt` and `/llms-full.txt`.
- Confirmed key facts: `src/lib/facts.ts` (Key facts block, llms.txt, knowsAbout).
- Profiles and licence: `SAME_AS` and `TFL_LICENCE` in `src/lib/site.ts`. Add your Google Business Profile and directory URLs to `SAME_AS` as they go live.
- Content date: `CONTENT_UPDATED` in `src/lib/seo.ts` (page dateModified and sitemap). Bump it after meaningful content changes.
- Schema: `src/components/JsonLd.tsx` (business, website, web page, service and breadcrumbs) and `src/components/FaqList.tsx` (FAQ).
- FAQs: `src/lib/faqs.ts`, grouped by topic; `PageFaqs` shows a page's own group.
- Page titles and descriptions: the `metadata` at the top of each `src/app/**/page.tsx`, using `pageMetadata()`.
- Areas: `src/lib/areas.ts`; each area gets a page at `src/app/areas/[slug]/page.tsx`.
