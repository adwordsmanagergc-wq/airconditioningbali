"use client";
import Link from "next/link";
import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { areas } from "@/data/areas";
import { cn } from "@/lib/utils";

const regions = ["South Bali", "Bukit Peninsula", "Central Bali", "West Bali", "East Bali", "North Bali"];

export default function AreaTabs() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const id = useId();
  const list = areas.filter((a) => a.region === regions[active]);

  return (
    <section className="section" aria-labelledby="areas-heading">
      <div className="container-prose">
        <div className="grid gap-6 md:grid-cols-2 md:items-end">
          <h2 id="areas-heading" className="h2 reveal max-w-[14ch]">Same day across South Bali</h2>
          <p className="reveal max-w-[44ch] text-black/65 md:justify-self-end">Technicians based in Canggu, on the Bukit and in Ubud. Scheduled routes cover the north and east.</p>
        </div>

        <div role="tablist" aria-label="Bali regions" className="mt-10 flex gap-1 overflow-x-auto rounded-full bg-black/[0.05] p-1 [scrollbar-width:none]">
          {regions.map((r, i) => (
            <button
              key={r}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-selected={active === i}
              aria-controls={`${id}-panel`}
              onClick={() => setActive(i)}
              className={cn("relative min-h-[44px] shrink-0 rounded-full px-5 text-sm font-medium transition-colors duration-150", active === i ? "text-brand-ink" : "text-black/55 hover:text-black/80")}
            >
              {active === i ? (
                <motion.span layoutId="region-pill" className="absolute inset-0 rounded-full bg-white shadow-soft" transition={reduce ? { duration: 0 } : { type: "spring", duration: 0.4, bounce: 0 }} />
              ) : null}
              <span className="relative">{r}</span>
            </button>
          ))}
        </div>

        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="mt-6 min-h-[240px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={active}
              className="grid gap-x-8 border-b border-black/[0.07] sm:grid-cols-2 lg:grid-cols-3"
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] } }}
              exit={reduce ? { opacity: 0 } : { opacity: 0, transition: { duration: 0.12 } }}
            >
              {list.map((a) => (
                <li key={a.slug} className="border-t border-black/[0.07]">
                  <Link href={`/areas/${a.slug}`} className="group flex h-full min-h-[88px] flex-col justify-center py-5">
                    <span className="text-lg font-medium tracking-[-0.02em] transition-colors duration-150 group-hover:text-brand">{a.name}</span>
                    <span className="mt-1 text-sm text-black/55">{a.responseTime}</span>
                  </Link>
                </li>
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
        <Link href="/areas" className="link-underline mt-6 inline-block text-sm font-medium text-brand">See all {areas.length} areas</Link>
      </div>
    </section>
  );
}
