import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface FloatingQuoteFormProps {
  onSubmitSuccess?: () => void;
}

export function FloatingQuoteForm({ onSubmitSuccess }: FloatingQuoteFormProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [isMobile]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmitSuccess = () => {
    setIsOpen(false);
    onSubmitSuccess?.();
  };

  return (
    <div
      className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 transition-transform duration-500 ${
        isOpen ? 'translate-x-0' : 'translate-x-[320px] sm:translate-x-[360px] lg:translate-x-[400px]'
      }`}
    >
      <div className="flex items-center">
        <button
          onClick={handleToggle}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white h-36 lg:h-44 w-12 rounded-l-lg shadow-lg transition-all hover:shadow-xl flex items-center justify-center"
          aria-label={isOpen ? "Close quote form" : "Open quote form"}
        >
          <div className="flex flex-col items-center gap-2">
            {isOpen ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            <span className="text-xs font-semibold whitespace-nowrap [writing-mode:vertical-lr] rotate-180 tracking-widest">
              GET QUOTE
            </span>
          </div>
        </button>
        <div className="bg-white shadow-2xl w-[320px] sm:w-[360px] lg:w-[400px] max-h-[90vh] overflow-y-auto">
          <QuoteForm variant="hero" onSubmitSuccess={handleSubmitSuccess} />
        </div>
      </div>
    </div>
  );
}
