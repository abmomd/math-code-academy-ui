import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import CTA from "@/components/CTA";
import ProgrammesOverview from "@/components/ProgrammesOverview";
import InstructorCard from "@/components/InstructorCard";
import { instructors } from "@/data/instructors";


export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <Hero />

        <ProgrammesOverview />
        

       {/* Need to insert instructors over here */}
{/* INSTRUCTORS SECTION */}
<section className="bg-white py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Header */}
    <div className="mb-14 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
        Meet Your Instructors
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-slate-600">
        Learn from experienced mentors who guide students across competitive
        exams and international curricula.
      </p>
    </div>

    {/* Cards */}
    <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
      {instructors.slice(0, 2).map(instructor => (
        <InstructorCard
          key={instructor.id}
          instructor={instructor}
        />
      ))}
    </div>

    {/* CTA */}
    <div className="mt-16 text-center">
      <a
        href="/instructors"
        className="
          inline-flex items-center gap-2
          rounded-full border border-slate-300
          px-8 py-3 text-sm font-semibold text-slate-700
          hover:border-blue-600 hover:text-blue-600 transition
        "
      >
        View all instructors →
      </a>
    </div>

  </div>
</section>



        <StatsStrip />

        



        {/* <section className="mt-32 px-6 pb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Parents & Students Say
          </h2>
          <p className="mt-3 text-slate-600">
            Trusted by families across grades and curricula
          </p>

          {/* <div className="mt-12">
            <TestimonialsSlider />
          </div>
        </section> */} 




        <CTA />

        
      </main>

    </>
  );
}
