import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Courses | MathCode Academy",
  description: "Explore math and coding courses for grades 3–12.",
};

export default function CoursesPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-28 bg-white">
        <h1 className="text-4xl font-bold text-slate-900">
          Our Courses
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl">
          Structured programs for math excellence, problem solving,
          and real-world coding mastery.
        </p>
      </main>


    </>
  );
}
