export type Post = {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  date: string;
  author: string;
  reviewer?: string;
  readingTime: string;
  body: string; // simple markdown-ish: ## H2, blank line paragraphs, - lists, | tables, > blockquote
  faq: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: "daikin-vs-gree-bali",
    title: "Daikin vs Gree in Bali: Which AC Brand Is Best for the Tropics?",
    description: "Side-by-side comparison of Daikin and Gree air conditioners in Bali — warranty, noise, real-world durability in salt air and humidity, and which one wins for your villa.",
    excerpt: "Daikin or Gree? We install both every week across Bali. Here's the honest comparison — warranty, noise, real-world salt-air durability, and which one wins for your villa.",
    date: "2026-01-12",
    author: "I Made Suarjana, Lead Technician",
    reviewer: "Reviewed by the technical team at Air Conditioning Bali",
    readingTime: "8 min read",
    body: `## TL;DR

Gree gives you excellent value-for-money inverter splits in Bali. Daikin gives you the quietest, most precise, longest-lasting unit money can buy on the island. For most villas and apartments, Gree is the smart pick — for master bedrooms, hotel rooms and noise-sensitive spaces, the Daikin premium is worth it.

## Quick comparison table

| Feature | Gree | Daikin |
| --- | --- | --- |
| Compressor warranty | 5 years | 3 years |
| Indoor noise (low fan) | 25–28 dB | 19–22 dB |
| Refrigerant | R32 | R32 |
| Coil protection | Gold Fin (anti-corrosion) | Blue Fin (anti-corrosion) |
| Inverter ramp smoothness | Very good | Excellent |
| Spare parts in Bali | Excellent | Excellent |
| Best for | Villas, apartments, value-conscious | Premium villas, hotel rooms, hospitality |

## Warranty: where Gree actually wins

This surprises people. Gree gives a 5-year compressor warranty — two years longer than Daikin's 3 years. In Bali's tropical environment that matters: the compressor is the single most expensive component to replace, and it's the part most stressed by 30°C+ ambient temperatures running 8–12 hours a day.

We register every unit with Gree Indonesia and Daikin Indonesia under your name, so claims go directly through us as the authorised partner.

## Noise: Daikin is in another league

A Daikin Smile Inverter on low fan runs at 19–22 dB. That's quieter than a whisper. A Gree Lomo Eco on low fan runs at 25–28 dB. Both are good — but in a master bedroom or a hotel suite, the Daikin difference is audible.

If your unit is over a study, a music room or a baby's bedroom, the Daikin premium is worth it. If it's in a guest bedroom or living room, the Gree is fine.

## Salt-air corrosion: Bukit and beachfront villas

This is where Bali destroys cheap AC units. Both Gree and Daikin offer anti-corrosion coil treatments — Gree calls it Gold Fin, Daikin calls it Blue Fin. Both work. Both extend outdoor unit life from roughly 4–5 years (untreated) to 8–10 years (treated) on the Bukit and beachfront Canggu.

If you're buying for an Uluwatu, Bingin, Balangan or Pererenan villa, **always pay the small extra for the anti-corrosion model** — it's the cheapest insurance you can buy.

## Inverter performance and electricity bills

Both brands run R32 refrigerant, both have full inverter compressors, both will run at 30–60% lower steady-state power than an old non-inverter unit. The Daikin inverter is smoother — it ramps the compressor speed more gradually, which means less wear and slightly lower bills (we estimate 5–10% lower than the equivalent Gree).

For a 1 PK unit running 8 hours a day in Bali, expect roughly 90–150 kWh per month.

## Which should you buy?

- **Buy Gree if:** you want the best value for money, you have multiple bedrooms to fit out, you care about the 5-year compressor warranty, or you're outfitting a long-term rental villa.
- **Buy Daikin if:** noise matters, you're outfitting a hotel or boutique villa, you want the quietest possible bedroom unit, or you want the longest real-world lifespan.

## What we recommend most often

For a typical 4-bedroom Bali villa:

- Master bedroom + main living: Daikin (quiet, premium)
- Guest bedrooms + staff rooms: Gree (value)

That mix is what most of our villa-package clients choose. WhatsApp us a floor plan and we'll size every room and quote both brands side by side.`,
    faq: [
      { q: "Is Daikin worth the extra cost in Bali?", a: "For master bedrooms, hotel rooms and noise-sensitive spaces — yes. The lower noise floor (19–22 dB) and smoother inverter are noticeable. For guest rooms and living areas, Gree gives you most of the performance for a lower spend." },
      { q: "Are Gree units reliable in Bali's humidity?", a: "Yes. Modern Gree inverters with R32 refrigerant and Gold Fin coil protection are designed for tropical conditions, with a 5-year compressor warranty. We've installed thousands across Bali and the failure rate is comparable to Daikin." },
      { q: "Which brand handles salt air better?", a: "Both — provided you buy the anti-corrosion model. Gree's Gold Fin and Daikin's Blue Fin treatments both roughly double outdoor unit lifespan in coastal areas." },
      { q: "Are spare parts available in Bali?", a: "Yes for both. We carry capacitors, sensors, PCBs and refrigerant for both brands in our service vans, and Indonesian distributors stock everything else with 1–3 day lead time to Bali." },
    ],
  },
  {
    slug: "how-often-to-service-ac-bali",
    title: "How Often Should You Service Your AC in Bali? (Complete Guide)",
    description: "Definitive AC servicing schedule for Bali — by climate zone, usage hours, and unit type. Covers chemical wash, gas check and filter cleaning intervals.",
    excerpt: "Three months is the rule. But beach-club units, Bukit villas and short-stay rentals need more. Here's the full Bali AC servicing schedule.",
    date: "2026-01-08",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "6 min read",
    body: `## The short answer

Service every **3 months** as a baseline. Service every **6–8 weeks** if you're a beach club, a beachfront villa, a short-stay rental with high turnover, or a unit running more than 12 hours a day.

That's far more often than the manufacturer manuals suggest, but those manuals are written for temperate climates. Bali's combination of 80%+ humidity, year-round 30°C+ ambient, salt air on the coast and high-volume tropical dust means evaporator coils foul up roughly three times faster than they would in Europe or Australia.

## Why Bali is different

- **Humidity** — moisture condenses on the cold evaporator coil and feeds mould growth between cooling cycles.
- **Dust** — the dry season piles fine volcanic and traffic dust onto outdoor condensers, dropping heat-rejection capacity by 20–30%.
- **Salt air** — within 1km of the coast, salt aerosol corrodes outdoor fins and bearings.
- **Hours of use** — many Bali villas run AC 10–14 hours a day, year-round. That's roughly double the annual run-hours of a typical Mediterranean home.

## Servicing schedule by use case

| Use case | Service frequency | Chemical wash |
| --- | --- | --- |
| Owner-occupied villa, normal use | Every 3 months | Every 12 months |
| Short-stay villa (Airbnb/Booking) | Every 6–8 weeks | Every 6 months |
| Beachfront / Bukit villa | Every 6–8 weeks | Every 6 months |
| Restaurant / café (open kitchen) | Monthly | Every 4 months |
| Beach club | Monthly | Every 3 months |
| Office / retail | Every 3 months | Every 12 months |
| Hotel guest rooms | Every 6–8 weeks (rotation) | Every 6 months |

## Service vs chemical wash — what's the difference?

A **service** is a 30-minute preventative visit per unit. We light-clean the filter and coil, flush the drain line, check refrigerant pressure on both sides, take a capacitor microfarad reading, tighten electrical terminations, hose down the outdoor condenser, run a 15-minute cool-down test and log the temperature drop.

A **chemical wash** is a 45-minute deep clean. We foam an AC coil cleaner onto the evaporator, leave it to dwell, then high-pressure rinse with a bag-and-rinse cover catching the dirty water. This is what restores cooling capacity on a unit that's been neglected.

## Signs your AC needs service right now

- Cooling has dropped — air comes out cool but the room never reaches setpoint
- Musty or sour smell when the unit starts up
- Visible black mould on the louvres or fan blades
- Water dripping from the indoor unit
- Ice forming on the copper pipes outside
- PLN bill suddenly higher with no usage change

Any of those, message us — we'll quote on the spot.

## Don't DIY this in Bali

We get a few callouts a month to clean up after a DIY chemical wash gone wrong — usually a flooded room because the bag-and-rinse cover wasn't fitted properly, or a damaged PCB because water got into the electronics bay. The small saving isn't worth the unit replacement.`,
    faq: [
      { q: "Can I just clean the filters myself between services?", a: "Yes — and you should. Pull the front cover, lift out the mesh filters, rinse under the shower, dry in the shade and refit. Doing this monthly between professional services keeps cooling capacity high." },
      { q: "What happens if I never service my AC?", a: "Cooling capacity drops 20–40% within 12 months, electricity bills rise, mould smells appear, drain lines block and flood the room, and the compressor eventually dies from running flat-out trying to compensate. Most Bali compressor failures we see are unserviced units." },
      { q: "Do you offer a discount for multiple units?", a: "Yes — from 3 units in one visit, we drop the per-unit rate. Villa managers booking 6+ units get our maintenance-package rate." },
    ],
  },
  {
    slug: "what-affects-ac-installation-cost-bali",
    title: "What Affects AC Installation Cost in Bali? A Buyer's Guide",
    description: "An honest guide to what drives the cost of an air conditioner installation in Bali — unit choice, pipe length, mounting, power supply and warranty. No hidden surprises.",
    excerpt: "Why does one quote come in much higher than another? A guide to the seven factors that actually drive AC installation cost in Bali — so you can compare quotes fairly.",
    date: "2026-01-04",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "7 min read",
    body: `## TL;DR

Two AC quotes can look very different even for the "same" job. The seven factors below are what actually drive the price. Once you understand them, comparing quotes from different installers becomes much easier — and you'll know whether the cheap quote is genuinely cheap or just leaving things out.

## 1. The unit itself

The single biggest variable. A budget non-inverter Midea 1 PK is at one end of the scale; a premium Daikin Smile Inverter 1 PK with anti-corrosion coatings is at the other. The Gree mid-range sits comfortably in between.

What you pay for as you move up the scale: quieter indoor units, smoother inverter compressors, better dehumidify performance, longer compressor warranty, anti-corrosion coil coatings, and longer real-world lifespan in tropical conditions.

## 2. Installation labour

A two-technician crew doing a proper install — site survey, vacuum purge to 500 microns, pressure leak test, neat electrical termination, commissioning cool-down test — is the going rate from a quality installer in Bali. Cheaper installs exist, and they are usually one technician, no vacuum, no leak test, which means a refrigerant leak within 6 months.

## 3. Pipework

The first 4m of insulated copper pipe and drain is included in our standard install. Beyond that, every additional metre is charged at a fixed rate. Multi-storey villas with long vertical runs from outdoor unit to indoor unit add to the price quickly — sometimes the difference between a IDR-friendly quote and an eye-watering one is just pipe length.

## 4. Outdoor unit mounting

A wall bracket on flat blockwork is the cheapest. A ground stand on a paved area is similar. A raised platform, a roof rack, or a custom stainless-steel salt-resistant bracket for a Bukit clifftop villa all add to the price. We often see this skipped by cheap quoters, then bolted on as a "surprise" once the install is underway.

## 5. Power supply

Every install needs an isolator at the outdoor unit (required by Indonesian electrical regulations, and needed if you ever want to service the unit without killing power to the whole house). If your villa needs a new dedicated breaker in the consumer unit, that adds to the price. New 3-phase circuits for cassettes and VRF systems add more.

## 6. Warranty and registration

A genuinely warrantied install includes registration of the unit with the manufacturer (Gree Indonesia or Daikin Indonesia) under your name, plus the installer's own workmanship warranty. "Cash" installs without paperwork look cheap until the compressor fails in year 2 and there's no warranty to claim against.

## 7. Add-ons that are worth paying for

- **Anti-corrosion coil treatment** on outdoor units within 1km of the coast — extends lifespan dramatically
- **Surge protector** on the outdoor isolator — prevents PCB damage from wet-season power surges
- **Salt-resistant stainless brackets** on the Bukit
- **Condensate pump** instead of gravity drain on cassettes and ducted

These aren't always quoted by default. Ask. They pay for themselves.

## What our installs include

- Site survey and BTU sizing
- Wall bracket, outdoor stand, isolator
- Up to 4m of insulated copper pipe and drain
- Vacuum purge to 500 microns
- Pressure leak test
- R32 refrigerant top-up if required
- 30-minute commissioning cool-down test
- 12-month workmanship warranty + registered manufacturer warranty
- Photo report and printed warranty card

## How to get a fair quote

WhatsApp us a photo of the room, the planned outdoor unit location and the brand you're considering. We reply with a fixed total in 15 minutes, no callout fee — and we list every line item, so you can compare it apples-to-apples with any other quote you've received.`,
    faq: [
      { q: "Why do quotes vary so much for the same job?", a: "Because cheaper quotes often skip line items: vacuum purge, leak test, isolator, anti-corrosion coatings, warranty registration, surge protection. A like-for-like comparison usually narrows the gap dramatically." },
      { q: "Do you charge a callout fee?", a: "No. Quotes are free. We only charge for the work itself." },
      { q: "Can I supply my own unit?", a: "Yes — install-only is available for a standard split. We won't warranty the unit itself if you supply, but we still warranty the installation workmanship for 12 months." },
      { q: "Do you remove the old unit?", a: "Yes — included free with any new install. We pump down the old refrigerant safely and recycle through a licensed scrapper." },
    ],
  },
  {
    slug: "ac-bali-bts-sizing-guide",
    title: "What Size Air Conditioner Do You Need? Bali BTU Sizing Guide",
    description: "Complete BTU sizing guide for Bali — calculate the right AC capacity for your villa bedroom, living room, café or office. Why Bali sizing runs higher than Australia or Europe.",
    excerpt: "Why most Bali ACs are undersized — and how to size a unit properly for villa bedrooms, open-plan living rooms and beach-club terraces.",
    date: "2025-12-28",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "6 min read",
    body: `## Quick sizing table for Bali

| Room | Capacity | PK | BTU | Typical area |
| --- | --- | --- | --- | --- |
| Small bedroom | 0.5 PK | 5,000 BTU | up to 10m² | rare in villas |
| Bedroom | 1 PK | 9,000 BTU | up to 18m² | most master bedrooms |
| Large bedroom / small living | 1.5 PK | 12,000 BTU | up to 25m² | living rooms, large suites |
| Living room / open-plan | 2 PK | 18,000 BTU | up to 35m² | open-plan villa lounges |
| Restaurant / large lounge | 2.5 PK | 24,000 BTU | up to 45m² | cassette territory |
| Big space / beach-club deck | 5 PK | 48,000 BTU | up to 90m² | dual cassette setup |

## The Bali rule of thumb

**600 BTU per m²** for bedrooms. **700 BTU per m²** for living rooms with high ceilings, west-facing glass or open-plan kitchens.

That's about 30% higher than the typical Australian or European rule. Why? Because Bali's ambient is hotter (average daytime 30–32°C versus 22–25°C in Sydney), the humidity load on the unit is much higher, and most villas have 3.5–4m ceilings with single-glazed louvres, which don't insulate.

## What "PK" means

PK stands for "paardenkracht" (Dutch horsepower), the legacy unit Indonesian AC sellers use. The conversion is roughly:

- 0.5 PK ≈ 5,000 BTU
- 1 PK ≈ 9,000 BTU
- 1.5 PK ≈ 12,000 BTU
- 2 PK ≈ 18,000 BTU
- 2.5 PK ≈ 24,000 BTU

If a salesperson quotes you in PK, just convert to BTU using this table.

## Common sizing mistakes in Bali

**Mistake 1: Trusting the builder.** Bali villa builders almost always under-spec to save the client money on the unit. A 0.5 PK in a 15m² bedroom is the most common one we see — it'll never reach setpoint and will run 24/7.

**Mistake 2: Going too big.** This is rarer but worse — an oversized unit short-cycles, which means it cools the room fast then shuts off before it can dehumidify. The room ends up cool but clammy, and the unit wears out faster.

**Mistake 3: Forgetting glass.** A bedroom with a wall of west-facing glass needs 1.5 PK even at 18m². Account for sun load.

**Mistake 4: Ignoring the kitchen.** An open-plan living-kitchen adds about 30% to the cooling load. A 30m² open-plan space with a kitchen needs 2 PK (18,000 BTU), not 1.5 PK.

## How we size on a survey

For villas we look at:

- Floor area in m²
- Ceiling height (most Bali villas are 3.5–4m, not 2.4m like a hotel)
- Glazing area and orientation (west-facing is the worst)
- Whether the kitchen is open-plan
- Whether the room shares an opening with another conditioned space
- Number of occupants at peak (each adult adds ~400 BTU)
- Heat-generating appliances (oven, plasma TV, etc.)

We then add a 15% safety margin for tropical-storm hot days when the unit needs to recover quickly. The result is the right BTU — which is then matched to the next size up in the actual product range.

## Get a free sizing quote

Send us a photo of the room and the dimensions on WhatsApp. We'll come back with the right PK rating and a fixed install quote.`,
    faq: [
      { q: "Is bigger always better?", a: "No — oversized units short-cycle and don't dehumidify properly. Sizing should be 'just right' with a 15% margin, not 'as big as possible'." },
      { q: "What size for a 20m² bedroom?", a: "1 PK (9,000 BTU). Step up to 1.5 PK if there's a lot of west-facing glass or the ceiling is over 4m." },
      { q: "What about open-plan villa living rooms?", a: "Most need 2 PK (18,000 BTU) for a 30–35m² space. If it includes the kitchen, plan on a 2.5 PK or split the load between two units." },
      { q: "Do I need a separate AC for the kitchen?", a: "If the kitchen is enclosed and you cook a lot, yes — a small wall split keeps cooking heat out of the rest of the house. If it's open-plan, just upsize the living room unit." },
    ],
  },
  {
    slug: "why-ac-smells-bad-bali",
    title: "Why Your AC Smells Bad in Bali — Causes and Fixes",
    description: "Mouldy, sour or sock-like smell from your Bali air conditioner? Here are the four most common causes and how we fix each one — same day, in most cases.",
    excerpt: "That sour, mouldy smell from your AC is fixable — usually in one visit. Here are the four causes and how we diagnose each one.",
    date: "2025-12-21",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "5 min read",
    body: `## TL;DR

That sour, mouldy or "wet sock" smell from your AC is almost always **mould on the evaporator coil**, **a blocked drain line**, or **a dead animal in the outdoor unit**. All three are fixable in a single 1-hour visit.

## The four common causes

### 1. Mould on the evaporator coil (90% of cases)

The evaporator coil sits behind the indoor unit's louvres and gets cold and wet every time the AC runs. Between cycles, that moisture sits on the coil and on the foam filters in front of it — perfect breeding ground for mould and bacteria. The smell is strongest on start-up.

**Fix:** chemical wash. We foam an AC coil cleaner onto the evaporator, let it dwell for 5 minutes, then high-pressure rinse with a bag-and-rinse cover. The smell is gone the same day.

### 2. Blocked or stagnant drain line

The condensate drain line collects water from the evaporator and runs it outside. In Bali, that line gets clogged with biofilm, algae and dust. The standing water turns sour and the smell wicks back up into the room.

**Fix:** we blow the line out with compressed air, then flush with anti-algae solution. Takes 15 minutes per unit.

### 3. Dead animal in the outdoor unit

Yes, really. Geckos, frogs and the occasional rat get into the outdoor condenser cabinet. The smell wafts back into the room through the refrigerant pipe penetration in the wall.

**Fix:** we open the outdoor unit, remove whatever's in there, and seal the wall penetration with foam.

### 4. Refrigerant leak (rare but serious)

A refrigerant leak doesn't usually smell, but if there's enough leakage and the gas oil contaminates the coil, you can get a faintly sweet chemical smell. This needs immediate attention — running an under-charged system damages the compressor.

**Fix:** we leak-test with electronic detector and UV dye, repair the leak, and recharge the system.

## How to keep the smell away

- Run the AC in **fan-only mode for 10 minutes after each cooling session** — this dries the coil and stops mould growing
- Clean the foam filters monthly (rinse, dry, refit)
- Schedule a chemical wash every 12 months for owner-occupied villas, every 6 months for short-stay rentals
- Keep the bedroom door closed when the AC is running so it can dehumidify properly
- During the wet season, use a small desiccant bag on the bedside table

## When to call us

If the smell is back within 4 weeks of a wash, you have either a deep coil contamination (needs a more aggressive enzymatic treatment) or a drain pump issue (the water isn't draining at all and is sitting in the pan).

WhatsApp us a short video of the smell description and the unit running — we'll diagnose remotely and tell you which fix you need before sending a tech.`,
    faq: [
      { q: "Will replacing the filter fix the smell?", a: "It helps but rarely fixes it on its own — the mould is on the coil behind the filter, not on the filter itself. A chemical wash is the proper fix." },
      { q: "Is the mould smell dangerous?", a: "It's not directly toxic for healthy adults, but it can trigger asthma, allergies and sinus issues. Children, elderly and asthmatic guests are more sensitive." },
      { q: "How long until the smell comes back after a chemical wash?", a: "In Bali, typically 6–12 months for owner-occupied villas, 3–6 months for short-stay rentals. Running fan-only mode after each cooling session significantly extends the gap." },
    ],
  },
  {
    slug: "villa-ac-maintenance-contracts-bali",
    title: "Villa Owner's Guide to AC Maintenance Contracts in Bali",
    description: "Everything Bali villa owners and managers need to know about AC maintenance contracts — what's included, scheduling, photo reports, breakdown response, and how to avoid the worst pitfalls.",
    excerpt: "If you own or manage a Bali villa, an AC maintenance contract pays for itself in avoided repairs. Here's what to look for, what to avoid, and the questions to ask any provider.",
    date: "2025-12-15",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "7 min read",
    body: `## TL;DR

A good AC maintenance contract on a Bali villa includes scheduled servicing, photo reports, priority breakdown response and an annual deep chemical wash on every unit. For absentee owners and high-occupancy short-stay villas, it's the cheapest insurance against the cost of a single compressor replacement.

## Why villas need contracts more than houses

A typical Bali villa has 5–10 AC units, each running 8–14 hours a day in the hottest, most humid climate in the country. Without a maintenance schedule:

- Cooling capacity drops 20–40% within 12 months
- Drain lines block and water leaks ruin floors
- Compressors fail prematurely from running flat-out
- Guest reviews suffer ("the AC was loud and weak")
- Repair costs spike, often unpredictably

A contract turns unpredictable big repair bills into predictable small service bills.

## What a good Bali villa contract looks like

- **Scheduled visits** — monthly, quarterly or guest-changeover
- **All servicing labour included** — no per-visit fee
- **Photo and video report after every visit** — owner sees what was done
- **Priority response on breakdowns** — same-day, no callout fee
- **Discounted parts** — capacitors, sensors, refrigerant, drain pumps
- **One annual deep chemical wash per unit included**
- **Direct WhatsApp line for the villa manager** — same person every time
- **Owner reporting in English** — for absentee owners overseas

## Pitfalls to avoid

**1. Contracts that exclude parts.** Some companies offer a "contract" that covers visits but charges full retail for any part. Real contracts include discounted parts, capped repair pricing and free filter replacements.

**2. Different technician every visit.** Continuity matters. The same tech learning your villa builds up knowledge — they remember which unit had a slow gas leak last quarter, which capacitor reading was borderline.

**3. No written reports.** Without photo evidence and a service card, you have no idea if work was actually done. Demand reports.

**4. "We'll come when we can" scheduling.** Real contracts have date-stamped visits with WhatsApp reminders 48 hours before. If your provider can't tell you what month they'll show up next, they're not running a real schedule.

**5. No emergency response commitment.** A contract that says "best effort" on breakdowns isn't worth much during peak season when every villa needs help. Look for a written commitment to same-day response in your area.

## What we offer

We run quarterly, monthly and guest-changeover contracts across Bali. Same technician on every visit where possible. Photo report by WhatsApp within an hour of leaving. Same-day breakdown response in South Bali, the Bukit and Ubud. Discounted parts at our wholesale rate. WhatsApp owner-facing reports in English.

## How to start

Send us your villa address and the number of AC units. We do a free audit visit, log every unit (brand, model, BTU, age, last service) into an asset register PDF, and quote a fixed monthly or quarterly contract. No setup fee.`,
    faq: [
      { q: "Do contracts cover repairs?", a: "Labour on minor repairs (capacitor replacement, sensor swap, drain unblock) is included on contract. Major parts (compressor, PCB, fan motor) are quoted at our wholesale-plus rate, capped at agreed prices in the contract." },
      { q: "Can I pause the contract during low season?", a: "Yes — many short-stay villas pause monthly contracts during Ramadan or low season and revert to quarterly. We're flexible." },
      { q: "Do you handle multiple villas under one account?", a: "Yes — we have several villa management groups on a single master contract with monthly invoicing across 10–30 villas." },
      { q: "What if my villa is in Ubud or the Bukit?", a: "Same coverage applies — we have technicians based in Canggu, the Bukit and Ubud, and the response time commitment is the same." },
    ],
  },
  {
    slug: "inverter-vs-non-inverter-ac-bali",
    title: "Inverter vs Non-Inverter AC: Which Saves More in Bali?",
    description: "Inverter air conditioners cost more upfront but use much less power. Here's the real-world comparison in Bali — kWh, lifespan, noise, comfort.",
    excerpt: "Inverters save 30–40% on power versus non-inverters and last longer. Here's the full Bali comparison and why we install inverters only.",
    date: "2025-12-08",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "5 min read",
    body: `## TL;DR

In Bali, inverter ACs comfortably pay back the upfront premium within their service life — usually within 2 years for any unit running more than 6 hours a day. For owner-occupied villas and short-stay rentals, always buy inverter. For a rarely-used staff room or storage area, non-inverter is fine.

## Power consumption — the real difference

A 1 PK unit running 8 hours a day:

| Type | Avg power draw | Monthly kWh |
| --- | --- | --- |
| Non-inverter 1 PK | 950W average | ~228 kWh |
| Inverter 1 PK | 600W average | ~144 kWh |
| **Difference** | | **~84 kWh per month per unit** |

Multiply that across 6 units in a 4-bedroom villa and the savings are significant — typically enough to cover the upfront premium on the inverter units within 2 years.

## How inverter actually works

A non-inverter compressor runs at full speed when the AC is on, and shuts off completely when the room hits setpoint. It then short-cycles back on a few minutes later when the temperature drifts. Each compressor start-up draws a heavy current spike.

An inverter compressor varies its speed continuously — it ramps up hard when you first turn the unit on, then gradually slows to a low maintenance speed once the room is at setpoint. No on-off cycling. No current spikes. Steady, low-power running.

## Other inverter benefits

- **Quieter** — inverters at low speed run at 19–28 dB versus 38–45 dB for non-inverters
- **Smoother temperature** — non-inverters swing ±2°C around setpoint; inverters hold within ±0.5°C
- **Less wear on the compressor** — fewer start-up cycles means longer real-world lifespan (10–12 years versus 6–8 years for non-inverters in Bali)
- **R32 refrigerant** — modern inverters use R32, which has 1/3 the global warming impact of older R410A or R22

## When non-inverter still makes sense

- Rarely-used staff rooms (under 2 hours a day)
- Storage areas where temperature swing doesn't matter
- Very tight budgets where upfront cost dominates
- Replacing in-kind on a short-life rental property

## What we recommend

For any villa, apartment or business in Bali, we install inverter only. The upfront premium is recovered well within service life through PLN bill savings alone, and the longer lifespan means an extra 3–5 years of service before replacement.

The Gree Lomo Eco and Daikin Smile Inverter ranges are both excellent inverter choices for a 1 PK install.`,
    faq: [
      { q: "Can I tell if my current AC is inverter or non-inverter?", a: "Look for the word 'Inverter' on the indoor unit faceplate, or check the energy rating sticker — inverters typically show 4–5 stars under SNI energy labelling, non-inverters typically 1–3 stars. We can also tell from the model number on a quick photo." },
      { q: "Do inverters work with solar?", a: "Yes — inverter ACs play very well with solar systems because they don't have the heavy startup current spikes that non-inverters do. A 3kW solar system can comfortably run 2–3 inverter ACs during sunny hours." },
      { q: "Are inverter compressors more reliable?", a: "Yes in real-world Bali use. The lack of on-off cycling halves the mechanical wear on the compressor. Most inverter compressors last 10+ years here; non-inverters typically 6–8." },
    ],
  },
  {
    slug: "top-ac-problems-canggu-villas",
    title: "Top 7 AC Problems in Canggu Villas (and How to Fix Them)",
    description: "After thousands of jobs in Canggu, here are the seven most common AC faults we see — water leaks, weak cooling, mould, breaker trips and more. Plus how each one is fixed.",
    excerpt: "We've seen every AC problem a Canggu villa can throw at us. Here are the seven we fix most weeks — with the real causes and the actual fixes.",
    date: "2025-12-01",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "8 min read",
    body: `## After thousands of jobs in Canggu...

These are the seven AC problems we see most often in Canggu villas, in order of frequency. Five of them are preventable with regular servicing.

## 1. Indoor unit dripping water (the #1 callout)

**Cause:** blocked drain line. Algae, mould and dust have clogged the condensate pipe; water is overflowing the drain pan and running down the wall.

**Fix:** blow out the line with compressed air, flush with anti-algae solution. 15 minutes per unit.

**Prevention:** quarterly servicing keeps drain lines clear.

## 2. AC running but not cooling well

**Cause:** in Canggu, usually one of three things — clogged evaporator coil (60% of cases), low refrigerant gas from a slow leak (25%), or failed run capacitor (15%).

**Fix:** chemical wash for the coil; pressure-test and recharge for the gas leak; capacitor swap for the electrical fault.

**Prevention:** chemical wash every 12 months for owner-occupied villas, every 6 months for short-stay rentals.

## 3. Musty or sour smell on start-up

**Cause:** mould on the evaporator coil and in the foam filters. Canggu's coastal humidity feeds it fast.

**Fix:** chemical wash plus filter sanitiser spray.

**Prevention:** run fan-only mode for 10 minutes after each cooling session to dry the coil; replace foam filters annually.

## 4. Outdoor unit corroded and noisy

**Cause:** salt-air corrosion on the condenser fins and fan bearings. Beachfront Canggu villas (Echo Beach, Berawa, Pererenan) get the worst of this.

**Fix:** depending on severity — fin straightening, bearing replacement, or full outdoor unit replacement. We always recommend anti-corrosion-coated outdoor units (Gree Gold Fin, Daikin Blue Fin) on any Canggu install.

**Prevention:** quarterly outdoor condenser hose-down, anti-corrosion coil treatment, and stainless-steel mounting brackets.

## 5. Breaker trips when the AC turns on

**Cause:** usually a failing capacitor causing the compressor to draw excessive starting current, or a short on a damp PCB after wet-season power surges.

**Fix:** test with a clamp meter on the spot; replace the capacitor or the PCB.

**Prevention:** install a surge protector on the outdoor isolator — pays for itself the first time it saves a PCB.

## 6. AC suddenly louder than usual

**Cause:** loose fan blade balance, worn outdoor fan motor bearings, or a failing compressor.

**Fix:** dynamic-balance the fan or replace the motor; compressor replacement is usually only worth it on units under 6 years old.

**Prevention:** quarterly servicing catches bearing wear and fan-blade imbalance early.

## 7. Remote control stops working

**Cause:** dead batteries (50% of cases), damaged remote (30%), or a faulty IR receiver on the indoor unit (20%).

**Fix:** new batteries first; new remote; IR receiver swap.

**Prevention:** keep the remote out of direct sunlight and away from spillable drinks.

## What to do when something goes wrong

WhatsApp us a short video of the unit running, the brand and model (on the silver sticker on the side of the indoor unit), and any error code on the display. We diagnose remotely and quote a fixed fix before sending a tech. Most Canggu callouts are completed same day.`,
    faq: [
      { q: "Why do Canggu villas have so many AC problems?", a: "Three reasons: high humidity feeds mould, salt air from the coast corrodes outdoor units, and most builders under-spec ACs in new villas — meaning units run flat-out and wear faster." },
      { q: "Can I prevent most of these problems?", a: "Yes — quarterly servicing prevents 80% of the issues on this list. The other 20% (lightning surges, salt corrosion on Bukit-style cliff villas, builder shortcuts) need surge protectors and anti-corrosion outdoor units." },
      { q: "How fast do you respond in Canggu?", a: "Same day for most callouts, often within 2 hours of a midday booking. Our main service base is in Canggu, so it's the fastest area we cover." },
    ],
  },
  {
    slug: "lower-ac-electricity-bill-bali",
    title: "How to Lower Your AC Electricity Bill in Bali",
    description: "Twelve practical ways to cut your AC power consumption in Bali — from optimal setpoint temperature to insulation, fan-only mode and inverter upgrades.",
    excerpt: "Air conditioning is the single biggest line item on most Bali PLN bills. Here are twelve practical ways to cut it without sweating through the night.",
    date: "2025-11-24",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "6 min read",
    body: `## TL;DR

Setting the AC to **25°C instead of 22°C**, running **fan-only mode in the evening**, and **upgrading to inverter** can each cut your AC bill by 15–25%. Combined, most Bali villas can roughly halve their cooling power consumption.

## 1. Set to 25°C, not 22°C

Every degree below 25°C adds roughly 6–8% to your power consumption. Setting the AC to 22°C in a Bali bedroom doesn't make you sleep better — it just makes you cold and runs the compressor flat-out. 25°C with the ceiling fan on low is the comfort sweet spot in Bali.

## 2. Use the ceiling fan with the AC

A ceiling fan on speed 1 lets you raise the AC setpoint by 3°C without losing comfort. Saving: ~20% on AC power.

## 3. Run fan-only for 10 minutes at the end of each session

This dries the evaporator coil and prevents mould — which improves cooling efficiency on the next session by keeping the coil clean.

## 4. Close doors and windows

Sounds obvious — and yet half the villas we visit have an exterior louvre window cracked open or a guest bedroom door propped open. Cool air leaks out, the AC runs harder.

## 5. Block direct sun on west-facing glass

A blackout curtain or external sunscreen on west-facing glass cuts late-afternoon solar gain by 40–60%. The AC works less hard from 4pm to 7pm.

## 6. Service the unit quarterly

A clean evaporator coil and outdoor condenser run 15–25% more efficient than a neglected unit. The cost of a quarterly service is typically recovered through reduced PLN bills.

## 7. Replace 1.5mm² cabling with 2.5mm² (older villas)

Undersized cable to the outdoor unit causes voltage drop, which makes the compressor draw more current to do the same work. We see this on older Canggu and Sanur villas — fixing it cuts power by 5–8% per unit.

## 8. Upgrade to inverter

Non-inverter to inverter upgrade saves 30–40% on running cost. A 1 PK inverter pays back the price premium well within service life.

## 9. Right-size the unit

An undersized AC runs flat-out 24/7 and never reaches setpoint — burning power and wearing the compressor. An oversized unit short-cycles and doesn't dehumidify. Right-sizing alone (replacing a struggling 0.5 PK with a properly sized 1 PK) can cut power use by 20%.

## 10. Use a programmable timer

Most modern ACs have a 24-hour timer. Set it to off 30 minutes before you usually leave the bedroom in the morning, and on 30 minutes before you return in the evening. Saves 1–2 hours of unnecessary runtime per day.

## 11. Add a surge protector

Power surges damage capacitors and PCBs, which then run inefficiently for weeks before they finally fail. A surge protector at the outdoor isolator prevents this and protects 5–8% of efficiency over the life of the unit.

## 12. Switch to a higher PLN tariff if needed (counter-intuitive)

If you're on the low residential tariff (R-1/450 VA) and your villa keeps tripping the meter, you're forcing the AC to short-cycle. Upgrading to R-1/2200 VA or R-1/3500 VA actually lowers your overall bill by allowing the AC to run smoothly.

## Real example

A 4-bedroom Canggu villa we serviced was running well above the local average on PLN. We:

- Replaced two undersized 0.5 PK units with 1 PK inverters
- Added surge protectors on all 6 outdoor units
- Set up a quarterly service schedule
- Trained the housekeeper to set 25°C standard

Six months later, the same villa was paying significantly less on PLN — the unit upgrades and surge protectors paid back well inside a year.`,
    faq: [
      { q: "Does turning the AC off completely save power?", a: "Yes for breaks longer than 30 minutes. For shorter breaks, leaving it at 25–26°C uses less power than restarting from a hot room." },
      { q: "Should I close vents in unused rooms?", a: "Bali villas don't usually have central ducted systems — each room has its own split unit. Just turn off the AC in unused rooms and close the door." },
      { q: "Is it worth installing solar for AC?", a: "Yes for owner-occupied villas. A 3–5 kW solar system covers most daytime AC use; payback is typically 4–6 years in Bali at current PLN rates." },
    ],
  },
  {
    slug: "best-ac-brands-bali-2026",
    title: "Best AC Brands Available in Bali: 2026 Buyer's Guide",
    description: "Honest 2026 ranking of the AC brands available in Bali — Daikin, Gree, Panasonic, Mitsubishi Electric, LG, Samsung, Sharp and Midea. Strengths, weaknesses, real-world reliability.",
    excerpt: "Eight brands you'll see in Bali showrooms ranked honestly — by warranty, parts availability, real-world tropical durability and value.",
    date: "2025-11-17",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "9 min read",
    body: `## TL;DR ranking

| Rank | Brand | Best for |
| --- | --- | --- |
| 1 | Daikin | Premium, quiet, long-lasting |
| 2 | Gree | Best value with 5-year compressor warranty |
| 3 | Panasonic | Solid mid-range with great parts availability |
| 4 | Mitsubishi Electric | Premium with excellent inverter tech |
| 5 | LG | Strong inverter range, good warranty |
| 6 | Samsung | Decent build, weak local service network |
| 7 | Sharp | Budget-friendly, basic features |
| 8 | Midea | Cheapest, but reliability is mixed |

## 1. Daikin — premium

The Japanese gold standard. Quietest indoor units (19–22 dB), smoothest inverter ramp, best dehumidify mode, longest real-world lifespan in Bali. Worth the premium for master bedrooms, hotel rooms and any noise-sensitive space.

**Warranty:** 1 year unit + 3 years compressor.

## 2. Gree — best value

The world's largest AC manufacturer. Excellent inverter performance, 5-year compressor warranty (industry-leading), R32 refrigerant, Gold Fin coil protection. The price-to-performance king on the Indonesian market.

**Warranty:** 1 year unit + 5 years compressor.

## 3. Panasonic — reliable mid-range

A strong Japanese alternative to Daikin at a slightly lower premium. The inverter PCBs are particularly reliable and parts availability across Indonesia is excellent. Slightly louder than Daikin and the dehumidify mode isn't quite as good.

**Warranty:** 1 year unit + 5 years compressor.

## 4. Mitsubishi Electric — premium alternative

Excellent inverter technology, very quiet, exceptional cooling precision. The downsides in Bali: slightly slower parts lead times and a smaller local service network than Daikin or Gree. Usually worth it only if you have a brand preference or specific commercial-grade requirements.

**Warranty:** 1 year unit + 3 years compressor.

## 5. LG — solid Korean option

Better than its reputation suggests. The Dual Inverter line is genuinely good and the 10-year compressor warranty (introduced 2024) is generous. Downsides: PCBs have a higher failure rate than Japanese brands in our experience, and the indoor units are louder than Daikin or Panasonic.

**Warranty:** 1 year unit + 10 years compressor (Dual Inverter line).

## 6. Samsung — capable but limited service

Build quality is fine, the WindFree line is genuinely innovative. The problem in Bali is the service network — Samsung HVAC service is concentrated in Jakarta and Surabaya, with limited authorised repair capacity locally. Parts can take a week.

**Warranty:** 1 year unit + 5 years compressor.

## 7. Sharp — basic but cheap

Sharp's entry-level units are functional and cheap. The inverters are basic, the noise levels are higher (32–35 dB on low fan), and the lifespan in Bali is shorter (typically 5–7 years versus 8–12 for Daikin/Gree). Acceptable for staff rooms and budget rentals.

**Warranty:** 1 year unit + 5 years compressor.

## 8. Midea — buyer beware

The cheapest brand widely available in Bali. The headline price is attractive but reliability varies wildly between batches. We've seen capacitors fail at 18 months, PCBs at 24 months, and the warranty claim process is slow. Only consider if budget is the absolute deciding factor.

**Warranty:** 1 year unit + 5 years compressor.

## What we install most

Across our installs in 2025, the brand split was roughly:

- Gree: 55% (best value)
- Daikin: 30% (premium choice)
- Panasonic: 8% (clients with brand preference)
- Other: 7% (specific requirements)

For a typical 4-bedroom Bali villa we recommend a Daikin in the master, Gree everywhere else. WhatsApp us your villa floor plan and we'll quote the mix.

## What we don't install (and why)

We don't install no-name "white label" brands that flood some Bali shops. The capacitors, PCBs and compressors in those units have no real warranty backing, and parts are impossible to source after a year. We've turned away dozens of "supply your own unit" jobs because we won't put our 12-month workmanship warranty against an unknown brand we can't get parts for.`,
    faq: [
      { q: "Is Daikin really worth the extra cost?", a: "For master bedrooms and hotel rooms — yes. For guest rooms and living areas — Gree gives you most of the performance for less." },
      { q: "Why not buy the cheapest brand?", a: "Because the savings disappear the first time you need a part. A cheaper unit that fails at 24 months and can't be repaired costs you a full replacement; a Gree with a 5-year compressor warranty doesn't." },
      { q: "Do you sell and install all these brands?", a: "We are authorised partners for Gree and Daikin. We can supply and install Panasonic, Mitsubishi Electric and LG on request. We service all major brands." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
