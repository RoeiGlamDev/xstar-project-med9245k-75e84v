import { useState } from 'react';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormState {
  name: string;
  email: string;
  message: string;
  reason: string;
}

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: '',
    reason: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) newErrors.email = 'Email is required';
    if (!formState.message) newErrors.message = 'Message is required';
    if (!formState.reason) newErrors.reason = 'Please select a reason for contact';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '', reason: '' });
      setErrors({});
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-pink-500 mb-6">Contact luxury FashionTV cosmetics</h2>
      <p className="text-gray-600 mb-4">For any inquiries related to our luxury fashion products, please fill out the form below.</p>
      
      {submitted && <p className="text-green-500 mb-4">Thank you for your message! We will get back to you shortly.</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <motion.div 
          className={flex flex-col ${errors.name ? 'border-red-500' : 'border-gray-300'} border rounded p-4}
          whileHover={{ scale: 1.02 }}
        >
          <label className="text-gray-700">Name</label>
          <input 
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="p-2 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-200"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </motion.div>

        <motion.div 
          className={flex flex-col ${errors.email ? 'border-red-500' : 'border-gray-300'} border rounded p-4}
          whileHover={{ scale: 1.02 }}
        >
          <label className="text-gray-700">Email</label>
          <input 
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="p-2 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-200"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </motion.div>

        <motion.div 
          className={flex flex-col ${errors.reason ? 'border-red-500' : 'border-gray-300'} border rounded p-4}
          whileHover={{ scale: 1.02 }}
        >
          <label className="text-gray-700">Reason for Contact</label>
          <select 
            name="reason"
            value={formState.reason}
            onChange={handleChange}
            className="p-2 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-200"
          >
            <option value="">Select a reason</option>
            <option value="Product Inquiry">Product Inquiry</option>
            <option value="Collaboration Request">Collaboration Request</option>
            <option value="Customer Support">Customer Support</option>
          </select>
          {errors.reason && <p className="text-red-500 text-sm">{errors.reason}</p>}
        </motion.div>

        <motion.div 
          className={flex flex-col ${errors.message ? 'border-red-500' : 'border-gray-300'} border rounded p-4}
          whileHover={{ scale: 1.02 }}
        >
          <label className="text-gray-700">Message</label>
          <textarea 
            name="message"
            value={formState.message}
            onChange={handleChange}
            className="p-2 border border-pink-500 rounded focus:outline-none focus:ring focus:ring-pink-200"
            rows={4}
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </motion.div>

        <button 
          type="submit"
          className="bg-pink-500 text-white font-bold py-2 px-4 rounded hover:bg-pink-600 transition-all duration-300"
        >
          Submit
        </button>
      </form>

      <div className="mt-8">
        <h3 className="text-2xl font-bold text-pink-500">Business Information</h3>
        <p className="text-gray-600">luxury FashionTV cosmetics</p>
        <p className="text-gray-600">123 Fashion Ave, Suite 456</p>
        <p className="text-gray-600">Fashion City, FC 12345</p>
        <p className="text-gray-600">Business Hours: Mon-Fri, 9 AM - 6 PM</p>
      </div>
    </div>
  );
};

export default ContactSection;