export default function Stats() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 md:grid-cols-3 lg:p-10">
          <div className="rounded-3xl bg-slate-900/70 p-8 text-center shadow-xl shadow-black/20">
            <p className="text-5xl font-semibold text-white">10K+</p>
            <p className="mt-3 text-slate-400">Hours Streamed</p>
          </div>
          <div className="rounded-3xl bg-slate-900/70 p-8 text-center shadow-xl shadow-black/20">
            <p className="text-5xl font-semibold text-white">5K+</p>
            <p className="mt-3 text-slate-400">Users</p>
          </div>
          <div className="rounded-3xl bg-slate-900/70 p-8 text-center shadow-xl shadow-black/20">
            <p className="text-5xl font-semibold text-white">99.9%</p>
            <p className="mt-3 text-slate-400">Availability</p>
          </div>
        </div>
      </div>
    </section>
  );
}