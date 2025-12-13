export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 text-center text-slate-400">
        © {new Date().getFullYear()} MathCode Academy. All rights reserved.
      </div>
    </footer>
  );
}
