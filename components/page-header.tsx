type PageHeaderProps = {
  title: string;
  description: string;
  action?: string;
};

export function PageHeader({ title, description, action }: PageHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-800 bg-slate-900/60 p-8 shadow-soft md:flex-row md:items-end md:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brand-300">Spotlight SWFL</p>
        <h1 className="mt-3 text-4xl font-black text-white">{title}</h1>
      </div>
      <p className="max-w-xl text-sm text-slate-300">{description}</p>
      {action ? (
        <button className="rounded-full bg-brand-500 px-5 py-2.5 font-semibold text-white hover:bg-brand-400">
          {action}
        </button>
      ) : null}
    </div>
  );
}
