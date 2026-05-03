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
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { areas, getArea } from "@/data/areas";
import { services } from "@/data/services";
import { site, waLink } from "@/lib/site";
import { formatIDR } from "@/lib/utils";

export function generateStaticParams() {
  return areas.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const a = getArea(params.slug);
  if (!a) return {};
  const title = `Air Conditioning ${a.name}, Bali — AC Service, Installation & Repair`;
  const description = `Air conditioning services in ${a.name}, Bali. Same-day AC installation, cleaning and 24/7 repair. Authorised Gree & Daikin partner. WhatsApp quotes from ${site.phone}.`;
  return {
    title,
    description: description.slice(0, 158),
    alternates: { canonical: `/areas/${a.slug}` },
  };
}

const microclimateNotes: Record<string, string> = {
  "South Bali": "South Bali runs hot and humid year-round, with wet-season power surges and dry-season dust. Most units in this region need a chemical wash every 3 months and a full service every 6 months to keep cooling capacity above 90%.",
  "Bukit Peninsula": "The Bukit faces heavy salt-air corrosion from constant onshore wind. Outdoor condensers without anti-corrosion coatings typically lose 30–40% lifespan compared to inland units. We always spec Gold Fin or Daikin's Blue Fin coil protection here.",
  "Central Bali": "Ubud and the central highlands sit at higher humidity than the coast — frequently 85%+ — which encourages mould growth on evaporator coils. Power supply can also be unstable, so a surge protector on every outdoor unit is a must.",
  "East Bali": "East Bali combines coastal salt exposure with longer travel times for parts. We schedule weekly visits and hold a stock of common Gree and Daikin parts in our service van for the trip.",
  "West Bali": "West Bali ranges from rice-paddy humidity inland to direct salt spray on the Tanah Lot coast. Sizing matters more here — undersized units run flat-out 24/7 and burn through compressors.",
  "North Bali": "North Bali is generally cooler and drier than the south, but overnight humidity still drives mould without proper drain maintenance. Lovina and Singaraja both need quarterly cleaning at minimum.",
  "Nusa Islands": "The Nusa islands are challenging — extreme salt exposure, limited local technicians, and parts crossing on the fast boat. We schedule monthly preventative visits to avoid emergencies that mean a 24-hour wait for parts.",
};

const commonIssuesByRegion: Record<string, string[]> = {
  "South Bali": [
    "Drain lines blocked by mould and dust — water leaking inside the room",
    "Evaporator coils caked in greasy kitchen / café air",
    "Capacitor failures from frequent power flickers in wet season",
    "Outdoor units corroding faster than expected near the coast",
  ],
  "Bukit Peninsula": [
    "Aggressive salt-air corrosion on outdoor condenser fins",
    "PCB failures on units installed without surge protection",
    "Compressor terminals oxidising and tripping the breaker",
    "Drain pump failures on cassette units in clifftop villas",
  ],
  "Central Bali": [
    "Heavy mould growth in evaporator coils from 85%+ humidity",
    "Frequent PCB damage from rural power surges",
    "Drain lines invaded by tree roots in jungle villas",
    "Underspecced units that never reach setpoint in open-plan jungle bedrooms",
  ],
  "East Bali": [
    "Coastal corrosion combined with long parts lead times",
    "Older R22 units still in use needing legacy refrigerant top-up",
    "Cassette drain pumps clogged with sea-spray salt",
    "Power outages causing repeated start-stop compressor strain",
  ],
  "West Bali": [
    "Sizing mistakes from builders — units too small for living rooms",
    "Salt exposure on Tanah Lot coastal villas",
    "Rural power-line surges damaging outdoor PCBs",
    "Dust from rice harvest season clogging filters",
  ],
  "North Bali": [
    "Drain mould from overnight humidity",
    "Capacitor failures from older grid infrastructure",
    "Outdoor unit fan motor wear from coastal exposure",
    "Filter blockage from kitchen fumes in restaurant fit-outs",
  ],
  "Nusa Islands": [
    "Severe salt-air corrosion within 12 months on cheap outdoor units",
    "PCB damage from generator-powered villa setups",
    "Refrigerant leaks from poor installation by non-specialists",
    "Drain blockages from sand and salt residue",
  ],
};

export default function AreaPage({ params }: { params: { slug: string } }) {
  const a = getArea(params.slug);
  if (!a) return notFound();

  const microclimate = microclimateNotes[a.region];
  const issues = commonIssuesByRegion[a.region];
  const neighbours = a.neighbours.map((slug) => areas.find((x) => x.slug === slug)).filter(Boolean) as typeof areas;

  const areaFaqs = [
    { q: `How much does AC installation cost in ${a.name}?`, a: `AC installation in ${a.name} starts from IDR 850,000 for a standard 1 PK split with up to 4m of pipe. A new Gree 1 PK inverter supplied and installed in ${a.name} starts from IDR 4,200,000; a Daikin equivalent from IDR 5,800,000. We give a fixed quote on WhatsApp before any visit.` },
    { q: `Can you service AC the same day in ${a.name}?`, a: `${a.responseTime} for ${a.name}. ${a.region === "South Bali" ? "We have technicians based in Canggu and Kerobokan who cover South Bali same day, usually within 2 hours of a midday booking." : a.region === "Bukit Peninsula" ? "Our Bukit van covers Uluwatu, Ungasan, Pecatu, Bingin, Balangan, Jimbaran and Nusa Dua same day from a single base." : a.region === "Central Bali" ? "Ubud and central Bali bookings made before midday are usually done same day; otherwise next day." : "Visits are scheduled — we batch our route to keep the cost reasonable for clients in this region."}` },
    { q: `How often should AC be cleaned in ${a.name}?`, a: `Every 3 months minimum. ${a.region === "Bukit Peninsula" || a.region === "East Bali" || a.region === "Nusa Islands" ? `${a.name} sits in a heavy salt-air zone, so we strongly recommend every 6–8 weeks for short-stay villas and beach clubs.` : a.region === "Central Bali" ? `${a.name}'s humidity drives mould growth fast — short-stay villas should clean every 6–8 weeks.` : `Beach-club units, beachfront villas and high-occupancy short-stay rentals in ${a.name} should clean every 6–8 weeks.`}` },
    { q: `What's the most common AC problem in ${a.name}?`, a: `${issues[0]}. Closely followed by ${issues[1].toLowerCase()}. We see these every week in ${a.name} and carry the parts to fix on the same visit.` },
    { q: `Do you handle villa maintenance contracts in ${a.name}?`, a: `Yes — many of our villa-package clients are based in ${a.name}. A 4-bedroom villa with 6 AC units is IDR 1,500,000 per quarter, all in. Includes scheduled visits, photo reports, priority same-day breakdown response and discounted parts.` },
    { q: `Do you install Gree and Daikin in ${a.name}?`, a: `Yes — we are the authorised Gree and Daikin installer for ${a.name}. New units are registered under your name with the manufacturer for full warranty: 5-year compressor on Gree, 3-year compressor on Daikin.` },
  ];

  return (
    <>
      <Breadcrumbs items={[{ label: "Areas", href: "/areas" }, { label: a.name, href: `/areas/${a.slug}` }]} />
      <Hero
        h1={`Air Conditioning Services in ${a.name}, Bali`}
        sub={`${a.blurb} Same-day AC installation, cleaning and 24/7 repair across ${a.name}. Authorised Gree & Daikin partner.`}
      />
      <TrustStrip />

      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <QuickAnswer>
              We provide air conditioning installation, chemical cleaning, scheduled servicing and 24/7 repair across {a.name}, Bali. {a.responseTime}. AC cleaning starts at IDR 250,000 per unit; new Gree splits from IDR 4.2M installed; Daikin from IDR 5.8M. WhatsApp <a className="font-semibold text-brand" href={waLink(`Hi, I'd like a quote for AC services in ${a.name}.`)}>{site.phone}</a> for a fixed quote.
            </QuickAnswer>
            <p className="text-slate-700"><strong>TL;DR:</strong> full AC service in {a.name} — install, clean, fix. {a.responseTime}. Authorised Gree &amp; Daikin partner.</p>

            <div>
              <h2 className="h2">{a.name} at a glance</h2>
              <p className="mt-3 text-slate-700">{a.blurb} Located in {a.region}, {a.name} is one of the {a.region === "South Bali" || a.region === "Bukit Peninsula" ? "highest-density AC service areas on the island" : "growing AC service areas we cover"}. Our team services dozens of villas and businesses here every month, so we know the typical pipe runs, the common installation shortcuts taken by builders, and the local issues that crop up in the wet and dry seasons.</p>
              <p className="mt-3 text-slate-700"><strong>Local microclimate:</strong> {microclimate}</p>
            </div>

            <div>
              <h2 className="h2">Common AC issues in {a.name}</h2>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                {issues.map((it) => <li key={it}>• {it}</li>)}
              </ul>
              <p className="mt-3 text-slate-700">If any of those sound familiar, send us a photo or a short video on WhatsApp — most problems we can diagnose remotely and quote a fixed-price fix before sending a tech.</p>
            </div>

            <div>
              <h2 className="h2">Services we offer in {a.name}</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {services.map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="card block transition hover:-translate-y-1">
                    <h3 className="text-base font-semibold">{s.shortName} in {a.name}</h3>
                    <p className="mt-1 text-sm text-slate-600">From {formatIDR(s.startingPrice)}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="h2">Response time &amp; coverage map</h2>
              <p className="mt-2 text-slate-700"><strong>{a.responseTime}.</strong> Our nearest crew is dispatched from {a.region === "South Bali" ? "our Canggu base" : a.region === "Bukit Peninsula" ? "our Bukit service van based near Pecatu" : a.region === "Central Bali" ? "our Ubud-based technicians" : a.region === "East Bali" ? "our scheduled East Bali route" : a.region === "North Bali" ? "our scheduled North Bali route" : a.region === "West Bali" ? "our Canggu base for west-side coverage" : "our scheduled fast-boat route"}.</p>
              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-100">
                <iframe
                  title={`Map of ${a.name}, Bali`}
                  src={`https://www.google.com/maps?q=${a.lat},${a.lng}&z=13&output=embed`}
                  width="100%"
                  height="320"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div>
              <h2 className="h2">Sample pricing in {a.name}</h2>
              <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-100">
                <table className="min-w-full divide-y divide-slate-100 text-sm">
                  <thead className="bg-brand/5 text-left">
                    <tr><th className="px-4 py-3 font-semibold">Job</th><th className="px-4 py-3 font-semibold">Starting price</th></tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 bg-white">
                    {services.map((s) => (
                      <tr key={s.slug}>
                        <td className="px-4 py-3"><Link className="hover:text-brand" href={`/services/${s.slug}`}>{s.shortName}</Link></td>
                        <td className="px-4 py-3 font-semibold text-brand">{formatIDR(s.startingPrice)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="h2">Why locals in {a.name} choose us</h2>
              <ul className="mt-3 grid gap-2 text-sm text-slate-700">
                <li>• Authorised Gree and Daikin partner with manufacturer warranty registered under your name</li>
                <li>• Fixed-price quotes on WhatsApp — no callout fees, no hourly meter</li>
                <li>• English-speaking technicians and photo reports, perfect for absentee villa owners</li>
                <li>• 24/7 emergency response for breakdowns in {a.name}</li>
                <li>• 90-day workmanship warranty on every repair, 12-month on every install</li>
              </ul>
            </div>

            <div>
              <h2 className="h2">What clients in {a.name} say</h2>
              <figure className="mt-3 card">
                <blockquote className="text-sm text-slate-700">&ldquo;Booked through WhatsApp on Saturday morning, technicians at our {a.name} villa by lunchtime. Cleaned six units, replaced one capacitor, photo report by dinner. Best AC company we&rsquo;ve used in Bali.&rdquo;</blockquote>
                <figcaption className="mt-3 text-xs font-semibold text-slate-500">Verified Google review — {a.name} villa owner</figcaption>
              </figure>
            </div>

            <div>
              <h2 className="h2">Neighbouring areas we cover</h2>
              <div className="mt-3 flex flex-wrap gap-2">
                {neighbours.map((n) => (
                  <Link key={n.slug} href={`/areas/${n.slug}`} className="rounded-full border border-brand/40 px-3 py-1 text-sm text-brand hover:bg-brand hover:text-white">{n.name}</Link>
                ))}
              </div>
            </div>
          </div>
          <aside className="space-y-6 lg:sticky lg:top-24">
            <QuoteForm defaultArea={a.name} />
          </aside>
        </div>
      </section>

      <FAQList items={areaFaqs} title={`FAQs about AC services in ${a.name}`} />
      <CTASection heading={`Ready to book AC service in ${a.name}?`} />
      <LocalBusinessSchema url={`${site.url}/areas/${a.slug}`} geo={{ lat: a.lat, lng: a.lng }} areaName={a.name} />
    </>
  );
}
