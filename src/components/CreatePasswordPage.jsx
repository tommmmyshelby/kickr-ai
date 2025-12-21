import React, { useState, Suspense, useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import MusicalNotations3D from './MusicalNotations3D';

export default function CreatePasswordPage({ mode, onCreateAccount }) {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');

  const isRecovery = mode === 'recovery';

  // --- Password Constraints Logic ---
  const constraints = [
    { label: 'Min 8 Characters', met: pass.length >= 8 },
    { label: 'One Uppercase', met: /[A-Z]/.test(pass) },
    { label: 'One Number', met: /[0-9]/.test(pass) },
    { label: 'One Special Char (@#$)', met: /[!@#$%^&*]/.test(pass) },
  ];

  const allMet = constraints.every(c => c.met);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allMet) {
      setError('SECURITY ERROR: ALL PROTOCOLS MUST BE MET');
      return;
    }
    if (pass !== confirmPass) {
      setError('SECURITY ERROR: PASSWORDS DO NOT MATCH');
      return;
    }
    setError('');
    onCreateAccount();
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        
        {/* LEFT SIDE: FORM & CONSTRAINTS */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-400 rounded-lg flex items-center justify-center font-black text-black text-xl">S</div>
            <span className="font-bold tracking-[0.4em] text-[10px]">SATURN / AI</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none">
            {isRecovery ? 'RESET PASSWORD' : 'SET PASSWORD'}
          </h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase">ESTABLISH SECURITY PROTOCOLS</p>

          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <div className="space-y-1">
              <label className="text-[9px] opacity-50 uppercase">NEW PASSWORD</label>
              <input 
                type="password" required value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                placeholder="••••••••" 
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm" 
              />
            </div>

            {/* REAL-TIME CONSTRAINT CHECKLIST */}
            <div className="grid grid-cols-2 gap-2 py-2">
              {constraints.map((c, i) => (
                <div key={i} className={`text-[8px] tracking-widest flex items-center gap-2 transition-opacity ${c.met ? 'text-yellow-400 opacity-100' : 'text-white opacity-20'}`}>
                   <div className={`w-1.5 h-1.5 rounded-full ${c.met ? 'bg-yellow-400 shadow-[0_0_8px_#fbbf24]' : 'bg-white'}`} />
                   {c.label}
                </div>
              ))}
            </div>

            <div className="space-y-1 pb-2">
              <label className="text-[9px] opacity-50 uppercase">CONFIRM PASSWORD</label>
              <input 
                type="password" required value={confirmPass} 
                onChange={(e) => setConfirmPass(e.target.value)} 
                placeholder="••••••••" 
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm" 
              />
            </div>

            {error && <p className="text-[9px] text-red-500 font-bold tracking-widest text-center animate-pulse">{error}</p>}
            
            <button 
              type="submit" 
              className={`w-full font-black py-4 rounded-2xl transition-all duration-500 tracking-[0.3em] text-xs uppercase shadow-lg ${allMet ? 'bg-white text-black hover:bg-yellow-400' : 'bg-white/5 text-white/20 cursor-not-allowed border border-white/5'}`}
            >
              {isRecovery ? 'RESET PASSWORD' : 'CREATE ACCOUNT'}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE (Stay consistent) */}
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0">
             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <Environment preset="city" /><ambientLight intensity={0.5} />
                <Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} /></Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} />
             </Canvas>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end text-left uppercase">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4">PROTECTING <br /> <span className="font-light italic opacity-80 uppercase">YOUR DATA</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-2 leading-tight uppercase">FINALIZING YOUR <br /> RESEARCH ACCESS</h3>
              <p className="text-[10px] opacity-50 normal-case leading-relaxed">Choose a strong cryptographic key to protect your drum extractions and synthesized patterns across the Saturn cloud repository.</p>
              <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400 uppercase">ENCRYPTION: ENABLED</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}