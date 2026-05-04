import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { brands } from "@/data/brands";

export const metadata = {
  title: "AC Brands Bali — Gree, Daikin, Panasonic, Mitsubishi, LG & Samsung",
  description: "Compare every major air conditioning brand sold in Bali — Gree, Daikin, Panasonic, Mitsubishi Electric, LG and Samsung. Authorised installer for all six, with full supply, install and lifetime service.",
  alternates: { canonical: "/brands" },
};

export default function BrandsIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Brands", href: "/brands" }]} />
      <Hero
        h1="AC Brands We Supply, Install & Service in Bali"
        sub="Authorised installer for every major brand sold in Indonesia — Gree, Daikin, Panasonic, Mitsubishi Electric, LG and Samsung. Manufacturer warranty registered under your name."
      />
      <section className="section">
        <div className="container-prose">
          <h2 className="h2">All six brands at a glance</h2>
          <p className="mt-2 max-w-3xl text-slate-700">Pick by use case — premium quietness, value, smart features, or longest warranty. Every brand is supplied as a brand-new sealed unit, registered under your name with the manufacturer, and backed by our 12-month installation workmanship warranty.</p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-100">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-brand/5 text-left">
                <tr>
                  <th className="px-4 py-3 font-semibold">Brand</th>
                  <th className="px-4 py-3 font-semibold">Tier</th>
                  <th className="px-4 py-3 font-semibold">Compressor warranty</th>
                  <th className="px-4 py-3 font-semibold">Best for</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {brands.map((b) => (
                  <tr key={b.slug}>
                    <td className="px-4 py-3 font-medium">
                      <Link href={`/brands/${b.slug}`} className="hover:text-brand">{b.name}</Link>
                      {b.authorised ? <span className="ml-2 pill">Authorised</span> : null}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{tierFor(b.slug)}</td>
                    <td className="px-4 py-3 text-slate-600">{b.warranty.replace("1 year full unit + ", "").replace(" (registered with " + b.name + " Indonesia)", "")}</td>
                    <td className="px-4 py-3 text-slate-600">{b.bestFor.split(".")[0]}.</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brands.map((b) => (
              <Link key={b.slug} href={`/brands/${b.slug}`} className="card block transition hover:-translate-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="h3">{b.name}</h3>
                  {b.authorised ? <span className="pill">Authorised</span> : null}
                </div>
                <p className="mt-2 text-sm text-slate-600">{b.tagline}</p>
                <p className="mt-3 text-xs text-slate-500"><strong>Warranty:</strong> {b.warranty}</p>
                <p className="mt-3 text-sm font-semibold text-brand">See {b.name} range →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection heading="Not sure which brand is right for you?" sub="WhatsApp us a floor plan and we'll size every room and quote two or three brand options side by side." />
    </>
  );
}

function tierFor(slug: string) {
  switch (slug) {
    case "daikin-air-conditioning-bali":
    case "mitsubishi-air-conditioning-bali":
      return "Premium";
    case "panasonic-air-conditioning-bali":
      return "Mid-premium";
    case "samsung-air-conditioning-bali":
    case "lg-air-conditioning-bali":
      return "Mid-range";
    case "gree-air-conditioning-bali":
      return "Value";
    default:
      return "—";
  }
}
