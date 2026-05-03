import { site } from "@/lib/site";

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": ["Organization", "HVACBusiness", "LocalBusiness"],
    name: site.name,
    url: site.url,
    logo: `${site.url}/images/logo.png`,
    image: `${site.url}/images/og/default.jpg`,
    telephone: site.phoneE164,
    email: site.email,
    priceRange: "IDR 200,000–IDR 30,000,000",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
    ],
    sameAs: [site.social.instagram, site.social.facebook, site.social.google],
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.ratingValue, reviewCount: site.reviewCount },
    areaServed: { "@type": "AdministrativeArea", name: "Bali, Indonesia" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
