import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50
      glass w-[92%] max-w-6xl px-8 py-4 flex items-center justify-between"
    >
      <Link href="/" className="text-xl font-bold">
        MathCode<span className="text-green-400">Academy</span>
      </Link>

      <div className="hidden md:flex gap-8 text-sm text-gray-300">
        <Link href="/programmes">Programmes</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <Link
        href="/contact"
        className="bg-blue-600 px-5 py-2 rounded-xl text-sm font-medium"
      >
        Book Free Class
      </Link>
    </nav>
  );
}
