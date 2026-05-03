import Link from "next/link";
import Hero from "@/components/Hero";
import Breadcrumbs from "@/components/Breadcrumbs";
import CTASection from "@/components/CTASection";
import { posts } from "@/data/posts";

export const metadata = {
  title: "Bali AC Blog — Guides, Pricing & Maintenance Tips",
  description: "Honest guides on air conditioning in Bali — Gree vs Daikin, installation costs, BTU sizing, maintenance schedules and how to lower your PLN bill. Written by working AC technicians.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Blog", href: "/blog" }]} />
      <Hero h1="The Bali AC Blog" sub="Honest, technician-written guides on choosing, installing, servicing and saving money on air conditioning in Bali." />
      <section className="section">
        <div className="container-prose grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="card block transition hover:-translate-y-1">
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">{p.readingTime}</p>
              <h2 className="mt-2 h3">{p.title}</h2>
              <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
              <p className="mt-3 text-xs text-slate-500">{new Date(p.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })} · {p.author}</p>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
