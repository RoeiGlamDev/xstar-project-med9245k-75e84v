import React from 'react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  cta1: string;
  cta2: string;
}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-pink-500 to-white">
      <motion.div
        className="flex flex-col items-center text-center p-10 bg-white rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-6xl font-bold text-pink-600 mb-4">
          luxury FashionTV cosmetics
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          Elevate your beauty with our exclusive range of luxury cosmetics designed for the modern fashionista. Experience the ultimate in style and sophistication with luxury FashionTV cosmetics.
        </p>
        <div className="flex space-x-4">
          <motion.div
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert('Shop Now Clicked')}
          >
            Shop Now
          </motion.button>
          <motion.div
            className="px-6 py-3 bg-white border-2 border-pink-500 text-pink-500 font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-pink-500 hover:text-white"
            whileHover={{ scale: 1.05 }}
            onClick={() => alert('Explore More Clicked')}
          >
            Explore More
          </motion.button>
        </div>
        <p className="mt-6 text-sm text-gray-500">
          Trusted by top fashion influencers and beauty experts worldwide. Join the luxury FashionTV cosmetics community today!
        </p>
      </motion.div>
    </div>
  );
};

export default HeroSection;