import Link from 'next/link';
import { notFound } from 'next/navigation';
import { directoryData } from '@/lib/site-data';

export default function BusinessDetailPage({ params }: { params: { slug: string } }) {
  const business = directoryData.find((item) => item.slug === params.slug);

  if (!business) {
    notFound();
  }

  return (
    <main className="page-shell">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-brand-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
              {business.category}
            </div>
            <h1 className="text-4xl font-black text-white">{business.name}</h1>
            <p className="mt-3 text-lg text-slate-300">{business.city} • {business.audience}</p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-300">
              {business.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-slate-700 px-3 py-1.5">
                  {tag}
                </span>
              ))}
            </div>
            <p className="mt-6 max-w-xl text-slate-400">{business.summary}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-400">
                Book now
              </button>
              <button className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-brand-500 hover:text-brand-100">
                Message business
              </button>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-slate-800 bg-slate-950/60 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-slate-400">Rating</span>
              <span className="text-lg font-bold text-amber-300">{business.rating}★</span>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Location</span>
                <span>{business.city}</span>
              </div>
              <div className="flex justify-between">
                <span>Hours</span>
                <span>{business.hours}</span>
              </div>
              <div className="flex justify-between">
                <span>Phone</span>
                <span>{business.phone}</span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/5 p-4 text-sm text-brand-100">
              This business profile is ready for listings, media, services, appointments, and promotional campaigns.
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-8 rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-soft">
        <h2 className="text-2xl font-black text-white">Featured media</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div key={item} className="aspect-video rounded-2xl border border-slate-700 bg-gradient-to-br from-brand-500/20 via-slate-800 to-slate-950 p-4">
              <div className="flex h-full items-center justify-center text-3xl text-brand-100">▶</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-between gap-4">
        <Link href="/businesses" className="text-sm font-semibold text-brand-300 hover:text-brand-100">
          ← Back to directory
        </Link>
      </div>
    </main>
  );
}
