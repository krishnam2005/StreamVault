import Link from "next/link";
import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.24),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm text-sky-300 shadow-sm shadow-sky-500/5">
              <span className="h-2.5 w-2.5 rounded-full bg-sky-400" />
              Universal Video Player
            </div>
            <div className="space-y-6">
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Play Any Video URL Instantly
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-400">
                Paste a YouTube, Vimeo, or MP4 link and stream immediately with secure Google authentication.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:brightness-110"
              >
                Get Started
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-900/90 px-8 py-4 text-base font-semibold text-slate-100 transition hover:border-slate-500 hover:text-white"
              >
                Open Dashboard
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
            <div className="mb-6 flex items-center justify-between gap-4 rounded-3xl bg-slate-900/80 p-4">
              <Logo compact className="text-white" />
              <span className="rounded-full bg-slate-800/80 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-300">
                Live preview
              </span>
            </div>
            <div className="space-y-5">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Paste a URL</span>
                <div className="mt-4 flex items-center gap-3 rounded-3xl border border-slate-800 bg-slate-950 px-4 py-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300">URL</span>
                  <div className="min-w-0 flex-1 text-sm text-slate-300">https://youtube.com/watch?v=...</div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-5">
                <div className="aspect-video overflow-hidden rounded-3xl bg-slate-950">
                  <div className="flex h-full items-center justify-center text-slate-500">Video player preview</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
