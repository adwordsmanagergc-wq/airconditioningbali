import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import QuoteForm from "@/components/QuoteForm";
import LocalBusinessSchema from "@/components/schema/LocalBusinessSchema";
import { site, telLink, waLink } from "@/lib/site";
import { MessageCircle, Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata = {
  title: "Contact — Bali Air Conditioning Services",
  description: "Contact Bali Air Conditioning Services. WhatsApp +62 818-0802-9595, 24/7 emergency line, fixed-price quotes within 15 minutes. Coverage across all 40+ Bali areas.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
      <Hero h1="Contact us" sub="WhatsApp is fastest — fixed-price quote in 15 minutes. 24/7 emergency line for breakdowns across Bali." />
      <section className="section">
        <div className="container-prose grid items-start gap-10 md:grid-cols-[1fr_1fr]">
          <div className="space-y-6">
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="card block">
              <div className="flex items-center gap-3">
                <MessageCircle className="text-[#25D366]" aria-hidden /> <h3 className="h3">WhatsApp (fastest)</h3>
              </div>
              <p className="mt-2 text-slate-700">{site.phone}</p>
              <p className="mt-1 text-sm text-slate-500">Tap to open WhatsApp with a pre-filled message.</p>
            </a>
            <a href={telLink} className="card block">
              <div className="flex items-center gap-3">
                <Phone className="text-brand" aria-hidden /> <h3 className="h3">Call</h3>
              </div>
              <p className="mt-2 text-slate-700">{site.phone}</p>
              <p className="mt-1 text-sm text-slate-500">24/7 emergency line.</p>
            </a>
            <a href={`mailto:${site.email}`} className="card block">
              <div className="flex items-center gap-3">
                <Mail className="text-brand" aria-hidden /> <h3 className="h3">Email</h3>
              </div>
              <p className="mt-2 text-slate-700">{site.email}</p>
              <p className="mt-1 text-sm text-slate-500">For villa contracts and larger jobs — we reply within 4 hours.</p>
            </a>
            <div className="card">
              <div className="flex items-center gap-3">
                <Clock className="text-brand" aria-hidden /> <h3 className="h3">Hours</h3>
              </div>
              <p className="mt-2 text-slate-700">Bookings 7am–9pm daily. {site.hours}.</p>
            </div>
            <div className="card">
              <div className="flex items-center gap-3">
                <MapPin className="text-brand" aria-hidden /> <h3 className="h3">Service area</h3>
              </div>
              <p className="mt-2 text-slate-700">All of Bali — {site.address.street}, {site.address.city}, {site.address.region}.</p>
              <div className="mt-3 overflow-hidden rounded-xl border border-slate-100">
                <iframe
                  title="Bali coverage map"
                  src={`https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=10&output=embed`}
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
      <LocalBusinessSchema url={`${site.url}/contact`} />
    </>
  );
}
