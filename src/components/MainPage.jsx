import React, { Suspense, useState, memo, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, MessageSquare, Play, Pause, Download, Music, Cpu, X, Zap, Trash2, 
  ChevronLeft, ChevronRight, LayoutList, Briefcase 
} from 'lucide-react'; 
import Hero3D from './Hero3D';
import LogoutModal from './LogoutModal';
import DeleteModal from './DeleteModal';
import ReportModal from './ReportModal';
import ScoreSection from './ScoreSection'; // Simplified version that shows the Image

// --- VISUALIZER SECTION ---
const VisualizerSection = memo(({ isProcessing, stats, progress, phase }) => (
  <div className="w-full h-full relative bg-[#080808] overflow-hidden uppercase">
    <AnimatePresence>
      {!isProcessing && stats && (
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="absolute top-6 left-8 z-20 bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl font-mono text-[9px] space-y-3 w-44 text-white">
          <div className="flex justify-between border-b border-white/10 pb-2"><span>Accuracy</span><span className="text-green-400">98.2%</span></div>
          <div className="flex justify-between"><span>Transients</span><span className="text-yellow-400">{stats?.transients || 0}</span></div>
          <div className="flex justify-between"><span>Est_BPM</span><span>{stats?.bpm || 0}</span></div>
        </motion.div>
      )}
    </AnimatePresence>
    
    <AnimatePresence>
      {isProcessing && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-black/95 z-30 flex flex-col items-center justify-center p-10 backdrop-blur-md">
          <div className="relative mb-8 text-white">
            <Cpu className="text-yellow-400 animate-spin" size={32} />
            <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="absolute -top-1 -right-1">
              <Zap size={12} className="text-yellow-400 fill-yellow-400" />
            </motion.div>
          </div>
          <div className="text-[10px] tracking-[0.8em] text-yellow-400 font-black mb-2 animate-pulse">{phase || "PROCESSING"}</div>
          <div className="text-[7px] text-white/30 tracking-[0.4em] mb-6 uppercase">CUDA_CORE_ACTIVE // PRO_ENGRAVER_BOOTING</div>
          <div className="w-72 h-[1px] bg-white/5 relative mb-4">
            <motion.div className="absolute h-full bg-yellow-400 shadow-[0_0_15px_#fbbf24]" initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ ease: "linear" }} />
          </div>
          <div className="font-mono text-[10px] text-yellow-400/50 tracking-widest uppercase">{Math.round(progress)}% COMPLETE</div>
        </motion.div>
      )}
    </AnimatePresence>

    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 5], fov: 35 }}>
      <ambientLight intensity={1.5} />
      <Suspense fallback={null}><Stage environment="city" intensity={0.6} adjustCamera={false}><Hero3D /></Stage></Suspense>
      <OrbitControls makeDefault autoRotate={!isProcessing} />
    </Canvas>
  </div>
));

export default function MainPage({ onLogout }) {
  // CONSTANTS
  const userEmail = localStorage.getItem('kickr_user_email') || "";
  const userName = localStorage.getItem('kickr_username') || "Researcher";
  const userInitial = userName?.charAt(0).toUpperCase();

  // STATES
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [loadingPhase, setLoadingPhase] = useState('');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [stats, setStats] = useState(null);
  const [history, setHistory] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isHistoryOpen, setHistoryOpen] = useState(true);
  const [isWorkspaceOpen, setWorkspaceOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [deleteModalConfig, setDeleteModalConfig] = useState({ open: false, type: null, targetId: null });

  const audioRef = useRef(new Audio());
  const popupRef = useRef(null);

  // --- ACTIONS ---

  const fetchHistory = async () => {
    if (!userEmail) return;
    try {
      const res = await fetch(`http://127.0.0.1:8000/history/${userEmail}`);
      const data = await res.json();
      setHistory(Array.isArray(data) ? data : []);
    } catch (err) { setHistory([]); }
  };

  const handleLoadFromHistory = (item) => {
    setStats(item); // item now includes the 'sheet_url'
    setFile({ name: item.file_name });
    setHistoryOpen(false);
    setWorkspaceOpen(false);
    audioRef.current.src = `http://127.0.0.1:8000/audio/${encodeURIComponent(item.file_name)}`;
    audioRef.current.load();
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleNewSession = () => {
    setStats(null);
    setFile(null);
    setWorkspaceOpen(true);
    setHistoryOpen(true);
    audioRef.current.src = '';
    setIsPlaying(false);
    setCurrentTime(0);
    setLoadingProgress(0);
  };

  const startAIProcess = async () => {
    if (!file) return;
    setIsProcessing(true);
    setLoadingProgress(0);

    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const res = await fetch('http://127.0.0.1:8000/analyze', { method: 'POST', body: formData });
      const data = await res.json();
      
      if (data.status === "SUCCESS") {
        setLoadingProgress(100);
        setStats(data); // Includes 'sheet_url'
        setIsProcessing(false);
        setHistoryOpen(false);
        setWorkspaceOpen(false);

        // Save to Database (Including the rendered sheet image URL)
        await fetch('http://127.0.0.1:8000/history/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: userEmail, 
            file_name: file.name, 
            prompt: "Standard Extraction",
            bpm: data.bpm, 
            accuracy: data.accuracy, 
            timeline: data.timeline, 
            transients: data.transients,
            sheet_url: data.sheet_url // Crucial for persistent rendering
          })
        });
        fetchHistory();
      } else { 
        alert(data.message); 
        setIsProcessing(false); 
      }
    } catch (err) { 
      alert("AI_ENGINE_OFFLINE"); 
      setIsProcessing(false); 
    }
  };

  const openWipeAll = () => setDeleteModalConfig({ open: true, type: 'WIPE_ALL', targetId: null });

  const openDeleteSingle = (e, id) => {
    e.stopPropagation();
    setDeleteModalConfig({ open: true, type: 'SINGLE', targetId: id });
  };

  const confirmDeletion = async () => {
    const { type, targetId } = deleteModalConfig;
    try {
      if (type === 'SINGLE') await fetch(`http://127.0.0.1:8000/history/delete/${targetId}`, { method: 'DELETE' });
      else await fetch(`http://127.0.0.1:8000/history/clear/${userEmail}`, { method: 'DELETE' });
      fetchHistory();
    } catch (err) { alert("ERROR"); }
    setDeleteModalConfig({ open: false });
  };

  const handlePlayToggle = () => {
    if (!file) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
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
  };

  // --- EFFECTS ---

  useEffect(() => { fetchHistory(); }, []);

  useEffect(() => {
    const audio = audioRef.current;
    const up = () => setCurrentTime(audio.currentTime);
    const ud = () => setDuration(audio.duration);
    const he = () => setIsPlaying(false);
    audio.addEventListener('timeupdate', up);
    audio.addEventListener('loadedmetadata', ud);
    audio.addEventListener('ended', he);
    return () => {
      audio.removeEventListener('timeupdate', up);
      audio.removeEventListener('loadedmetadata', ud);
      audio.removeEventListener('ended', he);
    };
  }, []);

  useEffect(() => {
    let interval;
    if (isProcessing) {
      interval = setInterval(() => {
        setLoadingProgress(p => p < 98 ? p + 0.3 : p);
        if (loadingProgress < 15) setLoadingPhase("INITIALIZING_NEURAL_STREAMS");
        else if (loadingProgress < 85) setLoadingPhase("ISOLATING_PERCUSSIVE_TRANSIENTS");
        else setLoadingPhase("ENGRAVING_HIRES_SCORE");
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isProcessing, loadingProgress]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (popupRef.current && !popupRef.current.contains(event.target)) setIsProfileOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const formatTime = (time) => {
    if (isNaN(time)) return "00:00";
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;
  };

  return (
    <div className="h-screen w-full bg-[#070707] text-white uppercase overflow-hidden flex flex-col font-sans relative">
      <LogoutModal isOpen={isModalOpen} onConfirm={onLogout} onCancel={() => setIsModalOpen(false)} />
      <DeleteModal
        isOpen={deleteModalConfig.open}
        onConfirm={confirmDeletion}
        onCancel={() => setDeleteModalConfig({ open: false })}
        title={deleteModalConfig.type === 'WIPE_ALL' ? "WIPE HISTORY?" : "DELETE LOG?"}
        message="THIS DATA WILL BE REMOVED FROM HISTORY."
        isWipeAll={deleteModalConfig.type === 'WIPE_ALL'}
      />
      <ReportModal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)} userEmail={userEmail} />

      {/* NAV */}
      <nav className="flex justify-between items-center px-10 h-20 border-b border-white/5 bg-[#070707] z-50 uppercase font-bold">
        <div className="flex items-center gap-8">
          <img src="/logo.png" className="h-9 w-auto cursor-pointer" alt="Logo" onClick={() => setHistoryOpen(!isHistoryOpen)} />
          <div className="tracking-[1em] text-[12px]">KICKR / AI</div>
        </div>
      </nav>

      <main className="flex-1 flex min-h-0 w-full relative">

        {/* LEFT SIDEBAR (HISTORY) */}
        <motion.aside
          animate={{ width: isHistoryOpen ? 320 : 0 }}
          className="bg-[#070707] border-r border-white/5 overflow-hidden flex flex-col shrink-0 relative uppercase font-bold"
        >
          <div className="w-[320px] p-8 h-full flex flex-col uppercase">
            <div className="flex items-center justify-between mb-10">
              <button
                onClick={handleNewSession}
                className="flex-1 flex items-center justify-center gap-4 border border-white/10 p-5 rounded-2xl hover:bg-white hover:text-black font-bold text-[11px] transition-all tracking-widest uppercase"
              >
                <Plus size={18} /> NEW KICK_SESSION
              </button>
              <button onClick={() => setHistoryOpen(false)} className="ml-4 opacity-30 hover:opacity-100">
                <ChevronLeft size={24} />
              </button>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div className="text-[9px] opacity-20 tracking-[0.2em] font-bold uppercase">HISTORY_LOGS</div>
              <button onClick={openWipeAll} className="text-[8px] text-red-500/40 hover:text-red-500 font-black tracking-widest transition-all uppercase">WIPE_ALL</button>
            </div>

            <div className="flex-1 space-y-4 overflow-y-auto custom-scrollbar pr-2 uppercase">
              {Array.isArray(history) && history.map((item) => (
                <div
                  key={item._id}
                  onClick={() => handleLoadFromHistory(item)}
                  className="p-6 rounded-[1.5rem] bg-white/[0.03] border border-white/5 hover:border-yellow-400/40 cursor-pointer transition-all space-y-2 group relative uppercase"
                >
                  <div className="flex items-center gap-3 font-bold text-[12px] tracking-tighter uppercase truncate group-hover:text-yellow-400 pr-6">
                    <MessageSquare size={14} className="text-yellow-400" /> {item.file_name}
                  </div>
                  <button
                    onClick={(e) => openDeleteSingle(e, item._id)}
                    className="absolute top-6 right-4 opacity-0 group-hover:opacity-100 text-white/20 hover:text-red-500 transition-all"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              ))}
            </div>

            {/* PROFILE SECTION */}
            <div className="relative mt-auto" ref={popupRef}>
              <AnimatePresence>
                {isProfileOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute bottom-24 left-0 w-[310px] bg-[#121212] rounded-[2.2rem] shadow-2xl z-[100] flex flex-col overflow-hidden border border-white/10 uppercase"
                  >
                    <div className="p-8 pb-10 flex flex-col items-center">
                      <div className="w-20 h-20 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-3xl font-black mb-5 shadow-[0_0_20px_rgba(251,191,36,0.1)]">{userInitial}</div>
                      <h4 className="text-xl font-bold normal-case text-white mb-1 tracking-tight">{userName}</h4>
                      <p className="text-[13px] opacity-40 normal-case font-medium">{userEmail}</p>
                    </div>
                    <div className="bg-white/[0.03] border-t border-white/5 flex flex-col">
                      <button
                        onClick={() => { setIsProfileOpen(false); setIsReportOpen(true); }}
                        className="w-full py-5 border-b border-white/5 text-[12px] font-bold text-white hover:bg-white/[0.05] transition-all tracking-widest uppercase"
                      >
                        Report a problem
                      </button>
                      <button
                        onClick={() => { setIsProfileOpen(false); setIsModalOpen(true); }}
                        className="w-full py-6 text-base font-bold text-white hover:bg-white/[0.05] transition-all tracking-widest uppercase"
                      >
                        Sign out
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div onClick={() => setIsProfileOpen(!isProfileOpen)} className="pt-8 flex items-center gap-4 border-t border-white/5 cursor-pointer uppercase">
                <div className="w-12 h-12 rounded-full bg-yellow-400/10 border border-yellow-400/20 flex items-center justify-center text-yellow-400 text-lg font-black">{userInitial}</div>
                <div className="flex flex-col overflow-hidden">
                  <span className="text-[11px] font-bold opacity-80 truncate w-40 uppercase">{userName}</span>
                  <span className="text-[8px] text-yellow-500 font-black tracking-widest mt-1 uppercase">VERIFIED</span>
                </div>
              </div>
            </div>
          </div>
        </motion.aside>

        {/* CENTER CONTENT */}
        <div className="flex-1 flex flex-col min-w-0 border-r border-white/5 bg-[#070707]">
          <div className="flex-1 w-full relative flex flex-col overflow-hidden uppercase">

            {/* FLOATING RESTORE BUTTONS */}
            {!isHistoryOpen && (
              <button
                onClick={() => setHistoryOpen(true)}
                className="absolute top-10 left-6 z-[60] bg-black/60 border border-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-xl"
              >
                <LayoutList size={20} />
              </button>
            )}

            {!isWorkspaceOpen && !stats && (
              <button
                onClick={() => setWorkspaceOpen(true)}
                className="absolute top-10 right-6 z-[60] bg-black/60 border border-white/10 p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all shadow-xl"
              >
                <Briefcase size={20} />
              </button>
            )}

            {!stats || isProcessing ? (
              <VisualizerSection isProcessing={isProcessing} stats={stats} progress={loadingProgress} phase={loadingPhase} />
            ) : (
              <div className="flex-1 w-full bg-[#070707] p-10 overflow-y-auto custom-scrollbar flex flex-col items-center uppercase">
                <div className="flex items-center justify-between w-full max-w-[1200px] mb-6 opacity-30 text-[9px] tracking-[0.4em] font-bold uppercase">
                  <div className="flex items-center gap-2"><Music size={12} /> NEURAL_STAVE_RENDER // READY</div>
                  {!isWorkspaceOpen && (
                    <button onClick={() => setWorkspaceOpen(true)} className="flex items-center gap-2 text-yellow-400 hover:text-white transition-all uppercase">
                      <ChevronRight size={14} /> OPEN WORKSPACE
                    </button>
                  )}
                </div>
                
                {/* ScoreSection now displays the backend image */}
                <div className="w-full flex-1">
                  <ScoreSection data={{ ...stats, file_name: file?.name || stats.file_name }} />
                </div>
              </div>
            )}
          </div>

          {/* FOOTER / PLAYER */}
          <footer className="h-28 border-t border-white/5 bg-[#070707] px-10 flex flex-col justify-center gap-3 font-bold uppercase z-30">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-8">
                <button
                    onClick={handlePlayToggle}
                    disabled={!file}
                    className={`w-12 h-12 rounded-full flex items-center justify-center transition-all font-bold
                      ${file 
                        ? 'bg-white text-black hover:bg-yellow-400 cursor-pointer' 
                        : 'bg-white/10 text-white/20 cursor-not-allowed'
                      }`}
                >
                  {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                </button>
                <div className="flex flex-col">
                  <span
                    className="text-[14px] font-['Archivo_Black'] tracking-[0.2em] text-white uppercase truncate max-w-[500px]"
                    style={{ textShadow: '-1px 0 #ff0000, 1px 0 #00ffff, 0 0 5px rgba(255,255,255,0.2)' }}
                  >
                    {file ? file.name : (stats ? stats.file_name : "SYSTEM_IDLE")}
                  </span>
                  <div className="flex items-center gap-2 mt-0.5 text-[10px] font-bold opacity-30 tracking-[0.1em] font-mono uppercase">
                    <span>{formatTime(currentTime)}</span><span className="opacity-50">/</span><span>{formatTime(duration)}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative px-2">
              <input
                type="range" min="0" max={duration || 0} value={currentTime} step="0.1"
                onChange={handleSeek}
                className="w-full h-[3px] bg-white/10 appearance-none cursor-pointer rounded-full accent-yellow-400 hover:h-[5px] transition-all"
                style={{ background: `linear-gradient(to right, #fbbf24 ${(currentTime / duration) * 100}%, rgba(255, 255, 255, 0.1) ${(currentTime / duration) * 100}%)` }}
              />
            </div>
          </footer>
        </div>

        {/* RIGHT SIDEBAR (WORKSPACE) */}
        <motion.aside
          animate={{ width: isWorkspaceOpen ? 420 : 0, opacity: isWorkspaceOpen ? 1 : 0 }}
          className="bg-[#070707] flex flex-col font-bold relative border-l border-white/5 overflow-hidden uppercase"
        >
          <div className="w-[420px] flex-1 overflow-y-auto custom-scrollbar flex flex-col p-10 space-y-10 uppercase">
            <div className="flex items-center justify-between">
              <h1 className="text-4xl font-['Archivo_Black'] tracking-tighter mb-4 uppercase">WORKSPACE</h1>
              <button onClick={() => setWorkspaceOpen(false)} className="opacity-30 hover:opacity-100">
                <ChevronRight size={24} />
              </button>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <label className="text-[10px] opacity-40 tracking-widest font-bold uppercase">01_SOURCE_SELECTION</label>
                <div className={`border border-dashed p-10 rounded-[2.5rem] text-center relative transition-all bg-white/[0.01] flex items-center justify-center min-h-[140px] ${file ? 'border-yellow-400/40' : 'border-white/10 hover:border-yellow-400'}`}>
                  {!file && <input type="file" onChange={handleFileChange} className="absolute inset-0 opacity-0 cursor-pointer z-10" />}
                  <div className="flex flex-col items-center gap-3 w-full">
                    <span className={`text-[11px] font-bold tracking-widest uppercase truncate max-w-[280px] ${file ? 'text-yellow-400' : 'opacity-30'}`}>
                      {file ? file.name : "DRAG AUDIO SOURCE"}
                    </span>
                    {file && (
                      <button
                        onClick={handleRemoveFile}
                        className="flex items-center gap-2 text-[9px] text-red-500/60 hover:text-red-500 font-black tracking-[0.2em] transition-all bg-red-500/5 px-4 py-1.5 rounded-full border border-red-500/10 uppercase"
                      >
                        <X size={12} /> REMOVE_SOURCE
                      </button>
                    )}
                  </div>
                </div>
              </div>

              <button
                disabled={!file || isProcessing}
                onClick={startAIProcess}
                className={`w-full py-7 rounded-2xl font-black text-sm border transition-all uppercase tracking-widest ${file && !isProcessing
                  ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black shadow-[0_0_30px_rgba(251,191,36,0.15)]'
                  : 'border-white/5 opacity-10 cursor-not-allowed'
                }`}
              >
                {isProcessing ? "PROCESSING..." : "RUN AI ENGINE"}
              </button>
            </div>

            <div className="mt-auto opacity-30 text-[9px] font-bold tracking-widest uppercase pt-10">
              <p>ENGINE: KICKR_V5_ENGRAVER</p>
              <p>STATUS: {isProcessing ? 'BUSY' : 'READY'}</p>
            </div>
          </div>
        </motion.aside>
      </main>
    </div>
  );
}