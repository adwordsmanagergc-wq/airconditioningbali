"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { site, waLink } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container-prose flex items-center justify-between gap-4 py-3">
        <Link href="/" className="flex items-center gap-2" aria-label={`${site.name} home`}>
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand text-white font-bold">B</span>
          <span className="hidden text-sm font-bold leading-tight sm:block">
            Bali Air<br />Conditioning
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
          <NavDropdown label="Services" items={services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName }))} />
          <NavDropdown
            label="Areas"
            items={areas.slice(0, 12).map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))}
            footer={{ href: "/areas", label: "View all 40 areas →" }}
          />
          <Link href="/brands/gree-air-conditioning-bali" className="text-sm font-medium hover:text-brand">Gree</Link>
          <Link href="/brands/daikin-air-conditioning-bali" className="text-sm font-medium hover:text-brand">Daikin</Link>
          <Link href="/about" className="text-sm font-medium hover:text-brand">About</Link>
          <Link href="/blog" className="text-sm font-medium hover:text-brand">Blog</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-brand">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <a href={waLink()} className="btn-whatsapp hidden sm:inline-flex" target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} aria-hidden /> WhatsApp Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="rounded-full border border-slate-200 p-2 lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open ? (
        <nav aria-label="Mobile" className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container-prose grid gap-1 py-3">
            <MobileGroup label="Services" items={services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName }))} />
            <MobileGroup
              label="Areas"
              items={areas.slice(0, 12).map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))}
              footer={{ href: "/areas", label: "All 40 areas →" }}
            />
            <Link className="px-3 py-2 text-sm font-medium" href="/brands/gree-air-conditioning-bali">Gree Bali</Link>
            <Link className="px-3 py-2 text-sm font-medium" href="/brands/daikin-air-conditioning-bali">Daikin Bali</Link>
            <Link className="px-3 py-2 text-sm font-medium" href="/about">About</Link>
            <Link className="px-3 py-2 text-sm font-medium" href="/blog">Blog</Link>
            <Link className="px-3 py-2 text-sm font-medium" href="/contact">Contact</Link>
            <a href={waLink()} className="btn-whatsapp mt-2" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={16} aria-hidden /> WhatsApp Now
            </a>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function NavDropdown({ label, items, footer }: { label: string; items: { href: string; label: string }[]; footer?: { href: string; label: string } }) {
  return (
    <div className="group relative">
      <button className="text-sm font-medium hover:text-brand" aria-haspopup="true">{label}</button>
      <div className={cn("invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition", "group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100")}>
        <div className="grid grid-cols-1 gap-1 rounded-2xl border border-slate-100 bg-white p-3 shadow-card">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="rounded-lg px-3 py-2 text-sm hover:bg-brand/5 hover:text-brand">{it.label}</Link>
          ))}
          {footer ? <Link href={footer.href} className="mt-1 rounded-lg px-3 py-2 text-sm font-semibold text-brand hover:bg-brand/5">{footer.label}</Link> : null}
        </div>
      </div>
    </div>
  );
}

function MobileGroup({ label, items, footer }: { label: string; items: { href: string; label: string }[]; footer?: { href: string; label: string } }) {
  return (
    <details className="group rounded-lg">
      <summary className="cursor-pointer list-none px-3 py-2 text-sm font-semibold">{label}</summary>
      <div className="grid pl-3">
        {items.map((it) => (
          <Link key={it.href} href={it.href} className="px-3 py-2 text-sm text-slate-700">{it.label}</Link>
        ))}
        {footer ? <Link href={footer.href} className="px-3 py-2 text-sm font-semibold text-brand">{footer.label}</Link> : null}
      </div>
    </details>
  );
}
