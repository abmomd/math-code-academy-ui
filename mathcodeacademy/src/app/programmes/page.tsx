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
    <section className="mx-auto max-w-7xl px-6">
      <div className="mb-14 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Our Programmes
        </h1>
        <p className="mt-4 text-white/60">
          AP, Olympiad, US & UK Curriculum Excellence
        </p>
      </div>

      {/* Category Selector */}
      <div className="mb-10 flex justify-center gap-3 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setCategory(cat);
              setSubject(
                Object.keys(programmes[cat])[0] as Subject
              );
            }}
            className={`rounded-full px-6 py-2 text-sm transition ${
              category === cat
                ? "bg-blue-600"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subject Tabs */}
      <div className="mb-12 flex justify-center gap-4">
        {subjects.map(s => (
          <button
            key={s}
            onClick={() => setSubject(s)}
            className={`rounded-lg px-4 py-2 text-sm transition ${
              subject === s
                ? "bg-green-500 text-black"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Programme Cards */}
      <div className="grid gap-8 md:grid-cols-2">
        {programmes[category][subject]?.map((p, i) => (
          <div
            key={i}
            className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-8 backdrop-blur-xl"
          >
            {p.popular && (
              <span className="absolute right-6 top-6 rounded-full bg-green-500 px-4 py-1 text-xs font-medium text-black">
                Most Popular
              </span>
            )}

            <h3 className="text-2xl font-semibold">{p.title}</h3>

            <p className="mt-2 text-sm text-white/60">
              {p.sessions} sessions • {p.duration}
            </p>

            <ul className="mt-6 space-y-3 text-sm">
              {p.features.map((f, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-400">✔</span>
                  {f}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center justify-between">
              <span className="text-2xl font-semibold">₹{p.price}</span>
              <button className="rounded-full bg-blue-600 px-6 py-2 text-sm hover:bg-blue-500 transition">
                Book Free Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
