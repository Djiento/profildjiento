'use client';

import { motion } from 'framer-motion';
import { Check, Clock, Euro, ArrowRight } from 'lucide-react';
import { services } from '@/data/portfolio';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function Services() {
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

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            Mes Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Je propose une gamme complète de services de développement pour accompagner 
            vos projets digitaux de la conception au déploiement.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16"
        >
          {services.map((service, index) => (
            <motion.div key={service.id} variants={itemVariants}>
              <Card className="h-full group hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-2xl mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Inclus dans ce service
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <Check size={16} className="text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing & Duration */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-primary-600">
                        <Euro size={16} className="mr-1" />
                        <span className="font-semibold">{service.priceRange}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock size={16} className="mr-1" />
                        <span className="text-sm">{service.duration}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all"
                      onClick={scrollToContact}
                    >
                      Demander un devis
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Mon Processus de Travail
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Découverte',
                description: 'Analyse de vos besoins et définition des objectifs',
                icon: '🔍',
              },
              {
                step: '02',
                title: 'Planification',
                description: 'Conception de l\'architecture et planning détaillé',
                icon: '📋',
              },
              {
                step: '03',
                title: 'Développement',
                description: 'Codage avec tests et revues régulières',
                icon: '💻',
              },
              {
                step: '04',
                title: 'Livraison',
                description: 'Déploiement, formation et support continu',
                icon: '🚀',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                  {process.icon}
                </div>
                <div className="text-primary-600 font-bold text-sm mb-2">
                  ÉTAPE {process.step}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Questions Fréquentes
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'Quels sont vos délais de livraison ?',
                answer: 'Les délais varient selon la complexité du projet. Un site vitrine prend 2-3 semaines, une application complexe 2-3 mois.',
              },
              {
                question: 'Proposez-vous de la maintenance ?',
                answer: 'Oui, je propose des contrats de maintenance pour assurer la sécurité, les mises à jour et le support technique.',
              },
              {
                question: 'Travaillez-vous avec des clients internationaux ?',
                answer: 'Absolument ! Je travaille régulièrement avec des clients en Europe, Amérique du Nord et Afrique.',
              },
              {
                question: 'Quelles technologies utilisez-vous ?',
                answer: 'Je me spécialise dans l\'écosystème JavaScript/TypeScript : React, Node.js, Next.js, et les technologies cloud modernes.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardContent>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      {faq.question}
                    </h4>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Prêt à démarrer votre projet ?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Discutons de vos besoins et trouvons ensemble la solution parfaite 
            pour votre projet digital.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={scrollToContact}
            >
              Demander un devis gratuit
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open('https://calendly.com/jbkoudjo', '_blank')}
              className="text-white border-white hover:bg-white hover:text-primary-600"
            >
              Planifier un appel
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

