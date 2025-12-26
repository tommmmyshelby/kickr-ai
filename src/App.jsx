import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import ForgotPassword from './components/ForgotPassword';
import RegistrationPage from './components/RegistrationPage';
import CreatePasswordPage from './components/CreatePasswordPage';
import MusicWave from './components/MusicWave';

const authVariants = { initial: { opacity: 0, filter: "blur(20px)", scale: 0.98 }, animate: { opacity: 1, filter: "blur(0px)", scale: 1 }, exit: { opacity: 0, filter: "blur(20px)", scale: 1.02 }, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } };
const mainVariants = { initial: { opacity: 0, scale: 1.1 }, animate: { opacity: 1, scale: 1 }, exit: { opacity: 0, filter: "blur(40px)" }, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } };

export default function App() {
  const [view, setView] = useState(() => localStorage.getItem('kickr_session_view') === 'main' ? 'main' : 'login');
  const [flowType, setFlowType] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setBootProgress((prev) => (prev >= 100 ? 100 : prev + 2)); }, 20);
    const timer = setTimeout(() => setIsBooting(false), 1500);
    return () => { clearInterval(interval); clearTimeout(timer); };
  }, []);

  useEffect(() => { localStorage.setItem('kickr_session_view', view); }, [view]);

  const handleFinalAction = () => {
    setShowSuccess(true);
    setTimeout(() => { setShowSuccess(false); setView('main'); }, 2000);
  };

  const handleLogout = () => { localStorage.removeItem('kickr_session_view'); setView('login'); };

  return (
    <div className="bg-[#070707] h-screen w-full overflow-hidden relative font-sans uppercase">
      <AnimatePresence shadow-xl>{isBooting && (<motion.div key="boot" initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(20px)" }} className="fixed inset-0 z-[300] bg-[#070707] flex flex-col items-center justify-center"><MusicWave count={12} size="large" /><img src="/logo.png" alt="Logo" className="h-16 w-auto my-6" /><div className="w-64 h-[1px] bg-white/10 relative overflow-hidden"><motion.div className="absolute h-full bg-yellow-400 shadow-[0_0_15px_#fbbf24]" initial={{ width: 0 }} animate={{ width: `${bootProgress}%` }} /></div><div className="flex justify-between w-64 text-[8px] text-white/40 mt-2"><span>BOOT_SEQUENCE</span><span className="text-yellow-400">{bootProgress}%</span></div></motion.div>)}</AnimatePresence>
      <AnimatePresence>{showSuccess && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-xl"><div className="bg-yellow-400 text-black px-12 py-10 rounded-[2.5rem] text-center border border-white/20 shadow-2xl"><h2 className="text-3xl font-['Archivo_Black'] tracking-tighter uppercase font-bold">{flowType === 'registration' ? 'ACCESS ESTABLISHED' : 'PASSWORD RESET'}</h2><p className="text-[10px] font-black tracking-[0.3em] mt-4 opacity-70 uppercase font-bold text-black text-center">SYNCING DATA TO KICKR_CLOUD</p></div></motion.div>)}</AnimatePresence>
      {!isBooting && (<AnimatePresence mode="wait">
          {view === 'login' && <motion.div key="l" {...authVariants} className="h-full"><LoginPage onLogin={() => setView('main')} onForgotClick={() => setView('forgot')} onRegisterClick={() => setView('register')} /></motion.div>}
          {view === 'register' && <motion.div key="r" {...authVariants} className="h-full"><RegistrationPage onBackToLogin={() => setView('login')} onOtpVerified={() => { setFlowType('registration'); setView('create-password'); }} /></motion.div>}
          {view === 'forgot' && <motion.div key="f" {...authVariants} className="h-full"><ForgotPassword onBack={() => setView('login')} onOtpVerified={() => { setFlowType('recovery'); setView('create-password'); }} /></motion.div>}
          {view === 'create-password' && <motion.div key="cp" {...authVariants} className="h-full"><CreatePasswordPage mode={flowType} onCreateAccount={handleFinalAction} /></motion.div>}
          {view === 'main' && <motion.div key="m" {...mainVariants} className="h-full"><MainPage onLogout={handleLogout} /></motion.div>}
        </AnimatePresence>)}
    </div>
  );
}