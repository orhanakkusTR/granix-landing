import { Sparkles, Award } from 'lucide-react';
import { QuoteForm } from './QuoteForm';

interface HeroProps {
  onOpenModal: () => void;
  onQuoteSubmit?: () => void;
}

export function Hero({ onOpenModal, onQuoteSubmit }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-stone-900">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/80 to-gray-900/60" />

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 lg:px-12 xl:px-20 py-24 sm:py-32 lg:py-40">

        <div className="grid lg:grid-cols-[1fr,1fr] xl:grid-cols-[1.1fr,1fr] gap-12 lg:gap-20 xl:gap-28 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="text-white space-y-6 sm:space-y-8 relative">
            <div className="flex items-center gap-6 sm:gap-8 lg:gap-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
                <Sparkles className="text-amber-400" size={16} />
                <span className="text-amber-400 font-semibold text-sm sm:text-base">Limited Time Offer</span>
              </div>

              {/* Experience Badge - All Screens */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-20 sm:h-20 xl:w-24 xl:h-24 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-2xl flex items-center justify-center animate-pulse">
                  <div className="w-16 h-16 sm:w-16 sm:h-16 xl:w-20 xl:h-20 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                    <div className="text-center">
                      <Award className="text-white mx-auto mb-0.5" size={18} />
                      <p className="text-xl xl:text-2xl font-bold text-white leading-none">23+</p>
                      <p className="text-[10px] font-semibold text-white/90 leading-tight">Years</p>
                    </div>
                  </div>
                </div>
                {/* Pulse ring animation */}
                <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Get a Quote You{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                Can't Pass Up
              </span>
              {' '}on Countertops
            </h1>

            <div className="space-y-3 sm:space-y-4">
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400 leading-tight">
                ENJOY 25% OFF ALL HIGH-END COUNTERTOPS
              </p>

              <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
                Elevate your space with stunning natural stone surfaces that combine timeless beauty with exceptional durability—installed by experts who care about perfection.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 pt-2 sm:pt-4">
              <div className="flex gap-2 sm:gap-4">
                <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg border border-white/20 flex-1 text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">100%</p>
                  <p className="text-xs sm:text-sm text-gray-300">Satisfaction</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg border border-white/20 flex-1 text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">Free</p>
                  <p className="text-xs sm:text-sm text-gray-300">Estimates</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg border border-white/20 flex-1 text-center">
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-400">Expert</p>
                  <p className="text-xs sm:text-sm text-gray-300">Installation</p>
                </div>
              </div>
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-3 sm:px-6 py-2 sm:py-3 rounded-lg border border-amber-500/30 text-center">
                <p className="text-sm sm:text-base md:text-lg font-semibold text-amber-400">⚡ Over 500+ Projects Completed in Last 30 Days</p>
              </div>
            </div>

            <button
              onClick={onOpenModal}
              className="lg:hidden w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl text-base sm:text-lg"
            >
              GET FREE QUOTE
            </button>
          </div>

          {/* Right Form - Desktop Only */}
          <div className="hidden lg:block relative">
            <QuoteForm variant="hero" onSubmitSuccess={onQuoteSubmit} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
