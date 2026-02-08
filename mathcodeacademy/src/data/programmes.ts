import type { Programmes } from "@/types/programme";

export const programmes: Programmes = {

/* ================= AP CURRICULUM ================= */
"AP Curriculum": {
  /* ---------- AP MATHEMATICS ---------- */
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
      title: "AP Precalculus",
      slug: "ap-precalculus",
      sessions: 35,
      duration: "4 months",
      syllabusPdf: "/pdfs/syllabus/ap-precalculus.pdf",
      features: [
        "Polynomial & rational functions",
        "Exponential & logarithmic models",
        "Trigonometric foundations",
        "College Board aligned curriculum",
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

  /* ---------- AP PHYSICS ---------- */
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
      title: "AP Physics 2",
      slug: "ap-physics-2",
      sessions: 45,
      duration: "5 months",
      syllabusPdf: "/pdfs/syllabus/ap-physics-2.pdf",
      features: [
        "Fluids & thermodynamics",
        "Electricity & magnetism",
        "Optics & modern physics",
        "Conceptual + numerical rigor",
      ],
    },
    {
      title: "AP Physics C: Mechanics",
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
    {
      title: "AP Physics C: Electricity & Magnetism",
      slug: "ap-physics-c-electricity-magnetism",
      sessions: 50,
      duration: "6 months",
      syllabusPdf: "/pdfs/syllabus/ap-physics-c-em.pdf",
      features: [
        "Electrostatics",
        "Capacitors & circuits",
        "Magnetic fields & induction",
        "Calculus-based problem solving",
      ],
    },
  ],

  /* ---------- AP COMPUTER SCIENCE ---------- */
  Programming: [
    {
      title: "AP Computer Science A (Java)",
      slug: "ap-computer-science-a",
      sessions: 45,
      duration: "5 months",
      syllabusPdf: "/pdfs/syllabus/ap-computer-science-a.pdf",
      features: [
        "Object-oriented programming",
        "Arrays & ArrayLists",
        "Inheritance & polymorphism",
        "AP exam readiness",
      ],
    },
    {
      title: "AP Computer Science Principles",
      slug: "ap-computer-science-principles",
      sessions: 35,
      duration: "4 months",
      syllabusPdf: "/pdfs/syllabus/ap-computer-science-principles.pdf",
      features: [
        "Computational thinking",
        "Data & algorithms",
        "Internet & cybersecurity basics",
        "Performance task preparation",
      ],
    },
  ],
},

/* ================= US CURRICULUM ================= */
"US Curriculum": {
  /* ---------- MATH ---------- */
  Math: [
    {
      title: "Algebra I",
      slug: "algebra-1",
      sessions: 30,
      duration: "4 months",
      features: [
        "Linear equations & inequalities",
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
    {
      title: "Algebra II",
      slug: "algebra-2",
      sessions: 35,
      duration: "4 months",
      features: [
        "Quadratic & polynomial functions",
        "Exponential & logarithmic models",
        "Sequences & series",
      ],
    },
    {
      title: "Pre-Calculus",
      slug: "pre-calculus",
      sessions: 40,
      duration: "5 months",
      features: [
        "Functions & graphs",
        "Trigonometry",
        "Analytical reasoning",
      ],
    },
  ],

  /* ---------- PHYSICS / SCIENCE ---------- */
  Physics: [
    {
      title: "Physics Honors",
      slug: "middle-school-physics",
      sessions: 25,
      duration: "3 months",
      features: [
        "Motion & forces",
        "Energy basics",
        "Hands-on conceptual learning",
      ],
    },
    {
      title: "High School Physics",
      slug: "high-school-physics",
      sessions: 40,
      duration: "5 months",
      features: [
        "Kinematics & Newton’s laws",
        "Work, energy & momentum",
        "Waves & basic electricity",
      ],
    },
  ],

  /* ---------- COMPUTER SCIENCE ---------- */
  Programming: [
    {
      title: "Introduction to Programming (Python)",
      slug: "intro-to-programming-python",
      sessions: 30,
      duration: "3 months",
      features: [
        "Programming fundamentals",
        "Logic building",
        "Hands-on mini projects",
      ],
    },
    {
      title: "Data Structures & Algorithms (Foundations)",
      slug: "dsa-foundations",
      sessions: 35,
      duration: "4 months",
      features: [
        "Arrays, strings & recursion",
        "Basic searching & sorting",
        "Problem-solving mindset",
      ],
    },
    {
      title: "Object-Oriented Programming (Java / Python)",
      slug: "oop-programming",
      sessions: 35,
      duration: "4 months",
      features: [
        "Classes & objects",
        "Inheritance & polymorphism",
        "Real-world coding examples",
      ],
    },
  ],
},


/* ================= IB / IGCSE ================= */
"IB / IGCSE": {
  /* ---------- MATHEMATICS ---------- */
  Math: [
    {
      title: "IGCSE Mathematics (Core)",
      slug: "igcse-mathematics-core",
      sessions: 35,
      duration: "4 months",
      syllabusPdf: "/pdfs/syllabus/igcse-mathematics-core.pdf",
      features: [
        "Number & algebra fundamentals",
        "Basic geometry & mensuration",
        "Graphs & data handling",
      ],
    },
    {
      title: "IGCSE Mathematics (Extended)",
      slug: "igcse-mathematics-extended",
      sessions: 45,
      duration: "5 months",
      popular: true,
      syllabusPdf: "/pdfs/syllabus/igcse-mathematics-extended.pdf",
      features: [
        "Advanced algebra & functions",
        "Trigonometry & coordinate geometry",
        "Full exam preparation",
      ],
    },
    {
      title: "IB Mathematics: Analysis & Approaches (AA)",
      slug: "ib-math-aa",
      sessions: 55,
      duration: "6 months",
      syllabusPdf: "/pdfs/syllabus/ib-math-aa.pdf",
      features: [
        "Functions & calculus",
        "Proof-based problem solving",
        "HL / SL exam preparation",
      ],
    },
    {
      title: "IB Mathematics: Applications & Interpretation (AI)",
      slug: "ib-math-ai",
      sessions: 50,
      duration: "6 months",
      syllabusPdf: "/pdfs/syllabus/ib-math-ai.pdf",
      features: [
        "Statistics & probability",
        "Mathematical modeling",
        "Technology-focused approach",
      ],
    },
  ],

  /* ---------- PHYSICS ---------- */
  Physics: [
    {
      title: "IGCSE Physics",
      slug: "igcse-physics",
      sessions: 45,
      duration: "5 months",
      syllabusPdf: "/pdfs/syllabus/igcse-physics.pdf",
      features: [
        "Mechanics & thermal physics",
        "Electricity, magnetism & waves",
        "Past-paper focused numericals",
      ],
    },
    {
      title: "IB Physics",
      slug: "ib-physics",
      sessions: 55,
      duration: "6 months",
      syllabusPdf: "/pdfs/syllabus/ib-physics.pdf",
      features: [
        "Mechanics, fields & energy",
        "Experimental data analysis",
        "HL / SL exam mastery",
      ],
    },
  ],

  /* ---------- COMPUTER SCIENCE ---------- */
  Programming: [
    {
      title: "IGCSE Computer Science",
      slug: "igcse-computer-science",
      sessions: 40,
      duration: "5 months",
      syllabusPdf: "/pdfs/syllabus/igcse-computer-science.pdf",
      features: [
        "Algorithms & pseudocode",
        "Python programming fundamentals",
        "Theory + practical exam prep",
      ],
    },
    {
      title: "IB Computer Science",
      slug: "ib-computer-science",
      sessions: 50,
      duration: "6 months",
      syllabusPdf: "/pdfs/syllabus/ib-computer-science.pdf",
      features: [
        "OOP & computational thinking",
        "Case study & internal assessment",
        "HL / SL exam strategy",
      ],
    },
  ],
},


/* ================= OLYMPIADS & COMPETITIONS ================= */
Olympiads: {

  /* ---------- MATHEMATICS ---------- */
  Math: [
    {
      title: "AMC 8",
      slug: "amc-8",
      sessions: 35,
      duration: "4 months",
      popular: true,
      syllabusPdf: "/pdfs/syllabus/amc8-syllabus.pdf",
      features: [
        "Arithmetic & number sense",
        "Introductory algebra",
        "Geometry & counting",
        "Speed & accuracy training",
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
        "Algebra & functions",
        "Euclidean geometry",
        "Number theory basics",
        "AIME-oriented problem solving",
      ],
      pastPapers: [
        { year: 2020, url: "/pdfs/past-papers/amc10-2020.pdf" },
        { year: 2021, url: "/pdfs/past-papers/amc10-2021.pdf" },
      ],
    },

    {
      title: "AMC 12",
      slug: "amc-12",
      sessions: 55,
      duration: "6 months",
      syllabusPdf: "/pdfs/syllabus/amc12-syllabus.pdf",
      features: [
        "Advanced algebra & trigonometry",
        "Combinatorics & probability",
        "Precalculus concepts",
        "AIME qualification focus",
      ],
    },

    {
      title: "AIME Preparation",
      slug: "aime",
      sessions: 60,
      duration: "6 months",
      features: [
        "Integer answer techniques",
        "Advanced number theory",
        "Olympiad-level combinatorics",
        "Proof-style thinking",
      ],
    },

    {
      title: "HKIMO (Hong Kong IMO)",
      slug: "hkimo",
      sessions: 50,
      duration: "5 months",
      features: [
        "International olympiad problems",
        "Creative problem solving",
        "Geometry & number theory",
        "Competition strategy",
      ],
    },

    {
      title: "IMO / EGMO Advanced Training",
      slug: "imo-egmo",
      sessions: 80,
      duration: "9 months",
      features: [
        "Proof writing mastery",
        "Advanced number theory",
        "Euclidean & projective geometry",
        "International-level rigor",
      ],
    },
  ],

  /* ---------- PHYSICS ---------- */
  Physics: [
    {
      title: "Physics Olympiad Foundation",
      slug: "physics-olympiad-foundation",
      sessions: 40,
      duration: "5 months",
      features: [
        "Classical mechanics fundamentals",
        "Mathematical modeling",
        "Conceptual problem solving",
      ],
    },

    {
      title: "National Physics Olympiad (NSEP / INPhO)",
      slug: "inpho",
      sessions: 60,
      duration: "7 months",
      features: [
        "Advanced mechanics",
        "Electromagnetism",
        "Wave motion & optics",
        "Olympiad-style numericals",
      ],
    },

    {
      title: "IPhO Advanced Training",
      slug: "ipho",
      sessions: 80,
      duration: "9 months",
      features: [
        "Advanced electromagnetism",
        "Modern physics",
        "Experimental reasoning",
        "International olympiad problems",
      ],
    },
  ],

  /* ---------- COMPUTER SCIENCE ---------- */
  Programming: [
    {
      title: "Computational Thinking (Olympiad Track)",
      slug: "cs-olympiad-foundation",
      sessions: 35,
      duration: "4 months",
      features: [
        "Logic building",
        "Brute force strategies",
        "Algorithmic thinking",
      ],
    },

    {
      title: "CCC (Canadian Computing Competition)",
      slug: "ccc",
      sessions: 40,
      duration: "4 months",
      features: [
        "CCC Junior & Senior problems",
        "Loops, arrays & conditions",
        "Introductory algorithms",
      ],
    },

    {
      title: "ZCO Preparation",
      slug: "zco",
      sessions: 45,
      duration: "5 months",
      features: [
        "Competitive programming basics",
        "Problem solving techniques",
        "ZCO-style logic",
      ],
    },

    {
      title: "INOI Preparation",
      slug: "inoi",
      sessions: 60,
      duration: "6 months",
      features: [
        "Advanced data structures",
        "Dynamic programming",
        "Algorithmic optimizations",
      ],
    },

    {
      title: "IOI / International CS Olympiad Training",
      slug: "ioi",
      sessions: 80,
      duration: "9 months",
      features: [
        "Advanced graphs",
        "DP optimizations",
        "Greedy & divide-and-conquer",
        "IOI-level problems",
      ],
    },
  ],
},


/* ================= UNIVERSITY ENTRANCE ================= */
"University Entrance": {

  /* ---------- MATHEMATICS ---------- */
  Math: [
    {
      title: "TMUA (Test of Mathematics for University Admission)",
      slug: "tmua",
      sessions: 45,
      duration: "4 months",
      features: [
        "Advanced algebra & calculus",
        "Logical & mathematical reasoning",
        "Speed & accuracy training",
        "Cambridge, Imperial, LSE focus",
      ],
    },

    {
      title: "MAT (Oxford Mathematics Admission Test)",
      slug: "mat",
      sessions: 45,
      duration: "4 months",
      features: [
        "Oxford-style problem solving",
        "Proof-based thinking",
        "Non-routine questions",
        "Past MAT paper analysis",
      ],
    },

    {
      title: "STEP (Sixth Term Examination Paper)",
      slug: "step",
      sessions: 60,
      duration: "6 months",
      features: [
        "University-level calculus",
        "Advanced algebra & geometry",
        "STEP II & STEP III focus",
        "Cambridge admission preparation",
      ],
    },

    {
      title: "European University Maths Entrance",
      slug: "european-maths-entrance",
      sessions: 40,
      duration: "4 months",
      features: [
        "Calculus & linear algebra",
        "Problem-solving focus",
        "ETH Zurich / TU Munich style",
      ],
    },
  ],

  /* ---------- PHYSICS ---------- */
  Physics: [
    {
      title: "PAT (Physics Aptitude Test)",
      slug: "pat",
      sessions: 45,
      duration: "4 months",
      features: [
        "Advanced mechanics",
        "Electricity & waves",
        "Oxford Physics & Engineering focus",
        "Time-bound problem solving",
      ],
    },

    {
      title: "ENGAA (Engineering Admissions Assessment)",
      slug: "engaa",
      sessions: 45,
      duration: "4 months",
      features: [
        "Physics + mathematics integration",
        "Cambridge engineering focus",
        "Problem-solving under pressure",
      ],
    },

    {
      title: "NSAA Physics (Natural Sciences Admission Assessment)",
      slug: "nsaa-physics",
      sessions: 40,
      duration: "4 months",
      features: [
        "Physics aptitude assessment",
        "Cambridge Natural Sciences focus",
        "Conceptual + numerical balance",
      ],
    },
  ],

  /* ---------- COMPUTER SCIENCE ---------- */
  Programming: [
    {
      title: "CSAT / University CS Entrance Prep",
      slug: "cs-university-entrance",
      sessions: 40,
      duration: "4 months",
      features: [
        "Computational thinking",
        "Logic & problem solving",
        "Introductory algorithms",
      ],
    },

    {
      title: "Oxbridge CS Admissions Preparation",
      slug: "oxbridge-cs",
      sessions: 50,
      duration: "5 months",
      features: [
        "Problem-solving interviews",
        "Discrete mathematics",
        "Algorithmic thinking",
      ],
    },

    {
      title: "US College CS Readiness",
      slug: "us-college-cs",
      sessions: 35,
      duration: "3 months",
      features: [
        "Programming fundamentals",
        "Data structures basics",
        "AP CS & placement readiness",
      ],
    },
  ],
},

};
