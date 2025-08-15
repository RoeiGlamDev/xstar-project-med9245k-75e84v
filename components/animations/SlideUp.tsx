import { motion } from 'framer-motion';
import React from 'react';

interface SlideUpProps {
  children: React.ReactNode;
}

const SlideUp: React.FC<SlideUpProps> = ({ children }) => {
  const slideUpVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="overflow-hidden"
      variants={slideUpVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
        <h2 className="text-2xl font-semibold text-pink-600 mb-4">
          luxury FashionTV cosmetics
        </h2>
        <p className="text-gray-700">
          Discover the elegance of our luxury cosmetics, curated for those who appreciate the finer things in life. At luxury FashionTV cosmetics, we believe in enhancing your beauty with our exquisite products that embody sophistication and style.
        </p>
        <p className="mt-2 text-gray-600">
          Explore our exclusive collections that feature premium ingredients and luxurious packaging, designed to elevate your beauty routine. Indulge in the world of fashion-forward cosmetics that are as chic as they are effective.
        </p>
        <button className="mt-4 bg-pink-600 text-white rounded-full px-4 py-2 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500">
          Shop Now
        </button>
      </div>
      {children}
    </motion.div>
  );
};

export default SlideUp;