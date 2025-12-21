import React, { useState, Suspense, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Float, Center, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';

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

export default function RegistrationPage({ onBackToLogin, onOtpVerified }) {
  const [step, setStep] = useState('info'); 
  const [formData, setFormData] = useState({ fullName: '', email: '', confirmEmail: '' });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  // Watch for OTP change and trigger navigation
  useEffect(() => {
    if (otp === '123456') {
      onOtpVerified();
    }
  }, [otp, onOtpVerified]);

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      setError('VALIDATION ERROR: EMAILS DO NOT MATCH');
      return;
    }
    setError('');
    setStep('otp');
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white relative">
      
      <motion.div initial={{ width: "0%" }} animate={{ width: "100%" }} transition={{ duration: 0.5 }} className="fixed top-0 left-0 h-[2px] bg-yellow-400 z-[100]" />

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        
        <div className="flex flex-col justify-center px-6 lg:px-16 py-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-yellow-400 flex items-center justify-center font-black text-black text-xl rounded-lg">S</div>
            <span className="font-bold tracking-[0.4em] text-[10px]">SATURN / AI</span>
          </div>

          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase">REGISTER</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-6 uppercase">
            {step === 'info' ? 'NEW RESEARCHER ACCOUNT' : 'IDENTITY VERIFICATION PROTOCOL'}
          </p>

          <form onSubmit={handleInfoSubmit} className="space-y-4 max-w-md">
            {step === 'info' ? (
              <div className="space-y-4 animate-in slide-in-from-left-4 duration-500">
                <div className="space-y-1">
                  <label className="text-[9px] opacity-50">FULL NAME</label>
                  <input type="text" required placeholder="E.G. PROF. JOHN DOE" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] opacity-50">EMAIL ADDRESS</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="USER@COLLEGE.EDU" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] opacity-50 text-yellow-400 font-bold">CONFIRM EMAIL</label>
                  <input type="email" required value={formData.confirmEmail} onChange={(e) => setFormData({...formData, confirmEmail: e.target.value})} placeholder="REPEAT EMAIL ADDRESS" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                </div>
                <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all duration-500 tracking-[0.3em] text-xs uppercase">
                  VERIFY EMAIL
                </button>
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-right-4 duration-500">
                <div className="space-y-2">
                  <label className="text-[9px] text-yellow-400 tracking-[0.3em] font-bold">ENTER 6-DIGIT OTP SENT TO {formData.email}</label>
                  <input 
                    type="text" maxLength="6" value={otp} 
                    onChange={(e) => setOtp(e.target.value)} 
                    placeholder="••••••" 
                    className="w-full bg-[#0d0d0d] border border-yellow-400/30 rounded-2xl px-6 py-5 outline-none focus:border-yellow-400 text-center text-3xl tracking-[0.5em] text-yellow-400" 
                  />
                  <p className="text-[8px] opacity-30 text-center tracking-widest uppercase mt-2">Check your inbox for the code (Demo: 123456)</p>
                </div>
                <button type="button" onClick={() => setStep('info')} className="w-full text-center text-[9px] opacity-40 hover:opacity-100 uppercase underline">Wrong email? go back</button>
              </div>
            )}

            {error && <p className="text-[9px] text-red-500 font-bold tracking-widest text-center">{error}</p>}

            <button type="button" onClick={onBackToLogin} className="w-full text-center text-[10px] tracking-widest opacity-40 hover:opacity-100 transition-opacity underline uppercase">
              ALREADY HAVE ACCESS? SIGN IN
            </button>
          </form>
        </div>

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
          <div className="relative z-10 h-full flex flex-col justify-end">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase">START YOUR <br /> <span className="font-light italic opacity-80 uppercase">RESEARCH</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 leading-tight uppercase">START YOUR COMPREHENSIVE <br /> RHYTHMIC JOURNEY</h3>
                <p className="text-[10px] opacity-50 normal-case leading-relaxed max-w-[280px]">Join over 17,000 researchers using our neural-transform engine to decode complex drum signatures.</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex -space-x-3">
                  {['♩', '♫', '✕', '♬'].map((note, i) => (
                    <div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] border border-white/10 text-yellow-400 text-lg font-bold animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>{note}</div>
                  ))}
                  <div className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-yellow-400 text-black text-[9px] font-black italic px-1 uppercase">NEW</div>
                </div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400">JOIN_PROTOCOL</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}