"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Step1: Book a Free Trial Class",
    description:
      "Schedule a no-cost live session to understand your learning needs and goals.",
    image: "/images/hero/step1-student.jpg",
    gradient: "from-blue-100 to-indigo-100",
  },
  {
    title: "Step2: Get a Personalized Learning Plan",
    description:
      "We design a custom roadmap based on grade level, curriculum, and pace.",
    image: "/images/hero/step2-student.jpg",
    gradient: "from-indigo-100 to-violet-100",
  },
  {
    title: "Step3: Start Learning & Track Progress",
    description:
      "Attend live classes, practice effectively, and see measurable improvement.",
    image: "/images/hero/step3-student-parent.jpg",
    gradient: "from-violet-100 to-blue-100",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive(prev => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const step = steps[active];

  return (
    <section className="relative bg-white overflow-hidden">
      {/* soft background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

      <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
            1 on 1{" "}
            <span className="text-blue-600">Math, Physics & Coding</span>
            <br />
            Classes for School Students
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Build strong fundamentals, logical thinking, and problem solving skills
            through expert tutors in live classes — <span className="text-blue-600 text-bold">designed for Grades 3–12.</span>
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Book Free Trial
            </a>

            <a
              href="/programmes"
              className="rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* RIGHT HOW IT WORKS CARD */}
        <div
          className={`
            relative rounded-3xl 
            bg-gradient-to-br ${step.gradient}
            p-10 shadow-[0_25px_70px_-20px_rgba(59,130,246,0.35)]
            transition-all duration-700
          `}
        >
          <h1 className="text-xl font-bold uppercase tracking-wider text-blue-800 mb-4">
            How It Works
          </h1>

          {/* IMAGE */}
          <div className="relative h-56 md:h-64 w-full rounded-2xl overflow-hidden shadow-md mb-6">
            <Image
              src={step.image}
              alt={step.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* TEXT */}
          <h4 className="text-2xl font-semibold text-slate-900">
            {step.title}
          </h4>

          <p className="mt-2 text-slate-600">
            {step.description}
          </p>

          {/* DOTS */}
          <div className="mt-6 flex justify-center gap-2">
            {steps.map((_, i) => (
              <span
                key={i}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === active
                    ? "bg-blue-600 scale-110"
                    : "bg-blue-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
