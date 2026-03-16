export interface ProjectTranslations {
  title: string;
  description: string;
  fullDescription: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string;
    backend: string;
    database: string;
    infrastructure: string;
  };
  decisions: {
    question: string;
    answer: string;
  }[];
  challenges: {
    title: string;
    description: string;
  }[];
  learnings: string[];
}

export interface Project {
  id: string;
  category: "Full Stack" | "Security" | "Backend" | "Frontend";
  tags: string[];
  image: string;
  link?: string;
  github?: string;
  en: ProjectTranslations;
  es: ProjectTranslations;
}
