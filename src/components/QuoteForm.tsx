"use client";
import { useState } from "react";
import { areas } from "@/data/areas";
import { services } from "@/data/services";

export default function QuoteForm({ defaultArea, defaultService }: { defaultArea?: string; defaultService?: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to send");
      const json = await res.json();
      if (json.whatsappLink && typeof window !== "undefined") {
        window.open(json.whatsappLink, "_blank", "noopener,noreferrer");
      }
      setStatus("ok");
      e.currentTarget.reset();
    } catch (err) {
      setStatus("error");
      setError("Could not send. Please WhatsApp us directly at +62 818-0802-9595.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-3 rounded-2xl border border-slate-100 bg-white p-6 shadow-card">
      <h3 className="h3">Get a free quote</h3>
      <p className="text-sm text-slate-600">We reply on WhatsApp within 15 minutes during daylight hours.</p>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Name</span>
        <input required name="name" className="rounded-lg border border-slate-200 px-3 py-2" placeholder="Your name" />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">WhatsApp / Phone</span>
        <input required name="phone" className="rounded-lg border border-slate-200 px-3 py-2" placeholder="+62 ..." />
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Area in Bali</span>
        <select name="area" defaultValue={defaultArea ?? ""} className="rounded-lg border border-slate-200 px-3 py-2">
          <option value="">Select area</option>
          {areas.map((a) => (
            <option key={a.slug} value={a.name}>{a.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Service</span>
        <select name="service" defaultValue={defaultService ?? ""} className="rounded-lg border border-slate-200 px-3 py-2">
          <option value="">Select service</option>
          {services.map((s) => (
            <option key={s.slug} value={s.shortName}>{s.shortName}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        <span className="font-medium">Message</span>
        <textarea name="message" rows={3} className="rounded-lg border border-slate-200 px-3 py-2" placeholder="Number of units, brand, what's happening..." />
      </label>
      <button type="submit" disabled={status === "sending"} className="btn-primary">
        {status === "sending" ? "Sending..." : "Send Quote Request"}
      </button>
      {status === "ok" ? <p className="text-sm text-emerald-600">Thanks — we&apos;ll reply on WhatsApp shortly.</p> : null}
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
    </form>
  );
}
