import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import Hero3D from './Hero3D';
import LogoutModal from './LogoutModal'; // Import the new modal

export default function MainPage({ onLogout }) {
  const [file, setFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // STATE FOR MODAL
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setAnalyzing(true);
      let p = 0;
      const interval = setInterval(() => {
        p += 5; setProgress(p);
        if (p >= 100) { clearInterval(interval); setAnalyzing(false); }
      }, 150);
    }
  };

  return (
    <div className="h-screen w-full bg-[#070707] text-white uppercase overflow-hidden flex flex-col font-sans">
      
      {/* LOGOUT MODAL COMPONENT */}
      <LogoutModal 
        isOpen={isModalOpen} 
        onConfirm={onLogout} // If confirmed, call the app-level logout
        onCancel={() => setIsModalOpen(false)} // If cancelled, close modal
      />

      <nav className="flex justify-between items-center px-10 h-24 text-[10px] tracking-[0.4em] z-20 shrink-0 border-b border-white/5">
        <div className="font-bold tracking-[0.8em]">SATURN / AI</div>
        <div className="hidden md:flex gap-12 opacity-40">
          <a href="#" className="hover:opacity-100 transition text-white">Extractor</a>
          {/* Changed logout button to open modal instead of logging out immediately */}
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="hover:text-red-500 transition text-white"
          >
            Logout
          </button>
        </div>
        <div className="text-yellow-400 font-bold border border-yellow-400/30 px-4 py-1">COLLEGE PROJECT</div>
      </nav>

      <main className="flex-1 flex flex-col lg:flex-row min-h-0 w-full">
        <div className="flex-[1.2] relative border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
          {analyzing && (
            <div className="absolute inset-0 bg-black/80 z-30 flex flex-col items-center justify-center p-10 backdrop-blur-sm">
              <div className="text-[10px] tracking-[0.5em] mb-4 text-yellow-400">Analyzing Transients...</div>
              <div className="w-64 h-[1px] bg-white/10 relative">
                <div className="absolute h-full bg-yellow-400 transition-all duration-300" style={{ width: `${progress}%` }}></div>
              </div>
              <div className="mt-4 font-mono text-xs opacity-50">{progress}% EXTRACTED</div>
            </div>
          )}
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 35 }}>
            <ambientLight intensity={1.5} />
            <Suspense fallback={null}>
              <Stage environment="city" intensity={0.6} contactShadow={true} adjustCamera={true}><Hero3D /></Stage>
            </Suspense>
            <OrbitControls autoRotate={!analyzing} enableZoom={true} makeDefault />
          </Canvas>
        </div>

        <div className="flex-1 flex flex-col justify-between p-10 lg:p-16 overflow-hidden">
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)' }} className="leading-[0.85] font-['Archivo_Black'] tracking-tighter text-white">
            DRUM NOTE <br /><span className="text-yellow-400">EXTRACTOR</span>
          </h1>
          <div className="space-y-12">
            <div className="border border-dashed border-white/20 p-8 text-center hover:border-yellow-400 transition-colors group relative bg-white/[0.02]">
              <input type="file" accept="audio/*" onChange={handleUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
              <div className="text-[10px] tracking-[0.3em] opacity-60 group-hover:opacity-100 text-white">
                {file ? `TRACK: ${file.name}` : "UPLOAD SOURCE"}
              </div>
            </div>
            <div className="flex flex-row justify-between items-end">
              <div className="text-[8px] opacity-30 tracking-[0.2em] font-medium text-white">
                <p>MODEL: NEURAL-TRANSFORMER</p>
                <p>STATUS: SYSTEM READY</p>
              </div>
              <button disabled={!file || analyzing} className={`flex items-center gap-6 border px-8 py-4 transition-all duration-500 ${file && !analyzing ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' : 'border-white/10 opacity-20 cursor-not-allowed'}`}>
                <span className="text-[10px] font-bold tracking-[0.3em]">{analyzing ? 'WORKING...' : 'RUN AI'}</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}