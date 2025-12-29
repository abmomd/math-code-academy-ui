import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const testimonials = [
  {
    text: "Studying with Ashraf has been a game-changer for my son’s mathematical journey. Over the past year, Ashraf’s guidance has helped him approach problems with clarity, confidence, and creativity. His teaching goes beyond formulas, nurturing logical thinking and strategic problem-solving. This approach has directly reflected in my son’s competition performance: after earning a Silver medal in HKIMO last year, he proudly achieved Gold this year. Ashraf’s mentorship is inspiring, motivating, and results-driven—I definitely recommend him to any student aspiring to excel in mathematics.",
    name: "Aviral Jain",
    country: "India",
    course: "HKIMO Olympiad",
  },
  {
    text: "Ashraf is an amazing physics teacher. He’s super patient, extremely mature and can motivate teenage students. He will work with the right amount of balance in which the students can thrive. I highly recommend him to anyone looking for a sincere teacher who is passionate about their responsibility. ",
    name: "Ishita Sharma",
    country: "USA",
    course: "AP Physics 1",
  },
  {
    text: "Riansh has been learning programming with Ashraf since the last few months, and he is really excited, and looks forward to the classes. He has been able to apply the Python concepts he learnt to his robotics competitions. I found Ashraf's classes focused, productive and useful, and his teaching style to be organized. I highly recommend classes with him.",
    name: "Resham Sethi",
    country: "USA",
    course: "Python for Robotics",
  },
  {
    text: "Isabel has always been interested in programming, but after starting classes with Ashraf, she was introduced to new concepts and approaches that strengthened her analytical and logical thinking skills. This exposure has deepened her interest and aligns well with her goal of pursuing a college major involving structured programming. Ashraf has a remarkable talent for teaching and mentoring and I highly recommend him as an educator. ",
    name: "Gemy M George",
    country: "USA",
    course: "C++ Programming",
  },
    {
    text: "Mr. Ashraf is a highly dedicated and passionate educator who has had a significant impact on my son’s academic growth, particularly in mathematics. Through his patient guidance, consistent encouragement, and deep subject knowledge, he has helped my son not only strengthen his mathematical foundation but also develop a genuine interest in the subject. Under Mr. Ashraf’s mentorship, my son has gained the confidence to take on complex problems and has gone on to excel in several mathematics competitions. We are especially appreciative of Mr. Ashraf’s sincere commitment to his students and his engaging, thoughtful approach to teaching, which makes learning both effective and enjoyable. His support has been instrumental in shaping my son’s mathematical journey.",
    name: "Tanvi Banerjee",
    country: "India",
    course: "AMC, CEMC, IMO",
  },
  {
    text: "In Class 12, my son found the chapters on electricity and magnetism challenging. He took classes with Ashraf quite close to his board exams and his entrance exams. The classes helped him understand the concepts well. We found Ashraf's teaching style quite adaptive to the learner's requirements. And most important, Ashraf was able to inspire my son and instilled in him a desire to learn more about the topics.",
    name: "Twinkle Krishna",
    country: "India",
    course: "CBSE Physics - Class 12",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen px-6 py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <p className="text-slate-600 text-center max-w-2xl mx-auto mb-14">
            Hear from parents and students across the world who have experienced
            personalised mentorship at MathCode Academy.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md hover:shadow-lg transition"
              >
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  “{t.text}”
                </p>

                <div className="border-t border-slate-200 pt-4 space-y-1">
                  <p className="text-blue-600 text-sm font-medium">
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
        </div>
      </section>


    </>
  );
}
