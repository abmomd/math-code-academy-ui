"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { programmes } from "@/data/programmes";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Dropdown control
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const categories = Object.keys(programmes);
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0]
  );

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="text-lg font-bold text-slate-900">
            MathCode<span className="text-blue-600">Academy</span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex gap-8 items-center text-sm text-slate-600">

            {/* PROGRAMMES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              {/* Trigger */}
              <Link
                href="/programmes"
                className="flex items-center gap-1 py-2 font-medium hover:text-blue-600"
              >
                Programmes
                <ChevronDown size={14} />
              </Link>

              {/* DROPDOWN */}
              <div
                className={`
                  absolute left-0 top-full
                  w-[720px]
                  rounded-3xl bg-white
                  border border-slate-200
                  shadow-[0_40px_120px_-40px_rgba(0,0,0,0.35)]
                  transition-all duration-200
                  ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"}
                `}
              >
                {/* Hover bridge */}
                <div className="pt-4 px-6 pb-6">

                  <div className="grid grid-cols-[220px_1fr] gap-8">

                    {/* LEFT: PROGRAMMES */}
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Programmes
                      </p>

                      <ul className="space-y-1">
                        {categories.map(category => (
                          <li key={category}>
                            <Link
                              href={`/programmes?category=${encodeURIComponent(category)}`}
                              onMouseEnter={() => setActiveCategory(category)}
                              onClick={() => setDropdownOpen(false)}
                              className={`
                                block rounded-xl px-4 py-2.5
                                text-sm font-medium transition
                                ${
                                  activeCategory === category
                                    ? "bg-white text-blue-600 shadow-sm"
                                    : "text-slate-700 hover:bg-white"
                                }
                              `}
                            >
                              {category}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* RIGHT: COURSES */}
                    <div>
                      <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Courses
                      </p>

                      <div className="grid grid-cols-2 gap-3">
                        {Object.values(programmes[activeCategory])
                          .flat()
                          .map(course => (
                            <Link
                              key={course.slug}
                              href={`/programmes/${course.slug}`}
                              onClick={() => setDropdownOpen(false)}
                              className="
                                rounded-xl border border-slate-200
                                bg-white px-4 py-3
                                text-sm font-medium text-slate-700
                                hover:border-blue-200
                                hover:bg-blue-50
                                hover:text-blue-600
                                hover:shadow-sm
                                transition
                              "
                            >
                              {course.title}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>

                  {/* FOOTER */}
                  <div className="mt-6 border-t border-slate-200 pt-4 text-center">
                    <Link
                      href="/programmes"
                      onClick={() => setDropdownOpen(false)}
                      className="text-sm font-semibold text-blue-600 hover:underline"
                    >
                      View all programmes →
                    </Link>
                  </div>

                </div>
              </div>
            </div>

            {/* OTHER LINKS */}
            <Link href="/testimonials" className="hover:text-blue-600 font-medium">
              Testimonials
            </Link>

            <Link href="/instructors" className="hover:text-blue-600 font-medium">
              Instructors
            </Link>

            <Link href="/contact" className="hover:text-blue-600 font-medium">
              Contact
            </Link>
          </div>

          {/* DESKTOP CTA */}
{/* DESKTOP CTA */}
<a
  href={`https://wa.me/919586753377?text=${encodeURIComponent(
    "Hi Ashraf! I would like to book a free trial class for: "
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
>
  Book Free Class
</a>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-slate-900"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 text-lg">
          <Link onClick={() => setOpen(false)} href="/programmes">
            Programmes
          </Link>
          <Link onClick={() => setOpen(false)} href="/testimonials">
            Testimonials
          </Link>
          <Link onClick={() => setOpen(false)} href="/instructors">
            Instructors
          </Link>
          <Link onClick={() => setOpen(false)} href="/contact">
            Contact
          </Link>

{/* DESKTOP CTA */}
<a
  href={`https://wa.me/919586753377?text=${encodeURIComponent(
    "Hi Ashraf! I would like to book a free trial class."
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  className="hidden md:inline-block rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition"
>
  Book Free Class
</a>

        </div>
      )}
    </>
  );
}
