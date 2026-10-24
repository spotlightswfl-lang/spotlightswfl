import { PageHeader } from '@/components/page-header';
import { messageGroups } from '@/lib/site-data';

export default function MessagesPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Messages & Boards"
        description="Create discussion threads, neighborhood conversations and direct messaging between buyers, sellers and community members."
        action="Start topic"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {messageGroups.map((group) => (
          <article key={group.title} className="card p-6">
            <h2 className="text-xl font-bold text-white">{group.title}</h2>
            <p className="mt-3 text-sm text-slate-400">{group.posts}</p>
            <button className="mt-6 rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 hover:border-brand-500 hover:text-brand-100">
              Join discussion
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
