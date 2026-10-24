export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950/80">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="mb-3 text-xl font-black text-white">Spotlight SWFL</div>
          <p className="text-sm text-slate-400">
            Local discovery, creator storytelling, and digital commerce for Southwest Florida businesses.
          </p>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Platform</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Business directory</li>
            <li>Marketplace</li>
            <li>Coupons & deals</li>
            <li>Ticket sales</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Community</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Message boards</li>
            <li>Streaming radio</li>
            <li>Analytics</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Business tools</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>Admin tools</li>
            <li>Google integration</li>
            <li>Social automation</li>
            <li>Customer engagement</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-500">
        © 2026 Spotlight SWFL. Built for local growth.
      </div>
    </footer>
  );
}
