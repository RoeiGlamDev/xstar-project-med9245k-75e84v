import React from 'react';
import { motion } from 'framer-motion';

interface StatsProps {
  achievements: {
    title: string;
    count: number;
  }[];
}

const StatsSection: React.FC<StatsProps> = ({ achievements }) => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-pink-600 mb-8">
          Achievements of luxury FashionTV cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <motion.div className="text-3xl font-semibold text-pink-600 mb-2">
                {achievement.title}
              </motion.h3>
              <motion.div
                className="text-5xl font-bold text-gray-800"
                initial={{ count: 0 }}
                animate={{ count: achievement.count }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              >
                {({ count }) => Math.floor(count)}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;