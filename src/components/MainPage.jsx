import React, { Suspense, useState, memo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Terminal, UploadCloud, Cpu, History, Plus, 
  MessageSquare, Play, Pause, Download, Volume2, Layers, Trash2, Music, Radio 
} from 'lucide-react'; 
import Hero3D from './Hero3D';
import LogoutModal from './LogoutModal';
import ScoreSection from './ScoreSection';

// --- STABLE VISUALIZER SECTION ---
const VisualizerSection = memo(({ isProcessing, phase, progress, stats }) => (
  <div className="flex-1 relative bg-[#080808] overflow-hidden border-r border-white/5 uppercase">
    <AnimatePresence>
      {!isProcessing && stats && (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="absolute top-8 left-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-[9px] space-y-3 w-44">
          <div className="flex justify-between border-b border-white/10 pb-2"><span>Model_Accuracy</span><span className="text-green-400">{stats.accuracy}%</span></div>
          <div className="flex justify-between"><span>Transients</span><span className="text-yellow-400">{stats.transients}</span></div>
          <div className="flex justify-between"><span>Est_BPM</span><span>{stats.bpm}</span></div>
        </motion.div>
      )}
    </AnimatePresence>
    <AnimatePresence>
      {isProcessing && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/90 z-30 flex flex-col items-center justify-center p-10 backdrop-blur-md text-center">
          <Cpu className="text-yellow-400 animate-spin mb-6" size={24} />
          <div className="text-[12px] tracking-[0.6em] text-yellow-400 font-bold mb-4">{phase}</div>
          <div className="w-64 h-[1px] bg-white/10 relative">
            <motion.div className="absolute h-full bg-yellow-400 shadow-[0_0_20px_#fbbf24]" style={{ width: `${progress}%` }} />
          </div>
          <div className="mt-4 font-mono text-[10px] opacity-40">{progress}% ANALYZED</div>
        </motion.div>
      )}
    </AnimatePresence>

    {/* 3D Canvas remains static in its container */}
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 35 }}>
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}>
        {/* CRITICAL: adjustCamera={false} prevents jitter during container resize */}
        <Stage environment="city" intensity={0.6} adjustCamera={false}>
          <Hero3D/>
        </Stage>
      </Suspense>
      <OrbitControls makeDefault autoRotate={!isProcessing} />
    </Canvas>
    <div className="absolute bottom-8 left-10 text-[8px] opacity-20 tracking-[0.3em] font-mono">KICKR_NEURAL_VISUALIZER_v4.2</div>
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
  const [viewMode, setViewMode] = useState('3D'); 
  const [stats, setStats] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [audioProgress, setAudioProgress] = useState(0);

  const audioRef = useRef(new Audio());
  const textareaRef = useRef(null);

  const [activeGrid, setActiveGrid] = useState([
    { name: 'KICK', steps: Array(16).fill(0) },
    { name: 'SNARE', steps: Array(16).fill(0) },
    { name: 'HATS', steps: Array(16).fill(0) },
    { name: 'O-HAT', steps: Array(16).fill(0) },
    { name: 'TOMS', steps: Array(16).fill(0) },
    { name: 'CYMB', steps: Array(16).fill(0) },
  ]);

  const [history, setHistory] = useState([{ id: 1, title: 'Demo_Session.wav', prompt: 'Standard Extraction', date: 'NOW' }]);
  const userEmail = localStorage.getItem('kickr_user_email') || "RESEARCHER@KICKR.AI";
  const userInitial = userEmail.charAt(0).toUpperCase();

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setAudioProgress((audio.currentTime / audio.duration) * 100 || 0);
    };
    const handleEnd = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('ended', handleEnd);
    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('ended', handleEnd);
    };
  }, []);

  const handlePlayToggle = () => {
    if (!file) return alert("UPLOAD SOURCE FIRST");
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const url = URL.createObjectURL(uploadedFile);
      audioRef.current.src = url;
      setIsPlaying(false);
      setAudioProgress(0);
    }
  };

  const handleMacroClick = (macro) => {
    const formatted = macro.replace(/_/g, ' ');
    const start = textareaRef.current.selectionStart || 0;
    const end = textareaRef.current.selectionEnd || 0;
    const newText = prompt.substring(0, start) + (start > 0 ? " " : "") + formatted + " " + prompt.substring(end);
    setPrompt(newText);
    setTimeout(() => textareaRef.current.focus(), 0);
  };

  const startNewSession = () => { 
    audioRef.current.pause();
    setFile(null); setPrompt(''); setStats(null); setProgress(0); setPhase(''); setIsPlaying(false);
  };

  const startAIProcess = async () => {
    if (!file) return;
    setIsProcessing(true); setProgress(0); setPhase('ANALYZING_TIMELINE');
    const formData = new FormData();
    formData.append('file', file);
    if(prompt) formData.append('prompt', prompt);

    try {
        const res = await fetch('http://127.0.0.1:8000/analyze', { method: 'POST', body: formData });
        const data = await res.json();
        if (res.ok) {
            setStats(data);
            const firstMeasure = Object.entries(data.timeline[0]).map(([name, steps]) => ({ name, steps }));
            setActiveGrid(firstMeasure);
            setHistory([{ id: Date.now(), title: file.name, prompt: prompt || 'Standard', date: 'NOW' }, ...history]);
            setProgress(100);
            setTimeout(() => { setIsProcessing(false); setPhase(''); }, 800);
        }
    } catch (err) { alert("AI_OFFLINE"); setIsProcessing(false); }
  };

  const handleDeleteAccount = async () => {
    if (!window.confirm("PERMANENTLY TERMINATE NEURAL PROFILE?")) return;
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/delete-account', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail })
      });
      if (res.ok) onLogout();
    } catch (err) { alert("CONNECTION_ERROR"); }
  };

  return (
    <div className="h-screen w-full bg-[#070707] text-white uppercase overflow-hidden flex flex-col font-sans relative">
      <LogoutModal isOpen={isModalOpen} onConfirm={onLogout} onCancel={() => setIsModalOpen(false)} />
      
      <nav className="flex justify-between items-center px-10 h-16 border-b border-white/5 bg-[#070707] z-50">
        <div className="flex items-center gap-8">
            <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className="hover:opacity-70 transition-all">
                <img src="/logo.png" className="h-9 w-auto" alt="Logo"/>
            </button>
            <div className="font-bold tracking-[1em]">KICKR / AI</div>
        </div>
        <div className="flex items-center gap-8">
          <button onClick={() => setIsModalOpen(true)} className="opacity-40 hover:opacity-100 hover:text-red-500 transition-all font-bold">LOGOUT</button>
          <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-8 font-mono">
            <div className="flex flex-col items-end uppercase">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"/><span className="font-bold">LINK: ACTIVE</span></div>
                <span className="text-[7px] opacity-30">48kHz</span>
            </div>
            <div className="text-yellow-400 font-black text-[10px]">PRO_MODE</div>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex min-h-0 w-full relative">
        
        {/* --- FIXED SIDEBAR (Sits on top or pushes cleanly) --- */}
        <motion.aside 
          initial={false}
          animate={{ 
            width: isSidebarOpen ? 280 : 0,
            opacity: isSidebarOpen ? 1 : 0
          }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }} // Exponential ease out for smoothness
          className="bg-[#0a0a0a] border-r border-white/5 overflow-hidden flex flex-col shrink-0"
        >
            <div className="w-[280px] p-6 h-full flex flex-col">
              <button onClick={startNewSession} className="flex items-center justify-center gap-3 border border-white/10 p-4 rounded-xl hover:bg-yellow-400 hover:text-black mb-8 font-bold text-[10px] transition-all uppercase"><Plus size={16} /> NEW KICK_SESSION</button>
              <div className="text-[8px] opacity-20 tracking-widest uppercase mb-4">History_Logs</div>
              <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                {history.map(item => (<div key={item.id} className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-yellow-400/50 cursor-pointer uppercase transition-all"><div className="flex items-center gap-3 mb-2 font-bold text-[10px] truncate"><MessageSquare size={12} className="text-yellow-400" />{item.title}</div><p className="text-[8px] opacity-40 normal-case italic line-clamp-1">"{item.prompt}"</p></div>))}
              </div>
              <div className="mt-auto border-t border-white/5 pt-6 flex items-center gap-3 opacity-30">
                 <div className="w-9 h-9 rounded-full bg-yellow-400 flex items-center justify-center font-black text-black text-[14px]">{userInitial}</div>
                 <div className="flex flex-col"><span className="text-[10px] font-bold text-white truncate w-40 lowercase">{userEmail}</span><span className="text-[7px] text-yellow-400 font-bold uppercase">VERIFIED</span></div>
              </div>
            </div>
        </motion.aside>

        {/* --- MAIN CENTER + RIGHT AREA --- */}
        <div className="flex-1 flex min-w-0">
          <div className="flex-1 flex flex-col relative border-r border-white/5">
            <div className="absolute top-6 right-6 z-30 flex bg-black/50 backdrop-blur-lg border border-white/10 rounded-xl p-1">
               <button onClick={() => setViewMode('3D')} className={`px-4 py-2 text-[8px] font-bold rounded-lg transition-all ${viewMode === '3D' ? 'bg-yellow-400 text-black' : 'text-white/40'}`}>3D_VISUALIZER</button>
               <button onClick={() => setViewMode('SCORE')} className={`px-4 py-2 text-[8px] font-bold rounded-lg transition-all ${viewMode === 'SCORE' ? 'bg-yellow-400 text-black' : 'text-white/40'}`}>SHEET_MUSIC</button>
            </div>

            {viewMode === '3D' ? (
              <VisualizerSection isProcessing={isProcessing} phase={phase} progress={progress} stats={stats}/>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center p-12 bg-[#0a0a0a] overflow-hidden">
                 <div className="w-full max-w-5xl space-y-6">
                   <div className="flex items-center gap-3 text-yellow-400 font-black tracking-[0.4em] text-[10px]"><Music size={14}/> NEURAL_SCORE_OUTPUT</div>
                   {stats && stats.timeline ? (
                      <ScoreSection data={stats} currentTime={currentTime} />
                   ) : (
                      <div className="h-[250px] border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center space-y-4 bg-white/5 uppercase">
                          <Cpu size={20} className="text-yellow-400 animate-pulse" />
                          <p className="text-[10px] tracking-[0.3em] opacity-40">RUN_AI_ENGINE_TO_GENERATE_SCORE</p>
                      </div>
                   )}
                   <div className="flex justify-between opacity-20 text-[7px] tracking-[0.3em]"><span>TRANSCRIPTION_V4.2</span><span>FULL_SONG_MAP</span></div>
                 </div>
              </div>
            )}
            
            <AnimatePresence>
              {!isProcessing && stats && (
                <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="absolute bottom-20 inset-x-8 z-20 bg-black/60 backdrop-blur-xl border border-white/10 p-5 rounded-2xl max-h-[160px] overflow-y-auto uppercase">
                  <div className="flex items-center gap-2 mb-4 opacity-40 text-[7px] tracking-[0.3em] font-bold text-white uppercase"><Layers size={10} /> Neural_Rhythm_Map</div>
                  <div className="space-y-1.5">
                    {activeGrid.map((row) => (
                      <div key={row.name} className="flex items-center gap-4">
                        <span className="w-12 text-[7px] font-bold opacity-30">{row.name}</span>
                        <div className="flex-1 grid grid-cols-[repeat(16,1fr)] gap-1">
                          {row.steps.map((step, i) => (<div key={i} className={`h-2 rounded-sm border border-white/5 ${step ? 'bg-yellow-400 shadow-[0_0_10px_#fbbf24]' : 'bg-white/5'}`} />))}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="h-16 border-t border-white/5 bg-[#0a0a0a] px-8 flex items-center justify-between shrink-0 z-30 font-bold text-white">
              <div className="flex items-center gap-6">
                <button onClick={handlePlayToggle} className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-yellow-400 transition-colors uppercase font-bold text-black">{isPlaying ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-1" />}</button>
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold tracking-widest uppercase truncate max-w-[200px]">{file ? file.name : "NO_TRACK"}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-[2px] bg-white/10 relative overflow-hidden"><motion.div className="absolute h-full bg-yellow-400" animate={{ width: isPlaying ? "100%" : "0%" }} transition={{ duration: 30, ease: "linear" }} /></div>
                    <span className="text-[7px] opacity-30 font-mono tracking-widest uppercase">Live_Stream</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-[9px] font-bold border border-white/10 px-4 py-2 rounded-lg hover:border-yellow-400 transition-all uppercase"><Download size={14} /> Export_Midi</button>
            </div>
          </div>

          <div className="w-[400px] hidden xl:flex flex-col justify-between p-10 bg-[#080808] overflow-y-auto uppercase font-bold text-white">
            <div className="space-y-8 uppercase">
              <h1 className="text-3xl font-['Archivo_Black'] tracking-tighter leading-tight text-white uppercase font-bold">WORKSPACE</h1>
              <div className="space-y-6">
                 <div className="space-y-3"><label className="text-[9px] opacity-50 tracking-widest text-white font-bold uppercase tracking-widest">01_SOURCE_SELECTION</label><div className="border border-dashed border-white/10 p-6 text-center hover:border-yellow-400 relative bg-white/[0.01] rounded-2xl transition-all uppercase"><input type="file" accept="audio/*" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer" /><div className="text-[10px] opacity-50 font-bold">{file ? file.name : "DRAG AUDIO SOURCE"}</div></div></div>
                 <div className="space-y-3 uppercase font-bold"><label className="text-[9px] opacity-50 text-yellow-400 tracking-widest font-bold uppercase tracking-widest">02_NEURAL_PROMPT</label><div className="flex flex-wrap gap-1.5 mb-2">{['SOLO_KICK', 'TRAP_HAT', 'GHOST_SNARE', 'HALF_TIME'].map(m => (<button key={m} onClick={() => handleMacroClick(m)} className="text-[7px] font-bold border border-white/5 px-2 py-1 rounded-md opacity-30 hover:opacity-100 hover:border-yellow-400 transition-all uppercase text-white font-bold">{m}</button>))}</div><textarea ref={textareaRef} value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="E.G. 'MAKE THE KICK MORE AGGRESSIVE'..." className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl p-4 text-[11px] outline-none focus:border-yellow-400 min-h-[140px] resize-none normal-case placeholder:text-white/10 text-white font-bold" /></div>
              </div>
            </div>
            <div className="mt-8 flex justify-between items-end border-t border-white/5 pt-8 font-bold text-white uppercase"><div className="text-[8px] opacity-30 uppercase font-bold"><p>ENGINE: KICKR_V4</p><p>STATUS: {isProcessing ? 'BUSY' : 'READY'}</p></div><button disabled={!file || isProcessing} onClick={startAIProcess} className={`border px-10 py-5 rounded-2xl transition-all font-bold uppercase shadow-2xl ${file && !isProcessing ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black shadow-[0_0_20px_rgba(251,191,36,0.2)]' : 'border-white/5 opacity-20 cursor-not-allowed uppercase font-bold text-white'}`}>RUN AI ENGINE</button></div>
          </div>
        </div>
      </main>
    </div>
  );
}