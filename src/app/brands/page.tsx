import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { brands } from "@/data/brands";

export const metadata = {
  title: "AC Brands Bali — Authorised Gree & Daikin Supplier",
  description: "Authorised Gree and Daikin air conditioning supplier and installer in Bali. Compare warranty and best-fit use cases for your villa, apartment or business.",
  alternates: { canonical: "/brands" },
};

export default function BrandsIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Brands", href: "/brands" }]} />
      <Hero h1="AC Brands We Supply in Bali" sub="Authorised partners for Gree and Daikin — full unit supply, installation, registered warranty and lifetime servicing." />
      <section className="section">
        <div className="container-prose grid gap-6 md:grid-cols-2">
          {brands.map((b) => (
            <Link key={b.slug} href={`/brands/${b.slug}`} className="card block transition hover:-translate-y-1">
              <h2 className="h3">{b.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{b.tagline}</p>
              <p className="mt-3 text-sm font-semibold text-brand">See {b.name} range →</p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
