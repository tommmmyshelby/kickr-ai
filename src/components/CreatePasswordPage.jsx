import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export default function CreatePasswordPage({ mode, userData, onCreateAccount }) {
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const isRegistration = mode === 'registration';

  const validate = () => {
    if (password.length < 8) return 'PASSWORD MUST BE AT LEAST 8 CHARACTERS';
    if (password !== confirm) return 'PASSWORDS DO NOT MATCH';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setIsLoading(true);
    setError('');

    try {
      if (isRegistration) {
        // ── REGISTRATION: POST /auth/register ────────────────────────────────
        const res = await fetch('http://127.0.0.1:8000/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email:     userData.email,
            username:  userData.username,
            full_name: userData.fullName,
            password:  password,
          })
        });

        const data = await res.json();

        if (!res.ok) {
          const errorMap = {
            EMAIL_ALREADY_REGISTERED: 'EMAIL ALREADY IN USE',
            USERNAME_TAKEN:           'USERNAME ALREADY TAKEN',
            OTP_NOT_VERIFIED:         'IDENTITY NOT VERIFIED — RESTART FLOW',
            PASSWORD_TOO_SHORT:       'PASSWORD MUST BE AT LEAST 8 CHARACTERS',
            MISSING_FIELDS:           'MISSING REQUIRED FIELDS',
          };
          setError(errorMap[data.detail] || data.detail || 'REGISTRATION FAILED');
          return;
        }

      } else {
        // ── RECOVERY: POST /auth/reset-password ──────────────────────────────
        const res = await fetch('http://127.0.0.1:8000/auth/reset-password', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email:    userData.email,
            password: password,
          })
        });

        const data = await res.json();

        if (!res.ok) {
          const errorMap = {
            OTP_NOT_VERIFIED: 'IDENTITY NOT VERIFIED — RESTART FLOW',
            USER_NOT_FOUND:   'ACCOUNT NOT FOUND',
            PASSWORD_TOO_SHORT: 'PASSWORD MUST BE AT LEAST 8 CHARACTERS',
          };
          setError(errorMap[data.detail] || data.detail || 'RESET FAILED');
          return;
        }
      }

      onCreateAccount();

    } catch (err) {
      setError('CONNECTION_ERROR');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-screen w-full bg-[#070707] flex items-center justify-center p-6 uppercase text-white overflow-hidden">
      <div className="flex flex-col justify-center px-16 w-full max-w-lg">

        <div className="flex items-center gap-4 mb-8">
          <img src="/logo.png" className="h-10 w-auto" alt="Logo" />
          <span className="font-bold tracking-[0.4em] text-[10px]">KICKR / AI</span>
        </div>

        <h1 className="text-5xl font-['Archivo_Black'] tracking-tighter mb-2 uppercase">
          {isRegistration ? 'SET PASSWORD' : 'NEW PASSWORD'}
        </h1>
        <p className="text-[10px] tracking-[0.3em] opacity-30 mb-10 uppercase">
          {isRegistration ? 'SECURE YOUR NEURAL ACCOUNT' : 'RESET ACCESS CREDENTIALS'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
          {/* Password */}
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="New Password"
              className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm placeholder:normal-case"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-6 top-1/2 -translate-y-1/2 text-yellow-400 opacity-60 hover:opacity-100"
            >
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          {/* Confirm */}
          <input
            type={showPassword ? 'text' : 'password'}
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            placeholder="Confirm Password"
            className="w-full bg-[#0d0d0d] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400 text-sm placeholder:normal-case"
          />

          {/* Strength hint */}
          <p className="text-[9px] opacity-30 tracking-widest font-bold uppercase">
            MIN 8 CHARACTERS
          </p>

          {error && (
            <p className="text-red-500 text-[10px] font-bold tracking-widest uppercase">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-white text-black font-black py-5 rounded-2xl hover:bg-yellow-400 transition-all text-xs uppercase"
          >
            {isLoading
              ? 'ENCRYPTING...'
              : isRegistration
              ? 'CREATE ACCOUNT'
              : 'RESET PASSWORD'
            }
          </button>
        </form>
      </div>
    </div>
  );
}