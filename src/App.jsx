import React, { useState } from 'react';
import LoginPage from './components/LoginPage';
import MainPage from './components/MainPage';
import ForgotPassword from './components/ForgotPassword';

export default function App() {
  // 3 States: 'login', 'forgot', 'main'
  const [view, setView] = useState('login');

  return (
    <>
      {view === 'login' && (
        <LoginPage 
          onLogin={() => setView('main')} 
          onForgotClick={() => setView('forgot')} 
        />
      )}

      {view === 'forgot' && (
        <ForgotPassword 
          onBack={() => setView('login')} 
        />
      )}

      {view === 'main' && (
        <MainPage 
          onLogout={() => setView('login')} 
        />
      )}
    </>
  );
}