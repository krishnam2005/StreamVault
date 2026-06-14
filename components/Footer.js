import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <Logo compact className="text-white" />
          <div>
            <p className="text-sm font-semibold text-white">StreamVault</p>
            <p className="text-sm text-slate-400">Securely play YouTube, Vimeo, and MP4 videos.</p>
          </div>
        </div>
        <p className="text-sm text-slate-400">© StreamVault 2026. Built for universal video playback.</p>
      </div>
    </footer>
  );
}
