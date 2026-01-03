"use client";

import Link from "next/link";

const overview = [
  {
    title: "AP Curriculum",
    emoji: "🎓",
    description: "Advanced Placement courses for high-achieving students.",
    items: [
      { label: "AP Calculus AB", category: "AP Curriculum", subject: "Math" },
      { label: "AP Calculus BC", category: "AP Curriculum", subject: "Math" },
      { label: "AP Statistics", category: "AP Curriculum", subject: "Math" },
      { label: "AP Physics 1 & 2", category: "AP Curriculum", subject: "Physics" },
      { label: "AP Computer Science A", category: "AP Curriculum", subject: "Programming" },
    ],
  },
  {
    title: "US Curriculum",
    emoji: "🇺🇸",
    description: "Complete US school curriculum support.",
    items: [
      { label: "Algebra I", category: "US Curriculum", subject: "Math" },
      { label: "Algebra II", category: "US Curriculum", subject: "Math" },
      { label: "Geometry", category: "US Curriculum", subject: "Math" },
      { label: "Pre-Calculus", category: "US Curriculum", subject: "Math" },
      { label: "Intro to Programming", category: "US Curriculum", subject: "Programming" },
    ],
  },
  {
    title: "IGCSE",
    emoji: "🌍",
    description: "Cambridge IGCSE academic programmes.",
    items: [
      { label: "IGCSE Mathematics", category: "IGCSE", subject: "Math" },
      { label: "IGCSE Additional Math", category: "IGCSE", subject: "Math" },
      { label: "IGCSE Physics", category: "IGCSE", subject: "Physics" },
      { label: "IGCSE Computer Science", category: "IGCSE", subject: "Programming" },
    ],
  },
  {
    title: "Olympiads",
    emoji: "🏆",
    description: "Advanced problem-solving and competitions.",
    items: [
      { label: "AMC 8", category: "Olympiads", subject: "Math" },
      { label: "AMC 10", category: "Olympiads", subject: "Math" },
      { label: "AMC 12", category: "Olympiads", subject: "Math" },
      { label: "IMO / HKIMO", category: "Olympiads", subject: "Math" },
    ],
  },
  {
    title: "University Entrance",
    emoji: "🎯",
    description: "UK & international university entrance exams.",
    items: [
      { label: "TMUA", category: "University Entrance", subject: "Math" },
      { label: "MAT", category: "University Entrance", subject: "Math" },
      { label: "STEP", category: "University Entrance", subject: "Math" },
      { label: "PAT", category: "University Entrance", subject: "Physics" },
    ],
  },
];

export default function ProgrammesOverview() {
  return (
    <section className="relative py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
          Programmes Offered
        </h2>
        <p className="mt-4 text-center text-slate-600 max-w-2xl mx-auto">
          Explore academic curricula, competitive exams, and advanced training paths.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {overview.map((card, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border border-slate-200 p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{card.emoji}</span>
                <h3 className="text-xl font-semibold text-slate-900">
                  {card.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600 mb-6">
                {card.description}
              </p>

              <ul className="space-y-2">
                {card.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/programmes?category=${encodeURIComponent(
                        item.category
                      )}&subject=${encodeURIComponent(item.subject)}`}
                      className="text-blue-600 text-sm font-medium hover:underline"
                    >
                      {item.label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
