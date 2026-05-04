import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import QuickAnswer from "@/components/QuickAnswer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import TrustStrip from "@/components/TrustStrip";
import { services, getService } from "@/data/services";
import { areas } from "@/data/areas";
import { brands } from "@/data/brands";
import { installationFaqs, cleaningFaqs, repairFaqs, servicingFaqs, villaFaqs, commercialFaqs, homeFaqs } from "@/data/faqs";
import { site, waLink } from "@/lib/site";
import { Check } from "lucide-react";

const faqMap: Record<string, typeof homeFaqs> = {
  "ac-installation-bali": installationFaqs,
  "new-ac-systems-bali": installationFaqs,
  "ac-cleaning-bali": cleaningFaqs,
  "ac-servicing-bali": servicingFaqs,
  "ac-repair-bali": repairFaqs,
  "commercial-ac-bali": commercialFaqs,
  "villa-ac-maintenance-packages": villaFaqs,
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = getService(params.slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url: `${site.url}/services/${s.slug}` },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = getService(params.slug);
  if (!s) return notFound();
  const faqs = faqMap[s.slug] ?? homeFaqs;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.shortName,
    provider: { "@type": "HVACBusiness", name: site.name, telephone: site.phoneE164, url: site.url },
    areaServed: { "@type": "AdministrativeArea", name: "Bali, Indonesia" },
    description: s.description,
  };

  return (
    <>
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: s.shortName, href: `/services/${s.slug}` }]} />
      <Hero h1={s.title} sub={s.description} />
      <TrustStrip />

      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <QuickAnswer>{s.quickAnswer}</QuickAnswer>
            <p className="text-slate-700"><strong>TL;DR:</strong> {s.shortName.toLowerCase()} across Bali — same-day in South Bali, next-day across the rest of the island. Authorised Gree &amp; Daikin partner. WhatsApp <a className="font-semibold text-brand" href={waLink(`Hi, I'd like a quote for ${s.shortName} in Bali.`)}>{site.phone}</a> for a fixed quote.</p>

            <div>
              <h2 className="h2">What&rsquo;s included</h2>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {s.inclusions.map((i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-700"><Check size={16} className="mt-1 text-brand" aria-hidden /> {i}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="h2">Our process</h2>
              <ol className="mt-4 grid gap-4">
                {s.process.map((p, i) => (
                  <li key={p.step} className="flex gap-4">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-white font-bold">{i + 1}</span>
                    <div>
                      <h3 className="font-semibold">{p.step}</h3>
                      <p className="text-sm text-slate-600">{p.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            <div>
              <h2 className="h2">How to get a quote</h2>
              <p className="mt-2 text-slate-700">Every job is quoted as a fixed total before we send a technician — no callout fees, no hourly meter. WhatsApp us a photo of the unit or room, your area in Bali, and the number of units. We reply within 15 minutes with a fixed price and the next available slot.</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <a href={waLink(`Hi, I'd like a quote for ${s.shortName} in Bali.`)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">WhatsApp for a quote</a>
              </div>
            </div>

            <div>
              <h2 className="h2">Brands we service</h2>
              <p className="mt-2 text-slate-700">Authorised partners for Gree and Daikin, plus full service capability on Panasonic, Mitsubishi Electric, LG, Samsung, Sharp and Midea.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {brands.map((b) => (
                  <Link key={b.slug} href={`/brands/${b.slug}`} className="rounded-full border border-brand px-4 py-2 text-sm font-medium text-brand hover:bg-brand hover:text-white">{b.name} Bali</Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="h2">Areas covered</h2>
              <p className="mt-2 text-slate-700">We provide {s.shortName.toLowerCase()} services across all of Bali — same-day in South Bali, next-day elsewhere.</p>
              <div className="mt-4 grid gap-1 sm:grid-cols-2 md:grid-cols-3">
                {areas.map((a) => (
                  <Link key={a.slug} href={`/areas/${a.slug}`} className="text-sm text-slate-700 hover:text-brand">{s.shortName} in {a.name} →</Link>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24">
            <QuoteForm defaultService={s.shortName} />
          </aside>
        </div>
      </section>

      <FAQList items={faqs} />
      <CTASection heading={`Ready to book ${s.shortName.toLowerCase()}?`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    </>
  );
}
