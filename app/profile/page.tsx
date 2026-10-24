import Link from 'next/link';
import { PageHeader } from '@/components/page-header';

const recentActivity = [
  { title: 'New business profile added', detail: 'Harbor & Co. updated their video gallery', time: '2h ago' },
  { title: 'Marketplace listing flagged', detail: '3 items need moderation review', time: '4h ago' },
  { title: 'New coupon redeemed', detail: 'Luna Wellness — LUNA25 used by 18 customers', time: '1d ago' },
];

export default function ProfilePage() {
  return (
    <main className="page-shell">
      <PageHeader
        title="Business Profile"
        description="Manage your listing, customer reviews, media, deals, and store profile from one location."
        action="Edit profile"
      />

      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="card p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-xl font-black text-white">
              H
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Harbor & Co.</h2>
              <p className="text-sm text-slate-400">Restaurant • Fort Myers</p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Followers', value: '1.2k' },
              { label: 'Reviews', value: '482' },
              { label: 'Conversion', value: '7.6%' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <p className="text-sm text-slate-400">{stat.label}</p>
                <div className="mt-2 text-2xl font-black text-white">{stat.value}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold text-white">Business overview</h3>
            <p className="mt-3 text-slate-400">
              Coastal dining, chef showcases, and community gatherings with premium local experiences and a growing social audience.
            </p>
          </div>
        </div>

        <div className="card p-6">
          <h3 className="text-lg font-bold text-white">Recent activity</h3>
          <div className="mt-5 space-y-4">
            {recentActivity.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="font-semibold text-white">{item.title}</div>
                <div className="mt-1 text-sm text-slate-400">{item.detail}</div>
                <div className="mt-2 text-xs uppercase tracking-[0.18em] text-brand-200">{item.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/dashboard" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-brand-100">
          View dashboard
        </Link>
        <Link href="/coupons" className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-brand-100">
          Manage deals
        </Link>
      </div>
    </main>
  );
}
