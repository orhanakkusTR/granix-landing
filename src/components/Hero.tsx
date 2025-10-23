import { useState, useEffect } from 'react';
import { Sparkles, Award } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

const slides = [
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-1.jpg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-1.jpg'
  },
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-2.jpg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-2.jpg'
  },
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-3.jpg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-3.jpg'
  },
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-4.jpg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/instamarble_design-4.jpg'
  },
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/Slider-1.jpeg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/Slider-1.jpeg'
  },
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/Slider-2.jpeg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/Slider-2.jpeg'
  },
  {
    image: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/Slieder-3.jpeg',
    thumbnail: 'https://granix.free-appointment.com/wp-content/uploads/2025/10/Slieder-3.jpeg'
  }
];

export function Hero({ onOpenModal }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-stone-900">
      {/* Full Screen Image Slider */}
      <div className="relative min-h-[60vh] lg:min-h-[70vh]">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-transparent to-gray-900/90" />

        {/* Slider Dots */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentSlide
                  ? 'w-8 h-2 bg-amber-500'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Section Below Slider */}
      <div className="relative z-10 bg-gradient-to-b from-gray-900/95 to-gray-900 py-8 lg:py-12">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="max-w-[1600px] mx-auto">
            {/* Content */}
            <div className="text-white space-y-3 sm:space-y-4 lg:space-y-5">
              <div className="flex items-center gap-4 lg:gap-6">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/30 px-3 py-1.5 rounded-full">
                  <Sparkles className="text-amber-400" size={16} />
                  <span className="text-amber-400 font-semibold text-sm">Limited Time Offer</span>
                </div>

                {/* Experience Badge */}
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-2xl flex items-center justify-center animate-pulse">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center">
                      <div className="text-center">
                        <Award className="text-white mx-auto mb-0.5" size={16} />
                        <p className="text-xl font-bold text-white leading-none">23+</p>
                        <p className="text-[10px] font-semibold text-white/90 leading-tight">Years</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-full bg-amber-400/30 animate-ping" />
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  25% OFF
                </span>
                {' '}Premium Countertops
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-100 leading-relaxed font-light">
                Transform your kitchen with <span className="text-amber-400 font-semibold">stunning natural stone surfaces</span> that combine timeless beauty with exceptional durability.
              </p>

              <div className="space-y-3">
                <div className="flex gap-2 sm:gap-3">
                  <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-lg border border-white/20 flex-1 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-amber-400">100%</p>
                    <p className="text-xs text-gray-300">Satisfaction</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-lg border border-white/20 flex-1 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-amber-400">Free</p>
                    <p className="text-xs text-gray-300">Estimates</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-3 rounded-lg border border-white/20 flex-1 text-center">
                    <p className="text-xl sm:text-2xl font-bold text-amber-400">Expert</p>
                    <p className="text-xs text-gray-300">Installation</p>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-amber-500/30 text-center">
                  <p className="text-sm sm:text-base font-semibold text-amber-400">⚡ Over 500+ Projects Completed in Last 30 Days</p>
                </div>
              </div>

              <button
                onClick={onOpenModal}
                className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold px-6 py-3 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-xl text-base"
              >
                GET FREE QUOTE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
