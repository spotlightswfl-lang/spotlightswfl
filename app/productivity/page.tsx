import { PageHeader } from '@/components/page-header';
import { productivityApps } from '@/lib/site-data';

export default function ProductivityPage() {
  return (
    <main className="page-shell">
      <PageHeader
        title="Productivity Tools"
        description="Empower businesses with scheduling, planning, task tracking, and local marketing utilities."
        action="Create workflow"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {productivityApps.map((app) => (
          <article key={app.name} className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-xl text-emerald-100">
              ⚙️
            </div>
            <h2 className="text-xl font-bold text-white">{app.name}</h2>
            <p className="mt-3 text-sm text-slate-400">{app.description}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
