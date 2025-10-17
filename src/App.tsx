import { Routes, Route, useNavigate } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ThankYouPage } from './pages/ThankYouPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  const navigate = useNavigate();

  const handleQuoteSubmit = () => {
    navigate('/thank-you');
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage onQuoteSubmit={handleQuoteSubmit} />} />
      <Route path="/thank-you" element={<ThankYouPage onNavigateHome={handleBackToHome} />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
