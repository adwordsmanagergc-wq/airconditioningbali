import { Phone, MessageCircle } from "lucide-react";
import { telLink, waLink, site } from "@/lib/site";

export default function CTASection({ heading, sub }: { heading?: string; sub?: string }) {
  return (
    <section className="section">
      <div className="container-prose">
        <div className="overflow-hidden rounded-3xl bg-brand p-8 text-white sm:p-12">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="h2 text-white">{heading || "Get a fixed quote in 15 minutes."}</h2>
              <p className="mt-2 text-white/85">{sub || "WhatsApp a photo of the room or unit. We reply with sizing, price and the next available slot."}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn bg-white text-brand hover:bg-brand-mist">
                <MessageCircle size={18} aria-hidden /> WhatsApp
              </a>
              <a href={telLink} className="btn border border-white/40 text-white hover:bg-white/10">
                <Phone size={18} aria-hidden /> {site.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
