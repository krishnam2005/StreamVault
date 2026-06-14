export default function Features() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300">
              Core features
            </p>
            <h2 className="mt-4 text-4xl font-semibold text-white">
              Universal playback for every video source
            </h2>
          </div>
          <p className="max-w-xl text-slate-400">
            StreamVault supports YouTube, Vimeo, and direct MP4 playback with secure Google-authenticated access.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">▶</div>
            <h3 className="mt-5 text-xl font-semibold text-white">YouTube Support</h3>
            <p className="mt-3 text-slate-400">Play public YouTube videos instantly with the universal player.</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">V</div>
            <h3 className="mt-5 text-xl font-semibold text-white">Vimeo Support</h3>
            <p className="mt-3 text-slate-400">Seamless Vimeo playback within a beautiful dashboard experience.</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">MP4</div>
            <h3 className="mt-5 text-xl font-semibold text-white">Direct MP4 Playback</h3>
            <p className="mt-3 text-slate-400">Play hosted MP4 files directly without extra configuration.</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-400/10 text-slate-200">🔒</div>
            <h3 className="mt-5 text-xl font-semibold text-white">Secure Authentication</h3>
            <p className="mt-3 text-slate-400">Protected access through Google login keeps your player experience secure.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
