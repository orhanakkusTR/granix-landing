import { ArrowRight } from 'lucide-react';

interface ServicesProps {
  onGetQuote: () => void;
}

export function Services({ onGetQuote }: ServicesProps) {
  const services = [
    {
      name: 'Quartz Countertops',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Quartz-Countertops.webp',
      description: (
        <>
          Experience the <strong>perfect blend of beauty and durability</strong> with our premium quartz countertops. Engineered to <strong>resist stains, scratches, and heat</strong> while maintaining <strong>stunning aesthetics</strong> that elevate any space.
        </>
      ),
    },
    {
      name: 'Granite Countertops',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Granite-Countertops.webp',
      description: (
        <>
          Transform your kitchen with <strong>natural granite countertops</strong> that showcase <strong>unique patterns and unmatched strength</strong>. Each slab is <strong>one-of-a-kind</strong>, bringing <strong>timeless elegance</strong> and exceptional value to your home.
        </>
      ),
    },
    {
      name: 'Porcelain Countertops',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Porcelain-Countertops-.webp',
      description: (
        <>
          Discover the <strong>cutting-edge sophistication</strong> of porcelain countertops. <strong>Ultra-resistant to heat, UV rays, and chemicals</strong>, these surfaces offer <strong>modern luxury</strong> with <strong>minimal maintenance</strong> and maximum style.
        </>
      ),
    },
    {
      name: 'Fireplace Walls',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Fireplace-Walls.webp',
      description: (
        <>
          Create a <strong>stunning focal point</strong> with custom stone fireplace walls. Our <strong>expert craftsmanship</strong> transforms ordinary fireplaces into <strong>breathtaking architectural features</strong> that become the heart of your living space.
        </>
      ),
    },
    {
      name: 'Luxury Kitchen Remodeling',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Luxury-Kitchen-Remodeling.webp',
      description: (
        <>
          Reimagine your <strong>dream kitchen</strong> with our comprehensive remodeling services. From <strong>concept to completion</strong>, we deliver <strong>exceptional craftsmanship</strong> and attention to detail that <strong>exceeds expectations</strong> every time.
        </>
      ),
    },
    {
      name: 'Commercial Surfaces',
      image: 'https://granix.free-appointment.com/wp-content/uploads/2025/09/Commercial-Surfaces.webp',
      description: (
        <>
          Elevate your business environment with <strong>professional-grade stone surfaces</strong>. Built to <strong>withstand high-traffic demands</strong> while maintaining <strong>impeccable appearance</strong>, perfect for restaurants, hotels, and offices.
        </>
      ),
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
              <div className="relative overflow-hidden aspect-[4/3] cursor-pointer">
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

                {/* Description overlay on hover/touch */}
                <div className="absolute inset-0 bg-black/95 opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300 p-8 flex items-center justify-center">
                  <p className="text-white text-lg leading-relaxed text-center font-normal">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="p-6">
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
