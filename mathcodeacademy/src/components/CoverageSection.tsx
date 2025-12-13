"use client";

import { useEffect, useRef } from "react";

/* ================= MAIN SECTION ================= */

export default function CoverageSection() {
  return (
    <section className="py-24 bg-[#0f1720] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ================= SUBJECTS ================= */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">
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
            speed={0.4}
          />
        </div>

        {/* ================= CURRICULUMS ================= */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">
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
          <h2 className="text-4xl font-bold mb-12">
            In all grade levels
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

/* ================= JS MARQUEE (GUARANTEED WORKING) ================= */

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

      // Reset when half content has passed
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
            className="px-6 py-3 rounded-full bg-[#07121a] border border-slate-800 text-slate-200 font-medium whitespace-nowrap"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f1720] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f1720] to-transparent" />
    </div>
  );
}

/* ================= GRADE CARD ================= */

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
    <div className="bg-[#07121a] border border-slate-800 rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-green-400 font-medium mt-1">{subtitle}</p>
      <p className="mt-4 text-slate-400">{description}</p>
    </div>
  );
}
