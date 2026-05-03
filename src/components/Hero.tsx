import Image from "next/image";
import { Phone, MessageCircle, Star, ShieldCheck, Clock } from "lucide-react";
import { telLink, waLink, site } from "@/lib/site";

export default function Hero({
  h1,
  sub,
  imageSrc = "/images/hero/villa-ac-canggu.jpg",
  imageAlt = "Modern split air conditioner installed in a Balinese villa bedroom in Canggu",
}: {
  h1: string;
  sub: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-mist to-white">
      <div className="container-prose grid items-center gap-10 py-12 md:grid-cols-2 md:py-20">
        <div>
          <div className="pill mb-4">⚡ Same-day service across South Bali</div>
          <h1 className="h1">{h1}</h1>
          <p className="mt-4 max-w-xl text-base text-slate-700 sm:text-lg">{sub}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={waLink()} className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden /> WhatsApp Now
            </a>
            <a href={telLink} className="btn-outline">
              <Phone size={18} aria-hidden /> {site.phone}
            </a>
          </div>
          <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-3">
            <li className="flex items-center gap-2"><ShieldCheck size={18} className="text-brand" aria-hidden /> Gree & Daikin authorised</li>
            <li className="flex items-center gap-2"><Star size={18} className="text-brand" aria-hidden /> {site.ratingValue}★ ({site.reviewCount}+ reviews)</li>
            <li className="flex items-center gap-2"><Clock size={18} className="text-brand" aria-hidden /> 24/7 emergency response</li>
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl bg-slate-100 shadow-card">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={960}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 left-6 hidden rounded-2xl bg-white p-4 shadow-card md:flex md:items-center md:gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-brand text-white font-bold">10K+</div>
            <div>
              <p className="text-sm font-semibold">Installs &amp; services</p>
              <p className="text-xs text-slate-500">Across Bali since {site.founded}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
