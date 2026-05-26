# A&A Flooring — Claude Code Guide

## What this project is

Next.js 15 website for **A&A Flooring Accessories**, a Coquitlam, BC flooring contractor. The site is the primary SEO and lead-generation asset for the business.

**Live URL:** https://aa-flooring.vercel.app (Vercel preview domain until aa-flooring.ca is connected)  
**GitHub repo:** https://github.com/anaflooringltd-cpu/aa-flooring  
**Business email:** anaflooringltd@gmail.com  
**Phone:** (778) 881-3604

---

## Tech stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Language | TypeScript |
| CMS | Sanity (optional — site works without it) |
| Contact form | FormSubmit.co (no API key needed) |
| Analytics | Vercel Analytics (built-in) |
| Hosting | Vercel |
| Domain | aa-flooring.ca (pending connection) |

---

## Project structure

```
src/
  app/                    # Next.js App Router pages
    page.tsx              # Home
    about/page.tsx
    contact/page.tsx
    portfolio/page.tsx
    reviews/page.tsx
    services/
      page.tsx            # Services index
      [slug]/page.tsx     # Individual service pages
    service-areas/
      page.tsx            # Areas index
      [city]/page.tsx     # Individual city landing pages
    [combo]/page.tsx      # Service+city combo pages (e.g. hardwood-coquitlam)
    sitemap.ts            # Auto-generated sitemap
    robots.ts             # robots.txt
  components/
    quote-form.tsx        # Contact/quote form (FormSubmit.co)
    site-header.tsx
    site-footer.tsx
    before-after-slider.tsx
  lib/
    site-config.ts        # ← Single source of truth for all business info
    services-content.ts   # Service descriptions
    cities-content.ts     # City landing page copy
    service-city-matrix.ts # Service × city combo pages
    reviews.ts            # Review loading logic
    sanity/               # Sanity CMS client (optional)
  data/
    google-reviews.json   # Static fallback reviews
public/
  images/                 # All site images (hero, portfolio, services, etc.)
```

---

## Environment variables

Minimum needed to run locally and deploy:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://aa-flooring.vercel.app

# Optional — site works without these
NEXT_PUBLIC_SANITY_PROJECT_ID=      # Sanity CMS
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=
GOOGLE_PLACES_API_KEY=              # Live Google reviews
GOOGLE_PLACE_ID=
```

The contact form uses **FormSubmit.co** — no API key required. Submissions go to `anaflooringltd@gmail.com`. First submission triggers a one-time email activation.

---

## Running locally

```bash
npm install
cp .env.example .env.local   # edit NEXT_PUBLIC_SITE_URL if needed
npm run dev                  # http://localhost:3000
```

---

## Key files to know

- **`src/lib/site-config.ts`** — change business name, phone, address, service areas, services here. Single source of truth used everywhere.
- **`src/components/quote-form.tsx`** — contact form using FormSubmit.co
- **`src/data/google-reviews.json`** — static reviews shown until Google Places API is connected
- **`src/lib/portfolio-content.ts`** — portfolio images and captions
- **`src/lib/cities-content.ts`** — copy for each city landing page
- **`public/images/`** — all images (hero, portfolio, service photos, logo, founder)

---

## Deploying

### Vercel (current host)
Push to `main` → Vercel auto-deploys. No build config needed.

To deploy manually:
1. Go to vercel.com → Import `anaflooringltd-cpu/aa-flooring`
2. Set `NEXT_PUBLIC_SITE_URL` env var
3. Click Deploy

### Custom domain (aa-flooring.ca)
1. Vercel dashboard → Project → Settings → Domains
2. Add `aa-flooring.ca`
3. Update DNS at domain registrar to point to Vercel nameservers
4. Update `NEXT_PUBLIC_SITE_URL=https://aa-flooring.ca`
5. Update canonical URLs in `src/lib/site-config.ts`

---

## Sanity CMS (optional, not yet configured)

The site works without Sanity. The Sanity client returns `null` when `NEXT_PUBLIC_SANITY_PROJECT_ID` is empty — all content falls back to static data in `src/lib/` and `src/data/`.

When ready to set up Sanity:
1. Go to sanity.io → Create project
2. Copy the Project ID into `NEXT_PUBLIC_SANITY_PROJECT_ID`
3. Run `npm run dev` — the Sanity Studio is at `/studio`

---

## Business context

- Owner-operated shop in Coquitlam since 2016
- Specializes in hardwood, vinyl/laminate, and custom stair treads milled in-shop
- Primary markets: Tri-Cities (Coquitlam, Port Moody, Port Coquitlam), Burnaby, Vancouver
- Key differentiators: stair specialist, owner-on-every-job, Tri-Cities local
- Growth plan is in `docs/business-plan.md`
