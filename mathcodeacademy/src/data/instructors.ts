import { Instructor } from "@/types/instructor";

export const instructors: Instructor[] = [
  {
    id: "fatema-bhatt",
    name: "Fatema Bhatt",
    role: "Founder & Lead Instructor",
    image: "/images/instructors/fatema.jpeg",
    bio: "AMC 8/10, TMUA/STEP/MAT, Math Olympiads",

    experience: {
      years: 4,
      highlights: [
        "Olympiad mentor",
        "Math competition coach",
        "1-on-1 tutoring expert",
      ],
    },

    linkedin: "https://www.linkedin.com/in/fatema-bhatt-172154196/",

  },

  {
    id: "ashraf-bhura",
    name: "Ashraf Bhura",
    role: "Co-Founder",
    image: "/images/instructors/ashraf.jpg",
    bio: "AP Physics and Programming",

    experience: {
      years: 4,
      highlights: [
        "Software engineer",
        "Programming and Physics Competition Coach"

      ],
    },

    linkedin: "https://www.linkedin.com/in/muhammed-ashraf-bhura-099a95200/",

  },
];
