"use client";
const testimonials = [
  { name: "AP Calc Parent", text: "Excellent structure and results." },
  { name: "AP Physics Student", text: "Physics finally clicked." }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10">
        Testimonials
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-gray-900 p-6 rounded-xl">
            <p className="mb-4">“{t.text}”</p>
            <p className="font-semibold">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
