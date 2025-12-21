import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import ForgotPassword from './components/ForgotPassword';
import RegistrationPage from './components/RegistrationPage';
import CreatePasswordPage from './components/CreatePasswordPage';

const authVariants = {
  initial: { opacity: 0, filter: "blur(20px)", scale: 0.98 },
  animate: { opacity: 1, filter: "blur(0px)", scale: 1 },
  exit: { opacity: 0, filter: "blur(20px)", scale: 1.02 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const mainVariants = {
  initial: { opacity: 0, scale: 1.1 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, filter: "blur(40px)" },
  transition: { duration: 1, ease: [0.22, 1, 0.36, 1] }
};

export default function App() {
  const [view, setView] = useState(() => {
    const savedView = localStorage.getItem('saturn_session_view');
    return savedView === 'main' ? 'main' : 'login';
  });

  const [flowType, setFlowType] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0); // Progress State

  // --- BOOT-UP & LOADING BAR LOGIC ---
  useEffect(() => {
    // 1. Progress Bar Logic (Reaches 100% in 1.2 seconds)
    const interval = setInterval(() => {
      setBootProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2; 
      });
    }, 20);

    // 2. Total Boot Duration
    const timer = setTimeout(() => {
      setIsBooting(false);
    }, 1500); 

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('saturn_session_view', view);
  }, [view]);

  const handleFinalAction = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      setView('main');
    }, 2000);
  };

  const handleLogout = () => {
    localStorage.removeItem('saturn_session_view');
    setView('login');
  };

  return (
    <div className="bg-[#070707] h-screen w-full overflow-hidden relative font-sans uppercase">
      
      {/* 1. BOOT OVERLAY WITH LOADING BAR */}
      <AnimatePresence>
        {isBooting && (
          <motion.div 
            key="boot"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            className="fixed inset-0 z-[300] bg-[#070707] flex flex-col items-center justify-center"
          >
            {/* Oscillating Music Bars */}
            <div className="flex items-center gap-4 mb-10">
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [15, 50, 15] }}
                  transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                  className="w-[3px] bg-yellow-400"
                />
              ))}
              <span className="text-sm font-black tracking-[1em] text-white pl-4">SATURN / AI</span>
              {[0, 1, 2].map((i) => (
                <motion.div 
                  key={i}
                  animate={{ height: [15, 50, 15] }}
                  transition={{ repeat: Infinity, duration: 0.5, delay: i * 0.1 }}
                  className="w-[3px] bg-yellow-400"
                />
              ))}
            </div>

            {/* THE LOADING BAR CONTAINER */}
            <div className="w-72 space-y-3 text-center">
              <div className="h-[2px] w-full bg-white/10 relative overflow-hidden">
                <motion.div 
                  className="absolute h-full bg-yellow-400 shadow-[0_0_15px_#fbbf24]"
                  initial={{ width: 0 }}
                  animate={{ width: `${bootProgress}%` }}
                  transition={{ ease: "linear" }}
                />
              </div>
              
              <div className="flex justify-between items-center px-1">
                <span className="text-[8px] tracking-[0.4em] text-white/40 italic">NEURAL_INIT_TRANS</span>
                <span className="text-[10px] font-black text-yellow-400 font-mono">{bootProgress}%</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SUCCESS POPUP */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-xl">
            <div className="bg-yellow-400 text-black px-12 py-10 rounded-[2.5rem] text-center border border-white/20">
              <h2 className="text-3xl font-['Archivo_Black'] tracking-tighter">
                {flowType === 'registration' ? 'ACCESS ESTABLISHED' : 'PASSWORD RESET'}
              </h2>
              <p className="text-[10px] font-black tracking-[0.3em] mt-4 opacity-70">SYNCING DATA TO CLOUD</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. APP CONTENT */}
      {!isBooting && (
        <AnimatePresence mode="wait">
          {view === 'login' && (
            <motion.div key="l" {...authVariants} className="h-full">
              <LoginPage onLogin={() => setView('main')} onForgotClick={() => setView('forgot')} onRegisterClick={() => setView('register')} />
            </motion.div>
          )}

          {view === 'register' && (
            <motion.div key="r" {...authVariants} className="h-full">
              <RegistrationPage onBackToLogin={() => setView('login')} onOtpVerified={() => { setFlowType('registration'); setView('create-password'); }} />
            </motion.div>
          )}

          {view === 'forgot' && (
            <motion.div key="f" {...authVariants} className="h-full">
              <ForgotPassword onBack={() => setView('login')} onOtpVerified={() => { setFlowType('recovery'); setView('create-password'); }} />
            </motion.div>
          )}

          {view === 'create-password' && (
            <motion.div key="cp" {...authVariants} className="h-full">
              <CreatePasswordPage mode={flowType} onCreateAccount={handleFinalAction} />
            </motion.div>
          )}

          {view === 'main' && (
            <motion.div key="m" {...mainVariants} className="h-full">
              <MainPage onLogout={handleLogout} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}