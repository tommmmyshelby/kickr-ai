import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
<<<<<<< HEAD
import { Environment } from '@react-three/drei';
=======
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
import MusicalNotations3D from './MusicalNotations3D';
import MusicWave from './MusicWave';

export default function RegistrationPage({ onBackToLogin, onOtpVerified }) {
  const [step, setStep] = useState('info'); 
<<<<<<< HEAD
  const [formData, setFormData] = useState({ fullName: '', username: '', email: '', confirmEmail: '' });
=======
  const [formData, setFormData] = useState({ fullName: '', email: '', confirmEmail: '' });
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => { 
    const verify = async () => {
      if (otp.length === 6) {
        try {
          const res = await fetch('http://127.0.0.1:8000/auth/verify-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: formData.email, otp: otp })
          });
<<<<<<< HEAD
          if (res.ok) onOtpVerified(formData.email, formData.fullName, formData.username, otp);
=======
          if (res.ok) onOtpVerified(formData.email, formData.fullName, otp);
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
          else setError("INVALID_SECURITY_KEY");
        } catch (err) { setError("CONNECTION_FAILED"); }
      }
    };
    verify();
  }, [otp]);

  const handleInfoSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) { setError('EMAILS DO NOT MATCH'); return; }
    setIsLoading(true); setError('');

    try {
      const res = await fetch('http://127.0.0.1:8000/auth/request-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
<<<<<<< HEAD
        body: JSON.stringify({ email: formData.email, flow_type: 'registration' })
=======
        body: JSON.stringify({ 
          email: formData.email,
          flow_type: 'registration' // Context added
        })
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
      });
      if (res.ok) setStep('otp');
      else {
        const data = await res.json();
        setError(data.detail || "REQUEST_FAILED");
      }
    } catch (err) { setError("SERVER_OFFLINE"); }
    finally { setIsLoading(false); }
  };

  return (
<<<<<<< HEAD
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-6 uppercase text-white overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 h-full py-10">
        <div className="flex flex-col justify-center px-16">
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-2 uppercase">SIGN UP</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-10 uppercase">NEW RESEARCHER IDENTITY</p>
          <form onSubmit={handleInfoSubmit} className="space-y-4 max-w-md">
            {step === 'info' ? (
              <>
                <input type="text" required value={formData.fullName} onChange={(e)=>setFormData({...formData, fullName: e.target.value})} placeholder="FULL NAME" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm" />
                <input type="text" required value={formData.username} onChange={(e)=>setFormData({...formData, username: e.target.value.toLowerCase()})} placeholder="CHOOSE USERNAME" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm" />
                <input type="email" required value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} placeholder="EMAIL ADDRESS" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm" />
                <input type="email" required value={formData.confirmEmail} onChange={(e)=>setFormData({...formData, confirmEmail: e.target.value})} placeholder="CONFIRM EMAIL" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm" />
                <button type="submit" disabled={isLoading} className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-yellow-400 transition-all text-xs uppercase">{isLoading ? 'ESTABLISHING...' : 'VERIFY IDENTITY'}</button>
              </>
            ) : (
              <div className="space-y-6">
                <label className="text-[10px] text-yellow-400 font-bold tracking-widest text-center block uppercase">ENTER 6-DIGIT OTP SENT TO MAIL</label>
                <input type="text" maxLength="6" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="••••••" className="w-full bg-[#0d0d0d] border border-yellow-400/30 rounded-2xl py-6 outline-none text-center text-4xl tracking-[0.5em] text-yellow-400" />
              </div>
            )}
            {error && <p className="text-red-500 text-[10px] font-bold text-center uppercase">{error}</p>}
            <button type="button" onClick={onBackToLogin} className="w-full text-center text-[10px] tracking-widest opacity-40 hover:opacity-100 underline uppercase">RETURN TO LOGIN</button>
          </form>
        </div>
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative border border-white/10 shadow-2xl">
           <div className="absolute inset-0 opacity-80"><Canvas><Suspense fallback={null}><MusicalNotations3D /></Suspense><Environment preset="city" /></Canvas></div>
           <div className="relative z-10 h-full flex flex-col justify-end uppercase">
              <h2 className="text-6xl font-['Archivo_Black'] leading-[0.9] mb-6 uppercase">START YOUR <br/> <span className="italic font-light opacity-60 uppercase">RESEARCH</span></h2>
              <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 w-full min-h-[160px] flex flex-col justify-between">
                <h3 className="text-xl font-bold uppercase text-white">ACCESS NEURAL ENGINE</h3>
                <div className="flex items-center justify-between"><MusicWave count={6}/><span className="text-[9px] text-yellow-400 font-bold tracking-widest uppercase">JOIN_PROTOCOL</span></div>
              </div>
           </div>
=======
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-6 text-left">
          <div className="flex items-center gap-4 mb-4"><img src="/logo.png" className="h-10 w-auto" alt="KICKR"/><span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span></div>
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase text-white">REGISTER</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-6 uppercase text-white">{step === 'info' ? 'NEW RESEARCHER ACCOUNT' : 'IDENTITY VERIFICATION'}</p>
          
          <form onSubmit={handleInfoSubmit} className="space-y-3.5 max-w-md">
            {step === 'info' ? (
              <>
                <input type="text" required value={formData.fullName} onChange={(e)=>setFormData({...formData, fullName: e.target.value})} placeholder="FULL NAME" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm placeholder:text-white/40" />
                <input type="email" required value={formData.email} onChange={(e)=>setFormData({...formData, email: e.target.value})} placeholder="EMAIL ADDRESS" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm placeholder:text-white/40" />
                <input type="email" required value={formData.confirmEmail} onChange={(e)=>setFormData({...formData, confirmEmail: e.target.value})} placeholder="CONFIRM EMAIL" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm placeholder:text-white/40 font-bold" />
                <button type="submit" disabled={isLoading} className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all text-xs uppercase">{isLoading ? 'SENDING...' : 'VERIFY EMAIL'}</button>
              </>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-right-4">
                <label className="text-[9px] text-yellow-400 font-bold tracking-widest text-center block uppercase">ENTER OTP SENT TO {formData.email}</label>
                <input type="text" maxLength="6" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="••••••" className="w-full bg-[#0d0d0d] border border-yellow-400/30 rounded-2xl py-5 outline-none text-center text-3xl tracking-[0.5em] text-yellow-400" />
              </div>
            )}
            {error && <p className="text-red-500 text-[9px] font-bold text-center uppercase">{error}</p>}
            <button type="button" onClick={onBackToLogin} className="w-full text-center text-[10px] tracking-widest opacity-40 hover:opacity-100 underline text-white uppercase">RETURN TO SIGN IN</button>
          </form>
        </div>
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-80"><Canvas camera={{ position: [0, 0, 6] }}><Environment preset="city" /><Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0,-3.5,0]} opacity={0.4} scale={15}/></Suspense><OrbitControls autoRotate /></Canvas></div>
          <div className="relative z-10 h-full flex flex-col justify-end">
            <h2 className="text-6xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase text-white">START YOUR <br /><span className="font-light italic opacity-80 uppercase text-white/90">RESEARCH</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <div><h3 className="text-xl font-bold mb-2 leading-tight text-white uppercase">START YOUR COMPREHENSIVE <br /> RHYTHMIC JOURNEY</h3><p className="text-[10px] opacity-50 normal-case leading-relaxed text-white">Join 17k+ researchers using the KICKR AI engine.</p></div>
              <div className="flex items-center justify-between mt-8"><div className="flex items-center gap-4"><div className="flex -space-x-3">{['♩','♫','✕','♬'].map((n, i) => (<div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] border border-white/10 text-yellow-400 text-lg font-bold animate-pulse">{n}</div>))}</div><MusicWave count={5} /></div><div className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest">JOIN_PROTOCOL</div></div>
            </div>
          </div>
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
        </div>
      </div>
    </div>
  );
}