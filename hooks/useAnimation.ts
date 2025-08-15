import { useEffect, useRef } from 'react';

/
 * Custom hook for handling animations in the luxury FashionTV cosmetics user experience.
 * This hook is designed to create elegant and luxurious animations that reflect the brand's high-end fashion aesthetic.
 * 
 * @param {string} animationType - The type of animation to apply (e.g., 'fade', 'slide').
 * @param {number} duration - Duration of the animation in milliseconds.
 * @param {boolean} trigger - A boolean to control when the animation should be executed.
 * @returns {object} - An object containing the animation class and a ref to be attached to the element.
 */
export interface AnimationProps {
  animationType: 'fade' | 'slide';
  duration: number;
  trigger: boolean;
}

export interface UseAnimationReturn {
  animationClass: string;
  ref: React.RefObject<HTMLDivElement>;
}

/
 * Custom hook to manage animations for luxury FashionTV cosmetics.
 * @param {AnimationProps} props - The animation properties.
 * @returns {UseAnimationReturn} - The animation class and ref for the animated element.
 */
export const useAnimation = ({ animationType, duration, trigger }: AnimationProps): UseAnimationReturn => {
  const ref = useRef<HTMLDivElement>(null);
  const animationClass = luxury-animation-${animationType};

  useEffect(() => {
    if (trigger && ref.current) {
      ref.current.classList.add(animationClass);
      const timeout = setTimeout(() => {
        ref.current?.classList.remove(animationClass);
      }, duration);

      return () => clearTimeout(timeout);
    }
  }, [trigger, animationClass, duration]);

  return { animationClass, ref };
};