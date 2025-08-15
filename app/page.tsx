import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const features = [
  {
    title: 'Exquisite Formulations',
    description: 'Our products are crafted with the finest ingredients, ensuring a luxurious experience for your skin.',
  },
  {
    title: 'Timeless Elegance',
    description: 'Each item is designed to embody sophistication and style, perfect for the modern fashionista.',
  },
  {
    title: 'Sustainable Luxury',
    description: 'Committed to eco-friendly practices, we create beauty products that are as kind to the planet as they are to you.',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="bg-white text-pink-600">
      <header className="flex justify-center items-center h-screen bg-pink-100">
        <motion.div
          className="text-6xl font-bold"
          initial="hidden"
          animate="visible"
          variants={heroVariants}
          transition={{ duration: 0.5 }}
        >
          Welcome to luxury FashionTV cosmetics
        </motion.h1>
      </header>
      
      <section className="py-20 px-10">
        <h2 className="text-4xl font-semibold text-center mb-10">Discover Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-pink-50 p-5 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial="hidden"
              animate="visible"
              variants={featureVariants}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="bg-pink-100 text-center py-5">
        <p className="text-lg">© 2023 luxury FashionTV cosmetics. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;