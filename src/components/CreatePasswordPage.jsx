import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, ContactShadows, OrbitControls } from '@react-three/drei';
<<<<<<< HEAD
import { Eye, EyeOff, ShieldCheck } from 'lucide-react';
=======
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
import MusicalNotations3D from './MusicalNotations3D';

export default function CreatePasswordPage({ mode, userData, onCreateAccount }) {
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
<<<<<<< HEAD
  const [showAll, setShowAll] = useState(false); // One state for both boxes
=======
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const isRecovery = mode === 'recovery';

<<<<<<< HEAD
  // Password Validation Logic
=======
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
  const constraints = [
    { label: '8 Characters', met: pass.length >= 8 },
    { label: 'Uppercase', met: /[A-Z]/.test(pass) },
    { label: 'One Number', met: /[0-9]/.test(pass) },
    { label: 'Special Char', met: /[!@#$%^&*]/.test(pass) },
  ];
  const allMet = constraints.every(c => c.met);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!allMet || pass !== confirmPass) {
      setError(pass !== confirmPass ? 'PASSWORDS DO NOT MATCH' : 'SECURITY PROTOCOLS NOT MET');
      return;
    }
    
    setIsLoading(true); setError('');

    try {
<<<<<<< HEAD
      const endpoint = isRecovery ? '/auth/reset-password' : '/auth/register';
=======
      // DYNAMIC ENDPOINT SELECTION
      const endpoint = isRecovery ? '/auth/reset-password' : '/auth/register';
      
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
      const res = await fetch(`http://127.0.0.1:8000${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
<<<<<<< HEAD
          fullName: userData?.fullName || "User",
          username: userData?.username || "",
          email: userData?.email,
          password: pass,
          otp: userData?.otp
        })
      });

      if (res.ok) onCreateAccount();
      else {
        const data = await res.json();
        setError(data.detail || "TRANSACTION_FAILED");
      }
=======
          fullName: userData.fullName,
          email: userData.email,
          password: pass,
          otp: userData.otp
        })
      });

      const data = await res.json();
      if (res.ok) onCreateAccount();
      else setError(data.detail || "TRANSACTION_FAILED");
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
    } catch (err) {
      setError("CONNECTION_LOST");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-4 lg:p-6 font-sans uppercase overflow-hidden text-white">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-[95vh]">
<<<<<<< HEAD
        
        {/* LEFT SIDE: FORM */}
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8">
          <div className="flex items-center gap-4 mb-6">
            <img src="/logo.png" className="h-10 w-auto" alt="Logo"/>
            <span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none uppercase">
            {isRecovery ? 'RESET PASS' : 'SET PASS'}
          </h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase">ESTABLISH SECURITY PROTOCOLS</p>
          
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            {/* New Password Field */}
            <div className="relative">
              <input 
                type={showAll ? "text" : "password"} 
                required 
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                placeholder="NEW PASSWORD" 
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm tracking-widest" 
              />
              {/* SINGLE TOGGLE BUTTON FOR BOTH BOXES */}
              <button 
                type="button" 
                onClick={() => setShowAll(!showAll)} 
                className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 opacity-60 hover:opacity-100 transition-all"
                title="Toggle Visibility for All"
              >
                {showAll ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            {/* Constraints Grid */}
            <div className="grid grid-cols-2 gap-2 py-2">
              {constraints.map((c, i) => (
                <div key={i} className={`text-[8px] tracking-widest flex items-center gap-2 ${c.met ? 'text-yellow-400' : 'text-white/20'}`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${c.met ? 'bg-yellow-400 shadow-[0_0_8px_#fbbf24]' : 'bg-white'}`} />
                  {c.label}
                </div>
              ))}
            </div>

            {/* Confirm Password Field (Controlled by the same 'showAll' state) */}
            <div className="relative">
              <input 
                type={showAll ? "text" : "password"} 
                required 
                value={confirmPass} 
                onChange={(e) => setConfirmPass(e.target.value)} 
                placeholder="CONFIRM PASSWORD" 
                className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm tracking-widest" 
              />
            </div>

            {error && <p className="text-[9px] text-red-500 font-bold text-center animate-pulse tracking-widest">{error}</p>}
            
            <button 
              type="submit" 
              disabled={!allMet || isLoading} 
              className={`w-full font-black py-5 rounded-2xl transition-all duration-500 tracking-[0.3em] text-xs uppercase shadow-lg ${allMet ? 'bg-white text-black hover:bg-yellow-400' : 'bg-white/5 text-white/20'}`}
            >
=======
        <div className="flex flex-col justify-center px-6 lg:px-16 py-8">
          <div className="flex items-center gap-4 mb-6"><img src="/logo.png" className="h-10 w-auto" alt="Logo"/><span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span></div>
          <h1 className="text-4xl lg:text-5xl font-['Archivo_Black'] tracking-tighter mb-1 leading-none">
            {isRecovery ? 'RESET PASSWORD' : 'SET PASSWORD'}
          </h1>
          <p className="text-[10px] tracking-[0.3em] opacity-30 mb-8 uppercase text-white">ESTABLISH SECURITY PROTOCOLS</p>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input type="password" required value={pass} onChange={(e) => setPass(e.target.value)} placeholder="NEW PASSWORD" 
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm text-white" />
            <div className="grid grid-cols-2 gap-2 py-2">
              {constraints.map((c, i) => (<div key={i} className={`text-[8px] tracking-widest flex items-center gap-2 ${c.met ? 'text-yellow-400' : 'text-white/20'}`}><div className={`w-1.5 h-1.5 rounded-full ${c.met ? 'bg-yellow-400 shadow-[0_0_8px_#fbbf24]' : 'bg-white'}`} />{c.label}</div>))}
            </div>
            <input type="password" required value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} placeholder="CONFIRM NEW PASSWORD" 
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-3.5 outline-none focus:border-yellow-400 text-sm text-white" />
            {error && <p className="text-[9px] text-red-500 font-bold text-center animate-pulse uppercase">{error}</p>}
            <button type="submit" disabled={!allMet || isLoading} 
              className={`w-full font-black py-4 rounded-2xl transition-all duration-500 tracking-[0.3em] text-xs uppercase shadow-lg ${allMet ? 'bg-white text-black hover:bg-yellow-400' : 'bg-white/5 text-white/20'}`}>
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
                {isLoading ? 'ESTABLISHING...' : (isRecovery ? 'CONFIRM RESET' : 'CREATE ACCOUNT')}
            </button>
          </form>
        </div>
<<<<<<< HEAD

        {/* RIGHT SIDE: 3D SHOWCASE */}
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-80">
            <Canvas camera={{ position: [0, 0, 6] }}>
              <Environment preset="city" />
              <Suspense fallback={null}>
                <MusicalNotations3D />
                <ContactShadows position={[0,-3.5,0]} opacity={0.4} scale={15}/>
              </Suspense>
              <OrbitControls autoRotate />
            </Canvas>
          </div>
          
          <div className="relative z-10 h-full flex flex-col justify-end text-left">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase">
              FINALIZING <br /> <span className="font-light italic opacity-80 uppercase">SECURITY</span>
            </h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[200px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-2 uppercase tracking-tight">ENCRYPTION_LAYER: ON</h3>
                <p className="text-[10px] opacity-50 normal-case leading-relaxed">
                  Your credentials are being encrypted using salted rounds of Bcrypt hashing.
                  Username: <span className="text-yellow-400">@{userData?.username || 'user'}</span>
                </p>
              </div>
              <div className="flex items-center gap-2 text-yellow-400">
                <ShieldCheck size={16} />
                <span className="text-[9px] font-bold tracking-[0.3em]">SECURE_STORAGE_ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

=======
        <div className="hidden lg:flex flex-col bg-[#0a0a0a] rounded-[3rem] p-10 relative overflow-hidden border border-white/10 shadow-2xl">
          <div className="absolute inset-0 z-0 opacity-80"><Canvas camera={{ position: [0, 0, 6] }}><Environment preset="city" /><Suspense fallback={null}><MusicalNotations3D /><ContactShadows position={[0,-3.5,0]} opacity={0.4} scale={15}/></Suspense><OrbitControls autoRotate /></Canvas></div>
          <div className="relative z-10 h-full flex flex-col justify-end text-left uppercase">
            <h2 className="text-5xl font-['Archivo_Black'] tracking-tighter leading-[0.9] mb-4 uppercase text-white">PROTECTING <br /> YOUR DATA</h2>
            <div className="bg-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 border border-white/10 w-full min-h-[220px] flex flex-col justify-between">
              <div><h3 className="text-xl font-bold mb-2 uppercase leading-tight font-bold text-white">FINALIZING YOUR <br /> RESEARCH ACCESS</h3><p className="text-[10px] opacity-50 normal-case leading-relaxed text-white">Your new cryptographic key will be applied across all KICKR neural repositories instantly.</p></div>
              <div className="text-[9px] font-bold tracking-[0.3em] text-yellow-400 uppercase">ENCRYPTION: ENABLED</div>
            </div>
          </div>
        </div>
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
      </div>
    </div>
  );
}