import { PageHeader } from '@/components/page-header';
import { couponOffers } from '@/lib/site-data';

export default function CouponsPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Coupons & Deals"
        description="Boost local spending with exclusive offers, QR-powered promos and customer loyalty campaigns."
        action="Create promo"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {couponOffers.map((coupon) => (
          <article key={coupon.title} className="card p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-amber-300">
                Coupon
              </span>
              <span className="text-sm text-slate-400">{coupon.vendor}</span>
            </div>
            <h2 className="text-2xl font-black text-white">{coupon.discount}</h2>
            <p className="mt-2 text-sm text-slate-300">{coupon.title}</p>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/50 p-3 text-center font-mono text-lg text-brand-100">
              {coupon.code}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
