"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { programmes } from "@/data/programmes";
import { Subject } from "@/types/programme";

type Category = keyof typeof programmes;

export default function ProgrammesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categories = Object.keys(programmes) as Category[];

  /* ---------------- URL PARAMS ---------------- */
  const urlCategory = searchParams.get("category") as Category | null;
  const urlSubject = searchParams.get("subject") as Subject | null;

  /* ---------------- STATE ---------------- */
  const [category, setCategory] = useState<Category>(categories[0]);
  const [subject, setSubject] = useState<Subject>(
    Object.keys(programmes[categories[0]])[0] as Subject
  );

  /* ------------------------------------------------
     🔑 SYNC STATE FROM URL (Navbar → Page)
  ------------------------------------------------ */
  useEffect(() => {
    if (urlCategory && programmes[urlCategory]) {
      setCategory(urlCategory);

      const validSubjects = Object.keys(
        programmes[urlCategory]
      ) as Subject[];

      if (urlSubject && validSubjects.includes(urlSubject)) {
        setSubject(urlSubject);
      } else {
        setSubject(validSubjects[0]);
      }
    }
  }, [urlCategory, urlSubject]);

  /* ------------------------------------------------
     🔑 SYNC URL FROM STATE (Page UI → URL)
     (Guarded to avoid infinite loop)
  ------------------------------------------------ */
useEffect(() => {
  const currentCategory = searchParams.get("category");
  const currentSubject = searchParams.get("subject");

  // ✅ Only update URL if it is ACTUALLY different
  if (
    currentCategory !== category ||
    currentSubject !== subject
  ) {
    router.replace(
      `/programmes?category=${encodeURIComponent(category)}&subject=${subject}`,
      { scroll: false }
    );
  }
  // ❌ DO NOT add searchParams here
}, [category, subject, router]);


  /* ---------------- UI (UNCHANGED) ---------------- */
  const subjects = Object.keys(programmes[category]) as Subject[];

  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-28 pb-32">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-blue-300/30 blur-[140px]" />
      <div className="pointer-events-none absolute top-1/3 right-0 h-[420px] w-[420px] rounded-full bg-indigo-300/30 blur-[140px]" />

      <section className="relative mx-auto max-w-7xl px-4 sm:px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Our Programmes
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Carefully structured learning paths across global curricula and
            competitive exams.
          </p>
        </div>

        {/* MOBILE SCROLL HINT */}
        <p className="mb-3 text-center text-sm text-slate-500 md:hidden">
          Scroll to explore programmes →
        </p>

        {/* CATEGORY SELECTOR */}
        <div className="mb-10 overflow-x-auto scrollbar-hide">
          <div className="mx-auto flex w-max gap-2 rounded-full bg-white/80 backdrop-blur-xl border border-slate-200 p-2 shadow-md">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setCategory(cat);
                  setSubject(
                    Object.keys(programmes[cat])[0] as Subject
                  );
                }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  category === cat
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow"
                    : "text-slate-600 hover:bg-blue-50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SUBJECT SELECTOR */}
        <p className="mb-3 text-center text-sm font-medium text-slate-600">
          Select Subject
        </p>

        <div className="mb-16 flex justify-center">
          <div className="w-full max-w-md rounded-2xl bg-white/90 backdrop-blur-xl border border-slate-200 p-4 shadow-md">
            <div className="flex gap-2">
              {subjects.map(s => (
                <button
                  key={s}
                  onClick={() => setSubject(s)}
                  className={`flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition ${
                    subject === s
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-600 hover:bg-blue-50"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PROGRAMME CARDS */}
        <div className="grid gap-8 sm:gap-10 md:grid-cols-2">
          {programmes[category][subject]?.map(p => (
            <div
              key={p.slug}
              className="relative rounded-3xl bg-white/90 backdrop-blur-xl 
              border border-slate-200 p-7 sm:p-8
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
              transition hover:-translate-y-1 hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.35)]"
            >
              {p.popular && (
                <span className="absolute right-5 top-5 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                {p.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {p.sessions} sessions • {p.duration}
              </p>

              <ul className="mt-5 space-y-3 text-sm text-slate-600">
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/919586753377?text=${encodeURIComponent(
                    `Hi Ashraf! I would like to enquire about the ${p.title} program.`
                  )}`}
                  target="_blank"
                  className="flex-1 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white text-center hover:bg-green-600 transition"
                >
                  Book Free Trial
                </a>

                <a
                  href={`/programmes/${p.slug}`}
                  className="flex-1 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 text-center hover:border-blue-600 hover:text-blue-600 transition"
                >
                  Explore More
                </a>
              </div>
            </div>
          ))}
        </div>

      </section>
    </main>
  );
}
