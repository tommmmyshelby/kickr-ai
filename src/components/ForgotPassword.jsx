import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import MusicalNotations3D from './MusicalNotations3D';

export default function ForgotPassword({ onBack, onOtpVerified }) {
  const [step, setStep] = useState('email'); // 'email' or 'otp'
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (otp === '123456') {
      onOtpVerified();
    }
  }, [otp, onOtpVerified]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setStep('otp');
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="KICKR Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span>
          </div>
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none">RECOVER</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase">
            {step === 'email' ? 'ESTABLISH IDENTITY PROTOCOL' : 'VERIFY SECURITY KEY'}
          </p>

          <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md">
            {step === 'email' ? (
              <div className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[9px] opacity-50">REGISTERED EMAIL</label>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="USER@COLLEGE.EDU" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm" />
                </div>
                <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all text-xs">SEND RECOVERY KEY</button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2 text-center">
                  <label className="text-[9px] text-yellow-400 font-bold tracking-widest">ENTER 6-DIGIT OTP SENT TO {email}</label>
                  <input type="text" maxLength="6" value={otp} onChange={(e) => setOtp(e.target.value)} placeholder="••••••" className="w-full bg-[#0d0d0d] border border-yellow-400/30 rounded-2xl py-5 outline-none focus:border-yellow-400 text-center text-3xl tracking-[0.5em] text-yellow-400" />
                </div>
              </div>
            )}
            <button type="button" onClick={onBack} className="w-full text-center text-[10px] opacity-40 hover:opacity-100 underline decoration-white/10">RETURN TO SIGN IN</button>
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
          <div className="relative z-10 h-full flex flex-col justify-end">
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-2 leading-tight uppercase">SECURE YOUR RECOVERY <br /> AND PROTECT YOUR DATA</h3>
              <p className="text-[10px] opacity-50 normal-case leading-relaxed">Our AES-256 encryption protocols ensure that your unique extracted patterns remain strictly authorized.</p>
              <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400">AES_PROTECTED</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}