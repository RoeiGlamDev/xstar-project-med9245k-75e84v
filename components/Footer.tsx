import React from 'react';
import { motion } from 'framer-motion';

interface FooterProps {
  links: { name: string; url: string }[];
  socialMedia: { platform: string; url: string }[];
}

const Footer: React.FC<FooterProps> = ({ links, socialMedia }) => {
  return (
    <footer className="bg-white text-pink-600 py-10">
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-center mb-6">luxury FashionTV cosmetics</h2>
        <div className="flex flex-col items-center mb-6">
          <p className="text-lg font-medium">Explore our exquisite range of luxury cosmetics tailored for the fashion elite.</p>
          <p className="text-sm text-gray-500 mt-1">© 2023 luxury FashionTV cosmetics. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center mb-6">
          {links.map((link) => (
            <motion.div
              key={link.name}
              href={link.url}
              className="text-pink-600 hover:text-pink-800 mx-2 transition duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
        <div className="flex justify-center">
          {socialMedia.map((media) => (
            <motion.div
              key={media.platform}
              href={media.url}
              className="mx-4 text-pink-600 hover:text-pink-800 transition duration-300"
              whileHover={{ scale: 1.1 }}
            >
              <i className={`fab fa-${media.platform.toLowerCase()`}}></i>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;