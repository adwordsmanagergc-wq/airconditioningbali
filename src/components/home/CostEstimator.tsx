"use client";
import { useEffect, useState } from "react";
import { motion, useReducedMotion, useSpring, useTransform } from "motion/react";
import { Minus, Plus, MessageCircle } from "lucide-react";
import { servicePrices, priceDisclaimer } from "@/data/pricing";
import { waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const options = [
  { key: "Cleaning", row: "AC cleaning (standard, 0.5-1 PK)" },
  { key: "Deep wash", row: "Deep chemical wash (bag-and-rinse)" },
  { key: "Freon top-up", row: "Refrigerant top-up (R32 / R410A)" },
  { key: "Installation", row: "New AC installation (0.5-1 PK)" },
  { key: "Repair check", row: "Fault diagnosis visit" },
].map((o) => {
  const r = servicePrices.find((p) => p.service === o.row)!;
  return { ...o, unit: Number(r.from.replace(/[^0-9]/g, "")), note: r.note };
});

const rp = (n: number) => `Rp ${Math.round(n / 1000) * 1000 > 0 ? (Math.round(n / 1000) * 1000).toLocaleString("id-ID") : "0"}`;

export default function CostEstimator() {
  const reduce = useReducedMotion();
  const [choice, setChoice] = useState(0);
  const [units, setUnits] = useState(2);
  const opt = options[choice];
  const total = opt.unit * units;
  const spring = useSpring(total, { stiffness: 140, damping: 22 });
  const shown = useTransform(spring, (v) => rp(v));
  useEffect(() => {
    if (reduce) spring.jump(total);
    else spring.set(total);
  }, [total, reduce, spring]);

  const message = `Hi, I'd like a fixed quote: ${opt.key} for ${units} unit${units > 1 ? "s" : ""}. Area: ___`;

  return (
    <section className="section" aria-labelledby="estimate-heading">
      <div className="container-prose grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 id="estimate-heading" className="h2 reveal max-w-[12ch]">See the price before you ask</h2>
          <p className="reveal mt-5 max-w-[42ch] text-black/65">Pick a job and the number of units. Then send it to us on WhatsApp for a fixed total.</p>
          <p className="mt-6 max-w-[48ch] text-sm text-black/50">{priceDisclaimer}</p>
        </div>
        <div className="rounded-surface bg-white p-6 shadow-card sm:p-8">
          <fieldset>
            <legend className="text-sm font-medium text-black/70">Job</legend>
            <div className="mt-3 flex flex-wrap gap-2" role="radiogroup">
              {options.map((o, i) => (
                <button
                  key={o.key}
                  type="button"
                  role="radio"
                  aria-checked={choice === i}
                  onClick={() => setChoice(i)}
                  className={cn(
                    "relative min-h-[44px] rounded-full px-4 text-sm font-medium transition-colors duration-150 active:scale-[0.97]",
                    choice === i ? "text-white" : "text-black/75 hover:bg-cream",
                  )}
                >
                  {choice === i ? (
                    <motion.span layoutId="estimate-chip" className="absolute inset-0 -z-0 rounded-full bg-brand" transition={reduce ? { duration: 0 } : { type: "spring", duration: 0.35, bounce: 0 }} />
                  ) : (
                    <span className="absolute inset-0 rounded-full border border-black/12" aria-hidden />
                  )}
                  <span className="relative">{o.key}</span>
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex items-center justify-between gap-6 border-t border-black/[0.08] pt-6">
            <p id="units-label" className="text-sm font-medium text-black/70">Units</p>
            <div className="flex items-center gap-2" role="group" aria-labelledby="units-label">
              <button type="button" aria-label="Fewer units" onClick={() => setUnits((u) => Math.max(1, u - 1))} className="grid h-11 w-11 place-items-center rounded-full border border-black/12 transition-colors duration-150 hover:bg-cream active:scale-[0.97] disabled:opacity-40" disabled={units <= 1}>
                <Minus size={18} aria-hidden />
              </button>
              <span className="readout w-10 text-center text-2xl font-medium" aria-live="polite">{units}</span>
              <button type="button" aria-label="More units" onClick={() => setUnits((u) => Math.min(20, u + 1))} className="grid h-11 w-11 place-items-center rounded-full border border-black/12 transition-colors duration-150 hover:bg-cream active:scale-[0.97] disabled:opacity-40" disabled={units >= 20}>
                <Plus size={18} aria-hidden />
              </button>
            </div>
          </div>

          <div className="mt-6 rounded-[14px] bg-cream p-5">
            <p className="text-sm text-black/60">Estimated from</p>
            <motion.p className="readout mt-1 text-[2.6rem] font-medium leading-none text-brand-ink sm:text-6xl" aria-live="polite">{shown}</motion.p>
            <p className="mt-3 text-sm text-black/60">{opt.note}</p>
          </div>

          <a href={waLink(message)} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6 w-full py-3.5 text-base">
            <MessageCircle size={18} aria-hidden /> Get a quote
          </a>
        </div>
      </div>
    </section>
  );
}
