import { MessageCircle, Phone } from "lucide-react";
import { telLink, waLink, site } from "@/lib/site";
import HeroVisual, { type HeroImage } from "./HeroVisual";
import { heroImages } from "@/data/images";

// Inner-page hero: split layout, max four text elements (headline, one-line
// sub, two CTAs). The sub is trimmed to its first sentence to keep it short.
export default function Hero({ h1, sub, image }: { h1: string; sub: string; image?: HeroImage }) {
  const pick = image ?? heroImages[[...h1].reduce((n, c) => n + c.charCodeAt(0), 0) % heroImages.length];
  const firstSentence = sub.match(/^.+?[.!?](\s|$)/)?.[0]?.trim() ?? sub;
  return (
    <section className="relative">
      <div className="container-prose grid items-center gap-12 pb-20 pt-8 md:grid-cols-[1.15fr_0.85fr] md:pb-24 md:pt-14 lg:gap-20">
        <div className="reveal">
          <h1 className="text-[2.2rem] font-semibold leading-[1.04] tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]" style={{ textWrap: "balance" }}>{h1}</h1>
          <p className="mt-5 max-w-[46ch] text-lg leading-relaxed text-black/65">{firstSentence}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink()} className="btn-primary" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden /> WhatsApp us
            </a>
            <a href={telLink} className="btn-outline">
              <Phone size={18} aria-hidden /> {site.phone}
            </a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-[420px] md:max-w-none">
          <HeroVisual image={pick} />
        </div>
      </div>
    </section>
  );
}
