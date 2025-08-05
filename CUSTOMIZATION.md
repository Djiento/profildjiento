# Guide de Personnalisation - Portfolio

## 📝 Modifier les informations personnelles

### 1. Données de base (`src/data/portfolio.ts`)

```typescript
export const personalInfo = {
  name: 'Djiento Abanga,
  title: 'Votre Titre Professionnel',
  subtitle: 'Vos Technologies • Principales',
  location: 'Votre Ville, Pays',
  email: 'votre@email.com',
  phone: '+XXX XX XX XX XX',
  availability: 'Votre statut de disponibilité',
  bio: `Votre description personnelle...`,
  avatar: '/images/votre-photo.jpg',
  calendlyUrl: 'https://calendly.com/votre-lien',
};
```

### 2. Compétences techniques

```typescript
export const skills: Skill[] = [
  { 
    name: 'React', 
    level: 'Expert', // Débutant | Intermédiaire | Avancé | Expert
    category: 'frontend', // frontend | backend | database | tools | soft
    icon: '⚛️' 
  },
  // Ajouter vos compétences...
];
```

### 3. Expériences professionnelles

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Nom de l\'entreprise',
    position: 'Votre poste',
    startDate: '2022-01', // Format YYYY-MM
    endDate: '2023-12', // Optionnel, laisser vide si poste actuel
    description: 'Description de vos responsabilités...',
    technologies: ['React', 'Node.js', 'TypeScript'],
    location: 'Ville, Pays ou Remote',
  },
  // Ajouter vos expériences...
];
```

### 4. Projets

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Nom du projet',
    description: 'Description courte',
    longDescription: 'Description détaillée...',
    image: '/images/projects/projet.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind'],
    category: 'web', // web | mobile | fullstack | api
    demoUrl: 'https://demo.example.com', // Optionnel
    githubUrl: 'https://github.com/user/repo', // Optionnel
    featured: true, // Projet mis en avant
    year: 2024,
  },
  // Ajouter vos projets...
];
```

### 5. Services et tarifs

```typescript
export const services: Service[] = [
  {
    id: '1',
    title: 'Nom du service',
    description: 'Description du service...',
    features: [
      'Fonctionnalité 1',
      'Fonctionnalité 2',
      'Fonctionnalité 3',
    ],
    priceRange: '500€ - 2000€',
    duration: '2-4 semaines',
    icon: '🌐',
  },
  // Ajouter vos services...
];
```

### 6. Témoignages

```typescript
export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Nom du client',
    position: 'Poste',
    company: 'Entreprise',
    content: 'Témoignage du client...',
    avatar: '/images/testimonials/client.jpg',
    rating: 5, // 1-5 étoiles
    platform: 'linkedin', // linkedin | upwork | fiverr | direct
  },
  // Ajouter vos témoignages...
];
```

## 🎨 Personnaliser le design

### 1. Couleurs (`tailwind.config.ts`)

```typescript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',   // Très clair
        100: '#dbeafe',  // Clair
        200: '#bfdbfe',  // 
        300: '#93c5fd',  //
        400: '#60a5fa',  //
        500: '#3b82f6',  // Couleur principale
        600: '#2563eb',  // Plus foncé
        700: '#1d4ed8',  // Foncé
        800: '#1e40af',  // Très foncé
        900: '#1e3a8a',  // Le plus foncé
      },
    },
  },
}
```

**Couleurs recommandées :**
- **Bleu professionnel** : `#2563eb` (actuel)
- **Vert tech** : `#059669`
- **Orange créatif** : `#ea580c`
- **Violet moderne** : `#7c3aed`
- **Rouge dynamique** : `#dc2626`

### 2. Polices (`src/app/layout.tsx`)

```typescript
import { Inter, Roboto, Poppins, Open_Sans } from 'next/font/google';

// Remplacer Montserrat par votre choix
const customFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-custom',
});
```

**Polices recommandées :**
- **Inter** - Moderne et lisible
- **Roboto** - Google Material Design
- **Poppins** - Géométrique et friendly
- **Open Sans** - Humaniste et accessible

### 3. Animations (`tailwind.config.ts`)

```typescript
animation: {
  'fade-in': 'fadeIn 0.5s ease-in-out',
  'slide-up': 'slideUp 0.5s ease-out',
  'bounce-slow': 'bounce 2s infinite',
  // Ajouter vos animations personnalisées
},
```

## 🖼️ Ajouter vos images

### 1. Structure des images

```
public/
├── images/
│   ├── avatar.jpg              # Votre photo (400x400px)
│   ├── og-image.jpg           # Image Open Graph (1200x630px)
│   ├── projects/              # Images de projets
│   │   ├── projet1.jpg        # (800x600px)
│   │   └── projet2.jpg
│   └── testimonials/          # Photos clients
│       ├── client1.jpg        # (100x100px)
│       └── client2.jpg
```

### 2. Optimisation des images

**Formats recommandés :**
- **WebP** pour la web (meilleure compression)
- **JPEG** pour les photos
- **PNG** pour les logos/icônes

**Tailles recommandées :**
- Avatar : 400x400px
- Projets : 800x600px (ratio 4:3)
- Témoignages : 100x100px
- Open Graph : 1200x630px

**Outils d'optimisation :**
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)
- [ImageOptim](https://imageoptim.com/)

## 📱 Personnaliser les sections

### 1. Modifier l'ordre des sections (`src/app/page.tsx`)

```tsx
<main>
  <Hero />
  <About />
  <Projects />    {/* Déplacer selon vos besoins */}
  <Services />
  <Testimonials />
  <Contact />
</main>
```

### 2. Masquer une section

```tsx
{/* <Testimonials /> */}  {/* Commenter pour masquer */}
```

### 3. Ajouter une nouvelle section

1. **Créer le composant** (`src/components/sections/NewSection.tsx`)
2. **L'importer** dans `src/app/page.tsx`
3. **L'ajouter** dans le JSX

## 🔗 Configurer les liens sociaux

### 1. Modifier les liens (`src/data/portfolio.ts`)

```typescript
export const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    url: 'https://github.com/votre-username',
    icon: 'github',
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/votre-profil',
    icon: 'linkedin',
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/votre-handle',
    icon: 'twitter',
  },
  // Ajouter d'autres réseaux...
];
```

### 2. Ajouter de nouveaux réseaux

1. **Ajouter l'icône** dans `src/components/sections/Contact.tsx`
2. **Importer l'icône** de Lucide React
3. **L'ajouter** dans `socialIcons`

## 📧 Personnaliser le formulaire de contact

### 1. Modifier les champs (`src/components/sections/Contact.tsx`)

```typescript
// Ajouter un nouveau champ
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  budget: '',
  timeline: '',
  company: '', // Nouveau champ
});
```

### 2. Modifier les options de budget

```typescript
const budgetRanges = [
  '< 500€',
  '500€ - 2 000€',
  '2 000€ - 5 000€',
  '5 000€ - 10 000€',
  '> 10 000€',
];
```

## 🌍 Internationalisation (i18n)

### 1. Installer next-intl

```bash
npm install next-intl
```

### 2. Créer les fichiers de traduction

```
messages/
├── en.json
├── fr.json
└── es.json
```

### 3. Configurer Next.js

```typescript
// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

module.exports = withNextIntl({
  // Votre config existante
});
```

## 📊 Ajouter Google Analytics

### 1. Créer un compte GA4

1. Aller sur [Google Analytics](https://analytics.google.com/)
2. Créer une propriété
3. Copier l'ID de mesure (G-XXXXXXXXXX)

### 2. Ajouter le code de suivi

```typescript
// src/app/layout.tsx
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
```

## 🔧 Personnalisations avancées

### 1. Ajouter un blog

1. **Installer MDX** : `npm install @next/mdx`
2. **Créer** `src/app/blog/page.tsx`
3. **Ajouter** le lien dans la navigation

### 2. Ajouter un mode sombre

1. **Installer** : `npm install next-themes`
2. **Configurer** le provider
3. **Ajouter** le toggle dans le header

### 3. Ajouter des animations personnalisées

```typescript
// tailwind.config.ts
keyframes: {
  customAnimation: {
    '0%': { transform: 'scale(1)' },
    '50%': { transform: 'scale(1.1)' },
    '100%': { transform: 'scale(1)' },
  },
},
animation: {
  'custom': 'customAnimation 2s ease-in-out infinite',
}
```

## 🚀 Conseils de personnalisation

### 1. Cohérence visuelle
- Utilisez maximum 2-3 couleurs principales
- Gardez la même police pour tout le site
- Respectez les espacements (multiples de 4px)

### 2. Performance
- Optimisez toutes les images
- Limitez les animations sur mobile
- Testez sur différents appareils

### 3. Accessibilité
- Gardez un contraste suffisant (4.5:1 minimum)
- Testez la navigation au clavier
- Ajoutez des alt text aux images

### 4. SEO
- Mettez à jour les métadonnées
- Ajoutez des mots-clés pertinents
- Optimisez les URLs

---

**Bon développement ! 🎨**

