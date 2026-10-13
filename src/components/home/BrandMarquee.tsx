import Link from "next/link";
import { Snowflake } from "lucide-react";
import { brands } from "@/data/brands";

// The page's only marquee. Brand names as type (we don't have licensed logo files).
export default function BrandMarquee() {
  const row = (dup: boolean) =>
    brands.map((b) => (
      <li key={`${b.slug}-${dup}`} className={`flex shrink-0 items-center gap-10 pr-10 ${dup ? "marquee-dup" : ""}`} aria-hidden={dup || undefined}>
        <Link href={`/brands/${b.slug}`} tabIndex={dup ? -1 : undefined} className="text-4xl font-semibold tracking-[-0.04em] text-black/25 transition-colors duration-200 hover:text-brand sm:text-6xl">
          {b.name}
        </Link>
        <Snowflake size={22} strokeWidth={1.5} className="text-brand/50" aria-hidden />
      </li>
    ));
  return (
    <section aria-label="Brands we are authorised to install" className="overflow-hidden py-14 sm:py-20">
      <p className="container-prose mb-8 text-sm text-black/55">Authorised to supply, install and register warranties for</p>
      <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex w-max">
          {row(false)}
          {row(true)}
        </ul>
      </div>
    </section>
  );
}
