import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
import { Eye, EyeOff } from 'lucide-react';
import MusicalNotations3D from './MusicalNotations3D';
import MusicWave from './MusicWave';

export default function LoginPage({ onLogin, onForgotClick, onRegisterClick }) {
  const [identifier, setIdentifier] = useState(''); 
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); setError('');
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password })
      });
      const data = await res.json();
if (res.ok) {
  localStorage.setItem('kickr_token', data.access_token);
  localStorage.setItem('kickr_user_email', data.user.email); 
  localStorage.setItem('kickr_username', data.user.username); // <--- ADD THIS LINE
  onLogin();
} else setError("INVALID_CREDENTIALS");
    } catch (err) { setError("CONNECTION_ERROR"); }
    finally { setIsLoading(false); }
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-6 uppercase text-white overflow-hidden relative">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="flex flex-col justify-center px-16">
          <div className="flex items-center gap-4 mb-8"><img src="/logo.png" className="h-10 w-auto" alt="Logo"/><span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span></div>
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-2">SIGN IN</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-10">AUTHORIZATION TERMINAL</p>
          <form onSubmit={handleLoginSubmit} className="space-y-4 max-w-md">
            <input type="text" required value={identifier} onChange={(e)=>setIdentifier(e.target.value)} placeholder="Username or Email" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm placeholder:normal-case" />
            <div className="relative">
              <input type={showPassword ? "text" : "password"} required value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm placeholder:normal-case" />
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 opacity-60 hover:opacity-100">{showPassword ? <EyeOff size={16} /> : <Eye size={16} />}</button>
            </div>
            {error && <p className="text-red-500 text-[10px] font-bold tracking-widest">{error}</p>}
            <button type="button" onClick={onForgotClick} className="text-[10px] opacity-40 hover:opacity-100 underline text-left block uppercase">Forgot Password?</button>
            <button type="submit" disabled={isLoading} className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-yellow-400 transition-all text-xs uppercase">{isLoading ? 'AUTHORIZING...' : 'SIGN IN'}</button>
          </form>
          <div className="mt-10 text-[10px] tracking-widest opacity-40">NOT REGISTERED? <button onClick={onRegisterClick} className="text-yellow-400 font-bold hover:underline">SIGN UP</button></div>
        </div>
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative border border-white/10 shadow-2xl">
          <div className="absolute inset-0 opacity-80"><Canvas><Suspense fallback={null}><MusicalNotations3D /></Suspense><Environment preset="city" /></Canvas></div>
          <div className="relative z-10 h-full flex flex-col justify-end uppercase">
            <h2 className="text-6xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase">WELCOME TO <br /><span className="font-light italic opacity-60 uppercase text-white/90">KICKR AI</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <div><h3 className="text-xl font-bold mb-2 uppercase text-white">GENERATE DRUM SCORES <br /> IN SECONDS</h3><p className="text-[10px] opacity-50 normal-case text-white">Access real-time transcription via CUDA-accelerated separation.</p></div>
              <div className="flex items-center justify-between mt-8"><div className="flex items-center gap-4"><MusicWave count={5} /></div><div className="text-[9px] font-bold text-yellow-400 uppercase tracking-widest">ENCRYPTED_AUTH</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}