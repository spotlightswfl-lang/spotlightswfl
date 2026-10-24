import { PageHeader } from '@/components/page-header';
import { ticketEvents } from '@/lib/site-data';

export default function TicketsPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Ticket Sales"
        description="Sell access to events, classes, experiences and premium local happenings with streamlined ticketing."
        action="Create event"
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {ticketEvents.map((event) => (
          <article key={event.title} className="card p-6">
            <div className="mb-3 flex items-center justify-between">
              <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-violet-300">
                {event.type}
              </span>
              <span className="text-sm text-slate-400">{event.date}</span>
            </div>
            <h2 className="text-2xl font-black text-white">{event.title}</h2>
            <p className="mt-3 text-sm text-slate-400">{event.seats}</p>
            <button className="mt-6 w-full rounded-full bg-brand-500 px-4 py-2.5 font-semibold text-white hover:bg-brand-400">
              Buy tickets
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
