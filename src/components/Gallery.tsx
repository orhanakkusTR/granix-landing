import { useState } from 'react';
import { X } from 'lucide-react';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const topImages = [
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/13.jpeg',
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/11.jpeg',
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/10.jpg',
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/5.jpg',
  ];

  const bottomImages = [
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/3.jpg',
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/8.jpg',
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/6.jpg',
    'https://granix.free-appointment.com/wp-content/uploads/2025/10/4.jpg',
  ];

  const allTopImages = [...topImages, ...topImages, ...topImages, ...topImages];
  const allBottomImages = [...bottomImages, ...bottomImages, ...bottomImages, ...bottomImages];

  return (
    <>
      <section className="py-12 md:py-16 bg-gray-50 overflow-hidden">
        <div className="mb-8 md:mb-12 text-center px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Recent</span> Projects
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Excellence in every installation
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {/* Top row - left to right */}
          <div className="relative">
            <div className="flex gap-3 md:gap-6 animate-scroll-faster">
              {allTopImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer active:scale-95 md:hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row - right to left */}
          <div className="relative">
            <div className="flex gap-3 md:gap-6 animate-scroll-reverse-faster">
              {allBottomImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className="flex-shrink-0 w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer active:scale-95 md:hover:scale-105"
                >
                  <img
                    src={image}
                    alt={`Gallery ${index + 5}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-2 md:p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-amber-400 transition-colors z-10 bg-black/50 rounded-full p-2"
          >
            <X size={24} className="md:w-8 md:h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
