import React from 'react';
import { motion } from 'framer-motion';

interface PricingOption {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const pricingOptions: PricingOption[] = [
  {
    title: 'Essential Glam Package',
    description: 'A complete makeup experience for any occasion.',
    price: '$150',
    features: ['Makeup consultation', 'Full makeup application', 'Luxury skincare prep'],
  },
  {
    title: 'Luxury Bridal Package',
    description: 'Transform your wedding day with our premium services.',
    price: '$500',
    features: ['Bridal consultation', 'Trial makeup session', 'Full-day makeup service', 'Touch-up kit'],
  },
  {
    title: 'VIP Fashion Experience',
    description: 'Exclusive access to our top stylists for fashion events.',
    price: '$300',
    features: ['Personal stylist', 'Complete makeup session', 'Fashion consultation'],
  },
];

const PricingPage: React.FC = () => {
  return (
    <div className="bg-white text-pink-600 p-8">
      <motion.div
        className="text-4xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Luxury FashionTV Cosmetics Pricing
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {pricingOptions.map((option) => (
          <div
            key={option.title}
            className="border-2 border-pink-300 rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-2">{option.title}</h2>
            <p className="text-gray-600 mb-4">{option.description}</p>
            <p className="text-xl font-bold mb-4">{option.price}</p>
            <h3 className="font-semibold">Features:</h3>
            <ul className="list-disc pl-5 mb-4">
              {option.features.map((feature) => (
                <li key={feature} className="text-gray-600">{feature}</li>
              ))}
            </ul>
            <button className="bg-pink-600 text-white py-2 px-4 rounded hover:bg-pink-500 transition duration-300">
              Book Now
            </button>
          </div>
        ))}
      </motion.div>
      
      <section className="mt-12">
        <motion.div
          className="text-3xl font-bold text-center text-pink-600 mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-2xl mx-auto">
          <div className="border-b mb-4 pb-2">
            <h3 className="font-semibold">What should I expect during my appointment?</h3>
            <p className="text-gray-600">You will receive a personalized consultation and a luxurious makeup application tailored to your style.</p>
          </div>
          <div className="border-b mb-4 pb-2">
            <h3 className="font-semibold">Do you offer group bookings?</h3>
            <p className="text-gray-600">Yes, we offer special packages for brides and their parties. Contact us for more details.</p>
          </div>
          <div className="border-b mb-4 pb-2">
            <h3 className="font-semibold">What products do you use?</h3>
            <p className="text-gray-600">We use only high-end, luxury cosmetics to ensure a flawless finish.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;