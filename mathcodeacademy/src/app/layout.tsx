import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "MathCode Academy | Math & Coding Excellence",
  description:
    "MathCode Academy offers expert-led math and coding classes for school students with personalized mentoring.",
  keywords: [
    "math coaching",
    "coding for kids",
    "online math classes",
    "python for students",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0b0f14] text-slate-100 antialiased">
        {/* NAVBAR – visible on ALL pages */}
        <Navbar />

        {/* Page content */}
<main className="pt-20 md:pt-32">
  {children}
</main>


        {/* FOOTER – visible on ALL pages */}
        <Footer />
      </body>
    </html>
  );
}
