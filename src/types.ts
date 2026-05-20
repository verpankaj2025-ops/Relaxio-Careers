export interface JobOpening {
  id: string;
  title: string;
  salary: string;
  experience: string;
  requirements: string[];
  description: string;
  tags: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  iconName: string;
}

export interface ApplicationInput {
  name: string;
  phone: string;
  age: string;
  experience: string;
  role: string;
  city: string;
  message?: string;
}
