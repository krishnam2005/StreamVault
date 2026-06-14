export default function Pricing() {
  return (
    <section className="py-20">
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
          Plans for every team
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-white">Flexible pricing with premium value</h2>
        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Choose a plan that fits your needs and scale with confidence using StreamVault’s secure video platform.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Free</p>
          <p className="mt-6 text-5xl font-semibold text-white">$0</p>
          <p className="mt-4 text-slate-400">Start with basic playback and secure logins for small teams.</p>
        </div>
        <div className="rounded-[2rem] border border-sky-500/20 bg-slate-950/80 p-8 shadow-xl shadow-sky-500/20 transition hover:-translate-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-sky-300">Pro</p>
          <p className="mt-6 text-5xl font-semibold text-white">$19</p>
          <p className="mt-4 text-slate-400">Premium playback, analytics-ready layout, and secure team access.</p>
        </div>
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/75 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Enterprise</p>
          <p className="mt-6 text-5xl font-semibold text-white">Custom</p>
          <p className="mt-4 text-slate-400">Advanced security and onboarding for large organizations.</p>
        </div>
      </div>
    </section>
  );
}