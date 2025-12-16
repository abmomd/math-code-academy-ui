"use client";

import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pb-32">
      {/* Background Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-40 -z-10 
        h-[500px] w-[500px] -translate-x-1/2 
        rounded-full bg-blue-500/10 blur-[140px]"
      />

      {/* Header */}
      <div className="mb-20 text-center">
        <h1 className="text-5xl font-semibold tracking-tight">
          Let’s Talk
        </h1>
        <p className="mt-4 text-white/60 max-w-2xl mx-auto">
          Have questions about programmes, exams, or personalised mentoring?
          Reach out — we usually respond within 24 hours.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid gap-12 lg:grid-cols-2">
        {/* LEFT: Info Panel */}
        <div className="glass p-10 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Why MathCode Academy?
            </h2>

            <ul className="mt-6 space-y-4 text-white/80 text-sm">
              <li>✔ Personalised 1-on-1 & small group mentoring</li>
              <li>✔ AP, Olympiad, US & UK curriculum expertise</li>
              <li>✔ Concept → mastery focused teaching</li>
              <li>✔ Trusted by parents across multiple countries</li>
            </ul>
          </div>

          <div className="mt-12 space-y-6 text-sm">
            <div className="flex items-center gap-4">
              <Mail className="text-green-400" size={18} />
              <span>ashrafbhura8@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-green-400" size={18} />
              <span>+91 9586753377</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-green-400" size={18} />
              <span>Bangalore, India</span>
            </div>
          </div>
        </div>

        {/* RIGHT: Contact Form */}
        <div className="glass p-10">
          <h2 className="text-2xl font-semibold mb-6">
            Book a Free Consultation
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm text-white/70 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Parent / Student Name"
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 
                text-sm text-white outline-none
                focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 
                text-sm text-white outline-none
                focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">
                Class / Exam
              </label>
              <input
                type="text"
                placeholder="AP Calculus, Olympiad, Grade 9 Math..."
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 
                text-sm text-white outline-none
                focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-1">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell us what you’re looking for..."
                className="w-full rounded-lg bg-white/5 px-4 py-2.5 
                text-sm text-white outline-none resize-none
                focus:ring-2 focus:ring-blue-500/50"
              />
            </div>

            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-blue-600 
              py-3 text-sm font-medium transition-all
              hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
            >
              Request Free Class
            </button>
          </form>

          <p className="mt-6 text-xs text-white/50 text-center">
            No spam. We only contact you regarding your enquiry.
          </p>
        </div>
      </div>
    </section>
  );
}
