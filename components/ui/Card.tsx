import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => {
  return (
    <motion.div
      className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white bg-opacity-20 backdrop-blur-md transition-transform transform hover:scale-105"
      whileHover={{ scale: 1.05 }}
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-pink-500">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Card;