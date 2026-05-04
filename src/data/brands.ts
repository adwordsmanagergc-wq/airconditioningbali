export type Brand = {
  slug: string;
  name: string;
  title: string;
  tagline: string;
  description: string;
  quickAnswer: string;
  strengths: string[];
  bestFor: string;
  warranty: string;
  compareTo: string; // slug of the main brand to compare against
  authorised: boolean;
  models: { name: string; type: string; capacity: string; bestFor: string }[];
};

export const brands: Brand[] = [
  {
    slug: "gree-air-conditioning-bali",
    name: "Gree",
    title: "Gree Air Conditioning Bali — Authorised Supplier & Installer",
    tagline: "World's largest residential AC manufacturer, with the best price-to-reliability ratio for Bali villas.",
    description:
      "We are an authorised Gree partner in Bali, supplying and installing the full Gree residential and light-commercial range. Gree offers excellent value inverter splits on the Indonesian market — strong cooling, R32 refrigerant, and a 5-year compressor warranty backed by Gree Indonesia.",
    quickAnswer:
      "Gree is the largest AC manufacturer in the world and an excellent value choice for most Bali villas. Inverter splits with R32 refrigerant, a 5-year compressor warranty and Gold Fin anti-corrosion coil protection. WhatsApp us your room sizes for a fixed Gree supply-and-install quote.",
    strengths: [
      "Excellent price-to-performance ratio on the Indonesian market",
      "5-year compressor warranty (industry-leading)",
      "R32 refrigerant — lower environmental impact",
      "Wide spare-parts availability across Indonesia",
      "Strong inverter range with anti-corrosion Gold Fin coating",
    ],
    bestFor: "Villas, apartments and small businesses where value, reliability and warranty matter more than absolute premium build.",
    warranty: "1 year full unit + 5 years compressor (registered with Gree Indonesia)",
    compareTo: "daikin-air-conditioning-bali",
    authorised: true,
    models: [
      { name: "Gree Lomo Eco 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Bedrooms up to 18m²" },
      { name: "Gree Lomo Eco 1.5 PK", type: "Inverter split", capacity: "12,000 BTU", bestFor: "Bedrooms or living rooms up to 25m²" },
      { name: "Gree Lomo Eco 2 PK", type: "Inverter split", capacity: "18,000 BTU", bestFor: "Open-plan villa living spaces up to 35m²" },
      { name: "Gree Cassette 2.5 PK", type: "Ceiling cassette", capacity: "24,000 BTU", bestFor: "Restaurants, cafés, retail spaces up to 45m²" },
      { name: "Gree Cassette 5 PK", type: "Ceiling cassette", capacity: "48,000 BTU", bestFor: "Beach-club terraces, large dining rooms" },
    ],
  },
  {
    slug: "daikin-air-conditioning-bali",
    name: "Daikin",
    title: "Daikin Air Conditioning Bali — Authorised Supplier & Installer",
    tagline: "Japan's premium HVAC brand — the quietest, most durable AC you can buy in Bali.",
    description:
      "We are an authorised Daikin partner in Bali. Daikin is the global leader in inverter technology, with the quietest indoor units, the most precise temperature control, and a build quality that handles Bali's humidity and salt air better than any other brand.",
    quickAnswer:
      "Daikin is the premium choice for Bali — Japanese build quality, the quietest indoor units (down to 19 dB), and the longest real-world lifespan in tropical conditions. Registered manufacturer warranty, Blue Fin anti-corrosion coil protection, smooth inverter ramp. Best for master bedrooms and hospitality.",
    strengths: [
      "Quietest indoor units on the market (19–22 dB on low fan)",
      "Industry-leading swing compressor with smooth inverter ramp",
      "Best dehumidify mode — vital for Bali's 80%+ humidity",
      "Premium PCB and corrosion-protected coils",
      "Strong second-hand resale value",
    ],
    bestFor: "Premium villas, hotel guest rooms, master bedrooms, music studios and any space where noise, precision and longevity matter most.",
    warranty: "1 year full unit + 3 years compressor (registered with Daikin Indonesia)",
    compareTo: "gree-air-conditioning-bali",
    authorised: true,
    models: [
      { name: "Daikin Smile Inverter 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Master bedrooms up to 18m²" },
      { name: "Daikin Smile Inverter 1.5 PK", type: "Inverter split", capacity: "12,000 BTU", bestFor: "Master bedrooms or studies up to 25m²" },
      { name: "Daikin Smile Inverter 2 PK", type: "Inverter split", capacity: "18,000 BTU", bestFor: "Open-plan villa living rooms up to 35m²" },
      { name: "Daikin Multi-Split 4-port", type: "Multi-split", capacity: "1 outdoor + up to 4 indoor", bestFor: "Villas where 4 rooms share one outdoor unit" },
      { name: "Daikin Cassette 2.5 PK", type: "Ceiling cassette", capacity: "24,000 BTU", bestFor: "Premium restaurants and boutique hotel lobbies" },
    ],
  },
  {
    slug: "panasonic-air-conditioning-bali",
    name: "Panasonic",
    title: "Panasonic Air Conditioning Bali — Supply, Install & Service",
    tagline: "Japanese reliability with strong inverter performance and excellent parts availability across Indonesia.",
    description:
      "We supply, install and service the full Panasonic AC range across Bali. Panasonic sits in the strong mid-premium tier — Japanese build quality, robust inverter PCBs, and one of the best parts-availability networks in Indonesia. A solid alternative to Daikin at a slightly lower premium.",
    quickAnswer:
      "Panasonic is a reliable Japanese mid-premium choice for Bali. Inverter PCBs are particularly tough, parts ship overnight from Surabaya or Jakarta, and the nanoeX air-purification feature helps with Bali's humidity and dust. Slightly louder than Daikin but cheaper, with a 5-year compressor warranty.",
    strengths: [
      "Reliable Japanese build with strong PCB longevity",
      "Excellent spare-parts network across Indonesia",
      "5-year compressor warranty",
      "nanoeX air-purification on premium models — useful for Bali humidity",
      "Strong dehumidify and 'Mild Dry Cooling' modes",
    ],
    bestFor: "Long-stay residences, boutique hotels and villa owners who want Japanese reliability without the Daikin premium.",
    warranty: "1 year full unit + 5 years compressor",
    compareTo: "daikin-air-conditioning-bali",
    authorised: false,
    models: [
      { name: "Panasonic Standard Inverter 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Bedrooms up to 18m²" },
      { name: "Panasonic Standard Inverter 1.5 PK", type: "Inverter split", capacity: "12,000 BTU", bestFor: "Bedrooms or studies up to 25m²" },
      { name: "Panasonic Premium Inverter (nanoeX) 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Master bedrooms — air purification" },
      { name: "Panasonic Premium Inverter (nanoeX) 2 PK", type: "Inverter split", capacity: "18,000 BTU", bestFor: "Open-plan living rooms up to 35m²" },
      { name: "Panasonic Cassette 2.5 PK", type: "Ceiling cassette", capacity: "24,000 BTU", bestFor: "Cafés, retail, small offices" },
    ],
  },
  {
    slug: "mitsubishi-air-conditioning-bali",
    name: "Mitsubishi Electric",
    title: "Mitsubishi Electric Air Conditioning Bali — Supply, Install & Service",
    tagline: "Premium Japanese inverter technology with industry-leading temperature precision and quiet operation.",
    description:
      "We supply, install and service Mitsubishi Electric (Mitsubishi MSY series and equivalents) across Bali. The premium-tier Japanese choice alongside Daikin — exceptional inverter precision, very quiet operation, and a strong reputation for commercial-grade reliability.",
    quickAnswer:
      "Mitsubishi Electric is a premium Japanese alternative to Daikin in Bali. Excellent inverter precision (holds setpoint within ±0.5°C), very quiet, and engineered for commercial-grade duty cycles. Slightly slower local parts lead times than Daikin, but build quality is unmatched in the mid-premium range.",
    strengths: [
      "Industry-leading inverter compressor precision",
      "Very quiet indoor units (21–24 dB on low fan)",
      "Commercial-grade reliability — popular in hotel fit-outs",
      "Excellent dehumidify performance",
      "MELCloud smart-control on premium models",
    ],
    bestFor: "Premium villas, boutique hotels, music studios and commercial fit-outs where temperature precision and reliability are critical.",
    warranty: "1 year full unit + 3 years compressor",
    compareTo: "daikin-air-conditioning-bali",
    authorised: false,
    models: [
      { name: "Mitsubishi MSY Standard 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Master bedrooms up to 18m²" },
      { name: "Mitsubishi MSY Standard 1.5 PK", type: "Inverter split", capacity: "12,000 BTU", bestFor: "Bedrooms or studies up to 25m²" },
      { name: "Mitsubishi MSY Standard 2 PK", type: "Inverter split", capacity: "18,000 BTU", bestFor: "Open-plan living rooms up to 35m²" },
      { name: "Mitsubishi Multi-Split (MXZ)", type: "Multi-split", capacity: "1 outdoor + up to 5 indoor", bestFor: "Multi-room villas with one outdoor unit" },
      { name: "Mitsubishi Cassette (PLA-RP)", type: "Ceiling cassette", capacity: "24,000–48,000 BTU", bestFor: "Hotels, restaurants, premium retail" },
    ],
  },
  {
    slug: "lg-air-conditioning-bali",
    name: "LG",
    title: "LG Air Conditioning Bali — Supply, Install & Service",
    tagline: "Korean engineering with the longest compressor warranty in the market and strong dual-inverter performance.",
    description:
      "We supply, install and service the LG AC range across Bali. LG's Dual Inverter compressor and 10-year warranty make it a credible alternative to the Japanese brands at a lower price point. Strong cooling output, smart Wi-Fi control, and modern aesthetics.",
    quickAnswer:
      "LG offers the longest compressor warranty in the Bali market — 10 years on the Dual Inverter line — at a price between Gree and Panasonic. Strong cooling output, modern aesthetics, and Wi-Fi smart control on most models. Slightly louder indoor units and higher PCB failure rate than Japanese brands.",
    strengths: [
      "10-year compressor warranty on the Dual Inverter line (longest in Bali)",
      "Strong cooling output — fast pull-down on hot days",
      "Wi-Fi smart control built in on most models",
      "Modern, slim indoor unit aesthetics",
      "Competitive mid-range pricing",
    ],
    bestFor: "Apartments, modern villas and clients who want Wi-Fi control plus the longest possible compressor warranty.",
    warranty: "1 year full unit + 10 years compressor (Dual Inverter line)",
    compareTo: "gree-air-conditioning-bali",
    authorised: false,
    models: [
      { name: "LG Dual Inverter 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Bedrooms up to 18m²" },
      { name: "LG Dual Inverter 1.5 PK", type: "Inverter split", capacity: "12,000 BTU", bestFor: "Bedrooms or living rooms up to 25m²" },
      { name: "LG Dual Inverter 2 PK", type: "Inverter split", capacity: "18,000 BTU", bestFor: "Living rooms up to 35m²" },
      { name: "LG ArtCool Mirror", type: "Inverter split (designer)", capacity: "9,000–18,000 BTU", bestFor: "Modern villas — mirrored designer faceplate" },
      { name: "LG Cassette 2.5 PK", type: "Ceiling cassette", capacity: "24,000 BTU", bestFor: "Cafés, retail, small offices" },
    ],
  },
  {
    slug: "samsung-air-conditioning-bali",
    name: "Samsung",
    title: "Samsung Air Conditioning Bali — Supply, Install & Service",
    tagline: "Korean innovation with WindFree comfort cooling and modern smart features.",
    description:
      "We supply, install and service Samsung air conditioners across Bali. Samsung's WindFree technology eliminates the unpleasant 'cold draught' feeling — ideal for bedroom installations. Strong inverter range, modern looks, and SmartThings app control. Local service network is smaller than Japanese brands so parts can take longer.",
    quickAnswer:
      "Samsung's WindFree line is the standout feature in this brand's Bali lineup — micro-perforated front face delivers gentle cooling without a direct draught, ideal for sensitive sleepers. Modern Korean build, SmartThings app integration, but local Bali parts availability is slower than Daikin or Gree.",
    strengths: [
      "WindFree mode — gentle, draught-free cooling for bedrooms",
      "SmartThings app integration with voice control (Bixby/Alexa/Google)",
      "Modern minimalist indoor unit design",
      "Strong inverter range with good cooling output",
      "5-year compressor warranty",
    ],
    bestFor: "Modern villas, sensitive sleepers (no direct draught), and tech-forward owners who want app-based smart control.",
    warranty: "1 year full unit + 5 years compressor",
    compareTo: "daikin-air-conditioning-bali",
    authorised: false,
    models: [
      { name: "Samsung Standard Inverter 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Bedrooms up to 18m²" },
      { name: "Samsung WindFree 1 PK", type: "Inverter split (WindFree)", capacity: "9,000 BTU", bestFor: "Bedrooms — draught-free cooling" },
      { name: "Samsung WindFree 1.5 PK", type: "Inverter split (WindFree)", capacity: "12,000 BTU", bestFor: "Master bedrooms or living rooms up to 25m²" },
      { name: "Samsung WindFree 2 PK", type: "Inverter split (WindFree)", capacity: "18,000 BTU", bestFor: "Open-plan living rooms up to 35m²" },
      { name: "Samsung Cassette 2.5 PK", type: "Ceiling cassette", capacity: "24,000 BTU", bestFor: "Cafés, modern retail, small offices" },
    ],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
