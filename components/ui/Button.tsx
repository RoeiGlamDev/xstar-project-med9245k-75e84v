import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-pink-500 text-white hover:bg-pink-600',
  secondary: 'bg-white text-pink-500 border border-pink-500 hover:bg-pink-100',
};

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children }) => {
  return (
    <motion.div
      onClick={onClick}
      className={`font-bold py-2 px-4 rounded transition-all duration-300 ease-in-out ${buttonVariants[variant]`}}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={Luxury FashionTV cosmetics ${variant} button}
    >
      {children}
    </motion.button>
  );
};

export default Button;