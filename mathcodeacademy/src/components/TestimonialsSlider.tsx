const testimonials = [
  {
    text: "My child’s confidence in math has increased massively.",
    author: "Parent of Grade 6 Student",
  },
  {
    text: "Logic and problem-solving finally make sense.",
    author: "Grade 9 Student",
  },
  {
    text: "Best personalised mentorship we experienced.",
    author: "ICSE Parent",
  },
  {
    text: "Coding + Math together is a game changer.",
    author: "Grade 11 Student",
  },
];

export default function TestimonialsSlider() {
  return (
    <div className="relative overflow-hidden mt-12">
      <div className="testimonial-track">
        {[...testimonials, ...testimonials].map((t, index) => (
          <div
            key={index}
            className="glass min-w-[320px] max-w-[320px] p-6"
          >
            <p className="text-slate-300 text-sm leading-relaxed">
              “{t.text}”
            </p>
            <p className="mt-4 text-green-400 text-sm font-medium">
              — {t.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
