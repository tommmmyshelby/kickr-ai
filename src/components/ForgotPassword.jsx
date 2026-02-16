import React, { useState, Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import MusicalNotations3D from './MusicalNotations3D';
import MusicWave from './MusicWave';

export default function ForgotPassword({ onBack, onOtpVerified }) {
  const [step, setStep] = useState('email'); 
  const [email, setEmail] = useState('');
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
              body: JSON.stringify({ email: email, otp: otp })
            });
            if (res.ok) onOtpVerified(email, otp);
            else setError("INVALID_SECURITY_KEY");
          } catch (err) { setError("CONNECTION_FAILED"); }
        }
    };
    verify();
  }, [otp]);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
        const res = await fetch('http://127.0.0.1:8000/auth/request-otp', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
              email: email,
              flow_type: 'recovery' // Context added
            })
        });
        if (res.ok) setStep('otp');
        else {
          const data = await res.json();
          // This captures "EMAIL_NOT_RECOGNIZED_IN_DATABASE" from backend
          setError(data.detail || "RECOVERY_FAILED");
        }
    } catch (err) { setError("SERVER_OFFLINE"); }
    finally { setIsLoading(false); }
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch max-h-[95vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8">
          <div className="flex items-center gap-4 mb-6"><img src="/logo.png" className="h-10 w-auto" alt="KICKR"/><span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span></div>
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase text-white">RECOVER</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase text-white">{step === 'email' ? 'ESTABLISH IDENTITY PROTOCOL' : 'VERIFY SECURITY KEY'}</p>
          <form onSubmit={handleEmailSubmit} className="space-y-4 max-w-md">
            {step === 'email' ? (
              <div className="space-y-4">
                <input type="email" required value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="REGISTERED EMAIL" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm placeholder:text-white/40" />
                <button type="submit" disabled={isLoading} className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all text-xs uppercase">{isLoading ? 'AUTHENTICATING...' : 'SEND RECOVERY KEY'}</button>
              </div>
            ) : (
              <div className="space-y-6 animate-in slide-in-from-right-4">
                <label className="text-[9px] text-yellow-400 font-bold tracking-widest text-center block uppercase">ENTER 6-DIGIT OTP SENT TO EMAIL</label>
                <input type="text" maxLength="6" value={otp} onChange={(e)=>setOtp(e.target.value)} placeholder="••••••" className="w-full bg-[#0d0d0d] border border-yellow-400/30 rounded-2xl py-5 outline-none text-center text-3xl tracking-[0.5em] text-yellow-400" />
              </div>
            )}
            {error && <p className="text-red-500 text-[9px] font-bold text-center uppercase">{error}</p>}
            <button type="button" onClick={onBack} className="w-full text-center text-[10px] tracking-widest opacity-40 hover:opacity-100 underline uppercase text-white">RETURN TO SIGN IN</button>
          </form>
        </div>
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-80"><Canvas camera={{ position: [0, 0, 6] }}><Environment preset="city" /><Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0,-3.5,0]} opacity={0.4} scale={15}/></Suspense><OrbitControls autoRotate /></Canvas></div>
          <div className="relative z-10 h-full flex flex-col justify-end text-white text-left uppercase">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase text-white">PROTECTING <br /><span className="font-light italic opacity-80 uppercase text-white/90">YOUR DATA</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between text-left">
              <div><h3 className="text-xl font-bold mb-2 leading-tight text-white uppercase">SECURE YOUR RECOVERY <br /> AND PROTECT YOUR DATA</h3><p className="text-[10px] opacity-50 normal-case leading-relaxed text-white">AES-256 encryption ensures your extracted patterns remain authorized.</p></div>
              <div className="flex items-center justify-between mt-8"><div className="flex items-center gap-4"><div className="flex -space-x-3 uppercase">{['♩','♫','✕','♬'].map((n, i) => (<div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] text-yellow-400 text-lg font-bold animate-pulse">{n}</div>))}</div><MusicWave count={5} /></div><div className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest">AES_PROTECTED</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}