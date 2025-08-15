import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    title: 'Exquisite Quality',
    description: 'Luxury FashionTV cosmetics are crafted with the finest ingredients to ensure a flawless finish.',
    icon: <i className="fas fa-gem text-pink-500"></i>,
  },
  {
    title: 'Fashion-Forward Trends',
    description: 'Stay ahead with our curated collection that reflects the latest trends in the fashion industry.',
    icon: <i className="fas fa-star text-pink-500"></i>,
  },
  {
    title: 'Personalized Experience',
    description: 'Experience tailored beauty solutions that highlight your unique style and elegance.',
    icon: <i className="fas fa-user-circle text-pink-500"></i>,
  },
  {
    title: 'Eco-Friendly Practices',
    description: 'Luxury FashionTV cosmetics are committed to sustainable beauty, using eco-conscious materials.',
    icon: <i className="fas fa-leaf text-pink-500"></i>,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <motion.div
          className="text-3xl md:text-5xl font-bold text-pink-600 mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Discover luxury FashionTV cosmetics
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-pink-600">{feature.title}</h3>
              <p className="text-gray-700 mt-2">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;