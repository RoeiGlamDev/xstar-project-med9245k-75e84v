import React from 'react';
import { motion } from 'framer-motion';

interface AboutSectionProps {}

const AboutSection: React.FC<AboutSectionProps> = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-4xl font-bold text-pink-500 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About luxury FashionTV cosmetics
        </motion.h2>
        
        <motion.div
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At luxury FashionTV cosmetics, we believe that beauty is not just skin deep; it’s an expression of style and sophistication. Founded to redefine the luxury cosmetics landscape, our brand embodies elegance and quality, marrying cutting-edge technology with timeless beauty traditions.
        </motion.p>

        <motion.div
          className="text-2xl font-bold text-pink-500 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Our Mission
        </motion.h3>
        <motion.div
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Our mission is to empower individuals to express their unique beauty through high-quality cosmetics that enhance their natural features. We are committed to sustainability, innovation, and inclusivity, providing luxury products that cater to every beauty enthusiast.
        </motion.p>

        <motion.div
          className="text-2xl font-bold text-pink-500 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Meet Our Team
        </motion.h3>
        <motion.div
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          Our team consists of passionate beauty experts, makeup artists, and industry veterans who bring a wealth of knowledge and creativity to luxury FashionTV cosmetics. Together, we aim to inspire and innovate, ensuring that our products not only meet but exceed the expectations of our discerning clientele.
        </motion.p>

        <motion.div
          className="text-2xl font-bold text-pink-500 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          Our Values
        </motion.h3>
        <motion.div
          className="text-lg text-gray-700 mb-8 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        >
          At luxury FashionTV cosmetics, we uphold the values of integrity, excellence, and authenticity. We celebrate diversity and strive to create products that resonate with the unique beauty of every individual. Our achievements in the industry reflect our commitment to innovation and quality.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;