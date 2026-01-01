"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
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
      <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-28 md:pt-32 pb-24 md:pb-32">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[140px]" />

        <section className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* HEADER */}
          <div className="mb-16 md:mb-24 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900">
              Our Programmes
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg text-slate-600">
              Structured learning paths across AP, Olympiads, US & UK curricula —
              designed for mastery and confidence.
            </p>
          </div>

          {/* CATEGORY SELECTOR */}
          <div className="mb-10 flex justify-center">
            <div className="flex gap-2 overflow-x-auto no-scrollbar rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-md">
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
                    className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                        : "text-slate-600 hover:bg-blue-50"
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* SUBJECT TABS */}
          <div className="mb-16 flex justify-center">
            <div className="flex gap-2 overflow-x-auto no-scrollbar rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-md">
              {subjects.map(s => {
                const active = subject === s;
                return (
                  <button
                    key={s}
                    onClick={() => setSubject(s)}
                    className={`whitespace-nowrap px-5 py-2 rounded-xl text-sm font-medium transition ${
                      active
                        ? "bg-blue-600 text-white shadow"
                        : "text-slate-600 hover:bg-blue-50"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          {/* PROGRAMME CARDS */}
          <div className="grid gap-8 md:gap-12 md:grid-cols-2">
            {programmes[category][subject]?.map((p, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 
                p-6 md:p-8 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-1 md:hover:-translate-y-2
                hover:shadow-[0_35px_90px_-20px_rgba(59,130,246,0.35)]"
              >
                {/* POPULAR BADGE */}
                {p.popular && (
                  <span className="absolute right-4 top-4 md:right-6 md:top-6 rounded-full 
                  bg-gradient-to-r from-blue-600 to-indigo-600 
                  px-3 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </span>
                )}

                {/* TITLE */}
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
                  {p.title}
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  {p.sessions} sessions • {p.duration}
                </p>

                {/* FEATURES */}
                <ul className="mt-5 space-y-3 text-sm text-slate-600">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {/* WhatsApp CTA */}
                  <a
                    href={`https://wa.me/919586753377?text=${encodeURIComponent(
                      `Hi Ashraf! I would like to enquire about the ${p.title} program.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto text-center rounded-full 
                    bg-gradient-to-r from-green-500 to-green-600 
                    px-6 py-3 text-sm font-semibold text-white shadow-lg 
                    hover:scale-[1.02] transition"
                  >
                    Book Free Trial
                  </a>

                  {/* Explore More */}
                  <a
                    href={`/programmes/${p.slug}`}
                    className="w-full sm:w-auto text-center rounded-full 
                    border border-slate-300 
                    px-6 py-3 text-sm font-semibold text-slate-700 
                    hover:border-blue-600 hover:text-blue-600 transition"
                  >
                    Explore More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
