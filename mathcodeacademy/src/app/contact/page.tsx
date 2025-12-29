"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-6 py-28 bg-white">
        {/* Background Accent */}
        <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-100 blur-[140px]" />

        {/* Header */}
        <div className="mb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Let’s Talk
          </h1>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Have questions about programmes, exams, or personalised mentoring?
            Reach out — we usually respond within 24 hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-10 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900">
                Why MathCode Academy?
              </h2>

              <ul className="mt-6 space-y-4 text-slate-600 text-sm">
                <li>✔ Personalised 1-on-1 & small group mentoring</li>
                <li>✔ AP, Olympiad, US & UK curriculum expertise</li>
                <li>✔ Concept → mastery focused teaching</li>
                <li>✔ Trusted by parents across multiple countries</li>
              </ul>
            </div>

            <div className="mt-12 space-y-6 text-sm text-slate-700">
              <div className="flex items-center gap-4">
                <Mail className="text-blue-600" size={18} />
                <span>ashrafbhura8@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-blue-600" size={18} />
                <span>+91 9586753377</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-blue-600" size={18} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-10">
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Book a Free Consultation
            </h2>

            <form className="space-y-5">
              {[
                { label: "Name", placeholder: "Parent / Student Name" },
                { label: "Email", placeholder: "you@example.com" },
                { label: "Class / Exam", placeholder: "AP Calculus, Olympiad, Grade 9 Math..." },
              ].map((field, i) => (
                <div key={i}>
                  <label className="block text-sm text-slate-600 mb-1">
                    {field.label}
                  </label>
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm text-slate-600 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us what you’re looking for..."
                  className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-sm outline-none resize-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="mt-4 w-full rounded-full bg-blue-600 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
              >
                Request Free Class
              </button>
            </form>

            <p className="mt-6 text-xs text-slate-500 text-center">
              No spam. We only contact you regarding your enquiry.
            </p>
          </div>
        </div>
      </section>


    </>
  );
}
