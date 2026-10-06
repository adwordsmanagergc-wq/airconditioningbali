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
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { landings, getLanding } from "@/data/landings";
import { servicePrices } from "@/data/pricing";
import { renderMarkdown } from "@/lib/markdown";
import { site, waLink } from "@/lib/site";

// Only the slugs in src/data/landings.ts exist at the root; everything else 404s.
export const dynamicParams = false;

export function generateStaticParams() {
  return landings.map((l) => ({ landing: l.slug }));
}

const labels = {
  en: { tldr: "TL;DR", related: "Related pages", quote: "WhatsApp for a fixed quote", faqTitle: "Frequently Asked Questions" },
  id: { tldr: "Ringkasan", related: "Halaman terkait", quote: "Chat WhatsApp untuk harga pasti", faqTitle: "Pertanyaan yang Sering Diajukan" },
};

export function generateMetadata({ params }: { params: { landing: string } }): Metadata {
  const l = getLanding(params.landing);
  if (!l) return {};
  const self = `/${l.slug}`;
  const languages: Record<string, string> = {};
  if (l.lang === "en") {
    languages["en-ID"] = self;
    if (l.alternates?.id) languages["id-ID"] = l.alternates.id;
  } else {
    languages["id-ID"] = self;
    if (l.alternates?.en) languages["en-ID"] = l.alternates.en;
  }
  return {
    title: { absolute: l.metaTitle },
    description: l.description,
    alternates: { canonical: self, languages },
    openGraph: {
      title: l.metaTitle,
      description: l.description,
      url: `${site.url}${self}`,
      locale: l.lang === "id" ? "id_ID" : "en_ID",
    },
  };
}

const toNumber = (price: string) => Number(price.replace(/[^0-9]/g, ""));

export default function LandingPage({ params }: { params: { landing: string } }) {
  const l = getLanding(params.landing);
  if (!l) return notFound();
  const t = labels[l.lang];
  const html = renderMarkdown(l.body);
  const url = `${site.url}/${l.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: l.h1,
    serviceType: l.serviceType,
    url,
    inLanguage: l.lang === "id" ? "id-ID" : "en",
    description: l.description,
    provider: { "@type": "HVACBusiness", name: site.name, telephone: site.phoneE164, url: site.url },
    areaServed: l.areaName
      ? { "@type": "Place", name: `${l.areaName}, Bali, Indonesia` }
      : { "@type": "AdministrativeArea", name: "Bali, Indonesia" },
    ...(l.withPriceOffers
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: l.lang === "id" ? "Harga service AC" : "AC service prices",
            itemListElement: servicePrices.map((p) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: l.lang === "id" ? p.serviceId : p.service },
              priceSpecification: { "@type": "PriceSpecification", minPrice: toNumber(p.from), priceCurrency: "IDR" },
            })),
          },
        }
      : {}),
  };

  return (
    <div lang={l.lang === "id" ? "id" : undefined}>
      <Breadcrumbs items={[{ label: l.breadcrumb, href: `/${l.slug}` }]} />
      <Hero h1={l.h1} sub={l.heroSub} />
      <TrustStrip />

      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div className="min-w-0 space-y-6">
            <QuickAnswer>{l.quickAnswer}</QuickAnswer>
            <p className="text-slate-700"><strong>{t.tldr}:</strong> {l.tldr}</p>
            <div className="flex flex-wrap gap-3">
              <a href={waLink(l.waMessage)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">{t.quote}</a>
            </div>

            <div className="prose-body" dangerouslySetInnerHTML={{ __html: html }} />

            <div>
              <h2 className="h2">{t.related}</h2>
              <div className="mt-4 flex flex-wrap gap-3">
                {l.related.map((r) => (
                  <Link key={r.href} href={r.href} className="rounded-full border border-brand px-4 py-2 text-sm font-medium text-brand hover:bg-brand hover:text-white">{r.label}</Link>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24">
            <QuoteForm defaultService={l.defaultService} defaultArea={l.areaName} />
          </aside>
        </div>
      </section>

      <FAQList items={l.faqs} title={t.faqTitle} />
      <CTASection heading={l.ctaHeading} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <LocalBusinessSchema url={url} geo={l.geo} areaName={l.areaName} />
    </div>
  );
}
