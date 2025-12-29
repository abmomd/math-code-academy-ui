export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100" />

      <div className="mx-auto max-w-7xl px-6 py-28 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold leading-tight text-slate-900">
            Personalized{" "}
            <span className="text-blue-600">Math & Coding</span>
            <br />
            Mentorship for School Students
          </h1>

          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Build strong fundamentals, logical thinking, and real-world coding
            skills through live classes and expert mentorship — designed for
            Grades 3–12.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/book-trial"
              className="rounded-xl bg-blue-600 px-7 py-3.5 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              Book Free Trial
            </a>

            <a
              href="/courses"
              className="rounded-xl border border-slate-300 px-7 py-3.5 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Explore Programs
            </a>
          </div>
        </div>

        {/* Right Card */}
        <div className="rounded-3xl border border-slate-200 bg-white shadow-xl p-8">
          <h3 className="text-xl font-semibold text-slate-900">
            Live Class Preview
          </h3>
          <p className="mt-2 text-slate-500">
            Grade 6 • Problem Solving
          </p>

          <div className="mt-6 h-40 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-blue-700 font-semibold">
            Interactive Whiteboard Session
          </div>

          <button className="mt-8 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition">
            Reserve a Seat
          </button>
        </div>

      </div>
    </section>
  );
}
