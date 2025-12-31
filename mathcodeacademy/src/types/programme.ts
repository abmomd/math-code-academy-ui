export type Subject = "Math" | "Physics" | "Programming";

export interface Programme {
  title: string;
  slug: string;
  sessions: number;
  duration: string;
  price: number;
  popular?: boolean;
  features: string[];
}

/**
 * A category can contain ANY subset of subjects
 * Example:
 *  - AP Curriculum → Math, Physics, Programming
 *  - Olympiads → Math only
 */
export type ProgrammeCategory = Partial<
  Record<Subject, Programme[]>
>;

/**
 * Full programmes structure
 */
export type Programmes = Record<
  string,
  ProgrammeCategory
>;
