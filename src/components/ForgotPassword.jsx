import React, { useState } from 'react';

export default function ForgotPassword({ onBack }) {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate sending an email
    setSuccess(true);
    setTimeout(() => {
      onBack(); // Go back to login after 3 seconds
    }, 3000);
  };

  return (
    <div className="h-screen w-full flex flex-col lg:flex-row bg-[#070707] text-white uppercase font-sans overflow-hidden animate-in fade-in duration-500">
      <div className="flex-1 border-r border-white/5 flex flex-col justify-center p-12 lg:p-24 bg-[#0a0a0a]">
        <h1 className="text-[10vw] lg:text-[8rem] font-['Archivo_Black'] leading-[0.8] tracking-tighter mb-8">
          SATURN <br /> <span className="text-yellow-400">RECOVERY</span>
        </h1>
        <p className="text-[10px] tracking-[0.5em] opacity-30 max-w-sm leading-relaxed">
          IDENTITY ESTABLISHMENT PROTOCOL / V4.02 <br />
          ENTER REGISTERED ACADEMIC EMAIL TO RECEIVE KEY.
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center p-12 lg:p-24 relative">
        <form className="max-w-md w-full mx-auto space-y-12" onSubmit={handleSubmit}>
          <div className="space-y-6">
            <h2 className="text-xl font-bold tracking-[0.2em] text-yellow-400">RECOVERY PROTOCOL</h2>
            <div className="space-y-2">
              <label className="text-[9px] tracking-[0.3em] opacity-40">INSTITUTIONAL EMAIL</label>
              <input 
                type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="USER@COLLEGE.EDU" 
                className="w-full bg-transparent border-b border-white/10 py-4 outline-none focus:border-yellow-400 transition-colors text-sm tracking-widest placeholder:opacity-20 text-white" 
              />
            </div>
            {success && <p className="text-[9px] text-green-500 tracking-widest font-bold">RECOVERY KEY DISPATCHED TO {email}</p>}
          </div>

          <div className="space-y-6">
            <button type="submit" className="w-full group flex items-center justify-between border border-yellow-400/30 px-10 py-6 hover:bg-yellow-400 hover:text-black transition-all duration-500">
              <span className="text-[10px] font-bold tracking-[0.5em]">REQUEST KEY</span>
              <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
            </button>
            <button type="button" onClick={onBack} className="text-[9px] tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity underline decoration-white/10">
              RETURN TO AUTHORIZATION TERMINAL
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}