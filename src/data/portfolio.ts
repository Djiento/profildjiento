import { Project, Experience, Education, Skill, Testimonial, Service, SocialLink } from '@/types';



export const personalInfo = {
  name: 'Djiento Abanga',
  title: 'Développeur Full-Stack',
  subtitle: 'React • Node.js • Python • MySql',
  location: 'Cotonou, Bénin',
  email: 'abangadj@gmail.com',
  phone: '+229 0198 439 292',
  availability: 'Disponible pour nouveaux projets',
  bio: `Développeur full-stack passionné basé au Bénin, je crée des solutions 
  web et mobile modernes pour des clients internationaux. Avec plus de 12 ans d'expérience, 
  je maîtrise l'écosystème JavaScript/TypeScript et Mobil development et les technologies cloud modernes.`,
  avatar: '/images/avatar.jpg',
  picturProfil:'/images/Profil_picture.png',
  calendlyUrl: 'https://calendly.com/abangadj/30min',
};

export const skills: Skill[] = [
  { name: 'React', level: 'Expert', category: 'frontend', icon: '⚛️' },
  { name: 'Next.js', level: 'Expert', category: 'frontend', icon: '▲' },
  { name: 'TypeScript', level: 'Expert', category: 'frontend', icon: '🔷' },
  { name: 'Node.js', level: 'Expert', category: 'backend', icon: '🟢' },
  { name: 'Express.js', level: 'Expert', category: 'backend', icon: '🚀' },
  { name: 'Python', level: 'Expert', category: 'backend', icon: '🐍' },
  { name: 'MySQL', level: 'Avancé', category: 'database', icon: '🐬' },
  { name: 'PostgreSQL', level: 'Avancé', category: 'database', icon: '🐘' },
  { name: 'SQLite', level: 'Expert', category: 'database', icon: '🪶' },
  { name: 'AWS', level: 'Avancé', category: 'tools', icon: '☁️' },
  { name: 'Docker', level: 'Avancé', category: 'tools', icon: '🐳' },
  { name: 'Git', level: 'Expert', category: 'tools', icon: '📝' },
  { name: 'WordPress', level: 'Expert', category: 'soft', icon: '🌐' },
  { name: 'PrestaShop', level: 'Expert', category: 'soft', icon: '🐽' },
  { name: 'Strapi', level: 'Expert', category: 'soft', icon: '🌆' },
];

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'TechCorp International',
    position: 'Senior Full-Stack Developer',
    startDate: '2020-01',
    description: 'Développement d\'applications web complexes pour des clients européens et nord-américains. Lead technique sur plusieurs projets critiques.',
    technologies: ['React', 'Node.js', 'Django', 'Hostinger', 'MySql'],
    location: 'Remote - Cotonou, Bénin',
  },
  {
    id: '2',
    company: 'Digital Solutions Africa',
    position: 'Full-Stack Developer',
    startDate: '2017-03',
    endDate: '2019-12',
    description: 'Création de solutions digitales pour des entreprises africaines. Développement d\'APIs robustes et d\'interfaces utilisateur modernes.',
    technologies: ['React', 'Express.js', 'PostgreSQL', 'Docker'],
    location: 'Cotonou, Bénin',
  },
  {
    id: '3',
    company: 'StartupLab Benin',
    position: 'Junior Developer',
    startDate: '2015-01',
    endDate: '2017-02',
    description: 'Développement de MVPs pour des startups locales. Apprentissage des bonnes pratiques et méthodologies agiles.',
    technologies: ['JavaScript', 'React', 'Node.js', 'MySQL'],
    location: 'Cotonou, Bénin',
  },
];

export const education: Education[] = [
  {
    id: '1',
    institution: 'Université CERCO',
    degree: 'Licence',
    field: 'Informatique de Gestion',
    startDate: '2012-09',
    endDate: '2014-07',
    location: 'Cotonou, Bénin',
    description: 'Formation en développement logiciel, et bases de données.',
  },
];

export const projects: Project[] = [

  {
    id: '1',
    title: 'ONG AFRBD',
    description: 'Site Web de L’ONG Association des Femmes Rurales de Batangafo pour le Développement',
    longDescription: 'L’ONG Association des Femmes Rurales de Batangafo pour le Développement s’engage à : Améliorer les conditions de vie des personnes vulnérables ; promouvoir le concept genre et l’émancipation de la femme ',
    image: '/images/projects/ong-afrbd.png',
    technologies: ['WordPress', 'Elementor', 'Hostinger'],
    category: 'web',
    demoUrl: 'https://ong-afrbd.org',
    featured: true,
    year: 2025,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Application de gestion de tâches collaborative',
    longDescription: 'Application web responsive pour la gestion de projets et tâches en équipe avec notifications en temps réel.',
    image: '/images/projects/taskapp.jpg',
    technologies: ['Kotlin', 'Jetpack Compose', 'Google Play'],
    category: 'mobile',
    githubUrl: 'https://github.com/Djiento',
    featured: true,
    year: 2023,
  },
  {
    id: '3',
    title: 'E-commerce Platform',
    description: 'Plateforme e-commerce complète avec paiement mobile money',
    longDescription: 'Développement d\'une plateforme e-commerce moderne intégrant les solutions de paiement mobile money populaires en Afrique de l\'Ouest.',
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe', 'Mobile Money API'],
    category: 'fullstack',
    demoUrl: 'https://primeurmarket.com',
    githubUrl: 'https://github.com/Djiento',
    featured: true,
    year: 2024,
  },
  {
    id: '4',
    title: 'Weather API',
    description: 'API météorologique pour l\'Afrique de l\'Ouest',
    longDescription: 'API RESTful fournissant des données météorologiques précises pour les pays d\'Afrique de l\'Ouest.',
    image: '/images/projects/weather.jpg',
    technologies: ['Node.js', 'Express.js', 'Redis', 'Docker'],
    category: 'api',
    githubUrl: 'https://github.com/Djiento',
    featured: false,
    year: 2025,
  },
{
  id: '5',
  title: 'ChatSync',
  description: 'Plateformee e-commerce complète avec systeme de paiement',
  longDescription: 'Plateformee e-commerce complète avec paiement mobile money',
  image: '/images/projects/chatsync.png',
  technologies: ['Next.js", "Socket.IO", "MongoDB'],
  category: 'fullstack',
  demoUrl: 'https://chatsync.vercel.app',
  githubUrl: 'https://github.com/Djiento',
  featured: true,
  year: 2024,
},
{
  id: '6',
  title: 'Domaine des Beguineries',
  description: 'Site de vente de vin',
  longDescription: 'Le domaine est tourné vers le développement durable pour produire un vin biologique de qualité et laisser une terre vivante aux générations futures.',
  image: '/images/projects/domainedesbeguineries.jpg',
  technologies: ['Django', 'SqlLite'],
  category: 'fullstack',
  demoUrl: 'https://domainedesbeguineries.com',
  githubUrl: 'https://github.com/Djiento',
  featured: true,
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
    content: 'Mr Djiento a développé notre plateforme e-commerce avec un professionnalisme exemplaire. Délais respectés, code de qualité et excellente communication.',
    avatar: '/images/testimonials/marie.jpg',
    rating: 4.5,
    platform: 'linkedin',
  },
  {
    id: '2',
    name: 'NINGA-WONG K. Marie Élise',
    position: 'Directrice Nationale exécutive',
    company: 'ONG AFRBD',
    content: 'Excellent développeur ! Il a su comprendre nos besoins complexes et livrer une solution robuste. Je recommande vivement ses services.',
    avatar: '/images/testimonials/Marieelise.jpg',
    rating: 4,
    platform: 'WhatsApp',
  },
  {
    id: '3',
    name: 'Amina Hassan',
    position: 'Product Manager',
    company: 'AfriTech Solutions',
    content: 'Collaboration parfaite sur notre application mobile. Jean-Baptiste maîtrise parfaitement les technologies modernes et livre un travail de qualité.',
    avatar: '/images/testimonials/amina.jpg',
    rating: 5,
    platform: 'fiverr',
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
    url: 'http://www.linkedin.com/in/djiento-abanga-307a98127',
    icon: 'linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://x.com/djiento',
    icon: 'twitter',
  },
  {
    platform: 'Email',
    url: 'abanagdj@gmail.com',
    icon: 'mail',
  },
];

