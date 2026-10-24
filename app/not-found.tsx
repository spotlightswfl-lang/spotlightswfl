import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="page-shell">
      <div className="mx-auto max-w-xl rounded-[2rem] border border-slate-800 bg-slate-900/70 p-10 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-300">404</p>
        <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
        <p className="mt-4 text-slate-400">
          The page you requested could not be found, or it has not been built yet.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-brand-500 px-5 py-3 font-semibold text-white hover:bg-brand-400"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
