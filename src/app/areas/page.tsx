import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { areas } from "@/data/areas";

export const metadata = {
  title: "Areas We Cover — AC Services Across Bali",
  description: "Air conditioning services in 40+ Bali areas — Canggu, Seminyak, Uluwatu, Ubud, Sanur, Denpasar, Nusa Dua and more. Same-day in South Bali, scheduled across the rest of the island.",
  alternates: { canonical: "/areas" },
};

const regions = ["South Bali", "Bukit Peninsula", "Central Bali", "West Bali", "East Bali", "North Bali", "Nusa Islands"] as const;

export default function AreasIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Areas", href: "/areas" }]} />
      <Hero h1="AC Services in Every Area of Bali" sub="40+ dedicated location pages across South Bali, the Bukit, Ubud, Sanur, Denpasar, North Bali, East Bali and the Nusa islands." />
      <section className="section">
        <div className="container-prose space-y-10">
          {regions.map((r) => {
            const list = areas.filter((a) => a.region === r);
            if (!list.length) return null;
            return (
              <div key={r}>
                <h2 className="h3">{r}</h2>
                <ul className="mt-3 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {list.map((a) => (
                    <li key={a.slug}>
                      <Link href={`/areas/${a.slug}`} className="block rounded-lg border border-slate-100 bg-white px-4 py-3 text-sm font-medium hover:border-brand hover:text-brand">{a.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
      <CTASection />
    </>
  );
}
