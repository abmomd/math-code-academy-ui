import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      {/* ✅ WHITE BODY */}
      <body className="bg-white text-slate-900 antialiased">
        <Navbar />

        {/* Content starts AFTER navbar height */}
        <main className="pt-20">
          {children}
        </main>

        <Footer />
        {/* Floating WhatsApp Button */}
      <WhatsAppButton />
      </body>
    </html>
  );
}
