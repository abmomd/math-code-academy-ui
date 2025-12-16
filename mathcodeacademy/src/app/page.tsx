import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/StatsStrip";
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
      <main>
        <Hero />
        <TrustStats />
        <CoverageSection />
        <WhoItsFor />
        <HowItWorks />
        <Programs />
        <Mentors />
        <section className="mt-32 text-center px-6 pb-10">
  <h2 className="text-3xl font-bold">
    What Parents & Students Say
  </h2>
  <TestimonialsSlider />
</section>

        <CTA />
      </main>
      <Footer />
    </>
  );
}
