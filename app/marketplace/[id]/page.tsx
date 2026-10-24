import Link from 'next/link';
import { notFound } from 'next/navigation';

const items = [
  { id: 'vintage-boat-accessories', title: 'Vintage Boat Accessories', price: '$240', city: 'Cape Coral' },
  { id: 'used-desk-setup', title: 'Used Desk Setup', price: '$320', city: 'Fort Myers' },
  { id: 'golf-cart-charger', title: 'Golf Cart Charger', price: '$95', city: 'Naples' },
];

export default function MarketplaceDetailPage({ params }: { params: { id: string } }) {
  const item = items.find((entry) => entry.id === params.id);

  if (!item) {
    notFound();
  }

  return (
    <main className="page-shell">
      <div className="rounded-[2rem] border border-slate-800 bg-slate-900/70 p-8 shadow-soft">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Marketplace
            </div>
            <h1 className="text-4xl font-black text-white">{item.title}</h1>
            <div className="mt-4 text-3xl font-black text-brand-200">{item.price}</div>
            <p className="mt-4 max-w-xl text-slate-400">
              Browse a local classified listing with direct buyer communication, secure pickup coordination, and community trust safeguards.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-400">
                Message seller
              </button>
              <button className="rounded-full border border-slate-700 px-5 py-3 font-semibold text-slate-200 hover:border-brand-500 hover:text-brand-100">
                Save item
              </button>
            </div>
          </div>

          <aside className="rounded-[1.5rem] border border-slate-800 bg-slate-950/60 p-5">
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex justify-between">
                <span>Location</span>
                <span>{item.city}</span>
              </div>
              <div className="flex justify-between">
                <span>Condition</span>
                <span>Used</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery</span>
                <span>Pickup</span>
              </div>
            </div>
            <div className="mt-6 rounded-2xl border border-brand-500/20 bg-brand-500/5 p-4 text-sm text-brand-100">
              Verified local listing, ideal for trusted neighborhood buying and selling.
            </div>
          </aside>
        </div>
      </div>

      <div className="mt-8 flex justify-between gap-4">
        <Link href="/marketplace" className="text-sm font-semibold text-brand-300 hover:text-brand-100">
          ← Back to marketplace
        </Link>
      </div>
    </main>
  );
}
