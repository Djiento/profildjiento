export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'fullstack' | 'api';
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: number;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  location: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  location: string;
  description?: string;
}

export interface Skill {
  name: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Expert';
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'soft';
  icon?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
  platform: 'linkedin' | 'upwork' | 'fiverr' | 'WhatsApp';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  duration: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget?: string;
  timeline?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

