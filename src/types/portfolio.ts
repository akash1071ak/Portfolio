export interface Project {
  id: string;
  title: string;
  category: 'Mobile UX/UI' | 'Design System' | 'Web Design' | 'Academic UX';
  tagline: string;
  role: string;
  timeline: string;
  overview: string;
  heroImage: string;
  problemStatement: string;
  solution: string;
  tools: string[];
  metrics: { label: string; value: string }[];
  caseStudyId?: string;
  behanceUrl?: string;
  figmaUrl?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  clientOrContext: string;
  duration: string;
  role: string;
  tools: string[];
  background: string;
  businessGoal: string;
  userProblem: string;
  researchInsights: {
    title: string;
    description: string;
    stat?: string;
  }[];
  painPoints: string[];
  personas: {
    name: string;
    role: string;
    bio: string;
    quote: string;
    goals: string[];
    frustrations: string[];
  }[];
  userJourney: {
    phase: string;
    action: string;
    thought: string;
    emotion: 'happy' | 'neutral' | 'frustrated' | 'relieved';
  }[];
  wireframeNotes: string[];
  designDecisions: {
    decision: string;
    rationale: string;
  }[];
  usabilityTesting: {
    metric: string;
    result: string;
    insight: string;
  }[];
  keyLearnings: string[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: number; // percentage 1-100
    highlight?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Academic Project';
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  score: string;
  location: string;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  skillsLearned: string[];
  badgeColor: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  year: string;
  description: string;
  tag: string;
}

export interface DesignProcessStep {
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  activities: string[];
  deliverables: string[];
  icon: string;
}
