import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import TrustStrip from "@/components/TrustStrip";
import { brands, getBrand } from "@/data/brands";
import { homeFaqs } from "@/data/faqs";
import { Check } from "lucide-react";
import { site, waLink } from "@/lib/site";

export function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const b = getBrand(params.slug);
  if (!b) return {};
  return {
    title: b.title,
    description: b.description,
    alternates: { canonical: `/brands/${b.slug}` },
  };
}

export default function BrandPage({ params }: { params: { slug: string } }) {
  const b = getBrand(params.slug);
  if (!b) return notFound();
  const other = getBrand(b.compareTo) ?? brands.find((x) => x.slug !== b.slug)!;
  const otherBrands = brands.filter((x) => x.slug !== b.slug);

  const productSchemas = b.models.map((m) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: m.name,
    brand: { "@type": "Brand", name: b.name },
    description: `${m.type} — ${m.capacity}. ${m.bestFor}`,
  }));

  return (
    <>
      <Breadcrumbs items={[{ label: "Brands", href: "/brands" }, { label: b.name, href: `/brands/${b.slug}` }]} />
      <Hero h1={b.title} sub={b.description} />
      <TrustStrip />

      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <QuickAnswer>{b.quickAnswer}</QuickAnswer>
            <p className="text-slate-700"><strong>TL;DR:</strong> {b.tagline} {b.warranty}.</p>

            <div>
              <h2 className="h2">Why choose {b.name} in Bali</h2>
              <ul className="mt-4 grid gap-2">
                {b.strengths.map((x) => (
                  <li key={x} className="flex items-start gap-2 text-sm text-slate-700"><Check size={16} className="mt-1 text-brand" aria-hidden /> {x}</li>
                ))}
              </ul>
              <p className="mt-4 text-slate-700"><strong>Best for:</strong> {b.bestFor}</p>
            </div>

            <div>
              <h2 className="h2">Featured {b.name} models</h2>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-100 text-sm">
                  <thead className="bg-brand/5 text-left">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Model</th>
                      <th className="px-4 py-3 font-semibold">Type</th>
                      <th className="px-4 py-3 font-semibold">Capacity</th>
                      <th className="px-4 py-3 font-semibold">Best for</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {b.models.map((m) => (
                      <tr key={m.name}>
                        <td className="px-4 py-3 font-medium">{m.name}</td>
                        <td className="px-4 py-3">{m.type}</td>
                        <td className="px-4 py-3">{m.capacity}</td>
                        <td className="px-4 py-3 text-slate-600">{m.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm text-slate-600">WhatsApp us your room sizes and we&rsquo;ll match each room to the right {b.name} model and quote a fixed supply-and-install total.</p>
            </div>

            <div>
              <h2 className="h2">Warranty</h2>
              <p className="mt-2 text-slate-700">{b.warranty}. We register every unit with {b.name} Indonesia under your name and back our installation workmanship with an additional 12-month warranty.</p>
            </div>

            <div>
              <h2 className="h2">{b.name} vs {other.name} in Bali</h2>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-100 text-sm">
                  <thead className="bg-brand/5 text-left">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Feature</th>
                      <th className="px-4 py-3 font-semibold">{b.name}</th>
                      <th className="px-4 py-3 font-semibold">{other.name}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    <tr><td className="px-4 py-3">Warranty</td><td className="px-4 py-3">{b.warranty}</td><td className="px-4 py-3">{other.warranty}</td></tr>
                    <tr><td className="px-4 py-3">Best for</td><td className="px-4 py-3">{b.bestFor}</td><td className="px-4 py-3">{other.bestFor}</td></tr>
                    <tr><td className="px-4 py-3">Tagline</td><td className="px-4 py-3">{b.tagline}</td><td className="px-4 py-3">{other.tagline}</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-sm"><Link href={`/brands/${other.slug}`} className="font-semibold text-brand">Compare {other.name} →</Link></p>
            </div>

            <div>
              <h2 className="h2">Other brands we install in Bali</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {otherBrands.map((o) => (
                  <Link key={o.slug} href={`/brands/${o.slug}`} className="rounded-xl border border-slate-100 bg-white p-4 transition hover:-translate-y-1 hover:shadow-card">
                    <p className="font-semibold">{o.name}{o.authorised ? <span className="ml-2 pill">Authorised</span> : null}</p>
                    <p className="mt-1 text-sm text-slate-600">{o.tagline}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24">
            <QuoteForm defaultService="New Systems" />
            <a href={waLink(`Hi, I'd like a quote for a new ${b.name} AC in Bali.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full">WhatsApp for {b.name} quote</a>
          </aside>
        </div>
      </section>

      <FAQList items={homeFaqs} />
      <CTASection heading={`Get a fixed quote on a new ${b.name} AC.`} />
      {productSchemas.map((p, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(p) }} />
      ))}
    </>
  );
}
