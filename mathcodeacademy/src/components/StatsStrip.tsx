export default function StatsStrip() {
  const stats = [
    {
      value: "4+",
      title: "Years Experience",
      subtitle: "Teaching & Mentorship",
    },
    {
      value: "100+",
      title: "Students Taught",
      subtitle: "Across Multiple Curricula",
    },
    {
      value: "Grades 3–12",
      title: "Structured Programs",
      subtitle: "Concept → Mastery",
    },
    {
      value: "Math • Physics • Coding",
      title: "One Platform",
      subtitle: "Integrated Learning",
    },
  ];

  return (
    <section className="relative mt-24">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/10 via-green-500/10 to-purple-500/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4"
            >
              <div className="text-4xl font-semibold tracking-tight text-green-400">
                {stat.value}
              </div>

              <div className="mt-2 text-sm font-medium text-white">
                {stat.title}
              </div>

              <div className="mt-1 text-xs text-white/60">
                {stat.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
