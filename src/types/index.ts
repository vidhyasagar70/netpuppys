export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  id: string;
  value: string;
  numberValue: number;
  suffix?: string;
  label: string;
  description: string;
  tag: string;
}

export interface AcademicProgram {
  id: string;
  code: string;
  title: string;
  grades: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface Pillar {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Facility {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  size?: string;
}

export interface StudentLifeActivity {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  stats?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  relation: string;
  year?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
