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
        price: 29999,
        popular: true,
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
        price: 39999,
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
        price: 32999,
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
        price: 32999,
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
        price: 34999,
        features: [
          "Calculus-based mechanics",
          "Advanced Newtonian systems",
          "FRQ & MCQ drills",
        ],
      },
      {
        title: "AP Physics C – E&M",
        slug: "ap-physics-c-em",
        sessions: 50,
        duration: "6 months",
        price: 34999,
        features: [
          "Electrostatics & circuits",
          "Magnetism & induction",
          "AP-level numerical rigor",
        ],
      },
    ],

    Programming: [
      {
        title: "AP Computer Science A (Java)",
        slug: "ap-computer-science-a",
        sessions: 45,
        duration: "5 months",
        price: 32999,
        features: [
          "Object-oriented programming",
          "Arrays & ArrayLists",
          "Sorting & searching",
          "AP exam readiness",
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
        price: 19999,
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
        price: 21999,
        features: [
          "Proof techniques",
          "Triangles & circles",
          "Coordinate geometry",
        ],
      },
      {
        title: "Pre-Calculus",
        slug: "pre-calculus",
        sessions: 45,
        duration: "5 months",
        price: 27999,
        features: [
          "Functions",
          "Trigonometry",
          "Analytical reasoning",
        ],
      },
    ],

    Programming: [
      {
        title: "Intro to Programming (Python)",
        slug: "intro-to-programming-python",
        sessions: 30,
        duration: "3 months",
        price: 19999,
        features: [
          "Programming basics",
          "Logic building",
          "Hands-on projects",
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
        price: 27999,
        popular: true,
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
        price: 28999,
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
        price: 29999,
        popular: true,
        features: [
          "Problem-solving techniques",
          "Past paper analysis",
          "Speed training",
        ],
      },
      {
        title: "AMC 10",
        slug: "amc-10",
        sessions: 45,
        duration: "5 months",
        price: 34999,
        features: [
          "Advanced algebra & geometry",
          "Contest strategies",
          "AIME readiness",
        ],
      },
      {
        title: "IMO / HKIMO Training",
        slug: "imo-hkimo",
        sessions: 80,
        duration: "10 months",
        price: 69999,
        features: [
          "Proof techniques",
          "Number theory",
          "International rigor",
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
        price: 44999,
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
        price: 54999,
        features: [
          "University-level calculus",
          "STEP paper mastery",
        ],
      },
    ],

    Physics: [
      {
        title: "PAT",
        slug: "pat",
        sessions: 45,
        duration: "4 months",
        price: 44999,
        features: [
          "Physics aptitude problems",
          "Oxford/Cambridge prep",
        ],
      },
    ],
  },
};
