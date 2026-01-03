import Navbar from "@/components/Navbar";
import { programmes } from "@/data/programmes";
import type { Programme, Subject } from "@/types/programme";
import { notFound } from "next/navigation";

/* --------------------------------------------
   Helper: Find programme by slug
-------------------------------------------- */
function findProgrammeBySlug(slug: string): Programme | null {
  for (const category of Object.values(programmes)) {
    for (const subjectKey of Object.keys(category) as Subject[]) {
      const list = category[subjectKey];
      if (!list) continue;

      const found = list.find(p => p.slug === slug);
      if (found) return found;
    }
  }
  return null;
}

/* --------------------------------------------
   Page
-------------------------------------------- */
export default async function ProgrammeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const programme = findProgrammeBySlug(slug);

  if (!programme) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-28">
        <section className="mx-auto max-w-4xl px-6">

          {/* PROGRAMME CARD */}
          <div className="rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200 p-8 sm:p-10 shadow-[0_30px_80px_-25px_rgba(0,0,0,0.15)]">

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl font-bold text-slate-900">
              {programme.title}
            </h1>

            <p className="mt-3 text-slate-600">
              {programme.sessions} sessions • {programme.duration}
            </p>

            {/* FEATURES */}
            <ul className="mt-8 space-y-3 text-slate-700">
              {programme.features.map((f, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/919586753377?text=${encodeURIComponent(
                  `Hi Ashraf! I would like to enquire about the ${programme.title} program.`
                )}`}
                target="_blank"
                className="rounded-full bg-green-500 px-7 py-3 text-white font-semibold text-center hover:bg-green-600 transition"
              >
                Book Free Trial
              </a>

              <a
                href="/programmes"
                className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-700 text-center hover:border-blue-600 hover:text-blue-600 transition"
              >
                Back to Programmes
              </a>
            </div>
          </div>

          {/* RESOURCES */}
          {(programme.syllabusPdf || programme.pastPapers) && (
            <div className="mt-14 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200 p-8 shadow-md">

              <h2 className="text-xl font-semibold text-slate-900 mb-6">
                Course Resources
              </h2>

              {/* SYLLABUS */}
              {programme.syllabusPdf && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-slate-600 mb-3">
                    Syllabus
                  </h3>

                  <a
                    href={programme.syllabusPdf}
                    target="_blank"
                    className="inline-flex items-center gap-2 rounded-xl bg-blue-50 px-5 py-3 text-sm font-semibold text-blue-700 hover:bg-blue-100 transition"
                  >
                    📘 Download Syllabus (PDF)
                  </a>
                </div>
              )}

              {/* PAST PAPERS */}
              {programme.pastPapers && programme.pastPapers.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-slate-600 mb-3">
                    Past Papers
                  </h3>

                  <div className="flex flex-wrap gap-3">
                    {programme.pastPapers.map(p => (
                      <a
                        key={p.year}
                        href={p.url}
                        target="_blank"
                        className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-600 hover:text-blue-600 transition"
                      >
                        {p.year}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
}
