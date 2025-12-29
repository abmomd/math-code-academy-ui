"use client";

import Link from "next/link";
import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* MAIN GRID */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* ================= LEFT: BRAND ================= */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              MathCode<span className="text-blue-600">Academy</span>
            </h2>

            <p className="mt-4 max-w-md text-slate-600 text-sm leading-relaxed">
              Personalised math, physics, and coding mentorship for school
              students across global curricula.
            </p>

            <p className="mt-6 text-xs text-slate-400">
              © {new Date().getFullYear()} MathCode Academy. All rights reserved.
            </p>
          </div>

          {/* ================= RIGHT: LINKS + CONTACT ================= */}
          <div className="grid gap-10 sm:grid-cols-2">

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Quick Links
              </h3>

              <ul className="space-y-3 text-sm text-slate-600">
                <li>
                  <Link href="/programmes" className="hover:text-blue-600">
                    Programmes
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="hover:text-blue-600">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-600">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* CONTACT + SOCIAL */}
            <div>
              <h3 className="text-sm font-semibold text-slate-900 mb-4">
                Contact
              </h3>

              <div className="space-y-3 text-sm text-slate-600">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-600" />
                  <span>ashrafbhura8@gmail.com</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={16} className="text-blue-600" />
                  <span>Bangalore, India</span>
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="mt-6 flex gap-4">
                <a
                  href="#"
                  aria-label="Facebook"
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  <Facebook size={20} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  <Youtube size={20} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  <Linkedin size={20} />
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="text-slate-500 hover:text-blue-600 transition"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
