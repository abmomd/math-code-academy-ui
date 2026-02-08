import Image from "next/image";
import Link from "next/link";
import { Instructor } from "@/types/instructor";

export default function InstructorCard({
  instructor,
}: {
  instructor: Instructor;
}) {
  return (
    <div className="rounded-3xl bg-white border border-slate-200 p-10 text-center shadow-sm hover:shadow-lg transition">

      {/* Image */}
      <div className="mx-auto mb-6 h-36 w-36 rounded-full overflow-hidden shadow-md">
        <Image
          src={instructor.image}
          alt={instructor.name}
          width={144}
          height={144}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-xl font-semibold text-slate-900">
        {instructor.name}
      </h3>

      {/* Role */}
      <p className="mt-1 text-sm font-medium text-blue-600">
        {instructor.role}
      </p>

      {/* EXPERIENCE BADGE */}
      <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-semibold text-blue-700">
        {instructor.experience.years}+ years experience
      </div>

      {/* Bio */}
      <p className="mt-4 text-sm text-slate-600 leading-relaxed">
        {instructor.bio}
      </p>

      {/* Experience Highlights */}
      <ul className="mt-5 space-y-2 text-sm text-slate-700 text-left max-w-xs mx-auto">
        {instructor.experience.highlights.map((item, i) => (
          <li key={i} className="flex gap-2">
            <span className="text-blue-600 font-bold">✓</span>
            {item}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <div className="mt-8 flex justify-center gap-4">


        <a
          href={instructor.linkedin}
          target="_blank"
          className="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 transition"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
