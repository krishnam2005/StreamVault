"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Logo from "./Logo";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-4 transition hover:opacity-90">
          <Logo className="text-white" />
        </Link>

        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-300">
          <Link href="/" className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white">
            Home
          </Link>
          <Link href="/dashboard" className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white">
            Dashboard
          </Link>
          {session ? (
            <button
              onClick={() =>
                signOut({
                  callbackUrl: "/",
                })
              }
              className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110"
            >
              Logout
            </button>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-2 font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:brightness-110"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}