export type Service = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  quickAnswer: string;
  inclusions: string[];
  process: { step: string; detail: string }[];
};

export const services: Service[] = [
  {
    slug: "ac-installation-bali",
    name: "AC Installation Bali",
    shortName: "Installation",
    title: "AC Installation Bali — Same-Day Fitting Across the Island",
    description:
      "Professional split, multi-split, and cassette AC installation across Bali. Authorised Gree and Daikin partner. Same-day fitting available in Canggu, Seminyak, Uluwatu, Ubud, Sanur and 35+ other areas.",
    quickAnswer:
      "We install split, multi-split and cassette air conditioners across Bali — same-day in Canggu, Seminyak, Uluwatu, Ubud and most of South Bali. Every install is bracket-mounted, vacuum-purged, gas-tested and backed by a 12-month workmanship warranty. WhatsApp us a photo of the room for a fixed quote.",
    inclusions: [
      "Site survey and BTU sizing for the room",
      "Wall bracket and outdoor stand fitted to spec",
      "Up to 4m of insulated copper pipe and drain line",
      "Vacuum purge to 500 microns and pressure leak test",
      "R32 / R410A refrigerant top-up if required",
      "Power isolator and tidy electrical termination",
      "Commissioning, cool-down test and remote pairing",
      "12-month workmanship warranty",
    ],
    process: [
      { step: "WhatsApp us a photo of the room", detail: "Send us a quick photo of the room and the proposed outdoor unit location. We reply within 15 minutes with a BTU recommendation and a fixed quote." },
      { step: "Free on-site survey (optional)", detail: "For villas, restaurants and offices we visit the site, measure pipe runs, check power capacity and confirm the cleanest mounting line." },
      { step: "Same-day or scheduled install", detail: "Our two-technician crew arrives with the unit, brackets, copper and tools. A standard split takes 2–3 hours start to finish." },
      { step: "Commissioning and handover", detail: "We run a 30-minute cool-down test, log the temperature drop, pair the remote and walk you through filter cleaning and fault codes." },
    ],
  },
  {
    slug: "new-ac-systems-bali",
    name: "New AC Systems Bali (Gree & Daikin)",
    shortName: "New Systems",
    title: "New AC Systems Bali — Authorised Gree & Daikin Supply + Install",
    description:
      "Buy a new air conditioner in Bali with full supply, install and warranty. Authorised Gree and Daikin reseller. Inverter splits, multi-splits and ceiling cassettes for villas, offices and restaurants.",
    quickAnswer:
      "We supply and install brand-new Gree and Daikin inverter systems anywhere in Bali, usually within 24–72 hours of order. Every unit is registered with the manufacturer under your name for full warranty. WhatsApp us your room sizes for a fixed quote on the right Gree or Daikin spec.",
    inclusions: [
      "Brand-new sealed unit with manufacturer warranty",
      "Full installation by certified technicians",
      "Wall bracket, outdoor stand and isolator",
      "First 4m of pipe, drain and cable",
      "Refrigerant pre-charge and top-up",
      "Vacuum purge and pressure leak test",
      "Old unit removal and responsible disposal (optional)",
      "Free first service at 6 months",
    ],
    process: [
      { step: "BTU sizing call", detail: "Tell us the room size in m² and we recommend a 0.5, 0.75, 1, 1.5 or 2 PK unit — properly sized for Bali's humidity, not under-speced like most builders." },
      { step: "Brand and budget", detail: "We compare Gree (best value, 5-year compressor warranty) versus Daikin (premium quietness and durability) for your budget and use case." },
      { step: "Delivery and install", detail: "Order today, install tomorrow in most South Bali areas. Ubud, North Bali and the Nusa islands within 72 hours." },
      { step: "Warranty registration", detail: "We register the unit with Gree Indonesia or Daikin Indonesia under your name so warranty claims go directly through us." },
    ],
  },
  {
    slug: "ac-cleaning-bali",
    name: "AC Cleaning Bali",
    shortName: "Cleaning",
    title: "AC Cleaning Bali — Deep Chemical Wash with Bag-and-Rinse Cover",
    description:
      "Deep AC cleaning across Bali with chemical wash, evaporator coil rinse, filter sanitisation and drain line flush. Removes mould, salt corrosion and tropical dust. Same-day service in Canggu, Seminyak and beyond.",
    quickAnswer:
      "A standard AC cleaning in Bali includes a chemical foam wash, high-pressure rinse of the evaporator coil, filter sanitisation, drain line flush and outdoor condenser hose-down — captured in a bag-and-rinse cover so nothing splashes the room. Most units in Bali need this every 3 months.",
    inclusions: [
      "Drop sheet and bag-and-rinse cover protection",
      "Filter removal, wash and sanitiser spray",
      "Chemical foam application to evaporator coil",
      "High-pressure water rinse with collection bag",
      "Drain pan and drain line flush (clears mould and algae)",
      "Outdoor condenser fin hose-down and cover clean",
      "Capacitor and contactor visual check",
      "Cool-down test with temperature reading",
    ],
    process: [
      { step: "Book by WhatsApp", detail: "Send us your area and number of units. Most cleanings are scheduled within 24 hours." },
      { step: "On-site setup", detail: "We lay drop sheets, fit the bag-and-rinse cover and switch off mains power at the isolator before opening the unit." },
      { step: "Chemical wash", detail: "Food-safe AC coil cleaner is foamed onto the evaporator, left to dwell for 5 minutes, then high-pressure rinsed until water runs clean." },
      { step: "Drain and refit", detail: "We blow out the drain line with compressed air, refit cleaned filters, run a 15-minute cool-down test and log the temperature drop." },
    ],
  },
  {
    slug: "ac-servicing-bali",
    name: "AC Servicing Bali",
    shortName: "Servicing",
    title: "AC Servicing Bali — Scheduled Tropical-Climate Maintenance",
    description:
      "Routine AC servicing across Bali — gas pressure check, filter clean, coil rinse, drain flush, electrical safety test. Quarterly, monthly or bespoke villa contracts. 24/7 booking by WhatsApp.",
    quickAnswer:
      "AC servicing in Bali is a structured 30-minute preventative visit per unit: filter clean, coil rinse, drain flush, gas pressure check, capacitor reading and electrical safety test. Bali's salt-air and humidity mean every AC should be serviced at least every 3 months.",
    inclusions: [
      "Refrigerant gas pressure reading (high and low side)",
      "Evaporator coil light wash and sanitiser",
      "Filter wash, dry and refit",
      "Drain line flush and pan inspection",
      "Outdoor condenser fin clean",
      "Electrical termination tightness check",
      "Capacitor microfarad reading and log",
      "Service report card with photos",
    ],
    process: [
      { step: "Schedule a recurring visit", detail: "Pick monthly, quarterly or 6-monthly. We send a WhatsApp reminder 48 hours before each visit." },
      { step: "30-minute service per unit", detail: "Each unit gets a structured 8-point service. We log readings on a service card so you can track wear over time." },
      { step: "Photo and video report", detail: "We photograph the coil before and after, log gas pressure and temperature drop, and flag any wear (capacitor, fan motor, drain) before it fails." },
      { step: "Same-day repair if needed", detail: "If we find a fault on a service visit, we quote the repair on the spot and most are fixed the same day." },
    ],
  },
  {
    slug: "ac-repair-bali",
    name: "AC Repair Bali",
    shortName: "Repair",
    title: "AC Repair Bali — 24/7 Emergency Fault Diagnosis & Fix",
    description:
      "24/7 AC repair across Bali. Fix not-cooling, water leaks, ice-up, error codes, tripping breakers, fan failures and compressor faults. Most repairs same-day, on-site, with a 90-day workmanship warranty.",
    quickAnswer:
      "We diagnose and fix AC faults across Bali — not cooling, water leaks, ice-up, error codes, tripping breakers — usually in a single 1–2 hour visit. Diagnosis is fixed-fee and quoted on WhatsApp before any technician sets out. We respond 24/7 across South Bali and Ubud.",
    inclusions: [
      "Full diagnosis with manometer, multimeter and clamp meter",
      "Refrigerant gas top-up (R32 / R410A / R22)",
      "Capacitor, contactor and sensor replacement",
      "PCB / control board fault tracing and repair",
      "Drain line unblocking and pump replacement",
      "Fan motor and bearing replacement",
      "Compressor diagnosis and replacement quote",
      "90-day workmanship warranty on the repair",
    ],
    process: [
      { step: "WhatsApp us the symptoms", detail: "Tell us the brand, age, error code (if any) and what you're seeing — water dripping, no cold air, breaker tripping, ice on the pipes. We give a likely cause and fix in writing." },
      { step: "Same-day diagnosis visit", detail: "A technician arrives with a fault-finding kit. Most diagnoses take 30–45 minutes and we explain the problem in plain English." },
      { step: "Fixed-price quote on the spot", detail: "No hourly meter running. We quote the parts and labour as a single number before doing any work." },
      { step: "Fix, test, warranty", detail: "Once approved, most repairs complete same visit. We run a cool-down test and back the work with 90 days of warranty." },
    ],
  },
  {
    slug: "commercial-ac-bali",
    name: "Commercial AC Bali",
    shortName: "Commercial",
    title: "Commercial Air Conditioning Bali — Restaurants, Offices, Retail, Hotels",
    description:
      "Commercial AC supply, install and maintenance across Bali. Cassette, ducted and VRF systems for restaurants, beach clubs, offices, retail stores, gyms and boutique hotels. Service contracts available.",
    quickAnswer:
      "Commercial AC in Bali typically uses 2.5–5 PK ceiling cassette or ducted units, sized at roughly 600 BTU per m² for restaurants and 500 BTU per m² for offices. We design, supply, install and maintain VRF, multi-split and cassette systems with 24/7 contract response for hospitality clients.",
    inclusions: [
      "Heat-load calculation and equipment sizing",
      "VRF, multi-split and cassette system design",
      "Drop-ceiling cutting and cassette mounting",
      "Concealed pipe runs and condensate pumps",
      "3-phase electrical termination",
      "BMS and zone-control integration",
      "Commissioning report with airflow and temperature logs",
      "24/7 contract response for hospitality clients",
    ],
    process: [
      { step: "Site walkthrough and heat-load calc", detail: "We measure floor plates, glazing, ceiling height, kitchen heat loads and occupancy density to size the system properly — not just to the cheapest spec." },
      { step: "System design and quote", detail: "You receive a CAD layout, equipment schedule, kW load and itemised quote. We compare cassette vs ducted vs VRF for your space." },
      { step: "Install with minimum disruption", detail: "Most fit-outs run overnight or in phased zones to keep the venue open. We coordinate with builders, electricians and ceiling crews." },
      { step: "Service contract handover", detail: "Hand over includes O&M manual, BMS credentials and a service contract starting at monthly visits per cassette." },
    ],
  },
  {
    slug: "villa-ac-maintenance-packages",
    name: "Villa AC Maintenance Packages",
    shortName: "Villa Packages",
    title: "Villa AC Maintenance Packages Bali — Scheduled Visits & Photo Reports",
    description:
      "All-inclusive AC maintenance packages for Bali villa owners and managers. Monthly, quarterly or guest-changeover servicing. Priority response, photo reports for absentee owners, English-language reporting.",
    quickAnswer:
      "Our villa packages cover scheduled servicing, photo reports, priority same-day breakdown response and an annual deep chemical wash on every unit. Monthly, quarterly or guest-changeover schedules. Designed for absentee owners and villa managers who need predictable, reportable AC maintenance across multiple villas.",
    inclusions: [
      "Quarterly, monthly or guest-changeover scheduling",
      "All servicing labour included (no per-visit fee)",
      "Photo and video report after every visit",
      "Priority same-day response for breakdowns",
      "Annual deep chemical wash on every unit",
      "Direct WhatsApp line for villa managers",
      "Absentee-owner reporting in English",
      "Asset register PDF maintained per villa",
    ],
    process: [
      { step: "Audit visit", detail: "We visit the villa, log every unit (brand, model, BTU, age, last service) and produce an asset register PDF for the owner or manager." },
      { step: "Choose your cadence", detail: "Most villas pick quarterly. High-occupancy short-stay villas pick monthly. Guest-changeover packages clean filters and run a temperature test between every booking." },
      { step: "Recurring visits", detail: "Same technician where possible, so they know the villa. WhatsApp reminder 48 hours before each visit." },
      { step: "Owner reporting", detail: "After every visit the owner gets a one-page PDF with photos, gas readings, and any wear flags — perfect for absentee owners overseas." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
