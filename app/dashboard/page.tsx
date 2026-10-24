import Link from 'next/link';
import { PageHeader } from '@/components/page-header';

export default function DashboardPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Business Dashboard"
        description="Monitor leads, customer engagement, revenue, deals and promotions from one centralized control center."
        action="New report"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {[
          { label: 'Monthly leads', value: '1,284', tone: 'text-brand-200' },
          { label: 'Marketplace sales', value: '$18.4k', tone: 'text-emerald-300' },
          { label: 'Tickets sold', value: '932', tone: 'text-violet-300' },
        ].map((metric) => (
          <div key={metric.label} className="card p-6">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <div className={`mt-4 text-4xl font-black ${metric.tone}`}>{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-white">Recent activity</h2>
          <ul className="mt-5 space-y-3 text-sm text-slate-300">
            <li>• 18 new listing followers this week</li>
            <li>• 5 coupon redemptions in the last 24 hours</li>
            <li>• 12 marketplace inquiries from local buyers</li>
            <li>• Google Business listing updated successfully</li>
          </ul>
        </div>
        <div className="card p-6">
          <h2 className="text-xl font-bold text-white">Quick actions</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/coupons" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Create deal</Link>
            <Link href="/tickets" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Publish event</Link>
            <Link href="/messages" className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200">Manage replies</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
