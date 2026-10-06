import type { FAQ } from "@/data/faqs";
import { priceTableMarkdown, unitTableMarkdown, priceDisclaimer } from "@/data/pricing";
import { landingsId } from "@/data/landings-id";

// Search-intent landing pages rendered at the site root (/<slug>) by
// src/app/[landing]/page.tsx. Each one targets a query cluster from Search
// Console that had no dedicated page. Body is the same mini-markdown used by
// blog posts (see src/lib/markdown.ts).
export type Landing = {
  slug: string;
  lang: "en" | "id";
  metaTitle: string; // rendered as an absolute <title>, keep under ~60 chars
  description: string; // 140–160 chars
  h1: string;
  heroSub: string;
  breadcrumb: string;
  quickAnswer: string;
  tldr: string;
  body: string;
  faqs: FAQ[];
  serviceType: string;
  waMessage: string;
  related: { label: string; href: string }[];
  ctaHeading: string;
  defaultService?: string;
  areaName?: string;
  geo?: { lat: number; lng: number };
  // hreflang partner pages
  alternates?: { en?: string; id?: string };
  withPriceOffers?: boolean;
};

const hvacRepair: Landing = {
  slug: "hvac-repair-bali",
  lang: "en",
  metaTitle: "HVAC Repair Bali — 24/7 AC & Aircon Repair Near You",
  description:
    "24/7 HVAC and AC repair across Bali: not cooling, water leaks, error codes, tripping breakers. Fixed-price diagnosis, same-day technicians, 90-day warranty.",
  h1: "HVAC Repair in Bali — 24/7 Air Conditioning Repair Near You",
  heroSub:
    "Split, multi-split, cassette, ducted and VRF repair for villas, homes, restaurants and hotels. Fixed-price diagnosis on WhatsApp, technicians on the road 24/7, and a 90-day warranty on every repair.",
  breadcrumb: "HVAC Repair",
  quickAnswer:
    "We repair every type of HVAC and air conditioning system in Bali — wall splits, multi-splits, ceiling cassettes, ducted units and VRF/VRV — 24 hours a day. Most faults (no cooling, water leaks, error codes, breaker trips) are fixed in a single 1–2 hour visit. Same-day across South Bali and Ubud; diagnosis from Rp 100.000, credited to the repair.",
  tldr:
    "If your AC stopped cooling, is leaking, flashing an error code or tripping the breaker, WhatsApp a photo or short video. We diagnose remotely, give a fixed price, and send a technician — usually within 2 hours in South Bali.",
  serviceType: "HVAC repair",
  defaultService: "Repair",
  waMessage: "Hi, my AC needs repair. Area: ___ Brand: ___ Problem: ___",
  ctaHeading: "AC broken right now? We're on call 24/7.",
  withPriceOffers: true,
  related: [
    { label: "AC repair service details", href: "/services/ac-repair-bali" },
    { label: "AC service price list", href: "/ac-service-price-bali" },
    { label: "Commercial HVAC & VRF", href: "/services/commercial-ac-bali" },
    { label: "Villa maintenance contracts", href: "/services/villa-ac-maintenance-packages" },
    { label: "Why does my AC smell?", href: "/blog/why-ac-smells-bad-bali" },
    { label: "Service AC Bali (Bahasa Indonesia)", href: "/service-ac-bali" },
  ],
  body: `## HVAC repair in Bali: what we fix

In Bali "HVAC" almost always means cooling — heating is rarely needed below the highlands. Our technicians carry manifold gauges, vacuum pumps, nitrogen, clamp meters and common spare parts for every major brand, so most repairs are finished on the first visit.

| System | Where you find it | Typical repairs |
| --- | --- | --- |
| Wall-mounted split (0.5–2.5 PK) | Villas, homes, apartments, guesthouses | Gas leaks, capacitors, sensors, PCBs, fan motors, drain leaks |
| Multi-split | Villas sharing one outdoor unit | Communication errors, EEV valves, uneven cooling between rooms |
| Ceiling cassette | Restaurants, cafés, retail, offices | Drain pump failure, water dripping from ceiling, louvre motors |
| Ducted / concealed | Boutique hotels, open-plan villas | Blocked returns, mouldy ducts, airflow balancing, condensate |
| VRF / VRV | Hotels, resorts, offices | Fault-code tracing, refrigerant balancing, outdoor PCB / inverter faults |

## Symptoms, likely causes and typical costs

Send us the symptom on WhatsApp and we can usually tell you the probable fault before we arrive. Typical Bali repair costs:

| Symptom | Most likely cause in Bali | Usual fix | Typical cost from |
| --- | --- | --- | --- |
| Not cooling / blowing warm air | Low refrigerant from a slow leak, dirty coil, failed capacitor | Leak test + recharge, chemical wash, capacitor swap | Rp 250.000 |
| Water dripping from the indoor unit | Drain line blocked with algae and dust | Blow-out + anti-algae flush | Rp 150.000 |
| Ice on pipes or indoor coil | Low gas or restricted airflow | Leak repair + recharge, filter/coil clean | Rp 250.000 |
| Outdoor unit not starting | Capacitor or contactor failure after a power surge | Replace capacitor / contactor | Rp 250.000 |
| Breaker trips when AC starts | Shorted compressor winding, failed capacitor, wiring fault | Electrical diagnosis, component replacement | Rp 100.000 diagnosis |
| Error code flashing | Sensor, fan motor, PCB or communication fault | Fault-code tracing, part replacement | Rp 100.000 diagnosis |
| Loud rattling or buzzing | Loose mounting, fan blade, failing bearing | Re-mount, fan motor / bearing replacement | Rp 200.000 |
| Bad smell when switched on | Mould on the evaporator and blower | Deep chemical wash | Rp 350.000 |

See the full [AC service price list](/ac-service-price-bali). Every repair is quoted as a fixed total before work starts — no hourly meter.

## 24/7 emergency AC repair

We treat these as emergencies and dispatch round-the-clock across South Bali, the Bukit and Ubud:

- Water pouring from a ceiling cassette or indoor unit onto floors or electrics
- A unit that trips the main breaker or smells of burning
- Complete cooling failure in an occupied villa, hotel room, server room or restaurant during service
- Refrigerant hissing or oil stains around pipe joints

Response times: usually within 2 hours in Canggu, Seminyak, Kerobokan, Kuta, Sanur and Denpasar; same day on the Bukit (Jimbaran, Nusa Dua, Uluwatu) and in Ubud; next day in North and East Bali (Singaraja, Lovina, Amed, Candidasa).

## Common error codes we fix

Codes vary by model — send us a photo of the display and the model sticker and we will confirm the meaning.

| Brand | Code | Usual meaning | Typical fix |
| --- | --- | --- | --- |
| Daikin | U4 | Indoor–outdoor communication error | Check interconnect cable, outdoor PCB, power supply |
| Daikin | U0 | Refrigerant shortage | Leak test, repair, recharge |
| Daikin | A5 | Freeze-up / high-pressure protection | Clean filters and coil, check gas charge |
| Daikin | A6 / E7 | Indoor / outdoor fan motor fault | Fan motor or PCB driver replacement |
| Gree | E6 | Indoor–outdoor communication error | Wiring, PCB or power check |
| Gree | F1 / F2 | Room / evaporator temperature sensor fault | Replace thermistor |
| Gree | H6 | Indoor fan motor not running | Fan motor or capacitor replacement |
| Gree | E1 | High-pressure protection | Clean condenser, check fan and gas charge |
| Panasonic | H11 | Indoor–outdoor communication error | Interconnect cable / PCB check |
| Panasonic | H14 | Indoor air temperature sensor fault | Replace sensor |

## Repair or replace?

Our honest rule of thumb in Bali: if the unit is under 7 years old and the repair costs less than half the price of a new equivalent, repair it. If it is over 10 years old, still runs on R22 refrigerant, or needs a new compressor, replacement usually pays back through lower PLN bills within 2–3 years. We will always give you both numbers — see current [air conditioner prices in Bali](/air-conditioner-bali).

## Why HVAC systems fail faster in Bali

- **Salt air:** coastal condensers in Uluwatu, Canggu, Jimbaran and Sanur corrode 2–3× faster than inland units.
- **Humidity:** 80%+ humidity breeds mould in drain lines, which is why water leaks are our most common call-out.
- **Power quality:** wet-season brownouts and surges kill capacitors and PCBs — we recommend a surge protector on every outdoor unit.
- **Undersizing:** builders often fit a 1 PK unit in a room that needs 1.5 PK, so it runs flat-out all day and wears out early.
- **Skipped servicing:** a unit cleaned every 3 months lasts years longer — see [how often to service your AC in Bali](/blog/how-often-to-service-ac-bali).

## How our repair visit works

- **1. WhatsApp the symptom:** brand, model sticker photo, error code and a short video if you can.
- **2. Fixed-price diagnosis:** we confirm the likely fault and the diagnosis fee before anyone sets out.
- **3. On-site repair:** a two-person crew diagnoses with gauges and meters and quotes the fix as one number.
- **4. Test and warranty:** we run a cool-down test, log the temperature drop and back the repair with a 90-day warranty.

## Areas we cover for HVAC repair

Same-day HVAC repair in [Canggu](/areas/canggu), [Seminyak](/areas/seminyak), [Kerobokan](/areas/kerobokan), [Kuta](/areas/kuta), [Denpasar](/areas/denpasar), [Sanur](/areas/sanur), [Jimbaran](/areas/jimbaran), [Nusa Dua](/areas/nusa-dua), [Uluwatu](/areas/uluwatu) and [Ubud](/areas/ubud). Scheduled visits across [Tabanan](/areas/tabanan), [Gianyar](/areas/gianyar), [Singaraja](/areas/singaraja) and the rest of the island — [see all areas](/areas).`,
  faqs: [
    { q: "Is there an HVAC repair service near me in Bali?", a: "Yes. We cover all of Bali with technicians based in Canggu, on the Bukit and in Ubud. In South Bali a technician is usually with you within 2 hours; the Bukit and Ubud are same day; North and East Bali are next day." },
    { q: "Do you offer 24-hour AC repair in Bali?", a: "Yes. Our emergency line runs 24/7 for water leaks, breaker trips, burning smells and complete cooling failures in occupied villas, hotels and restaurants. WhatsApp +62 818-0802-9595 at any hour." },
    { q: "How much does AC repair cost in Bali?", a: "Diagnosis starts from Rp 100.000 and is credited to the repair if you go ahead. Common fixes: drain unblocking from Rp 150.000, capacitor replacement from Rp 250.000, refrigerant top-up from Rp 250.000, leak repair and full recharge from Rp 650.000, PCB repair from Rp 750.000. You always get a fixed total before work starts." },
    { q: "Why is my AC running but not cooling?", a: "In Bali the usual causes are low refrigerant from a slow leak, a heavily soiled filter or coil, or a failed outdoor-fan or compressor capacitor. A technician can confirm which with gauges and a clamp meter in about 30 minutes." },
    { q: "Why is water leaking from my air conditioner?", a: "Almost always a blocked condensate drain — algae and dust build up quickly in Bali's humidity and water overflows the drain tray. We clear the line with compressed air and flush it with an anti-algae solution. A cracked tray or a frozen coil are less common causes." },
    { q: "Do you repair commercial HVAC, cassette and VRF systems?", a: "Yes. We repair ceiling cassettes, ducted units and VRF/VRV systems in restaurants, beach clubs, offices and hotels, and can schedule work overnight so your venue stays open." },
    { q: "Which brands do you repair?", a: "All major brands sold in Bali — Daikin, Gree, Panasonic, Mitsubishi Electric, LG, Samsung, Sharp, Midea, Polytron, AUX and most legacy units, including older R22 systems." },
    { q: "Is my repair guaranteed?", a: "Every repair carries a 90-day workmanship warranty. If the same fault returns in that period we come back and fix it at no charge." },
  ],
};

const airConditionerBali: Landing = {
  slug: "air-conditioner-bali",
  lang: "en",
  metaTitle: "Air Conditioner Bali — Prices, Brands & Installation (2026)",
  description:
    "Buying an air conditioner in Bali? 2026 prices for Gree, Daikin and Panasonic by PK size, room sizing guide, and supply-and-install with registered warranty.",
  h1: "Air Conditioners in Bali — Prices, Sizing & Supply-and-Install",
  heroSub:
    "Brand-new inverter air conditioners from Gree, Daikin, Panasonic, Mitsubishi Electric, LG and Samsung, delivered and installed anywhere in Bali — usually within 24–72 hours, with the manufacturer warranty registered in your name.",
  breadcrumb: "Air Conditioner Bali",
  quickAnswer:
    "A new 1 PK inverter air conditioner in Bali costs roughly Rp 4,3–5,5 jt for Gree and Rp 5,5–7 jt for Daikin, plus installation from Rp 450.000. Most bedrooms need 1–1.5 PK because of Bali's heat and humidity. We supply and install every major brand island-wide, usually within 24–72 hours.",
  tldr:
    "Choose the size first (about 600 BTU per m²), then the brand: Gree for value, Daikin or Mitsubishi for the quietest premium units, Panasonic as the reliable middle ground. Always buy an inverter model, and an anti-corrosion coil if you are near the sea.",
  serviceType: "Air conditioner supply and installation",
  defaultService: "New Systems",
  waMessage: "Hi, I'd like a price for a new air conditioner in Bali. Room size: ___ m², area: ___",
  ctaHeading: "Tell us your room sizes — we'll quote the right AC.",
  withPriceOffers: true,
  related: [
    { label: "Gree vs Daikin compared", href: "/blog/daikin-vs-gree-bali" },
    { label: "Best AC brands in Bali", href: "/blog/best-ac-brands-bali-2026" },
    { label: "AC sizing guide (BTU & PK)", href: "/blog/ac-bali-bts-sizing-guide" },
    { label: "AC installation service", href: "/services/ac-installation-bali" },
    { label: "Compare all brands", href: "/brands" },
    { label: "AC terms explained: PK, BTU, tukang AC", href: "/blog/bali-ac-terms-pk-btu-explained" },
  ],
  body: `## Air conditioner prices in Bali (2026)

Indicative retail prices for wall-mounted inverter splits in Bali, unit only. Installation starts from Rp 450.000 for a standard 0.5–1 PK install with up to 4m of pipe.

${unitTableMarkdown()}

${priceDisclaimer} Prices shift with stock, model year and promotions — WhatsApp us and we will quote the current price of each brand side by side.

## Step 1: choose the right size (PK and BTU)

In Indonesia AC capacity is sold in **PK** (paardenkracht, Dutch for horsepower). 1 PK is roughly 9,000 BTU. Bali needs more capacity per square metre than Europe or Australia because rooms start at 30°C and 80% humidity.

- Bedroom up to 12 m²: 0.75–1 PK
- Bedroom 15–20 m²: 1 PK
- Master bedroom 20–25 m² or west-facing: 1.5 PK
- Living room 25–35 m²: 2 PK
- Open-plan living with high alang-alang or timber ceiling: 2.5 PK or two units

Undersized units run at full power all day and never reach the setpoint — the single most common mistake we see in new Bali villas. Read the full [Bali AC sizing guide](/blog/ac-bali-bts-sizing-guide).

## Step 2: choose the brand

| Brand | Best for | Compressor warranty |
| --- | --- | --- |
| [Gree](/brands/gree-air-conditioning-bali) | Best value; guest rooms, rentals, whole-villa fit-outs | 5 years |
| [Daikin](/brands/daikin-air-conditioning-bali) | Quietest bedrooms, hotels, longest real-world life | 3 years |
| [Panasonic](/brands/panasonic-air-conditioning-bali) | Reliable mid-range, nanoeX air purification | 5 years |
| [Mitsubishi Electric](/brands/mitsubishi-air-conditioning-bali) | Premium, very precise inverter control | 3 years |
| [LG](/brands/lg-air-conditioning-bali) | Dual Inverter, long compressor warranty | 10 years (Dual Inverter) |
| [Samsung](/brands/samsung-air-conditioning-bali) | WindFree draught-free cooling for light sleepers | 5 years |

Still deciding between the two most popular brands? Read our technician's [Gree vs Daikin comparison](/blog/daikin-vs-gree-bali).

## Step 3: inverter, refrigerant and corrosion protection

- **Inverter only:** an inverter uses 30–50% less electricity than a fixed-speed unit and pays back the price difference within 1–2 years on Bali's PLN tariffs.
- **R32 refrigerant:** standard on current models — more efficient and easier to service than R410A or legacy R22.
- **Anti-corrosion coil:** within 1 km of the sea (Canggu, Seminyak, Jimbaran, Uluwatu, Sanur, Amed) choose Gree Gold Fin, Daikin Blue Fin or an equivalent coating. It roughly doubles the life of the outdoor unit.

## Buying from a shop vs supply-and-install

Electronics stores in Denpasar sell units at similar prices but leave installation to a third party, and warranties are frequently voided by poor installs. When we supply the unit we install it to the manufacturer's standard (vacuum-purged, leak-tested), register the warranty in your name and handle any claim for you — you never have to deal with a distributor or a service centre yourself.

## Delivery and installation times

- South Bali (Canggu, Seminyak, Kuta, Sanur, Denpasar): same day or next day
- Bukit (Jimbaran, Nusa Dua, Uluwatu) and Ubud: next day
- Tabanan, Gianyar, North and East Bali: within 72 hours

## Already have an AC?

We also service and repair existing units — see [AC cleaning](/services/ac-cleaning-bali), [HVAC & AC repair](/hvac-repair-bali) and the [service price list](/ac-service-price-bali).`,
  faqs: [
    { q: "How much is an air conditioner in Bali?", a: "Indicative 2026 prices for a 1 PK inverter split are about Rp 4,3–5,5 jt for Gree, Rp 5–6,5 jt for Panasonic and Rp 5,5–7 jt for Daikin, unit only. Installation starts from Rp 450.000. WhatsApp us for a current fixed price including installation." },
    { q: "What size air conditioner do I need in Bali?", a: "Allow roughly 600 BTU per square metre for bedrooms and 700 BTU per square metre for living rooms with high ceilings or west sun. In practice: 1 PK for a 15–20 m² bedroom, 1.5 PK for 20–25 m², 2 PK for a 25–35 m² living room." },
    { q: "What is the best AC brand in Bali?", a: "Gree is the best value, with a 5-year compressor warranty. Daikin and Mitsubishi Electric are the quietest premium options. Panasonic is a reliable middle ground. For most villas we recommend Daikin in the master bedroom and Gree elsewhere." },
    { q: "Where can I buy an air conditioner in Bali?", a: "You can buy from electronics stores in Denpasar, or buy supply-and-install from an authorised installer like us. We deliver anywhere in Bali, install to manufacturer standards and register the warranty in your name." },
    { q: "How quickly can a new AC be installed?", a: "Same day or next day in most of South Bali if the model is in stock, next day on the Bukit and in Ubud, and within 72 hours elsewhere on the island." },
    { q: "Is a Daikin service center available in Bali?", a: "The major brands run authorised service networks in Indonesia, with partners in the Denpasar area. As an authorised installer we register your warranty and handle claims for you, and we service and repair all of these brands directly — usually faster than booking a brand service centre." },
  ],
};

const priceList: Landing = {
  slug: "ac-service-price-bali",
  lang: "en",
  metaTitle: "AC Service Price Bali 2026 — Cleaning, Repair & Freon Costs",
  description:
    "2026 AC service prices in Bali: cleaning from Rp 150.000, freon top-up from Rp 250.000, repairs and installation. Fixed quotes on WhatsApp, no callout fee.",
  h1: "AC Service Prices in Bali (2026 Price List)",
  heroSub:
    "Transparent starting prices for AC cleaning, deep chemical wash, freon top-up, repair and installation across Bali. Every job is confirmed as a fixed total on WhatsApp before a technician sets out.",
  breadcrumb: "Price List",
  quickAnswer:
    "AC cleaning in Bali costs from Rp 150.000 per unit, a deep chemical wash from Rp 350.000, a refrigerant (freon) top-up from Rp 250.000 and a new AC installation from Rp 450.000. Fault diagnosis is from Rp 100.000 and is credited to the repair. No callout fees in South Bali.",
  tldr:
    "Budget about Rp 600.000–1.400.000 per unit per year for proper quarterly servicing in Bali. It is far cheaper than the capacitors, PCBs and compressors that fail on neglected units.",
  serviceType: "Air conditioning service",
  waMessage: "Hi, I'd like a fixed price for AC service. Area: ___ Number of units: ___",
  ctaHeading: "Get your fixed price in 15 minutes.",
  withPriceOffers: true,
  related: [
    { label: "AC cleaning service", href: "/services/ac-cleaning-bali" },
    { label: "HVAC & AC repair", href: "/hvac-repair-bali" },
    { label: "New air conditioner prices", href: "/air-conditioner-bali" },
    { label: "Villa maintenance packages", href: "/services/villa-ac-maintenance-packages" },
    { label: "How often to service your AC", href: "/blog/how-often-to-service-ac-bali" },
    { label: "Harga service AC (Bahasa Indonesia)", href: "/service-ac-bali" },
  ],
  body: `## AC service price list

${priceTableMarkdown("en")}

${priceDisclaimer}

## What affects the price

- **Unit type and size:** cassettes, ducted and multi-split systems take longer than a wall split.
- **Access:** outdoor units on roofs or high walls may need ladders, scaffolding or rope access.
- **Condition:** a unit that has not been cleaned for a year usually needs a deep chemical wash rather than a standard clean.
- **Parts:** capacitors and sensors are inexpensive; PCBs, fan motors and compressors vary by brand and model.
- **Location:** no callout fee in South Bali; scheduled routes keep North and East Bali visits affordable.
- **Number of units:** villas and businesses with several units get a per-unit discount, and contracts reduce it further.

## Cheap cleaning vs proper cleaning

The cheapest cuci AC jobs are often a filter rinse and a quick spray of the coil. That does not remove the mould inside the blower and drain tray, which is why the smell and the water leaks come back within weeks. Our standard clean includes a drain-line flush and outdoor condenser rinse, and our deep chemical wash uses a bag-and-rinse cover so the evaporator can be pressure-washed in place without wetting the room.

## How much should I budget per year?

| Usage | Recommended schedule | Approx. yearly cost per unit |
| --- | --- | --- |
| Home or long-stay villa, bedroom unit | Clean every 3 months, deep wash once a year | Rp 800.000–1.000.000 |
| Short-stay rental or beachfront villa | Clean every 6–8 weeks, deep wash twice a year | Rp 1.300.000–1.600.000 |
| Restaurant cassette | Clean monthly, deep wash quarterly | Quoted per contract |

## Is it necessary to service an AC every year?

In Bali, once a year is not enough. Heat, humidity, dust and salt air clog coils and drains far faster than in temperate climates. Units cleaned every 3 months use less electricity, cool faster and last years longer. Read the full guide: [how often to service your AC in Bali](/blog/how-often-to-service-ac-bali).

## Maintenance contracts

Villa managers and businesses can fix their costs with a [villa maintenance package](/services/villa-ac-maintenance-packages): scheduled visits, photo reports and priority breakdown response at a fixed monthly or quarterly rate.`,
  faqs: [
    { q: "How much does AC cleaning cost in Bali?", a: "A standard clean starts from Rp 150.000 per unit for 0.5–1 PK splits and Rp 175.000 for 1.5–2 PK. A deep chemical wash with bag-and-rinse cover starts from Rp 350.000; ceiling cassettes from Rp 450.000." },
    { q: "How much is a freon refill in Bali?", a: "A refrigerant top-up (R32 or R410A) starts from Rp 250.000 including a pressure check. If the system has leaked out, a full leak repair, vacuum and recharge starts from Rp 650.000." },
    { q: "Is there a callout fee?", a: "No callout fee in South Bali for booked services. A fault diagnosis visit is from Rp 100.000 and is credited against the repair if you go ahead." },
    { q: "How much does AC installation cost in Bali?", a: "Installing a 0.5–1 PK split starts from Rp 450.000 including bracket, up to 4m of pipe, vacuum and leak test. Removing and reinstalling an existing unit starts from Rp 650.000." },
    { q: "Do you give discounts for several units?", a: "Yes. Villas and businesses with several units get a per-unit discount on the same visit, and maintenance contracts lower the price further." },
    { q: "Why are some AC services in Bali cheaper?", a: "Very cheap jobs are often a filter rinse and coil spray without a drain flush or proper rinse, so the smell and leaks return quickly. We quote a fixed price for a complete job and back repairs with a 90-day warranty." },
  ],
};

const landingsEn: Landing[] = [hvacRepair, airConditionerBali, priceList];

export const landings: Landing[] = [...landingsEn, ...landingsId];
export const getLanding = (slug: string) => landings.find((l) => l.slug === slug);
