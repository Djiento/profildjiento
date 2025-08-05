import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Djiento Abanga - Développeur Full-Stack | Portfolio',
  description: 'Développeur full-stack basé au Bénin, spécialisé en React, Node.js et technologies modernes. Création d\'applications web et mobile pour clients internationaux.',
  keywords: [
    'développeur full-stack',
    'React',
    'Node.js',
    'TypeScript',
    'Bénin',
    'développeur web',
    'applications mobile',
    'freelance',
    'portfolio',
  ],
  authors: [{ name: 'Djiento Abanga' }],
  creator: 'Djiento Abanga',
  publisher: 'Djiento Abanga',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://djientoabanga.dev"),
  alternates: {
    canonical: '/',
    languages: {
      'fr-FR': '/fr',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://jbkoudjo.dev',
    title: 'Djiento Abanga - Développeur Full-Stack',
    description: 'Développeur full-stack basé au Bénin, spécialisé en React, Node.js et technologies modernes.',
    siteName: 'Portfolio Djiento Abanga',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jean-Baptiste Koudjo - Développeur Full-Stack',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Djiento Abanga - Développeur Full-Stack',
    description: 'Développeur full-stack basé au Bénin, spécialisé en React, Node.js et technologies modernes.',
    creator: '@jbkoudjo',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${montserrat.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Djiento Abanga',
              jobTitle: 'Développeur Full-Stack',
              description: 'Développeur full-stack spécialisé en React, Node.js, Python et technologies modernes',
              url: '#',
              image: '#',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Cotonou',
                addressCountry: 'BJ',
              },
              email: 'contact@jbkoudjo.dev',
              sameAs: [
                'https://github.com/jbkoudjo',
                'https://linkedin.com/in/jbkoudjo',
                'https://twitter.com/jbkoudjo',
              ],
              knowsAbout: [
                'React',
                'Node.js',
                'TypeScript',
                'Next.js',
                'MongoDB',
                'PostgreSQL',
                'AWS',
                'Docker',
              ],
              offers: {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Développement Web et Mobile',
                  description: 'Services de développement d\'applications web et mobile',
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}