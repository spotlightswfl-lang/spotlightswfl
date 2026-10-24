import Link from 'next/link';
import { PageHeader } from '@/components/page-header';
import { marketplaceItems } from '@/lib/site-data';

export default function MarketplacePage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Marketplace"
        description="Buy, sell and discover local items, services and opportunities in a community-driven marketplace."
        action="Post listing"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {marketplaceItems.map((item) => (
          <article key={item.title} className="card overflow-hidden">
            <div className="h-40 bg-gradient-to-br from-cyan-500/20 via-slate-800 to-slate-950 p-5">
              <div className="flex h-full items-end justify-between">
                <span className="rounded-full bg-slate-950/60 px-2.5 py-1 text-xs text-slate-200">{item.category}</span>
                <span className="text-lg font-black text-white">{item.price}</span>
              </div>
            </div>
            <div className="p-5">
              <h2 className="text-lg font-bold text-white">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{item.city}</p>
              <div className="mt-5 flex items-center justify-between">
                <Link href="/marketplace" className="text-sm font-semibold text-brand-300 hover:text-brand-100">View item</Link>
                <button className="rounded-full bg-brand-500 px-3 py-1.5 text-sm font-medium text-white">Message seller</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
