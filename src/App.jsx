import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import ForgotPassword from './components/ForgotPassword';
import RegistrationPage from './components/RegistrationPage';
import CreatePasswordPage from './components/CreatePasswordPage';
import MusicWave from './components/MusicWave';

<<<<<<< HEAD
export default function App() {
  const [view, setView] = useState(() => localStorage.getItem('kickr_session_view') === 'main' ? 'main' : 'login');
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);
  const [flowType, setFlowType] = useState(''); 
  const [tempUserData, setTempUserData] = useState({ fullName: '', username: '', email: '', otp: '' });
  const [showSuccess, setShowSuccess] = useState(false);

  // Function to handle dramatic page transitions
  const navigateTo = (nextView) => {
    setBootProgress(0);
    setIsTransitioning(true);
    // Simulate system loading
    setTimeout(() => {
      setView(nextView);
      setIsTransitioning(false);
    }, 1200); 
  };

  // Progress bar animation logic
  useEffect(() => {
    let interval;
    if (isTransitioning) {
      setBootProgress(0);
      interval = setInterval(() => {
        setBootProgress((prev) => (prev >= 100 ? 100 : prev + 5));
      }, 40);
    }
    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Initial Boot
  useEffect(() => {
    const timer = setTimeout(() => setIsTransitioning(false), 1500);
    return () => clearTimeout(timer);
=======
// Transition Variants
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
  const [view, setView] = useState(() => localStorage.getItem('kickr_session_view') === 'main' ? 'main' : 'login');
  const [flowType, setFlowType] = useState(''); 
  const [tempUserData, setTempUserData] = useState({ fullName: '', email: '', otp: '' });
  const [showSuccess, setShowSuccess] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootProgress, setBootProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => { setBootProgress((prev) => (prev >= 100 ? 100 : prev + 2)); }, 20);
    const timer = setTimeout(() => setIsBooting(false), 1500);
    return () => { clearInterval(interval); clearTimeout(timer); };
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
  }, []);

  useEffect(() => { localStorage.setItem('kickr_session_view', view); }, [view]);

  const handleFinalActionSuccess = () => {
    setShowSuccess(true);
<<<<<<< HEAD
    setTimeout(() => { 
      setShowSuccess(false); 
      navigateTo('main'); 
    }, 2000);
=======
    setTimeout(() => { setShowSuccess(false); setView('main'); }, 2000);
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
  };

  const handleLogout = () => { 
    localStorage.removeItem('kickr_session_view'); 
    localStorage.removeItem('kickr_token');
    localStorage.removeItem('kickr_user_email');
<<<<<<< HEAD
    navigateTo('login'); 
=======
    setView('login'); 
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
  };

  return (
    <div className="bg-[#070707] h-screen w-full overflow-hidden relative font-sans uppercase">
      
<<<<<<< HEAD
      {/* --- REUSABLE SYSTEM LOADING OVERLAY --- */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div 
            key="loader"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0, filter: "blur(20px)" }} 
            className="fixed inset-0 z-[300] bg-[#070707] flex flex-col items-center justify-center"
          >
            <MusicWave count={12} size="large" />
            <img src="/logo.png" alt="Logo" className="h-16 w-auto my-6" />
            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
              <motion.div 
                className="absolute h-full bg-yellow-400 shadow-[0_0_15px_#fbbf24]" 
                style={{ width: `${bootProgress}%` }} 
              />
            </div>
            <div className="flex justify-between w-64 text-[8px] text-white/40 mt-2 font-bold tracking-widest">
              <span>ESTABLISHING_NEURAL_LINK</span>
=======
      {/* 1. SYSTEM BOOT SEQUENCE */}
      <AnimatePresence>
        {isBooting && (
          <motion.div key="boot" initial={{ opacity: 1 }} exit={{ opacity: 0, filter: "blur(20px)" }} className="fixed inset-0 z-[300] bg-[#070707] flex flex-col items-center justify-center">
            <MusicWave count={12} size="large" />
            <img src="/logo.png" alt="Logo" className="h-16 w-auto my-6" />
            <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden text-white uppercase">
              <motion.div className="absolute h-full bg-yellow-400 shadow-[0_0_15px_#fbbf24]" initial={{ width: 0 }} animate={{ width: `${bootProgress}%` }} />
            </div>
            <div className="flex justify-between w-64 text-[8px] text-white/40 mt-2 uppercase font-bold tracking-widest">
              <span>INITIALIZING_NEURAL_KICKR</span>
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
              <span className="text-yellow-400">{bootProgress}%</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* SUCCESS POPUP */}
=======
      {/* 2. SUCCESS POPUP */}
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
      <AnimatePresence>
        {showSuccess && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-xl">
            <div className="bg-yellow-400 text-black px-12 py-10 rounded-[2.5rem] text-center border border-white/20 shadow-2xl">
<<<<<<< HEAD
              <h2 className="text-3xl font-bold tracking-tighter uppercase">{flowType === 'registration' ? 'ACCESS ESTABLISHED' : 'PASSWORD RESET'}</h2>
              <p className="text-[10px] font-black tracking-[0.3em] mt-4 opacity-70 uppercase">SYNCING DATA TO KICKR_CLOUD</p>
=======
              <h2 className="text-3xl font-['Archivo_Black'] tracking-tighter uppercase font-bold">{flowType === 'registration' ? 'ACCESS ESTABLISHED' : 'PASSWORD RESET'}</h2>
              <p className="text-[10px] font-black tracking-[0.3em] mt-4 opacity-70 uppercase font-bold text-black text-center">SYNCING DATA TO KICKR_CLOUD</p>
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* APP NAVIGATION */}
      {!isTransitioning && (
        <AnimatePresence mode="wait">
          {view === 'login' && (
            <motion.div key="l" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <LoginPage 
                onLogin={() => navigateTo('main')} 
                onForgotClick={() => navigateTo('forgot')} 
                onRegisterClick={() => navigateTo('register')} 
              />
=======
      {/* 3. APP NAVIGATION */}
      {!isBooting && (
        <AnimatePresence mode="wait">
          {view === 'login' && (
            <motion.div key="l" {...authVariants} className="h-full">
              <LoginPage onLogin={() => setView('main')} onForgotClick={() => setView('forgot')} onRegisterClick={() => setView('register')} />
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
            </motion.div>
          )}

          {view === 'register' && (
<<<<<<< HEAD
            <motion.div key="r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <RegistrationPage 
                onBackToLogin={() => navigateTo('login')} 
                onOtpVerified={(email, name, username, otp) => { 
                  setTempUserData({email, fullName: name, username, otp}); 
                  setFlowType('registration'); 
                  navigateTo('create-password'); 
                }} 
              />
=======
            <motion.div key="r" {...authVariants} className="h-full">
              <RegistrationPage onBackToLogin={() => setView('login')} onOtpVerified={(email, name, otp) => { setTempUserData({email, fullName: name, otp}); setFlowType('registration'); setView('create-password'); }} />
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
            </motion.div>
          )}

          {view === 'forgot' && (
<<<<<<< HEAD
            <motion.div key="f" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
              <ForgotPassword 
                onBack={() => navigateTo('login')} 
                onOtpVerified={(email, otp) => { 
                  setTempUserData({email, fullName: 'User', username: '', otp}); 
                  setFlowType('recovery'); 
                  navigateTo('create-password'); 
                }} 
              />
=======
            <motion.div key="f" {...authVariants} className="h-full">
              <ForgotPassword onBack={() => setView('login')} onOtpVerified={(email, otp) => { setTempUserData({email, fullName: 'User', otp}); setFlowType('recovery'); setView('create-password'); }} />
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
            </motion.div>
          )}

          {view === 'create-password' && (
<<<<<<< HEAD
            <motion.div key="cp" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
=======
            <motion.div key="cp" {...authVariants} className="h-full">
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
              <CreatePasswordPage mode={flowType} userData={tempUserData} onCreateAccount={handleFinalActionSuccess} />
            </motion.div>
          )}

          {view === 'main' && (
<<<<<<< HEAD
            <motion.div key="m" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="h-full">
=======
            <motion.div key="m" {...mainVariants} className="h-full">
>>>>>>> 806e05c999d5d4cd4455ce3a5c31589cabf32df6
              <MainPage onLogout={handleLogout} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
}