import React from 'react';
import { Canvas } from 'react-three-fiber';
import { useFrame } from '@react-three/fiber';
import { animated } from 'react-spring';
import { useSpring } from 'react-spring/three';
import { Html } from '@react-three/drei';

interface SceneProps {
    width: number;
    height: number;
}

const AnimatedText = ({ text }: { text: string }) => {
    const props = useSpring({
        loop: true,
        to: [{ position: [0, 0, 0] }, { position: [0, 0.5, 0] }],
        from: { position: [0, 0, 0] },
        config: { duration: 1000 },
    });

    return (
        <animated.mesh position={props.position}>
            <textGeometry args={[text, { font: 'https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxI.woff', size: 1, height: 0.1 }]} />
            <meshStandardMaterial color="#FFC0CB" />
        </animated.mesh>
    );
};

const Scene: React.FC<SceneProps> = ({ width, height }) => {
    return (
        <Canvas
            style={{ height: ''100vh'', width: ''100%' '}}
            camera={{ position: [0, 0, 5], fov: 50 }}
        >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Html center>
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold mb-4">Welcome to luxury FashionTV cosmetics</h1>
                    <p className="mb-8">Indulge in the elegance and sophistication of high-end beauty.</p>
                </div>
            </Html>
            <AnimatedText text="luxury FashionTV cosmetics" />
        </Canvas>
    );
};

export default Scene;