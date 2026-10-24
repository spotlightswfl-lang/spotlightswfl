import Link from 'next/link';
import { PageHeader } from '@/components/page-header';

export default function LoginPage() {
  return (
    <div className="page-shell">
      <PageHeader
        title="User Login"
        description="Sign in to manage your business profile, save favorites, participate in community conversations and grow your digital presence."
      />

      <div className="mx-auto max-w-xl card p-8">
        <div className="grid gap-4">
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Email address" />
          <input className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500" placeholder="Password" type="password" />
          <button className="rounded-full bg-brand-500 px-4 py-3 font-semibold text-white hover:bg-brand-400">Sign in</button>
          <div className="text-center text-sm text-slate-400">Or continue with</div>
          <div className="flex gap-3">
            <button className="flex-1 rounded-full border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200">Google</button>
            <button className="flex-1 rounded-full border border-slate-700 px-4 py-2.5 text-sm font-medium text-slate-200">Facebook</button>
          </div>
          <div className="pt-2 text-center text-sm text-slate-400">
            Need an account? <Link href="/admin" className="text-brand-300">Switch to admin</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
