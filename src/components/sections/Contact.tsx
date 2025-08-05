'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { personalInfo, socialLinks } from '@/data/portfolio';
import Card, { CardContent, CardHeader } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const budgetRanges = [
  '< 1 000€',
  '1 000€ - 5 000€',
  '5 000€ - 10 000€',
  '10 000€ - 25 000€',
  '> 25 000€',
];

const timelineOptions = [
  'Urgent (< 1 mois)',
  'Court terme (1-3 mois)',
  'Moyen terme (3-6 mois)',
  'Long terme (> 6 mois)',
  'Pas de contrainte',
];

const socialIcons = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    budget: '',
    timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        budget: '',
        timeline: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="py-20 bg-gray-50">
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
            Contactez-moi
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vous avez un projet en tête ? Discutons-en ! Je suis toujours ravi d'échanger 
            sur de nouveaux défis et opportunités de collaboration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Informations de contact
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-6">
                    {/* Email */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center group cursor-pointer"
                      onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Email</div>
                        <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          {personalInfo.email}
                        </div>
                      </div>
                    </motion.div>

                    {/* Phone */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center group cursor-pointer"
                      onClick={() => window.open(`tel:${personalInfo.phone}`, '_blank')}
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Téléphone</div>
                        <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          {personalInfo.phone}
                        </div>
                      </div>
                    </motion.div>

                    {/* Location */}
                    <motion.div whileHover={{ x: 5 }} className="flex items-center group">
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Localisation</div>
                        <div className="font-medium text-gray-900">
                          {personalInfo.location}
                        </div>
                      </div>
                    </motion.div>

                    {/* Calendly */}
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center group cursor-pointer"
                      onClick={() => window.open(personalInfo.calendlyUrl, '_blank')}
                    >
                      <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                        <Calendar size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">Planifier un appel</div>
                        <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                          Calendly
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Social Links */}
                  <div className="mt-8 pt-8 border-t border-gray-100">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                      Suivez-moi
                    </h4>
                    <div className="flex space-x-4">
                      {socialLinks.map((link) => {
                        const Icon = socialIcons[link.icon as keyof typeof socialIcons];
                        return (
                          <motion.a
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-primary-600 hover:text-white transition-colors"
                            aria-label={link.platform}
                          >
                            <Icon size={18} />
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <motion.div variants={itemVariants}>
              <Card>
                <CardHeader>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Envoyez-moi un message
                  </h3>
                </CardHeader>
                <CardContent className="pt-0">
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg"
                    >
                      <p className="text-green-800">
                        ✅ Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg"
                    >
                      <p className="text-red-800">
                        ❌ Une erreur s'est produite. Veuillez réessayer ou me contacter directement par email.
                      </p>
                    </motion.div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name & Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="Votre nom"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Sujet *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Sujet de votre message"
                      />
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                          Budget estimé
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Sélectionnez un budget</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                          Délai souhaité
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Sélectionnez un délai</option>
                          {timelineOptions.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Décrivez votre projet, vos besoins et vos objectifs..."
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                          Envoi en cours...
                        </>
                      ) : (
                        <>
                          <Send size={20} className="mr-2" />
                          Envoyer le message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Ou contactez-moi directement
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
            >
              <Mail size={20} className="mr-2" />
              Envoyer un email
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => window.open(personalInfo.calendlyUrl, '_blank')}
            >
              <Calendar size={20} className="mr-2" />
              Planifier un appel
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

