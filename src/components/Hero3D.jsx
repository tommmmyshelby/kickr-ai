import React from 'react';
import { useGLTF, Float } from '@react-three/drei';

export default function Hero3D() {
  const { scene } = useGLTF('/drums.glb');

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive 
        object={scene} 
        scale={2.2} 
        position={[0, -0.8, 0]} 
      />
    </Float>
  );
}