export type Subject = "Math" | "Physics" | "Programming";

export interface PastPaper {
  year: number;
  url: string;
}

export interface Programme {
  title: string;
  slug: string;
  sessions: number;
  duration: string;
  popular?: boolean;
  features: string[];

  /** Optional syllabus PDF */
  syllabusPdf?: string;

  /** Only for Olympiads (optional) */
  pastPapers?: PastPaper[];
}

/**
 * A category can contain ANY subset of subjects
 */
export type ProgrammeCategory = Partial<
  Record<Subject, Programme[]>
>;

/**
 * Full programmes structure
 */
export type Programmes = Record<string, ProgrammeCategory>;
