'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Calendar, MapPin, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import '@/app/globals.css';
import Button from '@/components/ui/Button';
import { personalInfo } from '@/data/portfolio';

export default function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6"
            >
              <CheckCircle size={16} className="mr-2" />
              {personalInfo.availability}
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-600 mb-6"
            >
              Salut, je suis{' '}
              <span className="text-primary-600 bg-gradient-to-r text-blue-600 from-primary-600 to-primary-800 bg-clip-text ">
                {personalInfo.name.split('+1')[0]}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mb-4"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Tech Stack */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              
            >          
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React.js</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 m-1 rounded-full text-sm">Node.js</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Django</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full m-1 text-sm">MySQL</span>
          
            </motion.p>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start mb-8 mt-8"
            >
              <MapPin size={20} className="text-primary-600 mr-2" />
              <span className="text-gray-600">{personalInfo.location}</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="text-gray-600 mb-8 max-w-2xl"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                variant="Green"
                size="md"
                onClick={() => scrollToSection('#contact')}
                className="group"
              >
                Démarrer un projet
                <ArrowDown size={20} className="ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>
              
              <Button
                variant="secondary"
                size="md"
                className="groupe"
                onClick={() => window.open('/cv/cv.pdf', '_blank')}
              >
                <Download size={20} className="mr-2" />
                Télécharger CV
              </Button>


              <Button
                variant="secondary"
                size="md"
                onClick={() => window.open(personalInfo.calendlyUrl, '_blank')}
              >
                <Calendar size={20} className="mr-2" />
                Planifier un appel
              </Button>
            </motion.div>
          </motion.div>

          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Background decoration */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 4, repeat: Infinity, ease: 'easeInOut' }
                }}
                className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full opacity-20"
              />
              
              {/* Avatar container */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gray-200"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <Image
                  src = "/images/Profil_Picture.png"
                  width ={290}
                  height={50}
                  alt="djiento"
                
                />

                </div>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-4 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">🚀</span>
              </motion.div>

              <motion.div
                animate={{ x: [-5, 5, -5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 -left-8 bg-white rounded-full p-3 shadow-lg"
              >
                <span className="text-2xl">💻</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => scrollToSection('#about')}
            className="text-gray-400 hover:text-primary-600 transition-colors"
            aria-label="Scroll to next section"
          >
            <ArrowDown size={24} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

