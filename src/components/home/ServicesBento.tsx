"use client";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { getService } from "@/data/services";
import { img } from "@/data/images";

type Cell = { slug: string; blurb: string; price?: string; className: string; image?: { src: string; alt: string }; tone?: "frost" };

const cells: Cell[] = [
  { slug: "ac-repair-bali", blurb: "Not cooling, leaking, error codes or tripping breakers. Diagnosed and fixed, usually in one visit, day or night.", price: "Rp 100.000", className: "lg:col-span-2 lg:row-span-2 min-h-[420px]", image: img.garden },
  { slug: "ac-installation-bali", blurb: "Vacuum-purged, leak-tested installs with a 12-month warranty.", price: "Rp 450.000", className: "lg:col-span-2 min-h-[260px]", image: img.rooftop },
  { slug: "ac-cleaning-bali", blurb: "Chemical coil wash, drain flush and condenser rinse.", price: "Rp 150.000", className: "" },
  { slug: "ac-servicing-bali", blurb: "Gas pressure, capacitor and electrical checks with a photo report.", className: "" },
  { slug: "new-ac-systems-bali", blurb: "Supply and install from six brands, warranty in your name.", className: "" },
  { slug: "commercial-ac-bali", blurb: "Cassette, ducted and VRF for restaurants, offices and hotels.", className: "min-h-[260px]", image: img.commercial },
  { slug: "villa-ac-maintenance-packages", blurb: "Scheduled visits, priority breakdown response and one monthly invoice for villa managers.", className: "lg:col-span-2", tone: "frost" },
];

export default function ServicesBento() {
  const reduce = useReducedMotion();
  return (
    <section className="section" aria-labelledby="services-heading">
      <div className="container-prose">
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] md:items-end">
          <h2 id="services-heading" className="h2 reveal max-w-[14ch]">Every AC job, one Bali team</h2>
          <p className="reveal max-w-[46ch] text-black/65 md:justify-self-end">
            We install, clean, service and repair split, multi-split and cassette systems across Bali, usually same day in the south.
          </p>
        </div>
        <ul className="mt-12 grid auto-rows-[minmax(220px,auto)] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cells.map((c, i) => {
            const s = getService(c.slug)!;
            return (
              <motion.li
                key={c.slug}
                className={c.className}
                initial={reduce ? false : { opacity: 0, y: 24, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ type: "spring", duration: 0.6, bounce: 0, delay: (i % 4) * 0.06 }}
              >
                <Link
                  href={`/services/${s.slug}`}
                  className={`group relative isolate flex h-full flex-col justify-end overflow-hidden rounded-surface p-6 shadow-soft transition-shadow duration-300 ease-out hover:shadow-lift ${c.image ? "text-white" : c.tone === "frost" ? "bg-frost" : "bg-white"}`}
                >
                  {c.image ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.image.src} alt={c.image.alt} loading="lazy" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                      <span aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-ink/90 via-brand-ink/35 to-transparent" />
                    </>
                  ) : null}
                  <ArrowUpRight size={22} className={`absolute right-5 top-5 transition-transform duration-200 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${c.image ? "text-white" : "text-brand"}`} aria-hidden />
                  {c.price ? (
                    <p className={`readout text-sm ${c.image ? "text-white/80" : "text-black/55"}`}>from {c.price}</p>
                  ) : null}
                  <h3 className={`mt-1 font-semibold tracking-[-0.03em] ${i === 0 ? "text-4xl sm:text-5xl" : "text-2xl"}`}>{s.shortName === "Repair" ? "Repair, 24/7" : s.shortName}</h3>
                  <p className={`mt-2 max-w-[42ch] text-[0.95rem] leading-relaxed ${c.image ? "text-white/80" : "text-black/65"}`}>{c.blurb}</p>
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
