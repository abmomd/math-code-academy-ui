export default function Programs() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Our Learning Programs
        </h2>

        <div className="mt-12 grid md:grid-cols-4 gap-8">
          {[
            "Foundation Math (Grades 3–5)",
            "Advanced Math (Grades 6–8)",
            "Olympiad Preparation",
            "Coding (Scratch → Python)",
          ].map((program, i) => (
            <div key={i} className="bg-[#07121a] p-6 rounded-xl border border-slate-800">
              <h3 className="font-semibold">{program}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
