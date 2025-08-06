import { Project, Experience, Education, Skill, Testimonial, Service, SocialLink } from '@/types';

export const personalInfo = {
  name: 'Djiento Abanga',
  title: 'Développeur Full-Stack',
  subtitle: 'React • Node.js • Python • MySql',
  location: 'Cotonou, Bénin',
  email: 'abangadj@gmail.com',
  phone: '+229 0198 439 292',
  availability: 'Disponible pour nouveaux projets',
  bio: `Développeur full-stack passionné basé au Bénin, je crée des solutions web et mobile modernes pour des clients internationaux. Avec plus de 5 ans d'expérience, je maîtrise l'écosystème JavaScript/TypeScript et les technologies cloud modernes.`,
  avatar: '/images/avatar.jpg',
  picturProfil:'/images/Profil_picture.png',
  calendlyUrl: 'https://calendly.com/djientoabanga',
};

export const skills: Skill[] = [
  { name: 'React', level: 'Expert', category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 'Expert', category: 'frontend', icon: '▲' },
  { name: 'TypeScript', level: 'Expert', category: 'frontend', icon: '🔷' },
  { name: 'Tailwind CSS', level: 'Expert', category: 'frontend', icon: '🎨' },
  { name: 'Node.js', level: 'Expert', category: 'backend', icon: '🟢' },
  { name: 'Express.js', level: 'Expert', category: 'backend', icon: '🚀' },
  { name: 'MongoDB', level: 'Avancé', category: 'database', icon: '🍃' },
  { name: 'PostgreSQL', level: 'Avancé', category: 'database', icon: '🐘' },
  { name: 'AWS', level: 'Avancé', category: 'tools', icon: '☁️' },
  { name: 'Docker', level: 'Avancé', category: 'tools', icon: '🐳' },
  { name: 'Git', level: 'Expert', category: 'tools', icon: '📝' },
  { name: 'Communication', level: 'Expert', category: 'soft', icon: '💬' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp International',
    position: 'Senior Full-Stack Developer',
    startDate: '2020-01',
    description: 'Développement d\'applications web complexes pour des clients européens et nord-américains. Lead technique sur plusieurs projets critiques.',
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
    location: 'Remote - Cotonou, Bénin',
  },
  {
    id: '2',
    company: 'Digital Solutions Africa',
    position: 'Full-Stack Developer',
    startDate: '2020-03',
    endDate: '2021-12',
    description: 'Création de solutions digitales pour des entreprises africaines. Développement d\'APIs robustes et d\'interfaces utilisateur modernes.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
    location: 'Cotonou, Bénin',
  },
  {
    id: '3',
    company: 'StartupLab Benin',
    position: 'Junior Developer',
    startDate: '2019-01',
    endDate: '2020-02',
    description: 'Développement de MVPs pour des startups locales. Apprentissage des bonnes pratiques et méthodologies agiles.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MySQL'],
    location: 'Cotonou, Bénin',
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Université d\'Abomey-Calavi',
    degree: 'Licence',
    field: 'Informatique et Télécommunications',
    startDate: '2016-09',
    endDate: '2019-07',
    location: 'Abomey-Calavi, Bénin',
    description: 'Formation en développement logiciel, réseaux et bases de données.',
  },
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce complète avec paiement mobile money',
    longDescription: 'Développement d\'une plateforme e-commerce moderne intégrant les solutions de paiement mobile money populaires en Afrique de l\'Ouest.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Mobile Money API'],
    category: 'fullstack',
    demoUrl: 'https://demo.example.com',
    githubUrl: 'https://github.com/example/ecommerce',
    featured: true,
    year: 2024,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative',
    longDescription: 'Application web responsive pour la gestion de projets et tâches en équipe avec notifications en temps réel.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Express.js', 'Socket.io', 'PostgreSQL'],
    category: 'web',
    demoUrl: 'https://tasks.example.com',
    githubUrl: 'https://github.com/example/taskapp',
    featured: true,
    year: 2023,
  },
  {
    id: '3',
    title: 'Mobile Banking App',
    description: 'Application mobile de services bancaires',
    longDescription: 'Application mobile sécurisée pour services bancaires avec authentification biométrique et transactions en temps réel.',
    image: '/images/projects/banking.jpg',
    technologies: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
    category: 'mobile',
    demoUrl: 'https://banking.example.com',
    featured: true,
    year: 2023,
  },
  {
    id: '4',
    title: 'Weather API',
    description: 'API météorologique pour l\'Afrique de l\'Ouest',
    longDescription: 'API RESTful fournissant des données météorologiques précises pour les pays d\'Afrique de l\'Ouest.',
    image: '/images/projects/weather.jpg',
    technologies: ['Node.js', 'Express.js', 'Redis', 'Docker'],
    category: 'api',
    githubUrl: 'https://github.com/example/weather-api',
    featured: false,
    year: 2022,
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Développement Web',
    description: 'Sites web modernes et applications web performantes',
    features: [
      'Sites vitrine et portfolios',
      'Applications web complexes',
      'E-commerce et marketplaces',
      'Progressive Web Apps (PWA)',
    ],
    priceRange: '500€ - 5000€',
    duration: '2-8 semaines',
    icon: '🌐',
  },
  {
    id: '2',
    title: 'Applications Mobile',
    description: 'Applications mobiles natives et cross-platform',
    features: [
      'Applications React Native',
      'Intégration APIs natives',
      'Publication sur stores',
      'Maintenance et mises à jour',
    ],
    priceRange: '1000€ - 8000€',
    duration: '4-12 semaines',
    icon: '📱',
  },
  {
    id: '3',
    title: 'Consulting Technique',
    description: 'Conseil et audit de vos projets techniques',
    features: [
      'Audit de code et architecture',
      'Optimisation des performances',
      'Choix technologiques',
      'Formation équipes',
    ],
    priceRange: '100€ - 200€/jour',
    duration: 'Flexible',
    icon: '💡',
  },
  {
    id: '4',
    title: 'Maintenance & Support',
    description: 'Maintenance continue de vos applications',
    features: [
      'Corrections de bugs',
      'Mises à jour sécurité',
      'Nouvelles fonctionnalités',
      'Support technique',
    ],
    priceRange: '200€ - 1000€/mois',
    duration: 'Continu',
    icon: '🔧',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Marie Dubois',
    position: 'CEO',
    company: 'TechStart Paris',
    content: 'Jean-Baptiste a développé notre plateforme e-commerce avec un professionnalisme exemplaire. Délais respectés, code de qualité et excellente communication.',
    avatar: '/images/testimonials/marie.jpg',
    rating: 5,
    platform: 'linkedin',
  },
  {
    id: '2',
    name: 'David Johnson',
    position: 'CTO',
    company: 'InnovateTech USA',
    content: 'Excellent développeur ! Il a su comprendre nos besoins complexes et livrer une solution robuste. Je recommande vivement ses services.',
    avatar: '/images/testimonials/david.jpg',
    rating: 5,
    platform: 'upwork',
  },
  {
    id: '3',
    name: 'Amina Hassan',
    position: 'Product Manager',
    company: 'AfriTech Solutions',
    content: 'Collaboration parfaite sur notre application mobile. Jean-Baptiste maîtrise parfaitement les technologies modernes et livre un travail de qualité.',
    avatar: '/images/testimonials/amina.jpg',
    rating: 5,
    platform: 'direct',
  },
];

export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/djiento',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/djiento',
    icon: 'linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/djiento',
    icon: 'twitter',
  },
  {
    platform: 'Email',
    url: 'abanagdj@gmail.com',
    icon: 'mail',
  },
];

