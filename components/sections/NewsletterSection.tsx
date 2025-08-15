import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface NewsletterProps {
  onSubmit: (email: string) => void;
}

const NewsletterSection: React.FC<NewsletterProps> = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    onSubmit(email);
    setSuccess(true);
    setIsSubmitting(false);
    setEmail('');
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <motion.div 
        className="text-3xl font-bold mb-4 text-pink-500" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}>
        Join the luxury FashionTV cosmetics Family
      </motion.h2>
      <p className="text-lg text-gray-700 mb-6">
        Sign up for exclusive updates, launches, and special offers tailored just for you.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 p-2 mb-4 md:mb-0 border-2 border-pink-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200"
        />
        <motion.div
          type="submit"
          disabled={isSubmitting}
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </motion.button>
      </form>
      {success && (
        <motion.div 
          className="mt-4 text-green-500" 
          initial={{ opacity: 0}} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}>
          Thank you for subscribing to luxury FashionTV cosmetics!
        </motion.p>
      )}
    </div>
  );
};

export default NewsletterSection;