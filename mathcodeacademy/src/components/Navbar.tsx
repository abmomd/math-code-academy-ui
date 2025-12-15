"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="text-xl font-semibold tracking-wide">
          MathCode<span className="text-blue-500">Academy</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link href="/programmes" className="hover:text-blue-400">
            Programmes
          </Link>
          <Link href="/testimonials" className="hover:text-blue-400">
            Testimonials
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium hover:bg-blue-500 transition"
        >
          Book Free Class
        </Link>
      </div>
    </header>
  );
}
