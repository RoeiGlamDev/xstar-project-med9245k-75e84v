import React from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  name: string;
  email: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="bg-white text-pink-600 min-h-screen flex flex-col items-center justify-center p-8">
      <motion.div 
        className="text-4xl font-bold mb-8" 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 0.5 }}
      >
        Contact luxury FashionTV cosmetics
      </motion.h1>
      
      <form onSubmit={handleSubmit} className="bg-pink-100 p-6 rounded-lg shadow-lg w-full max-w-lg">
        <motion.div 
          className="mb-4" 
          whileHover={{ scale: 1.02 }} 
          transition={{ duration: 0.2 }}
        >
          <label className="block text-lg mb-2">Name</label>
          <input 
            type="text" 
            className="border border-pink-300 p-2 w-full rounded" 
            required 
          />
        </motion.div>
        
        <motion.div 
          className="mb-4" 
          whileHover={{ scale: 1.02 }} 
          transition={{ duration: 0.2 }}
        >
          <label className="block text-lg mb-2">Email</label>
          <input 
            type="email" 
            className="border border-pink-300 p-2 w-full rounded" 
            required 
          />
        </motion.div>
        
        <motion.div 
          className="mb-6" 
          whileHover={{ scale: 1.02 }} 
          transition={{ duration: 0.2 }}
        >
          <label className="block text-lg mb-2">Message</label>
          <textarea 
            className="border border-pink-300 p-2 w-full rounded" 
            rows={5} 
            required 
          />
        </motion.div>
        
        <motion.div 
          type="submit" 
          className="bg-pink-600 text-white font-bold py-2 px-4 rounded hover:bg-pink-500 transition duration-300" 
          whileHover={{ scale: 1.05 }}
        >
          Send Message
        </motion.button>
      </form>

      <div className="mt-8 text-center">
        <motion.div 
          className="text-2xl font-semibold mb-4" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
        >
          Visit Us
        </motion.h2>
        <p className="mb-2">Location: 123 Fashion Ave, New York, NY 10001</p>
        <p className="mb-2">Business Hours: Mon-Sat 10 AM - 8 PM</p>
        
        <motion.div 
          className="flex justify-center mt-4" 
          whileHover={{ scale: 1.02 }} 
          transition={{ duration: 0.2 }}
        >
          <iframe 
            title="luxury FashionTV cosmetics Location" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.203030405523!2d-74.00597318459377!3d40.7127762793311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1c8f8e9c77%3A0x2b3a7c6e8ed9c8e!2s123%20Fashion%20Ave%2C%20New%20York%2C%20NY%2010001!5e0!3m2!1sen!2sus!4v1614906478573!5m2!1sen!2sus" 
            width="600" 
            height="450" 
            style={{ border: '0 '}} 
            allowFullScreen 
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;