import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onGetQuote: () => void;
}

export function Services({ onGetQuote }: ServicesProps) {
  const services = [
    {
      name: 'Quartz Countertops',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Quartz-Countertops.webp',
      description: 'Experience the perfect blend of beauty and durability with our premium quartz countertops. Engineered to resist stains, scratches, and heat while maintaining stunning aesthetics that elevate any space.',
    },
    {
      name: 'Granite Countertops',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Granite-Countertops.webp',
      description: 'Transform your kitchen with natural granite countertops that showcase unique patterns and unmatched strength. Each slab is one-of-a-kind, bringing timeless elegance and exceptional value to your home.',
    },
    {
      name: 'Porcelain Countertops',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Porcelain-Countertops-.webp',
      description: 'Discover the cutting-edge sophistication of porcelain countertops. Ultra-resistant to heat, UV rays, and chemicals, these surfaces offer modern luxury with minimal maintenance and maximum style.',
    },
    {
      name: 'Fireplace Walls',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Fireplace-Walls.webp',
      description: 'Create a stunning focal point with custom stone fireplace walls. Our expert craftsmanship transforms ordinary fireplaces into breathtaking architectural features that become the heart of your living space.',
    },
    {
      name: 'Luxury Kitchen Remodeling',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Luxury-Kitchen-Remodeling.webp',
      description: 'Reimagine your dream kitchen with our comprehensive remodeling services. From concept to completion, we deliver exceptional craftsmanship and attention to detail that exceeds expectations every time.',
    },
    {
      name: 'Commercial Surfaces',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Commercial-Surfaces.webp',
      description: 'Elevate your business environment with professional-grade stone surfaces. Built to withstand high-traffic demands while maintaining impeccable appearance, perfect for restaurants, hotels, and offices.',
    },
  ];

  return (
    <section id="services" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Premium</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your space with expertly crafted stone surfaces
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {service.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <button
                  onClick={onGetQuote}
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 group/btn shadow-md"
                >
                  Get Free Quote
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
