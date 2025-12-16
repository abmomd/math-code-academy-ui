"use client";

import { useState } from "react";
import { programmes } from "@/data/programmes";
import { Subject } from "@/types/programme";

type Category = keyof typeof programmes;

export default function ProgrammesPage() {
  const categories = Object.keys(programmes) as Category[];
  const [category, setCategory] = useState<Category>(categories[0]);

  const subjects = Object.keys(programmes[category]) as Subject[];
  const [subject, setSubject] = useState<Subject>(subjects[0]);

  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-32">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-40 -z-10 
        h-[500px] w-[500px] -translate-x-1/2 
        rounded-full bg-green-500/10 blur-[140px]"
      />

      {/* Header */}
      <div className="mb-16 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Our Programmes
        </h1>
        <p className="mt-4 text-white/60">
          AP, Olympiad, US & UK Curriculum Excellence
        </p>
      </div>

      {/* Category Selector */}
      <div className="mb-12 flex justify-center">
        <div className="glass flex flex-wrap gap-2 rounded-full p-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => {
                setCategory(cat);
                setSubject(
                  Object.keys(programmes[cat])[0] as Subject
                );
              }}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all ${
                category === cat
                  ? "bg-blue-600 text-white shadow-lg"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Subject Tabs */}
      <div className="mb-20 flex justify-center">
        <div className="flex gap-3 rounded-xl bg-white/5 p-2">
          {subjects.map(s => (
            <button
              key={s}
              onClick={() => setSubject(s)}
              className={`rounded-lg px-5 py-2 text-sm font-medium transition-all ${
                subject === s
                  ? "bg-green-500 text-black shadow-md"
                  : "text-white/70 hover:bg-white/10"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Programme Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {programmes[category][subject]?.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl border border-white/10 
            bg-gradient-to-br from-white/8 to-white/0 
            p-8 backdrop-blur-xl
            transition-all duration-300
            hover:-translate-y-1 hover:shadow-2xl hover:shadow-green-500/10"
          >
            {/* Popular Badge */}
            {p.popular && (
              <span
                className="absolute right-6 top-6 rounded-full 
                bg-green-500/90 px-4 py-1 text-xs font-semibold text-black
                shadow-md shadow-green-500/40"
              >
                Most Popular
              </span>
            )}

            {/* Title */}
            <h3 className="text-2xl font-semibold tracking-tight">
              {p.title}
            </h3>

            <p className="mt-1 text-sm text-white/50">
              {p.sessions} sessions • {p.duration}
            </p>

            {/* Features */}
            <ul className="mt-6 space-y-3 text-sm text-white/80">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="mt-[2px] text-green-400">✔</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* Price & CTA */}
            <div className="mt-10 flex items-center justify-between">
              <div>
                <p className="text-xs text-white/50">
                  Programme Fee
                </p>
                <span className="text-3xl font-semibold">
                  ₹{p.price}
                </span>
              </div>

              <button
                className="rounded-full bg-blue-600 px-7 py-2.5 text-sm 
                font-medium transition-all
                hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
              >
                Book Free Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
