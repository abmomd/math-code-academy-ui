export default function WhoItsFor() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Who Is MathCode Academy For?
        </h2>

        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="bg-[#07121a] p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold">School Students</h3>
            <p className="mt-2 text-slate-400">
              Strong foundations in math and coding from early grades.
            </p>
          </div>

          <div className="bg-[#07121a] p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold">Competitive Aspirants</h3>
            <p className="mt-2 text-slate-400">
              Olympiad, AMC, and problem-solving focused training.
            </p>
          </div>

          <div className="bg-[#07121a] p-6 rounded-xl border border-slate-800">
            <h3 className="text-xl font-semibold">Parents</h3>
            <p className="mt-2 text-slate-400">
              Structured learning with visible progress and mentoring.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
