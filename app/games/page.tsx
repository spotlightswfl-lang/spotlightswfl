import { PageHeader } from '@/components/page-header';
import { gameHighlights } from '@/lib/site-data';

export default function GamesPage() {
  return (
    <main className="page-shell">
      <PageHeader
        title="Games & Engagement"
        description="Keep users active with local trivia, deal hunts, and social game loops that drive repeat visits and loyalty."
        action="Launch challenge"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {gameHighlights.map((game) => (
          <article key={game.name} className="card p-6">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500/15 text-xl text-brand-100">
              🎮
            </div>
            <h2 className="text-2xl font-black text-white">{game.name}</h2>
            <p className="mt-3 text-sm text-slate-400">{game.format}</p>
            <div className="mt-6 rounded-2xl border border-dashed border-slate-700 bg-slate-950/60 p-3 text-center text-sm text-brand-100">
              Reward: {game.reward}
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
