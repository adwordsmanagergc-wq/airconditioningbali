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
    title: "Gree vs Daikin: Which AC Is Better? A Bali Technician's 2026 Verdict",
    description: "Gree vs Daikin compared by a Bali AC technician, price, noise, warranty, lifespan, salt-air durability and who makes Gree. Which air conditioner should you buy?",
    excerpt: "Gree or Daikin? We install both every week across Bali. Here's the honest comparison, price, noise, warranty, lifespan, salt-air durability, and which one wins for each room.",
    date: "2026-10-06",
    author: "I Made Suarjana, Lead Technician",
    reviewer: "Reviewed by the technical team at Air Conditioning Bali",
    readingTime: "10 min read",
    body: `## The short answer

**Daikin is the better air conditioner; Gree is the better value.** Daikin is quieter, smoother and lasts longer in real-world Bali conditions. Gree costs roughly 20-30% less, carries a longer compressor warranty in Indonesia (5 years vs 3), and cools a room just as well when it is correctly sized. For most villas we fit Daikin in the master bedroom and Gree everywhere else.

## Gree vs Daikin comparison table

| Feature | Gree | Daikin |
| --- | --- | --- |
| Headquarters | Zhuhai, China (founded 1989) | Osaka, Japan (founded 1924) |
| 1 PK inverter price in Bali (unit only) | about Rp 4,3-5,5 jt | about Rp 5,5-7 jt |
| Compressor warranty (Indonesia) | 5 years | 3 years |
| Indoor noise on low fan | 25-28 dB | 19-22 dB |
| Refrigerant | R32 | R32 |
| Anti-corrosion coil | Gold Fin | Blue Fin |
| Inverter smoothness | Very good | Excellent |
| Typical lifespan in Bali (serviced quarterly) | 8-10 years | 10-12 years |
| Spare parts in Bali | Excellent | Excellent |
| Best for | Guest rooms, rentals, whole-villa fit-outs | Master bedrooms, hotels, noise-sensitive rooms |

## Is Gree made by Daikin?

No. Gree Electric Appliances is an independent Chinese manufacturer headquartered in Zhuhai, Guangdong, and is the world's largest maker of residential air conditioners by volume. Daikin Industries is a separate Japanese company and the world's largest HVAC company overall. The confusion comes from a real partnership: since around 2009 the two companies have cooperated through joint ventures in China on inverter compressors and precision components. Gree also makes the compressors, motors and PCBs for its own units, and builds air conditioners sold under other names, including its own Tosot brand.

## Price: Gree is 20-30% cheaper

Model for model, a Gree inverter split costs about 20-30% less than the equivalent Daikin in Bali. On a 4-bedroom villa that is often Rp 6-10 jt saved, enough to cover two years of quarterly servicing. See current [air conditioner prices in Bali](/air-conditioner-bali).

## Warranty: Gree wins

In Indonesia, Gree gives a 5-year compressor warranty; Daikin gives 3 years. The compressor is the most expensive part to replace and the one most stressed by Bali's 30°C+ days. We register every unit with Gree Indonesia or Daikin Indonesia under your name, so claims go directly through us.

## Noise: Daikin is in another league

A Daikin inverter on low fan runs at 19-22 dB, quieter than a whisper. A comparable Gree runs at 25-28 dB. Both are quiet, but in a master bedroom, a baby's room or a hotel suite the Daikin difference is audible, especially at night when the compressor ramps up and down.

## Which cools better?

Neither, if both are the same capacity. A 1 PK Gree and a 1 PK Daikin deliver the same rated cooling. What actually decides how cold a room gets in Bali is **sizing and installation**, an undersized or badly vacuumed unit of either brand will struggle. Daikin's inverter holds the set temperature more precisely and its dry mode removes humidity slightly better, which makes rooms feel cooler at the same setting.

## Which lasts longer?

In our service records, a quarterly-serviced Daikin typically runs 10-12 years in Bali and a Gree 8-10 years. Daikin's PCBs and fan motors tolerate Bali's power fluctuations a little better. Both last far longer when protected with a surge protector and cleaned every 3 months, see [how often to service your AC](/blog/how-often-to-service-ac-bali).

## Salt air: buy the anti-corrosion model of either

Bali's coast destroys untreated outdoor units. Gree Gold Fin and Daikin Blue Fin coatings both roughly double outdoor-unit life in Uluwatu, Bingin, Jimbaran, Canggu and Sanur. If you are within 1 km of the sea, the coated model matters more than the brand.

## Energy use

Both run full-inverter compressors on R32 and use 30-60% less power than old fixed-speed units. Daikin's smoother inverter typically saves another 5-10% on the PLN bill. A 1 PK unit running 8 hours a day uses roughly 90-150 kWh a month.

## Gree vs Daikin mini splits and heat pumps outside Indonesia

In the USA, New Zealand, Australia and Europe the same two brands sell "mini splits" and "heat pumps", these are the same inverter split systems with a heating mode. The comparison holds: Daikin is the premium, quieter option with the bigger dealer network; Gree is the value option with strong specs for the price. Warranty terms differ by country, so check your local distributor.

## What about Midea, TCL or LG vs Gree?

Gree sits between the budget brands and the Japanese premium brands. In Bali we rate it above Midea and TCL for long-term reliability and parts support, and on par with LG and Samsung for value. See our full [best AC brands in Bali ranking](/blog/best-ac-brands-bali-2026) and our [honest Gree review](/blog/gree-air-conditioner-review).

## Which should you buy?

- **Buy Gree if:** value matters, you are fitting out several rooms, you want the 5-year compressor warranty, or it is a rental villa.
- **Buy Daikin if:** noise matters, it is a master bedroom, hotel room or study, or you want the longest real-world lifespan.

## What we recommend most often

For a typical 4-bedroom Bali villa: Daikin in the master bedroom and main living area, Gree in the guest and staff rooms. WhatsApp us a floor plan and we'll size every room and quote both brands side by side, [Gree in Bali](/brands/gree-air-conditioning-bali) or [Daikin in Bali](/brands/daikin-air-conditioning-bali).`,
    faq: [
      { q: "Which is better, Gree or Daikin?", a: "Daikin is the better-built, quieter and longer-lasting air conditioner. Gree is the better value, about 20-30% cheaper with a longer 5-year compressor warranty in Indonesia. For bedrooms where noise matters choose Daikin; for most other rooms Gree is the smart buy." },
      { q: "Is Gree made by Daikin?", a: "No. Gree is an independent Chinese manufacturer based in Zhuhai and the world's largest residential AC maker. Daikin is a separate Japanese company. The two have cooperated through joint ventures on compressors and components since around 2009, but Gree is not owned by Daikin." },
      { q: "Which is quieter, Gree or Daikin?", a: "Daikin. Its indoor units run at about 19-22 dB on low fan versus 25-28 dB for a comparable Gree." },
      { q: "Which lasts longer?", a: "With quarterly servicing in Bali, Daikin typically lasts 10-12 years and Gree 8-10 years. Both last much longer with surge protection and an anti-corrosion coil near the coast." },
      { q: "Gree atau Daikin, mending mana?", a: "Daikin lebih senyap dan lebih awet, cocok untuk kamar tidur utama. Gree lebih murah 20-30% dengan garansi kompresor 5 tahun, cocok untuk kamar tamu dan villa sewa. Dengan PK yang sama, keduanya sama dinginnya." },
      { q: "Which brand handles salt air better?", a: "Both, provided you buy the anti-corrosion model. Gree's Gold Fin and Daikin's Blue Fin treatments both roughly double outdoor unit lifespan in coastal areas." },
      { q: "Are spare parts available in Bali?", a: "Yes for both. We carry capacitors, sensors, PCBs and refrigerant for both brands in our service vans, and Indonesian distributors stock everything else with 1-3 day lead time to Bali." },
    ],
  },
  {
    slug: "gree-air-conditioner-review",
    title: "Is Gree a Good AC Brand? Honest Gree Air Conditioner Review (2026)",
    description: "Honest Gree air conditioner review from Bali technicians: who makes Gree, where it's made, reliability, common problems, error codes, warranty and price.",
    excerpt: "Gree is the AC we install most in Bali. Here's what we've learned from thousands of installs and repairs, who makes it, how reliable it really is, and its common problems.",
    date: "2026-10-06",
    author: "I Made Suarjana, Lead Technician",
    reviewer: "Reviewed by the technical team at Air Conditioning Bali",
    readingTime: "8 min read",
    body: `## Verdict: yes, Gree is a good brand

Gree is a genuinely good air conditioner brand and the best value on the Indonesian market. It is not as quiet or as refined as Daikin or Mitsubishi Electric, but it cools well, its inverter units are efficient, parts are easy to find in Bali, and the 5-year compressor warranty in Indonesia is longer than most premium brands offer. Around half of the new units we install in Bali are Gree.

## Who makes Gree, and where is it made?

Gree air conditioners are made by **Gree Electric Appliances Inc. of Zhuhai**, a company founded in 1989 in Zhuhai, Guangdong province, China. It is the world's largest manufacturer of residential air conditioners by volume. Most Gree units are built in China, with additional plants outside China (including Brazil and Pakistan). Unlike many budget brands, Gree makes its own compressors, motors and control boards. Gree is not owned by Daikin, see [Gree vs Daikin](/blog/daikin-vs-gree-bali) for how the two companies are linked.

Gree also sells under its own sub-brand **Tosot**, and builds units that are sold under other brand names in some countries.

## Gree pros and cons

| Pros | Cons |
| --- | --- |
| 20-30% cheaper than Daikin or Mitsubishi | Indoor units a few dB louder than Japanese premium brands |
| 5-year compressor warranty in Indonesia | PCBs more sensitive to power surges without protection |
| Efficient R32 inverter range | Wi-Fi app less polished than Daikin's |
| Gold Fin anti-corrosion coil available | Resale value lower than Daikin |
| Spare parts widely stocked in Bali | Quality of third-party installs varies a lot |

## Is a Gree air conditioner reliable in Bali?

Yes, when it is sized properly, installed properly and serviced every 3 months. Across thousands of Gree installs our failure rate is comparable to the Japanese brands in the first five years. Where Gree units fail early, the cause is almost always installation (no vacuum, poor flaring, undersized unit) or power quality, not the unit itself.

## Common Gree problems we fix

- **Water leaking indoors:** a blocked drain line, the most common fault on any brand in Bali.
- **E6 code:** indoor-outdoor communication error, often a loose or corroded interconnect cable or a surge-damaged PCB.
- **F1 / F2 codes:** room or coil temperature sensor faults, a quick, inexpensive fix.
- **H6 code:** indoor fan motor not running.
- **Not cooling:** low refrigerant from a flare-joint leak on a poor install.

See our [HVAC and AC repair page](/hvac-repair-bali) for the full error-code table and repair prices.

## Gree models available in Bali

| Model line | Type | Sizes | Best for |
| --- | --- | --- | --- |
| Gree inverter wall split (e.g. Lomo Eco) | Inverter split, R32 | 0.5-2.5 PK | Bedrooms, living rooms, rentals |
| Gree non-inverter split | Fixed-speed | 0.5-2 PK | Budget, low-use rooms (we rarely recommend) |
| Gree ceiling cassette | Cassette | 2-5 PK | Restaurants, cafés, retail |
| Gree floor-standing | Standing | 3-5 PK | Halls, function rooms |

Indicative price for a 1 PK Gree inverter in Bali: about Rp 4,3-5,5 jt, unit only. See all sizes on our [air conditioner prices page](/air-conditioner-bali).

## Gree heat pumps

In New Zealand, Australia, the UK and North America, Gree's split systems are sold as **heat pumps** or **mini splits** because they heat as well as cool. They are the same inverter technology we install in Bali, and they generally review well for value. Warranty terms and model names vary by country, so check your local distributor.

## Our recommendation

Buy Gree for guest rooms, living areas, staff quarters and rental villas, and choose the Gold Fin anti-corrosion model near the coast. If a bedroom needs to be whisper-quiet, consider Daikin for that room. We are an authorised [Gree installer in Bali](/brands/gree-air-conditioning-bali), WhatsApp us your room sizes for a fixed supply-and-install quote.`,
    faq: [
      { q: "Is Gree a good air conditioner brand?", a: "Yes. Gree is the world's largest residential AC manufacturer and offers excellent value, efficient R32 inverter units and a 5-year compressor warranty in Indonesia. It is a few decibels louder than Daikin but very reliable when installed and serviced properly." },
      { q: "Who makes Gree air conditioners?", a: "Gree Electric Appliances Inc. of Zhuhai, a Chinese company founded in 1989. It makes its own compressors, motors and control boards." },
      { q: "Where are Gree air conditioners made?", a: "Mainly in China, at Gree's factories headquartered in Zhuhai, Guangdong, with additional production outside China including Brazil and Pakistan." },
      { q: "Is Tosot the same as Gree?", a: "Yes. Tosot is a brand owned by Gree." },
      { q: "What are the most common Gree AC problems?", a: "In Bali: water leaks from blocked drains, E6 communication errors after power surges, F1/F2 sensor faults and low refrigerant from poorly made flare joints. All are routine repairs." },
      { q: "How long does a Gree AC last?", a: "Typically 8-10 years in Bali with quarterly servicing, longer inland and with surge protection." },
    ],
  },
  {
    slug: "bali-ac-terms-pk-btu-explained",
    title: "AC Terms in Bali Explained: PK, BTU, Tukang AC, Freon & More",
    description: "What does PK mean on an air conditioner? BTU to PK conversion, kW and tons, plus the Indonesian AC words you'll hear in Bali, tukang AC, cuci AC, isi freon.",
    excerpt: "PK, BTU, tukang AC, cuci AC, isi freon, bongkar pasang, a plain-English guide to the air conditioning terms you'll hear in Bali, with a BTU-to-PK conversion table.",
    date: "2026-10-06",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "5 min read",
    body: `## What does PK stand for?

**PK stands for paardenkracht, Dutch for "horsepower".** Indonesia still uses this old Dutch term to describe air conditioner size. It originally described the compressor's power, but today it is shorthand for cooling capacity: **1 PK is roughly 9,000 BTU/h of cooling**.

## BTU to PK conversion table

| PK | BTU/h (approx.) | kW cooling (approx.) | Room size in Bali |
| --- | --- | --- | --- |
| 0.5 PK | 5,000 | 1.5 kW | up to 10 m² |
| 0.75 PK | 7,000 | 2.0 kW | 10-12 m² |
| 1 PK | 9,000 | 2.6 kW | 12-18 m² |
| 1.5 PK | 12,000 | 3.5 kW | 18-25 m² |
| 2 PK | 18,000 | 5.3 kW | 25-35 m² |
| 2.5 PK | 24,000 | 7.0 kW | 35-45 m² |

So a **5 kW** split is about 17,000 BTU, a 2 PK unit, and a **7 kW** split is about 24,000 BTU, a 2.5 PK unit. Read the full [Bali sizing guide](/blog/ac-bali-bts-sizing-guide).

## PK vs tons

India, the Middle East and the US often size ACs in **tons**. One ton of cooling is 12,000 BTU/h. So a **1-ton AC is about 1.5 PK**, a **1.5-ton AC is about 2 PK**, and a **2-ton AC is about 2.5 PK**.

## Indonesian AC words you'll hear in Bali

| Indonesian | English meaning |
| --- | --- |
| Tukang AC / teknisi AC | AC technician, aircon repairman |
| Service AC | AC servicing / maintenance visit |
| Cuci AC | AC cleaning (filter, coil and drain wash) |
| Cuci besar / overhaul | Deep clean with the indoor unit stripped down |
| Isi freon / tambah freon | Refrigerant refill / top-up |
| AC bocor | AC leaking (water or refrigerant) |
| AC tidak dingin | AC not cooling |
| Bongkar pasang | Remove and reinstall (relocation) |
| Pasang AC baru | New AC installation |
| Kapasitor | Capacitor (common failure after power surges) |
| Modul / PCB | Control board |
| Unit indoor / outdoor | Indoor head / outdoor condenser |
| MCB turun / jeglek | Breaker tripping |
| Service AC terdekat | AC service near me |

## Other terms worth knowing

- **Inverter:** a variable-speed compressor that slows down once the room is cool, using 30-50% less electricity than a fixed-speed (non-inverter) unit.
- **R32 / R410A / R22:** refrigerant types. R32 is today's standard; R22 is obsolete and expensive to refill.
- **Split AC:** an indoor head plus an outdoor condenser, the standard system in Bali homes and villas.
- **Multi-split:** several indoor heads sharing one outdoor unit.
- **Cassette:** a ceiling-mounted unit blowing in four directions, common in restaurants and shops.
- **VRF / VRV:** large commercial systems serving many rooms from one outdoor plant (VRV is Daikin's name).
- **HVAC:** heating, ventilation and air conditioning, in Bali it almost always means cooling.

## Need a tukang AC in Bali?

WhatsApp us for [service AC Bali](/service-ac-bali) in Bahasa Indonesia or English, our [AC service price list](/ac-service-price-bali), or 24/7 [HVAC and AC repair](/hvac-repair-bali).`,
    faq: [
      { q: "What does PK stand for in air conditioners?", a: "PK stands for paardenkracht, Dutch for horsepower. In Indonesia it describes AC size: 1 PK is roughly 9,000 BTU/h of cooling, 1.5 PK about 12,000 BTU/h and 2 PK about 18,000 BTU/h." },
      { q: "How do I convert BTU to PK?", a: "Divide roughly by 9,000 for small units: 9,000 BTU ≈ 1 PK, 12,000 BTU ≈ 1.5 PK, 18,000 BTU ≈ 2 PK, 24,000 BTU ≈ 2.5 PK." },
      { q: "What is tukang AC in English?", a: "Tukang AC means AC technician or aircon repairman, the person who cleans, services, repairs and installs air conditioners." },
      { q: "How many PK is a 1.5 ton AC?", a: "One ton is 12,000 BTU/h, so a 1.5-ton AC (18,000 BTU/h) is about 2 PK." },
      { q: "What size AC is 5 kW?", a: "A 5 kW cooling capacity is about 17,000 BTU/h, which is a 2 PK unit, right for a 25-35 m² room in Bali." },
    ],
  },
  {
    slug: "how-often-to-service-ac-bali",
    title: "How Often Should You Service Your AC in Bali? (Complete Guide)",
    description: "Definitive AC servicing schedule for Bali, by climate zone, usage hours, and unit type. Covers chemical wash, gas check and filter cleaning intervals.",
    excerpt: "Three months is the rule. But beach-club units, Bukit villas and short-stay rentals need more. Here's the full Bali AC servicing schedule.",
    date: "2026-01-08",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "6 min read",
    body: `## The short answer

Service every **3 months** as a baseline. Service every **6-8 weeks** if you're a beach club, a beachfront villa, a short-stay rental with high turnover, or a unit running more than 12 hours a day.

That's far more often than the manufacturer manuals suggest, but those manuals are written for temperate climates. Bali's combination of 80%+ humidity, year-round 30°C+ ambient, salt air on the coast and high-volume tropical dust means evaporator coils foul up roughly three times faster than they would in Europe or Australia.

## Why Bali is different

- **Humidity**, moisture condenses on the cold evaporator coil and feeds mould growth between cooling cycles.
- **Dust**, the dry season piles fine volcanic and traffic dust onto outdoor condensers, dropping heat-rejection capacity by 20-30%.
- **Salt air**, within 1km of the coast, salt aerosol corrodes outdoor fins and bearings.
- **Hours of use**, many Bali villas run AC 10-14 hours a day, year-round. That's roughly double the annual run-hours of a typical Mediterranean home.

## Servicing schedule by use case

| Use case | Service frequency | Chemical wash |
| --- | --- | --- |
| Owner-occupied villa, normal use | Every 3 months | Every 12 months |
| Short-stay villa (Airbnb/Booking) | Every 6-8 weeks | Every 6 months |
| Beachfront / Bukit villa | Every 6-8 weeks | Every 6 months |
| Restaurant / café (open kitchen) | Monthly | Every 4 months |
| Beach club | Monthly | Every 3 months |
| Office / retail | Every 3 months | Every 12 months |
| Hotel guest rooms | Every 6-8 weeks (rotation) | Every 6 months |

## Service vs chemical wash, what's the difference?

A **service** is a 30-minute preventative visit per unit. We light-clean the filter and coil, flush the drain line, check refrigerant pressure on both sides, take a capacitor microfarad reading, tighten electrical terminations, hose down the outdoor condenser, run a 15-minute cool-down test and log the temperature drop.

A **chemical wash** is a 45-minute deep clean. We foam an AC coil cleaner onto the evaporator, leave it to dwell, then high-pressure rinse with a bag-and-rinse cover catching the dirty water. This is what restores cooling capacity on a unit that's been neglected.

## Signs your AC needs service right now

- Cooling has dropped, air comes out cool but the room never reaches setpoint
- Musty or sour smell when the unit starts up
- Visible black mould on the louvres or fan blades
- Water dripping from the indoor unit
- Ice forming on the copper pipes outside
- PLN bill suddenly higher with no usage change

Any of those, message us, we'll quote on the spot.

## Don't DIY this in Bali

We get a few callouts a month to clean up after a DIY chemical wash gone wrong, usually a flooded room because the bag-and-rinse cover wasn't fitted properly, or a damaged PCB because water got into the electronics bay. The small saving isn't worth the unit replacement.`,
    faq: [
      { q: "Can I just clean the filters myself between services?", a: "Yes, and you should. Pull the front cover, lift out the mesh filters, rinse under the shower, dry in the shade and refit. Doing this monthly between professional services keeps cooling capacity high." },
      { q: "What happens if I never service my AC?", a: "Cooling capacity drops 20-40% within 12 months, electricity bills rise, mould smells appear, drain lines block and flood the room, and the compressor eventually dies from running flat-out trying to compensate. Most Bali compressor failures we see are unserviced units." },
      { q: "Do you offer a discount for multiple units?", a: "Yes, from 3 units in one visit, we drop the per-unit rate. Villa managers booking 6+ units get our maintenance-package rate." },
    ],
  },
  {
    slug: "what-affects-ac-installation-cost-bali",
    title: "What Affects AC Installation Cost in Bali? A Buyer's Guide",
    description: "An honest guide to what drives the cost of an air conditioner installation in Bali, unit choice, pipe length, mounting, power supply and warranty. No hidden surprises.",
    excerpt: "Why does one quote come in much higher than another? A guide to the seven factors that actually drive AC installation cost in Bali, so you can compare quotes fairly.",
    date: "2026-01-04",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "7 min read",
    body: `## TL;DR

Two AC quotes can look very different even for the "same" job. The seven factors below are what actually drive the price. Once you understand them, comparing quotes from different installers becomes much easier, and you'll know whether the cheap quote is genuinely cheap or just leaving things out.

## 1. The unit itself

The single biggest variable. A budget non-inverter Midea 1 PK is at one end of the scale; a premium Daikin Smile Inverter 1 PK with anti-corrosion coatings is at the other. The Gree mid-range sits comfortably in between.

What you pay for as you move up the scale: quieter indoor units, smoother inverter compressors, better dehumidify performance, longer compressor warranty, anti-corrosion coil coatings, and longer real-world lifespan in tropical conditions.

## 2. Installation labour

A two-technician crew doing a proper install, site survey, vacuum purge to 500 microns, pressure leak test, neat electrical termination, commissioning cool-down test, is the going rate from a quality installer in Bali. Cheaper installs exist, and they are usually one technician, no vacuum, no leak test, which means a refrigerant leak within 6 months.

## 3. Pipework

The first 4m of insulated copper pipe and drain is included in our standard install. Beyond that, every additional metre is charged at a fixed rate. Multi-storey villas with long vertical runs from outdoor unit to indoor unit add to the price quickly, sometimes the difference between a IDR-friendly quote and an eye-watering one is just pipe length.

## 4. Outdoor unit mounting

A wall bracket on flat blockwork is the cheapest. A ground stand on a paved area is similar. A raised platform, a roof rack, or a custom stainless-steel salt-resistant bracket for a Bukit clifftop villa all add to the price. We often see this skipped by cheap quoters, then bolted on as a "surprise" once the install is underway.

## 5. Power supply

Every install needs an isolator at the outdoor unit (required by Indonesian electrical regulations, and needed if you ever want to service the unit without killing power to the whole house). If your villa needs a new dedicated breaker in the consumer unit, that adds to the price. New 3-phase circuits for cassettes and VRF systems add more.

## 6. Warranty and registration

A genuinely warrantied install includes registration of the unit with the manufacturer (Gree Indonesia or Daikin Indonesia) under your name, plus the installer's own workmanship warranty. "Cash" installs without paperwork look cheap until the compressor fails in year 2 and there's no warranty to claim against.

## 7. Add-ons that are worth paying for

- **Anti-corrosion coil treatment** on outdoor units within 1km of the coast, extends lifespan dramatically
- **Surge protector** on the outdoor isolator, prevents PCB damage from wet-season power surges
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

WhatsApp us a photo of the room, the planned outdoor unit location and the brand you're considering. We reply with a fixed total in 15 minutes, no callout fee, and we list every line item, so you can compare it apples-to-apples with any other quote you've received.`,
    faq: [
      { q: "Why do quotes vary so much for the same job?", a: "Because cheaper quotes often skip line items: vacuum purge, leak test, isolator, anti-corrosion coatings, warranty registration, surge protection. A like-for-like comparison usually narrows the gap dramatically." },
      { q: "Do you charge a callout fee?", a: "No. Quotes are free. We only charge for the work itself." },
      { q: "Can I supply my own unit?", a: "Yes, install-only is available for a standard split. We won't warranty the unit itself if you supply, but we still warranty the installation workmanship for 12 months." },
      { q: "Do you remove the old unit?", a: "Yes, included free with any new install. We pump down the old refrigerant safely and recycle through a licensed scrapper." },
    ],
  },
  {
    slug: "ac-bali-bts-sizing-guide",
    title: "What Size Air Conditioner Do You Need? Bali BTU Sizing Guide",
    description: "Complete BTU sizing guide for Bali, calculate the right AC capacity for your villa bedroom, living room, café or office. Why Bali sizing runs higher than Australia or Europe.",
    excerpt: "Why most Bali ACs are undersized, and how to size a unit properly for villa bedrooms, open-plan living rooms and beach-club terraces.",
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

That's about 30% higher than the typical Australian or European rule. Why? Because Bali's ambient is hotter (average daytime 30-32°C versus 22-25°C in Sydney), the humidity load on the unit is much higher, and most villas have 3.5-4m ceilings with single-glazed louvres, which don't insulate.

## What "PK" means

PK stands for "paardenkracht" (Dutch horsepower), the legacy unit Indonesian AC sellers use. The conversion is roughly:

- 0.5 PK ≈ 5,000 BTU
- 1 PK ≈ 9,000 BTU
- 1.5 PK ≈ 12,000 BTU
- 2 PK ≈ 18,000 BTU
- 2.5 PK ≈ 24,000 BTU

If a salesperson quotes you in PK, just convert to BTU using this table.

## Common sizing mistakes in Bali

**Mistake 1: Trusting the builder.** Bali villa builders almost always under-spec to save the client money on the unit. A 0.5 PK in a 15m² bedroom is the most common one we see, it'll never reach setpoint and will run 24/7.

**Mistake 2: Going too big.** This is rarer but worse, an oversized unit short-cycles, which means it cools the room fast then shuts off before it can dehumidify. The room ends up cool but clammy, and the unit wears out faster.

**Mistake 3: Forgetting glass.** A bedroom with a wall of west-facing glass needs 1.5 PK even at 18m². Account for sun load.

**Mistake 4: Ignoring the kitchen.** An open-plan living-kitchen adds about 30% to the cooling load. A 30m² open-plan space with a kitchen needs 2 PK (18,000 BTU), not 1.5 PK.

## How we size on a survey

For villas we look at:

- Floor area in m²
- Ceiling height (most Bali villas are 3.5-4m, not 2.4m like a hotel)
- Glazing area and orientation (west-facing is the worst)
- Whether the kitchen is open-plan
- Whether the room shares an opening with another conditioned space
- Number of occupants at peak (each adult adds ~400 BTU)
- Heat-generating appliances (oven, plasma TV, etc.)

We then add a 15% safety margin for tropical-storm hot days when the unit needs to recover quickly. The result is the right BTU, which is then matched to the next size up in the actual product range.

## Get a free sizing quote

Send us a photo of the room and the dimensions on WhatsApp. We'll come back with the right PK rating and a fixed install quote.`,
    faq: [
      { q: "Is bigger always better?", a: "No, oversized units short-cycle and don't dehumidify properly. Sizing should be 'just right' with a 15% margin, not 'as big as possible'." },
      { q: "What size for a 20m² bedroom?", a: "1 PK (9,000 BTU). Step up to 1.5 PK if there's a lot of west-facing glass or the ceiling is over 4m." },
      { q: "What about open-plan villa living rooms?", a: "Most need 2 PK (18,000 BTU) for a 30-35m² space. If it includes the kitchen, plan on a 2.5 PK or split the load between two units." },
      { q: "Do I need a separate AC for the kitchen?", a: "If the kitchen is enclosed and you cook a lot, yes, a small wall split keeps cooking heat out of the rest of the house. If it's open-plan, just upsize the living room unit." },
    ],
  },
  {
    slug: "why-ac-smells-bad-bali",
    title: "Why Your AC Smells Bad in Bali: Causes and Fixes",
    description: "Mouldy, sour or sock-like smell from your Bali air conditioner? Here are the four most common causes and how we fix each one, same day, in most cases.",
    excerpt: "That sour, mouldy smell from your AC is fixable, usually in one visit. Here are the four causes and how we diagnose each one.",
    date: "2025-12-21",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "5 min read",
    body: `## TL;DR

That sour, mouldy or "wet sock" smell from your AC is almost always **mould on the evaporator coil**, **a blocked drain line**, or **a dead animal in the outdoor unit**. All three are fixable in a single 1-hour visit.

## The four common causes

### 1. Mould on the evaporator coil (90% of cases)

The evaporator coil sits behind the indoor unit's louvres and gets cold and wet every time the AC runs. Between cycles, that moisture sits on the coil and on the foam filters in front of it, perfect breeding ground for mould and bacteria. The smell is strongest on start-up.

**Fix:** chemical wash. We foam an AC coil cleaner onto the evaporator, let it dwell for 5 minutes, then high-pressure rinse with a bag-and-rinse cover. The smell is gone the same day.

### 2. Blocked or stagnant drain line

The condensate drain line collects water from the evaporator and runs it outside. In Bali, that line gets clogged with biofilm, algae and dust. The standing water turns sour and the smell wicks back up into the room.

**Fix:** we blow the line out with compressed air, then flush with anti-algae solution. Takes 15 minutes per unit.

### 3. Dead animal in the outdoor unit

Yes, really. Geckos, frogs and the occasional rat get into the outdoor condenser cabinet. The smell wafts back into the room through the refrigerant pipe penetration in the wall.

**Fix:** we open the outdoor unit, remove whatever's in there, and seal the wall penetration with foam.

### 4. Refrigerant leak (rare but serious)

A refrigerant leak doesn't usually smell, but if there's enough leakage and the gas oil contaminates the coil, you can get a faintly sweet chemical smell. This needs immediate attention, running an under-charged system damages the compressor.

**Fix:** we leak-test with electronic detector and UV dye, repair the leak, and recharge the system.

## How to keep the smell away

- Run the AC in **fan-only mode for 10 minutes after each cooling session**, this dries the coil and stops mould growing
- Clean the foam filters monthly (rinse, dry, refit)
- Schedule a chemical wash every 12 months for owner-occupied villas, every 6 months for short-stay rentals
- Keep the bedroom door closed when the AC is running so it can dehumidify properly
- During the wet season, use a small desiccant bag on the bedside table

## When to call us

If the smell is back within 4 weeks of a wash, you have either a deep coil contamination (needs a more aggressive enzymatic treatment) or a drain pump issue (the water isn't draining at all and is sitting in the pan).

WhatsApp us a short video of the smell description and the unit running, we'll diagnose remotely and tell you which fix you need before sending a tech.`,
    faq: [
      { q: "Will replacing the filter fix the smell?", a: "It helps but rarely fixes it on its own, the mould is on the coil behind the filter, not on the filter itself. A chemical wash is the proper fix." },
      { q: "Is the mould smell dangerous?", a: "It's not directly toxic for healthy adults, but it can trigger asthma, allergies and sinus issues. Children, elderly and asthmatic guests are more sensitive." },
      { q: "How long until the smell comes back after a chemical wash?", a: "In Bali, typically 6-12 months for owner-occupied villas, 3-6 months for short-stay rentals. Running fan-only mode after each cooling session significantly extends the gap." },
    ],
  },
  {
    slug: "villa-ac-maintenance-contracts-bali",
    title: "Villa Owner's Guide to AC Maintenance Contracts in Bali",
    description: "Everything Bali villa owners and managers need to know about AC maintenance contracts, what's included, scheduling, photo reports, breakdown response, and how to avoid the worst pitfalls.",
    excerpt: "If you own or manage a Bali villa, an AC maintenance contract pays for itself in avoided repairs. Here's what to look for, what to avoid, and the questions to ask any provider.",
    date: "2025-12-15",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "7 min read",
    body: `## TL;DR

A good AC maintenance contract on a Bali villa includes scheduled servicing, photo reports, priority breakdown response and an annual deep chemical wash on every unit. For absentee owners and high-occupancy short-stay villas, it's the cheapest insurance against the cost of a single compressor replacement.

## Why villas need contracts more than houses

A typical Bali villa has 5-10 AC units, each running 8-14 hours a day in the hottest, most humid climate in the country. Without a maintenance schedule:

- Cooling capacity drops 20-40% within 12 months
- Drain lines block and water leaks ruin floors
- Compressors fail prematurely from running flat-out
- Guest reviews suffer ("the AC was loud and weak")
- Repair costs spike, often unpredictably

A contract turns unpredictable big repair bills into predictable small service bills.

## What a good Bali villa contract looks like

- **Scheduled visits**, monthly, quarterly or guest-changeover
- **All servicing labour included**, no per-visit fee
- **Photo and video report after every visit**, owner sees what was done
- **Priority response on breakdowns**, same-day, no callout fee
- **Discounted parts**, capacitors, sensors, refrigerant, drain pumps
- **One annual deep chemical wash per unit included**
- **Direct WhatsApp line for the villa manager**, same person every time
- **Owner reporting in English**, for absentee owners overseas

## Pitfalls to avoid

**1. Contracts that exclude parts.** Some companies offer a "contract" that covers visits but charges full retail for any part. Real contracts include discounted parts, capped repair pricing and free filter replacements.

**2. Different technician every visit.** Continuity matters. The same tech learning your villa builds up knowledge, they remember which unit had a slow gas leak last quarter, which capacitor reading was borderline.

**3. No written reports.** Without photo evidence and a service card, you have no idea if work was actually done. Demand reports.

**4. "We'll come when we can" scheduling.** Real contracts have date-stamped visits with WhatsApp reminders 48 hours before. If your provider can't tell you what month they'll show up next, they're not running a real schedule.

**5. No emergency response commitment.** A contract that says "best effort" on breakdowns isn't worth much during peak season when every villa needs help. Look for a written commitment to same-day response in your area.

## What we offer

We run quarterly, monthly and guest-changeover contracts across Bali. Same technician on every visit where possible. Photo report by WhatsApp within an hour of leaving. Same-day breakdown response in South Bali, the Bukit and Ubud. Discounted parts at our wholesale rate. WhatsApp owner-facing reports in English.

## How to start

Send us your villa address and the number of AC units. We do a free audit visit, log every unit (brand, model, BTU, age, last service) into an asset register PDF, and quote a fixed monthly or quarterly contract. No setup fee.`,
    faq: [
      { q: "Do contracts cover repairs?", a: "Labour on minor repairs (capacitor replacement, sensor swap, drain unblock) is included on contract. Major parts (compressor, PCB, fan motor) are quoted at our wholesale-plus rate, capped at agreed prices in the contract." },
      { q: "Can I pause the contract during low season?", a: "Yes, many short-stay villas pause monthly contracts during Ramadan or low season and revert to quarterly. We're flexible." },
      { q: "Do you handle multiple villas under one account?", a: "Yes, we have several villa management groups on a single master contract with monthly invoicing across 10-30 villas." },
      { q: "What if my villa is in Ubud or the Bukit?", a: "Same coverage applies, we have technicians based in Canggu, the Bukit and Ubud, and the response time commitment is the same." },
    ],
  },
  {
    slug: "inverter-vs-non-inverter-ac-bali",
    title: "Inverter vs Non-Inverter AC: Which Saves More in Bali?",
    description: "Inverter air conditioners cost more upfront but use much less power. Here's the real-world comparison in Bali, kWh, lifespan, noise, comfort.",
    excerpt: "Inverters save 30-40% on power versus non-inverters and last longer. Here's the full Bali comparison and why we install inverters only.",
    date: "2025-12-08",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "5 min read",
    body: `## TL;DR

In Bali, inverter ACs comfortably pay back the upfront premium within their service life, usually within 2 years for any unit running more than 6 hours a day. For owner-occupied villas and short-stay rentals, always buy inverter. For a rarely-used staff room or storage area, non-inverter is fine.

## Power consumption, the real difference

A 1 PK unit running 8 hours a day:

| Type | Avg power draw | Monthly kWh |
| --- | --- | --- |
| Non-inverter 1 PK | 950W average | ~228 kWh |
| Inverter 1 PK | 600W average | ~144 kWh |
| **Difference** | | **~84 kWh per month per unit** |

Multiply that across 6 units in a 4-bedroom villa and the savings are significant, typically enough to cover the upfront premium on the inverter units within 2 years.

## How inverter actually works

A non-inverter compressor runs at full speed when the AC is on, and shuts off completely when the room hits setpoint. It then short-cycles back on a few minutes later when the temperature drifts. Each compressor start-up draws a heavy current spike.

An inverter compressor varies its speed continuously, it ramps up hard when you first turn the unit on, then gradually slows to a low maintenance speed once the room is at setpoint. No on-off cycling. No current spikes. Steady, low-power running.

## Other inverter benefits

- **Quieter**, inverters at low speed run at 19-28 dB versus 38-45 dB for non-inverters
- **Smoother temperature**, non-inverters swing ±2°C around setpoint; inverters hold within ±0.5°C
- **Less wear on the compressor**, fewer start-up cycles means longer real-world lifespan (10-12 years versus 6-8 years for non-inverters in Bali)
- **R32 refrigerant**, modern inverters use R32, which has 1/3 the global warming impact of older R410A or R22

## When non-inverter still makes sense

- Rarely-used staff rooms (under 2 hours a day)
- Storage areas where temperature swing doesn't matter
- Very tight budgets where upfront cost dominates
- Replacing in-kind on a short-life rental property

## What we recommend

For any villa, apartment or business in Bali, we install inverter only. The upfront premium is recovered well within service life through PLN bill savings alone, and the longer lifespan means an extra 3-5 years of service before replacement.

The Gree Lomo Eco and Daikin Smile Inverter ranges are both excellent inverter choices for a 1 PK install.`,
    faq: [
      { q: "Can I tell if my current AC is inverter or non-inverter?", a: "Look for the word 'Inverter' on the indoor unit faceplate, or check the energy rating sticker, inverters typically show 4-5 stars under SNI energy labelling, non-inverters typically 1-3 stars. We can also tell from the model number on a quick photo." },
      { q: "Do inverters work with solar?", a: "Yes, inverter ACs play very well with solar systems because they don't have the heavy startup current spikes that non-inverters do. A 3kW solar system can comfortably run 2-3 inverter ACs during sunny hours." },
      { q: "Are inverter compressors more reliable?", a: "Yes in real-world Bali use. The lack of on-off cycling halves the mechanical wear on the compressor. Most inverter compressors last 10+ years here; non-inverters typically 6-8." },
    ],
  },
  {
    slug: "top-ac-problems-canggu-villas",
    title: "Top 7 AC Problems in Canggu Villas (and How to Fix Them)",
    description: "After thousands of jobs in Canggu, here are the seven most common AC faults we see, water leaks, weak cooling, mould, breaker trips and more. Plus how each one is fixed.",
    excerpt: "We've seen every AC problem a Canggu villa can throw at us. Here are the seven we fix most weeks, with the real causes and the actual fixes.",
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

**Cause:** in Canggu, usually one of three things: clogged evaporator coil (60% of cases), low refrigerant gas from a slow leak (25%), or failed run capacitor (15%).

**Fix:** chemical wash for the coil; pressure-test and recharge for the gas leak; capacitor swap for the electrical fault.

**Prevention:** chemical wash every 12 months for owner-occupied villas, every 6 months for short-stay rentals.

## 3. Musty or sour smell on start-up

**Cause:** mould on the evaporator coil and in the foam filters. Canggu's coastal humidity feeds it fast.

**Fix:** chemical wash plus filter sanitiser spray.

**Prevention:** run fan-only mode for 10 minutes after each cooling session to dry the coil; replace foam filters annually.

## 4. Outdoor unit corroded and noisy

**Cause:** salt-air corrosion on the condenser fins and fan bearings. Beachfront Canggu villas (Echo Beach, Berawa, Pererenan) get the worst of this.

**Fix:** depending on severity, fin straightening, bearing replacement, or full outdoor unit replacement. We always recommend anti-corrosion-coated outdoor units (Gree Gold Fin, Daikin Blue Fin) on any Canggu install.

**Prevention:** quarterly outdoor condenser hose-down, anti-corrosion coil treatment, and stainless-steel mounting brackets.

## 5. Breaker trips when the AC turns on

**Cause:** usually a failing capacitor causing the compressor to draw excessive starting current, or a short on a damp PCB after wet-season power surges.

**Fix:** test with a clamp meter on the spot; replace the capacitor or the PCB.

**Prevention:** install a surge protector on the outdoor isolator, pays for itself the first time it saves a PCB.

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
      { q: "Why do Canggu villas have so many AC problems?", a: "Three reasons: high humidity feeds mould, salt air from the coast corrodes outdoor units, and most builders under-spec ACs in new villas, meaning units run flat-out and wear faster." },
      { q: "Can I prevent most of these problems?", a: "Yes, quarterly servicing prevents 80% of the issues on this list. The other 20% (lightning surges, salt corrosion on Bukit-style cliff villas, builder shortcuts) need surge protectors and anti-corrosion outdoor units." },
      { q: "How fast do you respond in Canggu?", a: "Same day for most callouts, often within 2 hours of a midday booking. Our main service base is in Canggu, so it's the fastest area we cover." },
    ],
  },
  {
    slug: "lower-ac-electricity-bill-bali",
    title: "How to Lower Your AC Electricity Bill in Bali",
    description: "Twelve practical ways to cut your AC power consumption in Bali, from optimal setpoint temperature to insulation, fan-only mode and inverter upgrades.",
    excerpt: "Air conditioning is the single biggest line item on most Bali PLN bills. Here are twelve practical ways to cut it without sweating through the night.",
    date: "2025-11-24",
    author: "I Made Suarjana, Lead Technician",
    readingTime: "6 min read",
    body: `## TL;DR

Setting the AC to **25°C instead of 22°C**, running **fan-only mode in the evening**, and **upgrading to inverter** can each cut your AC bill by 15-25%. Combined, most Bali villas can roughly halve their cooling power consumption.

## 1. Set to 25°C, not 22°C

Every degree below 25°C adds roughly 6-8% to your power consumption. Setting the AC to 22°C in a Bali bedroom doesn't make you sleep better, it just makes you cold and runs the compressor flat-out. 25°C with the ceiling fan on low is the comfort sweet spot in Bali.

## 2. Use the ceiling fan with the AC

A ceiling fan on speed 1 lets you raise the AC setpoint by 3°C without losing comfort. Saving: ~20% on AC power.

## 3. Run fan-only for 10 minutes at the end of each session

This dries the evaporator coil and prevents mould, which improves cooling efficiency on the next session by keeping the coil clean.

## 4. Close doors and windows

Sounds obvious, and yet half the villas we visit have an exterior louvre window cracked open or a guest bedroom door propped open. Cool air leaks out, the AC runs harder.

## 5. Block direct sun on west-facing glass

A blackout curtain or external sunscreen on west-facing glass cuts late-afternoon solar gain by 40-60%. The AC works less hard from 4pm to 7pm.

## 6. Service the unit quarterly

A clean evaporator coil and outdoor condenser run 15-25% more efficient than a neglected unit. The cost of a quarterly service is typically recovered through reduced PLN bills.

## 7. Replace 1.5mm² cabling with 2.5mm² (older villas)

Undersized cable to the outdoor unit causes voltage drop, which makes the compressor draw more current to do the same work. We see this on older Canggu and Sanur villas, fixing it cuts power by 5-8% per unit.

## 8. Upgrade to inverter

Non-inverter to inverter upgrade saves 30-40% on running cost. A 1 PK inverter pays back the price premium well within service life.

## 9. Right-size the unit

An undersized AC runs flat-out 24/7 and never reaches setpoint, burning power and wearing the compressor. An oversized unit short-cycles and doesn't dehumidify. Right-sizing alone (replacing a struggling 0.5 PK with a properly sized 1 PK) can cut power use by 20%.

## 10. Use a programmable timer

Most modern ACs have a 24-hour timer. Set it to off 30 minutes before you usually leave the bedroom in the morning, and on 30 minutes before you return in the evening. Saves 1-2 hours of unnecessary runtime per day.

## 11. Add a surge protector

Power surges damage capacitors and PCBs, which then run inefficiently for weeks before they finally fail. A surge protector at the outdoor isolator prevents this and protects 5-8% of efficiency over the life of the unit.

## 12. Switch to a higher PLN tariff if needed (counter-intuitive)

If you're on the low residential tariff (R-1/450 VA) and your villa keeps tripping the meter, you're forcing the AC to short-cycle. Upgrading to R-1/2200 VA or R-1/3500 VA actually lowers your overall bill by allowing the AC to run smoothly.

## Real example

A 4-bedroom Canggu villa we serviced was running well above the local average on PLN. We:

- Replaced two undersized 0.5 PK units with 1 PK inverters
- Added surge protectors on all 6 outdoor units
- Set up a quarterly service schedule
- Trained the housekeeper to set 25°C standard

Six months later, the same villa was paying significantly less on PLN, the unit upgrades and surge protectors paid back well inside a year.`,
    faq: [
      { q: "Does turning the AC off completely save power?", a: "Yes for breaks longer than 30 minutes. For shorter breaks, leaving it at 25-26°C uses less power than restarting from a hot room." },
      { q: "Should I close vents in unused rooms?", a: "Bali villas don't usually have central ducted systems, each room has its own split unit. Just turn off the AC in unused rooms and close the door." },
      { q: "Is it worth installing solar for AC?", a: "Yes for owner-occupied villas. A 3-5 kW solar system covers most daytime AC use; payback is typically 4-6 years in Bali at current PLN rates." },
    ],
  },
  {
    slug: "best-ac-brands-bali-2026",
    title: "Best AC Brands Available in Bali: 2026 Buyer's Guide",
    description: "Honest 2026 ranking of the AC brands available in Bali, Daikin, Gree, Panasonic, Mitsubishi Electric, LG, Samsung, Sharp and Midea. Strengths, weaknesses, real-world reliability.",
    excerpt: "Eight brands you'll see in Bali showrooms ranked honestly, by warranty, parts availability, real-world tropical durability and value.",
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

## 1. Daikin, premium

The Japanese gold standard. Quietest indoor units (19-22 dB), smoothest inverter ramp, best dehumidify mode, longest real-world lifespan in Bali. Worth the premium for master bedrooms, hotel rooms and any noise-sensitive space.

**Warranty:** 1 year unit + 3 years compressor.

## 2. Gree, best value

The world's largest AC manufacturer. Excellent inverter performance, 5-year compressor warranty (industry-leading), R32 refrigerant, Gold Fin coil protection. The price-to-performance king on the Indonesian market.

**Warranty:** 1 year unit + 5 years compressor.

## 3. Panasonic, reliable mid-range

A strong Japanese alternative to Daikin at a slightly lower premium. The inverter PCBs are particularly reliable and parts availability across Indonesia is excellent. Slightly louder than Daikin and the dehumidify mode isn't quite as good.

**Warranty:** 1 year unit + 5 years compressor.

## 4. Mitsubishi Electric, premium alternative

Excellent inverter technology, very quiet, exceptional cooling precision. The downsides in Bali: slightly slower parts lead times and a smaller local service network than Daikin or Gree. Usually worth it only if you have a brand preference or specific commercial-grade requirements.

**Warranty:** 1 year unit + 3 years compressor.

## 5. LG, solid Korean option

Better than its reputation suggests. The Dual Inverter line is genuinely good and the 10-year compressor warranty (introduced 2024) is generous. Downsides: PCBs have a higher failure rate than Japanese brands in our experience, and the indoor units are louder than Daikin or Panasonic.

**Warranty:** 1 year unit + 10 years compressor (Dual Inverter line).

## 6. Samsung, capable but limited service

Build quality is fine, the WindFree line is genuinely innovative. The problem in Bali is the service network, Samsung HVAC service is concentrated in Jakarta and Surabaya, with limited authorised repair capacity locally. Parts can take a week.

**Warranty:** 1 year unit + 5 years compressor.

## 7. Sharp, basic but cheap

Sharp's entry-level units are functional and cheap. The inverters are basic, the noise levels are higher (32-35 dB on low fan), and the lifespan in Bali is shorter (typically 5-7 years versus 8-12 for Daikin/Gree). Acceptable for staff rooms and budget rentals.

**Warranty:** 1 year unit + 5 years compressor.

## 8. Midea, buyer beware

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
      { q: "Is Daikin really worth the extra cost?", a: "For master bedrooms and hotel rooms, yes. For guest rooms and living areas, Gree gives you most of the performance for less." },
      { q: "Why not buy the cheapest brand?", a: "Because the savings disappear the first time you need a part. A cheaper unit that fails at 24 months and can't be repaired costs you a full replacement; a Gree with a 5-year compressor warranty doesn't." },
      { q: "Do you sell and install all these brands?", a: "We are an authorised installer for Gree, Daikin, Panasonic, Mitsubishi Electric, LG and Samsung, full supply, install and registered manufacturer warranty on all six. We can also service Sharp, Midea and most legacy units." },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
