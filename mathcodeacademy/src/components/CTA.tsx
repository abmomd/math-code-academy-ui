export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-blue-600 py-24 text-white">
      {/* subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 opacity-90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Start Your Learning Journey?
        </h2>

        <p className="mt-4 text-blue-100 max-w-2xl mx-auto">
          Book a free trial class and experience personalised math, physics,
          and coding mentorship at MathCode Academy.
        </p>

        <a
            href={`https://wa.me/919586753377?text=${encodeURIComponent(
    "Hi Ashraf! I would like to book a free trial class."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
          className="inline-block mt-8 rounded-full bg-white px-10 py-4
          text-sm font-semibold text-blue-700
          shadow-lg hover:shadow-xl transition"
        >
          Book Free Trial
        </a>
      </div>
    </section>
  );
}
