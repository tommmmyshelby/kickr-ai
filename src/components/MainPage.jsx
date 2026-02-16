import React, { Suspense, useState, memo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, MessageSquare, Play, Pause, Download, Layers, Music, Cpu, X, Zap 
} from 'lucide-react'; 
import Hero3D from './Hero3D';
import LogoutModal from './LogoutModal';
import ScoreSection from './ScoreSection';

// --- STABLE VISUALIZER SECTION ---
const VisualizerSection = memo(({ isProcessing, stats, progress, phase }) => (
  <div className="w-full h-full relative bg-[#080808] overflow-hidden uppercase">
    <AnimatePresence>
      {!isProcessing && stats && (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-[9px] space-y-3 w-44">
          <div className="flex justify-between border-b border-white/10 pb-2"><span>Model_Accuracy</span><span className="text-green-400">98.2%</span></div>
          <div className="flex justify-between"><span>Transients</span><span className="text-yellow-400">{stats.transients || 0}</span></div>
          <div className="flex justify-between"><span>Est_BPM</span><span>{stats.bpm || 0}</span></div>
        </motion.div>
      )}
    </AnimatePresence>
    
    <AnimatePresence>
      {isProcessing && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/95 z-30 flex flex-col items-center justify-center p-10 backdrop-blur-md">
          <div className="relative mb-8">
            <Cpu className="text-yellow-400 animate-spin" size={32} />
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute -top-1 -right-1">
              <Zap size={12} className="text-yellow-400 fill-yellow-400" />
            </motion.div>
          </div>
          <div className="text-[10px] tracking-[0.8em] text-yellow-400 font-black mb-2 animate-pulse">{phase}</div>
          <div className="text-[7px] text-white/30 tracking-[0.4em] mb-6 flex items-center gap-2">
             <span className="w-1 h-1 rounded-full bg-green-500 animate-ping"/> CUDA_CORE_ACTIVE // RTX_3050_DETECTED
          </div>
          <div className="w-72 h-[1px] bg-white/5 relative mb-4">
            <motion.div className="absolute h-full bg-yellow-400 shadow-[0_0_15px_#fbbf24]" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ ease: "easeOut" }} />
          </div>
          <div className="font-mono text-[10px] text-yellow-400/50 tracking-widest">{Math.round(progress)}% COMPLETE</div>
        </motion.div>
      )}
    </AnimatePresence>

    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 35 }}>
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        <Stage environment="city" intensity={0.6} adjustCamera={false}><Hero3D/></Stage>
      </Suspense>
      <OrbitControls makeDefault autoRotate={!isProcessing} />
    </Canvas>
  </div>
));

export default function MainPage({ onLogout }) {
  const [file, setFile] = useState(null);
  const [prompt, setPrompt] = useState(''); 
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [stats, setStats] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const audioRef = useRef(new Audio());
  const popupRef = useRef(null);
  const textareaRef = useRef(null);

  const userEmail = localStorage.getItem('kickr_user_email') || "tomshinjo2005@gmail.com";
  const userName = localStorage.getItem('kickr_username') || "Researcher";
  const userInitial = userName?.charAt(0).toUpperCase();

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnd = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnd);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnd);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isProcessing) {
      interval = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev < 15) { setLoadingPhase("INITIALIZING_CORE"); return prev + 0.5; }
          if (prev < 75) { setLoadingPhase("NEURAL_STEM_ISOLATION"); return prev + 0.2; }
          if (prev < 90) { setLoadingPhase("EXTRACTING_TRANSIENTS"); return prev + 0.4; }
          if (prev < 98) { setLoadingPhase("SYNTHESIZING_SCORE"); return prev + 0.1; }
          return prev;
        });
      }, 100);
    } else {
      setLoadingProgress(0);
    }
    return () => clearInterval(interval);
  }, [isProcessing]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleMacroClick = (macro) => {
    const formatted = macro.replace(/_/g, ' ');
    setPrompt(prev => prev + (prev ? " " : "") + formatted);
  };

  const handleSwap = () => {
    if (!stats?.timeline) return;
    const swapped = stats.timeline.map(m => ({ ...m, KICK: [...m.SNARE], SNARE: [...m.KICK] }));
    setStats({ ...stats, timeline: swapped });
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      audioRef.current.src = URL.createObjectURL(uploadedFile);
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const handleRemoveFile = (e) => {
    e.stopPropagation();
    setFile(null);
    audioRef.current.src = '';
    setStats(null);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handlePlayToggle = () => {
    if (!file) return alert("UPLOAD SOURCE FIRST");
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const startAIProcess = async () => {
    if (!file) return;
    setIsProcessing(true);
    const formData = new FormData();
    formData.append('file', file);
    if(prompt) formData.append('prompt', prompt);

    try {
      const res = await fetch('http://127.0.0.1:8000/analyze', { method: 'POST', body: formData });
      const data = await res.json();
      if (data.status === "SUCCESS") {
        setLoadingProgress(100);
        setTimeout(() => {
          setStats(data);
          setIsProcessing(false);
        }, 500);
      } else alert(data.message || "Extraction Failed");
    } catch (err) { 
      alert("AI_ENGINE_OFFLINE"); 
      setIsProcessing(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#070707] text-white uppercase overflow-hidden flex flex-col font-sans relative">
      <LogoutModal isOpen={isModalOpen} onConfirm={onLogout} onCancel={() => setIsModalOpen(false)} />
      
      {/* HEADER */}
      <nav className="flex justify-between items-center px-10 h-20 border-b border-white/5 bg-[#070707] z-50">
        <div className="flex items-center gap-8">
            <img src="/logo.png" className="h-9 w-auto cursor-pointer" alt="Logo" onClick={() => setSidebarOpen(!isSidebarOpen)} />
            <div className="font-bold tracking-[1em]">KICKR / AI</div>
        </div>
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]" />
            <span className="font-bold text-lg tracking-widest uppercase">LINK: ACTIVE</span>
            <span className="text-[8px] opacity-30 ml-2">48KHZ</span>
          </div>
          <div className="text-yellow-400 font-bold text-[10px] tracking-widest uppercase">PRO_MODE</div>
        </div>
      </nav>

      <main className="flex-1 flex min-h-0 w-full relative">
        
        {/* LEFT SIDEBAR */}
        <motion.aside animate={{ width: isSidebarOpen ? 320 : 0 }} className="bg-[#070707] border-r border-white/5 overflow-hidden flex flex-col shrink-0 relative">
            <div className="w-[320px] p-8 h-full flex flex-col uppercase">
              <button className="flex items-center justify-center gap-4 border border-white/10 p-5 rounded-2xl hover:bg-white hover:text-black mb-10 font-bold text-[11px] transition-all tracking-widest">
                <Plus size={18} /> NEW KICK_SESSION
              </button>
              
              <div className="text-[9px] opacity-20 tracking-[0.2em] mb-6 font-bold uppercase">HISTORY_LOGS</div>
              
              <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2">
                <div className="p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 space-y-2 uppercase">
                  <div className="flex items-center gap-3 font-bold text-[12px] tracking-tighter uppercase">
                    <MessageSquare size={14} className="text-yellow-400" /> DEMO_SESSION.WAV
                  </div>
                  <p className="text-[9px] opacity-40 italic lowercase">"Standard Extraction"</p>
                </div>
              </div>

              <div className="relative mt-auto" ref={popupRef}>
                <AnimatePresence>
                  {isProfileOpen && (
                    <motion.div initial={{ opacity: 0, y: 15, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 15, scale: 0.95 }} className="absolute bottom-24 left-0 w-[310px] bg-[#121212] rounded-[2.2rem] shadow-2xl z-[100] flex flex-col overflow-hidden border border-white/10">
                      <div className="p-8 pb-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-3xl font-black mb-5 shadow-[0_0_20px_rgba(251,191,36,0.1)]">{userInitial}</div>
                        <h4 className="text-xl font-bold normal-case text-white mb-1 tracking-tight">{userName}</h4>
                        <p className="text-[13px] opacity-40 normal-case font-medium">{userEmail}</p>
                      </div>
                      <div className="bg-white/[0.03] border-t border-white/5"><button onClick={() => { setIsProfileOpen(false); setIsModalOpen(true); }} className="w-full py-6 text-base font-bold text-white hover:bg-white/[0.05] transition-all normal-case uppercase tracking-widest">Sign out</button></div>
                      <div className="bg-[#0f0f0f] border-t border-white/5 py-6 flex items-center justify-center gap-3 text-[10px] opacity-30 normal-case font-medium"><a href="#" className="hover:text-white hover:underline">Privacy Policy</a><span className="text-[6px] opacity-50">●</span><a href="#" className="hover:text-white hover:underline">Terms of Service</a></div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="pt-8 flex items-center gap-4 border-t border-white/5 cursor-pointer hover:bg-white/[0.02] transition-all p-2 rounded-2xl">
                  <div className="w-12 h-12 rounded-full bg-yellow-400/20 flex items-center justify-center font-black text-yellow-400 text-lg uppercase border border-yellow-400/10">{userInitial}</div>
                  <div className="flex flex-col uppercase overflow-hidden">
                    <span className="text-[11px] font-bold lowercase opacity-80 truncate w-40">{userName}</span>
                    <span className="text-[8px] text-yellow-500 font-black tracking-widest mt-1 uppercase">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
        </motion.aside>

        {/* --- CENTER CONTENT (FULL HEIGHT SCORE) --- */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-white/5 bg-[#070707]">
          <div className="flex-1 w-full relative flex flex-col">
            
            {/* Conditional Rendering: Show 3D only if no stats exist or is processing */}
            {!stats || isProcessing ? (
               <VisualizerSection isProcessing={isProcessing} stats={stats} progress={loadingProgress} phase={loadingPhase} />
            ) : (
               <div className="flex-1 w-full bg-[#070707] p-10 overflow-y-auto custom-scrollbar flex flex-col items-center uppercase">
                  <div className="flex items-center justify-between w-full max-w-[1100px] mb-6 opacity-30 text-[9px] tracking-[0.4em] font-bold uppercase">
                    <div className="flex items-center gap-2"><Music size={12}/> NEURAL_SCORE_NOTATION</div>
                    <div>TRANSCRIPTION_v4.2</div>
                  </div>
                  
                  <div className="w-full">
                    <ScoreSection data={{...stats, file_name: file?.name}} currentTime={currentTime} />
                  </div>
               </div>
            )}
          </div>
          
          <footer className="h-28 border-t border-white/5 bg-[#070707] px-10 flex flex-col justify-center gap-3 font-bold uppercase z-30">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-8">
                <button onClick={handlePlayToggle} className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition-all uppercase font-bold text-black">
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                </button>
                <div className="flex flex-col uppercase">
                   <span className="text-[14px] font-['Archivo_Black'] tracking-[0.2em] text-white uppercase truncate max-w-[500px]" style={{ textShadow: '-1px 0 #ff0000, 1px 0 #00ffff, 0 0 5px rgba(255,255,255,0.2)' }}>{file ? file.name : "SYSTEM_IDLE"}</span>
                   <div className="flex items-center gap-2 mt-0.5 text-[10px] font-bold opacity-30 tracking-[0.1em] font-mono uppercase"><span>{formatTime(currentTime)}</span><span className="opacity-50">/</span><span>{formatTime(duration)}</span></div>
                </div>
              </div>
              <button className="flex items-center gap-3 text-[10px] border border-white/10 px-6 py-3 rounded-xl hover:border-yellow-400 transition-all tracking-widest uppercase"><Download size={16} /> EXPORT_MIDI</button>
            </div>
            <div className="w-full relative px-2">
              <input type="range" min="0" max={duration || 0} value={currentTime} onChange={handleSeek} className="w-full h-[3px] bg-white/10 appearance-none cursor-pointer rounded-full outline-none transition-all accent-yellow-400 hover:h-[5px]" style={{ background: `linear-gradient(to right, #fbbf24 ${(currentTime / duration) * 100}%, rgba(255, 255, 255, 0.1) ${(currentTime / duration) * 100}%)` }} />
            </div>
          </footer>
        </div>

        {/* RIGHT SIDEBAR */}
        <aside className="w-[420px] bg-[#070707] flex flex-col font-bold relative border-l border-white/5 uppercase">
          <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col space-y-10 p-10">
              <h1 className="text-4xl font-['Archivo_Black'] tracking-tighter mb-4 uppercase">WORKSPACE</h1>
              <div className="space-y-4 uppercase">
                <label className="text-[10px] opacity-40 tracking-widest font-bold uppercase">01_SOURCE_SELECTION</label>
                <div className={`border border-dashed p-10 rounded-[2.5rem] text-center relative transition-all bg-white/[0.01] flex items-center justify-center min-h-[140px] ${file ? 'border-yellow-400/40' : 'border-white/10 hover:border-yellow-400'}`}>
                  {!file && <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />}
                  <div className="flex flex-col items-center gap-3 w-full">
                    <span className={`text-[11px] font-bold tracking-widest uppercase truncate max-w-[280px] ${file ? 'text-yellow-400' : 'opacity-30'}`}>{file ? file.name : "DRAG AUDIO SOURCE"}</span>
                    {file && <button onClick={handleRemoveFile} className="flex items-center gap-2 text-[9px] text-red-500/60 hover:text-red-500 font-black tracking-[0.2em] transition-all bg-red-500/5 px-4 py-1.5 rounded-full border border-red-500/10"><X size={12} /> REMOVE_SOURCE</button>}
                  </div>
                </div>
              </div>
              <div className="space-y-4 uppercase">
                <label className="text-[10px] text-yellow-500 tracking-widest font-bold uppercase">02_NEURAL_PROMPT</label>
                <div className="flex flex-wrap gap-2 mb-4">{['SOLO_KICK', 'TRAP_HAT', 'GHOST_SNARE', 'HALF_TIME'].map(m => (
                    <button key={m} onClick={() => handleMacroClick(m)} className="text-[8px] border border-white/10 px-3 py-1.5 rounded-lg opacity-40 hover:opacity-100 hover:border-yellow-400 transition-all font-bold uppercase">{m}</button>
                ))}</div>
                <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="E.G. 'MAKE THE KICK MORE AGGRESSIVE'..." className="w-full bg-[#0d0d0d] border border-white/10 rounded-[1.5rem] p-6 text-[12px] min-h-[160px] outline-none focus:border-yellow-400 normal-case placeholder:opacity-20 text-white" />
                <button onClick={handleSwap} className="w-full mt-4 flex items-center justify-center gap-3 border border-yellow-500/20 text-yellow-500 py-4 rounded-xl hover:bg-yellow-500 hover:text-black transition-all text-[10px] font-bold tracking-widest uppercase"><Layers size={16}/> SWAP KICK & SNARE</button>
                <button disabled={!file || isProcessing} onClick={startAIProcess} className={`w-full mt-4 py-6 rounded-2xl font-black text-sm border transition-all uppercase tracking-widest ${file && !isProcessing ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black shadow-[0_0_30px_rgba(251,191,36,0.15)]' : 'border-white/5 opacity-10 cursor-not-allowed uppercase'}`}>
                  {isProcessing ? "PROCESSING..." : "RUN AI ENGINE"}
                </button>
              </div>
              <div className="mt-auto opacity-30 text-[9px] font-bold tracking-widest uppercase pt-10"><p>ENGINE: KICKR_V4</p><p>STATUS: {isProcessing ? 'BUSY' : 'READY'}</p></div>
          </div>
        </aside>
      </main>
    </div>
  );
}