import { Config } from 'tailwindcss';

/
 * Tailwind CSS configuration for luxury FashionTV cosmetics.
 * This configuration utilizes a custom pink and white color scheme
 * to create an elegant and high-end design suitable for a luxury fashion brand.
 *
 * @module tailwind.config.ts
 */

const tailwindConfig: Config = {
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#F7B2CB', // Light pink for accents
          DEFAULT: '#D5006D', // Main pink color
          dark: '#A4004E', // Dark pink for deeper tones
        },
        white: '#FFFFFF', // Pure white for backgrounds and text
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};

export default tailwindConfig;