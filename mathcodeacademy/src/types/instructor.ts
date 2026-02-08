export interface Instructor {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;

  experience: {
    years: number;
    highlights: string[];
  };

  linkedin: string;
}
