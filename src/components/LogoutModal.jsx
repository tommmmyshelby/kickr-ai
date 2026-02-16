import React from 'react';

export default function LogoutModal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md animate-in fade-in duration-300 px-6">
      {/* Modal Box */}
      <div className="w-full max-w-md border border-white/20 bg-[#0d0d0d] p-10 space-y-8 uppercase shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        
        <div className="space-y-4">
          <h2 className="text-2xl font-['Archivo_Black'] tracking-tighter text-red-500">
            Terminate Session?
          </h2>
          
          {/* IMPROVED READABILITY SECTION */}
          <p className="text-[11px] tracking-[0.2em] leading-relaxed text-gray-200">
            <span className="text-yellow-400 font-bold">Warning:</span> 
            <span className="opacity-90 ml-2">
              All unsaved AI extraction data will be cleared from the volatile memory. 
              Do you wish to proceed with de-authorization?
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Terminate Button */}
          <button 
            onClick={onConfirm}
            className="w-full border border-red-500 py-4 text-[10px] font-bold tracking-[0.4em] text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
          >
            Confirm Termination
          </button>

          {/* Resume Button */}
          <button 
            onClick={onCancel}
            className="w-full border border-yellow-400 py-4 text-[10px] font-bold tracking-[0.4em] text-yellow-400 hover:bg-yellow-400 hover:text-white transition-all duration-300"
          >
            Resume Session
          </button>
        </div>

        <div className="text-[8px] text-center opacity-20 tracking-[0.5em] text-white">
          SECURE_LOGOUT_PROTOCOL_v4.0.1
        </div>
      </div>
    </div>
  );
}