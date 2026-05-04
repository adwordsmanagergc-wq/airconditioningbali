"use client";
import { useEffect, useState } from "react";

export type HeroSlide = { src: string; alt: string };

export default function HeroSlideshow({ slides, intervalMs = 4000 }: { slides: HeroSlide[]; intervalMs?: number }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [slides.length, intervalMs]);

  return (
    <div
      className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-brand-mist shadow-card"
      aria-roledescription="carousel"
      aria-label="Bali air conditioning gallery"
    >
      {slides.map((s, i) => (
        // Plain <img> tag — bypasses Next.js image optimisation entirely so it
        // works regardless of sharp install or Vercel image CDN issues.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={s.src}
          src={s.src}
          alt={s.alt}
          width={960}
          height={1200}
          loading={i === 0 ? "eager" : "lazy"}
          fetchPriority={i === 0 ? "high" : "auto"}
          decoding="async"
          aria-hidden={i !== index}
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: i === index ? 1 : 0 }}
        />
      ))}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-2 bg-white/60"}`}
          />
        ))}
      </div>
    </div>
  );
}
