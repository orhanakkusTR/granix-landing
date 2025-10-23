import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { AdminPage } from './pages/AdminPage';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionMap: Record<string, string> = {
      '/gallery': 'gallery',
      '/services': 'services',
      '/contact': 'contact',
      '/how-we-work': 'how-we-work',
      '/why-choose-us': 'why-choose-us'
    };

    const sectionId = sectionMap[location.pathname];

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const headerOffset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
    }
  }, [location]);

  return null;
}

function App() {
  const navigate = useNavigate();

  const handleQuoteSubmit = () => {
    navigate('/thank-you');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <>
      <ScrollToSection />
      <Routes>
        <Route path="/" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
        <Route path="/gallery" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
        <Route path="/services" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
        <Route path="/contact" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
        <Route path="/how-we-work" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
        <Route path="/why-choose-us" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
        <Route path="/thank-you" element={<ThankYouPage onNavigateHome={handleBackToHome} />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </>
  );
}

export default App;
