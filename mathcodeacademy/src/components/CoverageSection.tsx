"use client";

import { useEffect, useRef } from "react";

export default function CoverageSection() {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* ================= SUBJECTS ================= */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            Get help with core academic subjects
          </h2>

          <Marquee
            items={[
              "Mathematics",
              "Coding",
              "Physics",
              "Logical Reasoning",
              "Olympiad Math",
              "Python",
              "Scratch",
              "Data Structures",
            ]}
            speed={0.35}
          />
        </div>

        {/* ================= CURRICULUMS ================= */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-10">
            For all major school curriculums
          </h2>

          <Marquee
            items={[
              "🇮🇳 Indian Curriculum (CBSE / ICSE)",
              "🇬🇧 British Curriculum (IGCSE / A-Levels)",
              "🇺🇸 American Curriculum",
              "🌍 IB Curriculum",
              "🇨🇦 Canadian Curriculum",
              "🇦🇺 Australian Curriculum",
              "🇸🇬 Singapore Curriculum",
              "🇪🇺 Cambridge International",
            ]}
            speed={0.25}
          />
        </div>

        {/* ================= GRADES ================= */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-14">
            Programs for every stage of learning
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <GradeCard
              title="Primary School"
              subtitle="Grades 1–5"
              description="Strong foundations in numeracy, logic, and early problem solving."
            />
            <GradeCard
              title="Middle School"
              subtitle="Grades 6–8"
              description="Algebra, reasoning skills, and structured coding foundations."
            />
            <GradeCard
              title="High School"
              subtitle="Grades 9–12"
              description="Advanced mathematics, competitive exams, and coding mastery."
            />
          </div>
        </div>

      </div>
    </section>
  );
}
function Marquee({
  items,
  speed = 0.3,
}: {
  items: string[];
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let x = 0;
    let rafId: number;

    const animate = () => {
      x -= speed;
      el.style.transform = `translateX(${x}px)`;

      if (Math.abs(x) >= el.scrollWidth / 2) {
        x = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafId);
  }, [speed]);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        ref={ref}
        className="flex w-max gap-6 will-change-transform"
      >
        {[...items, ...items].map((item, i) => (
          <div
            key={i}
            className="px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
function GradeCard({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-md hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-slate-900">
        {title}
      </h3>

      <p className="text-blue-600 font-medium mt-1">
        {subtitle}
      </p>

      <p className="mt-4 text-slate-600">
        {description}
      </p>
    </div>
  );
}
