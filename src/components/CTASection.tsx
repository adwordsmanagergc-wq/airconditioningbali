import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink, site } from "@/lib/site";
import { img } from "@/data/images";

export default function CTASection({ heading, sub }: { heading?: string; sub?: string }) {
  return (
    <section className="section">
      <div className="container-prose">
        <div className="reveal-clip relative isolate overflow-hidden rounded-surface bg-brand-ink px-6 py-14 text-white sm:px-12 sm:py-20">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img.rooftop.src} alt="" aria-hidden loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30" />
          <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-ink via-brand-ink/90 to-brand-ink/40" />
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="h2 max-w-[18ch] text-white">{heading || "Get a fixed quote in 15 minutes."}</h2>
              <p className="mt-4 max-w-[44ch] text-white/75">{sub || "Send a photo of the room or unit. We reply with sizing, price and the next free slot."}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn bg-white text-brand-ink hover:bg-cream focus-visible:ring-white">
                <MessageCircle size={18} aria-hidden /> WhatsApp us
              </a>
              <a href={telLink} className="btn border border-white/30 text-white hover:bg-white/10 focus-visible:ring-white">
                <Phone size={18} aria-hidden /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
