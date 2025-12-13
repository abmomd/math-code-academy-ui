export default function Hero() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="text-5xl font-extrabold leading-tight">
            Personalized <span className="text-green-400">Math & Coding</span><br />
            Mentorship for School Students
          </h1>

          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Build strong fundamentals, logical thinking, and coding skills through
            live classes and expert mentorship — designed for Grades 3–12.
          </p>

          <div className="mt-8 flex gap-4">
            <a href="/book-trial" className="bg-green-400 text-black px-6 py-3 rounded-xl font-semibold">
              Book Free Trial
            </a>
            <a href="/courses" className="border border-slate-700 px-6 py-3 rounded-xl">
              Explore Programs
            </a>
          </div>
        </div>

        <div className="bg-[#07121a] border border-slate-800 rounded-2xl p-6">
          <h3 className="text-xl font-semibold">Live Class Preview</h3>
          <p className="text-slate-400 mt-2">Grade 6 • Problem Solving</p>
          <button className="mt-6 w-full bg-green-400 text-black py-2 rounded-lg font-semibold">
            Reserve a Seat
          </button>
        </div>

      </div>
    </section>
  );
}
