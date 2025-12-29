export default function StatsStrip() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 mt-24">
      <div
        className="
          rounded-3xl 
          border border-slate-200 
          bg-white 
          shadow-[0_20px_60px_-20px_rgba(0,0,0,0.15)]
          px-8 py-14
        "
      >

        {/* ================= STATS ================= */}
        <div className="grid text-center md:grid-cols-3">
          {/* Stat 1 */}
          <div>
            <div className="text-4xl font-extrabold text-blue-600">
              4+
            </div>
            <p className="mt-2 font-semibold text-slate-900">
              Years Experience
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Teaching & Mentorship
            </p>
          </div>

          {/* Stat 2 */}
          <div>
            <div className="text-4xl font-extrabold text-blue-600">
              100+
            </div>
            <p className="mt-2 font-semibold text-slate-900">
              Students Taught
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Across Multiple Curricula
            </p>
          </div>

          {/* Stat 3 */}
          <div>
            <div className="text-4xl font-extrabold text-blue-600">
              Grades 3–12
            </div>
            <p className="mt-2 font-semibold text-slate-900">
              Structured Programs
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Concept → Mastery
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
