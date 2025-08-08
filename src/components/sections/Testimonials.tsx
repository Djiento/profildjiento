"use client";

import { motion } from "framer-motion";
import { Star, Quote, Linkedin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/portfolio";
import Card, { CardContent } from "@/components/ui/Card";

const platformIcons = {
  linkedin: Linkedin,
  upwork: ExternalLink,
  fiverr: ExternalLink,
  WhatsApp: Quote,
};

const platformColors = {
  linkedin: "text-blue-600",
  upwork: "text-green-600",
  fiverr: "text-green-500",
  WhatsApp: "text-gray-600",
};

export default function Testimonials() {
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
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
            Témoignages Clients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez ce que mes clients disent de notre collaboration et des
            résultats obtenus.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { label: "Projets livrés", value: "580+", icon: "🚀" },
            { label: "Clients satisfaits", value: "562+", icon: "😊" },
            { label: "Note moyenne", value: "4.9/5", icon: "⭐" },
            { label: "Années d'expérience", value: "12+", icon: "💼" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-primary-600 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {testimonials.map((testimonial) => {
            const PlatformIcon = platformIcons[testimonial.platform];

            return (
              <motion.div key={testimonial.id} variants={itemVariants}>
                <Card className="h-full group hover:shadow-xl transition-all duration-300">
                  <CardContent>
                    {/* Quote Icon */}
                    <div className="flex justify-between items-start mb-4">
                      <Quote
                        size={32}
                        className="text-primary-200 flex-shrink-0"
                      />
                      <div
                        className={`${platformColors[testimonial.platform]}`}
                      >
                        <PlatformIcon size={20} />
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-gray-600">
                        ({testimonial.rating}/5)
                      </span>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <div>
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.position} • {testimonial.company}
                        </div>
                        <div className="text-xs text-gray-500 capitalize mt-1">
                          via {testimonial.platform}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Platforms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-8">
            Retrouvez-moi sur ces plateformes
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8">
            {[
              {
                name: "LinkedIn",
                icon: "💼",
                url: "https://linkedin.com/in/abangadj",
              },
              { name: "Upwork", icon: "🍀", url: "https://upwork.com" },
              { name: "Fiverr", icon: "🎯", url: "https://fiverr.com" },
              { name: "Malt", icon: "🍺", url: "https://malt.fr" },
            ].map((platform) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-gray-100 hover:bg-primary-50 rounded-lg transition-colors group"
              >
                <span className="text-2xl mr-3">{platform.icon}</span>
                <span className="font-medium text-gray-700 group-hover:text-primary-600">
                  {platform.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-[#F7FAFF] from-gray-50 to-gray-100 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Rejoignez mes clients satisfaits
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Faites confiance à mon expertise pour donner vie à vos projets
            digitaux. Ensemble, créons quelque chose d'exceptionnel.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-8 py-4 bg-primary-600 bg-green-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Commencer notre collaboration
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
