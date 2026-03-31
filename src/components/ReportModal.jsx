import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Send } from 'lucide-react';

export default function ReportModal({ isOpen, onClose, userEmail }) {
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleReport = async () => {
    if (!message.trim()) return;
    setIsSending(true);
    try {
      const res = await fetch('http://127.0.0.1:8000/auth/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: userEmail, message: message })
      });
      if (res.ok) {
        setSent(true);
        setTimeout(() => {
          onClose();
          setSent(false);
          setMessage('');
        }, 2000);
      }
    } catch (err) { alert("REPORT_FAILED_TO_DISPATCH"); }
    finally { setIsSending(false); }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/95 backdrop-blur-xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-lg border border-white/10 bg-[#0d0d0d] p-10 space-y-8 rounded-[2.5rem] shadow-2xl uppercase">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-yellow-400">
            <AlertCircle size={24} />
            <h2 className="text-2xl font-['Archivo_Black'] tracking-tighter">REPORT A PROBLEM</h2>
          </div>
          <p className="text-[9px] tracking-[0.3em] opacity-40">DIRECT LINK TO NEURAL_DEVELOPER</p>
        </div>

        {sent ? (
          <div className="py-10 text-center text-green-400 font-bold tracking-widest animate-pulse">
            REPORT DISPATCHED SUCCESSFULLY
          </div>
        ) : (
          <>
            <textarea 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="DESCRIBE THE ISSUE IN DETAIL..."
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-6 text-xs min-h-[200px] outline-none focus:border-yellow-400 normal-case transition-all"
            />
            <div className="flex flex-col gap-4">
              <button onClick={handleReport} disabled={isSending} className="w-full bg-yellow-400 text-black py-5 rounded-xl font-black text-[10px] tracking-widest hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(251,191,36,0.2)]">
                {isSending ? "DISPATCHING..." : <><Send size={14}/> SEND REPORT</>}
              </button>
              <button onClick={onClose} className="w-full py-4 text-[9px] font-bold opacity-30 hover:opacity-100 transition-all uppercase">CANCEL</button>
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
}