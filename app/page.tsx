import { benefits, dealHighlights, featuredBusinesses, stats } from '@/lib/site-data';

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex items-center rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-100">
              Spotlight SWFL • Business + community platform
            </div>
            <h1 className="max-w-xl text-5xl font-black tracking-tight text-white md:text-6xl">
              Discover the best local businesses, events, deals and creators in Southwest Florida.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-300">
              A place for business discovery, video storytelling, local marketplace activity, promotions,
              community messaging, and digital growth for entrepreneurs and companies across the region.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="/businesses" className="rounded-full bg-brand-500 px-6 py-3 font-semibold text-white transition hover:bg-brand-400">
                Explore businesses
              </a>
              <a href="/marketplace" className="rounded-full border border-slate-700 bg-slate-900/70 px-6 py-3 font-semibold text-slate-100 transition hover:border-brand-500 hover:text-brand-100">
                Browse marketplace
              </a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-lg">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-5 shadow-soft">
            <div className="rounded-2xl bg-gradient-to-br from-brand-500/25 via-slate-900 to-slate-950 p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-brand-500/20 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-100">
                  Featured video
                </span>
                <span className="text-xs text-slate-400">Live now</span>
              </div>
              <div className="aspect-video overflow-hidden rounded-2xl border border-slate-700 bg-slate-800">
                <div className="flex h-full items-center justify-center bg-[radial-gradient(circle,_rgba(90,167,255,0.2),_rgba(15,23,42,0.8))]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-brand-200 bg-brand-500/20 text-2xl shadow-lg shadow-brand-500/20">
                    ▶
                  </div>
                </div>
              </div>
              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-400">Featured listing</p>
                  <h3 className="text-xl font-bold text-white">Harbor & Co. Restaurant</h3>
                </div>
                <button className="rounded-full border border-slate-700 px-3 py-1.5 text-sm text-slate-200 hover:border-brand-500 hover:text-brand-100">
                  Watch now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Featured businesses</p>
            <h2 className="mt-2 text-3xl font-black text-white">Trending across Southwest Florida</h2>
          </div>
          <a href="/businesses" className="text-sm font-semibold text-brand-300 hover:text-brand-100">View all →</a>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {featuredBusinesses.map((business) => (
            <article key={business.name} className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-soft">
              <div className="h-40 bg-gradient-to-br from-brand-400/30 via-slate-800 to-slate-950 p-5">
                <div className="flex h-full items-end justify-between">
                  <span className="rounded-full bg-slate-950/60 px-2.5 py-1 text-xs font-medium text-slate-200">{business.category}</span>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs font-medium text-emerald-300">{business.rating}★</span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-bold text-white">{business.name}</h3>
                  <span className="text-sm text-slate-400">{business.city}</span>
                </div>
                <p className="mt-2 text-sm text-slate-400">{business.description}</p>
                <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
                  <span>{business.followers} followers</span>
                  <span>{business.videos} videos</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Everything your local economy needs</p>
          <h2 className="mt-2 text-3xl font-black text-white">A complete local growth platform</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-xl text-brand-100">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm text-slate-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-300">Today’s deals</p>
              <h2 className="mt-2 text-3xl font-black text-white">Local coupons, QR deals, and exclusive offers</h2>
              <div className="mt-6 space-y-4">
                {dealHighlights.map((deal) => (
                  <div key={deal.name} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                    <div>
                      <h3 className="font-bold text-white">{deal.name}</h3>
                      <p className="text-sm text-slate-400">{deal.offer}</p>
                    </div>
                    <span className="rounded-full bg-amber-500/10 px-3 py-1 text-sm font-semibold text-amber-300">{deal.badge}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-500/20 bg-gradient-to-br from-brand-500/10 via-slate-900 to-slate-950 p-8">
              <p className="text-sm uppercase tracking-[0.2em] text-brand-200">Digital growth</p>
              <h3 className="mt-4 text-2xl font-bold text-white">Turn views into bookings, sales and community trust.</h3>
              <ul className="mt-6 space-y-3 text-slate-300">
                <li>• Social media and review integrations</li>
                <li>• Google Business profile sync</li>
                <li>• Event ticketing and promotions</li>
                <li>• Messaging boards and local discussions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
