import { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Features } from '../components/Features';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';
import { QuoteModal } from '../components/QuoteModal';
import { FloatingCTA } from '../components/FloatingCTA';

interface HomePageProps {
  onQuoteSubmit: () => void;
}

export function HomePage({ onQuoteSubmit }: HomePageProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasShownPopup, setHasShownPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem('popupShown');
    if (popupShown) {
      setHasShownPopup(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const middleOfPage = (documentHeight - windowHeight) / 2;

      if (scrollPosition >= middleOfPage && !hasShownPopup) {
        window.removeEventListener('scroll', handleScroll);

        setTimeout(() => {
          setIsModalOpen(true);
          setHasShownPopup(true);
          localStorage.setItem('popupShown', 'true');
        }, 2000);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasShownPopup]);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen">
      <Header onGetQuote={() => setIsModalOpen(true)} />
      <Hero
        onOpenModal={() => setIsModalOpen(true)}
        onQuoteSubmit={onQuoteSubmit}
      />
      <Services onGetQuote={() => setIsModalOpen(true)} />
      <Features />
      <CTASection onQuoteSubmit={onQuoteSubmit} />
      <Footer />

      <QuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmitSuccess={onQuoteSubmit}
      />

      <FloatingCTA onClick={() => setIsModalOpen(true)} />
    </div>
  );
}
