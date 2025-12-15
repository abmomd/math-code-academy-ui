export type Subject = "Math" | "Physics" | "Programming";

export interface Programme {
  title: string;
  sessions: number;
  duration: string;
  price: number;
  features: string[];
  popular?: boolean; // ✅ optional
}

export type ProgrammeCategory = {
  [key in Subject]?: Programme[];
};

export type Programmes = {
  [category: string]: ProgrammeCategory;
};
