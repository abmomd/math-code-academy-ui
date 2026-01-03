import type { Programmes } from "@/types/programme";

export const programmes: Programmes = {
  /* ================= AP CURRICULUM ================= */
  "AP Curriculum": {
    Math: [
      {
        title: "AP Calculus AB",
        slug: "ap-calculus-ab",
        sessions: 40,
        duration: "5 months",
        popular: true,
        syllabusPdf: "/pdfs/syllabus/ap-calculus-ab.pdf",
        features: [
          "Limits & continuity",
          "Derivatives & applications",
          "Integrals & area concepts",
          "AP-style MCQs & FRQs",
        ],
      },
      {
        title: "AP Calculus BC",
        slug: "ap-calculus-bc",
        sessions: 60,
        duration: "7 months",
        syllabusPdf: "/pdfs/syllabus/ap-calculus-bc.pdf",
        features: [
          "Series & sequences",
          "Advanced integration",
          "Parametric & polar functions",
          "Full AP exam prep",
        ],
      },
      {
        title: "AP Statistics",
        slug: "ap-statistics",
        sessions: 45,
        duration: "5 months",
        syllabusPdf: "/pdfs/syllabus/ap-statistics.pdf",
        features: [
          "Data analysis",
          "Probability & distributions",
          "Inferential statistics",
          "Exam-focused practice",
        ],
      },
    ],

    Physics: [
      {
        title: "AP Physics 1",
        slug: "ap-physics-1",
        sessions: 45,
        duration: "5 months",
        syllabusPdf: "/pdfs/syllabus/ap-physics-1.pdf",
        features: [
          "Kinematics & dynamics",
          "Energy & momentum",
          "Rotational motion",
          "AP exam strategies",
        ],
      },
      {
        title: "AP Physics C – Mechanics",
        slug: "ap-physics-c-mechanics",
        sessions: 50,
        duration: "6 months",
        syllabusPdf: "/pdfs/syllabus/ap-physics-c-mechanics.pdf",
        features: [
          "Calculus-based mechanics",
          "Advanced Newtonian systems",
          "FRQ & MCQ drills",
        ],
      },
    ],
  },

  /* ================= US CURRICULUM ================= */
  "US Curriculum": {
    Math: [
      {
        title: "Algebra I",
        slug: "algebra-1",
        sessions: 30,
        duration: "4 months",
        features: [
          "Linear equations",
          "Polynomials",
          "Graphs & word problems",
        ],
      },
      {
        title: "Geometry",
        slug: "geometry",
        sessions: 35,
        duration: "4 months",
        features: [
          "Proof techniques",
          "Triangles & circles",
          "Coordinate geometry",
        ],
      },
    ],
  },

  /* ================= IGCSE ================= */
  IGCSE: {
    Math: [
      {
        title: "IGCSE Mathematics",
        slug: "igcse-mathematics",
        sessions: 40,
        duration: "5 months",
        popular: true,
        syllabusPdf: "/pdfs/syllabus/igcse-mathematics.pdf",
        features: [
          "Core & extended syllabus",
          "Exam-style questions",
          "Accuracy & speed",
        ],
      },
    ],

    Physics: [
      {
        title: "IGCSE Physics",
        slug: "igcse-physics",
        sessions: 40,
        duration: "5 months",
        syllabusPdf: "/pdfs/syllabus/igcse-physics.pdf",
        features: [
          "Mechanics",
          "Electricity & waves",
          "Exam-oriented prep",
        ],
      },
    ],
  },

  /* ================= OLYMPIADS ================= */
  Olympiads: {
    Math: [
      {
        title: "AMC 8",
        slug: "amc-8",
        sessions: 35,
        duration: "4 months",
        popular: true,
        syllabusPdf: "/pdfs/syllabus/amc8-syllabus.pdf",
        features: [
          "Geometry",
          "Number Theory",
          "Combinatorics",
          "Algebra",
        ],
        pastPapers: [
          { year: 2021, url: "/pdfs/past-papers/amc8-2021.pdf" },
          { year: 2022, url: "/pdfs/past-papers/amc8-2022.pdf" },
          { year: 2023, url: "/pdfs/past-papers/amc8-2023.pdf" },
        ],
      },
      {
        title: "AMC 10",
        slug: "amc-10",
        sessions: 45,
        duration: "5 months",
        syllabusPdf: "/pdfs/syllabus/amc10-syllabus.pdf",
        features: [
          "Geometry",
          "Algebra",
          "Number Theory",
          "Combinatorics",
          "Statistics",
        ],
        pastPapers: [
          { year: 2020, url: "/pdfs/past-papers/amc10-2020.pdf" },
          { year: 2021, url: "/pdfs/past-papers/amc10-2021.pdf" },
        ],
      },
    ],
  },

  /* ================= UNIVERSITY ENTRANCE ================= */
  "University Entrance": {
    Math: [
      {
        title: "TMUA",
        slug: "tmua",
        sessions: 45,
        duration: "4 months",
        features: [
          "Advanced problem solving",
          "UK university focus",
        ],
      },
      {
        title: "STEP",
        slug: "step",
        sessions: 60,
        duration: "6 months",
        features: [
          "University-level calculus",
          "STEP paper mastery",
        ],
      },
    ],
  },
};
