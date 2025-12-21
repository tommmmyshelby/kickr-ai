import React, { useMemo } from 'react';
import * as THREE from 'three';
import { Float, Center } from '@react-three/drei';

// --- THE 3D ENGINE ---
function MusicNote({ type, ...props }) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    if (type === 'note') {
      s.absellipse(0, 0, 0.4, 0.3, 0, Math.PI * 2, false, 0);
      s.moveTo(0.35, 0); s.lineTo(0.35, 1.2); s.lineTo(0.25, 1.2); s.lineTo(0.25, 0.1);
    } else {
      const w = 0.12; const l = 0.5;
      s.moveTo(-l, l-w); s.lineTo(-l+w, l); s.lineTo(l, -l+w); s.lineTo(l-w, -l); s.lineTo(-l, l-w);
      s.moveTo(l-w, l); s.lineTo(l, l-w); s.lineTo(-l+w, -l); s.lineTo(-l, -l+w); s.lineTo(l-w, l);
    }
    return s;
  }, [type]);

  return (
    <Float {...props}>
      <Center>
        <mesh>
          <extrudeGeometry args={[shape, { depth: 0.3, bevelEnabled: true, bevelThickness: 0.1, bevelSize: 0.05, bevelSegments: 5 }]} />
          <meshStandardMaterial color="#fbbf24" metalness={1} roughness={0.05} emissive="#422006" emissiveIntensity={0.5} />
        </mesh>
      </Center>
    </Float>
  );
}

// --- THE COMPONENT YOU WERE TRYING TO IMPORT ---
export default function MusicalNotations3D() {
  return (
    <group>
      <MusicNote type="note" position={[-2, 1.5, 0]} speed={1.5} rotationIntensity={2} />
      <MusicNote type="x"    position={[2, 2, -1]} speed={2} rotationIntensity={3} />
      <MusicNote type="note" position={[-1.5, -1.5, 1]} speed={1.2} rotationIntensity={2} />
      <MusicNote type="x"    position={[2.2, -1, 0]} speed={1.8} rotationIntensity={4} />
      <MusicNote type="note" position={[0, 0, -2]} speed={1.3} rotationIntensity={1} />
    </group>
  );
}