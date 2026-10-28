# Heathrow Minicab: SEO, AEO and GEO execution plan

Updated: 28 October 2026. Planning window: 28 October–25 January 2027.

## Objective and evidence

Make the business discoverable for relevant Heathrow transfers, help travellers get reliable answers, and measure enquiries and completed bookings. Rankings, indexing and AI citations are outcomes to monitor, not promises.

This plan replaces the older launch plan. The local code was inspected; production deployment parity has not been established. Both live hosts could not be fetched from the audit environment, and a site-restricted search returned no results. Neither observation establishes an outage or proves Google has not indexed the site. Search Console, live performance, business profiles and AI citations were not measured.

Already present in source: unique metadata and canonicals; sitemap; wildcard crawler allowance; LocalBusiness, Service and breadcrumb JSON-LD; area landing pages with local profiles; FAQs; three guides; About, Terms and Privacy pages; llms.txt and llms-full.txt; canonical-host redirects and preview-host noindex configuration. Do not rebuild these as missing features.

Verified gaps in source: TFL_LICENCE is null; SAME_AS is empty; contact email references A2B Radio Cars; operator identity needs clarification; booking uses a separate domain; no analytics implementation was found in the source search; Privacy explicitly says no analytics or tracking cookies are used. Existing platform-side analytics remain unverified.

## Week 1: 28 October–3 November — establish access, identity and baseline

| ID | Action | Owner | Complete when |
|---|---|---|---|
| A1 | Check DNS, TLS and response status for both hosts from an independent network. Verify non-www redirects directly to https://www.heathrowminicab.com with the requested path intact. | Developer / hosting owner | Evidence records redirect chain and final 200 responses for homepage, robots.txt and sitemap.xml. |
| A2 | Verify a domain property in Google Search Console. Submit the canonical sitemap. Inspect homepage, pickup/drop-off pages and three priority area pages using live URL inspection. | Account owner + developer | Inspection evidence distinguishes fetchability, indexing eligibility, selected canonical and actual indexed status; any blockers have assigned fixes. Indexing itself is not guaranteed. |
| A3 | Verify Bing Webmaster Tools, submit sitemap and check important URLs. | Account owner | Property access and sitemap processing confirmed; issues recorded. |
| A4 | Confirm licensed operator name, licence number and relationship to Heathrow Minicab and A2B Radio Cars. Confirm public contact details and booking operator. | Business owner | Approved fact sheet supplies exact wording and verified details; no credentials are invented. |
| A5 | Publish confirmed operator details consistently on About, Contact, footer, terms and relevant schema. Add a branded email if available. | Developer, after A4 | Visible statements agree with booking confirmation and verified business records. |
| A6 | Record baseline impressions, clicks, indexed priority URLs, enquiries and completed bookings where available. Test mobile homepage, pickup page and one area page in PageSpeed Insights. | SEO / developer | Dated baseline records source, device, URL and measurement limitations. Missing field data is labelled unavailable. |

Access required: domain registrar/DNS, hosting, Search Console, Bing Webmaster Tools and booking-provider administration. Use delegated account access; never place credentials in this document.

## Week 2: 4–10 November — local profiles and measurement

| ID | Action | Owner | Complete when |
|---|---|---|---|
| B1 | Locate existing Google Business Profile, Bing Places and Apple Maps listings. Confirm eligibility and actual business identity before claiming or creating anything. Avoid duplicate profiles. | Business owner / SEO | Existing URLs, verification status and correct name/phones recorded in citations-local-links.md. Service-area address visibility reflects the real operation. |
| B2 | Improve verified profiles with accurate services, hours, booking links and original photographs. Add only profiles representing the same business to SAME_AS. | Business owner + developer | Public details agree with website; schema points to verified entity profiles. |
| B3 | Ask booking provider which completed-booking event, integration or webhook it supports, and whether both domains can share measurement. | Business owner + developer | Written implementation route and available permissions documented. |
| B4 | Implement measurement appropriate to the selected tools; review privacy wording and applicable consent requirements before enabling tracking. Test phone, WhatsApp and booking outbound clicks separately from completed bookings. | Developer + business owner | Test events appear once, referral attribution survives where supported, personal booking details are excluded, and a real completion event is verified. If unsupported, outbound clicks remain labelled enquiries, never bookings. |
| B5 | Prepare an honest review request and a workflow for completed trips. | Business owner | Review link works and request process is ready. Actual messages require explicit sending authorization. No incentives or selective requests based on satisfaction. |

Review request draft: “Thanks for travelling with Heathrow Minicab. If you have a moment, please share your experience here: [verified review link]. Your feedback helps us improve.”

## Weeks 3–4: 11–24 November — improve answers and booking confidence

1. Choose three priority area pages using actual bookings and Search Console demand. If no data exists, have dispatch nominate the busiest areas. Improve those before expanding coverage.
2. Confirm waiting rate, cancellation/refund conditions, airport parking and drop-off charge treatment. Replace vague answers with accurate terms consistently across FAQs, service pages, terms and booking confirmation. Explain when the 15-minute waiting allowance begins.
3. Publish verified example fares only if the business can maintain them. Each example specifies route, vehicle, assumptions, inclusions, exclusions and review date. Otherwise make the quote path clear and easy to complete.
4. Add firsthand pickup details and original images to priority pages. Use validated journey-time ranges only where defensible; do not promise exact arrival times.
5. Improve terminal information within the existing terminal directory. Create separate terminal pages only when each has useful distinct information; assess existing redirects before changing URLs.
6. Add a named, real reviewer to guides where appropriate, with factual review dates and official source links. Recheck changeable airport information before updating dates.
7. Measure the first-visit splash on mobile and test a shortened or removed overlay. Confirm the fare/booking action is visible promptly. Do not claim a Core Web Vitals failure without measurement.

Completion: three priority pages have distinct useful information, verified answers agree across channels, booking actions work on mobile, and schema matches visible facts. Validate structured data and check raw HTML for important text. Run normal project lint/build checks for code changes, following the installed Next.js documentation first.

## Days 29–60: 25 November–26 December — earn local trust

- Build a short list of relevant hotels, venues and businesses with an actual relationship to the operator. Prepare individual suggestions for their guest travel or visitor information pages. Send outreach only when explicitly authorized.
- Use citations-local-links.md to record real listings and partner URLs. Check existing entries before creating new ones. Prefer relevant, maintained listings over bulk submissions.
- Add customer feedback only with accurate attribution and appropriate permission. Do not fabricate ratings or mark up self-serving reviews to pursue stars.
- Create one useful original resource based on recurring passenger questions or dispatch evidence. Good candidates include luggage/vehicle selection, booking a child seat, or planning a specific airport connection. Check existing content before adding overlapping pages.
- Revisit Search Console coverage and the three priority area pages. Expand only where demand and distinct information justify another page.

## Days 61–90: 27 December–25 January — refine using results

- Compare the previous 28 days with the preceding period, noting seasonality and low sample sizes. Report organic impressions, clicks, CTR, priority-page indexing, enquiries and completed bookings separately.
- Improve titles and page introductions where impressions indicate relevant demand but clicks are weak. Check query intent before rewriting.
- Identify useful pages with indexing problems and investigate canonical selection, duplication, internal links and server access. Do not repeatedly request indexing without fixing the cause.
- Repeat mobile performance tests after substantive changes. Use field data when available and keep lab results separate.
- Review the same AI-search prompts monthly, recording date, platform, search/browsing mode, wording and cited URLs. Results vary and manual checks are not a market-wide visibility score.

## AEO and GEO working rules

Write the answer first, then explain details. State verified service facts in visible text. Support airport facts with official sources. Keep identity, policies and contact details consistent across profiles, pages and the booker.

Google says AI features require the same SEO foundations, indexed pages and snippet eligibility; no special AI text file or schema is required. Maintain existing llms files as optional summaries, without treating them as ranking mechanisms. FAQ markup and speakable markup are not guarantees of featured answers, voice visibility or AI citations.

Robots source allows all crawlers, but production CDN/firewall access must be tested separately. Distinguish search crawlers from model-training crawlers when reviewing any future policy changes.

Manual prompt set: “Heathrow transfer from [priority area]”; “Heathrow minicab with child seat”; “How do Heathrow Minicab pickups work?”; “Heathrow Minicab waiting and cancellation policy”. Record whether the brand is mentioned, which URL is cited, and whether the answer is accurate.

## Owner handover: information needed next

- Confirm the licensed operator name/number and trading-brand relationship.
- Supply existing public business-profile URLs and identify who manages them.
- Nominate the three busiest pickup areas and provide approved policy/rate details.
- Confirm which search/analytics accounts already exist and who controls the external booker.
- Provide original fleet/team photographs approved for publication.

These are dependencies for specific tasks, not reasons to stop independent access checks or documentation work. Publication and external account mutations should be recorded separately from local preparation.

## References

- Google AI features: https://developers.google.com/search/docs/appearance/ai-features
- Google business details: https://developers.google.com/search/docs/appearance/establish-business-details
- Local listing and partner tracker: citations-local-links.md

No fixed ranking, review-count or booking-growth target is claimed before a baseline exists. Set commercial targets with the owner after the first measurement cycle.
