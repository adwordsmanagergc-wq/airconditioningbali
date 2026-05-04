export const site = {
  name: "Air Conditioning Bali",
  shortName: "Air Conditioning Bali",
  tagline: "Bali's trusted air conditioning experts — installation, cleaning, and 24/7 servicing across the island.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://baliairconditioning.com",
  phone: "+62 818-0802-9595",
  phoneE164: "+6281808029595",
  whatsapp: "6281808029595",
  email: "hello@baliairconditioning.com",
  address: {
    street: "Jl. Raya Canggu",
    city: "Canggu",
    region: "Bali",
    postalCode: "80361",
    country: "ID",
  },
  geo: { lat: -8.6478, lng: 115.1385 },
  hours: "Mon–Sun, 24-hour emergency response",
  founded: "2015",
  installs: "10,000+",
  social: {
    instagram: "https://instagram.com/airconditioningbali",
    facebook: "https://facebook.com/airconditioningbali",
  },
};

export const waLink = (message?: string) => {
  const text = encodeURIComponent(
    message || "Hi, I'd like a quote for AC services in Bali.",
  );
  return `https://wa.me/${site.whatsapp}?text=${text}`;
};

export const telLink = `tel:${site.phoneE164}`;

// Canonical, comma-separated list of all brands we are authorised to install.
// Used in metadata, hero subtitles, trust copy and JSON-LD.
export const brandList = "Gree, Daikin, Panasonic, Mitsubishi Electric, LG and Samsung";
export const brandListShort = "Gree, Daikin, Panasonic, Mitsubishi, LG & Samsung";
