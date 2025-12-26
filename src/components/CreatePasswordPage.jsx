import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import MusicalNotations3D from './MusicalNotations3D';

export default function CreatePasswordPage({ mode, onCreateAccount }) {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const isRecovery = mode === 'recovery';

  const constraints = [
    { label: '8 Characters', met: pass.length >= 8 },
    { label: 'Uppercase', met: /[A-Z]/.test(pass) },
    { label: 'One Number', met: /[0-9]/.test(pass) },
    { label: 'Special Char', met: /[!@#$%^&*]/.test(pass) },
  ];
  const allMet = constraints.every(c => c.met);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!allMet || pass !== confirmPass) { setError('SECURITY MISMATCH'); return; }
    onCreateAccount();
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="KICKR Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase">{isRecovery ? 'RESET PASSWORD' : 'SET PASSWORD'}</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase text-white">ESTABLISH SECURITY PROTOCOLS</p>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input type="password" required value={pass} onChange={(e) => setPass(e.target.value)} placeholder="NEW PASSWORD" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm" />
            <div className="grid grid-cols-2 gap-2 py-2">
              {constraints.map((c, i) => (
                <div key={i} className={`text-[8px] tracking-widest flex items-center gap-2 ${c.met ? 'text-yellow-400' : 'text-white/20'}`}>
                   <div className={`w-1.5 h-1.5 rounded-full ${c.met ? 'bg-yellow-400 shadow-[0_0_8px_#fbbf24]' : 'bg-white'}`} />{c.label}
                </div>
              ))}
            </div>
            <input type="password" required value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="CONFIRM NEW PASSWORD" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm" />
            {error && <p className="text-[9px] text-red-500 font-bold text-center animate-pulse">{error}</p>}
            <button type="submit" disabled={!allMet} className={`w-full font-black py-4 rounded-2xl transition-all duration-500 tracking-[0.3em] text-xs uppercase shadow-lg ${allMet ? 'bg-white text-black hover:bg-yellow-400' : 'bg-white/5 text-white/20'}`}>{isRecovery ? 'RESET PASSWORD' : 'CREATE ACCOUNT'}</button>
          </form>
        </div>
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl text-white">
          <div className="absolute inset-0 z-0">
             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <Environment preset="city" /><ambientLight intensity={0.5} /><Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} /></Suspense>
             </Canvas>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end text-white text-left uppercase">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase text-white">PROTECTING <br /> <span className="font-light italic opacity-80 uppercase text-white/80">YOUR DATA</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-2 leading-tight text-white uppercase font-bold">FINALIZING YOUR <br /> RESEARCH ACCESS</h3>
              <p className="text-[10px] opacity-50 normal-case leading-relaxed text-white">Choose a strong cryptographic key to protect your drum extractions across the Kickr cloud repository.</p>
              <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400 uppercase">ENCRYPTION: ENABLED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}