import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InputProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  validationMessage?: string;
}

const Input: React.FC<InputProps> = ({ label, type = 'text', placeholder, required = false, validationMessage }) => {const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (required && e.target.value.trim() === '') {
      setIsValid(false);} else {
      setIsValid(true);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-pink-500 font-bold mb-2">{label}</label>
      <motion.div
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className={shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out ${
          isValid ? 'border-pink-300' : 'border-red-500'
        }}
        whileHover={{ scale: 1.02 }}
        whileFocus={{ scale: 1.02 }}
      />
      {!isValid && validationMessage && (
        <p className="text-red-500 text-xs italic mt-2">{validationMessage}</p>
      )}
    </div>
  );
};

export default Input;