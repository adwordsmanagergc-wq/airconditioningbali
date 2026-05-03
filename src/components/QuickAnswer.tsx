export default function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border-l-4 border-brand bg-brand/5 p-5">
      <p className="text-xs font-bold uppercase tracking-wider text-brand">Quick Answer</p>
      <p className="mt-2 text-base leading-relaxed text-slate-800">{children}</p>
    </div>
  );
}
