import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { services } from "@/data/services";
import { formatIDR } from "@/lib/utils";

export const metadata = {
  title: "AC Services Bali — Installation, Cleaning, Repair, Maintenance",
  description: "Full air conditioning services across Bali — installation, new system supply, chemical cleaning, scheduled servicing, 24/7 repair, commercial AC and villa packages.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />
      <Hero h1="Air Conditioning Services in Bali" sub="One team for installation, cleaning, servicing, repairs, commercial fit-outs and villa maintenance contracts." />
      <section className="section">
        <div className="container-prose grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <Link key={s.slug} href={`/services/${s.slug}`} className="card block transition hover:-translate-y-1">
              <h2 className="h3">{s.shortName}</h2>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
              <p className="mt-3 text-sm font-semibold text-brand">From {formatIDR(s.startingPrice)} →</p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
