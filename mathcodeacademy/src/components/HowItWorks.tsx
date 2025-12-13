export default function HowItWorks() {
  return (
    <section className="py-20 bg-[#07121a]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">How It Works</h2>

        <div className="mt-12 grid md:grid-cols-4 gap-8 text-center">
          {[
            "Book a Free Trial",
            "Skill Assessment",
            "Personalized Program",
            "Track Progress",
          ].map((step, i) => (
            <div key={i}>
              <div className="text-green-400 text-3xl font-bold">{i + 1}</div>
              <p className="mt-2 font-semibold">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
