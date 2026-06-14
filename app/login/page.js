"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(180deg,#050816_0%,#020617_100%)] text-white flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-black/40 backdrop-blur-md">
        <div className="mb-8">
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300">Welcome back</p>
          <h1 className="mt-4 text-4xl font-semibold text-white">Login to StreamVault</h1>
          <p className="mt-4 text-slate-400">Continue with Google to access your secure video dashboard.</p>
        </div>

        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "/dashboard",
            })
          }
          className="w-full rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/20 transition hover:brightness-110"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}