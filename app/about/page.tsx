import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Sophia Couture',
    role: 'Creative Director',
    image: '/images/sophia.jpg',
  },
  {
    name: 'Liam Styles',
    role: 'Head of Marketing',
    image: '/images/liam.jpg',
  },
  {
    name: 'Isabella Vogue',
    role: 'Lead Makeup Artist',
    image: '/images/isabella.jpg',
  },
];

const About: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 p-8">
      <motion.div
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About luxury FashionTV cosmetics
      </motion.h1>
      
      <motion.div
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        At luxury FashionTV cosmetics, we believe that beauty is an art. 
        Founded in the heart of the fashion capital, our brand embodies 
        the elegance and glamour of high-end fashion, offering an exclusive 
        range of cosmetics that empower individuals to express their unique style.
      </motion.p>
      
      <motion.div
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Our History
      </motion.h2>
      <motion.div
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        Established in 2020, luxury FashionTV cosmetics was born from a 
        desire to merge high fashion with beauty. Our journey began with a 
        vision to create luxurious products that resonate with fashion-forward 
        individuals who appreciate quality and aesthetics.
      </motion.p>
      
      <motion.div
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Our Values
      </motion.h2>
      <motion.div
        className="text-lg mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        We are committed to quality, sustainability, and inclusivity. 
        Our products are crafted with the finest ingredients, ensuring 
        that they are not only luxurious but also environmentally friendly. 
        We celebrate diversity and strive to empower everyone to embrace their beauty.
      </motion.p>
      
      <motion.div
        className="text-4xl font-semibold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.2 }}
      >
        Meet Our Team
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teamMembers.map((member) => (
          <motion.div
            key={member.name}
            className="bg-pink-100 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-md text-gray-600">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;