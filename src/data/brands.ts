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
    models: [
      { name: "Daikin Smile Inverter 1 PK", type: "Inverter split", capacity: "9,000 BTU", bestFor: "Master bedrooms up to 18m²" },
      { name: "Daikin Smile Inverter 1.5 PK", type: "Inverter split", capacity: "12,000 BTU", bestFor: "Master bedrooms or studies up to 25m²" },
      { name: "Daikin Smile Inverter 2 PK", type: "Inverter split", capacity: "18,000 BTU", bestFor: "Open-plan villa living rooms up to 35m²" },
      { name: "Daikin Multi-Split 4-port", type: "Multi-split", capacity: "1 outdoor + up to 4 indoor", bestFor: "Villas where 4 rooms share one outdoor unit" },
      { name: "Daikin Cassette 2.5 PK", type: "Ceiling cassette", capacity: "24,000 BTU", bestFor: "Premium restaurants and boutique hotel lobbies" },
    ],
  },
];

export const getBrand = (slug: string) => brands.find((b) => b.slug === slug);
