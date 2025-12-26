import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import MusicalNotations3D from './MusicalNotations3D';
import MusicWave from './MusicWave';

export default function RegistrationPage({ onBackToLogin, onOtpVerified }) {
  const [step, setStep] = useState('info'); 
  const [formData, setFormData] = useState({ fullName: '', email: '', confirmEmail: '' });
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (otp === '123456') onOtpVerified();
  }, [otp, onOtpVerified]);

  const handleInfoSubmit = (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) { setError('EMAILS DO NOT MATCH'); return; }
    setStep('otp');
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-6 text-white text-left">
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.png" alt="KICKR Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span>
          </div>
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase">REGISTER</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-6 uppercase">{step === 'info' ? 'NEW RESEARCHER ACCOUNT' : 'IDENTITY VERIFICATION'}</p>
          <form onSubmit={handleInfoSubmit} className="space-y-3.5 max-w-md">
            {step === 'info' ? (
              <>
                <input type="text" required placeholder="FULL NAME" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="EMAIL ADDRESS" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                <input type="email" required value={formData.confirmEmail} onChange={(e) => setFormData({...formData, confirmEmail: e.target.value})} placeholder="CONFIRM EMAIL" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all text-xs uppercase">VERIFY EMAIL</button>
              </>
            ) : (
              <div className="space-y-6">
                <label className="text-[9px] text-yellow-400 font-bold tracking-widest text-center block">ENTER 6-DIGIT OTP SENT TO {formData.email}</label>
                <input type="text" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="••••••" className="w-full bg-[#0d0d0d] border border-yellow-400/30 rounded-2xl py-5 outline-none focus:border-yellow-400 text-center text-3xl tracking-[0.5em] text-yellow-400" />
                <p className="text-[8px] opacity-30 text-center uppercase mt-2 italic">Check your inbox (Demo: 123456)</p>
              </div>
            )}
            <button type="button" onClick={onBackToLogin} className="w-full text-center text-[10px] tracking-widest opacity-40 hover:opacity-100 underline text-white">ALREADY REGISTERED? SIGN IN</button>
          </form>
        </div>

        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0">
             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <Environment preset="city" /><ambientLight intensity={0.5} />
                <Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} /></Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} />
             </Canvas>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end text-white text-left uppercase">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4">START YOUR <br /> <span className="font-light italic opacity-80 uppercase">RESEARCH</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <div><h3 className="text-xl font-bold mb-2 leading-tight">START YOUR COMPREHENSIVE <br /> RHYTHMIC JOURNEY</h3>
              <p className="text-[10px] opacity-50 normal-case leading-relaxed">Join over 17,000 researchers using the KICKR neural engine to decode complex drum signatures.</p></div>
              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-4"><div className="flex -space-x-3">{['♩', '♫', '✕', '♬'].map((note, i) => (
                    <div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] text-yellow-400 text-lg font-bold">{note}</div>
                  ))}</div><div className="pl-4 border-l border-white/10"><MusicWave count={5} size="small" /></div></div>
                <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400">JOIN_PROTOCOL</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}