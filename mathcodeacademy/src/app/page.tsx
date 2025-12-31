import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsStrip from "@/components/StatsStrip";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import Mentors from "@/components/Mentors";
import TestimonialsSlider from "@/components/TestimonialsSlider";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import CoverageSection from "@/components/CoverageSection";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <Hero />

        <StatsStrip />

        



        <section className="mt-32 px-6 pb-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            What Parents & Students Say
          </h2>
          <p className="mt-3 text-slate-600">
            Trusted by families across grades and curricula
          </p>

          <div className="mt-12">
            <TestimonialsSlider />
          </div>
        </section>

        <CTA />
      </main>

    </>
  );
}
