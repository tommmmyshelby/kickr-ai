import React, { useState } from 'react';

export default function LoginPage({ onLogin, onForgotClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-[#070707] text-white uppercase font-sans overflow-hidden animate-in fade-in duration-500">
      <div className="flex-1 border-r border-white/5 flex flex-col justify-center p-12 lg:p-24 bg-[#0a0a0a]">
        <h1 className="text-[10vw] lg:text-[8rem] font-['Archivo_Black'] leading-[0.8] tracking-tighter mb-8">
          SATURN <br /> <span className="text-yellow-400">ACCESS</span>
        </h1>
        <p className="text-[10px] tracking-[0.5em] opacity-30 max-w-sm leading-relaxed text-white">
          AI-BASED DRUM EXTRACTION TERMINAL / V4.02 <br />
          AUTHORIZATION REQUIRED.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center p-12 lg:p-24">
        <form className="max-w-md w-full mx-auto space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] tracking-[0.3em] opacity-40">IDENTIFICATION</label>
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="NAME@DOMAIN.COM" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-yellow-400 transition-colors text-sm tracking-widest text-white" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] tracking-[0.3em] opacity-40">SECURITY CODE</label>
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-yellow-400 transition-colors text-sm tracking-widest text-white" />
            </div>
          </div>
          <div className="space-y-6">
            <button type="submit" className="w-full group flex items-center justify-between border border-white/20 px-10 py-6 hover:bg-white hover:text-black transition-all duration-500">
              <span className="text-[10px] font-bold tracking-[0.5em]">AUTHORIZE</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <button type="button" onClick={onForgotClick} className="text-[9px] tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity underline decoration-white/10">
              LOST ACCESS KEY? / CLICK TO RECOVER
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}