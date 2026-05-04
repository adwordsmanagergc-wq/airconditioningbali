import { site } from "@/lib/site";

export default function LocalBusinessSchema({
  name,
  url,
  geo,
  areaName,
}: {
  name?: string;
  url: string;
  geo?: { lat: number; lng: number };
  areaName?: string;
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: name || site.name,
    url,
    telephone: site.phoneE164,
    image: `${site.url}/images/og/default.jpg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: areaName || site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: geo ? { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } : undefined,
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], opens: "00:00", closes: "23:59" },
    ],
    aggregateRating: { "@type": "AggregateRating", ratingValue: site.ratingValue, reviewCount: site.reviewCount },
    areaServed: areaName ? { "@type": "Place", name: `${areaName}, Bali` } : { "@type": "AdministrativeArea", name: "Bali, Indonesia" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
