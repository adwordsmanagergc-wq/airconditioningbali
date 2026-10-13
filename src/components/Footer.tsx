import Link from "next/link";
import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { services } from "@/data/services";
import { areas, getAreaName } from "@/data/areas";
import { brands } from "@/data/brands";
import { idAreaPaths } from "@/data/landings-id";
import { site, telLink, waLink } from "@/lib/site";

const popular = [
  { href: "/hvac-repair-bali", label: "HVAC Repair Bali 24/7" },
  { href: "/ac-service-price-bali", label: "AC Service Prices" },
  { href: "/air-conditioner-bali", label: "Air Conditioners Bali" },
  { href: "/blog/daikin-vs-gree-bali", label: "Gree vs Daikin" },
  { href: "/service-ac-bali", label: "Service AC Bali" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 bg-brand-ink pb-24 text-white sm:pb-0">
      <div className="container-prose grid gap-10 border-b border-white/10 py-16 md:grid-cols-[1.4fr_1fr] md:items-end">
        <p className="max-w-[16ch] text-4xl font-semibold leading-[1.05] tracking-[-0.035em] sm:text-6xl">Cool rooms, anywhere in Bali.</p>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn bg-white text-brand-ink hover:bg-cream focus-visible:ring-white">
            <MessageCircle size={18} aria-hidden /> WhatsApp us
          </a>
          <a href={telLink} className="btn border border-white/25 text-white hover:bg-white/10 focus-visible:ring-white">{site.phone}</a>
        </div>
      </div>

      <div className="container-prose grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_2fr]">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block rounded-xl bg-white p-2">
            <Image src="/images/logo.webp" alt={`${site.name} logo`} width={720} height={470} className="h-12 w-auto" />
          </Link>
          <address className="mt-6 space-y-1.5 text-sm not-italic text-white/70">
            <p className="font-medium text-white">{site.name}</p>
            <p>{site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}</p>
            <p><a href={telLink} className="link-underline hover:text-white">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="link-underline hover:text-white">{site.email}</a></p>
            <p>{site.hours}</p>
          </address>
          <div className="mt-5 flex gap-5 text-sm text-white/70">
            <a className="link-underline hover:text-white" href={site.social.instagram}>Instagram</a>
            <a className="link-underline hover:text-white" href={site.social.facebook}>Facebook</a>
          </div>
        </div>
        <FooterCol title="Services" links={services.map((s) => ({ href: `/services/${s.slug}`, label: s.shortName }))} />
        <div className="space-y-10">
          <FooterCol title="Popular" links={popular} />
          <FooterCol title="Brands" links={brands.map((b) => ({ href: `/brands/${b.slug}`, label: `${b.name} Bali` }))} />
        </div>
        <div className="space-y-10">
          <FooterCol title="Areas we cover" links={areas.map((a) => ({ href: `/areas/${a.slug}`, label: a.name }))} cols />
          <FooterCol title="Service AC (Bahasa Indonesia)" links={Object.entries(idAreaPaths).map(([slug, href]) => ({ href, label: `Service AC ${getAreaName(slug)}` }))} cols />
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href={waLink()} className="link-underline hover:text-white">WhatsApp</a>
            <a href={telLink} className="link-underline hover:text-white">{site.phone}</a>
            <Link href="/sitemap.xml" className="link-underline hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, cols }: { title: string; links: { href: string; label: string }[]; cols?: boolean }) {
  return (
    <div>
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <ul className={`mt-4 text-sm ${cols ? "grid grid-cols-2 gap-x-6 gap-y-2 sm:grid-cols-3" : "space-y-2"}`}>
        {links.map((l) => (
          <li key={l.href}><Link href={l.href} className="link-underline text-white/65 hover:text-white">{l.label}</Link></li>
        ))}
      </ul>
    </div>
  );
}
