import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows } from '@react-three/drei';
import { Eye, EyeOff } from 'lucide-react';
import MusicalNotations3D from './MusicalNotations3D';
import MusicWave from './MusicWave';

export default function LoginPage({ onLogin, onForgotClick, onRegisterClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[95vh]">
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8 text-white">
          <div className="flex items-center gap-3 mb-6">
            <img src="/logo.png" alt="KICKR Logo" className="h-10 w-auto object-contain" />
            <span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span>
          </div>
          <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase">SIGN IN</h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase">AUTHORIZATION TERMINAL ACTIVE</p>
          <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="space-y-4 max-w-md">
            <div className="space-y-1">
              <label className="text-[9px] tracking-[0.2em] opacity-50 uppercase">EMAIL ADDRESS</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="E.G. USER@COLLEGE.EDU" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
            </div>
            <div className="space-y-1">
              <label className="text-[9px] tracking-[0.2em] opacity-50 uppercase text-white">SECURITY CODE</label>
              <div className="relative">
                <input type={showPassword ? "text" : "password"} required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="ENTER ACCESS KEY" className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 transition-all text-sm placeholder:text-white/40" />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 opacity-60 hover:opacity-100">
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between py-1 text-[10px]">
              <label className="flex items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 text-white"><input type="checkbox" className="accent-yellow-400" />REMEMBER ME</label>
              <button type="button" onClick={onForgotClick} className="opacity-40 hover:opacity-100 underline decoration-white/10 text-white">FORGOT PASSWORD?</button>
            </div>
            <button type="submit" className="w-full bg-white text-black font-black py-4 rounded-2xl hover:bg-yellow-400 transition-all duration-500 tracking-[0.3em] text-xs">SIGN IN</button>
          </form>
          <div className="mt-8 text-[10px] tracking-widest text-white">
            <span className="opacity-40 uppercase">DON'T HAVE AN ACCOUNT? </span>
            <button onClick={onRegisterClick} className="text-yellow-400 font-bold hover:underline">SIGN UP</button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0">
             <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 6], fov: 45 }}>
                <Environment preset="city" /><ambientLight intensity={0.5} /><pointLight position={[10, 10, 10]} intensity={2} color="#fbbf24" />
                <Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0, -3.5, 0]} opacity={0.4} scale={15} blur={2.5} far={4} /></Suspense>
                <OrbitControls autoRotate autoRotateSpeed={0.8} enableZoom={false} />
             </Canvas>
          </div>
          <div className="relative z-10 h-full flex flex-col justify-end text-white text-left uppercase">
            <h2 className="text-6xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase">WELCOME TO <br /> <span className="font-light italic opacity-80 text-white/90">KICKR AI</span></h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 leading-tight uppercase">GET YOUR RIGHT DRUM BEAT <br /> AND PRACTICE NOW</h3>
                <p className="text-[10px] opacity-50 normal-case leading-relaxed max-w-[280px]">Access your cloud-synced sessions and resume your rhythmic analysis with KICKR's neural engine.</p>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {['♩', '♫', '✕', '♬'].map((note, i) => (
                      <div key={i} className="flex items-center justify-center h-10 w-10 rounded-full ring-4 ring-[#0a0a0a] bg-[#151515] border border-white/10 text-yellow-400 text-lg font-bold animate-pulse" style={{ animationDelay: `${i * 0.15}s` }}>{note}</div>
                    ))}
                  </div>
                  <div className="pl-4 border-l border-white/10"><MusicWave count={5} size="small" /></div>
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