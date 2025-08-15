import React from 'react';
import { motion } from 'framer-motion';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Essence Collection',
    price: '$199',
    features: [
      'Personalized makeup consultation',
      'Luxury product samples',
      'Exclusive access to FashionTV events',
    ],
  },
  {
    title: 'Glamour Collection',
    price: '$399',
    features: [
      'Full makeup application service',
      'Custom skincare regimen',
      'VIP invites to FashionTV runway shows',
    ],
  },
  {
    title: 'Elite Collection',
    price: '$699',
    features: [
      'One-on-one styling session with top artists',
      'Luxury gift box of exclusive products',
      'Priority access to new collections',
    ],
  },
];

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white text-pink-600 py-12 px-6">
      <h2 className="text-center text-4xl font-extrabold mb-8">Luxury FashionTV Cosmetics Pricing</h2>
      <div className="flex flex-wrap justify-center">
        {pricingTiers.map((tier, index) => (
          <motion.div
            key={index}
            className="bg-pink-200 rounded-lg shadow-lg p-6 m-4 max-w-xs transition-transform transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold mb-4">{tier.title}</h3>
            <p className="text-xl font-bold mb-4">{tier.price}</p>
            <ul className="mb-6">
              {tier.features.map((feature, idx) => (
                <li key={idx} className="mb-2 flex items-center">
                  <span className="material-icons text-pink-600 mr-2">check_circle</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-pink-600 text-white py-2 px-4 rounded-full hover:bg-pink-700 transition duration-300">
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;