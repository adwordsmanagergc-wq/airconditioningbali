# Bali Air Conditioning Services — Website

Production-ready Next.js 14 website for an air conditioning services company operating across Bali, Indonesia. Built for SEO, AI search (LLM/GEO/AEO) and high conversion via WhatsApp.

## Stack

- **Next.js 14** (App Router, TypeScript, SSG)
- **Tailwind CSS** with a tropical-modern theme (cool blues, coral accent)
- **lucide-react** icons
- **JSON-LD structured data** on every page (LocalBusiness, HVACBusiness, Service, FAQPage, BreadcrumbList, Article, Product)
- **Vercel-ready** (vercel.json included)

## Quick start

```bash
npm install
cp .env.example .env.local   # edit values
npm run dev
```

Open <http://localhost:3000>.

```bash
npm run build && npm start   # production build
```

## Environment variables

See `.env.example`:

| Variable | Required | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | yes | Public canonical URL (used for sitemap, OG, JSON-LD) |
| `NEXT_PUBLIC_GA_ID` | no | Google Analytics 4 measurement ID (`G-XXXX...`) |
| `NEXT_PUBLIC_GSC_VERIFICATION` | no | Google Search Console verification token |
| `QUOTE_RECIPIENT_WHATSAPP` | no | Defaults to `6281808029595` |
| `QUOTE_RECIPIENT_EMAIL` | no | For optional email forwarding (wire up SMTP in `/api/quote`) |
| `TELEGRAM_BOT_TOKEN`, `TELEGRAM_CHAT_ID` | no | Optional Telegram quote notifications |
| `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` | no | Optional email forwarding |

## Editing content

All content lives under `src/data/`:

- `src/data/services.ts` — the 7 service offerings, pricing, what's included, process
- `src/data/brands.ts` — Gree and Daikin model line-up
- `src/data/areas.ts` — 40 areas with name, slug, region, lat/lng, blurb, neighbours
- `src/data/faqs.ts` — FAQ banks per service
- `src/data/posts.ts` — blog articles (markdown body + FAQ)
- `src/lib/site.ts` — business name, phone, address, hours, social

After editing, restart `npm run dev`. Builds are static — no CMS or DB needed.

### Adding a new area

1. Add an entry to `src/data/areas.ts`
2. Add a hero image to `public/images/areas/<slug>.jpg` (see `README-IMAGES.md`)
3. Done — page builds automatically at `/areas/<slug>`, sitemap and footer update automatically

### Adding a new blog article

1. Add an entry to `src/data/posts.ts` with markdown body
2. Done — page renders at `/blog/<slug>`

The renderer supports `## H2`, `### H3`, paragraphs, `- lists`, `| tables`, `> blockquotes`, `**bold**`, `*italic*`, `[links](url)`, and `` `code` ``.

## Image placeholders

Every image referenced in the site is documented in `README-IMAGES.md`. Replace placeholder JPGs in `public/images/` with the real photography. Recommended formats: WebP for photos, SVG for logos.

## SEO infrastructure

- `/sitemap.xml` — auto-generated from routes (`src/app/sitemap.ts`)
- `/robots.txt` — auto-generated, allows all major crawlers including `GPTBot`, `PerplexityBot`, `ClaudeBot` (`src/app/robots.ts`)
- `/llms.txt` — dynamic AI-crawler summary (`src/app/llms.txt/route.ts`)
- JSON-LD on every page — see `src/components/schema/`
- Hreflang stubs (`en-ID`, `id-ID`) wired in `layout.tsx`
- Per-page canonical URLs and unique meta titles/descriptions

See `SEO-CHECKLIST.md` for the full list.

## Quote form

`src/app/api/quote/route.ts` handles `POST /api/quote`. By default it builds a WhatsApp deep link with the form contents and returns it to the client (which opens WhatsApp). To also forward to email or Telegram, uncomment the relevant block in the route handler and add credentials to `.env.local`.

## Deployment

```bash
vercel deploy
```

The included `vercel.json` sets the Singapore region (`sin1`) for low Bali latency and adds an HSTS header. No build configuration needed — Vercel auto-detects Next.js.

## Performance budget

- LCP target: < 2.0s
- CLS target: < 0.05
- INP target: < 200ms
- Lighthouse target: 95+ across Performance / SEO / Accessibility / Best Practices

All pages are statically generated. The hero image is `priority` loaded; everything else is lazy. Web fonts are preconnected. No client-side state libraries.

## Accessibility

- WCAG 2.1 AA contrast across the palette
- Visible focus rings on all interactive elements
- Keyboard navigable header with proper ARIA on dropdowns
- ARIA labels on every icon button (WhatsApp/call floating buttons, mobile bar)
- Skip-to-content link

## Project tree

```
src/
  app/
    layout.tsx           — root layout, header/footer/floating buttons
    page.tsx             — home
    sitemap.ts, robots.ts
    api/quote/route.ts
    services/page.tsx + [slug]/page.tsx
    brands/page.tsx + [slug]/page.tsx
    areas/page.tsx + [slug]/page.tsx
    blog/page.tsx + [slug]/page.tsx
    about/page.tsx, contact/page.tsx
    llms.txt/route.ts
  components/             — Header, Footer, Hero, QuoteForm, FAQList, etc.
    schema/               — JSON-LD components
  data/                   — all content (services, areas, brands, faqs, posts)
  lib/                    — site config, utils, markdown renderer
public/
  images/                 — replace placeholders (see README-IMAGES.md)
  llms.txt                — static fallback
```

## License

Proprietary — © Bali Air Conditioning Services.
