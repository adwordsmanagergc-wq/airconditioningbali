"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { Menu, X, MessageCircle, ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { brands } from "@/data/brands";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const serviceNav = [
  ...services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName })),
  { href: "/hvac-repair-bali", label: "24/7 HVAC Repair" },
  { href: "/air-conditioner-bali", label: "Buy an Air Conditioner" },
  { href: "/service-ac-bali", label: "Service AC (Bahasa)" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));
  const reduce = useReducedMotion();

  return (
    <header
      className={cn(
        "sticky top-0 z-header transition-[background-color,box-shadow,backdrop-filter] duration-300 ease-out",
        scrolled || open ? "bg-cream/80 shadow-[0_1px_0_rgba(16,22,30,0.08)] backdrop-blur-xl backdrop-saturate-150" : "bg-transparent",
      )}
    >
      <div className="container-prose flex h-[72px] items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center" aria-label={`${site.name} home`}>
          <Image src="/images/logo.webp" alt={`${site.name} logo`} width={720} height={470} priority className="h-11 w-auto sm:h-12" />
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          <NavDropdown label="Services" items={serviceNav} footer={{ href: "/services", label: "All services" }} />
          <NavDropdown label="Areas" items={areas.slice(0, 12).map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))} footer={{ href: "/areas", label: "View all areas" }} cols />
          <NavDropdown label="Brands" items={brands.map((b) => ({ href: `/brands/${b.slug}`, label: b.name }))} footer={{ href: "/brands", label: "Compare all brands" }} />
          <NavLink href="/ac-service-price-bali">Prices</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} className="btn-primary hidden sm:inline-flex" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden /> WhatsApp us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-black/10 bg-white/60 active:scale-[0.97] lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open ? (
          <motion.nav
            aria-label="Mobile"
            className="border-t border-black/5 lg:hidden"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, transition: { duration: 0.15, ease: [0.7, 0, 0.84, 0] } }}
            transition={{ type: "spring", duration: 0.4, bounce: 0 }}
          >
            <div className="container-prose grid max-h-[calc(100dvh-72px)] gap-1 overflow-y-auto py-4">
              <MobileGroup label="Services" items={serviceNav} footer={{ href: "/services", label: "All services" }} />
              <MobileGroup label="Areas" items={areas.slice(0, 12).map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))} footer={{ href: "/areas", label: "All areas" }} />
              <MobileGroup label="Brands" items={brands.map((b) => ({ href: `/brands/${b.slug}`, label: b.name }))} footer={{ href: "/brands", label: "Compare all" }} />
              {[
                ["/ac-service-price-bali", "Prices"],
                ["/about", "About"],
                ["/blog", "Blog"],
                ["/contact", "Contact"],
              ].map(([href, label]) => (
                <Link key={href} className="rounded-xl px-3 py-3 text-base font-medium" href={href} onClick={() => setOpen(false)}>{label}</Link>
              ))}
              <a href={waLink()} className="btn-primary mt-2" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} aria-hidden /> WhatsApp us
              </a>
            </div>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="rounded-full px-3 py-2 text-sm font-medium text-black/80 transition-colors duration-150 hover:bg-black/5 hover:text-black">
      {children}
    </Link>
  );
}

function NavDropdown({ label, items, footer, cols }: { label: string; items: { href: string; label: string }[]; footer?: { href: string; label: string }; cols?: boolean }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-black/80 transition-colors duration-150 hover:bg-black/5 hover:text-black" aria-haspopup="true">
        {label} <ChevronDown size={14} className="transition-transform duration-200 ease-out group-hover:rotate-180" aria-hidden />
      </button>
      <div
        className={cn(
          "invisible absolute left-1/2 top-full z-overlay -translate-x-1/2 pt-2 opacity-0",
          "origin-top scale-[0.96] transition-[opacity,transform,visibility] duration-150 ease-out",
          "group-hover:visible group-hover:scale-100 group-hover:opacity-100 group-focus-within:visible group-focus-within:scale-100 group-focus-within:opacity-100",
          cols ? "w-[26rem]" : "w-72",
        )}
      >
        <div className={cn("grid gap-0.5 rounded-surface bg-white p-2 shadow-lift", cols && "grid-cols-2")}>
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="rounded-xl px-3 py-2 text-sm text-black/80 transition-colors duration-150 hover:bg-cream hover:text-brand">{it.label}</Link>
          ))}
          {footer ? <Link href={footer.href} className={cn("mt-1 rounded-xl px-3 py-2 text-sm font-medium text-brand hover:bg-cream", cols && "col-span-2")}>{footer.label}</Link> : null}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, items, footer }: { label: string; items: { href: string; label: string }[]; footer?: { href: string; label: string } }) {
  return (
    <details className="group rounded-xl">
      <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-base font-medium">
        {label} <ChevronDown size={16} className="transition-transform duration-200 ease-out group-open:rotate-180" aria-hidden />
      </summary>
      <div className="faq-body grid pb-2 pl-3">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="px-3 py-2 text-sm text-black/70">{it.label}</Link>
        ))}
        {footer ? <Link href={footer.href} className="px-3 py-2 text-sm font-medium text-brand">{footer.label}</Link> : null}
      </div>
    </details>
  );
}
