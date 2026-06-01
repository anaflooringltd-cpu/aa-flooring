# A&A Flooring — SEO Roadmap

Local search strategy for **aa-flooring.ca** — Coquitlam, BC flooring contractor.
Work through phases in order. Each phase builds on the last. Tick items off as they're done.

---

## Phase 1 — Foundation
> Do this week. Free. Highest ROI per hour spent.

- [ ] **Google Search Console** — add `aa-flooring.ca` as a property at search.google.com/search-console
  - Verify domain via DNS TXT record (Vercel manages DNS — add the record in the Vercel dashboard under the domain)
  - Submit sitemap: `https://aa-flooring.ca/sitemap.xml`
  - Request manual indexing for: `/`, `/services/hardwood`, `/service-areas/coquitlam`, `/hardwood-coquitlam`, `/contact`
- [ ] **Google Business Profile** — confirm these fields are filled in exactly:
  - Website: `https://aa-flooring.ca` (update from any old URL)
  - Phone: (778) 881-3604
  - Address: 629 Smith Ave, Coquitlam, BC V3J 2W5
  - Category: Flooring Contractor (primary) + Floor Refinishing Service (secondary)
  - Hours: Mon–Fri 9–6, Sat 10–4
  - Service areas: Coquitlam, Port Moody, Burnaby, Vancouver, Port Coquitlam, New Westminster, Surrey, Maple Ridge
- [ ] Upload 10+ photos to GBP: before/after installs, stair treads close-up, shop, owner on the job
- [ ] Add all 4 services to GBP services list

---

## Phase 2 — Reviews & Trust
> This month. Free. Reviews are the #1 local ranking signal after GBP completeness.

- [ ] Get GBP review shortlink: GBP dashboard → Share review form → copy the short URL
- [ ] Text the review link to every past customer — even just 10 more brings you to 30
- [ ] Target: **50 reviews** as fast as possible (currently 20 at 5.0 ⭐)
- [ ] Respond to all 20 existing reviews (brief, personal reply — shows Google you're active)
- [ ] Connect Google Places API to the website to show live reviews:
  - Get a `GOOGLE_PLACES_API_KEY` from Google Cloud Console (free tier covers this)
  - Get the `GOOGLE_PLACE_ID` for the business listing
  - Add both to Vercel env vars: `vercel env add GOOGLE_PLACES_API_KEY production --scope aa-flooring`
- [ ] Manually populate `src/data/google-reviews.json` with real reviews as static fallback (see format in file)

---

## Phase 3 — Content Expansion
> Next 30 days. Free. More pages = more keywords = more traffic.

**Enable 4 disabled cities** (currently `launch: false` in `src/lib/site-config.ts`):
- Port Coquitlam, New Westminster, Surrey, Maple Ridge
- Enabling each city auto-generates 4 combo pages (e.g., `hardwood-surrey`, `vinyl-laminate-new-westminster`)
- Need to add `citiesContent` entries in `src/lib/cities-content.ts` for each (neighborhoods, local notes)

**Fix missing OG image:**
- Create `public/og/default.png` (1200×630px) — currently a 404, breaks social sharing
- Should show the A&A Flooring name + a portfolio photo

**Strengthen homepage for keywords:**
- Add a keyword-rich subheading near the top of `src/app/page.tsx`
- Example: "Hardwood, vinyl & laminate installation across Coquitlam and the Lower Mainland"
- The current H1 ("Floors, finished the way they should be.") is beautiful but not keyword-targeted

**Add city-level FAQs:**
- Service pages have FAQ schema — city pages don't
- Adding FAQs to city pages helps capture "flooring [city]" question-based searches

---

## Phase 4 — Local Authority
> Ongoing. Free. Backlinks + citations = off-page ranking signals.

**Directory listings** — submit NAP (name, address, phone) consistently to:
- [ ] HomeStars (top contractor review site in Canada) — homestars.com
- [ ] Houzz — houzz.com/pro
- [ ] Yelp — biz.yelp.com
- [ ] Yellow Pages — yellowpages.ca
- [ ] BBB — bbb.org (get accredited)
- [ ] Angi / HomeAdvisor — angi.com
- [ ] Thumbtack — thumbtack.com
- [ ] Bark.com

**Backlinks from partners:**
- [ ] Ask your hardwood/vinyl suppliers if they have a "find an installer" page — get listed
- [ ] Reach out to 5 local interior designers: offer a referral partnership (they send you flooring jobs, you refer them)
- [ ] Ask renovation contractors (painters, kitchen renovators) for mutual referrals + links

**Social posting:**
- [ ] Post 1 before/after photo per week on Instagram (@aa.flooring)
- [ ] Cross-post to GBP (Google Posts) — updates show in the knowledge panel

---

## Phase 5 — Content Marketing / Blog
> Month 2+. Free. Long-tail keywords with real purchase intent.

Add a `/blog` section to the website (markdown files or Sanity CMS). Write for homeowners searching before hiring:

| Article | Target keyword | Est. monthly searches (Vancouver) |
|---|---|---|
| How Much Does Hardwood Flooring Cost in Vancouver? (2026) | hardwood flooring cost vancouver | 500–1,000 |
| Hardwood vs. Vinyl Plank: Which is Right for Your BC Home? | hardwood vs vinyl plank bc | 200–500 |
| Best Flooring for Condos and Strata Buildings in Metro Vancouver | condo flooring vancouver strata | 200–400 |
| Engineered vs. Solid Hardwood in BC's Climate | engineered hardwood bc humid | 100–300 |
| Stair Tread Replacement: Cost & Options in the Tri-Cities | stair tread replacement coquitlam | 50–100 |
| How to Choose Underlay for Strata Buildings in Port Moody | strata flooring underlay iic rating | 50–100 |

Each post should end with a quote form / CTA linking to `/contact`.

---

## Phase 6 — Google Ads (Paid)
> Start when organic traffic is established (month 2–3). Budget: $500–$800 CAD/month to start.

### Search Campaigns (highest ROI)

**Campaign structure:**
- Campaign 1: Hardwood Flooring
  - Keywords: `hardwood flooring coquitlam`, `hardwood floor installation burnaby`, `engineered hardwood vancouver`, `hardwood flooring contractor near me`
  - Landing page: `/services/hardwood` or `/hardwood-coquitlam`
- Campaign 2: Vinyl & Laminate
  - Keywords: `vinyl plank flooring installation vancouver`, `laminate flooring coquitlam`, `waterproof flooring burnaby`
  - Landing page: `/services/vinyl-laminate`
- Campaign 3: Stair Treads
  - Keywords: `stair tread replacement coquitlam`, `custom stair treads vancouver`, `stair nosing installation`
  - Landing page: `/services/stair-treads-casings`

**Ad settings:**
- Location: 40km radius around Coquitlam (matches `siteConfig.serviceRadiusKm`)
- Ad schedule: Mon–Sat 8am–7pm (when people are actively planning renovations)
- Enable **call extensions** — (778) 881-3604 shows directly in the ad
- Enable **location extensions** — shows 629 Smith Ave
- Use **Responsive Search Ads** (not expanded text ads)
- Match types: phrase match + exact match only (avoid broad match burning budget)

**Budget guidance:**
- CPC estimate: $3–$8 CAD for local flooring terms
- $600/month → ~75–200 clicks/month
- At 5% conversion: 4–10 quote requests/month from ads alone
- Track conversions: contact form submissions + phone calls

### Local Services Ads (Google Guaranteed)
Completely separate from Google Ads. Shows **above all other ads** for "flooring contractor near me".

- Pay per **lead** (not per click) — typically $15–$40 CAD/lead
- Requires: background check, business license, insurance verification
- Setup: ads.google.com/local-services-ads
- **Highly recommended** — this is the single highest-ROI paid channel for local contractors

### Retargeting (Month 3+)
Show display ads to people who visited but didn't convert:
- Install Google Tag Manager on the site
- Add Google Ads remarketing tag via GTM
- Create audience: "visited /services/* or /hardwood-* but did NOT reach /contact#thank-you"
- Budget: $100–$200/month
- Creative: before/after photo + "Still thinking about new floors? Get a free quote."

### Seasonal Campaign Timing
| Season | When to push budget | Message |
|---|---|---|
| Spring reno season | February–April | "Spring is floor season — book now before we fill up" |
| Fall reno season | August–October | "Renovate before the holidays" |
| Slow periods | November, January | Reduce to 50% budget |

---

## Phase 7 — Advanced Tracking & Optimization
> Month 4+. Ties everything together with data.

- [ ] **Google Analytics 4** — install alongside Vercel Analytics (GA4 shows keyword data; Vercel Analytics doesn't)
  - Add `gtag.js` via Google Tag Manager
- [ ] **Connect GSC to GA4** — see which keywords drive conversions, not just traffic
- [ ] **Vercel Speed Insights** — add `@vercel/speed-insights` to `src/app/layout.tsx` to monitor Core Web Vitals (affects rankings)
- [ ] **Hotjar** (free tier) — heatmaps to see where visitors drop off on the quote form
- [ ] **A/B test the quote form** — try putting it above the fold on service pages vs current position
- [ ] **GBP Q&A** — post your own questions + answers on the Business Profile (shows in knowledge panel, gets indexed)
- [ ] **ImageObject schema** — add structured data to portfolio photos (helps Google Images drive traffic)
- [ ] **Review velocity** — Google weights recent reviews heavily; aim for 2–3 new reviews per month minimum

---

## Current SEO Status (as of June 2026)

| Item | Status |
|---|---|
| Domain live | ✅ aa-flooring.ca |
| Sitemap | ✅ 35 URLs at /sitemap.xml |
| Schema markup | ✅ FlooringContractor, Service, FAQ, Breadcrumb, AggregateRating |
| Google Business Profile | ✅ 5.0 ⭐, 20 reviews |
| Vercel Analytics | ✅ Installed |
| Google Search Console | ❌ Not yet submitted |
| Live reviews on website | ❌ Google Places API not connected |
| OG image | ❌ /og/default.png missing |
| Port Coquitlam / Surrey pages | ❌ Cities disabled |
| Blog | ❌ Not built yet |
| Google Ads | ❌ Not started |
| Google Local Services Ads | ❌ Not started |
