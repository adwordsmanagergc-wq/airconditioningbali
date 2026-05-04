import Link from "next/link";
import Image from "next/image";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { brands } from "@/data/brands";
import { site, telLink, waLink } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-brand-mist">
      <div className="container-prose grid gap-10 py-14 md:grid-cols-4">
        <div>
          <Link href="/" aria-label={`${site.name} home`} className="inline-block">
            <Image
              src="/images/logo.webp"
              alt={`${site.name} — Service & Installation`}
              width={720}
              height={470}
              className="h-14 w-auto"
            />
          </Link>
          <p className="mt-4 text-sm text-slate-600">{site.tagline}</p>
          <div className="mt-4 space-y-1 text-sm text-slate-700">
            <p><strong>{site.name}</strong></p>
            <p>{site.address.street}, {site.address.city}, {site.address.region} {site.address.postalCode}</p>
            <p><a href={telLink} className="hover:text-brand">{site.phone}</a></p>
            <p><a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a></p>
            <p>{site.hours}</p>
          </div>
          <div className="mt-4 flex gap-3 text-sm">
            <a className="hover:text-brand" href={site.social.instagram}>Instagram</a>
            <a className="hover:text-brand" href={site.social.facebook}>Facebook</a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wide">Services</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link href={`/services/${s.slug}`} className="text-slate-700 hover:text-brand">{s.shortName}</Link></li>
            ))}
          </ul>
          <h3 className="mt-6 text-sm font-bold uppercase tracking-wide">Brands</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {brands.map((b) => (
              <li key={b.slug}><Link href={`/brands/${b.slug}`} className="text-slate-700 hover:text-brand">{b.name} Bali</Link></li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-2">
          <h3 className="text-sm font-bold uppercase tracking-wide">Areas We Cover</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            {areas.map((a) => (
              <li key={a.slug}><Link href={`/areas/${a.slug}`} className="text-slate-700 hover:text-brand">{a.name}</Link></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200">
        <div className="container-prose flex flex-col items-start justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <a href={waLink()} className="hover:text-brand">WhatsApp</a>
            <a href={telLink} className="hover:text-brand">{site.phone}</a>
            <Link href="/sitemap.xml" className="hover:text-brand">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
