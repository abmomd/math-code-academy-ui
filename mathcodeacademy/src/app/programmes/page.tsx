"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { programmes } from "@/data/programmes";
import { Subject } from "@/types/programme";

type Category = keyof typeof programmes;

export default function ProgrammesPage() {
  const categories = Object.keys(programmes) as Category[];
  const [category, setCategory] = useState<Category>(categories[0]);

  const subjects = Object.keys(programmes[category]) as Subject[];
  const [subject, setSubject] = useState<Subject>(subjects[0]);

  return (
    <>
      <Navbar />

      {/* PAGE BACKGROUND */}
      <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-32 pb-32">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[140px]" />

        <section className="relative mx-auto max-w-7xl px-6">
          {/* HEADER */}
          <div className="mb-24 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Our Programmes
            </h1>
            <p className="mt-5 max-w-2xl mx-auto text-lg text-slate-600">
              Structured learning paths across AP, Olympiads, US & UK curricula —
              designed for mastery and confidence.
            </p>
          </div>

          {/* CATEGORY SELECTOR */}
          <div className="mb-14 flex justify-center">
            <div className="flex gap-2 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
              {categories.map(cat => {
                const active = category === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => {
                      setCategory(cat);
                      setSubject(
                        Object.keys(programmes[cat])[0] as Subject
                      );
                    }}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md shadow-blue-500/30"
                        : "text-slate-600 hover:bg-blue-50 hover:text-slate-900"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SUBJECT TABS */}
          <div className="mb-24 flex justify-center">
            <div className="flex gap-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-md">
              {subjects.map(s => {
                const active = subject === s;
                return (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      active
                        ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
                        : "text-slate-600 hover:bg-blue-50 hover:text-slate-900"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROGRAMME CARDS */}
          <div className="grid gap-12 md:grid-cols-2">
            {programmes[category][subject]?.map((p, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-white/75 backdrop-blur-xl border border-slate-200 
                p-8 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-2
                hover:shadow-[0_35px_90px_-20px_rgba(59,130,246,0.45)]"
              >
                {/* POPULAR BADGE */}
                {p.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </span>
                )}

                {/* TITLE */}
                <h3 className="text-2xl font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {p.sessions} sessions • {p.duration}
                </p>

                {/* FEATURES */}
                <ul className="mt-6 space-y-3 text-sm text-slate-600">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* FOOTER */}
                <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                  <div>
                    <p className="text-xs text-slate-500">Programme Fee</p>
                    <span className="text-3xl font-bold text-slate-900">
                      ₹{p.price}
                    </span>
                  </div>

                  <button className="rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.03] transition">
                    Book Free Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
