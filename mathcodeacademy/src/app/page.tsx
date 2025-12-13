import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStats from "@/components/TrustStats";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import Programs from "@/components/Programs";
import Mentors from "@/components/Mentors";
import Testimonials from "@/components/Testimonials";
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
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
