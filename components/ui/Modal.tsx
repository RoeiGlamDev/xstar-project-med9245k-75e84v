import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 backdrop-blur-sm z-50">
          <motion.div
            className="bg-pink-500 rounded-lg shadow-lg max-w-md w-full p-8"
            initial={{ opacity: 0, scale: 0.9}}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-white text-2xl font-bold mb-4">Welcome to luxury FashionTV cosmetics</h2>
            <p className="text-white mb-6">
              Discover our exquisite range of high-end cosmetics designed for the modern fashionista. Indulge in
              luxury and elevate your beauty routine with our exclusive products.
            </p>
            <button
              onClick={onClose}
              className="bg-white text-pink-500 font-semibold py-2 px-4 rounded hover:bg-pink-100 transition ease-in-out duration-200"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;