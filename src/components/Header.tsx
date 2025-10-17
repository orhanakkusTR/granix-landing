import { Phone } from 'lucide-react';

interface HeaderProps {
  onGetQuote: () => void;
}

export function Header({ onGetQuote }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://granix.free-appointment.com/wp-content/uploads/2025/09/Paragraf-metniniz-2-scaled.png"
              alt="Granix Logo"
              className="h-8 sm:h-10 md:h-14 w-auto"
            />
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('why-choose-us')}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Why Choose Us
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-amber-600 font-bold transition-colors text-[15px]"
            >
              Contact
            </button>
            <a
              href="tel:4102907136"
              className="flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors"
            >
              <Phone size={18} />
              (410) 290-7136
            </a>
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:4102907136"
              className="lg:hidden flex items-center gap-2 text-amber-600 hover:text-amber-700 font-bold transition-colors p-2"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={onGetQuote}
              className="relative bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-3 sm:px-4 md:px-6 py-2 md:py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-lg text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden group"
            >
              <span className="relative z-10">GET QUOTE</span>
              {/* Subtle shimmer effect on hover */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              {/* Continuous gentle pulse */}
              <div className="absolute inset-0 rounded-lg bg-amber-400/30 animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
