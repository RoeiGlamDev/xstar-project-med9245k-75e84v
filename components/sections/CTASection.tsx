import React from 'react';
import { motion } from 'framer-motion';

interface CTASectionProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection: React.FC<CTASectionProps> = ({ title, subtitle, buttonText, buttonLink }) => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-4xl font-bold text-pink-500 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.div
          className="text-lg text-gray-700 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {subtitle}
        </motion.p>
        <motion.div
          href={buttonLink}
          className="inline-block bg-pink-500 text-white py-3 px-6 rounded-full text-lg font-semibold transition duration-300 hover:bg-pink-700 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.a>
      </div>
    </section>
  );
};

export default CTASection;