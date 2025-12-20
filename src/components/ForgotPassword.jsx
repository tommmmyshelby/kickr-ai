import React, { useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Center, Environment, ContactShadows } from '@react-three/drei';

// --- CUSTOM 3D MUSIC NOTATION ENGINE ---
// This draws shapes manually to ensure they look thick, rounded, and gold
function MusicNote({ type, ...props }) {
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    if (type === 'note') {
      // Draw a Quarter Note (♩)
      s.absellipse(0, 0, 0.4, 0.3, 0, Math.PI * 2, false, 0); // Head
      s.moveTo(0.35, 0); s.lineTo(0.35, 1.2); s.lineTo(0.25, 1.2); s.lineTo(0.25, 0.1); // Stem
    } else {
      // Draw a Hi-Hat 'X' (✕)
      const w = 0.12; const l = 0.5;
      s.moveTo(-l, l-w); s.lineTo(-l+w, l); s.lineTo(l, -l+w); s.lineTo(l-w, -l); s.lineTo(-l, l-w);
      s.moveTo(l-w, l); s.lineTo(l, l-w); s.lineTo(-l+w, -l); s.lineTo(-l, -l+w); s.lineTo(l-w, l);
    }
    return s;
  }, [type]);

  const extrudeSettings = { 
    depth: 0.3,           // Thickness like the early gold object
    bevelEnabled: true, 
    bevelThickness: 0.1,  // Rounded edge depth
    bevelSize: 0.05,      // Rounded edge width
    bevelSegments: 5 
  };

  return (
    <Float {...props}>
      <Center>
        <mesh>
          <extrudeGeometry args={[shape, extrudeSettings]} />
          {/* HIGH-GLOSS GOLD MATERIAL */}
          <meshStandardMaterial 
            color="#fbbf24" 
            metalness={1} 
            roughness={0.05} 
            emissive="#422006" 
            emissiveIntensity={0.4} 
          />
        </mesh>
      </Center>
    </Float>
  );
}

function MusicalNotations3D() {
  return (
    <group>
      <MusicNote type="note" position={[-1.5, 1.5, 0]} speed={1.5} rotationIntensity={2} />
      <MusicNote type="x"    position={[1.5, 1.8, -1]} speed={2} rotationIntensity={3} />
      <MusicNote type="note" position={[-1.2, -1.5, 1]} speed={1.2} rotationIntensity={2} />
      <MusicNote type="x"    position={[2, -1, 0]} speed={1.8} rotationIntensity={4} />
      <MusicNote type="note" position={[0, 0, -2]} speed={1.3} rotationIntensity={1} />
    </group>
  );
}

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => onBack(), 3000);
  };

  return (
    <div className="min-h-screen w-full bg-[#070707] text-white uppercase font-sans overflow-hidden animate-in fade-in duration-500 flex items-center justify-center p-4 lg:p-10">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch min-h-[85vh]">
        
        {/* LEFT SIDE: RECOVERY FORM */}
        <div className="flex flex-col justify-center px-6 lg:px-20 py-12">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center font-black text-black text-xl rounded-lg">S</div>
            <span className="font-bold tracking-[0.4em] text-[10px]">SATURN / AI</span>
          </div>

          <h1 className="text-5xl lg:text-6xl font-['Archivo_Black'] tracking-tighter mb-2 leading-none">RECOVER</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-10">ESTABLISH IDENTITY PROTOCOL</p>

          {!success ? (
            <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
              <div className="space-y-2">
                <label className="text-[9px] tracking-[0.2em] opacity-50">REGISTERED EMAIL</label>
                <input 
                  type="email" required value={email} onChange={(e) => setEmail(e.target.value)} 
                  placeholder="USER@COLLEGE.EDU" 
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 transition-all text-sm placeholder:opacity-20" 
                />
              </div>
              <button type="submit" className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-yellow-400 transition-all duration-500 tracking-[0.3em] text-xs">
                SEND RECOVERY KEY
              </button>
              <button type="button" onClick={onBack} className="w-full text-center text-[10px] tracking-widest opacity-40 hover:opacity-100 transition-opacity underline decoration-white/10">
                RETURN TO SIGN IN
              </button>
            </form>
          ) : (
            <div className="p-8 border border-yellow-400/20 bg-yellow-400/5 rounded-2xl max-w-md animate-in zoom-in-95">
              <p className="text-yellow-400 text-xs tracking-widest font-bold mb-2">SUCCESS / DISPATCHED</p>
              <p className="opacity-60 text-[10px] leading-relaxed">RECOVERY KEY SENT TO {email}. REDIRECTING...</p>
            </div>
          )}
        </div>

        {/* RIGHT SIDE: SHOWCASE CARD */}
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3.5rem] p-16 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0">
             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                {/* Environment makes the gold notations "visible in light" by providing reflections */}
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#fbbf24" />
                
                <Suspense fallback={null}>
                  <MusicalNotations3D />
                  <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
                </Suspense>
                
                <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} />
             </Canvas>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="mb-4 font-bold tracking-[0.5em] text-[10px] text-yellow-400 uppercase">SECURITY & DATA / V4.0</div>
            <h2 className="text-6xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-6">PROTECTING <br /> <span className="font-light italic opacity-80">YOUR DATA</span></h2>
            <p className="text-[11px] tracking-[0.15em] leading-relaxed opacity-60 max-w-sm normal-case mb-10">
              Secure your research with industry-standard encryption. Saturn AI prioritizes your account safety and project privacy.
            </p>

            {/* Bottom Card */}
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10">
              <h3 className="text-xl font-bold tracking-tight mb-3">24/7 ENCRYPTED <br /> CLOUD BACKUP</h3>
              <div className="flex items-center justify-between mt-8">
                <div className="flex -space-x-3">
                  {['♩', '♫', '✕', '♬'].map((note, i) => (
                    <div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] border border-white/10 text-yellow-400 text-lg font-bold animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>{note}</div>
                  ))}
                  <div className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-yellow-400 text-black text-[9px] font-black italic uppercase px-1">SYNC</div>
                </div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400">ENCRYPTION: AES-256</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}