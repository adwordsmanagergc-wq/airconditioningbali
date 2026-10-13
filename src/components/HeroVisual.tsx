"use client";
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { useEffect } from "react";

export type HeroImage = { src: string; alt: string };

// Photo with a clip-path reveal and a thermostat readout that settles from the
// Bali outdoor temperature to a comfortable room temperature. Plays once.
export default function HeroVisual({ image, from = 31, to = 24, label = "Room temperature", priority = true }: { image: HeroImage; from?: number; to?: number; label?: string; priority?: boolean }) {
  const reduce = useReducedMotion();
  const temp = useMotionValue(reduce ? to : from);
  const rounded = useTransform(temp, (v) => `${Math.round(v)}°`);

  useEffect(() => {
    if (reduce) return;
    const c = animate(temp, to, { duration: 2.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] });
    return () => c.stop();
  }, [reduce, temp, to]);

  return (
    <div className="relative">
      <motion.div
        className="relative aspect-[4/5] w-full overflow-hidden rounded-surface bg-brand-mist shadow-lift"
        initial={reduce ? false : { clipPath: "inset(12% 10% 12% 10% round 20px)", opacity: 0.4 }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 20px)", opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <motion.img
          src={image.src}
          alt={image.alt}
          width={960}
          height={1200}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          className="h-full w-full object-cover"
          initial={reduce ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>
      <motion.div
        className="absolute -bottom-5 left-4 flex items-end gap-4 rounded-surface border border-white/60 bg-white/75 px-5 py-4 shadow-lift backdrop-blur-xl sm:-left-8"
        initial={reduce ? false : { opacity: 0, y: 16, filter: "blur(6px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ type: "spring", duration: 0.7, bounce: 0, delay: 0.35 }}
        aria-hidden
      >
        <motion.span className="readout text-5xl font-medium leading-none text-brand-ink">{rounded}</motion.span>
        <span className="pb-1 text-xs leading-tight text-black/60">
          {label}
          <br />
          <span className="text-brand">from {from}° outside</span>
        </span>
      </motion.div>
    </div>
  );
}
