import { Programmes } from "@/types/programme";

export const programmes: Programmes = {
  "AP Courses": {
    Math: [
      {
        title: "AP Calculus AB – Foundation",
        sessions: 40,
        duration: "5 months",
        price: 29999,
        features: [
          "Limits & continuity",
          "Derivatives mastery",
          "Concept-based problem solving",
          "Weekly AP-style quizzes"
        ]
      },
      {
        title: "AP Calculus AB – Mastery",
        sessions: 80,
        duration: "10 months",
        price: 54999,
        popular: true,
        features: [
          "Everything in Foundation",
          "Advanced integration",
          "FRQ deep dives",
          "Mock AP exams"
        ]
      }
    ],

    Physics: [
      {
        title: "AP Physics 1",
        sessions: 70,
        duration: "9 months",
        price: 57999,
        features: [
          "Kinematics & Newtonian mechanics",
          "Work, energy & power",
          "Rotational motion",
          "AP numerical problem solving"
        ]
      }
    ],

    Programming: [
      {
        title: "AP Computer Science A (Java)",
        sessions: 70,
        duration: "9 months",
        price: 57999,
        features: [
          "Java fundamentals",
          "Object-Oriented Programming",
          "AP CSA coding patterns"
        ]
      }
    ]
  },

  "Olympiads": {
    Math: [
      {
        title: "AMC 10 / AMC 12",
        sessions: 70,
        duration: "9 months",
        price: 54999,
        popular: true,
        features: [
          "Advanced algebra & geometry",
          "Combinatorics & number theory",
          "Timed contest practice",
          "AIME-style problem solving"
        ]
      }
    ]
  },

  "US Curriculum": {
    Math: [
      {
        title: "High School Algebra & Geometry",
        sessions: 70,
        duration: "9 months",
        price: 44999,
        features: [
          "Algebra I & II",
          "Coordinate & Euclidean geometry",
          "School-aligned preparation"
        ]
      }
    ]
  },

  "UK Curriculum": {
    Math: [
      {
        title: "IB Mathematics (AA / AI)",
        sessions: 80,
        duration: "10 months",
        price: 64999,
        popular: true,
        features: [
          "SL & HL syllabus coverage",
          "Internal assessment guidance",
          "Exam-focused problem solving"
        ]
      }
    ]
  }
};
