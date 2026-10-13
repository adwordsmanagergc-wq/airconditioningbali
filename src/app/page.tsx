import Link from "next/link";
import QuickAnswer from "@/components/QuickAnswer";
import FAQList from "@/components/FAQList";
import CTASection from "@/components/CTASection";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { homeFaqs } from "@/data/faqs";
import { site, brandList } from "@/lib/site";
import TrustStrip from "@/components/TrustStrip";
import HomeHero from "@/components/home/HomeHero";
import BrandMarquee from "@/components/home/BrandMarquee";
import CoolingStory from "@/components/home/CoolingStory";
import ServicesBento from "@/components/home/ServicesBento";
import CostEstimator from "@/components/home/CostEstimator";
import AreaTabs from "@/components/home/AreaTabs";
import { img } from "@/data/images";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: { absolute: "Air Conditioning Bali: AC Installation, Cleaning & 24/7 Repair" },
  description:
    "Bali's trusted air conditioning experts. Same-day AC installation, cleaning, servicing and repair across Canggu, Seminyak, Uluwatu, Ubud, Sanur and 35+ areas. Authorised installer for Gree, Daikin, Panasonic, Mitsubishi, LG and Samsung.",
  alternates: { canonical: "/", languages: { "en-ID": "/", "id-ID": "/service-ac-bali" } },
};

const conditions = [
  {
    title: "Salt air eats outdoor units",
    body: "Sea spray corrodes untreated condenser fins within a few years. Near the coast we fit anti-corrosion coils and rinse the fins on every service.",
    stat: "1 km",
    statLabel: "from the sea: we always spec a coated coil",
    image: img.rooftop,
  },
  {
    title: "Humidity grows mould in drains",
    body: "At 80% humidity, drain lines clog with algae in weeks. That is the leak dripping on your floor. A three-monthly clean stops it.",
    stat: "3 mo",
    statLabel: "cleaning interval we recommend",
    image: img.eaves,
  },
];

const guides = [
  { slug: "daikin-vs-gree-bali", title: "Gree vs Daikin: which AC is better?" },
  { slug: "how-often-to-service-ac-bali", title: "How often should you service your AC in Bali?" },
  { slug: "ac-bali-bts-sizing-guide", title: "What size AC do you need? Bali sizing guide" },
  { slug: "gree-air-conditioner-review", title: "Is Gree a good brand? An honest review" },
];

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <TrustStrip />
      <BrandMarquee />
      <CoolingStory />
      <ServicesBento />

      <section className="pb-4">
        <div className="container-prose">
          <div className="max-w-[760px]">
            <QuickAnswer>
              We are a Bali-based air conditioning company for homes, villas and businesses: installation, cleaning, servicing and 24/7 repair. Authorised installer for {brandList}, covering Canggu, Seminyak, Uluwatu, Ubud, Sanur and 35+ other areas, usually same day. Quotes are fixed and sent on WhatsApp within 15 minutes.
            </QuickAnswer>
          </div>
        </div>
      </section>

      <CostEstimator />

      <section className="section" aria-labelledby="bali-heading">
        <div className="container-prose">
          <h2 id="bali-heading" className="h2 reveal max-w-[16ch]">Bali is hard on air conditioners</h2>
          <div className="mt-14 space-y-20 sm:space-y-28">
            {conditions.map((c, i) => (
              <div key={c.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                <div className={`reveal-clip overflow-hidden rounded-surface ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.image.src} alt={c.image.alt} loading="lazy" width={960} height={1200} className="aspect-[5/4] w-full object-cover" />
                </div>
                <div className="reveal">
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">{c.title}</h3>
                  <p className="mt-5 max-w-[44ch] text-lg leading-relaxed text-black/65">{c.body}</p>
                  <div className="mt-8 flex items-baseline gap-4 border-t border-black/[0.08] pt-6">
                    <span className="readout shrink-0 whitespace-nowrap text-5xl font-medium text-brand">{c.stat}</span>
                    <span className="text-sm text-black/55">{c.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AreaTabs />

      <section className="section" aria-labelledby="guides-heading">
        <div className="container-prose grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <h2 id="guides-heading" className="h2 reveal max-w-[12ch]">Straight answers from our technicians</h2>
            <Link href="/blog" className="link-underline mt-6 inline-block text-sm font-medium text-brand">All guides</Link>
          </div>
          <ul className="border-t border-black/[0.08]">
            {guides.map((g) => (
              <li key={g.slug} className="border-b border-black/[0.08]">
                <Link href={`/blog/${g.slug}`} className="group flex min-h-[80px] items-center justify-between gap-6 py-6">
                  <span className="text-xl font-medium tracking-[-0.02em] transition-colors duration-150 group-hover:text-brand sm:text-2xl">{g.title}</span>
                  <ArrowRight size={22} className="shrink-0 text-brand transition-transform duration-200 ease-out group-hover:translate-x-1" aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQList items={homeFaqs} />
      <CTASection />
      <LocalBusinessSchema url={site.url} />
    </>
  );
}
