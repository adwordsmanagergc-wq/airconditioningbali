import { ShieldCheck, Wrench, Clock, Award } from "lucide-react";
import { site } from "@/lib/site";

export default function TrustStrip() {
  return (
    <section aria-label="Trust signals" className="border-y border-slate-100 bg-white">
      <div className="container-prose grid grid-cols-2 gap-6 py-8 sm:grid-cols-4">
        <Item icon={<ShieldCheck size={22} aria-hidden />} title="Authorised installer" sub="6 major brands" />
        <Item icon={<Award size={22} aria-hidden />} title="Manufacturer warranty" sub="Registered to you" />
        <Item icon={<Wrench size={22} aria-hidden />} title={site.installs} sub="Jobs completed" />
        <Item icon={<Clock size={22} aria-hidden />} title="24/7" sub="Emergency response" />
      </div>
    </section>
  );
}

function Item({ icon, title, sub }: { icon: React.ReactNode; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-full bg-brand/10 text-brand">{icon}</div>
      <div>
        <p className="text-sm font-bold leading-tight">{title}</p>
        <p className="text-xs text-slate-500">{sub}</p>
      </div>
    </div>
  );
}
