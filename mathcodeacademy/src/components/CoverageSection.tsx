export default function CoverageSection() {
  return (
    <section className="py-24 bg-[#0f1720] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-24">

        {/* ================= SUBJECTS ================= */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">
            Get help with core academic subjects
          </h2>

          <MovingRow
            items={[
              "Mathematics",
              "Coding",
              "Physics",
              "Logical Reasoning",
              "Olympiad Math",
              "Python",
              "Scratch",
              "Data Structures",
            ]}
          />
        </div>

        {/* ================= CURRICULUMS ================= */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">
            For all major school curriculums
          </h2>

          <MovingCurriculumRow />
        </div>

        {/* ================= GRADES ================= */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-12">
            In all grade levels
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <GradeCard
              title="Primary School"
              subtitle="Grades 1–5"
              description="Strong foundations in numeracy, logic, and early problem solving."
            />
            <GradeCard
              title="Middle School"
              subtitle="Grades 6–8"
              description="Algebra, reasoning skills, and structured coding foundations."
            />
            <GradeCard
              title="High School"
              subtitle="Grades 9–12"
              description="Advanced mathematics, competitive exams, and coding mastery."
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ================= GENERIC MARQUEE ROW ================= */

function MovingRow({ items }: { items: string[] }) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex">

        {/* Track 1 */}
        <div className="flex w-max gap-6 marquee">
          {items.map((item, i) => (
            <MarqueeItem key={`a-${i}`} label={item} />
          ))}
        </div>

        {/* Track 2 */}
        <div className="flex w-max gap-6 marquee">
          {items.map((item, i) => (
            <MarqueeItem key={`b-${i}`} label={item} />
          ))}
        </div>

      </div>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0f1720] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0f1720] to-transparent" />
    </div>
  );
}


function MarqueeItem({ label }: { label: string }) {
  return (
    <div className="px-6 py-3 rounded-full bg-[#07121a] border border-slate-800 text-slate-200 font-medium whitespace-nowrap">
      {label}
    </div>
  );
}

/* ================= CURRICULUM MARQUEE ================= */

function MovingCurriculumRow() {
  const curriculums = [
    { label: "Indian Curriculum (CBSE / ICSE)", flag: "🇮🇳" },
    { label: "British Curriculum (IGCSE / A-Levels)", flag: "🇬🇧" },
    { label: "American Curriculum", flag: "🇺🇸" },
    { label: "IB Curriculum", flag: "🌍" },
    { label: "Canadian Curriculum", flag: "🇨🇦" },
    { label: "Australian Curriculum", flag: "🇦🇺" },
    { label: "Singapore Curriculum", flag: "🇸🇬" },
    { label: "Cambridge International", flag: "🇪🇺" },
  ];

  const items = curriculums.map(
    c => `${c.flag} ${c.label}`
  );

  return <MovingRow items={items} />;
}

/* ================= GRADE CARD ================= */

function GradeCard({
  title,
  subtitle,
  description,
}: {
  title: string;
  subtitle: string;
  description: string;
}) {
  return (
    <div className="bg-[#07121a] border border-slate-800 rounded-2xl p-6 text-left">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-green-400 font-medium mt-1">{subtitle}</p>
      <p className="mt-4 text-slate-400">{description}</p>
    </div>
  );
}
