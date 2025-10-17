import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'thank-you' | 'admin'>('home');

  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/admin') {
      setCurrentPage('admin');
    } else if (path === '/thank-you') {
      setCurrentPage('thank-you');
    } else {
      setCurrentPage('home');
    }
  }, []);

  const handleQuoteSubmit = () => {
    setCurrentPage('thank-you');
    window.history.pushState({}, '', '/thank-you');
  };

  const handleBackToHome = () => {
    setCurrentPage('home');
    window.history.pushState({}, '', '/');
  };

  if (currentPage === 'admin') {
    return <AdminPage />;
  }

  if (currentPage === 'thank-you') {
    return <ThankYouPage onNavigateHome={handleBackToHome} />;
  }

  return <HomePage onQuoteSubmit={handleQuoteSubmit} />;
}

export default App;
