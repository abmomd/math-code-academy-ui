"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    text: "Studying with Ashraf has been a game-changer for my son’s mathematical journey. Over the past year, Ashraf’s guidance has helped him approach problems with clarity, confidence, and creativity. His teaching goes beyond formulas, nurturing logical thinking and strategic problem-solving. This approach has directly reflected in my son’s competition performance: after earning a Silver medal in HKIMO last year, he proudly achieved Gold this year.",
    name: "Aviral Jain",
    country: "India",
    course: "HKIMO Olympiad",
  },
  {
    text: "Ashraf is an amazing physics teacher. He’s super patient, extremely mature and can motivate teenage students. He balances discipline and encouragement perfectly, allowing students to truly thrive.",
    name: "Ishita Sharma",
    country: "USA",
    course: "AP Physics 1",
  },
  {
    text: "Riansh has been learning programming with Ashraf for a few months and eagerly looks forward to every class. He has applied Python concepts confidently in robotics competitions.",
    name: "Resham Sethi",
    country: "USA",
    course: "Python for Robotics",
  },
  {
    text: "After starting classes with Ashraf, Isabel was introduced to structured programming approaches that strengthened her analytical thinking and aligned perfectly with her future academic goals.",
    name: "Gemy M George",
    country: "USA",
    course: "C++ Programming",
  },
  {
    text: "Mr. Ashraf’s mentorship significantly strengthened my son’s mathematical foundation and confidence. His dedication and passion are clearly reflected in my son’s competition success.",
    name: "Tanvi Banerjee",
    country: "India",
    course: "AMC, CEMC, IMO",
  },
  {
    text: "Ashraf’s adaptive teaching style helped my son master difficult physics concepts just before his board and entrance exams. Most importantly, he inspired a love for learning.",
    name: "Twinkle Krishna",
    country: "India",
    course: "CBSE Physics – Class 12",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <main className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-32">
        {/* Background glow */}
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]" />

        <section className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-20 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              What Parents & Students Say
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600">
              Trusted by families across the globe for personalised math,
              physics, and coding mentorship.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="
                  relative rounded-3xl 
                  bg-white/70 backdrop-blur-xl
                  border border-slate-200
                  p-8
                  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)]
                  transition-all duration-300
                  hover:-translate-y-2
                  hover:shadow-[0_30px_80px_-20px_rgba(59,130,246,0.35)]
                "
              >
                {/* Decorative Quote */}
                <div className="
                  absolute -top-5 -left-5 
                  h-10 w-10 rounded-full
                  bg-gradient-to-br from-blue-600 to-indigo-600
                  flex items-center justify-center
                  text-white text-xl font-bold
                  shadow-lg
                ">
                  “
                </div>

                {/* Text */}
                <p className="text-slate-700 text-sm leading-relaxed">
                  {t.text}
                </p>

                {/* Divider */}
                <div className="my-6 h-px bg-gradient-to-r from-blue-200 via-indigo-200 to-transparent" />

                {/* Meta */}
                <div className="space-y-1">
                  <p className="text-blue-600 font-semibold text-sm">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500">
                    {t.course}
                  </p>
                  <p className="text-xs text-slate-400">
                    {t.country}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

    </>
  );
}
