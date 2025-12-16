"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 z-50 w-full 
        bg-black/70 backdrop-blur-xl border-b border-white/10"
      >
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-lg font-bold">
            MathCode<span className="text-green-400">Academy</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 text-sm text-white/70">
            <Link href="/programmes">Programmes</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/contact">Contact</Link>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden md:inline-block rounded-full 
            bg-blue-600 px-5 py-2 text-sm font-medium"
          >
            Book Free Class
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl 
          flex flex-col items-center justify-center gap-8 text-lg"
        >
          <Link onClick={() => setOpen(false)} href="/programmes">
            Programmes
          </Link>
          <Link onClick={() => setOpen(false)} href="/testimonials">
            Testimonials
          </Link>
          <Link onClick={() => setOpen(false)} href="/contact">
            Contact
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="rounded-full bg-blue-600 px-8 py-3 text-sm"
          >
            Book Free Class
          </Link>
        </div>
      )}
    </>
  );
}
