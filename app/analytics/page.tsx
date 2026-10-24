import { platformFeatures } from '@/lib/site-data';
import { PageHeader } from '@/components/page-header';

export default function AnalyticsPage() {
  return (
    <main className="page-shell">
      <PageHeader
        title="Analytics Center"
        description="Track engagement, revenue, conversions, customer sentiment, and business performance from one live dashboard."
        action="Generate report"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          { label: 'Engagement rate', value: '72%' },
          { label: 'Local leads', value: '1,284' },
          { label: 'Coupon scans', value: '9,540' },
          { label: 'Ticket conversion', value: '18.4%' },
        ].map((metric) => (
          <div key={metric.label} className="card p-6">
            <p className="text-sm text-slate-400">{metric.label}</p>
            <div className="mt-3 text-3xl font-black text-white">{metric.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h2 className="text-xl font-bold text-white">Platform performance</h2>
          <div className="mt-6 space-y-4">
            {platformFeatures.slice(0, 4).map((feature) => (
              <div key={feature.title} className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div>
                  <div className="text-lg font-bold text-white">{feature.title}</div>
                  <div className="text-sm text-slate-400">{feature.description}</div>
                </div>
                <span className="text-2xl">{feature.icon}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card p-6">
          <h2 className="text-xl font-bold text-white">Business insights</h2>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li>• 26% increase in lead capture from social-driven listings</li>
            <li>• 14% uplift in coupon redemption among local mobile users</li>
            <li>• Peak traffic on weekends from premium business pages</li>
            <li>• Strongest conversions from Google Business profile integrations</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
