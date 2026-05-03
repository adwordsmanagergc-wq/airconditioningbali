import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-prose text-center">
        <p className="text-sm font-bold uppercase tracking-wider text-brand">404</p>
        <h1 className="mt-2 h1">Page not found</h1>
        <p className="mt-3 text-slate-700">The page you&rsquo;re looking for doesn&rsquo;t exist. Try one of these instead.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">Home</Link>
          <Link href="/services" className="btn-outline">Services</Link>
          <Link href="/areas" className="btn-outline">Areas</Link>
          <Link href="/contact" className="btn-outline">Contact</Link>
        </div>
      </div>
    </section>
  );
}
