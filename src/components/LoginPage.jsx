import { motion } from 'framer-motion';
import React, { useState, Suspense, useMemo } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Center, Environment, ContactShadows } from '@react-three/drei';
import { Eye, EyeOff } from 'lucide-react';

// --- 3D NOTATION ENGINE ---
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

function MusicalNotations3D() {
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

export default function LoginPage({ onLogin, onForgotClick, onRegisterClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden">
      <motion.div 
  initial={{ width: "0%" }}
  animate={{ width: "100%" }}
  transition={{ duration: 0.5, ease: "circIn" }}
  className="fixed top-0 left-0 h-[2px] bg-yellow-400 z-[100] shadow-[0_0_15px_#fbbf24]"
/>
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        
        {/* LEFT SIDE: FORM */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center font-black text-black text-xl rounded-lg">S</div>
            <span className="font-bold tracking-[0.4em] text-[10px]">SATURN / AI</span>
          </div>

          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none">SIGN IN</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8">AUTHORIZATION TERMINAL ACTIVE</p>

          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4 max-w-md">
            <div className="space-y-1">
              <label className="text-[9px] tracking-[0.2em] opacity-50">EMAIL ADDRESS</label>
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)} 
                placeholder="E.G. USER@COLLEGE.EDU" 
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40 placeholder:tracking-widest" 
              />
            </div>

            <div className="space-y-1">
              <label className="text-[9px] tracking-[0.2em] opacity-50">SECURITY CODE</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  required value={password} onChange={(e) => setPassword(e.target.value)} 
                  placeholder="ENTER ACCESS KEY" 
                  className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40 placeholder:tracking-widest" 
                />
                <button 
                  type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 opacity-60 hover:opacity-100"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1 text-[10px]">
              <label className="flex items-center gap-2 cursor-pointer opacity-40 hover:opacity-100">
                <input type="checkbox" className="accent-yellow-400" />
                <span>REMEMBER ME</span>
              </label>
              <button type="button" onClick={onForgotClick} className="opacity-40 hover:opacity-100 underline decoration-white/10">FORGOT PASSWORD?</button>
            </div>

            <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all duration-500 tracking-[0.3em] text-xs">
              SIGN IN
            </button>
          </form>

          <div className="mt-8 text-[10px] tracking-widest">
            <span className="opacity-40 uppercase">DON'T HAVE AN ACCOUNT? </span>
            <button onClick={onRegisterClick} className="text-yellow-400 font-bold hover:underline">SIGN UP</button>
          </div>
        </div>

        {/* RIGHT SIDE: SHOWCASE CARD */}
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0">
             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <Environment preset="city" />
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                  <MusicalNotations3D />
                  <ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} />
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} />
             </Canvas>
          </div>

          <div className="relative z-10 h-full flex flex-col justify-end text-white uppercase">
            <div className="mb-4 font-bold tracking-[0.5em] text-[10px] text-yellow-400">SATURN AI / V4.0</div>
            <h2 className="text-6xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase">WELCOME TO <br /> <span className="font-light italic opacity-80 text-white/90">SATURN AI</span></h2>
            <p className="text-[11px] tracking-[0.15em] leading-relaxed opacity-40 max-w-sm normal-case mb-10 text-white">
              Instantly extract precise drum patterns from any audio source. Join 17k+ musicians and researchers already using Saturn AI.
            </p>

            {/* SYCHRONIZED BOX (Matches Recover Image) */}
            {/* ... inside the right side card ... */}
<div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
  <div>
    <h3 className="text-xl font-bold tracking-tight mb-2 uppercase text-white leading-tight">
      GET YOUR RIGHT DRUM BEAT <br /> AND PRACTICE NOW
    </h3>
    <p className="text-[10px] opacity-50 tracking-[0.1em] normal-case text-white leading-relaxed max-w-[280px]">
      Access your cloud-synced projects and resume your rhythmic analysis. Our AI engine is ready to process your next session.
    </p>
  </div>
  <div className="flex items-center justify-between mt-6">
    <div className="flex -space-x-3">
      {['♩', '♫', '✕', '♬'].map((note, i) => (
        <div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] border border-white/10 text-yellow-400 text-lg font-bold animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>{note}</div>
      ))}
      <div className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-yellow-400 text-black text-[9px] font-black italic uppercase px-1">BPM</div>
    </div>
    <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400 uppercase">ACCESS_GRANTED</div>
  </div>
</div>
          </div>
        </div>

      </div>
    </div>
  );
}