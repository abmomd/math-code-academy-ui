import Navbar from "@/components/Navbar";
import InstructorCard from "@/components/InstructorCard";
import { instructors } from "@/data/instructors";

export default function InstructorsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-32 pb-32">
        <section className="mx-auto max-w-7xl px-6">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
              Meet Our Instructors
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-slate-600">
              Learn from experienced mentors passionate about Math, Physics & Coding.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-10 md:grid-cols-2">
            {instructors.map(instructor => (
              <InstructorCard
                key={instructor.id}
                instructor={instructor}
              />
            ))}
          </div>

        </section>
      </main>
    </>
  );
}
