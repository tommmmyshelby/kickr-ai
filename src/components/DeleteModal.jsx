import React from 'react';
import { motion } from 'framer-motion';
import { Trash2 } from 'lucide-react';

// Ensure "export default" is present
export default function DeleteModal({ isOpen, onConfirm, onCancel, title, message, isWipeAll }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-md border border-white/10 bg-[#0d0d0d] p-10 space-y-8 uppercase shadow-[0_0_50px_rgba(0,0,0,0.8)] rounded-[2rem]"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-red-500">
            <Trash2 size={24} />
            <h2 className="text-2xl font-['Archivo_Black'] tracking-tighter uppercase">{title}</h2>
          </div>
          <p className="text-[11px] tracking-[0.2em] leading-relaxed text-gray-300 uppercase">
            <span className="text-yellow-400 font-bold">WARNING:</span> 
            <span className="opacity-80 ml-2">{message}</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <button onClick={onConfirm} className="w-full border border-red-500 py-5 text-[10px] font-black tracking-[0.4em] text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300 rounded-xl uppercase">
            {isWipeAll ? "CONFIRM_TOTAL_WIPE" : "CONFIRM_DELETION"}
          </button>
          <button onClick={onCancel} className="w-full border border-yellow-400 py-5 text-[10px] font-black tracking-[0.4em] text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 rounded-xl shadow-[0_0_15px_rgba(251,191,36,0.1)] uppercase">
            ABORT_COMMAND
          </button>
        </div>
        <div className="text-[8px] text-center opacity-20 tracking-[0.5em] font-mono uppercase">KICKR_DATA_DESTRUCTION_v4.2</div>
      </motion.div>
    </div>
  );
}