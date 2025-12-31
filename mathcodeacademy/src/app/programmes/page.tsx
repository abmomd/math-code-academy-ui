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
      <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-28 sm:pt-32 pb-32">
        {/* Soft gradient blobs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[140px]" />

        <section className="relative mx-auto max-w-7xl px-4 sm:px-6">
          {/* HEADER */}
          <div className="mb-16 sm:mb-24 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-slate-900">
              Our Programmes
            </h1>
            <p className="mt-4 sm:mt-5 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
              Structured learning paths across AP, Olympiads, US & UK curricula —
              designed for mastery and confidence.
            </p>
          </div>

          {/* CATEGORY SELECTOR (SCROLLABLE ON MOBILE) */}
          <div className="mb-10 sm:mb-14">
            <div className="mx-auto max-w-full overflow-x-auto no-scrollbar">
              <div className="flex w-max gap-2 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-[0_10px_30px_rgba(0,0,0,0.08)] mx-auto">
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
                      className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md"
                          : "text-slate-600 hover:bg-blue-50"
                      }`}
                    >
                      {cat}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* SUBJECT TABS */}
          <div className="mb-14 sm:mb-24">
            <div className="mx-auto max-w-full overflow-x-auto no-scrollbar">
              <div className="flex w-max gap-2 rounded-2xl bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-md mx-auto">
                {subjects.map(s => {
                  const active = subject === s;
                  return (
                    <button
                      key={s}
                      onClick={() => setSubject(s)}
                      className={`px-4 sm:px-5 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                        active
                          ? "bg-blue-600 text-white shadow-sm"
                          : "text-slate-600 hover:bg-blue-50"
                      }`}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* PROGRAMME CARDS */}
          <div className="grid gap-8 sm:gap-12 md:grid-cols-2">
            {programmes[category][subject]?.map((p, i) => (
              <div
                key={i}
                className="relative rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200 
                p-6 sm:p-8 shadow-[0_25px_70px_-20px_rgba(0,0,0,0.18)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_35px_90px_-20px_rgba(59,130,246,0.45)]"
              >
                {/* POPULAR BADGE */}
                {p.popular && (
                  <span className="absolute right-4 top-4 sm:right-6 sm:top-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-semibold text-white shadow">
                    Most Popular
                  </span>
                )}

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                  {p.title}
                </h3>
                <p className="mt-1 text-sm text-slate-500">
                  {p.sessions} sessions • {p.duration}
                </p>

                {/* FEATURES */}
                <ul className="mt-5 sm:mt-6 space-y-2.5 text-sm text-slate-600">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-blue-600 font-bold">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* FOOTER */}
                <div className="mt-8 sm:mt-10 flex flex-col gap-4">
                  <div>
                    <p className="text-xs text-slate-500">Programme Fee</p>
                    <span className="text-2xl sm:text-3xl font-bold text-slate-900">
                      ₹{p.price}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* WhatsApp CTA */}
                    <a
                      href={`https://wa.me/919586753377?text=${encodeURIComponent(
                        `Hi Ashraf! I would like to enquire about the ${p.title} program.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-gradient-to-r from-green-500 to-green-600 
                      px-6 py-3 text-sm font-semibold text-white shadow-lg text-center"
                    >
                      Book Free Trial
                    </a>

                    {/* Explore More */}
                    <a
                      href={`/programmes/${p.slug}`}
                      className="rounded-full border border-slate-300 
                      px-6 py-3 text-sm font-semibold text-slate-700 
                      hover:border-blue-600 hover:text-blue-600 transition text-center"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* extra bottom space so WhatsApp doesn't overlap */}
          <div className="h-24 sm:h-0" />
        </section>
      </main>
    </>
  );
}
