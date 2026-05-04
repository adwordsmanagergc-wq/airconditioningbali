# SEO Checklist

Every item is implemented in the codebase. Replace placeholder images and add real GA/GSC IDs to go live.

## On-page SEO (every page)

- [x] Unique `<title>` (50–60 chars) — `generateMetadata()` per route
- [x] Unique meta description (140–160 chars)
- [x] Single `<h1>` with logical H2/H3 hierarchy
- [x] Open Graph tags (`title`, `description`, `image`, `url`, `type`)
- [x] Twitter Card (`summary_large_image`)
- [x] Canonical URL — `alternates.canonical` per route
- [x] Hreflang stubs — `en-ID` and `id-ID` in root layout
- [x] Visible breadcrumbs + `BreadcrumbList` schema (`src/components/Breadcrumbs.tsx`)
- [x] Internal linking — every service page links to every area; every area page links to all services and 4 neighbouring areas; footer lists every area

## Structured data (JSON-LD)

- [x] `Organization` site-wide (`src/components/schema/OrganizationSchema.tsx` in root layout)
- [x] `LocalBusiness` / `HVACBusiness` on home, contact, every area page (with per-area geo)
- [x] `Service` schema on every service page
- [x] `FAQPage` schema on every page with FAQs (home, services, areas, blog posts)
- [x] `BreadcrumbList` site-wide
- [x] `AggregateRating` in Organization (placeholder values, swap with real Google reviews)
- [x] `Product` schema on Gree/Daikin brand pages for each featured model
- [x] `Article` schema on blog posts
- [x] `SpeakableSpecification` on FAQ answers (helps Google Assistant lift answers)

## Technical SEO

- [x] Auto-generated `sitemap.xml` from routes (`src/app/sitemap.ts`)
- [x] `robots.txt` allowing all + explicit allow for `GPTBot`, `PerplexityBot`, `ClaudeBot`, `Google-Extended` (`src/app/robots.ts`)
- [x] Static pre-rendering (SSG) for every public route
- [x] `next/image` with WebP/AVIF, `width`/`height`, lazy loading
- [x] Image alt text with natural keyword inclusion
- [x] Core Web Vitals — `priority` hero image, font preconnect, no client-side state libraries
- [x] HTTP security headers (X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy) in `next.config.mjs`
- [x] HSTS header in `vercel.json`
- [x] Redirects placeholder in `next.config.mjs` (add 301s as needed)

## LLM / AI search optimisation (GEO/AEO)

- [x] Quick Answer box at the top of every page (40–60 words, factual, no fluff)
- [x] TL;DR summary directly under each H1
- [x] FAQ sections written in natural Q&A style, matching "People also ask" phrasing
- [x] Comparison tables (Gree vs Daikin, brand ranking, sizing tables, pricing tables)
- [x] Specifics and statistics (BTU per m², kWh consumption, IDR pricing, lifespan years)
- [x] E-E-A-T author + reviewer bylines on every blog post
- [x] About page with team credentials and "Reviewed by" lead-technician block
- [x] `llms.txt` at root — both static (`public/llms.txt`) and dynamic (`/llms.txt` route) versions
- [x] Speakable schema for voice/AI surfaces

## Conversion + UX

- [x] Sticky header with prominent WhatsApp button
- [x] Floating WhatsApp button (bottom-right, animated pulse)
- [x] Floating call button (bottom-left on mobile)
- [x] Sticky bottom mobile bar (Call | WhatsApp | Get Quote)
- [x] Quote form on every key page (home, every service, every area, contact, blog)
- [x] Trust strip (Gree/Daikin authorised, 10K+ jobs, 4.9★, 24/7) on every page
- [x] Phone clickable as `tel:` link
- [x] WhatsApp deep links with pre-filled context-specific messages
- [x] Pricing transparency — starting prices on every service and home page

## Accessibility (WCAG 2.1 AA)

- [x] Colour contrast meets AA on all text/background combinations
- [x] Visible `:focus-visible` outline ring across the site
- [x] All icon buttons have `aria-label` (WhatsApp, call, menu)
- [x] Header dropdowns expose `aria-haspopup` and `aria-expanded`
- [x] `<main>` landmark + skip-to-content link
- [x] Semantic HTML (`<nav>`, `<header>`, `<footer>`, `<article>`, `<section>`)
- [x] All images have meaningful `alt` text

## Pre-launch checklist (post-deploy)

- [ ] Replace all placeholder images in `public/images/` (see `README-IMAGES.md`)
- [ ] Add `NEXT_PUBLIC_GA_ID` for analytics
- [ ] Add `NEXT_PUBLIC_GSC_VERIFICATION` and verify in Google Search Console
- [ ] Submit `/sitemap.xml` to Google Search Console and Bing Webmaster
- [ ] Replace placeholder `aggregateRating` values with real Google review counts
- [ ] Add real testimonials with reviewer names (replace placeholders on home + area pages)
- [ ] Wire up `/api/quote` to your real email / Telegram / WhatsApp Business API endpoint
- [ ] Set up Google Business Profile with the same NAP (Name/Address/Phone) as the footer
- [ ] Add structured data testing — run every page through https://search.google.com/test/rich-results
- [ ] Run Lighthouse on production and confirm 95+ across all categories
