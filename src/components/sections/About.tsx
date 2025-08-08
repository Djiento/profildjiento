'use client';

import { motion } from 'framer-motion';
import { Calendar, Wrench, MapPin, GraduationCap, Briefcase, Database } from 'lucide-react';
import { skills, experiences, education } from '@/data/portfolio';
import Card, { CardContent } from '@/components/ui/Card';

const skillCategories = {
  frontend: 'Frontend',
  backend: 'Backend',
  database: 'Base de données',
  tools: 'Outils & DevOps',
  soft: 'CMS',
};

const skillLevels = {
  'Débutant': { width: '25%', color: 'bg-red-400' },
  'Intermédiaire': { width: '50%', color: 'bg-yellow-400' },
  'Avancé': { width: '75%', color: 'bg-blue-400' },
  'Expert': { width: '100%', color: 'bg-green-400' },
};

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            À propos de moi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Développeur full-stack avec +12 ans d'expérience dans la création d'applications Mobil et web. 
          Passionné par la technologie depuis mon plus jeune âge, 
          J’ai créé une agence une agence Web nommée « Web Divine » au No RCCM RB/COT/22 A 81850, je transforme des idées complexes en solutions digitales élégantes et performantes.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Compétences Techniques
          </motion.h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(skillCategories).map(([category, title]) => {
              const categorySkills = skills.filter(skill => skill.category === category);
              
              return (
                <motion.div key={category} variants={itemVariants}>
                  <Card>
                    <CardContent>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <span className="mr-2">
                          {category === 'frontend' && '🎨'}
                          {category === 'backend' && '⚙️'}
                          {category === 'database' && <Database/>}
                          {category === 'tools' && <Wrench />}
                          {category === 'soft' && '💡'}
                        </span>
                        {title}
                      </h4>
                      <div className="space-y-4">
                        {categorySkills.map((skill) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-gray-700 flex items-center">
                                <span className="mr-2">{skill.icon}</span>
                                {skill.name}
                              </span>
                              <span className="text-sm text-gray-500">{skill.level}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: skillLevels[skill.level].width }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                                className={`h-2 rounded-full ${skillLevels[skill.level].color}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Expérience Professionnelle
          </motion.h3>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div key={exp.id} variants={itemVariants}>
                <Card>
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {exp.position}
                        </h4>
                        <div className="flex items-center text-primary-600 mb-2">
                          <Briefcase size={16} className="mr-2" />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mb-2">
                          <MapPin size={16} className="mr-2" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span>
                          {new Date(exp.startDate).toLocaleDateString('fr-FR', {
                            month: 'short',
                            year: 'numeric'
                          })} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString('fr-FR', {
                            month: 'short',
                            year: 'numeric'
                          }) : 'Présent'}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl font-bold text-gray-900 mb-8 text-center"
          >
            Formation
          </motion.h3>

          <div className="space-y-6">
            {education.map((edu) => (
              <motion.div key={edu.id} variants={itemVariants}>
                <Card>
                  <CardContent>
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {edu.degree} en {edu.field}
                        </h4>
                        <div className="flex items-center text-primary-600 mb-2">
                          <GraduationCap size={16} className="mr-2" />
                          <span className="font-medium">{edu.institution}</span>
                        </div>
                        <div className="flex items-center text-gray-500 mb-2">
                          <MapPin size={16} className="mr-2" />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-gray-500 mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        <span>
                          {new Date(edu.startDate).toLocaleDateString('fr-FR', {
                            month: 'short',
                            year: 'numeric'
                          })} - {new Date(edu.endDate).toLocaleDateString('fr-FR', {
                            month: 'short',
                            year: 'numeric'
                          })}
                        </span>
                      </div>
                    </div>
                    
                    {edu.description && (
                      <p className="text-gray-600">{edu.description}</p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Languages & Hobbies */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <Card>
              <CardContent className='bg-gray-200'>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🌍</span>
                  Langues
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Français</span>
                    <span className="text-sm text-gray-500">Natif</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Anglais</span>
                    <span className="text-sm text-gray-500">Courant</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">Sango</span>
                    <span className="text-sm text-gray-500">Natif</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hobbies */}
            <Card>
              <CardContent>
                <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="mr-2">🎯</span>
                  Centres d'intérêt
                </h4>
                <div className="flex flex-wrap gap-2">
                  {['🏀 Basketball', '📚 Lecture tech', '🎵 Musique', '✈️ Voyages', '📱 Nouvelles technologies', '🌱 Open Source'].map((hobby) => (
                    <span
                      key={hobby}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

