"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "My child’s confidence in math has improved dramatically. The structured approach really works.",
    author: "Parent, Grade 6",
  },
  {
    text: "The way concepts are explained makes problem solving feel natural, not forced.",
    author: "Parent, Grade 8",
  },
  {
    text: "This is the first time my child actually enjoys learning math.",
    author: "Parent, Grade 5",
  },
  {
    text: "Strong fundamentals and great mentoring. We saw visible improvement in just a few months.",
    author: "Parent, Grade 9",
  },
];

const INTERVAL = 4500;

export default function RotatingTestimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (paused) return;

    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, INTERVAL);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [index, paused]);

  return (
    <section className="relative mt-32">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="mb-12 text-4xl font-semibold tracking-tight">
          What Parents Say
        </h2>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onClick={() => setPaused((p) => !p)}
          className="relative cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-10 backdrop-blur-xl"
            >
              <p className="text-lg leading-relaxed text-white/90">
                “{testimonials[index].text}”
              </p>

              <p className="mt-6 text-sm font-medium text-green-400">
                — {testimonials[index].author}
              </p>

              {paused && (
                <p className="mt-4 text-xs text-white/40">
                  Paused · click to resume
                </p>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIndex(i);
                setPaused(true);
              }}
              className={`h-2 w-2 rounded-full transition ${
                index === i
                  ? "bg-green-400"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
