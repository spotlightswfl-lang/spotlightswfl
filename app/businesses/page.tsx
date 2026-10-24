import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { directoryData } from '@/lib/site-data';

export default function BusinessesPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Business Directory"
        description="Browse local businesses, discover new offerings, and connect with trusted brands across Southwest Florida."
        action="Add business"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {directoryData.map((item) => (
          <article key={item.name} className="card overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-brand-500/20 via-slate-800 to-slate-950 p-5">
              <div className="flex h-full items-end justify-between">
                <span className="rounded-full bg-slate-950/60 px-2.5 py-1 text-xs text-slate-200">{item.category}</span>
                <span className="text-sm text-slate-300">{item.city}</span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-white">{item.name}</h2>
                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-semibold text-emerald-300">Featured</span>
              </div>
              <p className="mt-3 text-sm text-slate-400">Audience: {item.audience}</p>
              <div className="mt-5 flex items-center justify-between">
                <Link href="/businesses" className="text-sm font-semibold text-brand-300 hover:text-brand-100">View profile →</Link>
                <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200">Follow</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
