import React from 'react';
import { useGLTF, Float } from '@react-three/drei';

export default function Hero3D() {
  const { scene } = useGLTF('/drums.glb'); 
  return (
    <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
      <primitive object={scene} scale={2.2} position={[0, -0.5, 0]} rotation={[0, -0.4, 0]} />
    </Float>
  );
}