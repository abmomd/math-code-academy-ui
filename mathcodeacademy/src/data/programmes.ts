export const programmes = {
  /* =====================================================
     AP CURRICULUM
  ===================================================== */
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
          "Limits, continuity & derivatives",
          "Applications of derivatives",
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
          "Advanced integration techniques",
          "Sequences & series",
          "Parametric & polar functions",
          "Full AP exam preparation",
        ],
      },
      {
        title: "AP Statistics",
        slug: "ap-statistics",
        sessions: 45,
        duration: "5 months",
        price: 32999,
        features: [
          "Data analysis & interpretation",
          "Probability & distributions",
          "Inferential statistics",
          "AP exam practice sets",
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
          "Work, energy & power",
          "Waves & rotational motion",
          "AP-style problem solving",
        ],
      },
      {
        title: "AP Physics 2",
        slug: "ap-physics-2",
        sessions: 45,
        duration: "5 months",
        price: 32999,
        features: [
          "Thermodynamics",
          "Electricity & magnetism",
          "Optics & modern physics",
          "Conceptual + numerical mastery",
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
          "Exam-focused strategies",
        ],
      },
      {
        title: "AP Physics C – Electricity & Magnetism",
        slug: "ap-physics-c-em",
        sessions: 50,
        duration: "6 months",
        price: 34999,
        features: [
          "Electrostatics & circuits",
          "Magnetic fields & induction",
          "Maxwell concepts",
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
          "Searching & sorting",
          "AP exam readiness",
        ],
      },
      {
        title: "AP Computer Science Principles",
        slug: "ap-computer-science-principles",
        sessions: 35,
        duration: "4 months",
        price: 24999,
        features: [
          "Computational thinking",
          "Programming fundamentals",
          "Data & algorithms",
          "Performance task guidance",
        ],
      },
    ],
  },

  /* =====================================================
     US SCHOOL CURRICULUM
  ===================================================== */
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
          "Graph interpretation",
          "School exam preparation",
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
          "Problem-solving focus",
        ],
      },
      {
        title: "Algebra II",
        slug: "algebra-2",
        sessions: 40,
        duration: "5 months",
        price: 24999,
        features: [
          "Quadratic & exponential functions",
          "Sequences & series",
          "Advanced algebraic methods",
        ],
      },
      {
        title: "Pre-Calculus",
        slug: "pre-calculus",
        sessions: 45,
        duration: "5 months",
        price: 27999,
        features: [
          "Functions & transformations",
          "Trigonometry",
          "Analytical thinking",
        ],
      },
    ],

    Programming: [
      {
        title: "Introduction to Programming (Python)",
        slug: "intro-to-programming-python",
        sessions: 30,
        duration: "3 months",
        price: 19999,
        features: [
          "Programming basics",
          "Logic & problem solving",
          "Hands-on coding projects",
        ],
      },
      {
        title: "Data Structures (High School)",
        slug: "data-structures-high-school",
        sessions: 40,
        duration: "4 months",
        price: 29999,
        features: [
          "Arrays, stacks & queues",
          "Recursion basics",
          "Algorithmic thinking",
        ],
      },
    ],
  },

  /* =====================================================
     IGCSE
  ===================================================== */
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
          "Concept clarity & accuracy",
        ],
      },
      {
        title: "IGCSE Additional Mathematics",
        slug: "igcse-additional-mathematics",
        sessions: 45,
        duration: "5 months",
        price: 29999,
        features: [
          "Advanced algebra",
          "Trigonometry",
          "Pre-calculus foundations",
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
          "Mechanics & electricity",
          "Waves & thermal physics",
          "Exam-focused preparation",
        ],
      },
    ],

    Programming: [
      {
        title: "IGCSE Computer Science",
        slug: "igcse-computer-science",
        sessions: 40,
        duration: "5 months",
        price: 28999,
        features: [
          "Programming fundamentals",
          "Algorithms & logic",
          "Paper 1 & Paper 2 prep",
        ],
      },
    ],
  },

  /* =====================================================
     IB BOARD
  ===================================================== */
  "IB Board": {
    Math: [
      {
        title: "IB Math AA SL",
        slug: "ib-math-aa-sl",
        sessions: 45,
        duration: "6 months",
        price: 34999,
        features: [
          "Conceptual understanding",
          "Problem-solving approach",
          "IA & exam support",
        ],
      },
      {
        title: "IB Math AA HL",
        slug: "ib-math-aa-hl",
        sessions: 60,
        duration: "8 months",
        price: 44999,
        features: [
          "Advanced calculus",
          "Proof-based reasoning",
          "HL exam mastery",
        ],
      },
      {
        title: "IB Math AI SL",
        slug: "ib-math-ai-sl",
        sessions: 40,
        duration: "6 months",
        price: 32999,
        features: [
          "Statistics & modeling",
          "Technology-based learning",
          "IA guidance",
        ],
      },
      {
        title: "IB Math AI HL",
        slug: "ib-math-ai-hl",
        sessions: 55,
        duration: "8 months",
        price: 42999,
        features: [
          "Advanced statistics",
          "Real-world modeling",
          "HL IA & exams",
        ],
      },
    ],

    Physics: [
      {
        title: "IB Physics SL / HL",
        slug: "ib-physics",
        sessions: 60,
        duration: "8 months",
        price: 44999,
        features: [
          "Core + optional topics",
          "IA & exam preparation",
          "Numerical & conceptual rigor",
        ],
      },
    ],
  },

  /* =====================================================
     OLYMPIADS & COMPETITIONS
  ===================================================== */
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
          "Past AMC analysis",
          "Speed & accuracy training",
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
          "Contest-level strategies",
          "AIME readiness",
        ],
      },
      {
        title: "AMC 12",
        slug: "amc-12",
        sessions: 50,
        duration: "6 months",
        price: 39999,
        features: [
          "Higher-level problem solving",
          "Pre-calculus & combinatorics",
          "AIME qualification focus",
        ],
      },
      {
        title: "IMO / HKIMO Advanced Training",
        slug: "imo-hkimo",
        sessions: 80,
        duration: "10 months",
        price: 69999,
        features: [
          "Proof techniques",
          "Number theory & combinatorics",
          "International-level rigor",
        ],
      },
    ],
  },

  /* =====================================================
     UNIVERSITY ENTRANCE EXAMS
  ===================================================== */
  "University Entrance": {
    Math: [
      {
        title: "TMUA Preparation",
        slug: "tmua",
        sessions: 45,
        duration: "4 months",
        price: 44999,
        features: [
          "Advanced problem solving",
          "Speed & accuracy drills",
          "UK university focus",
        ],
      },
      {
        title: "MAT Preparation",
        slug: "mat",
        sessions: 45,
        duration: "4 months",
        price: 44999,
        features: [
          "Oxford-style problems",
          "Logical reasoning",
          "Exam techniques",
        ],
      },
      {
        title: "STEP Preparation",
        slug: "step",
        sessions: 60,
        duration: "6 months",
        price: 54999,
        features: [
          "Advanced calculus",
          "University-level problems",
          "STEP exam mastery",
        ],
      },
    ],

    Physics: [
      {
        title: "PAT (Physics Aptitude Test)",
        slug: "pat",
        sessions: 45,
        duration: "4 months",
        price: 44999,
        features: [
          "Advanced mechanics",
          "Problem-solving speed",
          "Oxford/Cambridge prep",
        ],
      },
    ],
  },
};
