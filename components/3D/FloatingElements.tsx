import React from 'react';
import { Canvas } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';
import { a } from '@react-spring/three';
import { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';

interface FloatingElementProps {
  position: [number, number, number];
}

const FloatingElement: React.FC<FloatingElementProps> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [{ position: springPosition }, set] = useSpring(() => ({
    position: [position[0], position[1], position[2]],
  }));

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.01;
    }
  });

  useEffect(() => {
    const float = () => {
      set({ position: [position[0], position[1] + 0.1  Math.sin(Date.now()  0.001), position[2]] });
      requestAnimationFrame(float);
    };
    float();
  }, [position, set]);

  return (
    <a.mesh ref={meshRef} position={springPosition}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="#FFC0CB" />
    </a.mesh>
  );
};

const FloatingElements: React.FC = () => {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingElement position={[0, 0, 0]} />
        <FloatingElement position={[-2, 0, 0]} />
        <FloatingElement position={[2, 0, 0]} />
      </Canvas>
    </div>
  );
};

const LuxuryFashionTVCosmetics: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-center flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-pink-500 mb-4">Welcome to luxury FashionTV cosmetics</h1>
      <p className="text-lg text-gray-700 mb-4">
        Discover the epitome of elegance and sophistication with our exclusive range of high-end cosmetics, designed for the discerning fashionista.
      </p>
      <p className="text-md text-gray-500 mb-8">
        Each product is meticulously crafted to enhance your natural beauty, ensuring you radiate confidence and style at every occasion.
      </p>
      <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-600 transition duration-300 ease-in-out">
        Explore Our Collection
      </button>
      <FloatingElements />
    </div>
  );
};

export default LuxuryFashionTVCosmetics;