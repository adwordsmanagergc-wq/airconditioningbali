export default function QuickAnswer({ children }: { children: React.ReactNode }) {
  return (
    <div className="reveal relative overflow-hidden rounded-surface bg-white p-6 shadow-soft sm:p-7">
      <span aria-hidden className="absolute inset-y-0 left-0 w-1 bg-brand" />
      <p className="text-sm font-medium text-brand">Quick answer</p>
      <p className="mt-2 text-[1.0625rem] leading-relaxed text-black/80">{children}</p>
    </div>
  );
}
