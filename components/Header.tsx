import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  logoUrl: string;
}

const Header: React.FC<HeaderProps> = ({ logoUrl }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div
          className="text-pink-600 font-bold text-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={logoUrl} alt="luxury FashionTV cosmetics logo" className="h-12" />
        </motion.div>
        <nav className="hidden md:flex space-x-10">
          <motion.div
            href="#about"
            className="text-pink-600 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.div
            href="#products"
            className="text-pink-600 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Our Products
          </motion.a>
          <motion.div
            href="#blog"
            className="text-pink-600 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Blog
          </motion.a>
          <motion.div
            href="#contact"
            className="text-pink-600 hover:text-pink-400 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </nav>
        <button
          className="md:hidden text-pink-600 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white border-t border-pink-300"
          initial={{ height: 0}}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col p-4 space-y-2">
            <motion.div
              href="#about"
              className="text-pink-600 hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              About Us
            </motion.a>
            <motion.div
              href="#products"
              className="text-pink-600 hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Our Products
            </motion.a>
            <motion.div
              href="#blog"
              className="text-pink-600 hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Blog
            </motion.a>
            <motion.div
              href="#contact"
              className="text-pink-600 hover:text-pink-400 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;