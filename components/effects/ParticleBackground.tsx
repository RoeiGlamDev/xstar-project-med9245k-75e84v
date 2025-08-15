import { useEffect } from 'react';
import React, { useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

const ParticleBackground: React.FC = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const particles: THREE.Points[] = [];
    const particleCount = 500;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    
    for (let i = 0; i < particleCount; i++) {
      positions[i  3] = (Math.random() - 0.5)  100;
      positions[i  3 + 1] = (Math.random() - 0.5)  100;
      positions[i  3 + 2] = (Math.random() - 0.5)  100;
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    
    const material = new THREE.PointsMaterial({ color: new THREE.Color('#FF69B4'), size: 0.5 });
    const particlesMesh = new THREE.Points(geometry, material);
    scene.add(particlesMesh);
    particles.push(particlesMesh);

    camera.position.z = 50;

    const animate = () => {
      requestAnimationFrame(animate);
      particles.forEach(p => {
        p.rotation.x += 0.001;
        p.rotation.y += 0.001;
      });
      renderer.render(scene, camera);
    };
    
    animate();

    window.addEventListener('resize', () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });

    return () => {
      document.body.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div 
        className="text-white text-5xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        luxury FashionTV cosmetics
      </motion.h1>
      <motion.div 
        className="text-white text-xl absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Elevate your beauty with our exquisite range of luxury cosmetics, designed for the modern fashionista.
      </motion.p>
    </div>
  );
};

export default ParticleBackground;