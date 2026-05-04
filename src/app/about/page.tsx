import Image from "next/image";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import TrustStrip from "@/components/TrustStrip";
import { site } from "@/lib/site";

export const metadata = {
  title: "About Us — Bali's Trusted Air Conditioning Specialists",
  description: "Bali Air Conditioning Services has been installing, cleaning and repairing AC units across Bali since 2015. Authorised Gree & Daikin partner with 10,000+ jobs completed.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
      <Hero h1="About Bali Air Conditioning Services" sub={`Founded in ${site.founded}. ${site.installs} jobs across the island. Authorised Gree & Daikin partner.`} />
      <TrustStrip />

      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[2fr_1fr]">
          <div className="space-y-6 prose-body">
            <h2 className="h2">Built for Bali</h2>
            <p>We started in Canggu in {site.founded} with a single van and a frustration: every AC company on the island was selling generic Australian or European service at premium prices, while none of them actually understood how Bali destroys air conditioners. Salt air, 80%+ humidity, wet-season power surges, builder shortcuts — the problems are different here, and the fix has to be different too.</p>
            <p>Today we run a team of certified technicians out of bases in Canggu, the Bukit and Ubud, completing more than {site.installs} installations, cleanings and repairs across Bali. We are authorised partners for Gree Indonesia and Daikin Indonesia, which means every new unit we sell is registered under your name with the manufacturer — so warranty claims actually work.</p>

            <h2 className="h2">Our team</h2>
            <p>Every technician on our team holds a refrigerant-handling certificate, has a minimum of 3 years tropical AC experience, and has been put through our internal Bali-specific training: salt-air install practices on the Bukit, surge-protection wiring for Ubud villas, and the specific mould-prevention regime that keeps Canggu coil-cleans lasting between visits.</p>

            <h2 className="h2">What makes us different</h2>
            <ul className="ml-5 list-disc space-y-2">
              <li><strong>Fixed-price, on-WhatsApp quotes.</strong> No callout fees. No hourly meter running. We agree the total before any tech sets out.</li>
              <li><strong>Photo reports after every visit.</strong> Perfect for absentee owners and villa managers who can&rsquo;t be on site.</li>
              <li><strong>Genuine 24/7 emergency response.</strong> A real technician picks up after hours, not a call-centre.</li>
              <li><strong>Authorised partner status with Gree &amp; Daikin.</strong> Manufacturer warranty registered under your name, not ours.</li>
              <li><strong>Bali-specific install practices.</strong> Anti-corrosion coatings, surge protection, condensate-pump options, brackets sized for tropical-storm wind loads.</li>
            </ul>

            <h2 className="h2">Reviewed by</h2>
            <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-soft">
              <p className="text-sm font-semibold">Reviewed by lead technician — I Made Suarjana</p>
              <p className="mt-1 text-sm text-slate-600">9 years in HVAC, certified refrigerant handler, Daikin VRV trained. Reviews all install specs and gas-pressure logs before sign-off.</p>
            </div>

            <h2 className="h2">Our coverage</h2>
            <p>We cover all 40+ major areas of Bali — Canggu, Seminyak, Kerobokan, Umalas, Berawa, Pererenan, Petitenget, Legian, Kuta, Tuban, Jimbaran, Nusa Dua, Benoa, the entire Bukit (Uluwatu, Ungasan, Pecatu, Bingin, Balangan), Sanur, Denpasar, Renon, Ubud, Penestanan, Tegallalang, Payangan, Tabanan, Tanah Lot, Mengwi, Gianyar, Klungkung, Candidasa, Amed, Lovina, Singaraja, Munduk, Bedugul, and the three Nusa islands.</p>
          </div>
          <aside>
            <div className="card">
              <h3 className="h3">By the numbers</h3>
              <dl className="mt-4 grid gap-3 text-sm">
                <Stat term="Founded" detail={site.founded} />
                <Stat term="Jobs completed" detail={site.installs} />
                <Stat term="Authorised partners" detail="Gree &amp; Daikin Indonesia" />
                <Stat term="Coverage" detail="35+ Bali areas" />
                <Stat term="Emergency line" detail="24/7" />
              </dl>
            </div>
          </aside>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function Stat({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0">
      <dt className="text-slate-500">{term}</dt>
      <dd className="font-semibold" dangerouslySetInnerHTML={{ __html: detail }} />
    </div>
  );
}
