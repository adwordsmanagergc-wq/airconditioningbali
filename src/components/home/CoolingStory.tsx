"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";

const chapters = [
  { temp: 32, title: "Send a photo", body: "WhatsApp the unit, the room and your area. A technician replies in about 15 minutes." },
  { temp: 30, title: "Get a fixed price", body: "One number before anyone sets out. No callout fee in South Bali and no hourly meter." },
  { temp: 27, title: "We arrive stocked", body: "Two technicians with gauges, vacuum pump and parts for every major brand. Most jobs take 1 to 3 hours." },
  { temp: 24, title: "Cool-down test", body: "We log the temperature drop, pair the remote and back the work with a written warranty." },
];

const ticks = [32, 31, 30, 29, 28, 27, 26, 25, 24];

// Scroll-told story: the room cools from 32° to 24° as you read the four steps.
// Desktop with motion: sticky, scroll-scrubbed. Mobile or reduced motion: a
// plain readable list in the same order.
export default function CoolingStory() {
  const reduce = useReducedMotion();
  return (
    <section aria-labelledby="story-heading">
      <h2 id="story-heading" className="sr-only">How a job works</h2>
      {reduce ? null : <StickyStory />}
      <StaticStory className={reduce ? "" : "md:hidden"} />
    </section>
  );
}

function StickyStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const temp = useTransform(scrollYProgress, [0.05, 0.9], [32, 24], { clamp: true });
  const tempText = useTransform(temp, (v) => `${Math.round(v)}°`);
  const bg = useTransform(scrollYProgress, [0, 0.9], ["#EDE3D1", "#E4EBF1"]);
  const numColor = useTransform(scrollYProgress, [0.1, 0.9], ["#10161E", "#1E4FC9"]);
  const marker = useTransform(temp, (v) => `${((32 - v) / 8) * 100}%`);
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [active, setActive] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => setActive(Math.min(3, Math.max(0, Math.floor(v * 4.2)))));

  return (
    <motion.div ref={ref} className="relative hidden h-[360vh] md:block" style={{ backgroundColor: bg }}>
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden pt-[72px]">
        <div className="container-prose grid w-full grid-cols-[1.1fr_0.9fr] items-center gap-16">
          <div>
            <p className="text-lg text-black/60">From hot room to comfortable, in four steps</p>
            <motion.p className="readout mt-2 text-[clamp(9rem,19vw,17rem)] font-medium leading-[0.85]" style={{ color: numColor }} aria-hidden>
              {tempText}
            </motion.p>
            <div className="relative mt-10 max-w-[520px]" aria-hidden>
              <div className="flex justify-between">
                {ticks.map((t) => (
                  <div key={t} className="flex flex-col items-center gap-2">
                    <span className={`w-px bg-black/25 ${t % 2 === 0 ? "h-4" : "h-2.5"}`} />
                    {t % 2 === 0 ? <span className="readout text-xs text-black/50">{t}</span> : null}
                  </div>
                ))}
              </div>
              <motion.span className="absolute -top-2 h-8 w-0.5 -translate-x-1/2 rounded-full bg-brand" style={{ left: marker }} />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-px bg-black/10" aria-hidden>
              <motion.div className="h-full w-px origin-top bg-brand" style={{ scaleY: progress }} />
            </div>
            <div className="relative min-h-[220px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", duration: 0.5, bounce: 0 } }}
                  exit={{ opacity: 0, y: -8, filter: "blur(4px)", transition: { duration: 0.18, ease: [0.7, 0, 0.84, 0] } }}
                >
                  <h3 className="text-4xl font-semibold tracking-[-0.035em] lg:text-5xl">{chapters[active].title}</h3>
                  <p className="mt-5 max-w-[34ch] text-lg leading-relaxed text-black/65">{chapters[active].body}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <ol className="sr-only">
              {chapters.map((c) => (
                <li key={c.title}>{c.title}: {c.body}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StaticStory({ className = "" }: { className?: string }) {
  return (
    <div className={`bg-gradient-to-b from-[#EDE3D1] to-frost py-20 ${className}`}>
      <div className="container-prose">
        <p className="h2 max-w-[16ch]">From hot room to comfortable, in four steps</p>
        <ol className="mt-12 grid gap-10 sm:grid-cols-2">
          {chapters.map((c) => (
            <li key={c.title} className="reveal grid grid-cols-[auto_1fr] gap-5">
              <span className="readout text-5xl font-medium leading-none text-brand">{c.temp}°</span>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.02em]">{c.title}</h3>
                <p className="mt-2 leading-relaxed text-black/65">{c.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
