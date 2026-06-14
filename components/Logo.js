export default function Logo({ compact = false, className = "" }) {
  return (
    <div className={`group inline-flex items-center gap-3 ${className}`}>
      <div className="relative flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-900/90 ring-1 ring-white/10 shadow-lg shadow-sky-500/10 transition duration-300 group-hover:-translate-y-0.5">
        <svg viewBox="0 0 64 64" className="h-9 w-9 text-slate-100" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="logoGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#6366F1" />
            </linearGradient>
          </defs>
          <path d="M20 20 C16 24 16 32 20 36 L32 48 L44 36 C48 32 48 24 44 20 L32 8 Z" fill="url(#logoGradient)" />
          <path d="M26 24 L26 40 L38 32 Z" fill="white" opacity="0.96" />
          <circle cx="32" cy="32" r="30" stroke="rgba(255,255,255,0.08)" strokeWidth="4" />
        </svg>
      </div>

      {!compact ? (
        <div className="flex flex-col leading-tight">
          <span className="text-lg font-semibold text-white tracking-tight">
            StreamVault
          </span>
          <span className="text-sm text-slate-400">
            Universal Video Player
          </span>
        </div>
      ) : null}
    </div>
  );
}
