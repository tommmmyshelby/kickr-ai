import React, { Suspense, useState, memo, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, UploadCloud, Cpu, History, Plus, 
  MessageSquare, Play, Pause, Download, Volume2, Layers, Trash2 
} from 'lucide-react'; 
import Hero3D from './Hero3D';
import LogoutModal from './LogoutModal';

const VisualizerSection = memo(({ isProcessing, phase, progress, stats }) => (
  <div className="flex-1 relative bg-[#080808] overflow-hidden border-r border-white/5">
    <AnimatePresence>
      {!isProcessing && stats && (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="absolute top-8 left-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-[9px] space-y-3 w-44 uppercase text-white font-bold">
          <div className="flex justify-between border-b border-white/10 pb-2"><span>Model_Accuracy</span><span className="text-green-400">{stats.accuracy}%</span></div>
          <div className="flex justify-between"><span>Transients</span><span className="text-yellow-400">{stats.transients}</span></div>
          <div className="flex justify-between"><span>Est_BPM</span><span>{stats.bpm}</span></div>
        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence>
      {isProcessing && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 z-30 flex flex-col items-center justify-center p-10 backdrop-blur-md text-center uppercase"><Cpu className="text-yellow-400 animate-spin mb-6" size={24} /><div className="text-[12px] tracking-[0.6em] text-yellow-400 font-bold mb-4">{phase}</div><div className="w-64 h-[1px] bg-white/10 relative"><motion.div className="absolute h-full bg-yellow-400 shadow-[0_0_20px_#fbbf24]" style={{ width: `${progress}%` }} /></div><div className="mt-4 font-mono text-[10px] opacity-40">{progress}% ANALYZED</div></motion.div>)}
    </AnimatePresence>
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 35 }} resize={{ scroll: false }}><ambientLight intensity={1.5} /><Suspense fallback={null}><Stage environment="city" intensity={0.6} adjustCamera={true}><Hero3D/></Stage></Suspense><OrbitControls makeDefault autoRotate={!isProcessing} /></Canvas>
  </div>
));

export default function MainPage({ onLogout }) {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState(''); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [phase, setPhase] = useState(''); 
  const [progress, setProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [stats, setStats] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const textareaRef = useRef(null);

  // Dynamic User Data
  const userEmail = localStorage.getItem('kickr_user_email') || "USER@KICKR.AI";
  const userInitial = userEmail.charAt(0).toUpperCase();

  const drumGrid = [{ name: 'KICK', steps: [1,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0] }, { name: 'SNARE', steps: [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0] }, { name: 'HI-HAT', steps: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1] }];
  const [history, setHistory] = useState([{ id: 1, title: 'Demo_Session.wav', prompt: 'Solo Kick', date: 'NOW' }]);

  const handleMacroClick = (macro) => {
    const formatted = macro.replace(/_/g, ' ');
    const start = textareaRef.current.selectionStart;
    const end = textareaRef.current.selectionEnd;
    const newText = prompt.substring(0, start) + (start > 0 && prompt[start-1] !== ' ' ? ' ' : '') + formatted + (prompt[end] !== ' ' ? ' ' : '') + prompt.substring(end);
    setPrompt(newText);
    textareaRef.current.focus();
  };

  const startNewSession = () => { setFile(null); setPrompt(''); setStats(null); setProgress(0); setPhase(''); setIsPlaying(false); };

  const startAIProcess = () => {
    if (!file) return;
    setIsProcessing(true); setProgress(0); setPhase('EXTRACTING_TRANSIENTS');
    let p = 0;
    const interval = setInterval(() => {
      p += 2; setProgress(p);
      if (p === 50 && prompt) setPhase('NEURAL_PROMPT_SYNC');
      if (p >= 100) {
        clearInterval(interval);
        setStats({ accuracy: (94 + Math.random() * 5).toFixed(1), transients: Math.floor(Math.random() * 200), bpm: '124.00' });
        setHistory([{ id: Date.now(), title: file.name, prompt: prompt || 'Standard', date: 'NOW' }, ...history]);
        setTimeout(() => { setIsProcessing(false); setPhase(''); }, 800);
      }
    }, 40);
  };

  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm("WARNING: PERMANENTLY TERMINATE YOUR NEURAL PROFILE?");
    if (!confirmDelete) return;
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail })
      });
      if (res.ok) { onLogout(); }
    } catch (err) { alert("CONNECTION_ERROR"); }
  };

  return (
    <div className="h-screen w-full bg-[#070707] text-white uppercase overflow-hidden flex flex-col font-sans relative">
      
      {/* SONIC SCAN WIPE */}
      <motion.div initial={{ y: "-100%" }} animate={{ y: "100vh" }} transition={{ duration: 1.5, ease: "easeInOut" }} className="fixed inset-x-0 h-[15vh] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent z-[100] pointer-events-none uppercase text-white font-bold"><div className="h-[2px] w-full bg-yellow-400 shadow-[0_0_30px_#fbbf24]" /></motion.div>

      <LogoutModal isOpen={isModalOpen} onConfirm={onLogout} onCancel={() => setIsModalOpen(false)} />
      
      <nav className="flex justify-between items-center px-10 h-20 text-[10px] tracking-[0.4em] z-20 border-b border-white/5 bg-[#070707] uppercase font-bold text-white">
        <div className="flex items-center gap-8"><button onClick={() => setSidebarOpen(!isSidebarOpen)} className="hover:opacity-70 transition-all"><img src="/logo.png" className="h-9 w-auto" alt="Logo"/></button><div className="font-bold tracking-[1em]">KICKR / AI</div></div>
        <div className="flex items-center gap-8">
          <button onClick={() => setIsModalOpen(true)} className="opacity-40 hover:text-red-500 transition-all font-bold uppercase">LOGOUT</button>
          <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8 font-mono">
            <div className="flex flex-col items-end"><div className="flex items-center gap-2 font-bold"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/><span className="font-bold">NEURAL_LINK: ACTIVE</span></div><span className="text-[7px] opacity-30 uppercase font-bold">Latency: 14ms</span></div>
            <div className="text-yellow-400 font-black text-[10px]">PRO_MODE</div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex min-h-0 w-full relative">
        <motion.aside animate={{ width: isSidebarOpen ? 280 : 0 }} transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }} className="bg-[#0a0a0a] border-r border-white/5 overflow-hidden flex flex-col shrink-0">
          <div className="w-[280px] p-6 h-full flex flex-col uppercase font-bold text-white">
            <div className="space-y-6 flex-1 flex flex-col overflow-hidden uppercase font-bold text-white">
              <button onClick={startNewSession} className="flex items-center justify-center gap-3 border border-white/10 p-4 rounded-xl hover:bg-yellow-400 hover:text-black transition-all font-bold text-[10px] w-full uppercase"><Plus size={16} /> NEW KICK_SESSION</button>
              <div className="text-[8px] opacity-20 tracking-widest uppercase mb-4 text-white font-bold">History_Logs</div>
              <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                {history.map(item => (<div key={item.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-yellow-400/50 cursor-pointer uppercase font-bold text-white"><div className="flex items-center gap-3 mb-2 font-bold text-[10px] truncate uppercase"><MessageSquare size={12} className="text-yellow-400" />{item.title}</div><p className="text-[8px] opacity-40 normal-case italic line-clamp-1">"{item.prompt}"</p></div>))}
              </div>
            </div>
            <div className="mt-auto border-t border-white/5 pt-6 flex flex-col gap-4">
               <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-black text-black text-[14px] shadow-[0_0_15px_rgba(251,191,36,0.3)]">{userInitial}</div>
                  <div className="flex flex-col overflow-hidden uppercase font-bold text-white"><span className="text-[10px] font-bold tracking-widest text-white truncate w-40">{userEmail}</span><span className="text-[7px] text-yellow-400 font-bold uppercase">VERIFIED_SESSION</span></div>
               </div>
               <button onClick={handleDeleteAccount} className="flex items-center gap-2 text-[7px] text-red-500/60 hover:text-red-500 transition-all font-bold tracking-widest uppercase"><Trash2 size={10} /> TERMINATE_ACCOUNT</button>
            </div>
          </div>
        </motion.aside>

        <div className="flex-1 flex flex-col relative uppercase font-bold text-white">
          <VisualizerSection isProcessing={isProcessing} phase={phase} progress={progress} stats={stats}/>
          <AnimatePresence>
            {!isProcessing && stats && (
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute bottom-20 inset-x-8 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-6 rounded-2xl uppercase font-bold text-white">
                <div className="flex items-center gap-2 mb-4 opacity-40 text-[8px] tracking-[0.3em] font-bold uppercase"><Layers size={10} /> Extracted_Rhythm_Grid</div>
                <div className="space-y-2">{drumGrid.map((row) => (<div key={row.name} className="flex items-center gap-4"><span className="w-12 text-[7px] font-bold opacity-30">{row.name}</span><div className="flex-1 grid grid-cols-[repeat(16,minmax(0,1fr))] gap-1">{row.steps.map((step, i) => (<div key={i} className={`h-3 rounded-sm border border-white/5 ${step ? 'bg-yellow-400 shadow-[0_0_10px_#fbbf24]' : 'bg-white/5'}`} />))}</div></div>))}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="h-16 border-t border-white/5 bg-[#0a0a0a] px-8 flex items-center justify-between shrink-0 z-30 uppercase font-bold text-white">
            <div className="flex items-center gap-6"><button onClick={() => setIsPlaying(!isPlaying)} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition-colors uppercase font-bold text-black">{isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}</button>
              <div className="flex flex-col uppercase font-bold text-white"><span className="text-[9px] font-bold tracking-widest uppercase text-white">{file ? file.name : "No_Track_Selected"}</span><div className="flex items-center gap-2 uppercase font-bold text-white"><div className="w-32 h-[2px] bg-white/10 relative overflow-hidden"><motion.div className="absolute h-full bg-yellow-400" animate={{ width: isPlaying ? "100%" : "0%" }} transition={{ duration: 30, ease: "linear" }} /></div><span className="text-[7px] opacity-30 font-mono">00:00 / 00:30</span></div></div>
            </div>
            <div className="flex items-center gap-8 uppercase font-bold text-white"><div className="flex items-center gap-3 opacity-30 hover:opacity-100 transition-opacity cursor-pointer uppercase font-bold text-white"><Volume2 size={14} /><div className="w-16 h-[2px] bg-white/20" /></div><button className="flex items-center gap-2 text-[9px] font-bold border border-white/10 px-4 py-2 rounded-lg hover:border-yellow-400 transition-all uppercase font-bold text-white"><Download size={14} /> Export_Midi</button></div>
          </div>
        </div>

        <div className="w-[420px] hidden xl:flex flex-col justify-between p-10 bg-[#080808] border-l border-white/5 overflow-y-auto uppercase font-bold text-white">
          <div className="space-y-8 uppercase font-bold text-white">
            <h1 className="text-4xl font-['Archivo_Black'] tracking-tighter leading-tight uppercase font-bold text-white">RHYTHM <br/><span className="text-yellow-400 uppercase font-bold">WORKSPACE</span></h1>
            <div className="space-y-6 uppercase font-bold text-white">
               <div className="space-y-3 uppercase font-bold text-white"><label className="text-[9px] opacity-50 tracking-widest uppercase font-bold text-white">01_SOURCE_SELECTION</label><div className="border border-dashed border-white/10 p-6 text-center hover:border-yellow-400 relative bg-white/[0.01] rounded-2xl transition-all uppercase font-bold text-white"><input type="file" accept="audio/*" onChange={(e)=>setFile(e.target.files[0])} className="absolute inset-0 opacity-0 cursor-pointer uppercase font-bold text-white" /><div className="text-[10px] opacity-50 uppercase font-bold text-white">{file ? file.name : "DRAG AUDIO SOURCE"}</div></div></div>
               <div className="space-y-3 uppercase font-bold text-white"><label className="text-[9px] opacity-50 text-yellow-400 tracking-widest uppercase font-bold">02_NEURAL_PROMPT</label><div className="flex flex-wrap gap-1.5 mb-2">{['SOLO_KICK', 'TRAP_HAT', 'GHOST_SNARE'].map(m => (<button key={m} onClick={() => handleMacroClick(m)} className="text-[7px] font-bold border border-white/5 px-2 py-1 rounded-md opacity-30 hover:opacity-100 hover:border-yellow-400 transition-all uppercase font-bold text-white">{m}</button>))}</div><textarea ref={textareaRef} value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="E.G. 'MAKE THE KICK MORE AGGRESSIVE'..." className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-5 text-[11px] outline-none focus:border-yellow-400 min-h-[140px] resize-none normal-case placeholder:text-white/10 uppercase font-bold text-white" /></div>
            </div>
          </div>
          <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-8 uppercase font-bold text-white"><div className="text-[8px] opacity-30 uppercase font-bold text-white"><p>ENGINE: KICKR_V4</p><p>STATUS: {isProcessing ? 'BUSY' : 'READY'}</p></div><button disabled={!file || isProcessing} onClick={startAIProcess} className={`border px-10 py-5 rounded-2xl transition-all font-bold uppercase shadow-2xl ${file && !isProcessing ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black shadow-[0_0_20px_rgba(251,191,36,0.2)]' : 'border-white/5 opacity-20 cursor-not-allowed uppercase font-bold text-white'}`}>{isProcessing ? 'ANALYZING' : 'RUN AI'}</button></div>
        </div>
      </main>
    </div>
  );
}