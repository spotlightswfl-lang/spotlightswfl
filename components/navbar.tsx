import Link from 'next/link';

const navItems = [
  { label: 'Businesses', href: '/businesses' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Coupons', href: '/coupons' },
  { label: 'Tickets', href: '/tickets' },
  { label: 'Messages', href: '/messages' },
  { label: 'Radio', href: '/radio' },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 font-black text-white">
            S
          </div>
          <div>
            <div className="text-lg font-black tracking-tight text-white">Spotlight SWFL</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Local business media</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 md:inline-flex hover:border-brand-500 hover:text-brand-100">
            Dashboard
          </Link>
          <Link href="/login" className="rounded-full bg-brand-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-400">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
