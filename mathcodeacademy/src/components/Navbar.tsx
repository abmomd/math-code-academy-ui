import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0b0f14]/90 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-white">
          Math<span className="text-green-400">Code</span> Academy
        </Link>

        {/* Links */}
        <div className="hidden md:flex gap-8 text-slate-300">
          <Link href="/courses" className="hover:text-white">Courses</Link>
          <Link href="/mentors" className="hover:text-white">Mentors</Link>
          <Link href="/blog" className="hover:text-white">Blog</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>

        {/* CTA */}
        <Link
          href="/book-trial"
          className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-green-300 transition"
        >
          Free Trial
        </Link>
      </div>
    </nav>
  );
}
