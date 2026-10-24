import { PageHeader } from '@/components/page-header';
import { socialFeatures, socialIntegrations } from '@/lib/site-data';

export default function SocialPage() {
  return (
    <main className="page-shell">
      <PageHeader
        title="Social Media Integrations"
        description="Connect your business to the channels your audience uses every day, with local campaigns and cross-platform publishing."
        action="Add channel"
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {socialFeatures.map((feature) => (
          <div key={feature.label} className="card p-5">
            <div className="text-sm text-slate-400">{feature.label}</div>
            <div className="mt-3 text-3xl font-black text-white">{feature.value}</div>
          </div>
        ))}
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-2">
        {socialIntegrations.map((integration) => (
          <article key={integration.name} className="card p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white">{integration.name}</h2>
              <span className="rounded-full bg-brand-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
                {integration.status}
              </span>
            </div>
            <p className="mt-3 text-sm text-slate-400">{integration.detail}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
