import React from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  review: string;
  rating: number;
  photo: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sophia L.',
    review: 'The quality of the products from luxury FashionTV cosmetics is unmatched. I feel like a star every time I wear them!',
    rating: 5,
    photo: '/images/testimonials/sophia.jpg',
  },
  {
    name: 'Isabella N.',
    review: 'I absolutely adore the luxurious feel of these cosmetics. They elevate my makeup game to a whole new level!',
    rating: 5,
    photo: '/images/testimonials/isabella.jpg',
  },
  {
    name: 'Mia R.',
    review: 'Every product I’ve tried has been a game changer. The packaging is stunning and the formulas are divine!',
    rating: 5,
    photo: '/images/testimonials/mia.jpg',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-pink-500 text-center mb-10">
          What Our Customers Say About luxury FashionTV cosmetics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-pink-100 rounded-lg p-6 shadow-lg transition-transform transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="rounded-full w-24 h-24 mb-4 mx-auto"
              />
              <h3 className="text-xl font-semibold text-pink-500 text-center">
                {testimonial.name}
              </h3>
              <p className="text-gray-700 text-center mb-4">{testimonial.review}</p>
              <div className="flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, i) => (
                  <span key={i} className="text-yellow-400">&#9733;</span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }, (_, i) => (
                  <span key={i} className="text-gray-300">&#9733;</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;