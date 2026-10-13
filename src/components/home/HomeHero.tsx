"use client";
import { motion, useReducedMotion } from "motion/react";
import { MessageCircle, Phone } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";
import { img } from "@/data/images";
import { site, telLink, waLink } from "@/lib/site";

const line1 = ["Air", "conditioning"];
const line2 = ["built", "for", "Bali", "heat."];

// First-visit moment: words materialise one by one, then the photo opens and
// the thermostat settles to 24°. Plays once, skipped under reduced motion.
export default function HomeHero() {
  const reduce = useReducedMotion();
  const word = (w: string, i: number, accent = false) => (
    <motion.span
      key={`${w}-${i}`}
      className={`inline-block ${accent ? "text-brand" : ""}`}
      initial={reduce ? false : { opacity: 0, y: 18, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ type: "spring", duration: 0.8, bounce: 0, delay: 0.08 + i * 0.06 }}
    >
      {w}&nbsp;
    </motion.span>
  );

  return (
    <section className="relative">
      <div className="container-prose grid min-h-[calc(100dvh-72px)] items-center gap-12 pb-16 pt-6 md:grid-cols-[1.2fr_0.8fr] md:pb-20 lg:gap-24">
        <div>
          <h1 className="text-[2.75rem] font-semibold leading-[1.0] tracking-[-0.045em] sm:text-6xl lg:text-[clamp(4rem,5.6vw,5.6rem)]">
            {line1.map((w, i) => word(w, i))}
            <br />
            {line2.map((w, i) => word(w, i + line1.length, i >= 2))}
          </h1>
          <motion.p
            className="mt-7 max-w-[40ch] text-lg leading-relaxed text-black/65 sm:text-xl"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            Installation, cleaning and 24/7 repair across the island. Fixed quotes on WhatsApp in 15 minutes.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href={waLink()} className="btn-primary px-6 py-3.5 text-base" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={18} aria-hidden /> WhatsApp us
            </a>
            <a href={telLink} className="btn-outline px-6 py-3.5 text-base">
              <Phone size={18} aria-hidden /> {site.phone}
            </a>
          </motion.div>
        </div>
        <div className="mx-auto w-full max-w-[440px] md:max-w-none">
          <HeroVisual image={img.thatch} />
        </div>
      </div>
    </section>
  );
}
