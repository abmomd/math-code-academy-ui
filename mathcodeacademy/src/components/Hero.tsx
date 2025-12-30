"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const steps = [
  {
    title: "Book a Free Trial Class",
    description:
      "Schedule a no-cost trial session to understand your learning goals.",
    image: "/images/hero/step1-student.jpg", // add image
    gradient: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "Get a Personalized Plan",
    description:
      "Receive a structured roadmap tailored to your grade, goals, and pace.",
    image: "/images/hero/step2-student.jpg",
    gradient: "from-indigo-500/10 to-violet-500/10",
  },
  {
    title: "Learn & See Real Progress",
    description:
      "Attend live sessions, practice smartly, and track visible improvement.",
    image: "/images/hero/step3-student-parent.jpg",
    gradient: "from-violet-500/10 to-blue-500/10",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);

  // auto-rotate cards
  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-indigo-100" />

      <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-20 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
            Personalized{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Math, Physics & Coding
            </span>
            <br />
            Mentorship for School Students
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Build strong fundamentals, logical thinking, and real-world skills
            through live classes and expert mentoring — Grades 3–12.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/contact"
              className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-white font-semibold shadow-lg hover:scale-[1.02] transition"
            >
              Book Free Trial
            </a>

            <a
              href="/programmes"
              className="rounded-xl border border-slate-300 px-8 py-3.5 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* RIGHT: ROTATING CARDS */}
        <div className="relative h-[380px]">
          {steps.map((step, index) => {
            const isActive = index === active;

            return (
              <div
                key={index}
                className={`
                  absolute inset-0 rounded-3xl
                  bg-white/80 backdrop-blur-xl
                  border border-slate-200
                  shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)]
                  p-8 transition-all duration-700
                  ${isActive
                    ? "opacity-100 translate-y-0 scale-100 z-10"
                    : "opacity-0 translate-y-6 scale-95 z-0"}
                `}
              >
                {/* soft gradient highlight */}
                <div
                  className={`absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br ${step.gradient}`}
                />

                {/* image */}
                <div className="mb-6 flex justify-center">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={180}
                    height={140}
                    className="object-contain"
                  />
                </div>

                {/* content */}
                <h3 className="text-xl font-semibold text-slate-900 text-center">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 text-center max-w-sm mx-auto">
                  {step.description}
                </p>

                {/* step indicator */}
                <div className="mt-6 flex justify-center gap-2">
                  {steps.map((_, i) => (
                    <span
                      key={i}
                      className={`h-2 w-2 rounded-full transition ${
                        i === active
                          ? "bg-blue-600"
                          : "bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
