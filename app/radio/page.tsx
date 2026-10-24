import { PageHeader } from '@/components/page-header';
import { radioStations } from '@/lib/site-data';

export default function RadioPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Streaming Radio"
        description="Broadcast live local content, sponsor spots, interviews, artist showcases and community updates."
        action="Go live"
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {radioStations.map((station) => (
          <article key={station.name} className="card p-6">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-700 text-xl font-black text-white">
                {station.name.slice(0, 1)}
              </div>
              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
                Live
              </span>
            </div>
            <h2 className="text-2xl font-black text-white">{station.name}</h2>
            <p className="mt-3 text-slate-400">{station.description}</p>
            <p className="mt-4 text-sm text-brand-200">{station.listeners}</p>
            <button className="mt-6 rounded-full bg-brand-500 px-4 py-2.5 font-semibold text-white hover:bg-brand-400">
              Listen now
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
