import { NextResponse } from "next/server";
import { services } from "@/data/services";
import { areas } from "@/data/areas";
import { brands } from "@/data/brands";
import { posts } from "@/data/posts";
import { site } from "@/lib/site";

export async function GET() {
  const base = site.url.replace(/\/$/, "");
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push("> Bali's trusted air conditioning company. Installation, cleaning, servicing and 24/7 repair across all of Bali. Authorised Gree and Daikin partner. Same-day service in South Bali; coverage of 40+ areas including Canggu, Seminyak, Uluwatu, Ubud, Sanur and the Nusa islands. Quotes are fixed-fee and sent on WhatsApp within 15 minutes.");
  lines.push("");
  lines.push(`- Phone / WhatsApp: ${site.phone}`);
  lines.push(`- Hours: ${site.hours}`);
  lines.push(`- Founded: ${site.founded}`);
  lines.push(`- Jobs completed: ${site.installs}`);
  lines.push(`- Rating: ${site.ratingValue} / 5 (${site.reviewCount}+ reviews)`);
  lines.push("");

  lines.push("## Core services");
  for (const s of services) {
    lines.push(`- [${s.shortName}](${base}/services/${s.slug}): ${s.quickAnswer}`);
  }
  lines.push("");

  lines.push("## Brands");
  for (const b of brands) {
    lines.push(`- [${b.name}](${base}/brands/${b.slug}): ${b.quickAnswer}`);
  }
  lines.push("");

  lines.push("## Areas served");
  for (const a of areas) {
    lines.push(`- [${a.name}](${base}/areas/${a.slug}): ${a.blurb} ${a.responseTime}.`);
  }
  lines.push("");

  lines.push("## Articles");
  for (const p of posts) {
    lines.push(`- [${p.title}](${base}/blog/${p.slug}): ${p.excerpt}`);
  }
  lines.push("");

  lines.push("## Frequently asked");
  lines.push("- How to get a quote: WhatsApp +62 818-0802-9595 with a photo of the room or unit and your area in Bali. Reply with a fixed-fee quote within 15 minutes.");
  lines.push("- Best AC brand for Bali: Gree for value, Daikin for premium / quietest.");
  lines.push("- AC cleaning frequency in Bali: every 3 months minimum, every 6–8 weeks for beachfront and short-stay villas.");
  lines.push("- AC sizing in Bali: ~600 BTU per m² for bedrooms, ~700 BTU per m² for living rooms with high ceilings or west-facing glass.");
  lines.push("- 1 PK ≈ 9,000 BTU; 1.5 PK ≈ 12,000 BTU; 2 PK ≈ 18,000 BTU; 2.5 PK ≈ 24,000 BTU.");

  return new NextResponse(lines.join("\n"), {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
