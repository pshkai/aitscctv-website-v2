export type Locale = 'th' | 'en';
export type Copy = Record<Locale, string>;
export const bi = (th: string, en: string): Copy => ({ th, en });
export interface Section {
  title: Copy;
  body: Copy;
}
export interface FAQ {
  question: Copy;
  answer: Copy;
}
export interface ContentRecord {
  slug: string;
  title: Copy;
  summary: Copy;
  sections: Section[];
  sources: string[];
}
export interface Service extends ContentRecord {
  number: string;
  scope: Copy[];
  considerations: Copy[];
  projects: string[];
  resource: string;
  faq: FAQ[];
}
export interface Project extends ContentRecord {
  service: string;
  image: string;
  alt: Copy;
  gallery: string[];
  environment: Copy;
  technologies: string[];
}
export interface Industry extends ContentRecord {
  services: string[];
  project: string;
}
export interface Article extends ContentRecord {
  service: string;
}
export interface Company {
  name: Copy;
  founded: number;
  address: Copy;
  phone: string;
  mobile: string;
  email: string;
  line: string;
  story: Copy;
}
export interface Support {
  introduction: Copy;
  warranty: Copy;
  preparation: Copy[];
}
