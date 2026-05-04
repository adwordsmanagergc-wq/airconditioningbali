import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import QuickAnswer from "@/components/QuickAnswer";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import QuoteForm from "@/components/QuoteForm";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { brands } from "@/data/brands";
import { homeFaqs } from "@/data/faqs";
import { site, waLink } from "@/lib/site";
import { Wrench, SprayCan, Hammer, ClipboardCheck, Building2, Home as HomeIcon, ShieldCheck, Sparkles, Truck, Users } from "lucide-react";

export const metadata = {
  title: "Air Conditioning Bali — Installation, Cleaning & 24/7 Repair",
  description:
    "Bali's trusted air conditioning experts. Same-day AC installation, cleaning, servicing and repair across Canggu, Seminyak, Uluwatu, Ubud, Sanur and 35+ areas. Authorised Gree & Daikin partner.",
  alternates: { canonical: "/" },
};

const serviceIcons: Record<string, React.ReactNode> = {
  "ac-installation-bali": <Wrench size={22} />,
  "new-ac-systems-bali": <Truck size={22} />,
  "ac-cleaning-bali": <SprayCan size={22} />,
  "ac-servicing-bali": <ClipboardCheck size={22} />,
  "ac-repair-bali": <Hammer size={22} />,
  "commercial-ac-bali": <Building2 size={22} />,
  "villa-ac-maintenance-packages": <HomeIcon size={22} />,
};

export default function HomePage() {
  return (
    <>
      <Hero
        h1="Bali's Trusted Air Conditioning Experts — Installation, Cleaning & Servicing Across the Island"
        sub="Same-day AC service from a 24/7 team that actually knows Bali villas. Authorised Gree & Daikin partner. Fixed quotes on WhatsApp in 15 minutes."
      />
      <TrustStrip />

      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6">
            <QuickAnswer>
              We are a Bali-based air conditioning company specialising in residential and commercial AC installation, cleaning, servicing and 24/7 repair. We are authorised partners for Gree and Daikin and cover Canggu, Seminyak, Uluwatu, Ubud, Sanur and 35+ other Bali areas same-day. Quotes are fixed-fee and sent on WhatsApp within 15 minutes.
            </QuickAnswer>
            <p className="text-slate-700">
              <strong>TL;DR:</strong> we install, clean, service and fix split, multi-split and ceiling-cassette air conditioners across Bali — usually same day in South Bali. Authorised Gree and Daikin partner. WhatsApp <a className="font-semibold text-brand" href={waLink()}>{site.phone}</a> for a fixed quote.
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>

      <section className="section bg-brand-mist">
        <div className="container-prose">
          <h2 className="h2">Our services</h2>
          <p className="mt-2 max-w-2xl text-slate-700">From a single bedroom split clean to a beach-club VRF design — we handle every AC job in Bali, with a 12-month workmanship warranty on every install.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="card transition hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-brand">{serviceIcons[s.slug]}</div>
                  <h3 className="text-base font-semibold">{s.shortName}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-600">{s.description.split(".")[0]}.</p>
                <p className="mt-3 text-sm font-semibold text-brand">Get a quote →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <h2 className="h2">Why Bali villa owners choose us</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <USP icon={<ShieldCheck size={22} aria-hidden />} title="Authorised partner" body="Direct relationship with Gree Indonesia and Daikin Indonesia — full manufacturer warranty registration on every install." />
            <USP icon={<Sparkles size={22} aria-hidden />} title="Bali-specific expertise" body="Our techs spec for 80%+ humidity, salt-air corrosion on the Bukit, and the power-surge issues common in Ubud." />
            <USP icon={<Users size={22} aria-hidden />} title="English-speaking team" body="Owner-friendly communication, photo reports for absentee owners, and one master account for villa managers." />
            <USP icon={<ShieldCheck size={22} aria-hidden />} title="Fixed-fee quotes" body="No hourly meter running. Every job quoted upfront on WhatsApp before we send a tech." />
          </div>
        </div>
      </section>

      <section className="section bg-brand-mist">
        <div className="container-prose">
          <h2 className="h2">Featured brands</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {brands.map((b) => (
              <div key={b.slug} className="card">
                <div className="flex items-center justify-between">
                  <h3 className="h3">{b.name}</h3>
                  <span className="pill">Authorised</span>
                </div>
                <p className="mt-3 text-slate-700">{b.tagline}</p>
                <p className="mt-3 text-sm text-slate-600">{b.bestFor}</p>
                <div className="mt-4 flex gap-3">
                  <Link href={`/brands/${b.slug}`} className="btn-outline">See {b.name} range</Link>
                  <a href={waLink(`Hi, I'd like a quote for a new ${b.name} AC in Bali.`)} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-prose">
          <h2 className="h2">Areas we cover across Bali</h2>
          <p className="mt-2 max-w-2xl text-slate-700">We serve all 40+ major areas of Bali — same-day across South Bali, next-day in East and North Bali, and scheduled service for the Nusa islands by fast boat.</p>
          <div className="mt-8 grid gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {areas.map((a) => (
              <Link key={a.slug} href={`/areas/${a.slug}`} className="rounded-lg border border-slate-100 bg-white px-4 py-3 text-sm font-medium hover:border-brand hover:text-brand">
                AC service {a.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-brand-mist">
        <div className="container-prose">
          <h2 className="h2">How it works</h2>
          <ol className="mt-8 grid gap-6 md:grid-cols-3">
            <Step n={1} title="WhatsApp us" body="Send a photo of the room or the unit, plus your area and the issue. We reply within 15 minutes with a fixed quote." />
            <Step n={2} title="Free quote" body="No hidden callout fees. We agree the price and the time slot before any technician sets out." />
            <Step n={3} title="Same-day service" body="Our two-technician crew arrives in a stocked van. Most jobs complete in 1–3 hours, with a printed warranty card." />
          </ol>
        </div>
      </section>

      <section className="section bg-brand-mist">
        <div className="container-prose">
          <h2 className="h2">From the blog</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <BlogTeaser slug="daikin-vs-gree-bali" title="Daikin vs Gree in Bali: Which AC Brand Is Best?" excerpt="Side-by-side: warranty, noise and tropical durability — which one wins for Bali villas." />
            <BlogTeaser slug="how-often-to-service-ac-bali" title="How Often Should You Service Your AC in Bali?" excerpt="The complete servicing schedule for Bali, by climate zone and use case." />
            <BlogTeaser slug="ac-bali-bts-sizing-guide" title="What Size AC Do You Need? Bali BTU Sizing Guide" excerpt="Why Bali sizing runs higher than Australia or Europe, with a room-by-room sizing chart." />
          </div>
          <div className="mt-6"><Link href="/blog" className="btn-outline">All articles</Link></div>
        </div>
      </section>

      <FAQList items={homeFaqs} />
      <CTASection />
      <LocalBusinessSchema url={site.url} />
    </>
  );
}

function USP({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="card">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-brand">{icon}</div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </div>
  );
}

function Step({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <li className="card">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white font-bold">{n}</div>
      <h3 className="mt-3 text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{body}</p>
    </li>
  );
}

function BlogTeaser({ slug, title, excerpt }: { slug: string; title: string; excerpt: string }) {
  return (
    <Link href={`/blog/${slug}`} className="card block transition hover:-translate-y-1">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{excerpt}</p>
      <span className="mt-3 inline-block text-sm font-semibold text-brand">Read article →</span>
    </Link>
  );
}
