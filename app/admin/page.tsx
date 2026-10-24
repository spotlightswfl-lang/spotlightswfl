import Link from 'next/link';
import { PageHeader } from '@/components/page-header';

export default function AdminPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="Administrator Login"
        description="Manage listings, platform content, marketplace listings, coupons, users, analytics and communication tools."
      />

      <div className="mx-auto max-w-xl card p-8">
        <div className="grid gap-4">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Admin email" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Password" type="password" />
          <button className="rounded-full bg-brand-500 px-4 py-3 font-semibold text-white hover:bg-brand-400">Admin sign in</button>
          <div className="text-center text-sm text-slate-400">
            <Link href="/login" className="text-brand-300">Return to user login</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
