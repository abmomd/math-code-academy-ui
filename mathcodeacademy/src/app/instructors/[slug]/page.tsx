import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import { instructors } from "@/data/instructors";

export default function InstructorProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const instructor = instructors.find(i => i.slug === params.slug);

  if (!instructor) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-32">
        <section className="mx-auto max-w-4xl px-6 text-center">

          {/* PHOTO */}
          <div className="relative mx-auto h-44 w-44 rounded-full overflow-hidden shadow-lg">
            <Image
              src={instructor.image}
              alt={instructor.name}
              fill
              className="object-cover"
            />
          </div>

          {/* NAME */}
          <h1 className="mt-8 text-4xl font-bold text-slate-900">
            {instructor.name}
          </h1>

          <p className="mt-2 text-blue-600 font-medium">
            {instructor.role}
          </p>

          {/* BIO */}
          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            {instructor.bio}
          </p>

          {/* EXPERIENCE */}
<ul className="mt-8 space-y-3 text-slate-700">
  {instructor.experience.map((item: string, i: number) => (
    <li key={i} className="flex justify-center gap-3">
      <span className="text-blue-600 font-bold">✓</span>
      {item}
    </li>
  ))}
</ul>


          {/* CTA */}
          <div className="mt-10 flex justify-center gap-4">
            <a
              href={instructor.linkedin}
              target="_blank"
              className="rounded-full bg-blue-600 px-7 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              View on LinkedIn
            </a>

            <a
              href="/contact"
              className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
            >
              Book a Session
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
